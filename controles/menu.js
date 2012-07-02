/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

steal('asado/vistas/imagenes/styles.css',
      'can/control/control.js',
      'can/view/ejs',
      'asado/commons/commons.js'
).then(function(){
        can.Control('Menu',
        {
         defaults:{}
        },
        {
         'init':function(element,options){
            this.element.append(can.view('vistas/menu.ejs', {img :url}))
            $.mobile.changePage($('#menuPage'),{transition:"flip"})

        },
	'li#config click':function(){
                alert("Configurar app")
         },
	'li#historial click':function(){
                alert("Mostrar historial")
         },
	'li#info click':function(){
                alert("Info del sistema")
         },
         'img click':function(){
                alert("Hacer Asado")
         }
        })
 })
