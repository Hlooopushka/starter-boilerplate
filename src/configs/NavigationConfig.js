import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'ОСНОВНЫЕ',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'home-home-dashboard',
      path: `${APP_PREFIX_PATH}/dashboard`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'home-home-catalog',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [{
        key: 'home-home-goods',
        path: `${APP_PREFIX_PATH}/catalog-goods`,
        title: 'Товары',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'home-home-categories',
        path: `${APP_PREFIX_PATH}/catalog-categories`,
        title: 'Категории',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'home-home-collections',
        path: `${APP_PREFIX_PATH}/catalog-collections`,
        title: 'Коллекции',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'home-home-combo',
        path: `${APP_PREFIX_PATH}/catalog-combo`,
        title: 'Комбо',
        icon: '',
        breadcrumb: false,
        submenu: []
      }
    ]
    },
    {
      key: 'home-home-orders',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'home-home-clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [{
        key: 'home-clients-list',
        path: `${APP_PREFIX_PATH}/clients-list`,
        title: 'Список клиентов',
        icon: '',
        breadcrumb: false,
        submenu: []},
        {key: 'home-clients-group',
        path: `${APP_PREFIX_PATH}/clients-group`,
        title: 'Группы клиентов',
        icon: '',
        breadcrumb: false,
        submenu: []},
    ]
    },
    {
      key: 'home-home-banners',
      path: `${APP_PREFIX_PATH}/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'home-home-promos',
      path: `${APP_PREFIX_PATH}/promos`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'home-home-offshops',
      path: `${APP_PREFIX_PATH}/offshops`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [{
        key: 'home-offshops-addresses',
        path: `${APP_PREFIX_PATH}/offshops-addresse`,
        title: 'Адреса',
        icon: '',
        breadcrumb: false,
        submenu: []},
        {key: 'home-offshops-geozones',
        path: `${APP_PREFIX_PATH}/offshops-geozones`,
        title: 'Геозоны',
        icon: '',
        breadcrumb: false,
        submenu: []},
      ]
    },
    {
      key: 'home-home-employees',
      path: `${APP_PREFIX_PATH}/employees`,
      title: 'Сотрудники',
      icon: UsergroupAddOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'home-home-mailinglist',
      path: `${APP_PREFIX_PATH}/mailinglist`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]
},
]

const systemBoardNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'СИСТЕМНЫЕ',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'home-home-settings',
      path: `${APP_PREFIX_PATH}/system-settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
        key: 'home-home-mobileapp',
        path: `${APP_PREFIX_PATH}/system-mobileapp`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'home-home-logs',
        path: `${APP_PREFIX_PATH}/system-logs`,
        title: 'Логи',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      }
  ]
},
]

const navigationConfig = [
  ...dashBoardNavTree,
  ...systemBoardNavTree
]

export default navigationConfig;
