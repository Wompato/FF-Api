const getData = () => {
  fetch("http://localhost:8000/api/characters")
    .then((res) => res.json())
    .then((resData) => (img.src = resData[0].pictures[0]))
    .catch((err) => console.log(err));
};

const img = document.querySelector("img");

getData();
