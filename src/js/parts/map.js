/* Yandex map */

(function (){

    ymaps.ready(init);

    let myMap,
        myPlacemark;

    function init(){    
        
        myMap = new ymaps.Map("yandex-map", {
            center: [62.032884, 129.701342],
            zoom: 16
        });

        myMap.behaviors.disable("scrollZoom");
        myMap.behaviors.disable('drag');
        myMap.events.add("click", function(){
        myMap.behaviors.enable("scrollZoom")
        myMap.behaviors.enable('drag')
        })
        
        myPlacemark = new ymaps.Placemark([62.03264, 129.70136], {}, 
                                          
        {         
        iconLayout: "default#image",
        iconImageHref: "img/logo.png",
        iconImageSize: [20, 20]           
        });
        
        myMap.geoObjects.add(myPlacemark);    
    }

})();