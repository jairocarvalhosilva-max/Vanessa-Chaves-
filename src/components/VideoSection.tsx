import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Instagram, ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/content';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const userPausedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay in modern browsers requires muted audio
    video.muted = isMuted;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            // Autoplay automatically when entering screen unless user explicitly paused
            if (!userPausedRef.current) {
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch((err) => {
                    console.log("Autoplay attempt handled:", err);
                    // If blocked due to audio, force mute and retry
                    video.muted = true;
                    setIsMuted(true);
                    video.play().catch(() => {});
                  });
              }
            }
          } else if (!entry.isIntersecting) {
            // Pause automatically when scrolled out of view to preserve resources
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75],
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    } else {
      observer.observe(video);
    }

    return () => {
      observer.disconnect();
    };
  }, [isMuted]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      userPausedRef.current = true;
    } else {
      userPausedRef.current = false;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Playback error:", err);
        });
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const enableSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    setIsMuted(false);
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section id="video" className="py-20 lg:py-28 bg-[#F4EFEA]/60 relative overflow-hidden border-y border-[#E8D8CC]">
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#E8D8CC]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#CFAFA4]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Persuasion */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[11px] font-bold tracking-[0.15em] rounded-full uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#5B4942]" />
              <span>O Pós-Operatório na Prática</span>
            </div>

            <h2
              id="video-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5B4942] tracking-tight leading-tight"
            >
              O resultado não termina na cirurgia.{' '}
              <span className="italic font-light text-[#7A6A63]">Ele começa no pós-operatório.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#7A6A63] leading-relaxed">
              Você pode investir na melhor equipe médica e no hospital mais avançado. Mas a definição, o contorno suave e a tranquilidade da sua recuperação dependem diretamente dos cuidados no pós-cirúrgico.
            </p>

            {/* Core insights from Vanessa's video */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E8D8CC] shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#CFAFA4] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B4942]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#5B4942]">
                    Prevenção ativa de fibroses e ondulações
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7A6A63] leading-relaxed mt-0.5">
                    O tecido cicatricial precisa de estímulos específicos nos momentos certos para não enrijecer nem comprometer o contorno corporal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E8D8CC] shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#CFAFA4] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#5B4942]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#5B4942]">
                    Menos dor e controle seguro do inchaço
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7A6A63] leading-relaxed mt-0.5">
                    Drenagem linfática manual técnica e precisa, sem agressões ao tecido operado, respeitando a sensibilidade do seu organismo.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Quote Box */}
            <div className="p-5 rounded-2xl bg-white/80 border border-[#E8D8CC] border-l-4 border-l-[#5B4942]">
              <p className="font-serif italic text-base sm:text-lg text-[#5B4942]">
                &ldquo;Resultado não é sorte. É cuidado! O pós-operatório não é um detalhe — é o que sustenta todo o seu investimento.&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B4942]">Vanessa Chaves</span>
                <span className="text-xs text-[#7A6A63]">• Imperatriz - MA</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                id="video-whatsapp-cta"
                href={getWhatsAppUrl("Olá, Vanessa! Assisti ao seu vídeo no site e gostaria de agendar meu acompanhamento pós-operatório.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-[0_6px_20px_rgba(37,211,102,0.35)] active:scale-[0.98]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.807 1.594 5.397l-.997 3.646 3.892-.942zm11.366-7.327c-.314-.157-1.858-.917-2.148-1.022-.289-.104-.5-.157-.71.157-.21.314-.813 1.022-.996 1.231-.183.209-.367.235-.68.079-.314-.157-1.328-.489-2.53-1.562-.936-.836-1.566-1.868-1.749-2.182-.183-.314-.02-.485.137-.641.141-.14.314-.367.471-.55.157-.183.209-.314.314-.524.105-.21.052-.393-.026-.55-.079-.157-.71-1.711-.973-2.34-.256-.611-.516-.529-.71-.539-.183-.01-.393-.012-.603-.012s-.55.079-.838.393c-.289.314-1.101 1.074-1.101 2.62s1.127 3.038 1.284 3.248c.157.209 2.218 3.388 5.373 4.75.751.324 1.336.518 1.792.663.753.239 1.439.206 1.982.125.604-.09 1.858-.759 2.121-1.492.262-.733.262-1.362.183-1.492-.08-.131-.289-.209-.603-.366z"/>
                </svg>
                <span>Agendar no WhatsApp</span>
              </a>

              <a
                id="video-instagram-link"
                href={CLINIC_INFO.reelVideoUrl || "https://www.instagram.com/reel/DW2OjslAPbM/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF8F5] text-[#5B4942] border border-[#E8D8CC] px-6 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Ver no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Custom Vertical Video Card (Reel player) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div ref={containerRef} className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer ornamental border */}
              <div className="absolute -inset-3 bg-gradient-to-b from-[#E8D8CC] via-[#CFAFA4]/40 to-transparent rounded-[36px] -z-10 blur-xs" />

              <div
                id="video-player-card"
                className="relative bg-black rounded-[32px] overflow-hidden border border-[#E8D8CC] shadow-2xl group select-none aspect-[9/16]"
              >
                {/* HTML5 Native Video with Autoplay when in view */}
                <video
                  ref={videoRef}
                  id="vanessa-video-element"
                  src="/videos/vanessa_reel.mp4"
                  poster="/videos/vanessa_reel_cover.jpg"
                  playsInline
                  muted={isMuted}
                  loop
                  autoPlay
                  preload="auto"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onClick={togglePlay}
                  className="w-full h-full object-cover cursor-pointer"
                />

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold text-white tracking-wide">
                      {CLINIC_INFO.instagramHandle}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                    className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 active:scale-95 transition-all text-xs font-medium shadow-md cursor-pointer"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-[#F3C5B5]" />
                        <span className="text-[11px]">Sem som</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-[11px]">Áudio ativo</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Big Center Play Overlay (only when paused) */}
                {!isPlaying && (
                  <button
                    type="button"
                    id="video-play-overlay-button"
                    onClick={togglePlay}
                    aria-label="Reproduzir vídeo de Vanessa Chaves"
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all cursor-pointer group-hover:bg-black/25 z-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/95 text-[#5B4942] flex items-center justify-center shadow-2xl pl-1 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-9 h-9 fill-[#5B4942]" />
                    </div>
                    <span className="mt-4 px-4 py-1.5 rounded-full bg-black/80 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-sm border border-white/20 shadow-md">
                      Reproduzir Vídeo
                    </span>
                  </button>
                )}

                {/* Unmute floating banner when playing muted */}
                {isPlaying && isMuted && (
                  <div className="absolute top-16 left-4 right-4 flex justify-center z-20 pointer-events-none">
                    <button
                      type="button"
                      onClick={enableSound}
                      className="pointer-events-auto inline-flex items-center gap-2 bg-[#5B4942]/90 hover:bg-[#5B4942] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-md border border-white/25 active:scale-95 transition-all cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-[#F3C5B5] animate-bounce" />
                      <span>Toque para ativar o áudio</span>
                    </button>
                  </div>
                )}

                {/* Hover Pause button indicator when playing */}
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    <div className="w-14 h-14 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-xs border border-white/20">
                      <Pause className="w-6 h-6 fill-white" />
                    </div>
                  </div>
                )}

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-20">
                  <p className="text-white font-medium text-xs sm:text-sm line-clamp-2 drop-shadow-sm mb-2">
                    &ldquo;Você pode investir caro na cirurgia... o resultado começa no pós-operatório.&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-white/80">
                    <span>Imperatriz - MA</span>
                    <a
                      id="video-direct-reel-link"
                      href={CLINIC_INFO.reelVideoUrl || "https://www.instagram.com/reel/DW2OjslAPbM/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center gap-1 font-bold text-white hover:text-[#CFAFA4] transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                      Abrir Reel
                    </a>
                  </div>
                </div>
              </div>

              {/* Caption helper below video */}
              <div className="text-center text-xs text-[#7A6A63] mt-3 flex items-center justify-center gap-2">
                {isPlaying ? (
                  isMuted ? (
                    <button
                      type="button"
                      onClick={enableSound}
                      className="inline-flex items-center gap-1.5 text-[#5B4942] font-semibold hover:underline cursor-pointer"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Vídeo em reprodução automática • Clique para ativar áudio</span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Reproduzindo com áudio</span>
                    </span>
                  )
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <span>Vídeo pausado • Clique para assistir</span>
                  </span>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
