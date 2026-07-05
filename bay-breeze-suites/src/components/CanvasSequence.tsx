import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 191;
const FOLDER_PATH = '/frames/images/';
const FRAME_START_OFFSET = 0;

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      let loaded = 0;
      const loadedImages: HTMLImageElement[] = [];
      
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const frameNum = (i + FRAME_START_OFFSET).toString().padStart(6, '0');
        img.src = `${FOLDER_PATH}frame_${frameNum}.png`;
        
        await new Promise<void>((resolve) => {
          img.onload = () => {
            loadedImages.push(img);
            loaded++;
            setImagesLoaded(loaded);
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load frame ${frameNum}`);
            resolve(); // Resolve anyway to continue
          };
        });
      }
      
      imagesRef.current = loadedImages;
      
      // Initial draw
      if (loadedImages.length > 0 && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.drawImage(loadedImages[0], 0, 0, 1920, 1080);
        }
      }
    };
    
    loadImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll fraction
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      
      const scrollFraction = scrollTop / maxScrollTop;
      
      // Calculate target frame
      const targetFrame = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(scrollFraction * FRAME_COUNT))
      );
      
      targetFrameRef.current = targetFrame;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Animation loop for Lerp
    const render = () => {
      // Lerp function: current = current + (target - current) * ease
      currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * 0.1;
      
      // Determine the frame to draw (round to nearest index)
      const frameIndex = Math.floor(currentFrameRef.current);
      
      if (canvasRef.current && imagesRef.current.length === FRAME_COUNT) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx && imagesRef.current[frameIndex]) {
          ctx.drawImage(imagesRef.current[frameIndex], 0, 0, 1920, 1080);
        }
      }
      
      requestRef.current = requestAnimationFrame(render);
    };
    
    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Loading overlay */}
      {imagesLoaded < FRAME_COUNT && (
        <div className="fixed inset-0 bg-ocean z-50 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-heading mb-4">Bay Breeze Suites</h2>
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300" 
              style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%` }}
            />
          </div>
          <p className="mt-4 font-body opacity-70">Loading sequence... {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%</p>
        </div>
      )}
      
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
    </>
  );
}
