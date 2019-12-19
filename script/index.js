
window.onload = function getItems(){
        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
        // handle success
        console.log(response);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed
});
}