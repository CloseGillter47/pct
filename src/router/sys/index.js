// import HelloWorld from '@/components/HelloWorld'

export const biz_url = '/biz';

const routers = [

    {
        path: '/test',
        meta: { title: '' },
        component: (resolve) => require(['@/pages/index-v.vue'], resolve)
    }

];

routers.forEach((v) => { v.path = biz_url + v.path })

export default routers;