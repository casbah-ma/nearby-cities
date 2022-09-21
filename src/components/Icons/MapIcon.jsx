// Map icon

const MapIcon = ({ width, height, color, className, style }) => {
  return (
    <svg
      width={width || "20"}
      height={height || "22"}
      viewBox="0 0 20 22"
      fill={color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8488 8.7752L16.0768 7.9328C16.2682 7.03014 16.2561 6.09617 16.0413 5.19878C15.8266 4.30139 15.4145 3.46313 14.8352 2.74492C14.2559 2.02671 13.5238 1.4466 12.6922 1.04675C11.8606 0.646896 10.9504 0.437353 10.0277 0.433347C9.10496 0.429342 8.19294 0.630974 7.3579 1.02359C6.52286 1.41621 5.78579 1.98994 5.20026 2.70309C4.61473 3.41625 4.19545 4.2509 3.97289 5.14639C3.75033 6.04188 3.73009 6.97571 3.91364 7.88L1.13924 8.78C1.01898 8.81949 0.914285 8.89601 0.840141 8.99861C0.765996 9.1012 0.726199 9.22462 0.726442 9.3512V20.4896C0.726259 20.5845 0.748611 20.6782 0.791659 20.7628C0.834706 20.8474 0.897221 20.9206 0.974066 20.9764C1.05091 21.0321 1.13989 21.0689 1.23369 21.0835C1.32749 21.0982 1.42344 21.0904 1.51364 21.0608L5.63204 19.7072L9.76004 21.512C9.83591 21.5443 9.9176 21.5606 10 21.56C10.0832 21.5578 10.1649 21.5382 10.24 21.5024L14.368 19.7072L18.4864 21.0584C18.5766 21.088 18.6726 21.0958 18.7664 21.0811C18.8602 21.0665 18.9492 21.0297 19.026 20.974C19.1029 20.9182 19.1654 20.845 19.2084 20.7604C19.2515 20.6758 19.2738 20.5821 19.2736 20.4872V9.3488C19.2736 9.22031 19.2323 9.09522 19.1558 8.99196C19.0793 8.8887 18.9717 8.81272 18.8488 8.7752ZM5.06324 18.632L1.92644 19.6592V9.7832L4.25924 9.0176C4.34055 9.22001 4.43268 9.41789 4.53524 9.6104C4.68977 9.89418 4.86631 10.1654 5.06324 10.4216V18.632ZM9.40004 20.0456L6.26324 18.68V11.72L9.40004 14.84V20.0456ZM10 9.4232C9.37409 9.42035 8.76301 9.23214 8.24394 8.88231C7.72486 8.53248 7.32105 8.03672 7.08348 7.4576C6.84591 6.87848 6.78522 6.24195 6.90908 5.62837C7.03294 5.01479 7.33579 4.45166 7.77941 4.01004C8.22303 3.56843 8.78754 3.26814 9.40167 3.14706C10.0158 3.02598 10.652 3.08956 11.2301 3.32975C11.8081 3.56995 12.302 3.976 12.6495 4.49666C12.997 5.01732 13.1824 5.62924 13.1824 6.2552C13.1793 7.09692 12.8425 7.90305 12.246 8.49689C11.6494 9.09073 10.8418 9.42384 10 9.4232ZM13.7368 18.68L10.6 20.0456V14.84L13.7368 11.7008V18.68ZM18.0736 19.6664L14.9368 18.632V10.4216C15.2532 10.0092 15.5161 9.55841 15.7192 9.08L18.0736 9.8V19.6664Z"
        fill={color || "#007ADF"}
      />
    </svg>
  );
};

export default MapIcon;
