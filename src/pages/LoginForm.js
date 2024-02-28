import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFirebase } from '../contexts/FormContext';

function LoginForm() {
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className='container flex justify-center mt-36'>
            <div class="w-full max-w-xs">
                <form onSubmit={(e) => {e.preventDefault();
                                        firebase.loginUser(email,password)
                                        .then((userCredential) => {
                                            navigate('/')
                                          })
                                        
                                          .catch((error) => {
                                            const errorCode = error.code;
                                            const errorMessage = error.message;
                                          });
                }} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-blue-800 border-2">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="****************" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm