const URL_PARAMS = new URLSearchParams(window.location.search);
const ID = URL_PARAMS.get("id");

function editProduct() {
  const form = document.forms[0];
  const title = form.title.value;
  const price = form.price.value;
  const description = form.description.value;

  // menyatukan data input value ke dalam object
  const product = {
    title,
    price,
    description,
  };
  //  mengirim data ke server
  fetch("https://dummyjson.com/products/" + ID, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      alert("data berhasil diubah title: " + data.title);
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("eh error nih");
      console.error({ error });
    });
}

function getSingleProduct() {
  fetch("https://dummyjson.com/products/" + ID)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const form = document.forms[0];
      form.title.value = data.title;
      form.price.value = data.price;
      form.description.value = data.description;
    })
    .catch((error) => {
      console.error({ error });
    });
}
getSingleProduct();
