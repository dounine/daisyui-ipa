export default [
    {
        url: '/user/info',
        method: 'get',
        statusCode: 200,
        response: ({query}) => {
            return {
                ok: true,
                data: {
                    id: 1234,
                    name: 'admin',
                    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/cf/62/94/cf629405-c734-b662-670e-ead40f1bca02/AppIcon-0-0-1x_U007emarketing-0-7-0-0-sRGB-85-220.png/512x512bb.jpg',
                    coin: '0.38',
                    download: 23,
                }
            }
        }
    },
]