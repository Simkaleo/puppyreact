import { Link } from "react-router-dom";

function NavBar() {
  // ToDO Better - not generating new random numbers after we click.
  const id = Math.floor(Math.random() * 5 + 1);
  return (
    <>
      <h1>NavBar</h1>
      <Link to="/">All Players</Link>
      <Link to={`/players/${id}`}>Random Player</Link>
    </>
  );
}

export default NavBar;
