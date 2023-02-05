import { upload, dashboard, folder, host, rocket, profile, image, video, clock } from '../assets';
import { HomeIcon, HostIcon, ImageIcon, VideoIcon, FolderIcon, ClockIcon, UploadIcon, UserIcon } from "../assets/Icons"

export const navlinks = [
  {
    name: 'dashboard',
    tip: 'Home',
    imgUrl: dashboard,
    link: '/dashboard',
    icon: <HomeIcon className="h-4 w-4" />
  },
  {
    name: 'host',
    tip: 'Hosting',
    imgUrl: rocket,
    link: '/dashboard/host',
    icon: <HostIcon className="h-4 w-4" />
  },
  {
    name: 'upload media',
    tip: 'Upload',
    imgUrl: upload,
    link: '/dashboard/uploadmedia',
    icon: <UploadIcon className="h-4 w-4" />
  },
  {
    name: 'files',
    tip: 'Files',
    imgUrl: folder,
    link: '/dashboard/files',
    icon: <FolderIcon className="h-4 w-4" />
  },
  {
    name: 'videos',
    tip: 'Videos',
    imgUrl: video,
    link: '/dashboard/videos',
    icon: <VideoIcon className="h-4 w-4" />
  },
  {
    name: 'photos',
    tip: 'Photos',
    imgUrl: image,
    link: '/dashboard/photos',
    icon: <ImageIcon className="h-4 w-4" />
  },
  {
    name: 'recent',
    tip: 'Recent',
    imgUrl: clock,
    link: '/dashboard/recent',
    icon: <ClockIcon className="h-4 w-4" />
  },
  {
    name: 'profile',
    tip: 'Profile',
    imgUrl: profile,
    link: '/dashboard/profile',
    icon: <UserIcon className="h-4 w-4" />
  },
];