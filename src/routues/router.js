import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/main/Main';
import SignUp from '../pages/signUp/SignUp';
import LayOut from '../pages/layout/LayOut';



const router = createBrowserRouter([
    {
        path : '/',
        element : <LayOut/>,
        children : [
            {
                index : true,
                element : <Main />
            },
            {
                path : '/signup',
                element : <SignUp/>
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