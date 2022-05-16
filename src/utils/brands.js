import { colors } from "../styles/design-tokens";

const { light, dark, purple500 } = colors;

export const DappKit = ({ mainColor = dark, lineColor = purple500 }) => (
  <svg
    className="logo"
    width={115}
    height={36}
    viewBox="0 0 115 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M109.729 25.3834C108.619 25.3834 107.729 25.0598 107.059 24.4124C106.411 23.742 106.088 22.8404 106.088 21.7076V12.0889H101.614V8.25265H106.088V4.90625H110.076V8.25265H115V12.0889H110.076V21.0487C110.076 21.7423 110.399 22.089 111.047 22.089H114.48V25.3834H109.729Z"
      fill={mainColor}
    />
    <path
      d="M96.0005 25.5614V8.43066H99.9884V25.5614H96.0005Z"
      fill={mainColor}
    />
    <path
      d="M78.1123 25.4983V8.15942H82.1002V14.7438H82.6898L88.8624 8.25912H94.0987L85.8108 16.5471L94.3761 25.4983H89.2092L82.6898 18.4197H82.1002V25.4983H78.1123Z"
      fill={mainColor}
    />
    <path
      d="M58.5574 31.8919V7.82558H62.476V10.0796H63.0655C63.4585 9.36295 64.0827 8.72719 64.9381 8.17235C65.8166 7.61751 67.065 7.34009 68.6833 7.34009C70.0704 7.34009 71.3534 7.68686 72.5325 8.38042C73.7346 9.05085 74.6941 10.0449 75.4107 11.3627C76.1274 12.6804 76.4857 14.2641 76.4857 16.1135V16.6684C76.4857 18.5179 76.1274 20.1015 75.4107 21.4192C74.6941 22.737 73.7462 23.7426 72.5672 24.4362C71.3881 25.1066 70.0935 25.4418 68.6833 25.4418C67.5967 25.4418 66.6835 25.3147 65.9437 25.0604C65.227 24.8061 64.6375 24.4709 64.1752 24.0547C63.7359 23.6386 63.3891 23.2225 63.1348 22.8063H62.5453V31.8919H58.5574ZM67.5042 21.9741C68.9607 21.9741 70.1513 21.5117 71.076 20.587C72.0239 19.6391 72.4978 18.2982 72.4978 16.5643V16.2176C72.4978 14.4606 72.0239 13.1197 71.076 12.195C70.1282 11.2702 68.9376 10.8079 67.5042 10.8079C66.0709 10.8079 64.8687 11.2702 63.8977 12.195C62.9499 13.1197 62.476 14.4606 62.476 16.2176V16.5643C62.476 18.2982 62.9499 19.6391 63.8977 20.587C64.8687 21.5117 66.0709 21.9741 67.5042 21.9741Z"
      fill={mainColor}
    />
    <path
      d="M7.83715 25.6029C6.45005 25.6029 5.15541 25.2677 3.95325 24.5972C2.7511 23.9037 1.79168 22.898 1.07501 21.5803C0.358336 20.2625 0 18.6789 0 16.8294V16.2746C0 14.4251 0.358336 12.8415 1.07501 11.5237C1.79168 10.206 2.73954 9.21189 3.91858 8.54146C5.12074 7.84791 6.42693 7.50113 7.83715 7.50113C8.9006 7.50113 9.80222 7.62828 10.542 7.88258C11.2818 8.13689 11.8713 8.46055 12.3106 8.85356C12.7729 9.24657 13.1313 9.67426 13.3856 10.1366H13.9751V0.843018H17.9284V25.1174H14.0445V22.8633H13.4549C13.0388 23.5569 12.403 24.1926 11.5477 24.7706C10.6923 25.3254 9.45545 25.6029 7.83715 25.6029ZM9.01619 22.1351C10.4495 22.1351 11.6401 21.6727 12.588 20.748C13.5359 19.8001 14.0098 18.4593 14.0098 16.7254V16.3786C14.0098 14.6216 13.5359 13.2807 12.588 12.356C11.6633 11.4313 10.4727 10.9689 9.01619 10.9689C7.58285 10.9689 6.38069 11.4313 5.40972 12.356C4.46186 13.2807 3.98793 14.6216 3.98793 16.3786V16.7254C3.98793 18.4593 4.46186 19.8001 5.40972 20.748C6.38069 21.6727 7.58285 22.1351 9.01619 22.1351Z"
      fill={mainColor}
    />
    <path
      d="M39.0037 31.8919V7.82558H42.9222V10.0796H43.5118C43.9048 9.36295 44.529 8.72719 45.3844 8.17235C46.2629 7.61751 47.5113 7.34009 49.1295 7.34009C50.5167 7.34009 51.7997 7.68686 52.9788 8.38042C54.1809 9.05085 55.1403 10.0449 55.857 11.3627C56.5737 12.6804 56.932 14.2641 56.932 16.1135V16.6684C56.932 18.5179 56.5737 20.1015 55.857 21.4192C55.1403 22.737 54.1925 23.7426 53.0134 24.4362C51.8344 25.1066 50.5398 25.4418 49.1295 25.4418C48.043 25.4418 47.1298 25.3147 46.39 25.0604C45.6733 24.8061 45.0838 24.4709 44.6214 24.0547C44.1822 23.6386 43.8354 23.2225 43.5811 22.8063H42.9916V31.8919H39.0037ZM47.9505 21.9741C49.407 21.9741 50.5976 21.5117 51.5223 20.587C52.4702 19.6391 52.9441 18.2982 52.9441 16.5643V16.2176C52.9441 14.4606 52.4702 13.1197 51.5223 12.195C50.5744 11.2702 49.3838 10.8079 47.9505 10.8079C46.5172 10.8079 45.315 11.2702 44.344 12.195C43.3962 13.1197 42.9222 14.4606 42.9222 16.2176V16.5643C42.9222 18.2982 43.3962 19.6391 44.344 20.587C45.315 21.5117 46.5172 21.9741 47.9505 21.9741Z"
      fill={mainColor}
    />
    <path
      d="M25.9691 25.4419C24.7669 25.4419 23.6804 25.2338 22.7094 24.8177C21.7384 24.3784 20.9639 23.7542 20.386 22.9451C19.8311 22.1359 19.5537 21.1418 19.5537 19.9628C19.5537 18.8069 19.8311 17.8359 20.386 17.0499C20.9639 16.2638 21.75 15.6743 22.7441 15.2813C23.7382 14.8652 24.871 14.6571 26.1425 14.6571H31.1014V13.6168C31.1014 12.7151 30.824 11.9869 30.2691 11.4321C29.7143 10.8541 28.8473 10.5651 27.6683 10.5651C26.5124 10.5651 25.6339 10.8425 25.0328 11.3974C24.4548 11.9291 24.0734 12.6227 23.8884 13.478L20.2126 12.2643C20.49 11.3627 20.9293 10.542 21.5303 9.80221C22.1545 9.06241 22.9752 8.47289 23.9925 8.03364C25.0097 7.57127 26.2581 7.34009 27.7376 7.34009C29.9801 7.34009 31.7371 7.90649 33.0087 9.0393C34.3033 10.149 34.9506 11.7673 34.9506 13.8942V20.6217C34.9506 21.3152 35.2743 21.662 35.9216 21.662H37.378V24.9564H34.5691C33.7369 24.9564 33.0549 24.7483 32.5232 24.3322C31.9914 23.916 31.7256 23.3496 31.7256 22.633V22.5636H31.1361C30.9973 22.8873 30.7546 23.2803 30.4078 23.7427C30.061 24.205 29.5293 24.6096 28.8127 24.9564C28.1191 25.28 27.1712 25.4419 25.9691 25.4419ZM26.628 22.1822C27.9457 22.1822 29.0207 21.8123 29.853 21.0725C30.6852 20.3096 31.1014 19.2923 31.1014 18.0208V17.6741H26.3852C25.5298 17.6741 24.8363 17.859 24.3046 18.2289C23.7728 18.5988 23.507 19.1421 23.507 19.8588C23.507 20.5523 23.7844 21.1187 24.3392 21.558C24.8941 21.9741 25.657 22.1822 26.628 22.1822Z"
      fill={mainColor}
    />
    <path
      d="M72.5988 4.98649C79.166 3.30557 81.2815 2.60058 82.0153 4.323C83.2511 7.23904 71.8652 15.4297 58.6332 22.6744C45.4012 29.9191 33.0894 34.1347 31.2949 32.3391C30.6067 31.6505 29.9545 30.798 34.2796 27.0198C27.5906 31.5435 29.9297 33.6873 29.9297 33.6873C31.6742 36.541 45.1892 34.1327 60.1983 25.9163C75.2073 17.6999 85.7595 7.42571 84.2724 3.93919C83.3217 1.71019 81.469 1.69603 72.5988 4.98649Z"
      fill={lineColor}
    />
  </svg>
);

