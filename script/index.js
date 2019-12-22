var wireframeBox = ".wireframe-conainer-itembox-list"; 
window.onload = function getItems(){
        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
                for(var i =0; i < 5;i++ ){
                        var newhtml='<li class="wireframe-container-itembox-list-items">'+ response.data[i].body+'</li>'
                        console.log(newhtml)
                        document.querySelector('.wireframe-conainer-itembox-list').insertAdjacentHTML('beforeend',newhtml);
                }
        // handle success
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        });
}


function addItemsToHtml(response){
        // html= '<li class="wireframe-container-itembox-list-items">Item 1</li>'; 
        for(var i =0; i > 5;i++ ){
                newhtml='<li class="wireframe-container-itembox-list-items">'+ response.data[i].body+'</li>'
                document.querySelector(wireframeBox).insertAdjacentHTML("beforeend",newhtml);
        }
        

}

