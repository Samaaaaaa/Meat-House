// var searchInput = document.getElementById('searchInput');
// var imageContainer = document.getElementById("imageContainer");
// var titles = document.getElementById('title');

// let cardsData = [ // Array to store the generated cards data
//   { imageSrc: './image4/w1.png', title: 'كفتة ضاني', price: '240' },
//   { imageSrc: './image4/w2.png', title: 'فخدة ضاني', price: '240' },
//   { imageSrc: './image4/w3.png', title: 'رقبة ضاني', price: '240' },
// ];

// 00000000000000000000

// function search(){
//   var searchValue = searchInput.value;
//         var cartona = [i];
//         for (var i = 0; i < cardsData.length; i++) {
            
//             if( cardsData[i].title.toLowerCase().includes( searchValue.toLowerCase() ) ){

//           cartona += `<div class="width ">
//           <img src="./image4/w1.png" alt="" />
//         </div>
//         <div class="blur"></div>
//         <div class="details">
//           <div class="conat">
//             <div class="iconSvg">
//               <img class="w-100" src="${cardsData[i].imageSrc}" alt="price" />
//             </div>
//             <p>السعر <span class="lead">${cardsData[i].price}</span></p>
//           </div>
    
//           <div class="fle">
//             <p id="title" class="type">${cardsData[i].title}</p>
//           </div>
//         </div>`;
//             }
//             document.getElementById("imageDiv").appendChild = cartona[i];
//         }
        
// }

// 0000000000000000000


// searchInput.addEventListener('input', function() {
//   const searchTerm = searchInput.value.toLowerCase();

//   cardsData.forEach(function(cardData, index) {
//     const title = cardData.title.toLowerCase();
//     const card = cardContainer.children[index];

//     if (title.includes(searchTerm)) {
//       card.classList.remove('hidden');
//     } else {
//       card.classList.add('hidden');
//     }
//   });
// });

// 0000000000

// var searchInput = document.getElementById("searchInput");
// var imageContainer = document.getElementById("imageContainer");
// var titles = document.getElementById("title");
// var container = document.getElementById("container");

// let cardsData = [
//   // Array to store the generated cards data
//   { imageSrc: "./image4/w1.png", title: "كفتة ضاني", price: "240" },
//   { imageSrc: "./image4/w2.png", title: "فخدة ضاني", price: "240" },
//   { imageSrc: "./image4/w3.png", title: "رقبة ضاني", price: "240" },
// ];

// const card = cardsData.filter((card) => {
//   return searchValue.toLowerCase() === card.title.toLowerCase();
// });

const searchInput = document.getElementById("searchInput");
const imageContainer = document.getElementById("imageContainer");
const titles = document.getElementById("title");
const container = document.getElementById("container");

let cardsData = [
  // Array to store the generated cards data
  { imageSrc: "./image4/w1.png", title: "كفتة ضاني", price: "240" },
  { imageSrc: "./image4/w2.png", title: "فخدة ضاني", price: "240" },
  { imageSrc: "./image4/w3.png", title: "رقبة ضاني", price: "240" },
];

const search = () => {
  var searchValue = searchInput.value;
  const card = cardsData.filter((card) => {
    return searchValue.toLowerCase() === card.title.toLowerCase();
  });
  if (card.length === 1) {
    container.innerHTML = `<div class="width ">
    <img src="./image4/w1.png" alt="" />
  </div>
  <div class="blur"></div>
  <div class="details">
    <div class="conat">
      <div class="iconSvg">
        <img class="w-100" src="${card[0].imageSrc}" alt="price" />
      </div>
      <p>السعر <span class="lead">${card[0].price}</span></p>
    </div>

    <div class="fle">
      <p id="title" class="type">${card[0].title}</p>
    </div>
  </div>`;
  } else {
    container.innerHTML = cardsData.map((card) => {
      return `<div class="width ">
      <img src="./image4/w1.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="${card.imageSrc}" alt="price" />
        </div>
        <p>السعر <span class="lead">${card.price}</span></p>
      </div>

      <div class="fle">
        <p id="title" class="type">${card.title}</p>
      </div>
    </div>`;
    });
  }
};

searchInput.onchange = () => {
  search();
};


