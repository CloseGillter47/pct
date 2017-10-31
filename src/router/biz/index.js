// import HelloWorld from '@/components/HelloWorld'

export const sys_url = '/sys';

const routers = [

    {
        path: '/test',
        meta: { title: '' },
        component: (resolve) => require(['@/pages/index-h.vue'], resolve)
    }

];

routers.forEach((v) => { v.path = sys_url + v.path })

export default routers;