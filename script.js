$(function () {
    loadRecipies();
});

function loadRecipies() {
    $.ajax({

        url: "https://usman-recipes.herokuapp.com/api/recipes",
        method: "GET",
        success: function (response) {
            console.log(response);
            var recipies = $("#recipies");
            recipies.empty();
            for (var i = 0; i < response.length; i++) {
                var rec = response[i]
                recipies.append(`<div class="recipe"><h3>${rec.title}</h3>
                <button class="btn btn-danger">DELETE</button>
                <button class="btn btn-warning">UPDATE</button>
                <p>${rec.body}</p>
                                    </div>`)
                //    recipies.append("<div><h3>" + rec.title + "</h3></div>")
            }
        }
    });
}