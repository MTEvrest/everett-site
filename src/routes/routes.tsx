import Home from '../pages/index';
import About from '../pages/about';
import Projects from '../pages/projects';
import Sandbox from '../pages/sandbox';
import Travel from '../pages/travel';
import { AppLayout } from '@cloudscape-design/components';

const urlSetPath = 'everett-site'
export const routes = [
    {
        path: `/`,
        element: <AppLayout content={<Home/>} />,
        children: [
            {
                path: `about`,
                element: <AppLayout content={<About/>}/>
            }
        ]
    },
    {
        path: `/sandbox`,
        element: <AppLayout content={<Sandbox/>}/>
    },
    {
        path: `${urlSetPath}/travel`,
        element: <AppLayout content={<Travel/>}/>
    },
    {
        path: `${urlSetPath}/projects`,
        element: <AppLayout content={<Projects/>}/>
    }
];