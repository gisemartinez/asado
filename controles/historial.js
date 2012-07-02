steal('asado/vistas/imagenes/styles.css',
      'can/control/control.js',
      'can/view/ejs',
      'asado/commons/commons.js'
).then(function(){
        can.Control('Historial',
        {
         defaults:{}
        },
        {
         'init':function(element,options){
            this.element.append(can.view('vistas/historial.ejs'))
            $.mobile.changePage($('#historialPage'))

        }
        })
 })