export const Taikai = ({ fill = dark }) => (
  <svg
    width={180}
    height={50}
    fill="none"
    viewBox="0 0 180 50"
    aria-labelledby="taikaiTitle"
    role="img"
  >
    <title id="taikaiTitle">TAIKAI</title>
    <path
      fill={fill}
      d="M78.229 50h-6.702V0h6.702v50zM179.411 50h-6.702V0h6.702v50zM90.532 50h-6.696V0h6.696v50zM121.463 50h-6.359l-.075-.076-18.103-18.633 5.473-5.24 19.064 20.153V50zM93.968 29.376v-9.352L115.046 0h5.759v3.727l-.082.075-26.755 25.574zM31.71 50h-5.653v-3.546L59.543.017h6.58v29.47h-6.702v-18.4L31.711 50z"
    />
    <path
      fill={fill}
      d="M66.123 50h-6.702V39.21H43.484l4.734-6.306h17.923L66.123 50zM12.49 6.306H0V0h12.49v6.306zM22.627 50H15.92V0h20.526v6.306H22.627V50zM129.312 50h-5.561v-4.047l17.101-38.558 3.756 8.059-.052.11L129.312 50zM161.721 29.207h-7.412L142.745 3.22 144.177 0h4.548l12.996 29.207zM169.256 50h-5.689l-4.932-11.063h-20.653l2.742-6.295h22.529l6.003 13.51V50z"
    />
  </svg>
);

