$(function () {
    loadRecipies();
    $("#recipies").on("click", ".btn-danger", delrecipe);
    $("#recipies").on("click", ".btn-warning", handleUpdate);
    //    $("#recipies").on("click", ".btn-primary", addrecipe);
    $("#addBtn").click(addRecipe);
});

function handleUpdate() {
    $("#updateModal").modal("show");

}

function addRecipe() {
    var title = $("#title").val();
    var discription = $("#discription").val();

    $.ajax({
        type: "POST",
        url: "https://usman-recipes.herokuapp.com/api/recipes",
        data: { title, discription },
        success: function (response) {
            console.log(response);
            loadRecipies();

        }
    });
}



// function addrecipe() {

//     var btn = $(this);
//     var parent = btn.closest(".recipe");
//     let id = parent.attr("data-id");
// }

function delrecipe() {

    var btn = $(this);
    var parent = btn.closest(".recipe");
    let id = parent.attr("data-id");
    console.log(id);
    $.ajax({

        url: "https://usman-recipes.herokuapp.com/api/recipes/" + id,
        method: "DELETE",
        success: function () {
            loadRecipies();
        }
    })
}

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
                recipies.append(`<div class="recipe" data-id="${rec._id}">
                <h3>${rec.title}</h3>
                <p>${rec.body} </p>
                <button class="btn btn-danger">DELETE</button>
                <button class="btn btn-warning">UPDATE</button>
            </div>`)
                //    recipies.append("<div><h3>" + rec.title + "</h3></div>")
            }
        }
    });
}