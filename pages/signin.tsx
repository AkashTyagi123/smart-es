import Loader from "@/components/loader";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInErrors, setSignInErrors] = useState<string[]>([]);
  const [signInResponse, setSignInResponse] = useState('');

  const [showLoader, setShowLoader] = useState(false)
  const errorMessages = {
    email:{
      required : "A valid email id is required"
  
    },
    password:{
      required: "A password for your account is required"
    }
   
  }

  const signInHandler = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    let errors:string[] = []
    if(email.trim().length == 0){
      errors.push(errorMessages.email.required) 
     
    } 
    if(password.trim().length == 0){
      errors.push(errorMessages.password.required) 
     
    } 
    
    setSignInErrors((prevErrors: string[]) => {
      const updatedErrors = Array.isArray(prevErrors) ? [...prevErrors] : [];
      return [...errors];
    });
    
    if(errors.length == 0){
      signInUser();
    }
    
    
  }


  const signInUser = async () => {
    const payload = {
      username: email,
      password: password,
    
      
    }

 
    setShowLoader(true)
    try {
      const res = await fetch(`http://localhost:8080/authenticate`,{
        method: "POST",
        body: JSON.stringify(payload),
        headers:{
          "Content-Type": "application/json",
          
        }
        
   

        
      });
      setShowLoader(false)
      if(!res.ok){
      setSignInResponse('Login Failed');
      }
      else{
        setSignInResponse('');
        res.json().then(data=>localStorage.setItem('authToken', data.jwt))
        router.push('/attempt');
        
      }
      
      
    } catch (err) {
     console.log(err)
    }
   
  };






  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm mt-7">
          <form className="space-y-6 shadow-lg p-7 mt-7" action="#" method="POST">
          <h2 className="text-md text-lg font-bold">Sign in to your account</h2>
          {showLoader ? <Loader/> : null}
            {signInErrors.length > 0 ? <div>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p className="font-bold">Sign In Error</p>
  <ol>
  {signInErrors.map(error=><li key={error} className="m-1">{'- '}{error}</li>)}
  </ol>
</div>
            </div> : null}

          {signInResponse ?<div>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  
  {signInResponse}

 
</div>
            </div> :null}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={signInHandler}
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}
