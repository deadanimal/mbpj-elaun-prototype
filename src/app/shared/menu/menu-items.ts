export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/admin/overtime',
    title: 'Elaun Lebih Masa',
    type: 'sub',
    icontype: 'fas fa-file-invoice-dollar text-green',
    collapse: 'elaun',
    isCollapsed: true,
    children: [
      { path: 'application', title: 'Permohonan', type: 'link' },
      { path: 'claim', title: 'Tuntutan', type: 'link' },
      { path: 'claim', title: 'Mohon Kerja Lebih Masa', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Laporan',
    type: 'link',
    icontype: 'far fa-file-alt text-yellow'
  },
  /*{
    path: '/admin/analytics',
    title: 'Analytics',
    type: 'link',
    icontype: 'far fa-chart-bar text-blue'
  },*/
  {
    path: '/admin/management',
    title: 'Penyelenggaraan Sistem',
    type: 'link',
    icontype: 'fas fa-cogs text-purple'
  },
  {
    path: '/admin/help',
    title: 'Bantuan',
    type: 'link',
    icontype: 'far fa-life-ring text-blue'
  },
  {
    path: '/admin/profile',
    title: 'Profil',
    type: 'link',
    icontype: 'far fa-id-badge text-red'
  },
  {
    path: '/admin/settings',
    title: 'Penyelenggaraan',
    type: 'link',
    icontype: 'fas fa-user-cog text-pink'
  }
];

/*
{
  path: '',
  title: '',
  type: 'link',
  icontype: ''
}
*/