import Admin from "./pages/Admin"
import {ADMIN_ROUTE, LOGIN_ROUTE, LOT_ROUTE, REGISTRATION_ROUTE, STOCK_ROUTE} from "./consts";
import Stock from "./pages/Stock";
import Auth from "./pages/Auth";
import Lot from "./pages/Lot";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: LOT_ROUTE,
        Component: Lot
    },
]

export const publicRoutes = [
    {
        path: STOCK_ROUTE,
        Component: Stock
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]