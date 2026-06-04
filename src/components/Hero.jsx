import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

import react from 'react';
import { useRef } from 'react';


const Hero = () => {

    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767});

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            opacity: 0,
            stagger: 0.04,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
              yPercent: 100,
                duration: 1.8,
                ease: 'expo.out',
                stagger: 0.1,
                delay: 1,
        });


        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })

        .to('.right-leaf', { y:200 }, 0)
        .to('.left-leaf', { y: 200 }, 0)


        const startValue =  isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,

            }
        });


        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            })
        }
    }, []);

    return (
        <>
        <section id="hero" className="noisy">
<h1 className="title">The The The</h1>


        <img 
        src="/images/hero-left-leaf.png" 
        alt="Left Leaf" 
        className="left-leaf"
        />

                <img 
        src="/images/hero-right-leaf.png" 
        alt="Right Leaf" 
        className="right-leaf"
        />

        <div className="body">
           <div className="content">
             <div className="space-y-5 hidden md:block">
                 <p>btw no</p>
                 <p className="subtitle">
                    man i dont know what im doing at this point 💀
                 </p>
             </div>
             <div className="view-cocktails">
                <p className="subtitle">you are the reason earth is in shambles right now ez (also notice how awfully AI generated the icon is 😭)</p>
            <a href="#cocktails">View Cockroach- I mean Cocktails</a>
             </div>
           </div>
        </div>
                </section>

<div className="video absolute inset-0">
<video
ref={videoRef}
src="/videos/output.mp4"
muted
playsInline
preload="auto"

/>
</div>
        </>
    )
}

export default Hero;