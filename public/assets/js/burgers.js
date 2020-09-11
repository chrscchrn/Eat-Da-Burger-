$(function() {
    $(".devour").on("click", (event) => {
        var id = $(this).data("id");
    
        var newDevourState = {
            devoured: true
        };
    
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            () => {
                console.log("you devoured burger", id);
                location.reload();
            }
        );
    });
  
    $(".create-form").on("submit", (event) => {
        event.preventDefault();
        console.log()
        var newBurger = {
            name: $("#ca").val().trim(),
        };
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("Added a delicious burger");
                location.reload();
            }
        );
    });
});