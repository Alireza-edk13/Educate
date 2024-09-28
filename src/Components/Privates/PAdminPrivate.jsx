import React, { useEffect } from 'react'
import Error404 from '../Error404/Error404';
import { useGetUserInfo } from '../../hooks/useUser';
import Loading from '../Loading/Loading';

export default function PAdminPrivate({ children }) {

    const { data: userInfo, isLoading } = useGetUserInfo()

    if (isLoading) {
        return <Loading/>
    }

    return (
        <>
            {userInfo?.role === "ADMIN" ? children : <Error404 />}
        </>
    );
}