function show1(){
    var cartona = `<h3 class="mb-5">الكندوز</h3>

<div class="container">
<div class="row text-center">
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
    id="imageContainer"
  >
    <div class="inner imageDiv" >
      <div class="width ">
        <img src="./img/s1.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">240</span></p>
        </div>

        <div class="fle">
          <p id="title" class="type">عمود سن</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
    id="imageContainer"
  >
    <div class="inner imageDiv">
      <div class="width">
        <img src="./img/s2.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">230</span></p>
        </div>

        <div class="fle">
          <p class="type">مفروم بلدي</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s3.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">250</span></p>
        </div>

        <div class="fle">
          <p class="type">كباب حلة</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s4.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">250</span></p>
        </div>

        <div class="fle">
          <p class="type">كولاتة</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s5.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">250</span></p>
        </div>

        <div class="fle">
          <p class="type">ستيك</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s6.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">255</span></p>
        </div>

        <div class="fle">
          <p class="type">انتركوت</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s7.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">260</span></p>
        </div>

        <div class="fle">
          <p class="type">موزة</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s8.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">260</span></p>
        </div>

        <div class="fle">
          <p class="type">ظهر فخدة</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s9.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">225</span></p>
        </div>

        <div class="fle">
          <p class="type">كبدة + قلب + كلاوي</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s10.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">275</span></p>
        </div>

        <div class="fle">
          <p class="type">فلتو</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s11.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">185</span></p>
        </div>

        <div class="fle">
          <p class="type">عكاوي</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s12.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">270</span></p>
        </div>

        <div class="fle">
          <p class="type">كبدة بلدي صافي</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s13.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <!-- <div class="price text-white text-center">السعر</div>
<div class="priceIcon text-white">
  <div class="w-100">
    <img  src="./img/kg.svg" alt="price">
  </div>
  <span class="">240</span>
</div>
<div class="text-white">
  <p>عمود سن</p>
</div> -->
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">240</span></p>
        </div>

        <div class="fle">
          <p class="type">عمود سن</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <div
    class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <div class="inner">
      <div class="width">
        <img src="./img/s14.png" alt="" />
      </div>
      <div class="blur"></div>
      <div class="details">
        <!-- <div class="price text-white text-center">السعر</div>
<div class="priceIcon text-white">
  <div class="w-100">
    <img  src="./img/kg.svg" alt="price">
  </div>
  <span class="">240</span>
</div>
<div class="text-white">
  <p>عمود سن</p>
</div> -->
        <div class="conat">
          <div class="iconSvg">
            <img class="w-100" src="./img/kg.svg" alt="price" />
          </div>
          <p>السعر <span class="lead">240</span></p>
        </div>

        <div class="fle">
          <p class="type">عمود سن</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5 ms-auto"
            id="staticBackdropLabel"
          >
            حدد الوزن
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="d-flex">
            <input
              type="number"
              oninput="Regexnumber()"
              step="0.5"
              id="kilo"
              class="form-control"
            />
            <span class="p-2">KG</span>
          </div>
          <label class="" for="kilo"> :ادخل الوزن</label>
        </div>
        <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            إغلاق
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="whatsapp-button"
            onclick="doTrue()"
          >
            شراء
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`

    document.getElementById("page1").innerHTML = cartona

}

