$(document).ready(function(){
//1. When 'Submit' is clicked, add the contents of the textbox below the button in a h3 element.

  $("#submitBtn").click(function(){
    var txtinput = $(".textInput").val();
    var h3 = $('<h3>' + txtinput + '</h3>');
      $('#submitBtn').after(h3);

  });

//2. When the checkbox is clicked, reveal the hidden message...
  $(".chex").click(function(){
      $("h2").toggleClass("hidden");
  });

//3. Add a new cat to the table.
//this clones it, how do you add in new names? figure that out next
  $("table").append($("tr:last").clone(true));
  $("table").append($("tr:last").clone(true));

//4. Make 'hangry' red and 'content' green
  $('table.cats')
  .children('tbody')
  .children()
  .each(function(i, el){
    var $el = $(el);

    var hungerLevel = $el.children('td').eq(2).text();

    var colorMap = {
        'Hangry' : 'red',
        'Content' : 'Green',
        'Sleepy' : 'Goldenrod'
    };
    var color = colorMap[hungerLevel];
    if (color) {
              $el.css('color', color);
    }
  });

// 5. When clicked show only cats 10+lbs. //need to determine a variable to sort out each weights
  // var catRows = $('#table-striped cats');
  // $("#HideFatCats").click(function(){
  //   var fatCats = catRows.filter('tr fatCat').hide(){
  //     var tr => 10;
  //   }
  //   // tr var = td < 10lbs;
  // });

  // $()


//11. Create buttons that add and remove list items.
  var counter = 0;
  var $alertList = $('#alertList');

  $('.add-item').click(function() {
    var content = 'I am the ' + counter + 'th item to be added';
    var $newEl = $('<li></li>').text(content);
    $alertList.append($newEl);
  });

});
