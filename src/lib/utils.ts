import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import YoutubeIcon from "../assets/icons/yotube.svg"
import LinkdienIcon from "../assets/icons/Link.svg"
import GoogleIcon from "../assets/icons/google.svg"
import FacebookIcon from "../assets/icons/FacebookIcon.svg"
import InteriokeysLogo from "../assets/icons/Interiokeys.svg"



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export { YoutubeIcon, LinkdienIcon, GoogleIcon, FacebookIcon, InteriokeysLogo }