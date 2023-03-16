import { useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});
function App() {
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            books {
              title
              author
            }
          }
        `,
      })
      .then((result) => console.log(result));
  }, []);
  return (
    <div>
      <h1>Apollo Client</h1>
    </div>
  );
}
export default App;
