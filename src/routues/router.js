import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/main/Main';
import SignUp from '../pages/signUp/SignUp';
import LayOut from '../pages/layout/LayOut';
import Check from '../pages/CheckPage/Check';
import SignIn from '../pages/sigIn/SignIn';



const router = createBrowserRouter([
    {
        path : '/',
        element : <LayOut/>,
        children : [
            {
                index : true,
                element : <Check/>
            },
            {
                path : '/main',
                element : <Main/>
            },
            {
                path : '/present',
                element : <></>
            },
            {
                path : '/signup',
                element : <SignUp/>
            },
            {
                path : '/userlogin',
                element : <SignIn/>
            }
        ]
    }
],
{
    future: {
        v7_startTransition: true,
        v7_fetcherPersist : true,
        v7_normalizeFormMethod : true,
        v7_partialHydration : true,
        v7_relativeSplatPath : true,
        v7_skipActionErrorRevalidation : true,
    },
  })


export default router;