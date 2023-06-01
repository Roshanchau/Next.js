// since it is the index.js the route for this is /ninjas only since for index.js the route is it's route.
import styles from "../../styles/Ninjas.module.css"

// so with this getStaticprops asynchronous function we are trying to fetch the dummy api data from the jsonPlaceHolder
// which returns the props as the data being fetched.
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
                <div key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </div>
            ))}
        </div>
     );
}
    
export default Ninjas;