export const Bepro = ({ fill = dark }) => (
  <svg
    width={227}
    height={70}
    fill="none"
    viewBox="0 0 227 70"
    aria-labelledby="beproTitle"
    role="img"
  >
    <title id="beproTitle">Bepro</title>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M35.331 0C54.86 0 70.657 15.655 70.657 34.999 70.657 54.34 54.859 70 35.33 70S.001 54.347.001 34.998a34.085 34.085 0 013.337-14.824c.178 1.172.507 2.316.98 3.402a15.03 15.03 0 003.287 4.86 15.494 15.494 0 004.906 3.258c1.83.745 3.79 1.125 5.766 1.118h3.828v-7.437h-3.828a6.77 6.77 0 01-2.843-.577 7.599 7.599 0 01-4.122-4.036 7.535 7.535 0 01-.576-2.773v-.098a6.527 6.527 0 01.576-2.767 7.497 7.497 0 011.62-2.433 6.879 6.879 0 012.45-1.603 8.021 8.021 0 012.849-.577 6.965 6.965 0 012.842.577c.915.37 1.75.914 2.456 1.603a6.92 6.92 0 011.62 2.433c.364.896.559 1.852.577 2.82v22.358a14.797 14.797 0 001.153 5.69 15.049 15.049 0 003.292 4.86 15.367 15.367 0 004.866 3.24 15.284 15.284 0 0011.48 0 15.652 15.652 0 004.906-3.257 15.267 15.267 0 003.286-4.86 14.617 14.617 0 001.153-4.912h.046V39.8a14.298 14.298 0 00-1.153-5.189 15.567 15.567 0 00-3.292-4.86 15.364 15.364 0 00-4.906-3.258 14.988 14.988 0 00-5.737-1.118h-3.822v7.437h3.828a6.768 6.768 0 012.842.577 7.03 7.03 0 012.456 1.655 7.687 7.687 0 011.667 2.427c.365.88.561 1.82.576 2.773v.098a6.527 6.527 0 01-.576 2.768 7.434 7.434 0 01-1.62 2.433 6.879 6.879 0 01-2.45 1.602 8.02 8.02 0 01-2.85.577 7.027 7.027 0 01-2.842-.577 7.582 7.582 0 01-2.456-1.602 6.85 6.85 0 01-1.62-2.433 7.869 7.869 0 01-.576-2.82V17.937a14.794 14.794 0 00-1.125-5.69 15.111 15.111 0 00-3.292-4.86 15.365 15.365 0 00-4.906-3.258 14.915 14.915 0 00-3.286-.923A33.642 33.642 0 0135.33.001z"
      clipRule="evenodd"
    />
    <path
      fill={fill}
      d="M157.353 44.528c3.972 0 7.212-2.577 7.212-7.778 0-4.912-3.459-7.731-7.8-7.731a8.725 8.725 0 00-5.005 1.412v11.554a7.858 7.858 0 005.593 2.543zM144.744 25.57c2.502-1.557 7.166-3.016 11.675-3.016 9.669 0 15.705 5.737 15.705 14.68 0 8.02-4.906 13.837-13.053 13.837a11.855 11.855 0 01-7.259-2.381v13.837h-7.068V25.57zM96.071 29.07c3.972 0 7.213 2.578 7.213 7.778 0 4.907-3.46 7.726-7.801 7.726a8.717 8.717 0 01-5.005-1.407v-11.53a7.69 7.69 0 015.593-2.566zm-12.61 19.027c2.503 1.556 7.162 3.015 11.676 3.015 9.669 0 15.705-5.765 15.705-14.679 0-8.02-4.906-13.837-13.053-13.837a11.883 11.883 0 00-7.264 2.381V13.123h-7.011v34.95l-.052.024zM127.966 28.338c4.036 0 6.342 2.578 6.279 5.933h-13.474c.714-3.552 2.975-5.933 7.195-5.933zm8.533 14.8a13.117 13.117 0 01-7.311 2.14c-4.312 0-7.605-2.232-8.239-6.343h19.868c.335-1.218.485-2.479.444-3.742 0-7.633-5.938-12.643-13.001-12.643-9.029 0-14.523 6.37-14.523 14.293 0 8.607 5.938 14.292 14.765 14.292 3.828 0 7.755-1.066 10.499-3.401l-2.502-4.596zM176.12 50.409h7.016V30.137h11.675v-6.953h-5.189a6.805 6.805 0 00-6.474 4.814v-4.86h-7.028v27.27z"
    />
    <path
      fill={fill}
      fillRule="evenodd"
      d="M204.307 36.796c0 4.474 2.883 7.778 7.409 7.778s7.409-3.304 7.409-7.778-2.883-7.777-7.409-7.777-7.409 3.355-7.409 7.777zm-7.495 0c0 8.17 5.841 14.293 14.99 14.293 9.15 0 14.991-6.123 14.991-14.293 0-8.17-5.835-14.292-14.991-14.292-9.155 0-15.002 6.128-15.002 14.292h.012z"
      clipRule="evenodd"
    />
  </svg>
);

