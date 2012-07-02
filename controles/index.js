/* 
 * controles para la primer pagina de asados
 * 
 * author:Gisela Martinez
 */
steal('asado/vistas/imagenes/styles.css',
      'can/control/control.js',
      'can/view/ejs',
      'asado/commons/commons.js',
      'asado/controles/menu.js'
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
                   new Menu('body',{})
               }
            }
            )
       }
  )

