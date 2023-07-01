import { useRouter } from 'next/router';
import { useEffect } from 'react';

const isValidToken = async (token:string | null) =>{
    const body = {
        token:token
    }
    const res = await fetch(`http://localhost:8080/validate`,{
        method: "POST",
        body: JSON.stringify(body),
        headers:{
          "Content-Type": "application/json",
          
        }
        
   

        
      });

    return res.ok ? true : false;
}

const AuthGuard = (WrappedComponent:React.ComponentType) => {
  const Wrapper = (props:any) => {
    const router = useRouter();

    // Add your authentication logic here
    let isAuthenticated = false; // Replace with your actual authentication check
   

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (typeof token !== 'undefined' && token !== null) {
          // Only check authentication if localStorage is available
          isValidToken(token).then((authStatus) => {
            isAuthenticated = authStatus;
            if (!isAuthenticated) {
              router.push('/signin'); // Redirect to login page if not authenticated
            }
          });
        } else {
          router.push('/signin'); // Redirect to login page if token is not found
        }
      }, [isAuthenticated, router]);
  

   

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default AuthGuard;
