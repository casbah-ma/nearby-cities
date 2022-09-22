// Refresh icon

const RefreshIcon = ({ width, height, color, className, style }) => {
  return (
    <svg
      className={className}
      style={style}
      width={width || "17"}
      height={height || "14"}
      viewBox="0 0 17 14"
      fill={color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.16406 1.66504V5.66506H5.16408"
        stroke={color || "#0D2A3F"}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8321 12.3336V8.33362H11.832"
        stroke={color || "#0D2A3F"}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1589 4.99947C13.8207 4.04375 13.2459 3.18927 12.4882 2.51577C11.7304 1.84227 10.8144 1.3717 9.82558 1.14797C8.83678 0.924237 7.80741 0.954638 6.83353 1.23633C5.85965 1.51803 4.973 2.04184 4.25631 2.75888M15.8327 8.33368L12.7385 11.2411C12.0219 11.9582 11.1352 12.482 10.1613 12.7637C9.18744 13.0454 8.15807 13.0758 7.16927 12.852C6.18046 12.6283 5.26444 12.1577 4.50669 11.4842C3.74893 10.8107 3.17414 9.95625 2.83594 9.00053"
        stroke={color || "#0D2A3F"}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RefreshIcon;
