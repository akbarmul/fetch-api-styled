const ROOT_EL = document.getElementById("root");
// get data product

async function getProduct() {
  // get data from api using fetch kemudian di console log
  const endpoint = "https://dummyjson.com/products";
  try {
    const data = await fetch(endpoint);
    const data_json = await data.json();
    console.log(data_json);
    return data_json;
  } catch (err) {
    console.log({ pesan_error: err });
    return err;
  }
}

// render data product
async function renderProducts(getData) {
  // reset root element
  ROOT_EL.innerHTML = "";
  try {
    const data = await getData();
    console.log(data);
    // contoh iterate array dengan for of
    // for (const [index, product] of data.products.entries()) {
    //   const para = document.createElement("p");
    //   para.innerText = product.title + " " + index;
    //   ROOT_EL.appendChild(para);
    // }

    let new_elements = "";

    // contoh iterate array dgn map function
    data.products.map((product) => {
      //   const para = document.createElement("p");
      //   para.innerHTML = product.title;
      //   ROOT_EL.appendChild(para);
      // });

      new_elements += `<div class="bg-white border-4 border-primary rounded-xl p-5 flex flex-col group hover:bg-primary">
      <h1 class="font-bold text-primary text-2xl text-center mb-3 group-hover:text-white ">${product.title}</h1>
      <img src="${product.thumbnail}" alt="${product.title}" style="width: 250px; height: 170px;">
      <p class="font-bold text-center text-primary group-hover:text-white mt-3">${product.description}</p>
      <h2 class="font-bold text-2xl text-center mt-auto text-primary group-hover:text-white">$ ${product.price}</h2>
      <div class="flex justify-center gap-5 mt-2">
      <button class="bg-primary border-2 group-hover:border-primary group-hover:bg-white text-white rounded-xl py-2 px-3 font-bold group-hover:text-primary "><a href="editproduct.html?id=${product.id}"><span class="iconify text-2xl text-center mt-2" data-icon="line-md:edit"></span>Edit</a></button>
      <button class="bg-primary border-2 group-hover:border-primary group-hover:bg-white text-white rounded-xl py-2 px-3  font-bold group-hover:text-primary" onclick="delProduct(${product.id})"><span class="iconify text-2xl text-center mt-2" data-icon="wpf:delete"></span>Delt</button>
      </div>
      </div>`;
    });
    ROOT_EL.innerHTML = new_elements;
  } catch (err) {
    console.log(err);
  }
}

// search product
async function searchProducts() {
  //dapet data dari form input
  const form = document.forms[0];
  const search_value = form.search.value;

  console.log(search_value);

  // get data from api
  const endpoint = "https://dummyjson.com/products/search?q=" + search_value;
  try {
    // get data
    const data = await fetch(endpoint);
    const data_json = await data.json();
    return data_json;
  } catch (err) {
    console.log({ pesan_eror: err });
  }
}
const searchInput = document.getElementById("search");
console.log(searchInput);
searchInput.addEventListener("input", () => {
  console.log("testing");
  renderProducts(searchProducts);
});

function delProduct(id) {
  const konfir = confirm("apakah anda yakin?");

  if (konfir) {
    fetch("https://dummyjson.com/products/1", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("berhasil di hapus, title:" + data.title);
        // render ulang dengan data terbaru
        renderProducts(getProduct);
      });
  } else {
    console.log("ga jadi hapus");
  }

  //   fetch("https://dummyjson.com/products/" + id, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
}

// running function
renderProducts(getProduct);