export const Nodejs = ({ fill = dark }) => (
  <svg
    width="201"
    height="62"
    viewBox="0 0 201 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M183.187 60.7171C182.669 60.7171 182.154 60.5812 181.7 60.3198L176.969 57.5187C176.262 57.1236 176.607 56.9838 176.84 56.9032C177.782 56.5733 177.974 56.4988 178.979 55.9277C179.085 55.8674 179.223 55.8887 179.332 55.9525L182.966 58.1094C183.097 58.1803 183.284 58.1803 183.405 58.1094L197.577 49.929C197.709 49.8545 197.794 49.702 197.794 49.5459V33.1923C197.794 33.0291 197.709 32.8837 197.574 32.8021L183.408 24.6288C183.277 24.5508 183.103 24.5508 182.972 24.6288L168.808 32.8021C168.671 32.8801 168.584 33.0327 168.584 33.1888V49.5424C168.584 49.6984 168.669 49.8474 168.804 49.9219L172.685 52.1639C174.792 53.2175 176.08 51.9759 176.08 50.7272V34.5864C176.08 34.3559 176.261 34.1785 176.491 34.1785H178.286C178.51 34.1785 178.694 34.3559 178.694 34.5864V50.7343C178.694 53.5438 177.162 55.1579 174.497 55.1579C173.678 55.1579 173.032 55.1579 171.23 54.2711L167.513 52.1284C166.594 51.5963 166.026 50.603 166.026 49.5424V33.1888C166.026 32.1245 166.594 31.1313 167.513 30.6062L181.699 22.4224C182.596 21.9151 183.788 21.9151 184.679 22.4224L198.847 30.6098C199.762 31.1384 200.333 32.1281 200.333 33.1923V49.5459C200.333 50.6066 199.762 51.5963 198.847 52.1284L184.679 60.3123C184.224 60.5748 183.71 60.7096 183.185 60.7096"
      fill={fill}
    />
    <path
      d="M187.564 49.4484C181.363 49.4484 180.063 46.6019 180.063 44.2145C180.063 43.9875 180.246 43.8065 180.474 43.8065H182.304C182.506 43.8065 182.677 43.9538 182.709 44.1535C182.985 46.0187 183.808 46.9595 187.558 46.9595C190.545 46.9595 191.815 46.2848 191.815 44.7008C191.815 43.7892 191.453 43.1116 186.813 42.6575C182.932 42.2744 180.534 41.4195 180.534 38.3155C180.534 35.4563 182.946 33.7535 186.987 33.7535C191.524 33.7535 193.773 35.3286 194.057 38.7128C194.067 38.8299 194.025 38.9434 193.947 39.0285C193.869 39.1101 193.759 39.1598 193.645 39.1598H191.804C191.613 39.1598 191.446 39.025 191.407 38.8405C190.963 36.8788 189.892 36.2509 186.98 36.2509C183.72 36.2509 183.34 37.3861 183.34 38.2374C183.34 39.2697 183.787 39.5713 188.186 40.1531C192.542 40.7313 194.61 41.5472 194.61 44.6086C194.61 47.6949 192.035 49.465 187.544 49.465L187.564 49.4484Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.0111 32.9022C34.0111 32.2495 33.667 31.65 33.1037 31.3254L18.0782 22.6803C17.8246 22.5313 17.5404 22.4533 17.2524 22.4426H17.097C16.8089 22.4533 16.5248 22.5313 16.2669 22.6803L1.24216 31.3254C0.682379 31.6517 0.333313 32.2512 0.333313 32.904L0.366304 56.1892C0.366304 56.512 0.533033 56.8136 0.816826 56.9732C1.09352 57.1435 1.44117 57.1435 1.71787 56.9732L10.6503 51.8578C11.2143 51.5222 11.5584 50.9291 11.5584 50.2828V39.4046C11.5584 38.7554 11.9025 38.1559 12.4648 37.8331L16.2676 35.6429C16.55 35.4797 16.86 35.3989 17.1757 35.3989C17.4865 35.3989 17.8036 35.479 18.0782 35.6426L21.8793 37.832C22.4419 38.1549 22.7874 38.7544 22.7874 39.4035V50.281C22.7874 50.9266 23.1361 51.5226 23.6973 51.856L32.624 56.9679C32.9043 57.1346 33.253 57.1346 33.5322 56.9679C33.8075 56.8082 33.982 56.5067 33.982 56.1839L34.0111 32.9022ZM104.913 45.0258C104.913 45.188 104.826 45.338 104.686 45.4182L99.5248 48.3931C99.3847 48.4736 99.2116 48.4736 99.0718 48.3931L93.9103 45.4182C93.7684 45.3377 93.6833 45.1876 93.6833 45.0258V39.0676C93.6833 38.9051 93.7684 38.7554 93.9068 38.6738L99.0647 35.694C99.2066 35.6124 99.3804 35.6124 99.5223 35.694L104.684 38.6738C104.826 38.7554 104.911 38.9051 104.911 39.0676L104.913 45.0258ZM106.307 0.895255C106.025 0.738459 105.682 0.742716 105.404 0.904833C105.128 1.06801 104.957 1.366 104.957 1.68881V24.747C104.957 24.9741 104.836 25.1834 104.639 25.2969C104.444 25.4104 104.201 25.4104 104.004 25.2969L100.241 23.1291C99.6802 22.8048 98.9899 22.8048 98.4272 23.1291L83.3968 31.8036C82.8353 32.1264 82.4887 32.7259 82.4887 33.3715V50.7255C82.4887 51.3747 82.8353 51.9706 83.3968 52.297L98.4272 60.9775C98.9884 61.3003 99.6795 61.3003 100.242 60.9775L115.273 52.2934C115.833 51.9671 116.181 51.3711 116.181 50.7219V7.47181C116.181 6.81341 115.823 6.20787 115.248 5.88612L106.307 0.895255ZM156.358 38.9108C156.917 38.5866 157.26 37.9878 157.26 37.3421V33.1363C157.26 32.4893 156.916 31.8922 156.357 31.5666L141.422 22.8967C140.858 22.5703 140.167 22.5703 139.602 22.8967L124.576 31.5701C124.012 31.8965 123.667 32.4925 123.667 33.1416V50.4885C123.667 51.1412 124.019 51.7443 124.583 52.0671L139.514 60.5774C140.064 60.8931 140.738 60.8966 141.295 60.588L150.326 55.5684C150.61 55.4088 150.791 55.1073 150.791 54.7809C150.791 54.4545 150.617 54.1495 150.333 53.9898L135.214 45.3128C134.931 45.1532 134.757 44.8517 134.757 44.5289V39.0871C134.757 38.7622 134.927 38.4628 135.211 38.301L139.915 35.5872C140.195 35.4241 140.539 35.4241 140.819 35.5872L145.527 38.301C145.807 38.4606 145.981 38.7622 145.981 39.085V43.3632C145.981 43.686 146.155 43.9875 146.435 44.1507C146.715 44.3103 147.063 44.3103 147.343 44.1472L156.358 38.9108Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M140.292 38.0991C140.399 38.0363 140.532 38.0363 140.64 38.0991L143.524 39.7629C143.632 39.8253 143.698 39.9402 143.698 40.0644V43.3954C143.698 43.5196 143.632 43.6345 143.524 43.6969L140.64 45.3607C140.532 45.4235 140.399 45.4235 140.292 45.3607L137.41 43.6969C137.3 43.6345 137.233 43.5196 137.233 43.3954V40.0644C137.233 39.9402 137.297 39.8253 137.407 39.7629L140.292 38.0991Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M58.249 23.3675C58.7921 23.0495 59.4727 23.0495 60.0231 23.3675L74.74 31.7923C75.2903 32.1085 75.627 32.6905 75.627 33.3192V50.1868C75.627 50.8155 75.2903 51.3975 74.74 51.7137L60.0231 60.1385C59.4727 60.4565 58.7921 60.4565 58.249 60.1385L43.5411 51.7137C42.9799 51.3975 42.636 50.8155 42.636 50.1868V33.3192C42.636 32.6905 42.9619 32.1085 43.523 31.7923L58.249 23.3675Z"
      fill={fill}
    />
  </svg>
);

