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


var carSelection = {

vehicle: {choice: 'Not Selected', price: 0},
color: {choice: 'Not Selected', price: 0},
package: {choice: 'Not Selected', price: 0}


};

$('li[data-tab="vehicle"]').click();


$('ul li').on('click', function(e){

	   e.preventDefault();

	   $('li.active').removeClass('active');

      $(this).addClass('active');

      $('#options-display').html('');


switch($(this).data('tab')){

  case 'vehicle':

        var source = $('#vehicle-options-template').html(); 

        var template = Handlebars.compile(source);

            for( var i=0; i<carOption.length; i++){

            var data = {feature: carOption[i].choice, price: carOption[i].price};

            //console.log(carOption[i].choice, carOption[i].price); // it displays all objects and price

            var newListItemHTML = template(data);

              //console.log(newListItemHTML); //displays all objects
               $('#options-display').append(newListItemHTML);

          };


       break;

  case 'color':
        var source = $('#color-options-template').html(); 

        var template = Handlebars.compile(source);

            for( var j=0; j<colorOption.length; j++){

            var data = {feature: colorOption[j].choice, price: colorOption[j].price};

            var newListItemHTML = template(data);

              $('#options-display').append(newListItemHTML);

          };

        break;
  case 'package':
          var source = $('#package-options-template').html(); 

          var template = Handlebars.compile(source);

            for( var k=0; k<packageOptions.length; k++){

            var data = {feature: packageOptions[k].choice, price: packageOptions[k].price};

            var newListItemHTML = template(data);

              $('#options-display').append(newListItemHTML);

          };

        break;
  case 'summary':

        var source = $('#summary-options-template').html();

        var template = Handlebars.compile(source);

        var data = carSelection;

        var newListItemHTML = template(data);

        $('#options-display').append(newListItemHTML);

        break;
  default:
        break;

};

});


$('#options-display').on('click', 'div', function(){


  if($(this).data('panel') === 'vehicle'){
  var choosenCar = $(this).data('option');
  var carPrice = $(this).data('price');

    carSelection.vehicle.choice = choosenCar;
    carSelection.vehicle.price = carPrice;
    $('.cost-display').html(carPrice);

    switch(choosenCar){

          case 'cadenza':

              $('img').attr('src','assets/cadenza.jpg') ;

          break;
          case 'forte':

            $('img').attr('src','assets/forte.jpg') ;

          break;
          case 'optima':
             $('img').attr('src','assets/optima.jpg') ;


          break;
          case 'sedona':

             $('img').attr('src','assets/sedona.jpg') ;

          break;
          case 'soul':

             $('img').attr('src','assets/soul.jpg') ;

          break;
          default:
          break;

    };



  } else if($(this).data('panel') === 'color'){
  var choosenColor = $(this).data('option');
  var colorPrice = $(this).data('price');

    carSelection.color.choice = choosenColor;
    carSelection.color.price = colorPrice;

    $('.cost-display').html(carSelection.vehicle.price + colorPrice);


     switch(choosenColor){

      case 'black':

                 switch(carSelection.vehicle.choice){

              case 'cadenza':

                  $('img').attr('src','assets/cadenza-black.jpg') ;

              break;
              case 'forte':

                $('img').attr('src','assets/forte-black.jpg') ;

              break;
              case 'optima':
                 $('img').attr('src','assets/optima-black.jpg') ;


              break;
              case 'sedona':

                 $('img').attr('src','assets/sedona-black.jpg') ;

              break;
              case 'soul':

                 $('img').attr('src','assets/soul-black.jpg') ;

              break;
              default:
              break;


                 };

      break;


      case 'white':

                 switch(carSelection.vehicle.choice){

              case 'cadenza':

                $('img').attr('src','assets/cadenza-white.jpg') ;

            break;
            case 'forte':

              $('img').attr('src','assets/forte-white.jpg') ;

            break;
            case 'optima':
               $('img').attr('src','assets/optima-white.jpg') ;


            break;
            case 'sedona':

               $('img').attr('src','assets/sedona-white.jpg') ;

            break;
            case 'soul':

               $('img').attr('src','assets/soul-white.jpg') ;

            break;
            default:
            break;
              };

      break;


      case 'silver':


              switch(carSelection.vehicle.choice){

                   case 'cadenza':

                  $('img').attr('src','assets/cadenza-silver.jpg') ;

              break;
              case 'forte':

                $('img').attr('src','assets/forte-silver.jpg') ;

              break;
              case 'optima':
                 $('img').attr('src','assets/optima-silver.jpg') ;


              break;
              case 'sedona':

                 $('img').attr('src','assets/sedona-silver.jpg') ;

              break;
              case 'soul':

                 $('img').attr('src','assets/soul-silver.jpg') ;

              break;
              default:
              break;
              };

      break;
     
      default:
      break;

    };


  } else if($(this).data('panel') === 'package') {
  var choosenPackage = $(this).data('option');
  var packagePrice = $(this).data('price');

    carSelection.package.choice = choosenPackage;
    carSelection.package.price = packagePrice;

    $('.cost-display').html(carSelection.vehicle.price + carSelection.color.price + xpackagePrice);

  };

        });











