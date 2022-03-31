import React from "react";
import Styles from "./Home.css";
import main from "../../../src/main.png"
import teachers from "../../../src/teachers.png"


const Home = () => {
  return (
    <>
      <div className="home">
        <div className="div-main">
          <div className="main-pic">
            <img src={main} alt="" />
          </div>

          <div className="main-right">
            <h1 className="main-h1">
              <span className="h1-span">For every student,</span>
              <span>every classroom.</span>
              <span>Real results.</span>
            </h1>
            <p className="main-p">
              <span className="span-p">
                "We’re a nonprofit with the mission to provide a free,
                world-class education for anyone, anywhere."{" "}
              </span>
            </p>

            <div className="btns">
              <a href="" className="btns-a">
                <span className="span-a">Learners</span>
              </a>
              <div className="div-a"></div>
              <a href="" className="btns-a">
                <span className="span-a">Teachers</span>
              </a>
              <div className="div-a"></div>
              <a href="" className="btns-a">
                <span className="span-a">Parents</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="main2">
        <div className="main2-div">
          <h2 className="main2-h2">Why Khan Academy works</h2>
          <div className="main2-divs">
            <div className="main2-div1">
              <div className="main2-div1-img">
                <svg
                  fill="none"
                  height="133"
                  viewBox="0 0 148 133"
                  width="148"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M11.6411 54.9121C26.4516 44.9142 33.1548 41.1105 44.5255 38.0781C55.8961 35.0457 75.6034 31.302 80.3953 32.5442C85.1872 33.7863 99.6711 41.0119 102.692 44.7422C105.704 48.4752 120.939 81.5386 122.005 87.1393C123.079 92.7304 102.891 102.317 94.6169 107.881C86.3432 113.445 75.0146 116.637 57.2285 115.332C39.4324 114.03 23.1391 118.375 15.3422 110.374C7.54523 102.373 0.0957031 92.5974 0.0957031 92.5974C0.0957031 92.5974 2.61459 71.4317 3.25604 69.2446C3.8975 67.0575 11.6411 54.9121 11.6411 54.9121Z"
                    fill="#BDE9DB"
                  ></path>
                  <path
                    d="M59.1245 41.5318C55.2476 41.2189 51.3263 41.029 48.6261 44.1958C47.0712 46.0196 45.2154 48.5709 44.4359 50.8804C42.6992 56.0259 44.2438 62.0221 46.5923 66.6327C48.6479 70.6683 53.57 71.5693 57.7377 71.4895C60.1365 71.4436 62.0775 70.264 64.2681 69.6478C67.3144 68.7911 68.2215 66.0232 70.3527 64.0079C72.6018 61.8812 73.4487 56.7246 73.6893 53.7431C73.9156 50.9397 72.1156 47.5738 70.0743 45.704C65.1732 41.2146 59.1245 37.7998 52.6456 41.0089"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M79.203 35.1269C82.9733 27.7454 86.9671 20.5759 90.5136 13.0765C90.9934 12.062 92.8994 5.20563 94.1564 5.23301C96.3859 5.28158 97.7956 8.45705 99.0752 9.89383C101.855 13.0153 103.804 15.8379 105.65 19.5931C107.438 23.2317 110.864 26.7635 112.181 30.515C112.35 30.9977 113.43 32.319 112.539 32.2996C111.13 32.2689 109.707 32.071 108.302 31.9577C104.347 31.6384 100.427 31.9591 96.48 32.0346C92.9067 32.103 89.1875 33.4246 85.6339 33.1378C83.2825 32.948 79.4044 33.6105 79.6209 36.1639"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M136.438 40.7488C131.504 40.3506 126.985 40.8084 122.101 41.5982C118.052 42.2528 113.968 42.1399 109.933 42.8456C107.94 43.1942 106.001 43.4078 104.068 44.0443C101.907 44.7556 102.901 48.5835 103.038 50.5937C103.379 55.6181 103.038 60.6377 103.55 65.656C103.741 67.5266 103.25 70.78 104.029 72.4944C104.592 73.7343 103.76 75.1709 104.461 76.4588C104.812 77.1028 109.524 76.7132 110.345 76.7664C114.547 77.0385 118.757 76.3396 122.953 76.2791C125.817 76.2378 129.273 76.8007 132.067 76.2623C133.91 75.9071 135.881 76.2258 137.729 75.8554C138.421 75.7168 141.07 75.5919 141.575 75.1625C142.904 74.0321 142.191 70.6352 142.164 69.2463C142.044 62.9737 140.794 56.7241 139.658 50.5675C139.088 47.4754 138.174 44.506 137.496 41.4473C137.284 40.4884 137.48 38.535 136.518 39.7521"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M19.9468 118.307C23.1257 109.342 28.253 100.663 32.1773 91.9249C33.2352 89.5694 33.9003 86.1403 36.7247 89.2195C39.1277 91.8392 41.0579 94.9273 42.9555 97.8403C45.1733 101.245 47.8687 104.562 49.8925 108.04C50.6847 109.402 56.9362 116.025 56.4825 116.183"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M19.4751 122.605C29.2042 121.809 39.0383 121.586 48.7155 120.45C50.3374 120.26 52.5931 120.303 54.0767 119.629C54.7113 119.34 57.6488 119.165 55.8814 119.022"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M55.9953 98.9665C61.5715 96.9557 66.793 92.1112 70.776 87.786C76.4938 81.5771 79.5848 75.1864 83.1087 67.5738C85.3616 62.7069 86.9527 58.04 88.5539 52.9366C88.9366 51.7166 90.9761 45.3862 90.0076 44.2476C89.8237 44.0314 83.394 51.7607 82.9511 52.2615C79.4568 56.2133 84.6788 49.7212 85.3571 48.6935C85.7607 48.082 88.1415 44.6032 89.1675 44.988C90.2045 45.377 91.4713 49.674 91.8837 50.6973C92.6979 52.7175 93.3524 53.735 92.589 55.7704"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M32.9872 99.945C34.1191 97.5945 36.2449 92.8447 36.2449 92.8447C36.2449 92.8447 30.6658 104.576 27.7684 110.401C26.6236 112.703 25.4478 115 24.5208 117.377C24.1397 118.354 22.9012 121.077 23.828 120.417C24.6393 119.839 25.1032 118.129 25.5911 117.359C27.2532 114.734 28.7495 112.031 30.5049 109.451C33.513 105.029 36.4664 100.655 38.8765 95.9647C41.5024 90.8548 34.8641 106.605 32.5744 111.835C31.3995 114.519 29.7781 117.532 29.5418 120.46C29.448 121.622 30.447 118.274 30.9726 117.207C33.5761 111.921 36.8067 106.881 39.8971 101.8C40.1109 101.448 41.6488 98.8629 41.1153 100.873C40.2575 104.105 39.2562 107.303 38.4943 110.556C37.8898 113.137 36.9443 115.988 36.9213 118.65C36.9125 119.676 39.166 115.15 39.4155 114.542C40.3125 112.357 41.0361 110.11 42.18 108.008C42.5094 107.403 43.3805 105.028 43.1596 106.958C42.7228 110.773 38.1731 121.266 40.9528 118.285C43.6455 115.397 43.8389 111.108 46.5927 108.155C47.1742 107.532 43.8818 117.22 44.3134 117.301C44.9121 117.413 47.332 111.382 48.1813 114.036C48.5718 115.256 48.4389 117.545 50.3897 117.164"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <div className="main2-div1-desc">
                <h3 className="main2-h3">Personalized learning</h3>
                <span className="main2-span">
                  Students practice at their own pace, first filling in gaps in
                  their understanding and then accelerating their learning.
                </span>
              </div>
            </div>
            <div className="main2-div0"></div>
            <div className="main2-div1">
              <div className="main2-div1-img">
                <svg
                  fill="none"
                  height="107"
                  viewBox="0 0 116 107"
                  width="116"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M27.256 22.1812C44.9618 19.7703 52.6561 19.326 64.1947 21.639C75.7332 23.9519 95.0623 29.3166 98.8096 32.5512C102.557 35.7857 112.347 48.6752 113.406 53.3575C114.454 58.0377 113.483 94.4293 111.961 99.9236C110.45 105.413 88.1031 105.075 78.2213 106.403C68.3394 107.731 56.7681 105.579 41.3961 96.5374C26.014 87.4939 9.48015 84.1796 6.02926 73.5542C2.57836 62.9289 0.224609 50.8655 0.224609 50.8655C0.224609 50.8655 11.8506 33.0002 13.3937 31.3228C14.9369 29.6454 27.256 22.1812 27.256 22.1812Z"
                    fill="#BDE9DB"
                  ></path>
                  <path
                    d="M3.10477 29C19.6435 29 35.7341 26.6301 52.3437 26.6301C60.7588 26.6301 69.2873 26.9057 77.6901 26.5972C85.2871 26.3183 92.7322 25.4452 100.371 25.4452C104.991 25.4452 109.611 25.4452 114.232 25.4452C114.27 25.4452 112.928 24.198 112.584 23.9641C111.391 23.1538 110.996 22.2341 109.531 21.5942C101.323 18.0108 93.8847 13.9113 85.105 10.9299C78.1519 8.56872 72.5479 3.86503 65.235 1.87837C63.2657 1.34339 62.7653 0.577586 60.6794 1.28591C56.4204 2.7322 52.3944 5.25107 48.4666 7.07888C37.5129 12.1762 27.0163 17.4932 15.9961 22.4829C11.396 24.5657 6.18023 26.3188 2.23242 29"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M20.3308 34C19.6149 38.81 19.9647 43.8153 19.9647 48.6697C19.9647 51.1548 20.3858 54.0472 19.6799 56.4617C18.6518 59.9784 20.041 64.3525 19.5782 67.9708C19.4206 69.2032 19.2324 70.2964 19.2324 71.5687C19.2324 73.0443 19.4389 72.9999 20.9003 72.9999C22.3507 72.9999 24.5097 72.934 25.8226 72.3638C26.9279 71.8837 28.0649 73.1413 29.1177 72.5625C29.6043 72.2951 28.3855 66.525 28.3855 65.6451C28.3855 62.5617 28.215 59.2351 27.7346 56.1834C27.0149 51.6116 27.8531 46.8329 27.2668 42.2492C27.193 41.6726 26.7466 34.8458 26.3515 34.7355C24.3044 34.1639 17.8357 34.7156 19.9647 34.7156"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M36.2324 32.06C36.3766 42.3293 37.1631 52.5206 37.1631 62.7996C37.1631 64.9485 37.1631 67.0974 37.1631 69.2463C37.1631 69.9832 36.9494 71.303 37.1803 71.9887C37.2138 72.088 37.6096 71.5013 37.7835 71.477C38.1885 71.4205 38.4622 71.1087 38.8865 71.1087C40.1216 71.1087 41.3568 71.1087 42.5919 71.1087C43.1405 71.1087 44.6288 71.4117 45.0564 70.904C45.5543 70.3127 44.8463 64.9953 44.7634 64.1298C44.1962 58.2018 43.6777 52.0224 43.6777 46.0585C43.6777 43.7479 43.3674 41.5318 43.3674 39.223C43.3674 38.0915 43.6948 36.0659 43.2985 35.007C42.9754 34.1437 43.1034 33.3599 43.0572 32.4283C43.0251 31.7805 41.539 32.06 41.127 32.06C39.5989 32.06 35.0145 32.06 36.5426 32.06"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M67.2324 32.4665C68.0927 38.6829 67.5571 45.3041 67.5571 51.5866C67.5571 55.5077 67.5571 59.4287 67.5571 63.3498C67.5571 65.3704 67.7913 67.318 67.8817 69.2904C67.8996 69.6797 67.6241 71.6847 67.8817 71.9656C68.05 72.1492 68.18 71.5437 68.3867 71.4148C68.889 71.1018 69.2503 71.0608 69.8296 71.0608C71.4577 71.0608 73.0444 70.7067 74.6992 70.7067C75.1332 70.7067 76.8958 70.9861 77.2242 70.628C77.2868 70.5597 76.9717 70.0139 76.9717 69.8215C76.9717 69.0543 77.003 68.2813 76.8995 67.52C76.0497 61.2638 75.9978 54.454 75.9978 48.1245C75.9978 45.4328 76.0255 42.2892 75.601 39.6267C75.339 37.9837 75.5428 36.2536 75.096 34.6697C74.8749 33.8861 75.2754 32.8275 74.6271 32.1912C74.2419 31.8131 72.5076 32.1125 72.0299 32.1125C71.185 32.1125 67.898 32.6525 68.2063 32.8206"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M86.2324 29.5745C87.3358 39.3115 87.2669 49.143 87.2669 58.9306C87.2669 61.0865 86.5267 65.846 87.8799 67.6022C88.4073 68.2865 87.6406 69.5033 89.1826 68.7757C90.5606 68.1253 92.5152 68.2387 94.0102 68.2387C94.8629 68.2387 96.2324 68.6459 96.2324 67.5028C96.2324 64.3912 95.8876 61.3416 95.8876 58.2146C95.8876 48.8145 95.1979 39.4862 95.1979 30.1115C95.1979 28.8976 95.1297 28.765 94.1635 29.296C93.4559 29.6849 92.3592 29.7322 91.5772 29.9126C90.0625 30.2621 85.3703 29.9325 86.9221 29.9325"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M5.16015 88C4.98272 87.5314 2.48815 80.3312 3.45391 80.0536C6.68186 79.1257 10.8663 79.5275 14.1867 79.5275C29.7521 79.5275 45.3393 77.328 60.8883 76.5649C74.9331 75.8756 89.1866 75.5405 103.242 75.5405C106.191 75.5405 109.099 75.6983 111.911 75.0698C114.784 74.4273 114.14 78.3854 114.14 80.2474C114.14 81.0139 114.55 84.4577 113.644 84.5113C110.497 84.6976 107.055 85.3839 103.957 84.7605C97.8032 83.5222 91.4937 84.5103 85.2987 83.9022C76.7547 83.0636 67.8792 84.0129 59.2647 84.0129C47.3922 84.0129 34.9335 84.5755 23.2409 86.754C17.7963 87.7684 1.10916 87.5016 6.64624 87.5016"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M52.2324 32.25C52.2324 36.9047 52.4427 41.5485 52.4824 46.1944C52.5127 49.737 52.2682 53.3394 52.4963 56.875C52.7655 61.0467 52.9824 65.3316 52.9824 69.5C52.9824 70.619 53.4622 69.9812 54.2324 70.3056C55.0807 70.6627 56.6824 70.75 57.6074 70.75C58.4799 70.75 59.233 70.5 60.1074 70.5C61.5539 70.5 60.6452 68.9725 60.4269 67.75C58.6885 58.0152 58.0845 48.0529 57.7324 38.1944C57.6648 36.3019 57.4546 34.1138 57.4546 32.3889C57.4546 32.3417 55.3578 32 55.1213 32C54.1288 32 53.5867 32.4652 52.7324 32.75"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <div className="main2-div1-desc">
                <h3 className="main2-h3">Trusted content</h3>
                <span className="main2-span">
                  Created by experts, Khan Academy’s library of trusted,
                  standards-aligned practice and lessons covers math K-12
                  through early college, grammar, science, history, SAT®, and
                  more. It’s all free for learners and teachers.
                </span>
              </div>
            </div>
            <div className="main2-div0"></div>
            <div className="main2-div1">
              <div className="main2-div1-img">
                <svg
                  fill="none"
                  height="101"
                  viewBox="0 0 133 101"
                  width="133"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M104.991 65.7341C93.7893 76.9591 88.6184 81.5151 79.3678 86.7574C70.1172 91.9997 53.8726 99.9862 49.6212 100.363C45.3698 100.741 32.0332 99.3573 28.9398 97.4526C25.8545 95.5433 8.25927 75.5772 6.56742 71.7904C4.87004 68.0128 20.7057 55.6499 26.9665 49.3945C33.2272 43.1391 42.4197 37.7923 57.7367 33.9891C73.0619 30.1814 86.3172 22.6696 94.0725 26.403C101.828 30.1364 109.536 35.2532 109.536 35.2532C109.536 35.2532 110.358 51.3131 110.118 53.0745C109.879 54.8358 104.991 65.7341 104.991 65.7341Z"
                    fill="#BDE9DB"
                  ></path>
                  <path
                    d="M28.9993 52.9999C28.9993 56.9906 26.3468 70.9999 31.7771 70.9999C37.0189 70.9999 42.1431 70.9593 41.9993 64.7777C41.9239 61.5363 40.9993 58.5037 40.9993 55.2221C40.9993 53.1652 42.1866 52.9999 39.9993 52.9999C37.9506 52.9999 29.0997 51.2006 29.9993 52.9999"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M53.0003 67C52.8454 56.4706 50.5873 44.9793 50.0003 35C49.7798 31.2521 50.2085 31 54.0003 31C56.4992 31 58.5731 31.2384 61.0003 31.7778C62.7628 32.1695 65.1344 30.7923 66.4447 31.1667C68.8717 31.8601 67.0003 60.6232 67.0003 65.5C67.0003 69.3799 63.9794 67.5212 61.0003 68.2222C59.8558 68.4915 53.3415 69 57.0003 69"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M76.0537 9.94443C75.6903 9.86369 77.2844 60.04 77.4426 67C78.5 70.5 88.356 69.5 90.9426 69.5C94.8281 69.5 92.2204 67 92.2204 63C91.4426 60 91.4426 51.8609 91.4426 49.9444C91.4426 39.3346 90.3984 28.1428 92.2204 17.6667C93.0216 13.0593 91.8891 13 87.6648 13C83.7376 13 79.8354 10.7848 76.0537 9.94443Z"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M3 53C16.924 48.8228 26.2875 41.5192 34.6726 29.9091C37.8596 25.4963 41.2098 20.3736 43.6082 15.5768"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M32.4609 18.762C34.839 16.8119 38.5625 12.7983 42.0158 12.3921C43.3924 12.2301 44.1329 9.89979 45.997 10.0034C49.5903 10.203 47.2402 20.5779 49.9782 21.9469"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M128.5 35C127.805 37.5491 127.329 40.4822 128.389 43C128.835 44.0603 128.122 43.9144 127.5 43.5"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M122 40.4999C124.832 40.8539 127.154 40.1579 129.889 39.611C130.832 39.4224 131.412 39.4119 132 39.9999"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M113 4.89258C113.559 1.88669 113 -1.49795 113 3.69813C113 5.78968 114 11.9841 114 9.89258"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M108 4.8928C109.505 4.6419 119.5 2.9771 119.5 5.3928"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M6 8C6.456 11.591 6.5 15.1398 6.5 18.75C6.5 19.1839 6.64387 22.7877 6 21.5"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M1 16C4.60253 15.052 8.06366 16.0195 11.6111 15.3889C12.1851 15.2868 14.0563 15.0563 13.5 14.5"
                    stroke="#21242c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <div className="main2-div1-desc">
                <h3 className="main2-h3">Tools to empower teachers</h3>
                <span className="main2-span">
                  With Khan Academy, teachers can identify gaps in their
                  students’ understanding, tailor instruction, and meet the
                  needs of every student.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main3">
          <div className="main3-svg">
              <img src={teachers} alt="" />
          </div>
          <div className="main3-right">
              <span className="main3-span1">Teachers</span>
              <h2 className="main3-h2">
                  "I'm finally able to truly
                  differentiate
                  my classroom. This has been priceless for my students' engagement."
              </h2>
              <span className="main3-span2">
              UDAYA LAKSHMI PALAPALA / Middle school Coordinator / Hyderabad, Telangana
              </span>
              <p className="main3-p">
              We empower teachers to support their entire classroom. 90% of US teachers who have used Khan Academy have found us effective.
              </p>
              <span className="main3-span3">
              SOURCE: 2018 ConStat U.S. Online Education Customer Survey
              </span>
              <div className="main3-btn">
                  <div className="main3-btn1">
                      <a href="" className="main3-btna">
                          <span className="main3-span">Teachers, start here</span>
                      </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="main4">
          <div className="main4-div1">
              <div className="main4-imgdiv">
                  <img className="main4-img" src="" alt="" />
              </div>
          </div>
          <div className="main4-div2">
              <span className="main4-span2"></span>
              <h2 className="main4-h2">
              You can learn anything.
              </h2>
              <p className="main4-p">
              Build a deep, solid understanding in math, science, grammar, history, SAT®, and more.
              </p>
              <div className="main4-btn">
                  <div className="main4-btn1">
                  <a href="" className="main4-a">
                      <span className="main4-span1">Learners, start here</span>
                  </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="main5">
        <h2 className="main5-h2">join Khan Academy</h2>
        <div className="main5-div1">
          <img src="" alt="" />
        </div>
        <div className="main5-div2">
          <a href="" className="main5-a">
            <span> Learners</span>
          </a>
          <a href="" className="main5-a">
          <span>Teachers</span>
          </a>
          <a href="" className="main5-a">
          <span>Parents</span>
          </a>
          <a href="" className="main5-a">
          <span>Give today</span>
          </a>
        </div>
      </div>

      <div className="main6main">
      <div className="main6">
        <h2 className="suph2">Key supporters</h2>
        <div className="sup1div">
          <div className="sup1imgdiv">
            <img  className="sup1img" src="https://cdn.kastatic.org/images/supporters-logos/bank-of-america-gray@2x.png" alt="" />
          </div>
          <div className="sup1imgdiv">
            <img  className="sup1img" src="https://cdn.kastatic.org/images/supporters-logos/college-board-gray@2x.png" alt="" />
          </div>
          <div className="sup1imgdiv">
            <img  className="sup1img" src="https://cdn.kastatic.org/images/supporters-logos/ann-and-john-doerr-gray@2x.png" alt="" />
          </div>
          <div className="sup1imgdiv">
            <img  className="sup1img" src="https://cdn.kastatic.org/images/supporters-logos/gates-foundation-gray@2x.png" alt="" />
          </div>
          <div className="sup1imgdiv">
            <img  className="sup1img" src="https://cdn.kastatic.org/images/supporters-logos/lemann-foundation-gray@2x.png" alt="" />
          </div>
          <div className="sup1imgdiv">
            <img  className="sup1img" src="https://cdn.kastatic.org/images/supporters-logos/carlos-rodriguez-pastor-gray@2x.png" alt="" />
          </div>
          <div className="sup1imgdiv">
            <img  className="sup1img" src="https://cdn.kastatic.org/images/supporters-logos/tata-trusts-gray@2x.png" alt="" />
          </div>
          <div className="sup1imgdiv">
            <img  className="sup1img" src="https://cdn.kastatic.org/images/supporters-logos/valhalla-gray@2x.png" alt="" />
          </div>
        </div>
        <hr  className="hr"/>
        <h2 className="suph2">Supporters of our COVID-19 response</h2>
        <div className="sup2">
          <div className="sup2imgdiv">
            <img class="sup2img" alt="Bank of America" src="https://cdn.kastatic.org/images/supporters-logos/bank-of-america-gray@2x.png"></img>
          </div>
          <div className="sup2imgdiv">
            <img class="sup2img" alt="AT&T" src="https://cdn.kastatic.org/images/supporters-logos/att-gray@2x.png"></img>
          </div>
          <div className="sup2imgdiv">
            <img class="sup2img" alt="Google.org" src="https://cdn.kastatic.org/images/supporters-logos/google-gray@2x.png"></img>
          </div>
          <div className="sup2imgdiv">
            <img class="sup2img" alt="Novartis" src="https://cdn.kastatic.org/images/supporters-logos/novartis-gray@2x.png"></img>
          </div>
          <div className="sup2imgdiv">
            <img class="sup2img" alt="Fastly" src="https://cdn.kastatic.org/images/supporters-logos/fastly-gray@2x.png"></img>
          </div>
          <div className="sup2imgdiv">
            <img class="sup2img" alt="General Motors" src="https://cdn.kastatic.org/images/supporters-logos/gm-gray@2x.png"></img>
          </div>
          <div className="sup2imgdiv">
            <img class="sup2img" alt="Adobe" src="https://cdn.kastatic.org/images/supporters-logos/adobe-gray@2x.png"></img>
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default Home;