export const Nextjs = ({ fill = dark }) => (
  <svg
    width="101"
    height="61"
    viewBox="0 0 101 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.7507 16.4147H42.6116V17.9066H25.4796V29.135H41.59V30.6269H25.4796V42.9547H42.8081V44.4465H23.7507V16.4147ZM44.3013 16.4147H46.3052L55.1856 28.7424L64.2624 16.4147L76.6084 0.755615L56.3251 30.038L66.7772 44.4465H64.6947L55.1856 31.3336L45.6373 44.4465H43.594L54.1247 30.038L44.3013 16.4147ZM67.5238 17.9066V16.4147H89.0174V17.9066H79.1154V44.4465H77.3865V17.9066H67.5238Z"
      fill={fill}
    />
    <path
      d="M0.154984 16.4147H2.31613L32.1171 60.7948L19.8018 44.4466L1.96249 18.5348L1.8839 44.4466H0.154984V16.4147Z"
      fill={fill}
    />
    <path
      d="M88.8432 42.5045C89.2006 42.5045 89.4613 42.2321 89.4613 41.8801C89.4613 41.5281 89.2006 41.2557 88.8432 41.2557C88.49 41.2557 88.225 41.5281 88.225 41.8801C88.225 42.2321 88.49 42.5045 88.8432 42.5045ZM90.5421 40.8618C90.5421 41.9011 91.2948 42.5799 92.3923 42.5799C93.5613 42.5799 94.2678 41.8801 94.2678 40.6649V36.3865H93.3259V40.6607C93.3259 41.3354 92.9852 41.6957 92.3839 41.6957C91.8456 41.6957 91.4798 41.3605 91.4672 40.8618H90.5421ZM95.4999 40.8074C95.5672 41.8885 96.4713 42.5799 97.8169 42.5799C99.2551 42.5799 100.155 41.855 100.155 40.6984C100.155 39.7891 99.642 39.2863 98.3972 38.9971L97.7286 38.8337C96.9381 38.6493 96.6185 38.4021 96.6185 37.9705C96.6185 37.4257 97.1147 37.0695 97.859 37.0695C98.5654 37.0695 99.0532 37.4173 99.1415 37.9747H100.058C100.004 36.9564 99.1037 36.2398 97.8716 36.2398C96.547 36.2398 95.6639 36.9564 95.6639 38.0333C95.6639 38.9217 96.1643 39.4497 97.2619 39.7053L98.044 39.8939C98.8472 40.0824 99.2004 40.359 99.2004 40.8199C99.2004 41.3563 98.6453 41.746 97.8884 41.746C97.0768 41.746 96.5133 41.3814 96.4334 40.8074H95.4999Z"
      fill={fill}
    />
  </svg>
);

export const Angular = ({ mainColor = dark, letterColor = light }) => (
  <svg
    width="61"
    height="66"
    viewBox="0 0 61 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.6666 0.776611L0.666641 11.4748L5.24237 51.1418L30.6666 65.2234L56.0909 51.1418L60.6666 11.4748L30.6666 0.776611Z"
      fill={mainColor}
    />
    <path
      d="M30.6666 0.776611L30.6668 7.93019V7.89796L30.6666 65.2234L56.0909 51.1418L60.6666 11.4748L30.6666 0.776611Z"
      fill={mainColor}
    />
    <path
      d="M30.6668 7.89796L11.9125 49.9494H18.905L22.6751 40.5402H38.5935L42.3637 49.9494H49.3561L30.6668 7.89796ZM36.1445 34.74H25.1886L30.6666 21.5606L36.1445 34.74Z"
      fill={letterColor}
    />
  </svg>
);

