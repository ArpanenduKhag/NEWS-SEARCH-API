const apikey = "1c53b5f11e0a4412a5615814b342c760";
const blogcontainer = document.getElementById("blog-container");

function fetchRandomNews(0){
    try{
const apiurl ='https://newsapi.org/v2/top-headlines?country=us'

    } catch(error){
        console.error('Error fetching random news: ',error)
        return[]
    }
}