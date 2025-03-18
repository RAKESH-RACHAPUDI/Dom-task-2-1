
let loader=document.getElementById("loader")
document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById("btn");

    button.addEventListener('click', function () {
        let title = document.getElementById("title");
        let price = document.getElementById("price");
        let description = document.getElementById("description");

        if (title.value === "" || price.value === "" || description.value === "") {
            alert("Enter the valid details!");
        } else {
            // Sending data to the server
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title.value,
                    price: price.value,
                    description: description.value
                })
            };

            fetch("https://fantastic-legendary-fisherman.glitch.me/products", options)
                .then(res => {
                    if (res.ok) {
                        alert("Data Added");
                        // Clear input fields
                        title.value = "";
                        price.value = "";
                        description.value = "";
                        // Refresh displayed data
                        getdata();
                    } else {
                        throw new Error("Failed to add data");
                    }
                })
                .catch(err => console.error("Error:", err));
        }
    });

    getdata(); // Initial data fetch on page load
});

// Function to fetch and display data
function getdata() {
    let container = document.querySelector(".container");
    if (!container) {
        container = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);
    }

    fetch("https://fantastic-legendary-fisherman.glitch.me/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => displayData(data, container))
        .catch(err => console.error("Error:", err));
}

// Function to display data on the page
function displayData(data, container) {
    container.innerHTML = ""; // Clear the container before adding new data
    data.forEach(obj => {
        let item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
            <img class="image" src ="${obj.image}">
            <p class="title"><b>${obj.title}</b> - <span><b>${obj.price}</b></span></p>
            <p class="description">${obj.description}</p>
            <button onclick="deleteData('${obj.id}')">Delete</button>
        `;
        container.appendChild(item);
    });
    document.querySelector(".loader").remove();
}


// Function to delete data
function deleteData(id) {
    let options = {
        method: "DELETE"
    };

    fetch(`https://fantastic-legendary-fisherman.glitch.me/products/${id}`, options) // Fixed missing '/' in the URL
        .then(res => {
            if (res.ok) {
                alert("Data Deleted");
                getdata(); // Refresh data after deletion
            } else {
                throw new Error("Failed to delete data");
            }
        })
        .catch(err => console.error("Error:", err));
}


























































// document.addEventListener('DOMContentLoaded', function () {
//     let button = document.getElementById("btn");
//     button.addEventListener('click', function () {
//         let title = document.getElementById("title");
//         let price = document.getElementById("price");
//         let description = document.getElementById("description");

//         if (title.value === "" || price.value === "" || description.value === "") {
//             alert("enter the valid details!");
//         } else {
//             let options = {
//                 "method": "POST",
//                 "headers": {
//                     "Content-Type": "application/json"
//                 },
//                 "body": JSON.stringify({
//                     "title": title.value,
//                     "price": price.value,
//                     "description": description.value
//                 })
//             };
//         }
//     });
// });
// fetch("http://localhost:3000/products")
//     .then(res => {
//         if (res.ok) {
//             title.value = "";
//             price.value = "";
//             description.value = "";
//             getdata();
//             alert("Data Added");
//         }
//     })
//     .catch(err => console.error(err));

// ;

// let container = document.createElement("div");
// container.className = "container";

// function getdata() {
//     fetch("http://localhost:3000/products")
//         .then(response => response.json())
//         .then(data => displayData(data,container))
//         .catch(err => console.error(err));
// }

// function displayData(data) {
//     container.innerHTML = ""; 
//     data.forEach(obj => {
//         let item = document.createElement("div");
//         item.className = "item";
//         item.innerHTML = `
//             <img class="image" src="${obj.image}">
//             <p class="title"><b>${obj.title}</b> - <span><b>${obj.price}</span></b></p>
//             <p class="category"><i><b>${obj.category}</i></b></p>
//             <button onclick="deleteData('${obj.id}')">Delete</button>
//         `;
//         container.appendChild(item);
//     });
//     document.body.appendChild(container);
// }

// function deleteData(id) {
//     let options = {
//         "method": "DELETE"
//     };
//     fetch(`http://localhost:3000/products/${id}` )
//         .then(res => {
//             if (res.ok) {
//                 console.log("Data deleted");
                //    alert("Data Deleted");
//                 getdata();
//                 
//             }
//         })
//         .catch(err => console.error(err));
// }

// getdata();













// // button.addData("click", function(){
// //   let title=document.getElementById("title")
// //   let price=document.getElementById("price")
// //   let description=document.getElementById("description")
// //   if(title.value==""||price.value==""|| description.value=="") {

// //   }
// //   else{
// //     let options={
// //         "method":"POST",
// //         "header":{
// //          "content-Type":"application/json"
// //         },
// //         "body":JSON.stringify()({
// //             "title":title.value,
// //             "price":price.value,
// //             "description":description.value

// //         })
// //     }
// //     fetch("http://localhost:3000/products",options)
// //     .then(res=>{
// //         if (res.ok){
// //             title.value=""
// //             price.value=""
// //             description=""
// //             getdata()
// //             alert("Data Added")
// //         }
// //     })
// //   }
// // })

// // let container = document.createElement("div")
// // container.className = "container"
// // function getdata() {
// //     fetch("http://localhost:3000/products")
// //         .then(response => response.json())
// //         .then(products => displayData(products))


// // }
// // function displayData(products) {
// //     container.innerHTML="";
// //     products.forEach(obj => {
// //         let item = document.createElement("div");
// //         item.className = "item"
// //         item.innerHTML = `
// //      <img class="image" src ="${obj.image}">
// //      <p class = "title"><b>${obj.title}</b> -<span><b>${obj.price}</span></b></p>
// //      <p class ="category"><i><b>${obj.category}</i></b></p>
// //      <button onclick =deleteData('${obj.id}')>Delete</button>

// //      `
// //      container.appendChild(item)

// //     })
// //     document.body.appendChild(container)

// // }
// // function deleteData(id) {
// //     let options = {
// //         "method": "DELETE"
// //     }
// //     fetch(`http://localhost:3000/products/${id}`,options)
// //         .then(res => {
// //             if (res.ok) {
// //                 console.log("data deleted")
// //                 alert("Data Deleted")
// //             }
// //         })
// //         .catch(err => console.error(err))

// // }
// // getdata()
