//Layouts
import { LayoutBasic } from '../pages/layouts/LayoutBasic';



// Pages
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Error404 from '../pages/Error404';

const routes = [
    {
        path: '/',
        layout: LayoutBasic,
        component: Home,
        exact: true,
    },
    {
        path: '/:id',
        layout: LayoutBasic,
        component: Detail,
        exact: true,
    },
    {
        layout: LayoutBasic,
        component: Error404,
    },
];

export default routes;