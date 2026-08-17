import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import {
  FiArrowDownRight, FiArrowUpRight, FiCheck, FiChevronDown, FiMenu, FiMessageCircle, FiPause, FiPlay,
  FiPlus, FiX, FiFileText, FiMap, FiMapPin, FiShield, FiStar, FiSun, FiTool, FiTrendingUp, FiUserPlus, FiUsers,
  FiLinkedin, FiInstagram, FiYoutube, FiFacebook,
} from 'react-icons/fi';
import { GiPlantRoots, GiSprout, GiTreeGrowth, GiWoodCabin } from 'react-icons/gi';
import sandalwoodShoot from './assets/sandalwood-shoot.png';
import farmhouseSketch from './assets/farmhouse-sketch.png';
import kapilLogo from './assets/kapil-farms-logo.png';
import fieldImg from './assets/field.png';
import locationMapOne from './assets/location-map-one.jpg';
import locationMapTwo from './assets/location-map-two.jpg';
import footerBg from './assets/footer-bg.jpg';
import visitBg from './assets/bg-img.jpg';
import LogoIntro from './components/LogoIntro';
import './App.css';

const navLogo = '/navlogo.svg';

const images = {
  hero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
  family: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85',
  soil: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=700&q=85',
  tractor: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=700&q=85',
  farmer: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=700&q=85',
  cottage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=85',
  pool: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=85',
  fields: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=85',
};

const legacyStats = [
  { value: 100, suffix: '+', label: 'Acres of Community', text: 'A master planned gated farmland designed for nature, ownership and long term growth.' },
  { value: 2, suffix: '–5', label: 'Guntas', text: 'Flexible plot sizes designed for every investment journey and long-term ownership.' },
  { value: 8, suffix: '–20', label: 'Trees', text: 'Every ownership plan includes premium Indian sandalwood plantation.' },
  { value: 1981, label: 'Since', text: 'Decades of experience creating trusted farmland and plantation communities.' },
];