function show2(){
  var cartona = `<h3>جاهز للتسوية</h3>

<div class="container">
<div class="row text-center">
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
  id="imageContainer"
>
  <div class="inner imageDiv" >
    <div class="width ">
      <img src="./image2/r1.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">225</span></p>
      </div>

      <div class="fle">
        <p id="title" class="type">لحم حواوشي بلدي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
  id="imageContainer"
>
  <div class="inner imageDiv">
    <div class="width">
      <img src="./image2/r2.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">235</span></p>
      </div>

      <div class="fle">
        <p class="type">كفتة بلدي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image2/r3.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">230</span></p>
      </div>

      <div class="fle">
        <p class="type">سجق بلدي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image2/r4.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">230</span></p>
      </div>

      <div class="fle">
        <p class="type">برجر بلدي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image2/r5.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">....</span></p>
      </div>

      <div class="fle">
        <p class="type">ورقة لحمة</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image2/r6.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">40</span></p>
      </div>

      <div class="fle">
        <p class="type">رغيف حواوشي بلدي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image2/r7.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">...</span></p>
      </div>

      <div class="fle">
        <p class="type">بوفتيك</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image2/r8.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">....</span></p>
      </div>

      <div class="fle">
        <p class="type">كباب حلة</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image2/r9.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">...</span></p>
      </div>

      <div class="fle">
        <p class="type">كفتة رز</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image2/r10.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">...</span></p>
      </div>

      <div class="fle">
        <p class="type">شاورما لحم متبل</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./img/s11.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">185</span></p>
      </div>

      <div class="fle">
        <p class="type">عكاوي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./img/s12.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">270</span></p>
      </div>

      <div class="fle">
        <p class="type">كبدة بلدي صافي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./img/s13.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <!-- <div class="price text-white text-center">السعر</div>
<div class="priceIcon text-white">
<div class="w-100">
  <img  src="./img/kg.svg" alt="price">
</div>
<span class="">240</span>
</div>
<div class="text-white">
<p>عمود سن</p>
</div> -->
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">240</span></p>
      </div>

      <div class="fle">
        <p class="type">عمود سن</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./img/s14.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <!-- <div class="price text-white text-center">السعر</div>
<div class="priceIcon text-white">
<div class="w-100">
  <img  src="./img/kg.svg" alt="price">
</div>
<span class="">240</span>
</div>
<div class="text-white">
<p>عمود سن</p>
</div> -->
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">240</span></p>
      </div>

      <div class="fle">
        <p class="type">عمود سن</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
</div>
</div>`

  document.getElementById("page1").innerHTML = cartona

}
function show3(){
  var cartona = `<h3>حجز مسبق</h3>

<div class="container">
<div class="row text-center">
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
  id="imageContainer"
>
  <div class="inner imageDiv" >
    <div class="width ">
      <img src="./image3/a1.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">225</span></p>
      </div>

      <div class="fle">
        <p id="title" class="type">كوارع</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
  id="imageContainer"
>
  <div class="inner imageDiv">
    <div class="width">
      <img src="./image3/a2.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">235</span></p>
      </div>

      <div class="fle">
        <p class="type">لحمة راس</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image3/a3.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">230</span></p>
      </div>

      <div class="fle">
        <p class="type">مخاصي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image3/a4.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">230</span></p>
      </div>

      <div class="fle">
        <p class="type">مخ</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image3/a5.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">....</span></p>
      </div>

      <div class="fle">
        <p class="type">ممبار محشي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image3/a6.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">40</span></p>
      </div>

      <div class="fle">
        <p class="type">ممبار عجالي</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
</div>
  
</div>`

  document.getElementById("page1").innerHTML = cartona

}
function show4(){
  var cartona = `<h3>ضاني</h3>

<div class="container">
<div class="row text-center">
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
  id="imageContainer"
>
  <div class="inner imageDiv" >
    <div class="width ">
      <img src="./image4/w1.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">240</span></p>
      </div>

      <div class="fle">
        <p id="title" class="type">كفتة ضاني</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
  id="imageContainer"
>
  <div class="inner imageDiv">
    <div class="width">
      <img src="./image4/w2.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">240</span></p>
      </div>

      <div class="fle">
        <p class="type">فخدة ضاني</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->
<div
  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 g-4"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  <div class="inner">
    <div class="width">
      <img src="./image4/w3.png" alt="" />
    </div>
    <div class="blur"></div>
    <div class="details">
      <div class="conat">
        <div class="iconSvg">
          <img class="w-100" src="./img/kg.svg" alt="price" />
        </div>
        <p>السعر <span class="lead">240</span></p>
      </div>

      <div class="fle">
        <p class="type">رقبة ضاني</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5 ms-auto"
          id="staticBackdropLabel"
        >
          حدد الوزن
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body d-flex justify-content-between">
        <div class="d-flex">
          <input
            type="number"
            oninput="Regexnumber()"
            step="0.5"
            id="kilo"
            class="form-control"
          />
          <span class="p-2">KG</span>
        </div>
        <label class="" for="kilo"> :ادخل الوزن</label>
      </div>
      <p id="numberInput" class="alert alert-danger w-75 p-1 mx-3 d-none">Invalid, Please enter an positive number</p>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إغلاق
        </button>
        <button
          type="button"
          class="btn btn-primary"
          id="whatsapp-button"
          onclick="doTrue()"
        >
          شراء
        </button>
      </div>
    </div>
  </div>
</div>
</div>
  
</div>`

  document.getElementById("page1").innerHTML = cartona

}


function Regexnumber(){

  inputKilo = document.getElementById('kilo')
  var regexPrice = inputKilo.value
  var priceMessage = document.getElementById('numberInput')
  if(regexPrice > 0){
    inputKilo.classList.add('is-valid')
    inputKilo.classList.remove('is-invalid')
    priceMessage.classList.add('d-none')
    return true
  }
  else{
    inputKilo.classList.add('is-invalid')
    inputKilo.classList.remove('is-valid')
    priceMessage.classList.remove('d-none')
    return false
  }
}

function doTrue(){
  if(Regexnumber() == true){
      var phoneNumber = "01002633531"; 
      var url = "https://wa.me/" + phoneNumber;
      window.open(url);
    
  }
}



// document.getElementById("whatsapp-button").addEventListener("click", function() {
//   var phoneNumber = "01002633531"; 
//   var url = "https://wa.me/" + phoneNumber;
//   window.open(url);
// });



// هتتحط  ف اللاين اللي بعد var cartona في كل فانكشن من ال show
//<div class="d-flex justify-content-center m-3">
//    <input id="searchInput" oninput="search()" type="text" placeholder="Search..." class="  w-50 form-control p-2">
//  </div>