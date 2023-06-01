// so this is used for dynmaic routing as the next creates a changable route with each id for respective
// ninjas to render their own html page and give a response to the browser.
// the square brases in the name is used to tell next that this is 
// a route parameter and this is going to be changable.

// getStaticPaths is a inbuilt async function because we have to fetch all the id's and 
// we pass it on to next to generate all the routes and pages for us.
// we need that external data so next knows how many pages and routes to genearate.
export const getStaticPaths=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await res.json();

    const paths=data.map(ninja =>{
        return{
            params:{id: ninja.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}
const Details = () => {
    return ( 
        <div>
            <h1>Details page</h1>
        </div>
     );
}

export default Details;