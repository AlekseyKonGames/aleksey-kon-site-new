export class ProjectData {
  constructor({ isButton, isIconButton, images, icon, href }) {
    this.isButton = isButton;
    this.isIconButton = isIconButton;
    this.images = images;
    this.icon = icon;
    this.href = href;
  }
}

export const projectsData = [
  new ProjectData({
    isButton: true,
    isIconButton: true,
    images: [
      "/images/projects/eva/eva1.webp",
      "/images/projects/eva/eva2.webp",
      "/images/projects/eva/eva3.webp",
      "/images/projects/eva/eva4.webp",
      "/images/projects/eva/eva5.webp"
    ],
    icon: "/images/icons/steam-black.webp",
    href: "https://store.steampowered.com/app/3176450/Eva_Platformer/"
  }),
  new ProjectData({
    isButton: true,
    isIconButton: true,
    images: [
      "/images/projects/crypt/crypt1.png",
      "/images/projects/crypt/crypt2.png",
    ],
    icon: "/images/icons/github.webp",
    href: "https://github.com/Aleksey-Kon/Aleksey-Kon-Crypt"
  }),
  new ProjectData({
    isButton: false,
    isIconButton: false,
    images: [
      "/images/projects/spine/1.webp",
      "/images/projects/spine/2.webp",
      "/images/projects/spine/3.webp"
    ],
    icon: ""
  }),
  new ProjectData({
    isButton: false,
    isIconButton: false,
    images: [
      "/images/projects/site/site1.png",
      "/images/projects/site/site2.png",
    ],
    icon: ""
  }),
  new ProjectData({
    isButton: false,
    isIconButton: false,
    images: [
      "/images/projects/hb-project/1.webp",
      "/images/projects/hb-project/2.webp",
      "/images/projects/hb-project/3.webp",
    ],
    icon: ""
  })
];
