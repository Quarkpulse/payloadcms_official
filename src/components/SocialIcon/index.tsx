import Link from 'next/link'
import { type ComponentPropsWithRef } from 'react'

import classes from './index.module.scss'

type SocialIconProps = {
  platform:
    | 'discord'
    | 'facebook'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'npm'
    | 'twitter'
    | 'web'
    | 'x'
    | 'youtube'
  size?: 'large' | 'regular' | 'small'
} & ComponentPropsWithRef<typeof Link>

export const SocialIcon: React.FC<SocialIconProps> = (props) => {
  const { className, platform, size = 'regular' } = props
  return (
    <Link {...props} className={[classes.icon, classes[size], className].join(' ')}>
      {icon[platform]}
    </Link>
  )
}

const icon = {
  discord: (
    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8765 16.7582C10.8765 17.8593 11.6913 18.7544 12.6777 18.7544C13.6829 18.7544 14.4599 17.8593 14.4773 16.7582C14.4946 15.657 13.686 14.7541 12.6745 14.7541C11.663 14.7541 10.8765 15.657 10.8765 16.7582Z"
        fill="currentColor"
      />
      <path
        d="M17.5227 16.7582C17.5227 17.8593 18.3344 18.7544 19.3223 18.7544C20.3275 18.7544 21.103 17.8593 21.1203 16.7582C21.1376 15.657 20.3354 14.7541 19.3223 14.7541C18.3092 14.7541 17.5227 15.657 17.5227 16.7582Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM18.8158 8.4209C20.2407 8.66198 21.6279 9.08877 22.9419 9.69036C25.2056 13.0001 26.3303 16.733 25.915 21.0401C24.3855 22.171 22.6726 23.0299 20.8513 23.579C20.4412 23.0287 20.0786 22.4446 19.7675 21.8329C20.3603 21.6113 20.9324 21.3382 21.4774 21.0165C21.3358 20.9205 21.1958 20.8135 21.059 20.7018C19.4763 21.4461 17.7489 21.832 16 21.832C14.251 21.832 12.5237 21.4461 10.941 20.7018C10.8057 20.8057 10.6657 20.9126 10.5226 21.0165C11.0665 21.3376 11.6376 21.6103 12.2293 21.8313C11.9178 22.4433 11.5552 23.0279 11.1455 23.579C9.32583 23.0276 7.61417 22.1684 6.08493 21.0385C5.73099 17.3245 6.43887 13.557 9.05017 9.69351C10.3655 9.09182 11.7536 8.66402 13.1795 8.4209C13.3744 8.76951 13.5508 9.12815 13.708 9.49531C15.2259 9.26658 16.7694 9.26658 18.2872 9.49531C18.4444 9.12811 18.6208 8.76947 18.8158 8.4209Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  facebook: (
    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 16C0 23.92 5.76 30.48 13.36 31.84L13.4543 31.7628C13.4494 31.7619 13.4445 31.761 13.4395 31.7602V20.4802H9.43954V16.0002H13.4395V12.4802C13.4395 8.48015 15.9995 6.24015 19.6795 6.24015C20.7995 6.24015 22.0795 6.40015 23.1995 6.56015V10.6402H21.1195C19.1995 10.6402 18.7195 11.6002 18.7195 12.8801V16.0002H22.9595L22.2395 20.4802H18.7195V31.7602C18.671 31.769 18.6224 31.7776 18.5739 31.7859L18.64 31.84C26.24 30.48 32 23.92 32 16C32 7.2 24.8 0 16 0C7.2 0 0 7.2 0 16Z"
        fill="currentColor"
      />
    </svg>
  ),
  github: (
    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1467_186)">
        <path
          clipRule="evenodd"
          d="M16.0132 0C7.15833 0 0 7.2111 0 16.1322C0 23.2633 4.58659 29.2997 10.9494 31.4362C11.7449 31.5968 12.0363 31.089 12.0363 30.6619C12.0363 30.2879 12.0101 29.006 12.0101 27.6703C7.5556 28.632 6.62799 25.7472 6.62799 25.7472C5.91212 23.8776 4.85143 23.3971 4.85143 23.3971C3.39348 22.4088 4.95763 22.4088 4.95763 22.4088C6.57489 22.5157 7.4235 24.0648 7.4235 24.0648C8.85491 26.5218 11.1615 25.8276 12.0894 25.4001C12.2218 24.3585 12.6463 23.6373 13.097 23.2368C9.54422 22.8628 5.80625 21.474 5.80625 15.2774C5.80625 13.5146 6.44214 12.0724 7.44973 10.9507C7.29075 10.5502 6.73386 8.89391 7.60903 6.67715C7.60903 6.67715 8.96111 6.24973 12.0098 8.33309C13.315 7.97996 14.6611 7.80032 16.0132 7.79881C17.3653 7.79881 18.7436 7.98597 20.0164 8.33309C23.0654 6.24973 24.4175 6.67715 24.4175 6.67715C25.2926 8.89391 24.7354 10.5502 24.5764 10.9507C25.6106 12.0724 26.2202 13.5146 26.2202 15.2774C26.2202 21.474 22.4823 22.8359 18.9029 23.2368C19.4864 23.7442 19.9898 24.7056 19.9898 26.2281C19.9898 28.3914 19.9636 30.1277 19.9636 30.6616C19.9636 31.089 20.2553 31.5968 21.0505 31.4365C27.4133 29.2994 31.9999 23.2633 31.9999 16.1322C32.0262 7.2111 24.8416 0 16.0132 0Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_1467_186">
          <rect fill="currentColor" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  ),
  instagram: (
    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.0837 16.004C13.0837 17.6155 14.3896 18.9207 16.0004 18.9207C17.6111 18.9207 18.917 17.6155 18.917 16.004C18.917 14.3933 17.6111 13.0873 16.0004 13.0873C14.3896 13.0873 13.0837 14.3933 13.0837 16.004Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M19.5353 8.87496C18.6122 8.83267 18.3351 8.82392 15.9989 8.82392C13.6626 8.82392 13.3863 8.83267 12.4631 8.87424C10.0897 8.98215 8.98501 10.108 8.87636 12.461C8.8348 13.3841 8.82532 13.6605 8.82532 15.9967C8.82532 18.3337 8.83407 18.6101 8.87636 19.5325C8.98428 21.8811 10.0861 23.0113 12.4631 23.12C13.3855 23.1623 13.6626 23.171 15.9989 23.171C18.3366 23.171 18.6122 23.1623 19.5353 23.12C21.9088 23.012 23.0134 21.8848 23.1221 19.5332C23.1637 18.6108 23.1724 18.3344 23.1724 15.9975C23.1724 13.6612 23.1644 13.3841 23.1221 12.4617C23.0142 10.108 21.9066 8.98288 19.5353 8.87496ZM15.9975 11.5136C13.5162 11.5136 11.5044 13.5253 11.5044 16.0067C11.5044 18.488 13.5162 20.5005 15.9975 20.5005C18.4789 20.5005 20.4907 18.4888 20.4907 16.0067C20.4907 13.5253 18.4789 11.5136 15.9975 11.5136ZM20.6713 10.2831C20.0909 10.2831 19.6206 10.7534 19.6206 11.3331C19.6206 11.9128 20.0909 12.3831 20.6713 12.3831C21.251 12.3831 21.7206 11.9128 21.7206 11.3331C21.7206 10.7534 21.251 10.2831 20.6713 10.2831Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM12.3928 7.3025C13.3261 7.26021 13.6236 7.25 16 7.25C18.3764 7.25 18.6746 7.26021 19.6086 7.30323C22.7893 7.44906 24.5546 9.21802 24.6975 12.3928C24.7398 13.3261 24.75 13.6236 24.75 16C24.75 18.3764 24.7398 18.6746 24.6968 19.6079C24.5531 22.7885 22.7827 24.5517 19.6079 24.6975C18.6746 24.7398 18.3764 24.75 16 24.75C13.6236 24.75 13.3261 24.7398 12.3921 24.6975C9.21146 24.5517 7.44833 22.7856 7.3025 19.6079C7.26021 18.6746 7.25 18.3764 7.25 16C7.25 13.6236 7.26021 13.3261 7.30323 12.3921C7.44906 9.21146 9.2151 7.44833 12.3928 7.3025Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  linkedin: (
    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM8.18346 24H11.6965V13.461H8.18346V24ZM8.00781 9.94796C8.00781 11.0247 8.87377 11.8959 9.93997 11.8959C11.0062 11.8959 11.8721 11.0247 11.8721 9.94796C11.8721 8.87298 11.0079 8 9.93997 8C8.87201 8 8.00781 8.87298 8.00781 9.94796ZM20.4825 24H23.992V18.0999C23.992 12.3315 18.4977 12.5423 16.966 15.3808V13.461H13.453V24H16.966V18.9746C16.966 15.9499 20.4825 15.6707 20.4825 18.9746V24Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  npm: (
    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.0658 8.93345H8.93293V23.0663H15.9378V12.4974H19.5018V23.0663H23.0658V8.93345Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM7 7H25V25H7V7Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  twitter: (
    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM23.8041 8H21.0899L16.6173 13.1126L12.7502 8H7.14941L13.8415 16.7508L7.49895 24H10.2148L15.11 18.4066L19.3881 24H24.8503L17.8743 14.7774L23.8041 8ZM21.6413 22.3754H20.1373L10.319 9.53928H11.933L21.6413 22.3754Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  x: (
    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM23.8041 8H21.0899L16.6173 13.1126L12.7502 8H7.14941L13.8415 16.7508L7.49895 24H10.2148L15.11 18.4066L19.3881 24H24.8503L17.8743 14.7774L23.8041 8ZM21.6413 22.3754H20.1373L10.319 9.53928H11.933L21.6413 22.3754Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  youtube: (
    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6246 19.1069V12.8848L19.958 15.9904L13.6246 19.1069Z" fill="currentColor" />
      <path
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM22.0285 9.14321C19.1754 8.95188 12.8207 8.95265 9.97146 9.14321C6.88633 9.35009 6.52296 11.181 6.5 16C6.52296 20.8105 6.88317 22.6491 9.97146 22.8568C12.8215 23.0473 19.1754 23.0481 22.0285 22.8568C25.1137 22.6499 25.477 20.819 25.5 16C25.477 11.1895 25.1168 9.35087 22.0285 9.14321Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  web: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 32C24.8364 32 32 24.8367 32 16C32 7.16333 24.8364 0 16 0C7.16357 0 0 7.16333 0 16C0 24.8367 7.16357 32 16 32ZM11.0322 15H7.05469C7.46582 11.2832 10.1396 8.24878 13.6685 7.30493C12.126 9.58154 11.2109 12.2371 11.0322 15ZM13.0371 15C13.2402 12.2612 14.2749 9.64941 16 7.51465C17.7251 9.64941 18.7598 12.2612 18.9629 15H13.0371ZM16 24.4854C14.2749 22.3506 13.2402 19.7388 13.0371 17H18.9629C18.7598 19.7388 17.7251 22.3506 16 24.4854ZM11.0322 17C11.2109 19.7629 12.126 22.4185 13.6685 24.6951C10.1396 23.7512 7.46582 20.7168 7.05469 17H11.0322ZM20.9678 17C20.7891 19.7629 19.874 22.4185 18.3315 24.6951C21.8604 23.7512 24.5342 20.7168 24.9453 17H20.9678ZM20.9678 15H24.9453C24.5342 11.2832 21.8604 8.24878 18.3315 7.30493C19.874 9.58154 20.7891 12.2371 20.9678 15ZM16 5C9.9248 5 5 9.9248 5 16C5 22.0752 9.9248 27 16 27C22.0752 27 27 22.0752 27 16C27 9.9248 22.0752 5 16 5Z"
        fill="currentColor"
      />
    </svg>
  ),
}
