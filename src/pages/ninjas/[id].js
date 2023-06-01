// so this is used for dynmaic routing as the next creates a changable route with each id for respective
// ninjas to render their own html page and give a response to the browser.
// the square brases in the name is used to tell next that this is
// a route parameter and this is going to be changable.

// getStaticPaths is a inbuilt async function because we have to fetch all the id's and
// we pass it on to next to generate all the routes and pages for us.
// we need that external data so next knows how many pages and routes to genearate.
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },  
    };
  });

  return {
    paths,
    fallback: false, //if there is no id matching with the data then it will go to the error 404 page
  };
};

// next is going to run this function different id's according to the paths as it knows how many id's are to be fetched
// and load the context for each id's as per the no's of id's fetched by the paths.
// if we return 10 objects with 10id's from the path property then the getStaticParams function will run 10 times.
// context is automatically accepted as an arguement.
// harek id ko lagi getStaticParams bhanne function run hunxa ani tesko context bata hamile tei id fetch garinxa ani tesko aru data haru pani
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

// console.log(ninja)
// here the props {ninja} has data which is being fetched according to the id
const Details = ({ ninja }) => {
    // we have to destructure otherwise it throws an error      
    const {name , email, website, address}=ninja;
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>  
      <p>{website}</p>
      <p>{address.city}</p>
    </div>
  );
};

export default Details;

