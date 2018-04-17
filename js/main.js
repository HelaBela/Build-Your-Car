
// step 1

// step 2

var carOption = [
  {choice: 'cadenza', price: '35000'},
  {choice: 'forte', price: '20000'},
  {choice: 'optima', price: '29050'},
  {choice: 'sedona', price: '38650'},
  {choice: 'soul', price: '42200'}
];

var colorOption = [
  {choice: 'black', price: '50'},
  {choice: 'white', price: '100'},
  {choice: 'silver', price: '250'}
];

var packageOptions = [
  {choice:'Rear Camera', price: '150'},
  {choice:'LED Positioning Light', price: '150'},
  {choice:'Rear Camera and LED Positioning Light', price: '200'}
];

//step3

var carSelection = {

vahicle: {choice: 'Not Selected', price: 0},
color: {choice: 'Not Selected', price: 0},
package: {choice: 'Not Selected', price: 0}


}



$('ul li').on('click', function(e){

	   e.preventDefault();

	   $('li.active').removeClass('active');

      $(this).addClass('active');

      $('#options-display').html('');

     // var source = $(this).html();



switch($(this).data('tab')){

  case 'vehicle':

        var source = $('#vehicle-options-template').html(); 

        var template = Handlebars.compile(source);

            for( var i=0; i<carOption.length; i++){

            var data = {feature: carOption[i].choice, price: carOption[i].price};

            //console.log(carOption[i].choice, carOption[i].price); // it displays all objects and price

            var newListItemHTML = template(data);

              console.log(newListItemHTML); //displays all objects
               $('#options-display').append(newListItemHTML);

          };


       break;

  case 'color':
        var source = $('#color-options-template').html(); 

        var template = Handlebars.compile(source);

            for( var j=0; j<colorOption.length; j++){

            var data = {feature: colorOption[j].choice, price: colorOption[j].price};

            //console.log(carOption[i].choice, carOption[i].price); // it displays all objects and price

            var newListItemHTML = template(data);

              console.log(newListItemHTML); //displays all objects
              $('#options-display').append(newListItemHTML);

          };

        break;
  case 'package':
          var source = $('#package-options-template').html(); 

          var template = Handlebars.compile(source);

            for( var k=0; k<packageOptions.length; k++){

            var data = {feature: packageOptions[k].choice, price: packageOptions[k].price};

            //console.log(carOption[i].choice, carOption[i].price); // it displays all objects and price

            var newListItemHTML = template(data);

              console.log(newListItemHTML); //displays all objects

              $('#options-display').append(newListItemHTML);

          };


        //code 
        break;
  case 'summary':



        //code 
        break;
  default:
        break;


};


});


