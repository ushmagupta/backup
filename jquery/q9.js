$( document ).ready(function() {

  $("div").text($("select option:selected").val());

  $("select").change(function(){

    var selectedValue = $(this).find("option:selected").val();

    $("div").empty().text(selectedValue);

  });

});
