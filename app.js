let titleBar = document.querySelector('.titleBar');
let container = document.querySelector('.container');

fetch(`https://themealdb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(data => container.innerHTML = `
        <header class="headerBar">
            <h1 class="titleBar">${data.meals[0].strMeal}  <span>${data.meals[0].strArea}</span></h1>
            <p class="textEl">${data.meals[0].strInstructions}</>
        </header>

        <div class="cards">
            <div class="imageBar"><img width="100%" src=${data.meals[0].strMealThumb} alt=""></div>
            <div class="textBar">
                <h1 style="color: #888">Retsept</h1>
                <div class="resBar">
                    <div>
                        <p class="resEl1">${data.meals[0].strIngredient1}</p>
                        <p class="resEl1">${data.meals[0].strIngredient2}</p>
                        <p class="resEl1">${data.meals[0].strIngredient3}</p>
                        <p class="resEl1">${data.meals[0].strIngredient4}</p>
                        <p class="resEl1">${data.meals[0].strIngredient5}</p>
                        <p class="resEl1">${data.meals[0].strIngredient6}</p>
                        <p class="resEl1">${data.meals[0].strIngredient7}</p>
                        <p class="resEl1">${data.meals[0].strIngredient8}</p>
                        <p class="resEl1">${data.meals[0].strIngredient9}</p>
                        <p class="resEl1">${data.meals[0].strIngredient10}</p>
                        <p class="resEl1">${data.meals[0].strIngredient11}</p>
                        <p class="resEl1">${data.meals[0].strIngredient12}</p>
                    </div>
                    <div>
                        <p class="resEl2">${data.meals[0].strMeasure1}</p>
                        <p class="resEl2">${data.meals[0].strMeasure2}</p>
                        <p class="resEl2">${data.meals[0].strMeasure3}</p>
                        <p class="resEl2">${data.meals[0].strMeasure4}</p>
                        <p class="resEl2">${data.meals[0].strMeasure5}</p>
                        <p class="resEl2">${data.meals[0].strMeasure6}</p>
                        <p class="resEl2">${data.meals[0].strMeasure7}</p>
                        <p class="resEl2">${data.meals[0].strMeasure8}</p>
                        <p class="resEl2">${data.meals[0].strMeasure9}</p>
                        <p class="resEl2">${data.meals[0].strMeasure10}</p>
                        <p class="resEl2">${data.meals[0].strMeasure11}</p>
                        <p class="resEl2">${data.meals[0].strMeasure12}</p>
                    </div>
                </div>

                <a class="resBtn" target="_blank" href=${data.meals[0].strYoutube}>YouTube</a>
            </div>
        </div>
        `)