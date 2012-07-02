/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

steal('asado/vistas/imagenes/styles.css',
      'can/control/control.js',
      'can/view/ejs',
	'asado/controles/config.js',
	'asado/controles/historial.js',
      'asado/commons/commons.js').then(function(){
        can.Control('Menu',
        {
         defaults:{}
        },
        {
         'init':function(element,options){
            this.element.append(can.view('vistas/menu.ejs'))
            $.mobile.changePage($('#menuPage'),{transition:"flip"})

        },
	'li#config click':function(){
                new Configuracion('body',{})
         },
	'li#historial click':function(){
                new Historial('body',{})
         },
	'li#info click':function(){
                alert("Info del sistema")
         },
         'img click':function(){
                alert("Hacer Asado")
         }
        })
 })
