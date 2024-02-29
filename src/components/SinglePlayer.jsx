import { useParams } from "react-router-dom";
import {
  useGetPlayersQuery,
  useGetSinglePlayerQuery,
} from "../api/playerSlice";

function SinglePlayer() {
  // useParams returns an object ->so we are destructuring that object using the key defined in the <Route> element and creating a local variable in this component with the same name.
  const { id } = useParams();
  const { data, isLoading } = useGetSinglePlayerQuery(id);
  const player = data?.data.player;

  console.log(data?.data.player);
  // when we destructure something, we unpack values
  // id = random number generated in the <Navbar>

  return (
    <>
      <h2>SinglePlayer</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{player.name}</h3>
          <h4>{player.breed}</h4>
          <img src={player.imageUrl} width="300" />
        </div>
      )}
    </>
  );
}

export default SinglePlayer;

//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// when we destructure something, we unpack values from arrays, or properties from objects, into distinct variables
//   const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// // is equivalent to:
// // const a = obj.a;
// // const b = obj.b;
