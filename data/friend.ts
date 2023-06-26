export const Friends: Friend[] = [
  {
    title: '愧怍',
    description: '记录所学知识，领略编程之美',
    website: 'https://kuizuo.cn/',
    avatar: '/img/friend/kuizuo.png',
  },
  {
    title: '妞妞大魔王',
    description: '计算机爱好者',
    website: 'https://www.nndmw.club/',
    avatar: '/img/friend/nndmw.jpg',
  },
  {
    title: 'Pincman',
    description: '中年老码农,专注于全栈开发与教学',
    website: 'https://3rcd.com/',
    avatar: '/img/friend/pincman.png',
  },

]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
