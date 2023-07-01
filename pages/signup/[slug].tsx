import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps } from 'next';
import { useState } from "react";
import Loader from "@/components/loader";

interface MyPageProps {
  data: any; // Replace 'any' with the actual type of your data
}

export const getServerSideProps: GetServerSideProps<MyPageProps> = async (context) => {
  const { slug } = context.query;

  // Make GET request using the slug ID
  // const response = await fetch(`https://api.example.com/data/${slug}`);
  // const data = await response.json();
  const data = {'slug':slug}
  return {
    props: {
      data,
    },
  };
};






export default function SignUp(data:any) {

  const studentClasses = [
    {
      id: 1,
      name: 'I'
    },
    {
      id: 2,
      name: 'II'
    },
    {
      id: 3,
      name: 'III'
    },
    {
      id: 4,
      name: 'IV'
    },
    {
      id: 5,
      name: 'V'
    },
    {
      id: 6,
      name: 'VI'
    },
    {
      id: 7,
      name: 'VII'
    },
    {
      id: 8,
      name: 'VIII'
    },
    {
      id: 9,
      name: 'IX'
    },
    {
      id: 10,
      name: 'X'
    },
    {
      id: 11,
      name: 'XI'
    },
    {
      id: 12,
      name: 'XII'
     
    },
  ]
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [organisation, setOrganisation] = useState('Dummy Organisation');
  const [studentClass, setStudentClass] = useState('XII');
  const [signUpErrors, setSignUpErrors] = useState<string[]>([]);
  const [signUpResponse, setSignUpResponse] = useState('');
  const [signUpResponseText, setSignUpResponseText] = useState('');
  const [showSignUpResponse , setShowSignUpResponse] = useState(false);
  const [showLoader, setShowLoader] = useState(false)
  const errorMessages = {
    email:{
      required : "A valid email id is required",
      invalidEmail : "Please enter a valid email"
    },
    password:{
      required: "A password for your account is required"
    },
    confirmPassword:{
      required: "Field confirm password is required",
      mismatch: "password and confirm password should match"
    },
    organisation:{
      required: "Field organisation is required",
      modified: "Please do not change the input in the organisation field"
    },
    studentClass:{
      required: "Field organisation is required",
      modified: "Please do not change the input in the class field"
    }
  }

  const signUpHandler = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    let errors:string[] = []
    if(email.trim().length == 0){
      errors.push(errorMessages.email.required) 
     
    } 
    if(password.trim().length == 0){
      errors.push(errorMessages.password.required) 
     
    } 
    if(confirmPassword.trim().length == 0){
      errors.push(errorMessages.confirmPassword.required) 
     
    }
    if(confirmPassword != password){
      errors.push(errorMessages.confirmPassword.mismatch) 
     
    }
    if(organisation.trim().length == 0){
      errors.push(errorMessages.organisation.required) 
     
    }
    if(studentClass.trim().length == 0){
      errors.push(errorMessages.studentClass.required) 
     
    }
    setSignUpErrors((prevErrors: string[]) => {
      const updatedErrors = Array.isArray(prevErrors) ? [...prevErrors] : [];
      return [...errors];
    });
    
    if(errors.length == 0){
      registerUser();
    }
    
    
  }


  const registerUser = async () => {
    const payload = {
      username: email,
      password: password,
      organisation: organisation,
        roles: ["STUDENT","CLASS_" + studentClass]
      
    }

    setShowSignUpResponse(true);
    setShowLoader(true)
    try {
      const res = await fetch(`http://localhost:8080/register`,{
        method: "POST",
        body: JSON.stringify(payload),
        headers:{
          "Content-Type": "application/json",
          
        }
        
   

        
      });
      setShowLoader(false)
      if(res.ok){
      setSignUpResponse('SUCCESS');
      setSignUpResponseText('Registration Successfull');
      }
      else{
        setSignUpResponse('FAILED');
        setSignUpResponseText('Registration Failed');
      }
      
    } catch (err) {
     console.log(err)
    }
   
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-5">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 shadow-lg p-7" action="#" method="POST">
            <h2 className="text-md text-lg font-bold">Create your new account now for {data.data.slug}</h2>
            {showLoader ? <Loader/> : null}
            {signUpErrors.length > 0 ? <div className="signupErrorContainer">
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p className="font-bold">Sign Up Error</p>
  <ol>
  {signUpErrors.map(error=><li key={error} className="m-1">{'- '}{error}</li>)}
  </ol>
</div>
            </div> : null}

          {signUpResponse === 'SUCCESS' ?<div>
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
  
  {signUpResponseText}

 
</div>
            </div> :null}


            {signUpResponse === 'FAILED' ? <div>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  
  {signUpResponseText}

 
</div>
            </div> :null}
          





            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address *
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
                  Password *
                </label>
            
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password *
                </label>
             
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={confirmPassword}
                  onChange={e=>setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="class"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Class *
                </label>
             
              </div>
              <div className="mt-2">
                <input
                  id="class"
                  name="class"
                  type="text"
                  autoComplete="current-password"
                  required
                  readOnly={true}
                  value={studentClass}
                  onChange={e=>setStudentClass(e.target.value)}
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
                  Organisation *
                </label>
             
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  autoComplete="current-password"
                  required
                  readOnly={true}
                  value={organisation}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={signUpHandler}
              >
                 
                Sign Up
              </button>
            </div>
          </form>

        
        </div>
      </div>
    </>
  );
}
