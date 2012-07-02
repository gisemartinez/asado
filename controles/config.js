steal('asado/vistas/imagenes/styles.css',
      'can/control/control.js',
      'can/view/ejs',
      'asado/commons/commons.js'
).then(function(){
        can.Control('Configuracion',
        {
         defaults:{}
        },
        {
         'init':function(element,options){
            this.element.append(can.view('vistas/config.ejs'))
            $.mobile.changePage($('#configPage'))

        }
        })
 })