export const Polkamarkets = () => (
  <svg
    width="143"
    height="24"
    viewBox="0 0 143 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6655 0L0.751465 11.9344L10.6843 24L20.6687 11.9578L10.6655 0Z"
      fill="#5751FC"
    />
    <path
      d="M10.6843 24.0004L0.751465 11.9348L13.2296 8.91602L10.6843 24.0004Z"
      fill="#3033BE"
    />
    <path
      d="M10.6655 0L20.6687 11.9578L13.2296 8.91094L10.6655 0Z"
      fill="#51A0FC"
    />
    <path
      d="M28.7623 4.87451H34.2189C35.6102 4.87451 36.7949 5.35277 37.7732 6.29843C38.7406 7.25495 39.2189 8.41799 39.2189 9.80929C39.2189 11.2006 38.7406 12.3636 37.7732 13.3202C36.7949 14.2767 35.6102 14.7441 34.2189 14.7441H31.6428V19.581H28.7515V4.87451H28.7623ZM31.6536 12.0376H34.2297C34.8384 12.0376 35.3493 11.831 35.7515 11.4071C36.1536 10.9723 36.3602 10.4397 36.3602 9.80929C36.3602 9.16799 36.1536 8.63538 35.7515 8.21147C35.3493 7.78755 34.8384 7.58103 34.2297 7.58103H31.6536V12.0376Z"
      fill="#F2F0FF"
    />
    <path
      d="M48.5559 18.2769C47.5015 19.3421 46.1863 19.8747 44.6211 19.8747C43.0559 19.8747 41.7515 19.3421 40.6863 18.2769C39.632 17.2116 39.0994 15.8964 39.0994 14.3312C39.0994 12.7769 39.632 11.4616 40.6863 10.3964C41.7624 9.32033 43.0668 8.77686 44.6211 8.77686C46.1646 8.77686 47.4798 9.32033 48.5559 10.3964C49.632 11.4725 50.1646 12.7877 50.1646 14.3312C50.1646 15.8856 49.632 17.2008 48.5559 18.2769ZM42.5994 16.4073C43.1428 16.9508 43.8168 17.2225 44.632 17.2225C45.4363 17.2225 46.1211 16.9508 46.6646 16.4073C47.2081 15.8638 47.4798 15.1682 47.4798 14.3312C47.4798 13.4942 47.2081 12.7986 46.6646 12.2551C46.1211 11.7116 45.4472 11.4399 44.632 11.4399C43.8276 11.4399 43.1428 11.7116 42.5994 12.2551C42.0668 12.8203 41.8059 13.5051 41.8059 14.3312C41.8059 15.1573 42.0668 15.8529 42.5994 16.4073Z"
      fill="#F2F0FF"
    />
    <path
      d="M53.5885 19.5811H50.8928V4.24414H53.5885V19.5811Z"
      fill="#F2F0FF"
    />
    <path
      d="M60.3167 14.2658L64.6428 19.581H61.5015L57.6971 14.8093V19.581H55.0015V4.87451H57.6971V13.7006L61.2949 9.08103H64.5123L60.3167 14.2658Z"
      fill="#F2F0FF"
    />
    <path
      d="M72.1428 10.3201V9.081H74.8385V19.5919H72.1428V18.3527C71.3385 19.3745 70.1972 19.8854 68.7298 19.8854C67.3385 19.8854 66.132 19.3527 65.132 18.2875C64.1428 17.2114 63.6428 15.8962 63.6428 14.3419C63.6428 12.7984 64.1428 11.494 65.132 10.4071C66.132 9.331 67.3385 8.78752 68.7298 8.78752C70.1972 8.77665 71.3385 9.28752 72.1428 10.3201ZM67.1646 16.4723C67.708 17.0158 68.4037 17.2875 69.2298 17.2875C70.0667 17.2875 70.7515 17.0158 71.295 16.4723C71.8493 15.9071 72.132 15.2006 72.132 14.331C72.132 13.4614 71.8493 12.7549 71.295 12.2114C70.7515 11.6462 70.0559 11.3745 69.2298 11.3745C68.3928 11.3745 67.708 11.6571 67.1646 12.2114C66.6211 12.7549 66.3493 13.4614 66.3493 14.331C66.3493 15.2006 66.6211 15.918 67.1646 16.4723Z"
      fill="#F2F0FF"
    />
    <path
      d="M87.0667 8.82031C88.2515 8.82031 89.1972 9.20075 89.9146 9.95075C90.6211 10.7116 90.9798 11.7334 90.9798 13.016V19.5703H89.5993V13.0268C89.5993 12.1355 89.3711 11.429 88.9145 10.929C88.458 10.429 87.8385 10.1681 87.0559 10.1681C86.1537 10.1681 85.4363 10.4725 84.9254 11.0703C84.4146 11.6681 84.1537 12.5703 84.1537 13.7551V19.5812H82.7624V13.0268C82.7624 12.1138 82.545 11.4181 82.1102 10.929C81.6754 10.429 81.0776 10.1681 80.3167 10.1681C79.4363 10.1681 78.708 10.4725 78.1428 11.0921C77.5885 11.7116 77.3059 12.6029 77.3059 13.766V19.5921H75.9254V9.08118H77.3059V10.6138C78.0559 9.41814 79.1211 8.83118 80.5015 8.83118C82.0232 8.83118 83.0776 9.47249 83.6754 10.7442C84.4363 9.46162 85.5667 8.82031 87.0667 8.82031Z"
      fill="#F2F0FF"
    />
    <path
      d="M101.599 11.1355V9.08117H102.98V19.592H101.599V17.5377C100.632 19.0812 99.2297 19.8529 97.371 19.8529C95.8819 19.8529 94.5993 19.3203 93.5449 18.2551C92.5015 17.1899 91.9797 15.8855 91.9797 14.342C91.9797 12.7986 92.5015 11.4942 93.5449 10.429C94.6102 9.36378 95.8819 8.83117 97.371 8.83117C99.2297 8.8203 100.643 9.59204 101.599 11.1355ZM94.5558 17.2877C95.3493 18.0812 96.3276 18.4833 97.4797 18.4833C98.6319 18.4833 99.6102 18.0812 100.404 17.2877C101.197 16.4616 101.599 15.4725 101.599 14.3203C101.599 13.1573 101.197 12.179 100.404 11.3746C99.6102 10.5594 98.6319 10.1573 97.4797 10.1573C96.3276 10.1573 95.3493 10.5594 94.5558 11.3746C93.7623 12.1681 93.3602 13.1573 93.3602 14.3203C93.3602 15.4833 93.7515 16.4616 94.5558 17.2877Z"
      fill="#F2F0FF"
    />
    <path
      d="M105.686 9.08114V10.8203C106.328 9.54853 107.425 8.90723 108.991 8.90723V10.2551C107.991 10.2551 107.186 10.5485 106.588 11.1355C105.991 11.7116 105.686 12.5811 105.686 13.7442V19.592H104.306V9.08114H105.686Z"
      fill="#F2F0FF"
    />
    <path
      d="M112.686 14.1245L118.295 19.5919H116.458L111.23 14.5267V19.5919H109.849V4.87451H111.23V13.7223L116.208 9.08103H118.088L112.686 14.1245Z"
      fill="#F2F0FF"
    />
    <path
      d="M122.915 8.82031C124.48 8.82031 125.719 9.37466 126.654 10.4834C127.621 11.5812 128.099 12.8747 128.099 14.3747C128.099 14.4399 128.088 14.6573 128.056 15.0268H118.871C119.012 16.0812 119.458 16.9181 120.208 17.5486C120.958 18.179 121.904 18.4942 123.034 18.4942C124.621 18.4942 125.751 17.8964 126.404 16.7116L127.621 17.429C127.165 18.1899 126.523 18.7768 125.719 19.2116C124.925 19.6355 124.023 19.8421 123.023 19.8421C121.382 19.8421 120.034 19.3203 119.012 18.2877C117.98 17.2551 117.469 15.929 117.469 14.3421C117.469 12.7551 117.98 11.4507 118.991 10.4073C120.001 9.35292 121.317 8.82031 122.915 8.82031ZM122.915 10.1681C121.828 10.1681 120.915 10.4942 120.175 11.1355C119.447 11.7768 119.023 12.6247 118.882 13.679H126.686C126.534 12.5594 126.11 11.7007 125.415 11.0921C124.686 10.4725 123.849 10.1681 122.915 10.1681Z"
      fill="#F2F0FF"
    />
    <path
      d="M134.491 9.08103V10.418H131.48V16.7876C131.48 17.3636 131.588 17.7767 131.817 18.0267C132.045 18.2658 132.371 18.3963 132.817 18.4071C133.262 18.4071 133.817 18.3963 134.491 18.3636V19.581C133.002 19.8093 131.893 19.7006 131.165 19.2658C130.458 18.8202 130.099 17.9941 130.099 16.7876V10.418H127.904V9.07016H130.099V6.54842L131.48 6.12451V9.07016H134.491V9.08103Z"
      fill="#F2F0FF"
    />
    <path
      d="M136.654 11.8311C136.654 12.5811 137.61 13.2984 138.806 13.6137C139.208 13.7115 139.48 13.7767 139.599 13.8202C139.73 13.8528 139.969 13.9289 140.327 14.0484C140.708 14.1571 140.958 14.255 141.099 14.3419C141.251 14.4289 141.458 14.5593 141.73 14.7441C141.991 14.9071 142.186 15.0919 142.295 15.2658C142.404 15.4289 142.512 15.6571 142.61 15.9397C142.708 16.2006 142.751 16.4941 142.751 16.7984C142.751 17.6898 142.393 18.4289 141.686 18.9832C141.001 19.5484 140.099 19.8202 138.969 19.8202C137.991 19.8202 137.154 19.6028 136.436 19.168C135.73 18.7224 135.219 18.1354 134.925 17.4071L136.099 16.7115C136.295 17.255 136.643 17.6897 137.143 18.0158C137.654 18.3202 138.262 18.4832 138.958 18.4832C139.664 18.4832 140.251 18.3419 140.697 18.0593C141.143 17.7767 141.371 17.3637 141.371 16.7984C141.371 15.9832 140.654 15.3854 139.219 15.0158C138.817 14.918 138.545 14.8528 138.425 14.8311C138.295 14.7876 138.045 14.7115 137.675 14.6028C137.317 14.4724 137.056 14.3745 136.904 14.2876C136.762 14.2006 136.567 14.0811 136.295 13.9071C136.034 13.7224 135.838 13.5484 135.73 13.3854C135.621 13.2006 135.512 12.9832 135.414 12.7115C135.317 12.4289 135.273 12.1354 135.273 11.8311C135.273 10.9724 135.61 10.2658 136.273 9.68975C136.969 9.11366 137.827 8.83105 138.849 8.83105C139.686 8.83105 140.425 9.01584 141.067 9.39627C141.719 9.77671 142.208 10.2984 142.512 10.9724L141.36 11.6463C140.969 10.668 140.132 10.1789 138.849 10.1789C138.219 10.1789 137.697 10.3311 137.284 10.6245C136.86 10.9071 136.654 11.3093 136.654 11.8311Z"
      fill="#F2F0FF"
    />
  </svg>
);

