const catalogoLibriUrl = "https://striveschool-api.herokuapp.com/books"
const classRow = document.querySelector(".row")



fetch(catalogoLibriUrl)
.then(response => response.json())
.then(data => {console.log(data)
    let htmlListContent = ""
    data.forEach((libro) => {
        htmlListContent += `<div class="col-6 col-lg-3 col-md-4 ">
        <div class="card my-3">
        <img src="${libro.img}" class="card-img-top" alt="imagine">
        <div class="card-body">
          <h5 class="card-title">${libro.title} </h5>
          <p class="card-text">${libro.price} </p>
          <button href="#" class="btn btn-primary btn-delete">scarta</button>
          <button href="#" class="btn btn-primary btn-compra">compra ora</button>
        </div>
      </div>
    </div>`



    classRow.innerHTML = htmlListContent
    
    const bottoneCancella = document.querySelectorAll(".btn-delete")
    bottoneCancella.forEach(bottone => {
        bottone.addEventListener("click", function(){
            this.closest(".col-6").remove()
        })
    })


    const bottoneCompra = document.querySelectorAll(".btn-compra")
    bottoneCompra.forEach(bottone => {
        bottone.addEventListener("click", function(){
            this.closest(".col-6")
            sessionStorage.setItem("libroComprato", libro.title)
        })
    })
  })
})




