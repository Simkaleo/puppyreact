function NewPlayerForm() {
  function handleSubmit(e) {
    e.prevent.Default();
    const form = e.target;
    const formData = new formData(form);
    const formJson = Object.fromEntries(NewPlayerForm.entries());
    console.log(formJson);
  }
  return (
    <>
      <h3>Add a new player</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Player Name:
          <input
            type="text"
            name="player-name"
            id="player-name"
            placeholder="Lucky"
          />
        </label>
        <label>
          Player Breed
          <input
            type="text"
            name="player-breed"
            id="player-breed"
            placeholder="dalmatian"
          />
        </label>

        <label>
          Image:
          <input
            type="text"
            name="player-image"
            id="player-image"
            placeholder="https://placedog.net/640/480?random"
          />
        </label>

        <button type="submit">Submit</button>

        <br></br>
      </form>
    </>
  );
}

export default NewPlayerForm;
