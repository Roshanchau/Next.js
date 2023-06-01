// since it is the index.js the route for this is /ninjas only since for index.js the route is it's route.
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css"

// so with this getStaticprops asynchronous function we are trying to fetch the dummy api data from the jsonPlaceHolder
// which returns the props as the data being fetched.
// the getStaticProps runs in built time.
export const getStaticProps=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();

    return{
        props:{ninjas:data}
    }
}

//here we have use {ninjas} to destructure the props being returend
const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <h1>
                ALL Ninjas
            </h1>  
            {ninjas.map(ninja=>(
                // so we are linking to each single ninja name to its respective route to pre-render a html page.
                <Link href={'/ninjas/'+ninja.id} key={ninja.id}>
                        <div className={styles.single}>
                        <h3>{ninja.name}</h3>
                        </div>
                </Link>
            ))}
        </div>
     );
}
    
export default Ninjas;