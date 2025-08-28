"use client";

import 
{useState,
useEffect} from "react";
import Image from "next/image";

export default function Home(){
  const [imageSrc, setImageSrc] = useState("/images/sembol.jpg");
  const [shaking, setShaking] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("zebani-sound") as HTMLAudioElement;
    if(!audio) return;
    audio.onended = () => {
      setImageSrc("/images/sembol.jpg");
      setShaking(false);
      setStatus(false);
    };
  }, []);

  const callZebani = () => {
    const audio = document.getElementById("zebani-sound") as HTMLAudioElement;
    audio.currentTime = 0;
    audio.play();
    setImageSrc("/images/zebani.jpg");
    setShaking(true);
    setStatus(true);
  };

  return(
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex flex-1 flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-6">
          {status ? "İşte Zebani zuhahaha" : "Zebani Çağırmak İçin Tıkla!"}
      </h1>
      
      <Image
        src={imageSrc}
        alt="Zebani"
        width={600} 
        height={600}
        className={`cursor-pointer max-w-[60%] transition-transform hover:scale-105 ${shaking ? "animate-shake" : ""}`}
        onClick={callZebani}
      />

      <audio id="zebani-sound" src="/audios/zebani_come.mp3"></audio>
      </main>

      <footer className="bg-gray-900 text-center py-10">
        <h3 className="text-lg">geyik amaçlıdır :p</h3>
        <p className="text-gray-400 text-sm mt-2">
          © 2024-2025 callZebani. Tüm Hakları Saklıdır tsh-hehehehe
        </p>
      </footer>
    </div>
  );
}
