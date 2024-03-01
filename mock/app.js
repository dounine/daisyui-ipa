export default [
    {
        url: '/app/versions',
        method: 'get',
        statusCode: 200,
        response: ({query}) => {
            return {
                ok: true,
                data: {
                    info: {
                        name: '方块消消乐2022',
                        genres: ['休闲'],
                        description: '方块消消乐2022',
                        free: true,
                        price: '',
                        minimumOsVersion: '14.0',
                        country: 'cn',
                        appid: '123434',
                        version: '1.0.0',
                        size: 12342134,
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/de/e8/a1/dee8a11e-43a4-10ad-cc39-f2c6cba8aff3/AppIcon-1x_U007emarketing-0-10-0-85-220.jpeg/512x512bb.jpg',
                    },
                    versions: [
                        {
                            version: '1.0.0',
                            size: 341234,
                            time: 1789089089,
                        },
                        {
                            version: '1.0.0',
                            size: 341234,
                            time: 1789089089,
                        }
                    ]
                }
            }
        }
    },
    {
        url: '/app/hots',
        method: 'get',
        statusCode: 200,
        response: ({query}) => {
            return {
                ok: true,
                data: [
                    {
                        id: 1,
                        name: '方块消消乐2022',
                        country: 'CN',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/de/e8/a1/dee8a11e-43a4-10ad-cc39-f2c6cba8aff3/AppIcon-1x_U007emarketing-0-10-0-85-220.jpeg/512x512bb.jpg'
                    },
                    {
                        id: 2,
                        name: '饥饿鲨：进化',
                        country: 'CN',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ee/54/ab/ee54ab0d-b676-3bd4-e56a-52199e11ca22/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                    {
                        id: 3,
                        name: 'Plants vs. Zombies™ Heroes',
                        country: 'US',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2f/d4/e1/2fd4e190-0b68-398e-e4cb-eb972c65a995/AppIcon-0-0-1x_U007emarketing-0-0-0-9-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                    {
                        id: 4,
                        name: '邮掌柜',
                        country: 'CN',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/cf/62/94/cf629405-c734-b662-670e-ead40f1bca02/AppIcon-0-0-1x_U007emarketing-0-7-0-0-sRGB-85-220.png/512x512bb.jpg'
                    },
                    {
                        id: 5,
                        name: '爱养成3 - 单机乙女模拟恋爱游戏(神话换装)',
                        country: 'CN',
                        icon: 'https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/c6/10/21/c610217c-0d83-4b0e-659f-95ad2d233526/AppIcon-1x_U007emarketing-0-7-85-220.png/512x512bb.jpg'
                    },
                    {
                        id: 6,
                        name: '富学宝典',
                        country: 'CN',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/a2/e9/13/a2e91377-5336-0063-14a1-6dbe6f44ebc1/AppIcon-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/512x512bb.jpg'
                    },
                    {
                        id: 7,
                        name: 'Stick War: Legacy',
                        country: 'US',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/7a/34/f0/7a34f0b0-737f-3214-0aa0-8a279ac607b0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                    {
                        id: 8,
                        name: '喵呜动漫-新番追番神器里番组达人精选弹幕视频大全',
                        country: 'CN',
                        icon: 'https://is5-ssl.mzstatic.com/image/thumb/Purple127/v4/49/ac/96/49ac96ae-576a-4eec-802b-33587a141f66/mzl.gdqvlnku.png/512x512bb.jpg'
                    },
                ],
            }
        },
    },
    {
        url: '/app/news',
        method: 'get',
        statusCode: 200,
        response: ({query}) => {
            return {
                ok: true,
                data: [
                    {
                        id: 1,
                        name: 'Lingokids — 使用英语学习',
                        country: 'CN',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/0b/59/e6/0b59e6e9-6178-ffc0-e535-13fd8ea00115/LisaHalloweenIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                    {
                        id: 2,
                        name: '多点-最快30分钟新鲜到家优选好物特卖商城',
                        country: 'CN',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/c0/07/73/c0077358-1c32-3703-ddc4-093f643decd3/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                    {
                        id: 3,
                        name: '转转-二手官方验',
                        country: 'CN',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/0b/a7/93/0ba793a2-95c5-f9ad-0fd9-216f0ad41d46/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                    {
                        id: 4,
                        name: '证件照随拍-智能美颜证件照制作软件',
                        country: 'CN',
                        icon: 'https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/50/53/5e/50535eb2-e4ee-5821-0081-260d6611dbc6/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                    {
                        id: 5,
                        name: '八字合婚',
                        country: 'CN',
                        icon: 'https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/dd/e9/7a/dde97a25-8f38-e202-d9dc-c91942faeabb/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                    {
                        id: 6,
                        name: 'LEET Servers for Minecraft BE',
                        country: 'US',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/01/39/88/01398803-2b96-f931-a26d-39b9c4a6faf0/AppIcon-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg'
                    },
                    {
                        id: 7,
                        name: 'Bleach: Brave Souls Anime Game',
                        country: 'US',
                        icon: 'https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/2e/64/1d/2e641de6-2cdd-ed76-e9f2-cdd55575a467/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                    {
                        id: 8,
                        name: 'Happy Sandwich Cafe',
                        country: 'US',
                        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/dc/d9/6f/dcd96fa9-ba9b-f206-3804-54f2e69d760e/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'
                    },
                ],
            }
        },
    },
    {
        url: '/api/text',
        method: 'post',
        rawResponse: async (req, res) => {
            let reqbody = ''
            await new Promise((resolve) => {
                req.on('data', (chunk) => {
                    reqbody += chunk
                })
                req.on('end', () => resolve(undefined))
            })
            res.setHeader('Content-Type', 'text/plain')
            res.statusCode = 200
            res.end(`hello, ${reqbody}`)
        },
    },
]