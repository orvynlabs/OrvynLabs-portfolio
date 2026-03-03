'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const bigBallRef = useRef<SVGSVGElement>(null);
    const smallBallRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const bigBall = bigBallRef.current;
        const smallBall = smallBallRef.current;

        if (!bigBall || !smallBall) return;

        // Move the cursor
        const onMouseMove = (e: MouseEvent) => {
            // gsap.to instead of TweenMax.to
            gsap.to(bigBall, {
                x: e.clientX - 15,
                y: e.clientY - 15,
                duration: 0.4,
                ease: 'power3.out'
            });
            gsap.to(smallBall, {
                x: e.clientX - 5,
                y: e.clientY - 7,
                duration: 0.1,
                ease: 'power3.out'
            });
        };

        // Hover an element
        const onMouseHover = () => {
            gsap.to(bigBall, {
                scale: 4,
                duration: 0.3
            });
        };

        const onMouseHoverOut = () => {
            gsap.to(bigBall, {
                scale: 1,
                duration: 0.3
            });
        };

        document.body.addEventListener('mousemove', onMouseMove);

        // Setup event listeners for existing hoverables
        const addListeners = () => {
            // Automatically target anything with .hoverable, tags a, or button
            const hoverables = document.querySelectorAll('.hoverable, a, button');
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseHover);
                el.removeEventListener('mouseleave', onMouseHoverOut);
                el.addEventListener('mouseenter', onMouseHover);
                el.addEventListener('mouseleave', onMouseHoverOut);
            });
        };

        addListeners();

        // Use MutationObserver if DOM changes to re-add listeners
        const observer = new MutationObserver(() => {
            addListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.body.removeEventListener('mousemove', onMouseMove);
            observer.disconnect();
            const hoverables = document.querySelectorAll('.hoverable, a, button');
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseHover);
                el.removeEventListener('mouseleave', onMouseHoverOut);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed inset-0 z-[1000] mix-blend-difference hidden md:block"
            style={{ isolation: 'isolate' }}
        >
            <svg
                ref={bigBallRef}
                className="absolute top-0 left-0"
                height="30"
                width="30"
            >
                <circle cx="15" cy="15" r="15" fill="#f7f8fa" />
            </svg>
            <svg
                ref={smallBallRef}
                className="absolute top-0 left-0"
                height="10"
                width="10"
            >
                <circle cx="5" cy="5" r="4" fill="#f7f8fa" />
            </svg>
        </div>
    );
}
