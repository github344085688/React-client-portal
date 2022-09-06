import layout from '../layouts/layout';
import Login from '../layouts/login/login';
import error from '../layouts/error';
import layoutCol from '../layouts/page/layoutCol';

import DashboardIcon from "@/assets/img/dashboard.svg";
import TMSIcon from "@/assets/img/tms2.svg";
import ServiceIcon from "@/assets/img/service.svg";
import BrokerageIcon from "@/assets/img/brokerage.svg";
import PaymentsIcon from "@/assets/img/payments.svg";
import BusinessInfoIcon from "@/assets/img/businessInfo.svg";
import MessageCenterIcon from "@/assets/img/MessageCenter.svg";
import settingIcon from "@/assets/img/setting.svg";

export const routerConfig = [
  {
    path: "/Login",
    component: Login,
    exact: false,
  },
  {
    path: '/home',
    component: layout,
    exact: false,
    children: [
      {
        groupName: '',
        childs: [
          {
          path: '/home/dashboard',
          component: layoutCol,
          title: 'Dashboard',
          icon: DashboardIcon,
            exact: true,
        },]
      },
      {
        groupName: 'MAIN MENU',
        childs: [
        {
          title: 'TMS',
          icon: TMSIcon,
          childs: [
            {
            title: 'Invoices', exact: true,
            path: '/home/tms',
            component: error,
          }, {
            title: 'Invoice History',
            path: '/home/tms',
            component: error, exact: true,
          }],
        },
        {
          title: 'Service',
          icon: ServiceIcon,
          childs: [
            {
            title: 'Option1', exact: false,
            path: '/home/service',
            component: error,
          }, {
            title: 'Option2',
            path: '/home/service',
            component: error, exact: false,
          }, {
            title: 'Option3', path: '/home/service',
            component: error,exact: false,
          }, {
            title: 'Option4', path: '/home/service',
            component: error,exact: false,
          }, {
            title: 'Option5', path: '/home/service',
            component: error,exact: false,
          }, {
            title: 'Option6', path: '/home/service',
            component: error,exact: false,
          }, {
            title: 'Option7', path: '/service',
            component: error,exact: false,
          }, {
            title: 'Option8', path: '/home/service',
            component: error,exact: false,
          }, {
            title: 'Option9', path: '/home/service',
            component: error,exact: false,
          },],
        },
        {
          title: 'Brokerage',
          icon: BrokerageIcon,
          childs: [
            {
            title: 'Option1',
            path: '/home/brokerage',
            component: error,
          }, {
            title: 'Option2',
            path: '/home/brokerage',
            component: error,
          }, {
            title: 'Option3',
            path: '/home/brokerage',
            component: error,
          }, {
            title: 'Option4',
            path: '/home/brokerage',
            component: error,
          }, {
            title: 'Option5',
            path: '/home/brokerage',
            component: error,
          }, {
            title: 'Option6',
            path: '/home/brokerage',
            component: error,
          }, {
            title: 'Option7',
            path: '/home/brokerage',
            component: error,
          },],
        },
      ]
      },
      {
        groupName: 'MY BUSINESS',
        childs: [
        {
          title: 'Payments ',
          icon: PaymentsIcon,
          path: '/home/payments',
          component: error,
        }, {
          title: 'Business Info  ',
          icon: BusinessInfoIcon,
          path: '/home/business-info',
          component: error,
        },
      ]
      },
      {
        groupName: 'GENERAL',
        childs: [
        {
          title: 'Message Center ',
          icon: MessageCenterIcon,
          path: '/home/message-center',
          component: error, exact: true,
        }, {
          title: 'Settings',
          icon: settingIcon,
          path: '/home/settings',
          component: error, exact: true,
        },
      ]
      },
    ]
  }
];

