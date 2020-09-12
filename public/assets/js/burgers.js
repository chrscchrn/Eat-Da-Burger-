$(() => {
    $(".eatButton").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        var newDevouredState = {
            devoured: newDevoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            () => {
                location.reload();
            }
        );
    });
  
    $(".create-form").on("submit", (event) => {
        event.preventDefault();
        console.log("created");
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