/* 
 * controles para la primer pagina de asados
 * 
 * author:Gisela Martinez
 */
steal('calcAsado/vistas/imagenes/styles.css',
      'can/control/control.js',
      'can/view/ejs',
      'calcAsado/commons/commons.js',
      'calcAsado/controles/menu.js'
).then(function(){
            can.Control('Opciones',
            {
              defaults:{}  
            },
            {
              'init':function(element,options){
                  this.element.append(can.view(url+'vistas/index.ejs',{img_url:url}))
                  
                },
               'div#imagen click':function(){
                   new Menu_slide('body',{})
               }
            }
            )
       }
  )

