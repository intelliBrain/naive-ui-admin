import { resultSuccess } from '../_util';

const menusList = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: 'LAYOUT',
    redirect: '/dashboard/console',
    meta: {
      icon: 'DashboardOutlined',
      title: 'Dashboard',
    },
    children: [
      {
        path: 'console',
        name: 'dashboard_console',
        component: '/dashboard/console/console',
        meta: {
          title: 'Console',
        },
      },
      {
        path: 'monitor',
        name: 'dashboard_monitor',
        component: '/dashboard/monitor/monitor',
        meta: {
          title: 'Monitoring page',
        },
      },
      {
        path: 'workplace',
        name: 'dashboard_workplace',
        component: '/dashboard/workplace/workplace',
        meta: {
          hidden: true,
          title: 'Workplace',
        },
      },
    ],
  },
];

export default [
  {
    url: '/api/menus',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(menusList);
    },
  },
];
