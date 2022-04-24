
// $("#formOne").submit(function() {
//   $(".person1").append("blah blah");
//   $(".person2").append("blah blah");
//   $(".animal").append("blah blah");
//   $(".exclamation").append("blah blah");
//   $(".verb").append("blah blah");
//   $(".noun").append("blah blah");

//   $("#story").show();
// });

// $("#formOne").submit(function(event) {
//   $(".person1").append("blah blah");
//   $(".person2").append("blah blah");
//   $(".animal").append("blah blah");
//   $(".exclamation").append("blah blah");
//   $(".verb").append("blah blah");
//   $(".noun").append("blah blah");

//   $("#story").show();

//   event.preventDefault();
// });
$(document).ready(function () {

    $("#formOne").submit(function (event) {
        event.preventDefault();
        const person1Input = $("input#person1").val();
        const person2Input = $("input#person2").val();
        const animalInput = $("input#animal").val();
        const exclamationInput = $("input#exclamation").val();
        const verbInput = $("input#verb").val();
        const nounInput = $("input#noun").val();

        $(".person1").append(person1Input);
        $(".person2").append(person2Input);
        $(".animal").append(animalInput);
        $(".exclamation").append(exclamationInput);
        $(".verb").append(verbInput);
        $(".noun").append(nounInput);
        $("#story").show();


        $("#person1").val("");
        $("#person2").val("");
        $("#animal").val("");
        $("#exclamation").val("");
        $("#verb").val("");
        $("#noun").val("");
    });






});