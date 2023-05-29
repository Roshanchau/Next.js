//special page like the index.js so next js creates a route to this page if any other endpoin then usual is used.
import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from "next/router";

const NotFound = () => {
    const router=useRouter();

// here the useEffect helps to route back to the home page after 3ses
// the useRouter hook helps us to route back and forth and to any route using route.go and route.push
    useEffect(()=>{
        setTimeout(()=>{
            //router.go(1) //redirects us back and forth from the page.
            router.push('/');
        },3000)
    } , []) //we are using an empty array so that this is render only once not after any kind of state changes.

    return ( 
        <div className="not-found">
            <h1>Ooops....</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;