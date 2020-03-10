 //function filterVehicleTransmission(vehicleType) { }
            //which color is the user currently picking?
            //when a button is clicked one of these get updated-Global variables
            //these are our filters-filter by vehicle type, color and transmission
            //below buttons look selected, by default all are selected
            var selectedVehicleColor="black"; //black, white, red
            var selectedVehicleType="car";    //car, truck
            var selectedVehicleTransmission="manual";  //automatic, manual


        $(document).ready(function(){  //uploads as soon as webpage done loading
      debugger;
        hideAllVehicles();
        showHideVehicles();

            
        });
            //changes according to vehicle preference select
       

         function filterVehicleType(vehicleType) {                         //vehicle type= car or truck              
                //hide all vehicles
                //set selectedVehicleColor equal to the VehicleColor parameter
                //show all vehicles with classes that match all the selected variables
                $(".vehicleImage").fadeOut(1000);
                selectedVehicleType = vehicleType;   //vehicle type plugged into another variable
                showHideVehicles();            
                }

          function filterVehicleColor(vehicleColor) {
                 //hide all vehicles
                 //set selectedVehicleColor equal to the VehicleColor parameter
                 //show all vehicles with classes that match all the selected variables
                 $(".vehicleImage").fadeOut(1000);
                 selectedVehicleColor = vehicleColor;
                 showHideVehicles();
                }

         function filterVehicleTransmission(vehicleTransmission) {
                //hide all vehicles
                //set selectedVehicleColor equal to the VehicleColor parameter
                //show all vehicles with classes that match all the selected variables
                $(".vehicleImage").fadeOut(1000);
                selectedVehicleTransmission = vehicleTransmission;
                showHideVehicles();
                }
        
          


       // function filterVehicleType(vehicleType) { }
       // function filterVehicleTransmission(vehicleType) { }

            function showHideVehicles(){                //show or hide vehicles based on if selected class name matches our global variable currently selected
                $(".vehicleImage").each(function(index, element){          //this refers to selector
                    if(  
                        $(this).hasClass(selectedVehicleColor) && //vehicleColor?
                        $(this).hasClass (selectedVehicleType) && 
                        $(this).hasClass(selectedVehicleTransmission)
                     ){
                    
                   $ (this).fadeIn();   //once above made true, will fade it in
                     
                }else{
            }
                });

               function hideAllVehicles(){
               $(".vehicleImage").hide();
                }

                function showAllVehicles() {
                        $(".vehicleImage").fadeIn();
                    }
            }
