fetch("http://localhost:8000/api/characters")
  .then((res) => res.json())
  .then((resData) => console.log(resData))
  .catch((err) => console.log(err));
