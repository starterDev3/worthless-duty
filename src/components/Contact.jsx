import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {
useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', {type: 'words'});

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top center',
            
        },
        ease: 'power1.inOut'
    })

    timeline
    .from(titleSplit.words, {
        opacity: 0, yPercent: 100, stagger: 0.02
    })
    .from('#contact h3, #contact p', {
        opacity: 0, yPercent: 100, stagger: 0.02
    })
    .to('#f-right-leaf', {
        y: '-50', duration: 1, ease: 'power1.inOut'
    })
        .to('#f-left-leaf', {
        y: '-50', duration: 1, ease: 'power1.inOut'
    }, '<')
})


    return (
       <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="leaf=right" id="f-right-leaf"/>
                <img src="/images/footer-left-leaf.png" alt="leaf=left" id="f-left-leaf"/>

                <div className="content">
                   <h2>HAHHAHAHAHAHHA</h2>

                <div>
                    <h3>if you're reading this, your device is going to explode in approximately 2 weeks, 5 days, 3 hours, 33 minutes, and 57 seconds.</h3>
                <p>:INSERT ADDRESS HERE OR SOMETHING:</p>
                </div>

                <div>
                    <h3>dont contact us</h3>
                    <p>(555) 368-5857</p>
                    <p>no@nonono.com</p>
                </div>

                <div>
                    <h3>Closed All Day 24 Hours</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                           {time.day} : {time.time}
                        </p>
                    ))}
                </div>
                <div>
                    <h3>sosoCIAl</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                     <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                     >
                        <img src={social.icon}/>
                     </a>
                        ))}
                    </div>
                </div>
                </div>

       </footer>
    )
}

export default Contact;