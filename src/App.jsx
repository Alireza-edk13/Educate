import { Suspense, useEffect, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import routes from '../routes';
import Loading from './Components/Loading/Loading';
import { useGetCourses } from './hooks/useCourse';
import Error500 from './Components/Error500/Error500';

function App() {

  const { isLoading, error, isError } = useGetCourses()
  const router = useRoutes(routes);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location]);


  return (
    <>
      <Suspense fallback={<Loading />}>
        {

          isLoading && <Loading /> ||
          isError && <Error500 error={error} /> || router

        }
      </Suspense>
    </>
  );
}

export default App;
