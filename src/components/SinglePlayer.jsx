import { useParams } from "react-router-dom";

function SinglePlayer() {
  // useParams returns an object ->so we are destructuring that object using the key defined in the <Route> element and creating a local variable in this component with the same name.
  const { id } = useParams();
  // id = random number generated in the <Navbar>

  return (
    <>
      <h1>SinglePlayer</h1>
      <h3>Player with id: {id} goes here</h3>
    </>
  );
}

export default SinglePlayer;
