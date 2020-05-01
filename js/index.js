$(function() {

    var text = $("#text-wrapper");

    const user_input = e => {
        text.empty();
        var a = $("#a").val().trim();
        var b = $("#b").val().trim();
        e.preventDefault();
        if(!(a == "" && b == "")) {
            var rand_num = Math.floor(Math.random() * 2);
            console.log(rand_num)
            if(rand_num == 0) {
                text.append("<p>You are in universe A: </p>");
                text.append("<br>");
                text.append("<p>" + a + "</p>");
            } else {
                text.append("<p>You are in universe B: </p>");
                text.append("<br>");
                text.append("<p>" + b + "</p>");
                
            }
            $("#a").val("");
            $("#b").val("");
        }
        
    }

    $("#option-input").submit(user_input);
});