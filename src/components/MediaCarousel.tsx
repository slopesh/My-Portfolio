import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function MediaCarousel({ media }: { media: string[] }) {
    const [currentMedia, setCurrentMedia] = useState(0)
    const refs = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        refs.current = refs.current.slice(0, media.length)
    }, [media.length])

    const scrollToMedia = (i: number) => {
        setCurrentMedia(i)

        refs.current[i]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        })
    }

    const nextMedia = () => {
        scrollToMedia((currentMedia + 1) % media.length)
    }

    const previousMedia = () => {
        scrollToMedia((currentMedia - 1 + media.length) % media.length)
    }

    return (
        <div className="scrollbar flex w-full snap-x snap-mandatory overflow-x-auto rounded-lg media-carousel">
            {media.length > 1 && <CarouselControl isLeft handleNext={nextMedia} handlePrevious={previousMedia} />}
            {media.map((src, i) => (
                <div
                    ref={(el) => { if (el) refs.current[i] = el }}
                    key={i}
                    className="flex w-full flex-shrink-0 snap-center justify-center rounded-lg"
                >
                    {(() => {
                        if (src.includes('.mp4')) {
                            return (
                                <video
                                    src={src}
                                    muted
                                    loop
                                    controls
                                />
                            );
                        }

                        if (src.includes('youtube.com') || src.includes('youtu.be')) {
                            let videoId;
                            if (src.includes('youtube.com/watch')) {
                                try {
                                    videoId = new URL(src).searchParams.get('v');
                                } catch (e) {
                                    // invalid url
                                }
                            } else if (src.includes('youtu.be')) {
                                try {
                                    videoId = new URL(src).pathname.substring(1);
                                } catch (e) {
                                    // invalid url
                                }
                            }

                            if (videoId) {
                                return (
                                    <iframe
                                        className="w-full aspect-video"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                );
                            }
                        }

                        return (
                            <img
                                src={src}
                                alt={`Media ${i}`}
                            />
                        );
                    })()}
                </div>
            ))}
            {media.length > 1 && <CarouselControl handleNext={nextMedia} handlePrevious={previousMedia} />}
        </div>
    )
}

function CarouselControl({ isLeft = false, handleNext, handlePrevious }: { isLeft?: boolean, handleNext: () => void, handlePrevious: () => void }) {
    return (
        <button
            type="button"
            onClick={!isLeft ? handleNext : handlePrevious}
            className={`absolute z-10 flex h-8 w-8 items-center justify-center self-center rounded-full bg-neutral-700 text-sm text-white opacity-60 md:text-2xl ${isLeft ? 'md:left-8 left-6' : 'md:right-8 right-6'}`}
        >
            {isLeft ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </button>
    )
}