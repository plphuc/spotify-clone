import classNames from "classnames";

export const LogoIcon = ({ className }) => (
    <svg viewBox="0 0 1134 340" className={classNames(className)} width="100%" height="100%">
        <title>Spotify</title>
        <path
            fill="currentColor"
            d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
        ></path>
    </svg>
);
export const ForwardArrowIcon = ({
    height = "16px",
    width = "16px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={classNames(className)}
        viewBox="0 0 16 16"
        data-encore-id="icon"
    >
        <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
    </svg>
);

export const BackArrowIcon = ({
    width = "16px",
    height = "16px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={classNames(className)}
        viewBox="0 0 16 16"
        data-encore-id="icon"
    >
        <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
    </svg>
);

export const PersonIcon = ({ width = "16px", height = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        data-testid="user-icon"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={classNames(className)}
    >
        <path d="M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"></path>
    </svg>
);

export const DownloadIcon = ({
    width = "16px",
    height = "16px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={classNames(className)}
    >
        <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
    </svg>
);

export const HomeIcon = ({ width = "24px", height = "24px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={classNames(className)}
        viewBox="0 0 24 24"
        data-encore-id="icon"
        fill="currentColor"
    >
        <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
    </svg>
);

export const HomeActiveIcon = ({
    width = "24px",
    height = "24px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={classNames(className)}
        viewBox="0 0 24 24"
        data-encore-id="icon"
        fill="currentColor"
    >
        <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
    </svg>
);

export const SearchIcon = ({ width = "24px", height = "24px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={className}
        viewBox="0 0 24 24"
        data-encore-id="icon"
        fill="currentColor"
    >
        <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
    </svg>
);

export const SearchActiveIcon = ({
    width = "24px",
    height = "24px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={className}
        viewBox="0 0 24 24"
        data-encore-id="icon"
        fill="currentColor"
    >
        <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path>
        <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
    </svg>
);

export const PlaylistIcon = ({
    width = "24px",
    height = "24px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={className}
        viewBox="0 0 24 24"
        data-encore-id="icon"
        fill="currentColor"
    >
        <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
    </svg>
);

export const PlaylistActiveIcon = ({
    width = "24px",
    height = "24px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={className}
        viewBox="0 0 24 24"
        data-encore-id="icon"
        fill="currentColor"
    >
        <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
    </svg>
);

export const AddIcon = ({ width = "12px", height = "12px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
        fill="black"
    >
        <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
    </svg>
);

export const LikedSongsIcons = ({
    width = "12px",
    height = "12px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
        fill="currentColor"
    >
        <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
    </svg>
);

export const GlobalIcon = ({ width = "16px", height = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z"></path>
    </svg>
);

export const LoveIcon = ({
    width = "16px",
    height = "16px",
    className,
    fill = "currentColor",
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
        fill={fill}
    >
        <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
    </svg>
);

export const PicInPicIcon = ({
    height = "16px",
    width = "16px",
    className,
}) => (
    <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g fill="currentColor" fillRule="evenodd">
            <path
                d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                fillRule="nonzero"
            ></path>
            <path d="M10 8h4v3h-4z"></path>
        </g>
    </svg>
);

export const ShuffleIcon = ({ width = "16px", height = "16px", className }) => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
        <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
    </svg>
);

export const PrevIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
    </svg>
);

export const PlayIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
    </svg>
);

export const PauseIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg>
);

export const NextIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
    </svg>
);

export const RepeatIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
    </svg>
);

export const MicIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
    </svg>
);

export const QueueIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
    </svg>
);

export const DeviceIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="presentation"
        height={height}
        width={width}
        aria-hidden="true"
        className={className}
        viewBox="0 0 16 16"
        data-encore-id="icon"
    >
        <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
        <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
);

export const SpeakerIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="presentation"
        height={height}
        width={width}
        aria-hidden="true"
        aria-label="Volume high"
        id="volume-icon"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
        <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
    </svg>
);

export const ArrowDownIcon = ({
    height = "16px",
    width = "16px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={className}
        viewBox="0 0 16 16"
        data-encore-id="icon"
    >
        <path d="m14 6-6 6-6-6h12z"></path>
    </svg>
);

export const ArrowUpIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={className}
        viewBox="0 0 16 16"
        data-encore-id="icon"
    >
        <path d="M14 10 8 4l-6 6h12z"></path>
    </svg>
);

export const TickIcon = ({ height = "16px", width = "16px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className={className}
    >
        <path d="M15.53 2.47a.75.75 0 0 1 0 1.06L4.907 14.153.47 9.716a.75.75 0 0 1 1.06-1.06l3.377 3.376L14.47 2.47a.75.75 0 0 1 1.06 0z"></path>
    </svg>
);

export const BlindIcon = ({ height = "24px", width = "24px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-encore-id="icon"
        className={className}
        fill="currentColor"
    >
        <path d="M22.207 2.824a1 1 0 1 0-1.414-1.414L17.15 5.053C15.621 4.363 13.92 4 12 4 8.671 4 5.996 5.091 3.742 7.089c-.896.794-2.3 2.353-3.381 4.453L.125 12l.236.458c1.082 2.1 2.485 3.659 3.381 4.453.278.246.562.479.853.697L1.793 20.41a1 1 0 1 0 1.414 1.414l3.126-3.126.003.002 1.503-1.503-.004-.001 1.73-1.73.004.001 1.567-1.567h-.004l4.68-4.681.001.004 1.595-1.595-.002-.003.11-.109.002.002 1.444-1.444-.003-.002 3.248-3.248zM14.884 7.32l-5.57 5.57A4.035 4.035 0 0 1 8.113 10c0-2.23 1.761-4 3.886-4 1.137 0 2.17.506 2.884 1.319zM7.9 14.304l-1.873 1.873a11.319 11.319 0 0 1-.957-.763C4.396 14.818 3.3 13.621 2.387 12c.913-1.62 2.01-2.818 2.683-3.414.519-.46 1.061-.863 1.634-1.204A6.073 6.073 0 0 0 6.113 10c0 1.681.682 3.21 1.786 4.304zm11.568-5.2 1.415-1.415a16.503 16.503 0 0 1 2.756 3.853l.236.458-.236.458c-1.082 2.1-2.485 3.659-3.381 4.453C18.004 18.908 15.328 20 12 20a13.22 13.22 0 0 1-3.08-.348l1.726-1.726c.435.05.886.074 1.354.074 2.833 0 5.037-.907 6.931-2.586.674-.596 1.77-1.793 2.683-3.414a14.515 14.515 0 0 0-2.146-2.896z"></path>
        <path d="M17.843 10.729c-.328 2.755-2.494 4.956-5.24 5.24l5.24-5.24z"></path>
    </svg>
);

export const EyeIcon = ({ height = "24px", width = "24px", className }) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-encore-id="icon"
        className={className}
        fill="currentColor"
    >
        <path d="M6.703 7.382A6.073 6.073 0 0 0 6.113 10c0 3.292 2.614 6 5.887 6 3.273 0 5.886-2.708 5.886-6 0-.936-.211-1.825-.589-2.618.573.341 1.115.744 1.634 1.204.674.596 1.77 1.793 2.683 3.414-.913 1.62-2.01 2.818-2.683 3.414C17.037 17.093 14.833 18 12 18s-5.037-.907-6.931-2.586c-.674-.596-1.77-1.793-2.683-3.414.913-1.62 2.01-2.818 2.683-3.414.519-.46 1.061-.863 1.634-1.204zM12 4C8.671 4 5.996 5.091 3.742 7.089c-.896.794-2.3 2.353-3.381 4.453L.125 12l.236.458c1.082 2.1 2.485 3.659 3.381 4.453C5.996 18.908 8.672 20 12 20c3.329 0 6.004-1.091 8.258-3.089.896-.794 2.3-2.353 3.38-4.453l.237-.458-.236-.458c-1.082-2.1-2.485-3.659-3.381-4.453C18.004 5.09 15.328 4 12 4zm0 2c2.125 0 3.886 1.77 3.886 4S14.125 14 12 14s-3.886-1.77-3.886-4S9.875 6 12 6z"></path>
    </svg>
);

export const FbWhiteIcon = ({ width = "24px", height = "24px", className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width={width} height={height} fill="url(#pattern0)"></rect>
        <defs>
            <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
            >
                <use href="#image0_213_540" transform="scale(0.00769231)"></use>
            </pattern>
            <image
                id="image0_213_540"
                width="130"
                height="130"
                href="data:image/png;base64,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"
            ></image>
        </defs>
    </svg>
);

export const GoogleIcon = ({ width = "24px", height = "24px", className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.6 12.2272C21.6 11.5181 21.5364 10.8363 21.4182 10.1818H12V14.0499H17.3818C17.15 15.2999 16.4455 16.359 15.3864 17.0681V19.5772H18.6182C20.5091 17.8363 21.6 15.2727 21.6 12.2272Z"
            fill="#4285F4"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21.9999C14.7 21.9999 16.9636 21.1044 18.6181 19.5772L15.3863 17.0681C14.4909 17.6681 13.3454 18.0226 12 18.0226C9.39542 18.0226 7.19087 16.2635 6.40451 13.8999H3.0636V16.4908C4.70905 19.759 8.09087 21.9999 12 21.9999Z"
            fill="#34A853"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.40455 13.9001C6.20455 13.3001 6.09091 12.6592 6.09091 12.0001C6.09091 11.341 6.20455 10.7001 6.40455 10.1001V7.50916H3.06364C2.38636 8.85916 2 10.3864 2 12.0001C2 13.6137 2.38636 15.141 3.06364 16.491L6.40455 13.9001Z"
            fill="#FBBC05"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 5.97727C13.4681 5.97727 14.7863 6.48182 15.8227 7.47273L18.6909 4.60455C16.9591 2.99091 14.6954 2 12 2C8.09087 2 4.70905 4.24091 3.0636 7.50909L6.40451 10.1C7.19087 7.73636 9.39542 5.97727 12 5.97727Z"
            fill="#EA4335"
        ></path>
    </svg>
);

export const DownArrowIcon = ({
    width = "16px",
    height = "16px",
    className,
}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        className={className}
        viewBox="0 0 16 16"
        data-encore-id="icon"
        fill="currentColor"
    >
        <path d="M.47 4.97a.75.75 0 0 1 1.06 0L8 11.44l6.47-6.47a.75.75 0 1 1 1.06 1.06L8 13.56.47 6.03a.75.75 0 0 1 0-1.06z"></path>
    </svg>
);

export const WarningIcon = ({width="16px", height="16px", className}) => (
    <svg
        role="img"
        height={height}
        width={width}
        aria-hidden="true"
        aria-label="Error:"
        className={className}
        viewBox="0 0 16 16"
        data-encore-id="icon"
        fill="currentColor"
    >
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.25-5v7h1.5V3h-1.5zm0 8.526v1.5h1.5v-1.5h-1.5z"></path>
    </svg>
);
