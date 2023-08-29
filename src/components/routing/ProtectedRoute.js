import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../../contexts/authContext'
// import { ToastControl } from '../layouts/toast'

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const {
        authState: { isAuthenticated },
    } = useContext(authContext)

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         setTimeout(() => {
    //             ToastControl('You need to log in!') // Use a callback function
    //         }, 2000)
    //     }
    // }, [isAuthenticated]) // Add isAuthenticated as a dependency
    // if (isAuthenticated) return <Outlet />

    return isAuthenticated ? <Outlet /> : <Navigate to='/home' />
    // if (authLoading)
    //     return <>
    //     </>
    //     return (
    //         <Route
    //             {...rest}
    //             render={
    //                 <div className='spinner-container'>
    //                     <Spinner animation='border' variant='info' />
    //                 </div>
    //             }
    //         />
    //     )
}

export default ProtectedRoute
