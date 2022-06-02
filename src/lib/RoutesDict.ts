export const RoutesDict = {
  public: {
    welcome: '/',
    pricing: '/pricing',
    contact: '/contact',
    about: '/about',
    features: '/features',
  },
  auth: {
    login: '/auth/login', // TODO: pending
    signup: '/auth/create-account', // TODO: pending
  },
  portal: {
    dashboard: '/portal/dashboard',
    reports: '/portal/reports',
    upload: '/portal/upload',
  },
} as const;
