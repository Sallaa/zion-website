"use client"
import { FormEvent, useState } from "react"

export default function Mnx() {

  const [password, setPassword] = useState("");

  const [isPasswordFound, setPasswordFound] = useState(false);

  const handleChange = (value : string) => {
    setPassword(value)
  }

  const handlePasswordCheck = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (password === "test") {
      setPasswordFound(true)
    }
  }

    return (
        <main
            className="bg-cover flex min-h-screen flex-col items-center justify-between p-24 bg-black">
            <div className="flex flex-col h-screen justify-center items-center">
                {isPasswordFound ? 
                
                <h1 className="text-3xl">password found!</h1>
                :
                
                <form className="text-center space-y-5">
                    <h1 className="text-3xl">password :</h1>
                    <input className="inputMnx" type="password" name="password" value={password} onChange={e => handleChange(e.target.value)}/>
                    <input className={'btnSubmitMnx'} type="submit" value="ENTER" onSubmit={e => handlePasswordCheck(e)}/>
                </form>
                
                }
                
            </div>
        </main>
    )
}