const IconStar = (props) => (
  <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M33 60.5C48.1878 60.5 60.5 48.1878 60.5 33C60.5 17.8122 48.1878 5.5 33 5.5C17.8122 5.5 5.5 17.8122 5.5 33C5.5 48.1878 17.8122 60.5 33 60.5Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30.3901 20.944C30.5718 20.3867 30.9269 19.902 31.4034 19.5607C31.88 19.2194 32.4531 19.0392 33.0393 19.0466C33.6254 19.054 34.1939 19.2484 34.6617 19.6017C35.1296 19.9549 35.4723 20.4483 35.6399 21.01L37.6666 25.003C37.8639 25.3912 38.1505 25.727 38.5028 25.9828C38.8552 26.2386 39.2632 26.407 39.6934 26.4743L44.1869 27.1783C44.7655 27.1805 45.3287 27.3653 45.7962 27.7061C46.2638 28.047 46.6119 28.5267 46.7911 29.0769C46.9702 29.6271 46.9712 30.2198 46.794 30.7706C46.6167 31.3214 46.2703 31.8023 45.8039 32.1448L42.5809 35.3568C42.2723 35.664 42.0411 36.0401 41.9063 36.4541C41.7715 36.8682 41.7369 37.3083 41.8054 37.7383L42.5176 42.174C42.7136 42.73 42.7257 43.3342 42.5522 43.8976C42.3787 44.461 42.0287 44.9537 41.5539 45.303C41.0792 45.6524 40.5047 45.84 39.9152 45.8381C39.3257 45.8362 38.7524 45.645 38.2799 45.2925L34.2511 43.23C33.863 43.0312 33.4332 42.9275 32.9971 42.9275C32.5611 42.9275 32.1312 43.0312 31.7431 43.23L27.7144 45.2925C27.2419 45.642 26.6698 45.831 26.0821 45.8316C25.4944 45.8323 24.9219 45.6447 24.4486 45.2962C23.9754 44.9478 23.6261 44.4569 23.4522 43.8955C23.2783 43.3341 23.2888 42.7318 23.4821 42.1768L24.1916 37.741C24.2606 37.3106 24.2263 36.8699 24.0914 36.4554C23.9566 36.0408 23.7251 35.6643 23.4161 35.3568L20.2371 32.1888C19.755 31.8547 19.3922 31.3752 19.2019 30.8203C19.0116 30.2654 19.0038 29.6643 19.1795 29.1046C19.3552 28.5449 19.7053 28.0561 20.1785 27.7095C20.6518 27.363 21.2235 27.1768 21.8101 27.1783L26.3009 26.4743C26.7311 26.407 27.1391 26.2386 27.4915 25.9828C27.8438 25.727 28.1304 25.3912 28.3276 25.003L30.3901 20.944Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconGatedLock = (props) => (
  <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M27.5 33H27.5275" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M49.5 24.75V16.5C49.5 15.0413 48.9205 13.6424 47.8891 12.6109C46.8576 11.5795 45.4587 11 44 11H22C20.5413 11 19.1424 11.5795 18.1109 12.6109C17.0795 13.6424 16.5 15.0413 16.5 16.5V55" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.5 55H27.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M55 46.75V41.25C55 39.7913 54.4205 38.3924 53.3891 37.3609C52.3576 36.3295 50.9587 35.75 49.5 35.75C48.0413 35.75 46.6424 36.3295 45.6109 37.3609C44.5795 38.3924 44 39.7913 44 41.25V46.75" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M57.75 46.75H41.25C39.7312 46.75 38.5 47.9812 38.5 49.5V57.75C38.5 59.2688 39.7312 60.5 41.25 60.5H57.75C59.2688 60.5 60.5 59.2688 60.5 57.75V49.5C60.5 47.9812 59.2688 46.75 57.75 46.75Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTrendUp = (props) => (
  <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M44 19.25H60.5V35.75" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M60.5 19.25L37.125 42.625L23.375 28.875L5.5 46.75" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconMaintenanceBroom = (props) => (
  <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M30.25 5.5V11" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M33 8.25H27.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M37.125 28.875L60.5 5.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40.5185 38.0627C41.1292 37.0136 41.3756 35.792 41.2194 34.5883C41.0632 33.3845 40.5132 32.2662 39.655 31.4077L34.595 26.345C33.7363 25.4862 32.6175 24.9358 31.4132 24.7796C30.2088 24.6234 28.9867 24.8702 27.9373 25.4815L6.88054 37.7492C6.51631 37.9614 6.20572 38.2544 5.97277 38.6057C5.73981 38.957 5.59074 39.3572 5.53705 39.7752C5.48336 40.1933 5.5265 40.6182 5.66313 41.0169C5.79976 41.4157 6.02623 41.7777 6.32504 42.075L23.9333 59.6832C24.231 59.9807 24.593 60.2059 24.9914 60.3415C25.3898 60.4771 25.814 60.5194 26.2314 60.4652C26.6487 60.411 27.0481 60.2618 27.3987 60.0289C27.7492 59.7961 28.0417 59.4859 28.2535 59.1222L40.5185 38.0627Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M55 41.25V52.25" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M60.5 46.75H49.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 11V22" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.75 49.5L19.25 44" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 16.5H5.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.1724 29.425L36.5779 44.8278" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconWallet = (props) => (
  <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M52.25 19.25V11C52.25 10.2707 51.9603 9.57118 51.4445 9.05546C50.9288 8.53973 50.2293 8.25 49.5 8.25H13.75C12.2913 8.25 10.8924 8.82946 9.86091 9.86091C8.82946 10.8924 8.25 12.2913 8.25 13.75C8.25 15.2087 8.82946 16.6076 9.86091 17.6391C10.8924 18.6705 12.2913 19.25 13.75 19.25H55C55.7293 19.25 56.4288 19.5397 56.9445 20.0555C57.4603 20.5712 57.75 21.2707 57.75 22V33M57.75 33H49.5C48.0413 33 46.6424 33.5795 45.6109 34.6109C44.5795 35.6424 44 37.0413 44 38.5C44 39.9587 44.5795 41.3576 45.6109 42.3891C46.6424 43.4205 48.0413 44 49.5 44H57.75C58.4793 44 59.1788 43.7103 59.6945 43.1945C60.2103 42.6788 60.5 41.9793 60.5 41.25V35.75C60.5 35.0207 60.2103 34.3212 59.6945 33.8055C59.1788 33.2897 58.4793 33 57.75 33Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.25 13.75V52.25C8.25 53.7087 8.82946 55.1076 9.86091 56.1391C10.8924 57.1705 12.2913 57.75 13.75 57.75H55C55.7293 57.75 56.4288 57.4603 56.9445 56.9445C57.4603 56.4288 57.75 55.7293 57.75 55V44" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTreeGrowth = (props) => (
  <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M27.4999 27.5V28.05C29.3034 28.7436 30.8063 30.0482 31.7464 31.7363C32.6865 33.4245 33.0043 35.3891 32.6442 37.2875C32.2842 39.1859 31.2692 40.8978 29.7762 42.1245C28.2833 43.3512 26.4071 44.0149 24.4749 44H13.7499C11.8408 43.9525 10.0072 43.2441 8.56204 41.9957C7.11685 40.7473 6.14952 39.0362 5.82505 37.1543C5.50057 35.2723 5.83905 33.3361 6.78274 31.6758C7.72643 30.0155 9.21689 28.7341 10.9999 28.05V27.5C10.9999 25.312 11.8691 23.2135 13.4163 21.6664C14.9634 20.1192 17.0619 19.25 19.2499 19.25C21.4379 19.25 23.5364 20.1192 25.0835 21.6664C26.6307 23.2135 27.4999 25.312 27.4999 27.5Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.25 44V60.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35.75 52.25V60.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32.9999 52.25H55.8249C56.3631 52.2424 56.8873 52.0771 57.3325 51.7744C57.7776 51.4717 58.1242 51.0451 58.3291 50.5473C58.5341 50.0496 58.5885 49.5026 58.4855 48.9743C58.3825 48.4459 58.1268 47.9594 57.7499 47.575L49.4999 38.5H50.3249C50.8631 38.4924 51.3873 38.3271 51.8325 38.0244C52.2776 37.7217 52.6242 37.2951 52.8291 36.7973C53.0341 36.2996 53.0885 35.7526 52.9855 35.2243C52.8825 34.6959 52.6268 34.2094 52.2499 33.825L43.9999 24.75H44.5499C45.1116 24.8007 45.6753 24.6774 46.1646 24.3969C46.6539 24.1165 47.0451 23.6924 47.2852 23.1821C47.5254 22.6718 47.6028 22.1 47.507 21.5442C47.4113 20.9884 47.147 20.4755 46.7499 20.075L35.7499 8.25L31.8999 12.375" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconUserStar = (props) => (
  <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M44.1401 34.694C44.3218 34.1367 44.6769 33.652 45.1534 33.3107C45.63 32.9694 46.2031 32.7892 46.7893 32.7966C47.3754 32.804 47.9439 32.9985 48.4117 33.3517C48.8795 33.7049 49.2223 34.1983 49.3899 34.76L51.4166 38.753C51.6139 39.1412 51.9005 39.477 52.2528 39.7328C52.6052 39.9886 53.0132 40.157 53.4434 40.2243L57.9369 40.9283C58.5155 40.9305 59.0787 41.1153 59.5462 41.4561C60.0138 41.797 60.3619 42.2767 60.5411 42.8269C60.7202 43.3771 60.7212 43.9698 60.544 44.5206C60.3667 45.0714 60.0203 45.5523 59.5539 45.8948L56.3309 49.1068C56.0223 49.414 55.7911 49.7901 55.6563 50.2041C55.5215 50.6182 55.4869 51.0583 55.5554 51.4883L56.2676 55.924C56.4636 56.48 56.4757 57.0842 56.3022 57.6476C56.1287 58.211 55.7787 58.7037 55.3039 59.0531C54.8292 59.4024 54.2547 59.59 53.6652 59.5881C53.0757 59.5862 52.5024 59.395 52.0299 59.0425L48.0011 56.98C47.613 56.7812 47.1832 56.6775 46.7471 56.6775C46.3111 56.6775 45.8812 56.7812 45.4931 56.98L41.4644 59.0425C40.9919 59.392 40.4198 59.581 39.8321 59.5816C39.2444 59.5823 38.6719 59.3947 38.1987 59.0462C37.7254 58.6978 37.3761 58.2069 37.2022 57.6455C37.0283 57.0841 37.0388 56.4818 37.2321 55.9268L37.9416 51.491C38.0102 51.061 37.9756 50.6209 37.8408 50.2069C37.7059 49.7928 37.4747 49.4168 37.1661 49.1095L33.9871 45.9388C33.505 45.6047 33.1422 45.1252 32.9519 44.5703C32.7616 44.0155 32.7538 44.4143 32.9295 42.8546C33.1052 42.2949 33.4553 41.8061 33.9285 41.4595C34.4018 41.113 34.9735 40.9268 35.5601 40.9283L40.0509 40.2243C40.4811 40.157 40.8891 39.9886 41.2415 39.7328C41.5938 39.477 41.8804 39.1412 42.0776 38.753L44.1401 34.694Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 41.25H19.25C16.3326 41.25 13.5347 42.4089 11.4718 44.4718C9.40892 46.5347 8.25 49.3326 8.25 52.25V57.75" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27.5 30.25C33.5751 30.25 38.5 25.3251 38.5 19.25C38.5 13.1749 33.5751 8.25 27.5 8.25C21.4249 8.25 16.5 13.1749 16.5 19.25C16.5 25.3251 21.4249 30.25 27.5 30.25Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconHighwayRoad = (props) => (
  <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M33 46.75V57.75" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M33 13.75V8.25" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M33 24.75V33" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.71187 50.7347C5.47721 51.5536 5.43593 52.4157 5.59128 53.2531C5.74663 54.0906 6.09437 54.8806 6.60709 55.5607C7.11982 56.2409 7.7835 56.7927 8.54585 57.1726C9.30819 57.5525 10.1484 57.7502 11.0001 57.75H55.0001C55.8518 57.7505 56.692 57.5531 57.4544 57.1736C58.2168 56.794 58.8807 56.2425 59.3937 55.5627C59.9066 54.8828 60.2547 54.0931 60.4104 53.2557C60.5662 52.4184 60.5253 51.5564 60.2911 50.7375L49.2911 12.2375C48.9624 11.0881 48.2681 10.0772 47.3134 9.35768C46.3587 8.63819 45.1956 8.24934 44.0001 8.25H22.0001C20.8047 8.24934 19.6415 8.63819 18.6868 9.35768C17.7321 10.0772 17.0379 11.0881 16.7091 12.2375L5.71187 50.7347Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconUsersGroup = (props) => (
  <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M44 57.75V52.25C44 49.3326 42.8411 46.5347 40.7782 44.4718C38.7153 42.4089 35.9174 41.25 33 41.25H16.5C13.5826 41.25 10.7847 42.4089 8.72183 44.4718C6.65893 46.5347 5.5 49.3326 5.5 52.25V57.75" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 8.60205C46.3588 9.21357 48.4478 10.591 49.9391 12.5182C51.4304 14.4454 52.2395 16.8132 52.2395 19.25C52.2395 21.6869 51.4304 24.0547 49.9391 25.9819C48.4478 27.9091 46.3588 29.2865 44 29.898" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M60.5 57.7499V52.2499C60.4982 49.8127 59.687 47.445 58.1938 45.5188C56.7005 43.5925 54.6099 42.2167 52.25 41.6074" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.75 30.25C30.8251 30.25 35.75 25.3251 35.75 19.25C35.75 13.1749 30.8251 8.25 24.75 8.25C18.6749 8.25 13.75 13.1749 13.75 19.25C13.75 25.3251 18.6749 30.25 24.75 30.25Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconProtectTitle = (props) => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M30.375 18H23.625" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M33.75 4.5L31.5 9H38.25C39.4435 9 40.5881 9.47411 41.432 10.318C42.2759 11.1619 42.75 12.3065 42.75 13.5V45C42.75 46.1935 42.2759 47.3381 41.432 48.182C40.5881 49.0259 39.4435 49.5 38.25 49.5H15.75C14.5565 49.5 13.4119 49.0259 12.568 48.182C11.7241 47.3381 11.25 46.1935 11.25 45V13.5C11.25 12.3065 11.7241 11.1619 12.568 10.318C13.4119 9.47411 14.5565 9 15.75 9H22.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38.0228 49.4999C37.5054 46.9579 36.1253 44.6729 34.1164 43.0318C32.1074 41.3906 29.5931 40.4941 26.999 40.4941C24.4049 40.4941 21.8905 41.3906 19.8816 43.0318C17.8726 44.6729 16.4926 46.9579 15.9751 49.4999" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.25 4.5L27 18" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27 40.5C30.7279 40.5 33.75 37.4779 33.75 33.75C33.75 30.0221 30.7279 27 27 27C23.2721 27 20.25 30.0221 20.25 33.75C20.25 37.4779 23.2721 40.5 27 40.5Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconProtectRsd = (props) => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24.75 38.25H31.5V42.75C31.5 43.3467 31.7371 43.919 32.159 44.341C32.581 44.763 33.1533 45 33.75 45H38.25C38.8467 45 39.419 44.763 39.841 44.341C40.263 43.919 40.5 43.3467 40.5 42.75V36C41.5481 35.6511 42.5005 35.0627 43.2816 34.2816C44.0627 33.5005 44.6511 32.5481 45 31.5H47.25C47.8467 31.5 48.419 31.2629 48.841 30.841C49.263 30.419 49.5 29.8467 49.5 29.25V24.75C49.5 24.1533 49.263 23.581 48.841 23.159C48.419 22.7371 47.8467 22.5 47.25 22.5H45C45 20.7535 44.5934 19.031 43.8123 17.4688C43.0312 15.9067 41.8972 14.5479 40.5 13.5V6.75C39.1028 6.75 37.7248 7.07531 36.4751 7.70016C35.2254 8.325 34.1383 9.23224 33.3 10.35L32.625 11.25H24.75C21.1696 11.25 17.7358 12.6723 15.2041 15.2041C12.6723 17.7358 11.25 21.1696 11.25 24.75V27C11.25 28.7465 11.6566 30.469 12.4377 32.0312C13.2188 33.5933 14.3528 34.9521 15.75 36V42.75C15.75 43.3467 15.9871 43.919 16.409 44.341C16.831 44.763 17.4033 45 18 45H22.5C23.0967 45 23.669 44.763 24.091 44.341C24.5129 43.919 24.75 43.3467 24.75 42.75V38.25Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 22.5H36.0229" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 18V20.25C4.5 21.4435 4.97411 22.5881 5.81802 23.432C6.66193 24.2759 7.80653 24.75 9 24.75H11.25" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconProtectFence = (props) => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 6.75L4.5 11.25V45C4.5 46.35 5.4 47.25 6.75 47.25H11.25C12.6 47.25 13.5 46.35 13.5 45V11.25L9 6.75Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 18H22.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 40.5H22.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27 6.75L22.5 11.25V45C22.5 46.35 23.4 47.25 24.75 47.25H29.25C30.6 47.25 31.5 46.35 31.5 45V11.25L27 6.75Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31.5 18H40.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31.5 40.5H40.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M45 6.75L40.5 11.25V45C40.5 46.35 41.4 47.25 42.75 47.25H47.25C48.6 47.25 49.5 46.35 49.5 45V11.25L45 6.75Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconProtectMaintenance = (props) => (
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24.75 4.5V9" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27 6.75H22.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30.375 23.625L49.5 4.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M33.1513 31.1422C33.6509 30.2839 33.8525 29.2844 33.7247 28.2995C33.5969 27.3146 33.1469 26.3996 32.4448 25.6972L28.3048 21.555C27.6022 20.8523 26.6868 20.402 25.7014 20.2742C24.7161 20.1464 23.7161 20.3483 22.8575 20.8485L5.62926 30.8857C5.33126 31.0593 5.07714 31.2991 4.88654 31.5865C4.69595 31.8739 4.57397 32.2013 4.53005 32.5434C4.48612 32.8855 4.52141 33.233 4.6332 33.5593C4.74499 33.8855 4.93028 34.1817 5.17476 34.425L19.5815 48.8317C19.8251 49.0751 20.1212 49.2594 20.4472 49.3703C20.7732 49.4813 21.1203 49.5159 21.4618 49.4715C21.8032 49.4272 22.1 49.3051 22.4168 49.1146C22.7037 48.9241 22.943 48.6703 23.1163 48.3727L33.1513 31.1422Z" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M45 33.75V42.75" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M49.5 38.25H40.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9V18" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.25 40.5L15.75 36" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 13.5H4.5" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.3228 24.0752L29.9273 36.6775" stroke="#8DFDBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconHandInvest = (props) => (
  <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0.5" y="0.5" width="61" height="61" rx="9.5" stroke="#0A211F"/>
    <path d="M29.6667 34.9998H32.3333C33.0406 34.9998 33.7189 34.7189 34.219 34.2188C34.719 33.7187 35 33.0404 35 32.3332C35 31.6259 34.719 30.9477 34.219 30.4476C33.7189 29.9475 33.0406 29.6665 32.3333 29.6665H28.3333C27.5333 29.6665 26.8667 29.9332 26.4667 30.4665L19 37.6665" stroke="#0A211F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.3335 42.9999L26.4668 41.1332C26.8668 40.5999 27.5335 40.3332 28.3335 40.3332H33.6668C35.1335 40.3332 36.4668 39.7999 37.4002 38.7332L43.5335 32.8665C44.048 32.3803 44.3483 31.7096 44.3683 31.002C44.3883 30.2943 44.1264 29.6077 43.6402 29.0932C43.1539 28.5787 42.4832 28.2784 41.7756 28.2584C41.0679 28.2384 40.3813 28.5003 39.8668 28.9865L34.2668 34.1865" stroke="#0A211F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.6665 36.3335L25.6665 44.3335" stroke="#0A211F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36.3335 30.8666C38.469 30.8666 40.2001 29.1355 40.2001 27C40.2001 24.8645 38.469 23.1333 36.3335 23.1333C34.198 23.1333 32.4668 24.8645 32.4668 27C32.4668 29.1355 34.198 30.8666 36.3335 30.8666Z" stroke="#0A211F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 25.6665C25.2091 25.6665 27 23.8756 27 21.6665C27 19.4574 25.2091 17.6665 23 17.6665C20.7909 17.6665 19 19.4574 19 21.6665C19 23.8756 20.7909 25.6665 23 25.6665Z" stroke="#0A211F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconLeaf = (props) => (
  <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0.5" y="0.5" width="61" height="61" rx="9.5" stroke="#0A211F"/>
    <path d="M29.6668 41.6665C27.3255 41.6736 25.0671 40.8005 23.3395 39.2204C21.6118 37.6403 20.5412 35.4686 20.3398 33.136C20.1384 30.8034 20.8211 28.4803 22.2523 26.6275C23.6836 24.7747 25.759 23.5274 28.0668 23.1332C35.6668 21.6665 37.6668 20.9732 40.3335 17.6665C41.6668 20.3332 43.0001 23.2398 43.0001 28.3332C43.0001 35.6665 36.6268 41.6665 29.6668 41.6665Z" stroke="#0A211F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.6665 43C17.6665 39 20.1332 35.8533 24.4398 35C27.6665 34.36 30.9998 32.3333 32.3332 31" stroke="#0A211F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTrendBox = (props) => (
  <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0.5" y="0.5" width="61" height="61" rx="9.5" stroke="#0A211F"/>
    <path d="M36.3335 24.3335H44.3335V32.3335" stroke="#0A211F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44.3332 24.3335L32.9998 35.6668L26.3332 29.0002L17.6665 37.6668" stroke="#0A211F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const benefits = [
  { title: 'Premium Sandalwood Plantation', icon: IconStar, description: 'High-value sandalwood carefully nurtured across every thoughtfully planned plot.' },
  { title: 'Gated Farmland Community', icon: IconGatedLock, description: 'A secure master-planned community designed for peaceful and premium ownership.' },
  { title: 'Land Appreciation', icon: IconTrendUp, description: 'Positioned in a high-growth corridor with strong long-term value potential.' },
  { title: '30 Years Free Maintenance', icon: IconMaintenanceBroom, description: 'Professional plantation care and maintenance managed throughout the ownership period.' },
  { title: 'Annual RSD Income', icon: IconWallet, description: 'Eligible plans include annual RSD income throughout the plantation lifecycle.' },
  { title: '100% Sandalwood Proceeds', icon: IconTreeGrowth, description: 'Receive the complete value generated from your sandalwood harvest proceeds.' },
  { title: '15 Years Club Membership', icon: IconUserStar, description: 'Exclusive access to premium lifestyle amenities and resort-inspired experiences.' },
  { title: 'Highway-Facing Location', icon: IconHighwayRoad, description: 'Excellent road connectivity offering effortless access from Hyderabad and beyond.' },
  { title: 'Ideal for Weekend Homes', icon: IconUsersGroup, description: 'Create your private nature retreat surrounded by peace, greenery and comfort.' },
];

const row1Testimonials = [
  {
    name: 'Arjun Reddy',
    role: 'Entrepreneur, Hyderabad',
    quote: '"I was looking for an investment that offered both long-term value and a peaceful escape from the city. Kapil Farms gave me exactly that. The entire process was transparent, and visiting the property gave me complete confidence in my decision."',
  },
  {
    name: 'Priya Sharma',
    role: 'IT Professional',
    quote: '"Owning a sandalwood plantation was something I had never considered before. The team explained every detail clearly, and I appreciate how professionally the plantation is being managed. It\'s an investment I genuinely feel good about."',
  },
  {
    name: 'Rohit Verma',
    role: 'Business Owner',
    quote: '"What stood out for me was the attention to detail. From clear documentation to beautifully maintained community quality. It feels like an investment that truly grows over time."',
  },
  {
    name: 'Sneha Iyer',
    role: 'Marketing Consultant',
    quote: '"We wanted a weekend retreat that could also grow as an asset over time. Kapil Farms offered the perfect balance of nature, security and long-term potential. Every visit has been a refreshing experience."',
  },
  {
    name: 'Vikram Choudhary',
    role: 'Senior Executive',
    quote: '"The clear title deeds and 30-year hassle-free maintenance guarantee gave our family peace of mind. Knowing experts manage our sandalwood plantation while land value appreciates makes it a top choice."',
  },
];

const row2Testimonials = [
  {
    name: 'Karthik Rao',
    role: 'Chartered Accountant',
    quote: '"As someone who evaluates investments carefully, I was impressed by the transparency and professionalism. The combination of premium sandalwood, managed maintenance and clear ownership made it an easy choice."',
  },
  {
    name: 'Neha Gupta',
    role: 'Software Engineer',
    quote: '"Buying farmland felt overwhelming at first, but the Kapil Farms team made the entire journey simple. The site visit answered every question, and today I\'m proud to own a part of this beautiful community."',
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Medical Director',
    quote: '"A rare combination of ecological responsibility and financial security. Visiting our plot on weekends surrounded by lush greenery and thriving sandalwood trees has become our family\'s highlight."',
  },
  {
    name: 'Ananya Nair',
    role: 'Creative Director',
    quote: '"From initial consultation to spot registration, the team was exceptionally supportive. Kapil Farms is not just farmland; it\'s a legacy we are building for our children."',
  },
  {
    name: 'Suresh & Sunita Patel',
    role: 'NRI Investors',
    quote: '"Living abroad, finding a trustworthy partner for land investment in India is tough. Kapil Farms transparent documentation and regular video updates on plantation growth made remote ownership completely worry-free."',
  },
];

const transparencyFaqs = [
  {
    q: 'What exactly do I own at Kapil Farms?',
    a: 'You get 100% legal ownership with registered title deeds, spot mutation, and a government land passbook directly in your name, complete with clearly demarcated plot boundaries.',
  },
  {
    q: 'Who takes care of the sandalwood plantation?',
    a: 'Our expert team of agricultural scientists and agronomists manage 100% of the land, providing 30 years of comprehensive plantation care, irrigation, and round-the-clock security.',
  },
  {
    q: 'How does the annual RSD income work?',
    a: 'Eligible plot ownership plans receive guaranteed annual Return on Sandalwood (RSD) payouts credited directly to your bank account throughout the crop growth lifecycle.',
  },
  {
    q: 'What happens to the sandalwood at harvest?',
    a: 'Upon harvest maturity (approx. 12–15 years), the valuable sandalwood timber is legally harvested and sold. You receive 100% of the net harvest proceeds from your plot.',
  },
  {
    q: 'Can I build a weekend home or villa on my plot?',
    a: 'Yes! You can construct your private weekend cottage, farmhouse, or retreat on your allocated plot while enjoying the surrounding managed sandalwood plantation.',
  },
  {
    q: 'What does the club membership include?',
    a: 'Every plot owner receives a complimentary 15-year family membership with access to the resort clubhouse, swimming pool, dining hall, guest stay cottages, and nature sports facilities.',
  },
];

const amenities = [
  { title: 'Resort Swimming Pool', image: images.pool, featured: true },
  { title: 'Resort Stay', image: images.cottage },
  { title: 'Clubhouse Lounge', image: images.family },
  { title: 'Nature Walks', image: images.fields },
  { title: 'Guided Farm Experiences', image: images.tractor },
  { title: 'Sandalwood Retreat', image: images.farmer },
];

function Button({ children, light = false, href = '#contact', onClick }) {
  return <a href={href} onClick={onClick} className={`button ${light ? 'button-light' : ''}`}>{children}<FiArrowUpRight /></a>;
}

function AnimatedNumber({ value, suffix = '' }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const start = performance.now();
      const duration = 1200;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{display}{suffix}</span>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [openTransparency, setOpenTransparency] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFarmlandVideoPlaying, setIsFarmlandVideoPlaying] = useState(true);
  const [isLocationVideoPlaying, setIsLocationVideoPlaying] = useState(true);

  const amenityCarouselRef = useRef(null);
  const amenityTrackRef = useRef(null);
  const [amenityDragWidth, setAmenityDragWidth] = useState(0);

  useEffect(() => {
    const updateDragWidth = () => {
      if (amenityCarouselRef.current && amenityTrackRef.current) {
        const carouselWidth = amenityCarouselRef.current.offsetWidth;
        const trackWidth = amenityTrackRef.current.scrollWidth;
        setAmenityDragWidth(Math.max(0, trackWidth - carouselWidth));
      }
    };

    updateDragWidth();
    const timer = setTimeout(updateDragWidth, 500);
    window.addEventListener('resize', updateDragWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDragWidth);
    };
  }, []);
  const [introPhase, setIntroPhase] = useState(() => {
    try {
      if (typeof window !== 'undefined' && sessionStorage.getItem('mruganayani_intro_seen') === 'true') {
        return 'complete';
      }
    } catch (e) {
      // fallback if storage disabled
    }
    return 'intro';
  });

  const handleIntroFinish = () => {
    setIntroPhase('complete');
    try {
      sessionStorage.setItem('mruganayani_intro_seen', 'true');
    } catch (e) {
      // ignore
    }
  };

  const openLeadForm = (event) => {
    event?.preventDefault();
    setMenu(false);
    setLeadSubmitted(false);
    setLeadFormOpen(true);
  };

  const closeLeadForm = () => setLeadFormOpen(false);

  useEffect(() => {
    if (!leadFormOpen) return undefined;
    const handleEscape = (event) => {
      if (event.key === 'Escape') closeLeadForm();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [leadFormOpen]);

  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const farmlandVideoRef = useRef(null);
  const locationVideoRef = useRef(null);
  const visitRef = useRef(null);
  const legacyStatsRef = useRef(null);
  const [activeLegacyStep, setActiveLegacyStep] = useState(0);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end end'] });
  const { scrollYProgress: legacyScrollProgress } = useScroll({
    container: legacyStatsRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.35 });

  useMotionValueEvent(legacyScrollProgress, 'change', (progress) => {
    const nextStep = Math.min(
      legacyStats.length - 1,
      Math.round(progress * (legacyStats.length - 1)),
    );
    setActiveLegacyStep(nextStep);
  });

  const videoY = useTransform(smoothProgress, [0, 1], [0, 0]);
  const videoScale = useTransform(smoothProgress, [0, 0.42, 0.82, 1], [0.76, 1, 1.03, 1.05]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.08, 0.87, 1], [0.35, 1, 1, 0.55]);
  const copyOpacity = useTransform(smoothProgress, [0, 0.22, 0.43], [1, 1, 0]);
  const videoUpliftScale = useTransform(smoothProgress, [0, 1], [1, 1.018]);

  useEffect(() => {
    const section = visitRef.current;
    const image = section?.querySelector('.visit-bg-image');
    const content = section?.querySelector('.visit-content');
    if (!section || !image || !content) return undefined;

    const smoothImageY = gsap.quickTo(image, 'y', { duration: 1.05, ease: 'power3.out' });
    const smoothImageScaleX = gsap.quickTo(image, 'scaleX', { duration: 1.05, ease: 'power3.out' });
    const smoothImageScaleY = gsap.quickTo(image, 'scaleY', { duration: 1.05, ease: 'power3.out' });
    const smoothContentY = gsap.quickTo(content, 'y', { duration: 0.9, ease: 'power3.out' });
    let frame = 0;

    gsap.set(image, { scaleX: 0.82, scaleY: 0.82, transformOrigin: 'center center' });

    const updateVisitMotion = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = gsap.utils.clamp(0, 1, (viewportHeight - rect.top) / (viewportHeight + rect.height));
      const expansion = 0.82 + progress * 0.34;
      smoothImageY((0.55 - progress) * 90);
      smoothImageScaleX(expansion);
      smoothImageScaleY(expansion);
      smoothContentY((0.5 - progress) * 28);
    };

    const requestVisitMotion = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisitMotion);
    };

    updateVisitMotion();
    window.addEventListener('scroll', requestVisitMotion, { passive: true });
    window.addEventListener('resize', requestVisitMotion);

    return () => {
      window.removeEventListener('scroll', requestVisitMotion);
      window.removeEventListener('resize', requestVisitMotion);
      if (frame) window.cancelAnimationFrame(frame);
      gsap.killTweensOf([image, content]);
    };
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  const toggleLocationVideo = () => {
    if (!locationVideoRef.current) return;
    if (locationVideoRef.current.paused) locationVideoRef.current.play();
    else locationVideoRef.current.pause();
  };

  const toggleFarmlandVideo = () => {
    if (!farmlandVideoRef.current) return;
    if (farmlandVideoRef.current.paused) farmlandVideoRef.current.play();
    else farmlandVideoRef.current.pause();
  };

  const handleLegacyWheel = (event) => {
    const stats = legacyStatsRef.current;
    if (!stats || window.matchMedia('(max-width: 900px)').matches || !event.deltaY) return;

    const maxScroll = stats.scrollHeight - stats.clientHeight;
    if (maxScroll <= 0) return;

    const nextScroll = Math.max(0, Math.min(maxScroll, stats.scrollTop + event.deltaY));
    const atBoundary = (nextScroll === 0 && event.deltaY < 0) || (nextScroll === maxScroll && event.deltaY > 0);
    if (atBoundary) return;

    event.preventDefault();
    stats.scrollTo({ top: nextScroll, behavior: 'smooth' });
  };
  return <div className="site-shell">
    {introPhase !== 'complete' && (
      <LogoIntro
        onRevealStart={() => setIntroPhase('revealing')}
        onIntroFinish={handleIntroFinish}
      />
    )}

    <header className="site-header">
      <div className="nav-wrap">
        <a className="brand" href="#top"><img src={navLogo} alt="Mruganayani" /></a>
        <div className="nav-actions">
          <nav>
            <a href="#story">About us</a>
            <a href="#investment">Our Farmlands</a>
            <a href="#location" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>More <FiChevronDown /></a>
          </nav>
          <Button href="#contact" onClick={openLeadForm}>Book a site visit</Button>
        </div>
        <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Open menu">{menu ? <FiX /> : <FiMenu />}</button>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
          >
            <a href="#story" onClick={() => setMenu(false)}>About us</a>
            <a href="#investment" onClick={() => setMenu(false)}>Our Farmlands</a>
            <a href="#location" onClick={() => setMenu(false)}>Location & More</a>
            <Button href="#contact" onClick={openLeadForm}>Book a site visit</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

    <main id="top">
      <section className="video-scroll-hero" ref={heroRef}>
        <div className="video-scroll-sticky">
          <motion.div
            className="video-scroll-copy"
            initial={introPhase === 'complete' ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            animate={introPhase !== 'intro' ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>For Your Future.<br /><span className="hero-title-line">For Generations.</span></h1>
            <p>Own a piece of Mruganayani’s 100+ acres of premium gated sandalwood farmland<br className="hero-copy-break" /> at Hyderabad, where nature, investment, and lasting value grow together.</p>
            <div className="hero-actions"><Button href="#contact" onClick={openLeadForm}>Book a site visit</Button><Button light href="#contact" onClick={openLeadForm}>Enquire Now</Button></div>
          </motion.div>
          <motion.div
            className="hero-video-frame"
            initial={introPhase === 'complete' ? { scale: 1 } : { scale: 1.05 }}
            animate={introPhase !== 'intro' ? { scale: 1 } : { scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity: 1 }}
          >
            <img className="video-fallback" src={images.hero} alt="Mruganayani premium farmland" />
            <video ref={videoRef} autoPlay muted loop playsInline preload="auto" onCanPlay={() => setVideoReady(true)} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} style={{ opacity: videoReady ? 1 : 0 }} poster={images.hero} aria-label="Mruganayani farmland video">
              <source src="https://res.cloudinary.com/pcggq4wl/video/upload/kapilhero_1_-compressed.mp4" type="video/mp4" />
              <source src="/herovideo.mp4" type="video/mp4" />
            </video>
            <button className="video-control" type="button" onClick={toggleVideo} aria-label={isPlaying ? 'Pause video' : 'Play video'}>{isPlaying ? <FiPause /> : <FiPlay />}</button>
          </motion.div>
        </div>
      </section>

      <section className="included dark-section section-pad" id="story">
        <div className="section-heading center"><h2>Everything included<br />with your plot</h2></div>
        <div className="benefit-carousel">
          <div className="benefit-grid">{benefits.map(({ title, icon: Icon, description }) => <article className="benefit" key={title}><Icon /><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="numbers section-pad"><div className="section-heading center"><h2>More Than Farmland.<br /><em>a Legacy That Grows</em></h2></div><div className="number-grid"><div className="number-row"><p>A master planned gated farmland designed for nature, ownership and long term growth.</p><div><b><AnimatedNumber value={100} /></b><small>Acres of Community</small></div><p>Flexible plot sizes designed for every investment journey and long-term ownership.</p><div><b><AnimatedNumber value={2} suffix="–5" /></b><small>Guntas</small></div></div><div className="number-row"><p>Every ownership plan includes premium Indian sandalwood plantation.</p><div><b><AnimatedNumber value={20} /></b><small>Trees</small></div><p>Decades of experience creating trusted farmland and plantation communities.</p><div><b><AnimatedNumber value={1981} /></b><small>Since</small></div></div></div></section>

      <section className="split-dark section-pad"><div className="split-copy"><h2>Everything That<br /><em>Protects Investment</em></h2><p>Everything behind your ownership is thoughtfully planned—from clear legal titles and professional plantation management to long-term care and lasting value.</p><ul>{[[IconProtectTitle, '100% Clear Title', 'Transparent ownership with legally verified documentation.'], [IconProtectRsd, 'Annual RSD Income', 'Eligible plans include annual RSD income throughout the plantation lifecycle.'], [IconProtectFence, 'Gated Farmland Community', 'A secure, master-planned community designed for premium ownership.'], [IconProtectMaintenance, '30 Years Free Maintenance', 'Professional plantation care and long-term maintenance included.']].map(([Icon, title, text]) => <li key={title}><Icon /><div><b>{title}</b><span>{text}</span></div></li>)}</ul></div><div className="split-image"><img src="/investment.jpg" alt="Mruganayani farmland owners" /></div></section>

      <section className="journey section-pad" id="investment">
        <div className="section-heading center">
          <h2>From Investment<br /><em>To Lasting Value</em></h2>
          <p>From investment to harvest, we manage every step so you can enjoy effortless ownership.</p>
        </div>
        <div className="journey-grid">
          <div className="journey-row">
            <div className="journey-card mint">
              <div className="journey-icon"><IconHandInvest /></div>
              <div className="journey-content">
                <h3>You Invest</h3>
                <p>Own your farmland with transparent documentation and clear legal ownership.</p>
              </div>
            </div>
            <div className="journey-image">
              <img src="/YouInvest.jpg" onError={(event) => { event.currentTarget.src = images.hero; }} alt="You invest in managed farmland" />
            </div>
          </div>

          <div className="journey-row reverse">
            <div className="journey-image">
              <img src="/Sandalwood.jpg" onError={(event) => { event.currentTarget.src = images.hero; }} alt="Sandalwood plantation care" />
            </div>
            <div className="journey-card mint">
              <div className="journey-icon"><IconLeaf /></div>
              <div className="journey-content">
                <h3>We Plant Sandalwood</h3>
                <p>Our experts plant, nurture and maintain your premium sandalwood for the long term.</p>
              </div>
            </div>
          </div>

          <div className="journey-row">
            <div className="journey-card mint">
              <div className="journey-icon"><IconTrendBox /></div>
              <div className="journey-content">
                <h3>Your Value Grows</h3>
                <p>Benefit from premium sandalwood, managed care and long-term land appreciation.</p>
              </div>
            </div>
            <div className="journey-image">
              <img src={images.farmer} onError={(event) => { event.currentTarget.src = images.hero; }} alt="Long-term farmland value growth" />
            </div>
          </div>
        </div>
      </section>

      <section className="farmland-video-section" aria-label="Mruganayani farmland video">
        <div className="farmland-video-heading">
          <h2>A Place to Own. A Future to Grow.</h2>
        </div>
        <div className="farmland-video-frame">
          <video ref={farmlandVideoRef} autoPlay muted loop playsInline preload="metadata" onPlay={() => setIsFarmlandVideoPlaying(true)} onPause={() => setIsFarmlandVideoPlaying(false)} aria-label="Mruganayani map animation">
            <source src="https://res.cloudinary.com/pcggq4wl/video/upload/MRUGANAYANI_MAP_ANIMATION_1.mp4" type="video/mp4" />
          </video>
          <button className="video-control" type="button" onClick={toggleFarmlandVideo} aria-label={isFarmlandVideoPlaying ? 'Pause map animation' : 'Play map animation'}>{isFarmlandVideoPlaying ? <FiPause /> : <FiPlay />}</button>
        </div>
      </section>

      <section className="asset section-pad"><div className="section-heading center"><h2>Own a sandalwood<br /><em>asset that grows</em></h2></div><div className="asset-grid"><article><div className="asset-art"><img src={sandalwoodShoot} alt="Sandalwood shoot" /></div><span className="asset-number">01</span><h3>Start With Sandalwood</h3><p>A simple entry into the long-term potential of professionally managed farmland.</p><ul><li>8 Sandalwood plants</li><li>₹16,000 RSD income per year*</li><li>30 Years Managed plantation care</li></ul><a className="investment-cta" href="#contact" onClick={openLeadForm}><span>Starting investment</span><b>₹4,80,000</b><FiArrowUpRight /></a></article><article><div className="asset-art"><img src={sandalwoodShoot} alt="Sandalwood shoot" /><img src={farmhouseSketch} alt="Farmhouse" /></div><span className="asset-number">02</span><h3>Own the Land + Sandalwood</h3><p>Own a premium farmland ownership with sandalwood plantation, professional management and lifestyle.</p><ul><li>5 Guntas Farmland ownership</li><li>20 Sandalwood plants</li><li>₹40,000 RSD income per year*</li><li>30 Years Plantation care</li></ul><a className="investment-cta" href="#contact" onClick={openLeadForm}><span>Starting investment</span><b>₹27,12,500</b><FiArrowUpRight /></a></article></div><p className="asset-note">Two flexible ways to invest in premium sandalwood from a starter plan to a premium gated farm plot.</p></section>

      <section className="visit visit-full-bleed section-pad" ref={visitRef}><img className="visit-bg-image" src={visitBg} alt="Farm cottage surrounded by trees" /><div className="visit-content"><h2>Ready to<br />Experience It?</h2><p>Walk through the plantation, explore the community and discover the ownership option that fits your vision.</p><div className="visit-actions"><Button light onClick={openLeadForm}>Book a site visit</Button><a className="visit-secondary" href="#contact" onClick={openLeadForm}>Enquire Now <FiArrowUpRight /></a></div></div></section>

      <section className="lifestyle section-pad">
        <div className="section-heading">
          <h2>More Than Amenities.<br /><em>A Life Surrounded by Nature.</em></h2>
          <p>Every space is thoughtfully designed to make your time at Kapil Farms more relaxing, active and memorable.</p>
        </div>
        <div className="amenity-carousel" ref={amenityCarouselRef}>
          <motion.div
            className="amenity-track"
            ref={amenityTrackRef}
            drag="x"
            dragConstraints={{ right: 0, left: -amenityDragWidth }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {[...amenities, ...amenities, ...amenities].map((amenity, index) => (
              <article className={amenity.featured ? 'amenity-card amenity-featured' : 'amenity-card'} key={`${amenity.title}-${index}`}>
                <div className="amenity-image-wrap">
                  <img src={amenity.image} alt={amenity.title} draggable="false" />
                </div>
                <h3>{amenity.title}</h3>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="legacy section-pad" onWheel={handleLegacyWheel}>
        <div className="legacy-fixed">
          <article className="legacy-card">
            <img src={kapilLogo} alt="Kapil Farms Logo" className="legacy-card-logo" />
          </article>
          <div className="legacy-copy">
            <span className="legacy-overline">SINCE 1981</span>
            <h2>Backed by a Legacy.<br /><em>Built for Your Future.</em></h2>
            <p>The Kapil Group began with chit funds in 1981 and entered real estate in 1982. Today it spans 25+ verticals from financial services and solar power to hospitality and drone technology.</p>
            <p>With Mruganayani, we invite you closer to nature to own a premium sandalwood asset, or simply unwind with your family amid the outdoors.</p>
          </div>
        </div>

        <div className="legacy-stats" ref={legacyStatsRef}>
          {/*
            { value: 100, label: "Acres of Community", text: "A master planned gated farmland designed for nature, ownership and long term growth." },
            { value: 2, suffix: "–5", label: "Guntas", text: "Flexible plot sizes designed for every investment journey and long-term ownership." },
            { value: 8, suffix: "–20", label: "Trees", text: "Every ownership plan includes premium Indian sandalwood plantation." },
            { value: 1981, label: "Since", text: "Decades of experience creating trusted farmland and plantation communities." }
          ].map((stat, idx) => (
            <div key={idx} className="legacy-stat-wrap">
              <motion.div
                initial={{ opacity: 0.3, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.35, once: false }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7 }}
              >
                <div className="legacy-stat-header">
                  <b><AnimatedNumber value={stat.value} suffix={stat.suffix} /></b>
                  <span>{stat.label}</span>
                </div>
                <p className="legacy-stat-desc">{stat.text}</p>
              </motion.div>
            </div>
          */}
          {legacyStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`legacy-stat-wrap ${activeLegacyStep === idx ? 'is-active' : ''}`}
            >
              <div className="legacy-stat-header">
                <b>{stat.value}{stat.suffix}</b>
                <span>{stat.label}</span>
              </div>
              <p className="legacy-stat-desc">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="location dark-section section-pad" id="location"><div className="section-heading center"><h2>Strategically placed for growth</h2><p>A high-growth corridor near Hyderabad with effortless reach to the city.</p></div><div className="map-grid"><div className="map-card-wrapper"><div className="map-pill-badge"><span className="map-pill-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.601 21.799C14.461 20.193 20 14.993 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 14.993 9.539 20.193 11.399 21.799C11.5723 21.9293 11.7832 21.9998 12 21.9998C12.2168 21.9998 12.4277 21.9293 12.601 21.799Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span className="map-pill-text">Nearby Landmarks</span></div><div className="map-card map-one"><img src={locationMapOne} alt="Nearby Landmarks Map" className="map-card-img" /></div></div><div className="map-card-wrapper"><div className="map-pill-badge"><span className="map-pill-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L19 21L12 17L5 21L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span className="map-pill-text">Nearby Travel Areas</span></div><div className="map-card map-two"><img src={locationMapTwo} alt="Nearby Travel Areas Map" className="map-card-img" /></div></div></div></section>

      <div className="location-video-wrap"><div className="location-video-frame"><video ref={locationVideoRef} className="location-video" autoPlay muted loop playsInline preload="metadata" onPlay={() => setIsLocationVideoPlaying(true)} onPause={() => setIsLocationVideoPlaying(false)} aria-label="Kapil Farms location animation"><source src="https://res.cloudinary.com/pcggq4wl/video/upload/MRUGANAYANI_MAP_ANIMATION_1.mp4" type="video/mp4" /></video><button className="video-control location-video-control" type="button" onClick={toggleLocationVideo} aria-label={isLocationVideoPlaying ? 'Pause location animation' : 'Play location animation'}>{isLocationVideoPlaying ? <FiPause /> : <FiPlay />}</button></div></div>

      <section className="transparency section-pad">
        <div>
          <h2>Before You Own,<br /><em>Know Everything.</em></h2>
          <div className="line-list">
            {transparencyFaqs.map((faq, idx) => {
              const isOpen = openTransparency === idx;
              return (
                <div key={idx} className="transparency-line-item">
                  <button
                    onClick={() => setOpenTransparency(isOpen ? -1 : idx)}
                    className="transparency-line-button"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <FiX className="transparency-line-icon" /> : <FiPlus className="transparency-line-icon" />}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="transparency-line-answer"
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
        <img src={fieldImg} alt="Orderly rows of a plantation" />
      </section>

      <section className="why-owners section-pad">
        <video className="why-owners-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="https://res.cloudinary.com/pcggq4wl/video/upload/AI_SKETCH_VIDEO.mp4" type="video/mp4" />
        </video>
        <div className="section-heading center">
          <h2>Why Owners<br /><em>Choose Kapil Farms.</em></h2>
          <p>Real experiences from people who found more than an investment; they found a place to belong.</p>
        </div>
        <div className="testimonial-carousel-wrapper">
          <div className="testimonial-row">
            <div className="testimonial-track testimonial-track-left">
              {[...row1Testimonials, ...row1Testimonials, ...row1Testimonials].map((item, idx) => (
                <div key={`row1-${idx}`} className="testimonial-card">
                  <div className="testimonial-card-header">
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>
                  <div className="testimonial-card-divider" />
                  <p>{item.quote}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="testimonial-row mt-6">
            <div className="testimonial-track testimonial-track-right">
              {[...row2Testimonials, ...row2Testimonials, ...row2Testimonials].map((item, idx) => (
                <div key={`row2-${idx}`} className="testimonial-card">
                  <div className="testimonial-card-header">
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>
                  <div className="testimonial-card-divider" />
                  <p>{item.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-cta" aria-labelledby="testimonial-cta-title">
        <div className="testimonial-cta-card">
          <h2 id="testimonial-cta-title">Ready to<br />Experience It?</h2>
          <p>Walk through the plantation, explore the community and discover the ownership option that fits your vision.</p>
          <div className="testimonial-cta-actions">
            <a href="#contact" className="testimonial-cta-primary" onClick={openLeadForm}>Book a site visit <FiArrowUpRight /></a>
            <a href="#contact" className="testimonial-cta-secondary" onClick={openLeadForm}>Enquire Now <FiArrowUpRight /></a>
          </div>
        </div>
      </section>
    </main>
    <AnimatePresence>
      {leadFormOpen && (
        <motion.div
          className="lead-modal-backdrop"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeLeadForm(); }}
        >
          <motion.section
            className="lead-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-form-title"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <button className="lead-modal-close" type="button" onClick={closeLeadForm} aria-label="Close form"><FiX /></button>
            <FiMessageCircle className="lead-modal-icon" aria-hidden="true" />
            {leadSubmitted ? (
              <div className="lead-form-success" role="status">
                <h2 id="lead-form-title">Thank you!</h2>
                <p>We’ve received your details and will be in touch shortly.</p>
              </div>
            ) : (
              <>
                <h2 id="lead-form-title">Fill up the details</h2>
                <p className="lead-modal-subtitle">Kindly fill the details below</p>
                <form className="lead-form" onSubmit={(event) => { event.preventDefault(); setLeadSubmitted(true); }}>
                  <label>Full Name*<input name="name" type="text" autoComplete="name" required autoFocus /></label>
                  <label>Email*<input name="email" type="email" autoComplete="email" required /></label>
                  <label>Phone number*<input name="phone" type="tel" autoComplete="tel" inputMode="tel" required /></label>
                  <button type="submit">Send</button>
                </form>
              </>
            )}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
    <footer className="site-footer" id="contact">
      <img src={footerBg} alt="Aerial farmland footer background" className="footer-bg-img" />
      <div className="footer-overlay" />
      <div className="site-footer-inner">
        <div className="footer-brand"><img src={navLogo} alt="Mruganayani" /></div>
        <div className="footer-rule" />
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <a href="#top">Home</a>
            <a href="#story">Our Story</a>
            <a href="#investment">Blogs and News</a>
            <a href="#investment">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Policies</h3>
            <a href="#contact">Terms & Conditions</a>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Compliance</a>
            <a href="#contact">Legal Disclaimer</a>
          </div>
          <div>
            <h3>Socials</h3>
            <a href="#contact"><FiLinkedin className="footer-social-icon" /> LinkedIn</a>
            <a href="#contact"><FiInstagram className="footer-social-icon" /> Instagram</a>
            <a href="#contact"><FiYoutube className="footer-social-icon" /> Youtube</a>
            <a href="#contact"><FiFacebook className="footer-social-icon" /> Facebook</a>
          </div>
        </div>
        <div className="footer-contact">
          <div>
            <h3>Contact</h3>
            <a href="tel:+919839837280">+91 98398 37280</a>
          </div>
          <div>
            <h3>Email Us</h3>
            <a href="mailto:marketing@kapilfarms.in">marketing@kapilfarms.in</a>
          </div>
          <div>
            <h3>Location</h3>
            <p>Opp. Vishnudhara garden, Jagatpur, Off S G Highway, Hyderabad - 382470</p>
          </div>
        </div>
        <div className="footer-copyright">
          <span>© {new Date().getFullYear()} Kapil Group. All rights reserved.</span>
          <span>Designed and Developed By <a href="https://rdfad.com/" target="_blank" rel="noopener noreferrer">rdfad.com</a></span>
        </div>
      </div>
    </footer>
  </div>;
}

export default App;
