let movie = document.getElementById("movie")
let searchMovie = document.getElementById("searchMovie")
let input = document.getElementById("cari")
let submitSearch = document.getElementById("kirim")

let getMovie = async () => {
    let respon = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=4f76b2bd4c490490c44b1cb6625e5bba&sort_by=popularity.desc&page=1")
    let list = await respon.json()
    let theMovie = list.results

    // console.log(theMovie);

    theMovie.slice(0, 9).forEach(item => {
        // console.log(item);
        movie.innerHTML +=  `<div class="col mx-5  mt-5">
                            <div class="card" style="width: 18rem;">
                            <img src="./image.jpg" class="card-img-top" alt="">
                            <div class="card-body">
                            <div class="d-flex justify-content-between">
                            <p class="card-text">${item.original_title}</p>
                            <p class="card-text">${item.vote_average}</p>
                            </div>
                            <p class="card-text">${item.release_date}</p>                       
                            </div>
                            </div>
                            </div>
                            `
    })
    // console.log(list);
    // console.log(list.results);
}
getMovie()


submitSearch.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(input.value);
    movie.remove()
    let searching = async () => {
        let respons = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f76b2bd4c490490c44b1cb6625e5bba&query=${input.value}&page=1`)
            let listsearch = await respons.json()
            let hasil = listsearch.results

            console.log(hasil)
            hasil.slice(0, 9).forEach(item => {
                // console.log(item);
                searchMovie.innerHTML +=  `<div class="col mx-5  mt-5">
                                    <div class="card" style="width: 18rem;">
                                    <img src="./image.jpg" class="card-img-top" alt="">
                                    <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                    <p class="card-text">${item.original_title}</p>
                                    <p class="card-text">${item.vote_average}</p>
                                    </div>
                                    <p class="card-text">${item.release_date}</p>                       
                                    </div>
                                    </div>
                                    </div>
                                    `
            })

    }
    searching()
})










