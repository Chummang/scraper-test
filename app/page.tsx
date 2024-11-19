/* eslint-disable no-console */
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-items-center max-h-full">
      <div className="shadow-lg p-5 rounded-lg">
      <div className="flex flex-col-reverse justify-center gap-8 p-32">
        
        <Link href="/login" className="bg-blue-500 p-5 rounded-full text-center"><ul>Login</ul></Link>
        
       
        <Link href="/register" className="bg-gray-200 p-5 rounded-full "><ul>Register Now</ul></Link>
        </div>
        </div>
    </main>
  );
}