export const RealFevr = () => (
  <svg
    width="350"
    height="56"
    viewBox="0 0 350 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48.8787 5.0018C44.8055 2.96981 39.1656 1.40675 33.4083 0.625214L31.9983 5.86149C37.0899 6.52579 41.7506 7.81532 44.9622 9.14392V25.5952C44.9622 38.5686 35.3666 44.6646 25.1835 49.6273C23.7344 48.924 22.2461 48.1815 20.8361 47.4L19.387 52.7925C21.0711 53.6522 22.6377 54.4338 24.0085 55.0981L25.1835 55.6451L26.3585 55.0981C34.7399 51.0732 50.367 43.5705 50.367 25.5952V5.74426L48.8787 5.0018Z"
      fill="#1ED760"
    />
    <path
      d="M34.5441 27.3537C36.5415 25.9078 37.6773 23.6414 37.6382 21.1795C37.5599 17.1156 34.1133 13.8331 29.9226 13.8331H29.8442L28.4734 18.9912H29.5309C30.8234 18.9912 31.8808 20.0463 31.8808 21.3358C31.8808 22.6254 30.8234 23.6804 29.5309 23.6804H27.2201L25.8493 28.7995H29.2176L32.9775 35.7551H39.1656L34.5441 27.3537Z"
      fill="#1ED760"
    />
    <path
      d="M19.7003 28.7995H22.9119L24.2827 23.6414H19.7003V18.9912H25.5752L26.946 13.8331H16.4496C15.0788 13.8331 13.9821 14.9273 13.9821 16.295V33.2542C13.9821 34.6219 15.0788 35.7161 16.4496 35.7161H19.7003V28.7995Z"
      fill="#11915A"
    />
    <path
      d="M18.2904 45.9151C11.0447 41.4603 5.40486 35.5207 5.40486 25.5952V9.18301C9.98724 7.26826 17.5854 5.43166 25.1835 5.43166C26.5151 5.43166 27.8468 5.47073 29.1392 5.58796L30.5492 0.273537C28.7476 0.11723 26.946 0 25.1835 0C17.0371 0 7.5198 1.99291 1.48829 5.00181L0 5.74427V25.5952C0 39.1548 8.8906 46.7357 16.8412 51.3858L18.2904 45.9151Z"
      fill="#11915A"
    />
    <path
      d="M302.254 13.3582L294.957 30.8999L287.659 13.3582C287.187 12.2324 286.085 11.4994 284.851 11.4994H279.942L290.967 36.7646C291.597 38.2046 293.014 39.1471 294.589 39.1471H295.324C296.899 39.1471 298.316 38.2046 298.946 36.7646L309.971 11.4994H305.062C303.829 11.4732 302.726 12.2062 302.254 13.3582Z"
      fill="#FFFFFF"
    />
    <path
      d="M158.568 11.2904H157.833C156.259 11.2904 154.841 12.2329 154.211 13.6729L143.187 38.9381H148.095C149.329 38.9381 150.431 38.205 150.904 37.0792L158.201 19.5376L165.498 37.0792C165.971 38.205 167.073 38.9381 168.307 38.9381H173.215L162.191 13.6729C161.587 12.2067 160.143 11.2904 158.568 11.2904Z"
      fill="#FFFFFF"
    />
    <path
      d="M117.936 27.9158H129.747C130.299 27.9158 130.771 27.4707 130.771 26.8947V23.2816C130.771 22.7318 130.325 22.2606 129.747 22.2606H117.936V17.0766H132.504V14.4846C132.504 12.809 131.139 11.4476 129.459 11.4476H114.707C113.027 11.4476 111.662 12.809 111.662 14.4846V35.875C111.662 37.5506 113.027 38.912 114.707 38.912H129.669C131.349 38.912 132.714 37.5506 132.714 35.875V33.283H117.962V27.9158H117.936Z"
      fill="#FFFFFF"
    />
    <path
      d="M255.242 27.9158H267.054C267.605 27.9158 268.078 27.4707 268.078 26.8947V23.2816C268.078 22.7318 267.632 22.2606 267.054 22.2606H255.242V17.0766H269.81V14.4846C269.81 12.809 268.445 11.4476 266.765 11.4476H252.014C250.334 11.4476 248.969 12.809 248.969 14.4846V35.875C248.969 37.5506 250.334 38.912 252.014 38.912H266.975C268.655 38.912 270.02 37.5506 270.02 35.875V33.283H255.269V27.9158H255.242Z"
      fill="#FFFFFF"
    />
    <path
      d="M190.224 11.474H186.943C185.263 11.474 183.898 12.8354 183.898 14.511V35.9013C183.898 37.577 185.263 38.9384 186.943 38.9384H200.75C202.43 38.9384 203.795 37.577 203.795 35.9013V33.1785H190.251V11.474H190.224Z"
      fill="#FFFFFF"
    />
    <path
      d="M233.718 11.474H218.757C217.077 11.474 215.712 12.8354 215.712 14.511V35.9013C215.712 37.577 217.077 38.9384 218.757 38.9384H222.038V28.8323H232.983C233.535 28.8323 234.007 28.3872 234.007 27.8113V24.0935C234.007 23.5437 233.561 23.0724 232.983 23.0724H222.038V17.2077H236.763V14.4848C236.763 12.8354 235.398 11.474 233.718 11.474Z"
      fill="#FFFFFF"
    />
    <path
      d="M98.8265 20.6637V20.5851C98.8265 14.8776 94.9417 11.474 88.4058 11.474H78.8513C77.1714 11.474 75.8064 12.8354 75.8064 14.511V35.9014C75.8064 37.577 77.1714 38.9384 78.8513 38.9384H82.1061V17.2077H87.8808C90.7944 17.2077 92.4218 18.5168 92.4218 20.9255V21.0041C92.4218 23.2819 90.7157 24.6695 88.0121 24.6695H86.3059C85.7547 24.6695 85.2822 25.1146 85.2822 25.6905V29.2774C85.2822 29.8272 85.7284 30.2985 86.3059 30.2985H86.6209C87.8283 30.2985 89.2195 30.5865 90.2432 32.5239L93.6293 38.9646H100.401L94.6005 28.4658C96.9629 27.052 98.8265 24.6957 98.8265 20.6637Z"
      fill="#FFFFFF"
    />
    <path
      d="M338.477 28.4399C340.839 27.0784 342.677 24.7221 342.677 20.6901V20.6116C342.677 14.904 338.792 11.5004 332.256 11.5004H322.701C321.022 11.5004 319.657 12.8619 319.657 14.5375V35.9278C319.657 37.6034 321.022 38.9648 322.701 38.9648H325.983V17.2342H331.757C334.671 17.2342 336.298 18.5433 336.298 20.952V21.0305C336.298 23.3083 334.592 24.6959 331.888 24.6959H330.182C329.631 24.6959 329.159 25.141 329.159 25.717V29.3039C329.159 29.8537 329.605 30.3249 330.182 30.3249H330.497C331.705 30.3249 333.096 30.6129 334.12 32.5504L337.506 38.991H344.278L338.477 28.4399Z"
      fill="#FFFFFF"
    />
    <path
      d="M349.449 11.814C349.816 12.1805 350 12.6256 350 13.1754C350 13.7253 349.816 14.1704 349.449 14.5107C349.081 14.8773 348.635 15.0343 348.11 15.0343C347.585 15.0343 347.139 14.8511 346.771 14.5107C346.404 14.1442 346.22 13.6991 346.22 13.1754C346.22 12.6256 346.404 12.1805 346.771 11.814C347.139 11.4475 347.585 11.2904 348.11 11.2904C348.635 11.2904 349.081 11.4736 349.449 11.814ZM349.16 14.2489C349.449 13.9609 349.58 13.6205 349.58 13.2016C349.58 12.7827 349.449 12.4162 349.16 12.1282C348.871 11.8402 348.53 11.6831 348.11 11.6831C347.69 11.6831 347.349 11.8402 347.06 12.1282C346.771 12.4162 346.64 12.7827 346.64 13.2016C346.64 13.6205 346.798 13.9871 347.086 14.2489C347.375 14.5369 347.716 14.6678 348.136 14.6678C348.53 14.6678 348.871 14.5107 349.16 14.2489ZM348.53 13.4111L349.003 13.9871H348.504L348.058 13.4635H347.821V13.9871H347.375V12.2853H348.215C348.425 12.2853 348.609 12.3376 348.714 12.4424C348.845 12.5471 348.898 12.678 348.898 12.8613C348.924 13.1231 348.793 13.3064 348.53 13.4111ZM348.215 13.0707C348.399 13.0707 348.504 12.9922 348.504 12.8351C348.504 12.678 348.399 12.6256 348.215 12.6256H347.821V13.0707H348.215Z"
      fill="#FFFFFF"
    />
  </svg>
);
