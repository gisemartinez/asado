/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

steal('calcAsado/vistas/imagenes/styles.css',
      'can/control/control.js',
      'can/view/ejs',
      'fredhq-roundabout/jquery.roundabout.js',
      'fredhq-roundabout-shapes/jquery.roundabout-shapes.js',
      'calcAsado/commons/commons.js'
).then(function(){
        can.Control('Menu_slide',
        {
         defaults:{}
        },
        {
         'init':function(element,options){
            this.element.append(can.view(url+'vistas/menu.ejs', {img :url}))
            $.mobile.changePage($('#menuPage'),{transition:"flip"})
            $("ul").roundabout({shape:'lazySusan'});

        },
         'li click':function(){
                console.log('li')
         }
        })
 })
