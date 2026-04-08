interface WavyDividerProps {
    color?: string;
    flip?: boolean;
    className?: string;
}

export function WavyDivider({
    color = "#FAFBFC",
    flip = false,
    className = "",
}: WavyDividerProps) {
    return (
        <div
            className={`wavy-divider ${className}`}
            style={{ transform: flip ? "rotate(180deg)" : undefined }}
        >
            <svg
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
                    fill={color}
                />
            </svg>
        </div>
    );
}
