import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

export {MenuIcon, Home, Shop, Sort, Cart, Profile, Search, Filter};

function MenuIcon(props) {
  const {width, height} = props;
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M2 12h20M2 6h20M2 18h20"
      />
    </Svg>
  );
}

function Home(props) {
  const {width, height, fillColor} = props;
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      {...props}>
      <Path
        fill={fillColor}
        d="M33 4v5.586l-8-8L1.293 25.293l1.414 1.414L4 25.414V49h42V25.414l1.293 1.293 1.414-1.414L42 18.586V4h-9zm2 2h5v10.586l-5-5V6zM20 47V31h10v16H20zm24 0H32V29H18v18H6V23.414l19-19 19 19V47z"
      />
    </Svg>
  );
}

function Shop(props) {
  const {width, height, fillColor} = props;
  return (
    <Svg
      width={width || 28}
      height={height || 28}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M59.84 17.77A4.28 4.28 0 0056.36 16H15.89l-1.12-6a4.24 4.24 0 00-4.17-3.55h-6a1.25 1.25 0 000 2.5h6a1.76 1.76 0 011.72 1.43l6.94 37.7a1.25 1.25 0 001.23 1h2.81a5.469 5.469 0 109.18 0h5.61a5.47 5.47 0 109.18 0H49a1.25 1.25 0 100-2.5H21.53l-.9-4.9h29.46a4.26 4.26 0 004-2.79l6.27-17.25a4.271 4.271 0 00-.52-3.87zm-29 34.31a3 3 0 11-3-3 3 3 0 013.02 3h-.02zm14.79 0a3 3 0 11-3-3 3 3 0 013.02 3h-.02zM58 20.81l-6.27 17.24a1.75 1.75 0 01-1.64 1.15H20.17l-3.82-20.74h40a1.72 1.72 0 011.43.74 1.74 1.74 0 01.22 1.61z"
        fill={fillColor}
      />
    </Svg>
  );
}

function Profile(props) {
  const {width, height, fillColor} = props;
  return (
    <Svg
      width={width || 26}
      height={height || 26}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      {...props}>
      <Path
        fill={fillColor}
        d="M25 1C11.767 1 1 11.767 1 25c0 7.091 3.094 13.472 8 17.869v.017l.348.3c.061.053.128.097.19.149a24.496 24.496 0 003.189 2.279c.085.051.172.099.257.148.557.324 1.126.629 1.71.908l.018.008a23.838 23.838 0 003.915 1.456l.075.021c.641.175 1.293.322 1.954.443l.185.033a24.17 24.17 0 001.939.262c.075.007.15.011.224.017.659.055 1.323.09 1.996.09s1.337-.035 1.996-.09c.075-.006.15-.01.224-.017.655-.06 1.301-.15 1.939-.262l.185-.033a23.451 23.451 0 001.954-.443l.075-.021a23.838 23.838 0 003.915-1.456l.018-.008a24.261 24.261 0 001.71-.908c.086-.05.172-.097.257-.148a24.123 24.123 0 001.487-.968c.124-.087.248-.174.371-.264.456-.334.9-.683 1.331-1.047.062-.052.129-.096.19-.149l.348-.3v-.017c4.906-4.398 8-10.778 8-17.869C49 11.767 38.233 1 25 1zm0 24c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm3 2c6.065 0 11 4.935 11 11v3.958c-.042.035-.086.067-.128.102-.395.321-.8.626-1.214.918-.092.065-.182.132-.274.195-.447.305-.906.591-1.373.862l-.257.148a21.799 21.799 0 01-6.871 2.468l-.171.031a22.27 22.27 0 01-1.715.225c-.079.007-.159.012-.239.018-.583.045-1.169.075-1.758.075s-1.175-.03-1.758-.077l-.239-.018a21.789 21.789 0 01-1.886-.256 22.013 22.013 0 01-5.212-1.626l-.161-.073a21.799 21.799 0 01-1.755-.917c-.467-.27-.926-.557-1.373-.862-.093-.063-.183-.13-.274-.195a21.826 21.826 0 01-1.214-.918c-.042-.034-.086-.067-.128-.102V38c0-6.065 4.935-11 11-11h6zm13 13.076V38c0-6.271-4.464-11.519-10.38-12.735A9.996 9.996 0 0035 17c0-5.514-4.486-10-10-10s-10 4.486-10 10a9.996 9.996 0 004.38 8.265C13.464 26.481 9 31.729 9 38v2.076C5.284 36.135 3 30.831 3 25 3 12.869 12.869 3 25 3s22 9.869 22 22c0 5.831-2.284 11.135-6 15.076z"
      />
    </Svg>
  );
}

function Search(props) {
  const {width, height} = props;
  return (
    <Svg
      width={width || 26}
      height={height || 26}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129 129"
      {...props}>
      <Path
        fill="#fff"
        d="M51.6 96.7c11 0 21-3.9 28.8-10.5l35 35c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-35-35c6.5-7.8 10.5-17.9 10.5-28.8 0-24.9-20.2-45.1-45.1-45.1-24.8 0-45.1 20.3-45.1 45.1 0 24.9 20.3 45.1 45.1 45.1zm0-82c20.4 0 36.9 16.6 36.9 36.9C88.5 72 72 88.5 51.6 88.5S14.7 71.9 14.7 51.6c0-20.3 16.6-36.9 36.9-36.9z"
      />
    </Svg>
  );
}

function Cart(props) {
  const {width, height} = props;
  return (
    <Svg
      width={width || 26}
      height={height || 26}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      // fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}>
      <Path d="M6 6h24l-3 13H9m18 4H10L5 2H2" />
      <Circle cx={25} cy={27} r={2} />
      <Circle cx={12} cy={27} r={2} />
    </Svg>
  );
}

function Sort(props) {
  const {width, height} = props;
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 18 12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G fill="none" fillRule="evenodd">
        <Path fill="none" d="M-3-6h24v24H-3z" />
        <Path
          d="M1 12h4c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1zm1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

function Filter(props) {
  const {width, height} = props;
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-filter"
      {...props}>
      <Path fill="#fff" d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </Svg>
  );
}
