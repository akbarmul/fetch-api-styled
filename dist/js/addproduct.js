async function addProduct() {
  const { title, description, price } = document.forms[0];

  //   const title = form.title.value;
  //   const description = form.description.value;
  //   const price = form.price.value;
  //   const discountPercentage = form.discountPercentage.value
  //   const rating = form.rating.value

  //console.log({title,description,price})

  try {
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        price: price.value,
      }),
    });
    const data = await res.json();

    alert("data berhasil ditambahkan title: " + data.title);
    // redirect
    window.location.href = "index.html";
  } catch (e) {
    alert("eh eror nih, coba cek console browser kamu yaa");
    console.log({ pesan_error: e });
  }
  //   prevent page refresh
  return false;
}
