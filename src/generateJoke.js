function generateJoke() {
  const fetchJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    document.getElementById("joke").textContent = data.joke;
  };
  fetchJokes();
}

export default generateJoke;