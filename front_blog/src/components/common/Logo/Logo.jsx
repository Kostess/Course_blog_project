import {LinkLogo} from "@ui/Link/Link.jsx";

export const Logo = () => {
    return (
        <LinkLogo href="/">
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#4CAF50" stopOpacity="0"/>
                    </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#glowGradient)">
                    <animate attributeName="r" dur="3s" repeatCount="indefinite" values="45;50;45"/>
                </circle>
                <circle cx="50" cy="50" r="40" stroke="#4CAF50" strokeWidth="7"/>
                <line x1="50" y1="20" x2="50" y2="80" stroke="#4CAF50" strokeWidth="4"/>
                <line x1="20" y1="50" x2="80" y2="50" stroke="#4CAF50" strokeWidth="4"/>
                <line x1="32" y1="32" x2="68" y2="68" stroke="#4CAF50" strokeWidth="4"/>
                <line x1="32" y1="68" x2="68" y2="32" stroke="#4CAF50" strokeWidth="4"/>
            </svg>
            <span className="text-5xl">
                TechWorld
            </span>
        </LinkLogo>
    )
}