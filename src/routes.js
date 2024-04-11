// import
import Dashboard from 'views/Dashboard/Dashboard'
import Tables from 'views/Dashboard/Tables'
import Billing from 'views/Dashboard/Billing'
import RegisteredInterviews from 'views/Dashboard/RegisteredInterviews'
import Profile from 'views/Dashboard/Profile'
import SignIn from 'views/Auth/SignIn.js'
import SignUp from 'views/Auth/SignUp.js'

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from 'components/Icons/Icons'
import QnA from 'views/Dashboard/QnA'
import Applicants from 'views/Dashboard/Applicant'

var dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: <HomeIcon color='#0047ab' />,
    component: Dashboard,
    layout: '/admin',
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   rtlName: "لوحة القيادة",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/admin",
  // },
  {
    path: '/open-positions',
    name: 'Open Positions',
    rtlName: 'لوحة القيادة',
    icon: <CreditIcon color='#0047ab' />,
    component: Billing,
    layout: '/admin',
  },
  {
    path: '/registered-interviews',
    name: 'Open Positions',
    icon: <CreditIcon color='inherit' />,
    component: RegisteredInterviews,
    layout: '/admin',
  },
  {
    path: '/questions-answers',
    name: 'Q&A',
    icon: <CreditIcon color='#0047ab' />,
    component: QnA,
    layout: '/admin',
  },
  {
    path: '/applicants',
    name: 'Applicants',
    icon: <CreditIcon color='#0047ab' />,
    component: Applicants,
    layout: '/admin',
  },

  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  // {
  //   name: "ACCOUNT PAGES",
  //   category: "account",
  //   rtlName: "صفحات",
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/profile",
  //       name: "Profile",
  //       rtlName: "لوحة القيادة",
  //       icon: <PersonIcon color="inherit" />,
  //       secondaryNavbar: true,
  //       component: Profile,
  //       layout: "/admin",
  //     },
  {
    path: '/signin',
    name: 'Sign In',
    rtlName: 'لوحة القيادة',
    icon: <DocumentIcon color='inherit' />,
    component: SignIn,
    layout: '/auth',
  },
  {
    path: '/signup',
    name: 'Sign Up',
    rtlName: 'لوحة القيادة',
    icon: <RocketIcon color='inherit' />,
    secondaryNavbar: true,
    component: SignUp,
    layout: '/auth',
  },
  //   ],
  // },
]
export default dashRoutes
