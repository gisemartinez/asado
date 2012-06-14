/**
 * @id dhx
 * @global dhx
 * @type dhx
 */
var dhx = {};
dhx.ui = {};


/**
 * @id $$
 * @param {String} dhx element id
 * @return {dhx.ui._any}
 * @type dhx.ui._any
 */
function $$(id) { return dhx.ui._any; };

dhx.ui._any = {};
dhx.ui._any.config = {
	
/**
 * array of views arranged horizontally
 * @id dhx.ui._any.config.cols
 * @type object
 * @property
 */
cols: '',

/**
 * html container or its id where view needs being initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * class name for view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * view gravity (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * view height
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * enables/disables mode when several items can be visible at once
 * @id dhx.ui._any.config.multi
 * @type boolean
 * @property
 */
multi: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * array of views arranged vertically
 * @id dhx.ui._any.config.rows
 * @type object
 * @property
 */
rows: '',

/**
 * defines border of layout
 * @id dhx.ui._any.config.type
 * @type &#039;wide&#039;, &#039;head&#039; or &#039;clean&#039;
 * @property
 */
type: '',

/**
 * view width
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * a view or html content that is shown in item
 * @id dhx.ui._any.config.body
 * @type any
 * @property
 */
body: '',

/**
 * defines whether an accordion cell needs being collapsed, takes true/false as a parameter
 * @id dhx.ui._any.config.collapsed
 * @type boolean
 * @property
 */
collapsed: '',

/**
 * html container or its id where view needs being initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * class name for view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * view gravity (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * header height in the collapsed state
 * @id dhx.ui._any.config.headerAltHeight
 * @type dimension
 * @property
 */
headerAltHeight: '',

/**
 * specifies header in the collapsed state
 * @id dhx.ui._any.config.headerAlt
 * @type template or &#039;false&#039;
 * @property
 */
headerAlt: '',

/**
 * header height
 * @id dhx.ui._any.config.headerHeight
 * @type dimension
 * @property
 */
headerHeight: '',

/**
 * specifies header in the expanded state
 * @id dhx.ui._any.config.header
 * @type template or &#039;false&#039;
 * @property
 */
header: '',

/**
 * view height
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * view width
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * date format (%Y-%m-%d)
 * @id dhx.ui._any.config.calendarDateFormat
 * @type string
 * @property
 */
calendarDateFormat: '',

/**
 * format for week header (%d)
 * @id dhx.ui._any.config.calendarDayHeader
 * @type string
 * @property
 */
calendarDayHeader: '',

/**
 * day format (%d)
 * @id dhx.ui._any.config.calendarDay
 * @type string
 * @property
 */
calendarDay: '',

/**
 * format for header (%F %Y)
 * @id dhx.ui._any.config.calendarHeader
 * @type string
 * @property
 */
calendarHeader: '',

/**
 * month format in header (%F %Y)
 * @id dhx.ui._any.config.calendarMonthHeader
 * @type string
 * @property
 */
calendarMonthHeader: '',

/**
 * label for column with weeks numbers (W#)
 * @id dhx.ui._any.config.calendarWeekHeader
 * @type string
 * @property
 */
calendarWeekHeader: '',

/**
 * format for week number (%W)
 * @id dhx.ui._any.config.calendarWeek
 * @type string
 * @property
 */
calendarWeek: '',

/**
 * height of the cell with day (36)
 * @id dhx.ui._any.config.cellHeight
 * @type dimension or &#039;auto&#039;
 * @property
 */
cellHeight: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * Date() object that specifies the initial date of the calendar (particularly month).
 * @id dhx.ui._any.config.date
 * @type object
 * @property
 */
date: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * calendar height (300)
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * the last hour in a hour select
 * @id dhx.ui._any.config.hourEnd
 * @type dimension
 * @property
 */
hourEnd: '',

/**
 * hour format (%H)
 * @id dhx.ui._any.config.hourFormat
 * @type string
 * @property
 */
hourFormat: '',

/**
 * the first hour in a hour select (8)
 * @id dhx.ui._any.config.hourStart
 * @type dimension
 * @property
 */
hourStart: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * step in minutes selector (15)
 * @id dhx.ui._any.config.minuteStep
 * @type dimension
 * @property
 */
minuteStep: '',

/**
 * the height of month header (40 by default, property should be changed in css too)
 * @id dhx.ui._any.config.monthHeaderHeight
 * @type dimension
 * @property
 */
monthHeaderHeight: '',

/**
 * makes view movable
 * @id dhx.ui._any.config.move
 * @type boolean
 * @property
 */
move: '',

/**
 * enables/disables month navigation in header - the possibility to change months (true)
 * @id dhx.ui._any.config.navigation
 * @type boolean
 * @property
 */
navigation: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.selectedCss
 * @type unknown
 * @property
 */
selectedCss: '',

/**
 * class name for the selected date (dhx_cal_selected_day)
 * @id dhx.ui._any.config.selectedDateClassName
 * @type string
 * @property
 */
selectedDateClassName: '',

/**
 * enables/disables displaying empty weeks (true)
 * @id dhx.ui._any.config.skipEmptyWeeks
 * @type boolean
 * @property
 */
skipEmptyWeeks: '',

/**
 * defines whether week is started on monday
 * @id dhx.ui._any.config.startOnMonday
 * @type boolean
 * @property
 */
startOnMonday: '',

/**
 * the height of area with time selector (32 by default, property should be changed in css too)
 * @id dhx.ui._any.config.timeSelectHeight
 * @type dimension
 * @property
 */
timeSelectHeight: '',

/**
 * enables/disables time selector (false)
 * @id dhx.ui._any.config.timeSelect
 * @type boolean
 * @property
 */
timeSelect: '',

/**
 * the height of week header (20 by default, property should be changed in css too)
 * @id dhx.ui._any.config.weekHeaderHeight
 * @type dimension
 * @property
 */
weekHeaderHeight: '',

/**
 * enables/disables additional header with week days (false)
 * @id dhx.ui._any.config.weekHeader
 * @type boolean
 * @property
 */
weekHeader: '',

/**
 * enables/disables additional left column with weeks&#039; numbers (false)
 * @id dhx.ui._any.config.weekNumber
 * @type boolean
 * @property
 */
weekNumber: '',

/**
 * calendar width (300)
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * array of views arranged horizontally
 * @id dhx.ui._any.config.cols
 * @type object
 * @property
 */
cols: '',

/**
 * html container or its id where view needs being initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * class name for view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * view gravity (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * view height
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * panel showing the total amount of carousel&#039;s items and which one of them is selected.
 * @id dhx.ui._any.config.panel
 * @type object
 * @property
 */
panel: '',

/**
 * array of views arranged vertically
 * @id dhx.ui._any.config.rows
 * @type object
 * @property
 */
rows: '',

/**
 * speed of scrolling (&#039;100ms&#039; by default)
 * @id dhx.ui._any.config.scrollSpeed
 * @type string
 * @property
 */
scrollSpeed: '',

/**
 * view width
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * the transparency of a chart item (a number between 0 and 1)
 * @id dhx.ui._any.config.alpha
 * @type dimension
 * @property
 */
alpha: '',

/**
 * the width of bars
 * @id dhx.ui._any.config.barWidth
 * @type dimension
 * @property
 */
barWidth: '',

/**
 * enables/disables bar border
 * @id dhx.ui._any.config.border
 * @type boolean
 * @property
 */
border: '',

/**
 * a value from 0 to 1 that defines the slope angle of 3D pie (default value - 0.5)
 * @id dhx.ui._any.config.cant
 * @type dimension
 * @property
 */
cant: '',

/**
 * a certain color or template that defines items colors
 * @id dhx.ui._any.config.color
 * @type any
 * @property
 */
color: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui._any.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * custom DataStore object
 * @id dhx.ui._any.config.datastore
 * @type object
 * @property
 */
datastore: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * specifies a chart gradient (applicable to bar, pie charts)
 * @id dhx.ui._any.config.gradient
 * @type any
 * @property
 */
gradient: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * an object with settings for initial grouping
 * @id dhx.ui._any.config.group
 * @type object
 * @property
 */
group: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * defines chart point presenting an item (applicable to line charts: &#039;line&#039; and &#039;spline&#039;)
 * @id dhx.ui._any.config.item
 * @type object
 * @property
 */
item: '',

/**
 * property of pie charts that defines offset of sector labels from the pie edge (20 is default)
 * @id dhx.ui._any.config.labelOffset
 * @type dimension
 * @property
 */
labelOffset: '',

/**
 * the template for items&#039; labels
 * @id dhx.ui._any.config.label
 * @type any
 * @property
 */
label: '',

/**
 * defines chart legend
 * @id dhx.ui._any.config.legend
 * @type object
 * @property
 */
legend: '',

/**
 * pie chart property that sets color for pie borders (#ffffff)
 * @id dhx.ui._any.config.lineColor
 * @type string
 * @property
 */
lineColor: '',

/**
 * defines chart line (applicable to line charts:&#039;line&#039; and &#039;spline&#039;)
 * @id dhx.ui._any.config.line
 * @type object
 * @property
 */
line: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * bar chart property, sets scale origin
 * @id dhx.ui._any.config.origin
 * @type dimension
 * @property
 */
origin: '',

/**
 * an object that defines padding of chart content
 * @id dhx.ui._any.config.padding
 * @type object
 * @property
 */
padding: '',

/**
 * pie chart property, the template for the inner labels
 * @id dhx.ui._any.config.pieInnerText
 * @type any
 * @property
 */
pieInnerText: '',

/**
 * the radius for the bar&#039;s rounding
 * @id dhx.ui._any.config.radius
 * @type dimension
 * @property
 */
radius: '',

/**
 * unknown
 * @id dhx.ui._any.config.scheme
 * @type unknown
 * @property
 */
scheme: '',

/**
 * the array of series configuration objects
 * @id dhx.ui._any.config.series
 * @type object
 * @property
 */
series: '',

/**
 * enables/disables pie shadow
 * @id dhx.ui._any.config.shadow
 * @type boolean
 * @property
 */
shadow: '',

/**
 * defines sorting settings
 * @id dhx.ui._any.config.sort
 * @type object
 * @property
 */
sort: '',

/**
 * chart type
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * the template for item values
 * @id dhx.ui._any.config.value
 * @type any
 * @property
 */
value: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * defines the horizontal axis
 * @id dhx.ui._any.config.xAxis
 * @type object
 * @property
 */
xAxis: '',

/**
 * defines the vertical axis
 * @id dhx.ui._any.config.yAxis
 * @type object
 * @property
 */
yAxis: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * the text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * the minimum value of the control
 * @id dhx.ui._any.config.min
 * @type dimension
 * @property
 */
min: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * the step of the control (the difference between two successive values)
 * @id dhx.ui._any.config.step
 * @type dimension
 * @property
 */
step: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * unknown
 * @id dhx.ui._any.config.filter
 * @type unknown
 * @property
 */
filter: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * unknown
 * @id dhx.ui._any.config.iconCss
 * @type unknown
 * @property
 */
iconCss: '',

/**
 * unknown
 * @id dhx.ui._any.config.iconWidth
 * @type unknown
 * @property
 */
iconWidth: '',

/**
 * unknown
 * @id dhx.ui._any.config.icon
 * @type unknown
 * @property
 */
icon: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * defines select options of control
 * @id dhx.ui._any.config.options
 * @type object
 * @property
 */
options: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * the minimum value of the control
 * @id dhx.ui._any.config.min
 * @type dimension
 * @property
 */
min: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * the step of the control (the difference between two successive values)
 * @id dhx.ui._any.config.step
 * @type dimension
 * @property
 */
step: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui._any.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * custom DataStore object
 * @id dhx.ui._any.config.datastore
 * @type object
 * @property
 */
datastore: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * enables/disables item editing
 * @id dhx.ui._any.config.edit
 * @type boolean
 * @property
 */
edit: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.scheme
 * @type unknown
 * @property
 */
scheme: '',

/**
 * enables/disables scroll
 * @id dhx.ui._any.config.scroll
 * @type boolean
 * @property
 */
scroll: '',

/**
 * enables/disables item selection or multiselection in grouplist
 * @id dhx.ui._any.config.select
 * @type boolean or &#039;multiselect&#039;
 * @property
 */
select: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type any
 * @property
 */
template: '',

/**
 * object that specifies items list presentation
 * @id dhx.ui._any.config.type
 * @type object
 * @property
 */
type: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * adjusts view width to display the defined number of items in a row
 * @id dhx.ui._any.config.xCount
 * @type dimension
 * @property
 */
xCount: '',

/**
 * adjusts view height to display the defined number of items in a column
 * @id dhx.ui._any.config.yCount
 * @type dimension
 * @property
 */
yCount: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * date format (%Y-%m-%d)
 * @id dhx.ui._any.config.dateFormat
 * @type string
 * @property
 */
dateFormat: '',

/**
 * unknown
 * @id dhx.ui._any.config.externalDateFormat
 * @type unknown
 * @property
 */
externalDateFormat: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * unknown
 * @id dhx.ui._any.config.iconCss
 * @type unknown
 * @property
 */
iconCss: '',

/**
 * unknown
 * @id dhx.ui._any.config.iconWidth
 * @type unknown
 * @property
 */
iconWidth: '',

/**
 * unknown
 * @id dhx.ui._any.config.icon
 * @type unknown
 * @property
 */
icon: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * defines select options of control
 * @id dhx.ui._any.config.options
 * @type object
 * @property
 */
options: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * unknown
 * @id dhx.ui._any.config.stringResult
 * @type unknown
 * @property
 */
stringResult: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * initial value of the control
 * @id dhx.ui._any.config.value
 * @type string
 * @property
 */
value: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * array of views arranged horizontally
 * @id dhx.ui._any.config.cols
 * @type object
 * @property
 */
cols: '',

/**
 * html container or its id where view needs being initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * class name for view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * view gravity (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * view height
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * array of views arranged vertically
 * @id dhx.ui._any.config.rows
 * @type object
 * @property
 */
rows: '',

/**
 * enables/disables scroll
 * @id dhx.ui._any.config.scroll
 * @type boolean
 * @property
 */
scroll: '',

/**
 * the type of toolbar
 * @id dhx.ui._any.config.type
 * @type &#039;MainBar&#039; or &#039;SubBar&#039;
 * @property
 */
type: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * view width
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * sets initial center of the map. After initialization, map will be focused on this point.
 * @id dhx.ui._any.config.center
 * @type object
 * @property
 */
center: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * type of the map
 * @id dhx.ui._any.config.mapType
 * @type ROADMAP,SATELLITE,HYBRID or TERRAIN
 * @property
 */
mapType: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * sets initial zoom (value can be changed from 0 to 20. The default value - 5)
 * @id dhx.ui._any.config.zoom
 * @type dimension
 * @property
 */
zoom: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui._any.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * custom DataStore object
 * @id dhx.ui._any.config.datastore
 * @type object
 * @property
 */
datastore: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * specifies grid columns (in the grid will be as many columns as there are fields specified by this parameter)
 * @id dhx.ui._any.config.fields
 * @type object
 * @property
 */
fields: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of header
 * @id dhx.ui._any.config.headerHeight
 * @type dimension
 * @property
 */
headerHeight: '',

/**
 * shows/hides grid header
 * @id dhx.ui._any.config.header
 * @type boolean
 * @property
 */
header: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.scheme
 * @type unknown
 * @property
 */
scheme: '',

/**
 * defines touch scroll: x or y
 * @id dhx.ui._any.config.scroll
 * @type string
 * @property
 */
scroll: '',

/**
 * enables/disables item selection or multiselection in grid
 * @id dhx.ui._any.config.select
 * @type boolean,string
 * @property
 */
select: '',

/**
 * enables/disables sorting
 * @id dhx.ui._any.config.sorting
 * @type boolean
 * @property
 */
sorting: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type any
 * @property
 */
template: '',

/**
 * object that specifies items list presentation
 * @id dhx.ui._any.config.type
 * @type object
 * @property
 */
type: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * enables/disables animation
 * @id dhx.ui._any.config.animate
 * @type boolean, object
 * @property
 */
animate: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui._any.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * custom DataStore object
 * @id dhx.ui._any.config.datastore
 * @type object
 * @property
 */
datastore: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.scheme
 * @type unknown
 * @property
 */
scheme: '',

/**
 * enables/disables scroll
 * @id dhx.ui._any.config.scroll
 * @type boolean
 * @property
 */
scroll: '',

/**
 * enables/disables item selection or multiselection in grouplist
 * @id dhx.ui._any.config.select
 * @type boolean,string
 * @property
 */
select: '',

/**
 * an html template that defines data that will be presented in group header in the expanded state
 * @id dhx.ui._any.config.templateBack
 * @type any
 * @property
 */
templateBack: '',

/**
 * an html template that defines data that will be presented in group header in the collapsed state
 * @id dhx.ui._any.config.templateGroup
 * @type any
 * @property
 */
templateGroup: '',

/**
 * an html template that defines data that will be presented in grouplist
 * @id dhx.ui._any.config.templateItem
 * @type any
 * @property
 */
templateItem: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type any
 * @property
 */
template: '',

/**
 * object that specifies items list presentation
 * @id dhx.ui._any.config.type
 * @type object
 * @property
 */
type: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * enables/disables loading cover
 * @id dhx.ui._any.config.loading
 * @type boolean
 * @property
 */
loading: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * 
 * @id dhx.ui._any.config.src
 * @type 
 * @property
 */
src: '',

/**
 * defines whether the loading cover should be displayed while loading (actual in case of &#039;src&#039; parameter)
 * @id dhx.ui._any.config.waitMessage
 * @type boolean
 * @property
 */
waitMessage: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * unknown
 * @id dhx.ui._any.config.attributes
 * @type unknown
 * @property
 */
attributes: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * array of views arranged horizontally
 * @id dhx.ui._any.config.cols
 * @type object
 * @property
 */
cols: '',

/**
 * html container or its id where view needs being initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * class name for view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * view gravity (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * view height
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * array of views arranged vertically
 * @id dhx.ui._any.config.rows
 * @type object
 * @property
 */
rows: '',

/**
 * defines border of layout
 * @id dhx.ui._any.config.type
 * @type &#039;wide&#039;, &#039;head&#039; or &#039;clean&#039;
 * @property
 */
type: '',

/**
 * view width
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui._any.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * custom DataStore object
 * @id dhx.ui._any.config.datastore
 * @type object
 * @property
 */
datastore: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.scheme
 * @type unknown
 * @property
 */
scheme: '',

/**
 * enables/disables scroll
 * @id dhx.ui._any.config.scroll
 * @type boolean
 * @property
 */
scroll: '',

/**
 * enables/disables item selection or multiselection in grid
 * @id dhx.ui._any.config.select
 * @type boolean,string
 * @property
 */
select: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type any
 * @property
 */
template: '',

/**
 * object that specifies items list presentation
 * @id dhx.ui._any.config.type
 * @type object
 * @property
 */
type: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * defines animation on view change (object with direction, type and subtype properties) or disables animation (false)
 * @id dhx.ui._any.config.animate
 * @type boolean,object
 * @property
 */
animate: '',

/**
 * the array with views objects
 * @id dhx.ui._any.config.cells
 * @type object
 * @property
 */
cells: '',

/**
 * array of views arranged horizontally
 * @id dhx.ui._any.config.cols
 * @type object
 * @property
 */
cols: '',

/**
 * html container or its id where view needs being initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * class name for view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * view gravity (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * view height
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * array of views arranged vertically
 * @id dhx.ui._any.config.rows
 * @type object
 * @property
 */
rows: '',

/**
 * view width
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui._any.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * custom DataStore object
 * @id dhx.ui._any.config.datastore
 * @type object
 * @property
 */
datastore: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * 
 * @id dhx.ui._any.config.panel
 * @type 
 * @property
 */
panel: '',

/**
 * unknown
 * @id dhx.ui._any.config.scheme
 * @type unknown
 * @property
 */
scheme: '',

/**
 * defines offset for the scroll stop
 * @id dhx.ui._any.config.scrollOffset
 * @type dimension
 * @property
 */
scrollOffset: '',

/**
 * enables/disables scroll
 * @id dhx.ui._any.config.scroll
 * @type boolean
 * @property
 */
scroll: '',

/**
 * enables/disables item selection or multiselection in grid
 * @id dhx.ui._any.config.select
 * @type boolean,string
 * @property
 */
select: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type any
 * @property
 */
template: '',

/**
 * object that specifies items list presentation
 * @id dhx.ui._any.config.type
 * @type object
 * @property
 */
type: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * the content of window body: template or view
 * @id dhx.ui._any.config.body
 * @type template, object
 * @property
 */
body: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * defines the header height (43 by default)
 * @id dhx.ui._any.config.headHeight
 * @type dimension
 * @property
 */
headHeight: '',

/**
 * sets header view
 * @id dhx.ui._any.config.head
 * @type object
 * @property
 */
head: '',

/**
 * the content of window header: template or view
 * @id dhx.ui._any.config.header
 * @type template, object
 * @property
 */
header: '',

/**
 * window height (200)
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * hides the window initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * the left offset of a window (100)
 * @id dhx.ui._any.config.left
 * @type dimension
 * @property
 */
left: '',

/**
 * switches window modality
 * @id dhx.ui._any.config.modal
 * @type boolean
 * @property
 */
modal: '',

/**
 * makes view movable
 * @id dhx.ui._any.config.move
 * @type boolean
 * @property
 */
move: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * window padding
 * @id dhx.ui._any.config.padding
 * @type object
 * @property
 */
padding: '',

/**
 * window position: &#039;top&#039; or &#039;center&#039;
 * @id dhx.ui._any.config.position
 * @type string
 * @property
 */
position: '',

/**
 * the top offset of a window (100)
 * @id dhx.ui._any.config.top
 * @type dimension
 * @property
 */
top: '',

/**
 * window width (300)
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * unknown
 * @id dhx.ui._any.config.iconCss
 * @type unknown
 * @property
 */
iconCss: '',

/**
 * unknown
 * @id dhx.ui._any.config.iconWidth
 * @type unknown
 * @property
 */
iconWidth: '',

/**
 * unknown
 * @id dhx.ui._any.config.icon
 * @type unknown
 * @property
 */
icon: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * defines select options of control
 * @id dhx.ui._any.config.options
 * @type object
 * @property
 */
options: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * unknown
 * @id dhx.ui._any.config.body
 * @type unknown
 * @property
 */
body: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * sets the height of scrollable view, actual for y scrolling
 * @id dhx.ui._any.config.contentHeight
 * @type dimention
 * @property
 */
contentHeight: '',

/**
 * sets the width of scrollable view, actual for x scrolling,
 * @id dhx.ui._any.config.contentWidth
 * @type dimention
 * @property
 */
contentWidth: '',

/**
 * the view object that needs being scrolled
 * @id dhx.ui._any.config.content
 * @type object
 * @property
 */
content: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * the speed of scrolling (the default speed is &#039;0ms&#039;)
 * @id dhx.ui._any.config.scrollSpeed
 * @type string
 * @property
 */
scrollSpeed: '',

/**
 * sets the type of scrolling (x - horizontal, y - vertical)
 * @id dhx.ui._any.config.scroll
 * @type string
 * @property
 */
scroll: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * unknown
 * @id dhx.ui._any.config.labelWidth
 * @type unknown
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * unknown
 * @id dhx.ui._any.config.max
 * @type unknown
 * @property
 */
max: '',

/**
 * unknown
 * @id dhx.ui._any.config.min
 * @type unknown
 * @property
 */
min: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * unknown
 * @id dhx.ui._any.config.step
 * @type unknown
 * @property
 */
step: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * the array of views
 * @id dhx.ui._any.config.cells
 * @type object
 * @property
 */
cells: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * the id or node, whose content will be moved to the view
 * @id dhx.ui._any.config.content
 * @type any
 * @property
 */
content: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * unknown
 * @id dhx.ui._any.config.loading
 * @type unknown
 * @property
 */
loading: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * enables/disables scroll
 * @id dhx.ui._any.config.scroll
 * @type boolean
 * @property
 */
scroll: '',

/**
 * path to external template that is loaded by Ajax
 * @id dhx.ui._any.config.src
 * @type string
 * @property
 */
src: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * defines whether the loading cover should be displayed while loading (actual in case of &#039;src&#039; parameter)
 * @id dhx.ui._any.config.waitMessage
 * @type boolean
 * @property
 */
waitMessage: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * unknown
 * @id dhx.ui._any.config.cssContant
 * @type unknown
 * @property
 */
cssContant: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of label
 * @id dhx.ui._any.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',

/**
 * text label of control
 * @id dhx.ui._any.config.label
 * @type string
 * @property
 */
label: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',

/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui._any.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * type of control
 * @id dhx.ui._any.config.type
 * @type string
 * @property
 */
type: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * array of views arranged horizontally
 * @id dhx.ui._any.config.cols
 * @type object
 * @property
 */
cols: '',

/**
 * html container or its id where view needs being initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * class name for view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * view gravity (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * view height
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * array of views arranged vertically
 * @id dhx.ui._any.config.rows
 * @type object
 * @property
 */
rows: '',

/**
 * enables/disables scroll
 * @id dhx.ui._any.config.scroll
 * @type boolean
 * @property
 */
scroll: '',

/**
 * the type of toolbar
 * @id dhx.ui._any.config.type
 * @type &#039;MainBar&#039; or &#039;SubBar&#039;
 * @property
 */
type: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * view width
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * defines whether a video file must be played just after initialization, without waiting a button click (false)
 * @id dhx.ui._any.config.autoplay
 * @type boolean
 * @property
 */
autoplay: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * defines whether a control panel should be displayed (true)
 * @id dhx.ui._any.config.controls
 * @type boolean
 * @property
 */
controls: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * path to video file
 * @id dhx.ui._any.config.src
 * @type string
 * @property
 */
src: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * the content of window body: template or view
 * @id dhx.ui._any.config.body
 * @type template, object
 * @property
 */
body: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * defines the header height (43 by default)
 * @id dhx.ui._any.config.headHeight
 * @type dimension
 * @property
 */
headHeight: '',

/**
 * sets header view
 * @id dhx.ui._any.config.head
 * @type object
 * @property
 */
head: '',

/**
 * the content of window header: template or view
 * @id dhx.ui._any.config.header
 * @type template, object
 * @property
 */
header: '',

/**
 * window height (200)
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * hides the window initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * the left offset of a window (100)
 * @id dhx.ui._any.config.left
 * @type dimension
 * @property
 */
left: '',

/**
 * switches window modality
 * @id dhx.ui._any.config.modal
 * @type boolean
 * @property
 */
modal: '',

/**
 * makes view movable
 * @id dhx.ui._any.config.move
 * @type boolean
 * @property
 */
move: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * window position: &#039;top&#039; or &#039;center&#039;
 * @id dhx.ui._any.config.position
 * @type string
 * @property
 */
position: '',

/**
 * the top offset of a window (100)
 * @id dhx.ui._any.config.top
 * @type dimension
 * @property
 */
top: '',

/**
 * window width (300)
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui._any.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * custom DataStore object
 * @id dhx.ui._any.config.datastore
 * @type object
 * @property
 */
datastore: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * unknown
 * @id dhx.ui._any.config.scheme
 * @type unknown
 * @property
 */
scheme: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui._any.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * custom DataStore object
 * @id dhx.ui._any.config.datastore
 * @type object
 * @property
 */
datastore: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * unknown
 * @id dhx.ui._any.config.scheme
 * @type unknown
 * @property
 */
scheme: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * enables automatic data updating on server while any changes on client-side are done
 * @id dhx.ui._any.config.autoupdate
 * @type boolean
 * @property
 */
autoupdate: '',

/**
 * the linked data source. It can be both some independent data source and one of components operated on data (e.g. grid)
 * @id dhx.ui._any.config.master
 * @type object
 * @property
 */
master: '',

/**
 * type of request
 * @id dhx.ui._any.config.mode
 * @type &#039;post&#039; or &#039;get&#039;
 * @property
 */
mode: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * enables or disables dnd
 * @id dhx.ui._any.config.drag
 * @type boolean
 * @property
 */
drag: '',

/**
 * allows or denies edit operations
 * @id dhx.ui._any.config.edit
 * @type boolean
 * @property
 */
edit: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * an object with settings for initial grouping
 * @id dhx.ui._any.config.group
 * @type object
 * @property
 */
group: '',

/**
 * defines sorting settings
 * @id dhx.ui._any.config.sort
 * @type object
 * @property
 */
sort: '',

/**
 * switches window modality
 * @id dhx.ui._any.config.modal
 * @type boolean
 * @property
 */
modal: '',

/**
 * makes view movable
 * @id dhx.ui._any.config.move
 * @type boolean
 * @property
 */
move: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type any
 * @property
 */
template: '',

/**
 * object that specifies items list presentation
 * @id dhx.ui._any.config.type
 * @type object
 * @property
 */
type: '',

/**
 * type name or an object that defines Type properties
 * @id dhx.ui._any.config.type
 * @type string, object
 * @property
 */
type: '',

/**
 * enables/disables scroll
 * @id dhx.ui._any.config.scroll
 * @type boolean
 * @property
 */
scroll: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * html container or its id where view will be initialized
 * @id dhx.ui._any.config.container
 * @type object,string
 * @property
 */
container: '',

/**
 * the id or node, whose content will be moved to the view
 * @id dhx.ui._any.config.content
 * @type any
 * @property
 */
content: '',

/**
 * css class for a view container
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * loaded data
 * @id dhx.ui._any.config.data
 * @type string,object
 * @property
 */
data: '',

/**
 * type of loaded data
 * @id dhx.ui._any.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',

/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * height of view
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * sets whether a view will be hidden initially
 * @id dhx.ui._any.config.hidden
 * @type boolean
 * @property
 */
hidden: '',

/**
 * view id
 * @id dhx.ui._any.config.id
 * @type string,dimension
 * @property
 */
id: '',

/**
 * unknown
 * @id dhx.ui._any.config.loading
 * @type unknown
 * @property
 */
loading: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: '',

/**
 * enables/disables scroll
 * @id dhx.ui._any.config.scroll
 * @type boolean
 * @property
 */
scroll: '',

/**
 * path to external template that is loaded by Ajax
 * @id dhx.ui._any.config.src
 * @type string
 * @property
 */
src: '',

/**
 * item template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * data url
 * @id dhx.ui._any.config.url
 * @type string
 * @property
 */
url: '',

/**
 * defines whether the loading cover should be displayed while loading (actual in case of &#039;src&#039; parameter)
 * @id dhx.ui._any.config.waitMessage
 * @type boolean
 * @property
 */
waitMessage: '',

/**
 * width of view
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * in order to movement will be interpreted as scrolling or swapping, you should drag finger over the distance defined by this parameter (by default 30 millimeters)
 * @id dhx.ui._any.config.deltaStep
 * @type dimension
 * @property
 */
deltaStep: '',

/**
 * the duration of scrolling after you lifted fingers up (1500)
 * @id dhx.ui._any.config.finish
 * @type dimension
 * @property
 */
finish: '',

/**
 * the force of gravity (500)
 * @id dhx.ui._any.config.gravity
 * @type dimension
 * @property
 */
gravity: '',

/**
 * the duration of touching in milliseconds to fire longTouch event (1000)
 * @id dhx.ui._any.config.longTouchDelay
 * @type dimension
 * @property
 */
longTouchDelay: '',

/**
 * 
 * @id dhx.ui._any.config.stepSize
 * @type 
 * @property
 */
stepSize: '',

/**
 * Css class of single item
 * @id dhx.ui._any.config.css
 * @type string
 * @property
 */
css: '',

/**
 * item height
 * @id dhx.ui._any.config.height
 * @type dimension
 * @property
 */
height: '',

/**
 * item margin
 * @id dhx.ui._any.config.margin
 * @type dimension
 * @property
 */
margin: '',

/**
 * Name of type
 * @id dhx.ui._any.config.name
 * @type string
 * @property
 */
name: '',

/**
 * Css class of single item
 * @id dhx.ui._any.config.padding
 * @type dimension
 * @property
 */
padding: '',

/**
 * Main template
 * @id dhx.ui._any.config.template
 * @type template
 * @property
 */
template: '',

/**
 * Edit template
 * @id dhx.ui._any.config.template_edit
 * @type template
 * @property
 */
template_edit: '',

/**
 * Loading template
 * @id dhx.ui._any.config.template_loading
 * @type template
 * @property
 */
template_loading: '',

/**
 * item width
 * @id dhx.ui._any.config.width
 * @type dimension
 * @property
 */
width: '',

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui._any.config.on
 * @type undefined
 * @property
 */
on: ''
};
/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * some unknown method
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui._any.index
 * @class dhx.ui._any
 * @method index
 * @memberOf dhx.ui._any
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui._any.index = function(obj) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * rebuilds layout
 * @id dhx.ui._any.reconstruct
 * @class dhx.ui._any
 * @method reconstruct
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.reconstruct = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.resizeChildren
 * @class dhx.ui._any
 * @method resizeChildren
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.resizeChildren = function() {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui._any.showBatch
 * @class dhx.ui._any
 * @method showBatch
 * @memberOf dhx.ui._any
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui._any.showBatch = function(name) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * collapses accordion item
 * @id dhx.ui._any.collapse
 * @class dhx.ui._any
 * @method collapse
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.collapse = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * expands accordion item
 * @id dhx.ui._any.expand
 * @class dhx.ui._any
 * @method expand
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.expand = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * refreshes header label
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns currently selected date
 * @id dhx.ui._any.getSelectedDate
 * @class dhx.ui._any
 * @method getSelectedDate
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getSelectedDate = function() {};


/**
 * returns the current value of control
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @param {String} date getValue(date)
 * @example 
 */
 dhx.ui._any.getValue = function(date) {};


/**
 * retuns visible date: in the general case, the selected date or the first day of the month if the currently selected date is not visible
 * @id dhx.ui._any.getVisibleDate
 * @class dhx.ui._any
 * @method getVisibleDate
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getVisibleDate = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders an object
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * selects date
 * @id dhx.ui._any.selectDate
 * @class dhx.ui._any
 * @method selectDate
 * @memberOf dhx.ui._any
 * @param {String} date selectDate(date, show)
 * @param {String} show Type: Method
 * @example 
 */
 dhx.ui._any.selectDate = function(date, show) {};


/**
 * sets a new value for a control
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} date setValue(date)
 * @example 
 */
 dhx.ui._any.setValue = function(date) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * shows calendar (and selects date if it is defined)
 * @id dhx.ui._any.showCalendar
 * @class dhx.ui._any
 * @method showCalendar
 * @memberOf dhx.ui._any
 * @param {String} date showCalendar(date)
 * @example 
 */
 dhx.ui._any.showCalendar = function(date) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * some unknown method
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * returns id of the currently selected item
 * @id dhx.ui._any.getActive
 * @class dhx.ui._any
 * @method getActive
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getActive = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui._any.index
 * @class dhx.ui._any
 * @method index
 * @memberOf dhx.ui._any
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui._any.index = function(obj) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * rebuilds layout
 * @id dhx.ui._any.reconstruct
 * @class dhx.ui._any
 * @method reconstruct
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.reconstruct = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.resizeChildren
 * @class dhx.ui._any
 * @method resizeChildren
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.resizeChildren = function() {};


/**
 * scrolls carousel container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui._any.showBatch
 * @class dhx.ui._any
 * @method showBatch
 * @memberOf dhx.ui._any
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui._any.showBatch = function(name) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * adds item to the store
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui._any.add = function(obj,index) {};


/**
 * adds the new chart series
 * @id dhx.ui._any.addSeries
 * @class dhx.ui._any
 * @method addSeries
 * @memberOf dhx.ui._any
 * @param {Object} obj addSeries(obj)
 * @example 
 */
 dhx.ui._any.addSeries = function(obj) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * removes all items from the component
 * @id dhx.ui._any.clearAll
 * @class dhx.ui._any
 * @method clearAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearAll = function() {};


/**
 * clears canvas
 * @id dhx.ui._any.clearCanvas
 * @class dhx.ui._any
 * @method clearCanvas
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearCanvas = function() {};


/**
 * gets count of items
 * @id dhx.ui._any.dataCount
 * @class dhx.ui._any
 * @method dataCount
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dataCount = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * checks if the item with such ID exists
 * @id dhx.ui._any.exists
 * @class dhx.ui._any
 * @method exists
 * @memberOf dhx.ui._any
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui._any.exists = function(id) {};


/**
 * filters data
 * @id dhx.ui._any.filter
 * @class dhx.ui._any
 * @method filter
 * @memberOf dhx.ui._any
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui._any.filter = function(text,value,preserve) {};


/**
 * gets the ID of the first item
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * gets canvas
 * @id dhx.ui._any.getCanvas
 * @class dhx.ui._any
 * @method getCanvas
 * @memberOf dhx.ui._any
 * @param {String} context getCanvas(context)
 * @example 
 */
 dhx.ui._any.getCanvas = function(context) {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * groups data
 * @id dhx.ui._any.group
 * @class dhx.ui._any
 * @method group
 * @memberOf dhx.ui._any
 * @param {String} config group(config,mode)
 * @param {String} mode Type: Method
 * @example 
 */
 dhx.ui._any.group = function(config,mode) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * gets the id of an item with taken index
 * @id dhx.ui._any.idByIndex
 * @class dhx.ui._any
 * @method idByIndex
 * @memberOf dhx.ui._any
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui._any.idByIndex = function(index) {};


/**
 * the index of the item in question
 * @id dhx.ui._any.indexById
 * @class dhx.ui._any
 * @method indexById
 * @memberOf dhx.ui._any
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui._any.indexById = function(id) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * gets the object of a data item
 * @id dhx.ui._any.item
 * @class dhx.ui._any
 * @method item
 * @memberOf dhx.ui._any
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui._any.item = function(id) {};


/**
 * gets the id of the last item
 * @id dhx.ui._any.last
 * @class dhx.ui._any
 * @method last
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.last = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * some unknown method
 * @id dhx.ui._any.loadNext
 * @class dhx.ui._any
 * @method loadNext
 * @memberOf dhx.ui._any
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui._any.loadNext = function(count, start) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui._any.next
 * @class dhx.ui._any
 * @method next
 * @memberOf dhx.ui._any
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.next = function(id,step) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui._any.previous
 * @class dhx.ui._any
 * @method previous
 * @memberOf dhx.ui._any
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.previous = function(id,step) {};


/**
 * repaint the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui._any.refresh = function(id) {};


/**
 * removes element from datastore
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui._any.remove = function(id) {};


/**
 * renders a chart
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * creates absolutely positioned container
 * @id dhx.ui._any.renderText
 * @class dhx.ui._any
 * @method renderText
 * @memberOf dhx.ui._any
 * @param {String} x renderText(x,y,text,css,w)
 * @param {String} y Type: Method
 * @param {String} text File:
 * @param {String} css Implemented in: Canvas
 * @param {String} w Included in: chart
 * @example 
 */
 dhx.ui._any.renderText = function(x,y,text,css,w) {};


/**
 * creates absolutely positioned container and then align it according to the 1st and 2nd parameters
 * @id dhx.ui._any.renderTextAt
 * @class dhx.ui._any
 * @method renderTextAt
 * @memberOf dhx.ui._any
 * @param {String} valign renderTextAt(valign,align, x,y,t,c,w)
 * @param {String} align Type: Method
 * @param {String} x File:
 * @param {String} y Implemented in: Canvas
 * @param {String} t Included in: chart
 * @param {String} [c] valign - vertical align (optional)
 * @param {String} [w] align - horizontal align (optional)
 * @example 
 */
 dhx.ui._any.renderTextAt = function(valign,align, x,y,t,c,w) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * serializes data to a json object
 * @id dhx.ui._any.serialize
 * @class dhx.ui._any
 * @method serialize
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.serialize = function() {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * sorts datastore
 * @id dhx.ui._any.sort
 * @class dhx.ui._any
 * @method sort
 * @memberOf dhx.ui._any
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sort = function(by, dir, as) {};


/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui._any.sync
 * @class dhx.ui._any
 * @method sync
 * @memberOf dhx.ui._any
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sync = function(source, filter, silent) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * ungroups data
 * @id dhx.ui._any.ungroup
 * @class dhx.ui._any
 * @method ungroup
 * @memberOf dhx.ui._any
 * @param {String} mode ungroup(mode)
 * @example 
 */
 dhx.ui._any.ungroup = function(mode) {};


/**
 * sets properties of the data item
 * @id dhx.ui._any.update
 * @class dhx.ui._any
 * @method update
 * @memberOf dhx.ui._any
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.update = function(id,data) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns text label of the control
 * @id dhx.ui._any.getLabel
 * @class dhx.ui._any
 * @method getLabel
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getLabel = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * sets the next value of the control
 * @id dhx.ui._any.next
 * @class dhx.ui._any
 * @method next
 * @memberOf dhx.ui._any
 * @param {String} step next(step, min, max)
 * @param {String} min Type: Method
 * @param {String} max File:
 * @example 
 */
 dhx.ui._any.next = function(step, min, max) {};


/**
 * sets the previous value of the control
 * @id dhx.ui._any.prev
 * @class dhx.ui._any
 * @method prev
 * @memberOf dhx.ui._any
 * @param {String} step prev(step, min, max)
 * @param {String} min Type: Method
 * @param {String} max File:
 * @example 
 */
 dhx.ui._any.prev = function(step, min, max) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * swiches states of the control, i.e. true to false and vice-versa
 * @id dhx.ui._any.toggle
 * @class dhx.ui._any
 * @method toggle
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.toggle = function() {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.getList
 * @class dhx.ui._any
 * @method getList
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getList = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns text label of the control
 * @id dhx.ui._any.getLabel
 * @class dhx.ui._any
 * @method getLabel
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getLabel = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * sets the next value of the control
 * @id dhx.ui._any.next
 * @class dhx.ui._any
 * @method next
 * @memberOf dhx.ui._any
 * @param {String} step next(step, min, max)
 * @param {String} min Type: Method
 * @param {String} max File:
 * @example 
 */
 dhx.ui._any.next = function(step, min, max) {};


/**
 * sets the previous value of the control
 * @id dhx.ui._any.prev
 * @class dhx.ui._any
 * @method prev
 * @memberOf dhx.ui._any
 * @param {String} step prev(step, min, max)
 * @param {String} min Type: Method
 * @param {String} max File:
 * @example 
 */
 dhx.ui._any.prev = function(step, min, max) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * adds item to the store
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui._any.add = function(obj,index) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * removes all items from the component
 * @id dhx.ui._any.clearAll
 * @class dhx.ui._any
 * @method clearAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearAll = function() {};


/**
 * applies new type settings
 * @id dhx.ui._any.customize
 * @class dhx.ui._any
 * @method customize
 * @memberOf dhx.ui._any
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui._any.customize = function(obj) {};


/**
 * gets count of items
 * @id dhx.ui._any.dataCount
 * @class dhx.ui._any
 * @method dataCount
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dataCount = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * renders drag-n-drop marker
 * @id dhx.ui._any.dragMarker
 * @class dhx.ui._any
 * @method dragMarker
 * @memberOf dhx.ui._any
 * @param {String} context dragMarker(context,ev)
 * @param {String} ev Type: Method
 * @example 
 */
 dhx.ui._any.dragMarker = function(context,ev) {};


/**
 * switches item to the edit state
 * @id dhx.ui._any.edit
 * @class dhx.ui._any
 * @method edit
 * @memberOf dhx.ui._any
 * @param {String} id edit(id)
 * @example 
 */
 dhx.ui._any.edit = function(id) {};


/**
 * checks if the item with such ID exists
 * @id dhx.ui._any.exists
 * @class dhx.ui._any
 * @method exists
 * @memberOf dhx.ui._any
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui._any.exists = function(id) {};


/**
 * filters data
 * @id dhx.ui._any.filter
 * @class dhx.ui._any
 * @method filter
 * @memberOf dhx.ui._any
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui._any.filter = function(text,value,preserve) {};


/**
 * gets the ID of the first item
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns ID of selected item(s)
 * @id dhx.ui._any.getSelected
 * @class dhx.ui._any
 * @method getSelected
 * @memberOf dhx.ui._any
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui._any.getSelected = function(as_array) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * gets the id of an item with taken index
 * @id dhx.ui._any.idByIndex
 * @class dhx.ui._any
 * @method idByIndex
 * @memberOf dhx.ui._any
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui._any.idByIndex = function(index) {};


/**
 * the index of the item in question
 * @id dhx.ui._any.indexById
 * @class dhx.ui._any
 * @method indexById
 * @memberOf dhx.ui._any
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui._any.indexById = function(id) {};


/**
 * returns id of item in edit state, or null if none
 * @id dhx.ui._any.isEdit
 * @class dhx.ui._any
 * @method isEdit
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.isEdit = function() {};


/**
 * checks if item is selected or not
 * @id dhx.ui._any.isSelected
 * @class dhx.ui._any
 * @method isSelected
 * @memberOf dhx.ui._any
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui._any.isSelected = function(id) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * gets the object of a data item
 * @id dhx.ui._any.item
 * @class dhx.ui._any
 * @method item
 * @memberOf dhx.ui._any
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui._any.item = function(id) {};


/**
 * gets the id of the last item
 * @id dhx.ui._any.last
 * @class dhx.ui._any
 * @method last
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.last = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * some unknown method
 * @id dhx.ui._any.loadNext
 * @class dhx.ui._any
 * @method loadNext
 * @memberOf dhx.ui._any
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui._any.loadNext = function(count, start) {};


/**
 * 
 * @id dhx.ui._any.locate
 * @class dhx.ui._any
 * @method locate
 * @memberOf dhx.ui._any
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui._any.locate = function(e) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui._any.next
 * @class dhx.ui._any
 * @method next
 * @memberOf dhx.ui._any
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.next = function(id,step) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui._any.previous
 * @class dhx.ui._any
 * @method previous
 * @memberOf dhx.ui._any
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.previous = function(id,step) {};


/**
 * repaint the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui._any.refresh = function(id) {};


/**
 * removes element from datastore
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui._any.remove = function(id) {};


/**
 * renders a current state of an item or the whole component
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui._any.render = function(id,data,type) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * selects item
 * @id dhx.ui._any.select
 * @class dhx.ui._any
 * @method select
 * @memberOf dhx.ui._any
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui._any.select = function(id,non_modal,continue_old) {};


/**
 * selects all items
 * @id dhx.ui._any.selectAll
 * @class dhx.ui._any
 * @method selectAll
 * @memberOf dhx.ui._any
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui._any.selectAll = function(from,to) {};


/**
 * serializes data to a json object
 * @id dhx.ui._any.serialize
 * @class dhx.ui._any
 * @method serialize
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.serialize = function() {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * shows the specified item
 * @id dhx.ui._any.showItem
 * @class dhx.ui._any
 * @method showItem
 * @memberOf dhx.ui._any
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui._any.showItem = function(id) {};


/**
 * sorts datastore
 * @id dhx.ui._any.sort
 * @class dhx.ui._any
 * @method sort
 * @memberOf dhx.ui._any
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sort = function(by, dir, as) {};


/**
 * switches any item in edit state, back to normal
 * @id dhx.ui._any.stopEdit
 * @class dhx.ui._any
 * @method stopEdit
 * @memberOf dhx.ui._any
 * @param {String} mode stopEdit(mode, if_not_id)
 * @param {String} if_not_id Type: Method
 * @example 
 */
 dhx.ui._any.stopEdit = function(mode, if_not_id) {};


/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui._any.sync
 * @class dhx.ui._any
 * @method sync
 * @memberOf dhx.ui._any
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sync = function(source, filter, silent) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * unselects item
 * @id dhx.ui._any.unselect
 * @class dhx.ui._any
 * @method unselect
 * @memberOf dhx.ui._any
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui._any.unselect = function(id) {};


/**
 * unselects all items
 * @id dhx.ui._any.unselectAll
 * @class dhx.ui._any
 * @method unselectAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.unselectAll = function() {};


/**
 * sets properties of the data item
 * @id dhx.ui._any.update
 * @class dhx.ui._any
 * @method update
 * @memberOf dhx.ui._any
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.update = function(id,data) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.getList
 * @class dhx.ui._any
 * @method getList
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getList = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * clears values of all inputs ( resets them to the default values )
 * @id dhx.ui._any.clear
 * @class dhx.ui._any
 * @method clear
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", label: 'Clear form', click:"clear_form" }]
 * });
 * �
 * function clear_form(){
 * 	$$('myform').clear();
 * };
 */
 dhx.ui._any.clear = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * some unknown method
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * sets focus to an input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @param {String} name focus(name)
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('myform').focus("field_a");
 */
 dhx.ui._any.focus = function(name) {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * gets hash of data values
 * @id dhx.ui._any.getValues
 * @class dhx.ui._any
 * @method getValues
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'From', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'To', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", id:"button1", label: 'Show values', click:"get_form" }]
 * 	},
 * 	{ id:"log", template:function(obj){ return "<pre>"+JSON.stringify(obj).replace(/,/g,"\n,")+"</pre>"; }}]
 * });
 * �
 * function get_form(){
 * 	$$('log').parse($$('myform').getValues());
 * };
 */
 dhx.ui._any.getValues = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui._any.index
 * @class dhx.ui._any
 * @method index
 * @memberOf dhx.ui._any
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui._any.index = function(obj) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * rebuilds layout
 * @id dhx.ui._any.reconstruct
 * @class dhx.ui._any
 * @method reconstruct
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.reconstruct = function() {};


/**
 * repaints the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a current state of an item or the whole component
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.resizeChildren
 * @class dhx.ui._any
 * @method resizeChildren
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.resizeChildren = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * sets values for all inputs in the component
 * @id dhx.ui._any.setValues
 * @class dhx.ui._any
 * @method setValues
 * @memberOf dhx.ui._any
 * @param {String} data setValues(data)
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" }]
 * 	},
 * 	{ view:"button", label: 'Fill form', click:"set_form" }]
 * });
 * �
 * function set_form(){
 * 	$$('myform').setValues({
 * 			field_a: "London",
 * 			field_b: "New York",
 * 			field_c: "left"
 * 	});
 * };
 */
 dhx.ui._any.setValues = function(data) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui._any.showBatch
 * @class dhx.ui._any
 * @method showBatch
 * @memberOf dhx.ui._any
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui._any.showBatch = function(name) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * validates for the defined rules
 * @id dhx.ui._any.validate
 * @class dhx.ui._any
 * @method validate
 * @memberOf dhx.ui._any
 * @param {Object} obj validate(obj)
 * @example dhx.ui({
 * 	view:"form", 
 * 	id:"myform", 
 * 	elements:[
 * 		{ view:"text", inputWidth:300, label:"Name *", id:"name"},
 * 		{ view:"text", inputWidth:300, label:"Age *",  id:"age"},
 * 		{ view:"button", inputWidth:300, label:"Submit", click:"submit_form"}],
 * 	rules:{
 * 		name:dhx.rules.isNotEmpty,
 * 		age:dhx.rules.isNumber
 * 	}
 * });
 * �
 * submit_form = function(){
 * 	if ($$("myform").validate()==false)
 * 		{dhx.notice("Invalid value for some field");}
 * }
 */
 dhx.ui._any.validate = function(obj) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * renders map object
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * adds item to the store
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui._any.add = function(obj,index) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * removes all items from the component
 * @id dhx.ui._any.clearAll
 * @class dhx.ui._any
 * @method clearAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearAll = function() {};


/**
 * applies new type settings
 * @id dhx.ui._any.customize
 * @class dhx.ui._any
 * @method customize
 * @memberOf dhx.ui._any
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui._any.customize = function(obj) {};


/**
 * gets count of items
 * @id dhx.ui._any.dataCount
 * @class dhx.ui._any
 * @method dataCount
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dataCount = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * checks if the item with such ID exists
 * @id dhx.ui._any.exists
 * @class dhx.ui._any
 * @method exists
 * @memberOf dhx.ui._any
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui._any.exists = function(id) {};


/**
 * filters data
 * @id dhx.ui._any.filter
 * @class dhx.ui._any
 * @method filter
 * @memberOf dhx.ui._any
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui._any.filter = function(text,value,preserve) {};


/**
 * gets the ID of the first item
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns ID of selected item(s)
 * @id dhx.ui._any.getSelected
 * @class dhx.ui._any
 * @method getSelected
 * @memberOf dhx.ui._any
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui._any.getSelected = function(as_array) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * gets the id of an item with taken index
 * @id dhx.ui._any.idByIndex
 * @class dhx.ui._any
 * @method idByIndex
 * @memberOf dhx.ui._any
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui._any.idByIndex = function(index) {};


/**
 * the index of the item in question
 * @id dhx.ui._any.indexById
 * @class dhx.ui._any
 * @method indexById
 * @memberOf dhx.ui._any
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui._any.indexById = function(id) {};


/**
 * checks if item is selected or not
 * @id dhx.ui._any.isSelected
 * @class dhx.ui._any
 * @method isSelected
 * @memberOf dhx.ui._any
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui._any.isSelected = function(id) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * gets the object of a data item
 * @id dhx.ui._any.item
 * @class dhx.ui._any
 * @method item
 * @memberOf dhx.ui._any
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui._any.item = function(id) {};


/**
 * gets the id of the last item
 * @id dhx.ui._any.last
 * @class dhx.ui._any
 * @method last
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.last = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * some unknown method
 * @id dhx.ui._any.loadNext
 * @class dhx.ui._any
 * @method loadNext
 * @memberOf dhx.ui._any
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui._any.loadNext = function(count, start) {};


/**
 * 
 * @id dhx.ui._any.locate
 * @class dhx.ui._any
 * @method locate
 * @memberOf dhx.ui._any
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui._any.locate = function(e) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui._any.next
 * @class dhx.ui._any
 * @method next
 * @memberOf dhx.ui._any
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.next = function(id,step) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui._any.previous
 * @class dhx.ui._any
 * @method previous
 * @memberOf dhx.ui._any
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.previous = function(id,step) {};


/**
 * repaint the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui._any.refresh = function(id) {};


/**
 * removes element from datastore
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui._any.remove = function(id) {};


/**
 * renders a current state of an item or the whole component
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui._any.render = function(id,data,type) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * selects item
 * @id dhx.ui._any.select
 * @class dhx.ui._any
 * @method select
 * @memberOf dhx.ui._any
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui._any.select = function(id,non_modal,continue_old) {};


/**
 * selects all items
 * @id dhx.ui._any.selectAll
 * @class dhx.ui._any
 * @method selectAll
 * @memberOf dhx.ui._any
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui._any.selectAll = function(from,to) {};


/**
 * serializes data to a json object
 * @id dhx.ui._any.serialize
 * @class dhx.ui._any
 * @method serialize
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.serialize = function() {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * shows the specified item
 * @id dhx.ui._any.showItem
 * @class dhx.ui._any
 * @method showItem
 * @memberOf dhx.ui._any
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui._any.showItem = function(id) {};


/**
 * sorts datastore
 * @id dhx.ui._any.sort
 * @class dhx.ui._any
 * @method sort
 * @memberOf dhx.ui._any
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sort = function(by, dir, as) {};


/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui._any.sync
 * @class dhx.ui._any
 * @method sync
 * @memberOf dhx.ui._any
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sync = function(source, filter, silent) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * unselects item
 * @id dhx.ui._any.unselect
 * @class dhx.ui._any
 * @method unselect
 * @memberOf dhx.ui._any
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui._any.unselect = function(id) {};


/**
 * unselects all items
 * @id dhx.ui._any.unselectAll
 * @class dhx.ui._any
 * @method unselectAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.unselectAll = function() {};


/**
 * sets properties of the data item
 * @id dhx.ui._any.update
 * @class dhx.ui._any
 * @method update
 * @memberOf dhx.ui._any
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.update = function(id,data) {};


/**
 * adds a new item into a certain branch
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {Number} obj add(obj, index, parent)
 * @param {String} index Type: Method
 * @param {String} parent File:
 * @example 
 */
 dhx.ui._any.add = function(obj, index, parent) {};


/**
 * adds a new item into a certain branch
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {Number} obj add(obj, index, parent)
 * @param {String} index Type: Method
 * @param {String} parent File:
 * @example 
 */
 dhx.ui._any.add = function(obj, index, parent) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * gets position of the item in the parent branch
 * @id dhx.ui._any.branchIndex
 * @class dhx.ui._any
 * @method branchIndex
 * @memberOf dhx.ui._any
 * @param {String} parent branchIndex(parent, child)
 * @param {String} child Type: Method
 * @example 
 */
 dhx.ui._any.branchIndex = function(parent, child) {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * removes all data
 * @id dhx.ui._any.clearAll
 * @class dhx.ui._any
 * @method clearAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearAll = function() {};


/**
 * removes all data
 * @id dhx.ui._any.clearAll
 * @class dhx.ui._any
 * @method clearAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearAll = function() {};


/**
 * applies new type settings
 * @id dhx.ui._any.customize
 * @class dhx.ui._any
 * @method customize
 * @memberOf dhx.ui._any
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui._any.customize = function(obj) {};


/**
 * gets count of items
 * @id dhx.ui._any.dataCount
 * @class dhx.ui._any
 * @method dataCount
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dataCount = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * checks if the item with such ID exists
 * @id dhx.ui._any.exists
 * @class dhx.ui._any
 * @method exists
 * @memberOf dhx.ui._any
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui._any.exists = function(id) {};


/**
 * filters data
 * @id dhx.ui._any.filter
 * @class dhx.ui._any
 * @method filter
 * @memberOf dhx.ui._any
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui._any.filter = function(text,value,preserve) {};


/**
 * gets the ID of the first item
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * gets the id of the first child in a certain branch
 * @id dhx.ui._any.firstChild
 * @class dhx.ui._any
 * @method firstChild
 * @memberOf dhx.ui._any
 * @param {String} id firstChild(id)
 * @example 
 */
 dhx.ui._any.firstChild = function(id) {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns ID of selected item(s)
 * @id dhx.ui._any.getSelected
 * @class dhx.ui._any
 * @method getSelected
 * @memberOf dhx.ui._any
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui._any.getSelected = function(as_array) {};


/**
 * checks whether an item exists in a certain branch (at any level)
 * @id dhx.ui._any.hasChild
 * @class dhx.ui._any
 * @method hasChild
 * @memberOf dhx.ui._any
 * @param {String} parent hasChild(parent, child)
 * @param {String} child Type: Method
 * @example 
 */
 dhx.ui._any.hasChild = function(parent, child) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * gets the id of an item with taken index
 * @id dhx.ui._any.idByIndex
 * @class dhx.ui._any
 * @method idByIndex
 * @memberOf dhx.ui._any
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui._any.idByIndex = function(index) {};


/**
 * the index of the item in question
 * @id dhx.ui._any.indexById
 * @class dhx.ui._any
 * @method indexById
 * @memberOf dhx.ui._any
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui._any.indexById = function(id) {};


/**
 * checks if item is selected or not
 * @id dhx.ui._any.isSelected
 * @class dhx.ui._any
 * @method isSelected
 * @memberOf dhx.ui._any
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui._any.isSelected = function(id) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * gets the object of a data item
 * @id dhx.ui._any.item
 * @class dhx.ui._any
 * @method item
 * @memberOf dhx.ui._any
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui._any.item = function(id) {};


/**
 * gets the id of the last item
 * @id dhx.ui._any.last
 * @class dhx.ui._any
 * @method last
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.last = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * some unknown method
 * @id dhx.ui._any.loadNext
 * @class dhx.ui._any
 * @method loadNext
 * @memberOf dhx.ui._any
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui._any.loadNext = function(count, start) {};


/**
 * 
 * @id dhx.ui._any.locate
 * @class dhx.ui._any
 * @method locate
 * @memberOf dhx.ui._any
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui._any.locate = function(e) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui._any.next
 * @class dhx.ui._any
 * @method next
 * @memberOf dhx.ui._any
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.next = function(id,step) {};


/**
 * gets the id of the next item
 * @id dhx.ui._any.nextSibling
 * @class dhx.ui._any
 * @method nextSibling
 * @memberOf dhx.ui._any
 * @param {String} id nextSibling(id)
 * @example 
 */
 dhx.ui._any.nextSibling = function(id) {};


/**
 * gets the id of the parent branch
 * @id dhx.ui._any.parent
 * @class dhx.ui._any
 * @method parent
 * @memberOf dhx.ui._any
 * @param {String} id parent(id)
 * @example 
 */
 dhx.ui._any.parent = function(id) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * gets the id of the previous item
 * @id dhx.ui._any.prevSibling
 * @class dhx.ui._any
 * @method prevSibling
 * @memberOf dhx.ui._any
 * @param {String} id prevSibling(id)
 * @example 
 */
 dhx.ui._any.prevSibling = function(id) {};


/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui._any.previous
 * @class dhx.ui._any
 * @method previous
 * @memberOf dhx.ui._any
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.previous = function(id,step) {};


/**
 * repaint the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui._any.refresh = function(id) {};


/**
 * removes an item
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui._any.remove = function(id) {};


/**
 * removes an item
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui._any.remove = function(id) {};


/**
 * renders a current state of an item or the whole component
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui._any.render = function(id,data,type) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * selects item
 * @id dhx.ui._any.select
 * @class dhx.ui._any
 * @method select
 * @memberOf dhx.ui._any
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui._any.select = function(id,non_modal,continue_old) {};


/**
 * selects all items
 * @id dhx.ui._any.selectAll
 * @class dhx.ui._any
 * @method selectAll
 * @memberOf dhx.ui._any
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui._any.selectAll = function(from,to) {};


/**
 * serializes branch or the whole dataset to a json object
 * @id dhx.ui._any.serialize
 * @class dhx.ui._any
 * @method serialize
 * @memberOf dhx.ui._any
 * @param {String} id serialize(id)
 * @example 
 */
 dhx.ui._any.serialize = function(id) {};


/**
 * serializes branch or the whole dataset to a json object
 * @id dhx.ui._any.serialize
 * @class dhx.ui._any
 * @method serialize
 * @memberOf dhx.ui._any
 * @param {String} id serialize(id)
 * @example 
 */
 dhx.ui._any.serialize = function(id) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * shows the specified item
 * @id dhx.ui._any.showItem
 * @class dhx.ui._any
 * @method showItem
 * @memberOf dhx.ui._any
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui._any.showItem = function(id) {};


/**
 * sorts datastore
 * @id dhx.ui._any.sort
 * @class dhx.ui._any
 * @method sort
 * @memberOf dhx.ui._any
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sort = function(by, dir, as) {};


/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui._any.sync
 * @class dhx.ui._any
 * @method sync
 * @memberOf dhx.ui._any
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sync = function(source, filter, silent) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * unselects item
 * @id dhx.ui._any.unselect
 * @class dhx.ui._any
 * @method unselect
 * @memberOf dhx.ui._any
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui._any.unselect = function(id) {};


/**
 * unselects all items
 * @id dhx.ui._any.unselectAll
 * @class dhx.ui._any
 * @method unselectAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.unselectAll = function() {};


/**
 * sets properties of the data item
 * @id dhx.ui._any.update
 * @class dhx.ui._any
 * @method update
 * @memberOf dhx.ui._any
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.update = function(id,data) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * gets the window object of an iframe
 * @id dhx.ui._any.getWindow
 * @class dhx.ui._any
 * @method getWindow
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getWindow = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * loads the document you&#039;d like to show in an iframe
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} value load(value)
 * @example 
 */
 dhx.ui._any.load = function(value) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui._any.index
 * @class dhx.ui._any
 * @method index
 * @memberOf dhx.ui._any
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui._any.index = function(obj) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * rebuilds layout
 * @id dhx.ui._any.reconstruct
 * @class dhx.ui._any
 * @method reconstruct
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.reconstruct = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.resizeChildren
 * @class dhx.ui._any
 * @method resizeChildren
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.resizeChildren = function() {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui._any.showBatch
 * @class dhx.ui._any
 * @method showBatch
 * @memberOf dhx.ui._any
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui._any.showBatch = function(name) {};


/**
 * adds item to the store
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui._any.add = function(obj,index) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * removes all items from the component
 * @id dhx.ui._any.clearAll
 * @class dhx.ui._any
 * @method clearAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearAll = function() {};


/**
 * applies new type settings
 * @id dhx.ui._any.customize
 * @class dhx.ui._any
 * @method customize
 * @memberOf dhx.ui._any
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui._any.customize = function(obj) {};


/**
 * gets count of items
 * @id dhx.ui._any.dataCount
 * @class dhx.ui._any
 * @method dataCount
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dataCount = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * checks if the item with such ID exists
 * @id dhx.ui._any.exists
 * @class dhx.ui._any
 * @method exists
 * @memberOf dhx.ui._any
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui._any.exists = function(id) {};


/**
 * filters data
 * @id dhx.ui._any.filter
 * @class dhx.ui._any
 * @method filter
 * @memberOf dhx.ui._any
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui._any.filter = function(text,value,preserve) {};


/**
 * gets the ID of the first item
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns ID of selected item(s)
 * @id dhx.ui._any.getSelected
 * @class dhx.ui._any
 * @method getSelected
 * @memberOf dhx.ui._any
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui._any.getSelected = function(as_array) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * gets the id of an item with taken index
 * @id dhx.ui._any.idByIndex
 * @class dhx.ui._any
 * @method idByIndex
 * @memberOf dhx.ui._any
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui._any.idByIndex = function(index) {};


/**
 * the index of the item in question
 * @id dhx.ui._any.indexById
 * @class dhx.ui._any
 * @method indexById
 * @memberOf dhx.ui._any
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui._any.indexById = function(id) {};


/**
 * checks if item is selected or not
 * @id dhx.ui._any.isSelected
 * @class dhx.ui._any
 * @method isSelected
 * @memberOf dhx.ui._any
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui._any.isSelected = function(id) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * gets the object of a data item
 * @id dhx.ui._any.item
 * @class dhx.ui._any
 * @method item
 * @memberOf dhx.ui._any
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui._any.item = function(id) {};


/**
 * gets the id of the last item
 * @id dhx.ui._any.last
 * @class dhx.ui._any
 * @method last
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.last = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * some unknown method
 * @id dhx.ui._any.loadNext
 * @class dhx.ui._any
 * @method loadNext
 * @memberOf dhx.ui._any
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui._any.loadNext = function(count, start) {};


/**
 * 
 * @id dhx.ui._any.locate
 * @class dhx.ui._any
 * @method locate
 * @memberOf dhx.ui._any
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui._any.locate = function(e) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui._any.next
 * @class dhx.ui._any
 * @method next
 * @memberOf dhx.ui._any
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.next = function(id,step) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui._any.previous
 * @class dhx.ui._any
 * @method previous
 * @memberOf dhx.ui._any
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.previous = function(id,step) {};


/**
 * repaint the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui._any.refresh = function(id) {};


/**
 * removes element from datastore
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui._any.remove = function(id) {};


/**
 * renders a current state of an item or the whole component
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui._any.render = function(id,data,type) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * selects item
 * @id dhx.ui._any.select
 * @class dhx.ui._any
 * @method select
 * @memberOf dhx.ui._any
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui._any.select = function(id,non_modal,continue_old) {};


/**
 * selects all items
 * @id dhx.ui._any.selectAll
 * @class dhx.ui._any
 * @method selectAll
 * @memberOf dhx.ui._any
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui._any.selectAll = function(from,to) {};


/**
 * serializes data to a json object
 * @id dhx.ui._any.serialize
 * @class dhx.ui._any
 * @method serialize
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.serialize = function() {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * shows the specified item
 * @id dhx.ui._any.showItem
 * @class dhx.ui._any
 * @method showItem
 * @memberOf dhx.ui._any
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui._any.showItem = function(id) {};


/**
 * sorts datastore
 * @id dhx.ui._any.sort
 * @class dhx.ui._any
 * @method sort
 * @memberOf dhx.ui._any
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sort = function(by, dir, as) {};


/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui._any.sync
 * @class dhx.ui._any
 * @method sync
 * @memberOf dhx.ui._any
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sync = function(source, filter, silent) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * unselects item
 * @id dhx.ui._any.unselect
 * @class dhx.ui._any
 * @method unselect
 * @memberOf dhx.ui._any
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui._any.unselect = function(id) {};


/**
 * unselects all items
 * @id dhx.ui._any.unselectAll
 * @class dhx.ui._any
 * @method unselectAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.unselectAll = function() {};


/**
 * sets properties of the data item
 * @id dhx.ui._any.update
 * @class dhx.ui._any
 * @method update
 * @memberOf dhx.ui._any
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.update = function(id,data) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * switches multiview to previously active view
 * @id dhx.ui._any.back
 * @class dhx.ui._any
 * @method back
 * @memberOf dhx.ui._any
 * @param {String} step back(step)
 * @example 
 */
 dhx.ui._any.back = function(step) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * some unknown method
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * returns id of currently visible sub-view
 * @id dhx.ui._any.getActive
 * @class dhx.ui._any
 * @method getActive
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getActive = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui._any.index
 * @class dhx.ui._any
 * @method index
 * @memberOf dhx.ui._any
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui._any.index = function(obj) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * rebuilds layout
 * @id dhx.ui._any.reconstruct
 * @class dhx.ui._any
 * @method reconstruct
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.reconstruct = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.resizeChildren
 * @class dhx.ui._any
 * @method resizeChildren
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.resizeChildren = function() {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui._any.showBatch
 * @class dhx.ui._any
 * @method showBatch
 * @memberOf dhx.ui._any
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui._any.showBatch = function(name) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * adds item to the store
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui._any.add = function(obj,index) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * removes all items from the component
 * @id dhx.ui._any.clearAll
 * @class dhx.ui._any
 * @method clearAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearAll = function() {};


/**
 * applies new type settings
 * @id dhx.ui._any.customize
 * @class dhx.ui._any
 * @method customize
 * @memberOf dhx.ui._any
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui._any.customize = function(obj) {};


/**
 * gets count of items
 * @id dhx.ui._any.dataCount
 * @class dhx.ui._any
 * @method dataCount
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dataCount = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * checks if the item with such ID exists
 * @id dhx.ui._any.exists
 * @class dhx.ui._any
 * @method exists
 * @memberOf dhx.ui._any
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui._any.exists = function(id) {};


/**
 * filters data
 * @id dhx.ui._any.filter
 * @class dhx.ui._any
 * @method filter
 * @memberOf dhx.ui._any
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui._any.filter = function(text,value,preserve) {};


/**
 * gets the ID of the first item
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * returns id of currently visible sub-view
 * @id dhx.ui._any.getActive
 * @class dhx.ui._any
 * @method getActive
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getActive = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns ID of selected item(s)
 * @id dhx.ui._any.getSelected
 * @class dhx.ui._any
 * @method getSelected
 * @memberOf dhx.ui._any
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui._any.getSelected = function(as_array) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * gets the id of an item with taken index
 * @id dhx.ui._any.idByIndex
 * @class dhx.ui._any
 * @method idByIndex
 * @memberOf dhx.ui._any
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui._any.idByIndex = function(index) {};


/**
 * the index of the item in question
 * @id dhx.ui._any.indexById
 * @class dhx.ui._any
 * @method indexById
 * @memberOf dhx.ui._any
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui._any.indexById = function(id) {};


/**
 * checks if item is selected or not
 * @id dhx.ui._any.isSelected
 * @class dhx.ui._any
 * @method isSelected
 * @memberOf dhx.ui._any
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui._any.isSelected = function(id) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * gets the object of a data item
 * @id dhx.ui._any.item
 * @class dhx.ui._any
 * @method item
 * @memberOf dhx.ui._any
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui._any.item = function(id) {};


/**
 * gets the id of the last item
 * @id dhx.ui._any.last
 * @class dhx.ui._any
 * @method last
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.last = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * some unknown method
 * @id dhx.ui._any.loadNext
 * @class dhx.ui._any
 * @method loadNext
 * @memberOf dhx.ui._any
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui._any.loadNext = function(count, start) {};


/**
 * 
 * @id dhx.ui._any.locate
 * @class dhx.ui._any
 * @method locate
 * @memberOf dhx.ui._any
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui._any.locate = function(e) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui._any.next
 * @class dhx.ui._any
 * @method next
 * @memberOf dhx.ui._any
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.next = function(id,step) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui._any.previous
 * @class dhx.ui._any
 * @method previous
 * @memberOf dhx.ui._any
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.previous = function(id,step) {};


/**
 * repaint the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui._any.refresh = function(id) {};


/**
 * removes element from datastore
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui._any.remove = function(id) {};


/**
 * renders a current state of an item or the whole component
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui._any.render = function(id,data,type) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * selects item
 * @id dhx.ui._any.select
 * @class dhx.ui._any
 * @method select
 * @memberOf dhx.ui._any
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui._any.select = function(id,non_modal,continue_old) {};


/**
 * selects all items
 * @id dhx.ui._any.selectAll
 * @class dhx.ui._any
 * @method selectAll
 * @memberOf dhx.ui._any
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui._any.selectAll = function(from,to) {};


/**
 * serializes data to a json object
 * @id dhx.ui._any.serialize
 * @class dhx.ui._any
 * @method serialize
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.serialize = function() {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * shows the specified item
 * @id dhx.ui._any.showItem
 * @class dhx.ui._any
 * @method showItem
 * @memberOf dhx.ui._any
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui._any.showItem = function(id) {};


/**
 * sorts datastore
 * @id dhx.ui._any.sort
 * @class dhx.ui._any
 * @method sort
 * @memberOf dhx.ui._any
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sort = function(by, dir, as) {};


/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui._any.sync
 * @class dhx.ui._any
 * @method sync
 * @memberOf dhx.ui._any
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sync = function(source, filter, silent) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * unselects item
 * @id dhx.ui._any.unselect
 * @class dhx.ui._any
 * @method unselect
 * @memberOf dhx.ui._any
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui._any.unselect = function(id) {};


/**
 * unselects all items
 * @id dhx.ui._any.unselectAll
 * @class dhx.ui._any
 * @method unselectAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.unselectAll = function() {};


/**
 * sets properties of the data item
 * @id dhx.ui._any.update
 * @class dhx.ui._any
 * @method update
 * @memberOf dhx.ui._any
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.update = function(id,data) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * removes a window
 * @id dhx.ui._any.close
 * @class dhx.ui._any
 * @method close
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.close = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * gets the ui view of the window body
 * @id dhx.ui._any.getBody
 * @class dhx.ui._any
 * @method getBody
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getBody = function() {};


/**
 * gets the ui view of the window header
 * @id dhx.ui._any.getHead
 * @class dhx.ui._any
 * @method getHead
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getHead = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets window&#039;s position
 * @id dhx.ui._any.setPosition
 * @class dhx.ui._any
 * @method setPosition
 * @memberOf dhx.ui._any
 * @param {String} x setPosition(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.setPosition = function(x,y) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.getList
 * @class dhx.ui._any
 * @method getList
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getList = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.setSliderTitle
 * @class dhx.ui._any
 * @method setSliderTitle
 * @memberOf dhx.ui._any
 * @param {String} title setSliderTitle(title)
 * @example 
 */
 dhx.ui._any.setSliderTitle = function(title) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * repaints the whole view or a certain a item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * sets data hash
 * @id dhx.ui._any.setValues
 * @class dhx.ui._any
 * @method setValues
 * @memberOf dhx.ui._any
 * @param {Object} obj setValues(obj)
 * @example 
 */
 dhx.ui._any.setValues = function(obj) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * moves focus to the input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui._any.focus = function() {};


/**
 * returns input html object
 * @id dhx.ui._any.getInput
 * @class dhx.ui._any
 * @method getInput
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getInput = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * returns current value
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints input
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets a new value for the button
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * clears values of all inputs ( resets them to the default values )
 * @id dhx.ui._any.clear
 * @class dhx.ui._any
 * @method clear
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", label: 'Clear form', click:"clear_form" }]
 * });
 * �
 * function clear_form(){
 * 	$$('myform').clear();
 * };
 */
 dhx.ui._any.clear = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * some unknown method
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * sets focus to an input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @param {String} name focus(name)
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('myform').focus("field_a");
 */
 dhx.ui._any.focus = function(name) {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * gets hash of data values
 * @id dhx.ui._any.getValues
 * @class dhx.ui._any
 * @method getValues
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'From', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'To', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", id:"button1", label: 'Show values', click:"get_form" }]
 * 	},
 * 	{ id:"log", template:function(obj){ return "<pre>"+JSON.stringify(obj).replace(/,/g,"\n,")+"</pre>"; }}]
 * });
 * �
 * function get_form(){
 * 	$$('log').parse($$('myform').getValues());
 * };
 */
 dhx.ui._any.getValues = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui._any.index
 * @class dhx.ui._any
 * @method index
 * @memberOf dhx.ui._any
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui._any.index = function(obj) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * rebuilds layout
 * @id dhx.ui._any.reconstruct
 * @class dhx.ui._any
 * @method reconstruct
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.reconstruct = function() {};


/**
 * repaints the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a current state of an item or the whole component
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.resizeChildren
 * @class dhx.ui._any
 * @method resizeChildren
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.resizeChildren = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * sets values for all inputs in the component
 * @id dhx.ui._any.setValues
 * @class dhx.ui._any
 * @method setValues
 * @memberOf dhx.ui._any
 * @param {String} data setValues(data)
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" }]
 * 	},
 * 	{ view:"button", label: 'Fill form', click:"set_form" }]
 * });
 * �
 * function set_form(){
 * 	$$('myform').setValues({
 * 			field_a: "London",
 * 			field_b: "New York",
 * 			field_c: "left"
 * 	});
 * };
 */
 dhx.ui._any.setValues = function(data) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui._any.showBatch
 * @class dhx.ui._any
 * @method showBatch
 * @memberOf dhx.ui._any
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui._any.showBatch = function(name) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * validates for the defined rules
 * @id dhx.ui._any.validate
 * @class dhx.ui._any
 * @method validate
 * @memberOf dhx.ui._any
 * @param {Object} obj validate(obj)
 * @example dhx.ui({
 * 	view:"form", 
 * 	id:"myform", 
 * 	elements:[
 * 		{ view:"text", inputWidth:300, label:"Name *", id:"name"},
 * 		{ view:"text", inputWidth:300, label:"Age *",  id:"age"},
 * 		{ view:"button", inputWidth:300, label:"Submit", click:"submit_form"}],
 * 	rules:{
 * 		name:dhx.rules.isNotEmpty,
 * 		age:dhx.rules.isNumber
 * 	}
 * });
 * �
 * submit_form = function(){
 * 	if ($$("myform").validate()==false)
 * 		{dhx.notice("Invalid value for some field");}
 * }
 */
 dhx.ui._any.validate = function(obj) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * gets the video object
 * @id dhx.ui._any.getVideo
 * @class dhx.ui._any
 * @method getVideo
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getVideo = function() {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * removes a window
 * @id dhx.ui._any.close
 * @class dhx.ui._any
 * @method close
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.close = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * gets the ui view of the window body
 * @id dhx.ui._any.getBody
 * @class dhx.ui._any
 * @method getBody
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getBody = function() {};


/**
 * gets the ui view of the window header
 * @id dhx.ui._any.getHead
 * @class dhx.ui._any
 * @method getHead
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getHead = function() {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * sets window&#039;s position
 * @id dhx.ui._any.setPosition
 * @class dhx.ui._any
 * @method setPosition
 * @memberOf dhx.ui._any
 * @param {String} x setPosition(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.setPosition = function(x,y) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * adds one more bound target
 * @id dhx.ui._any.addBind
 * @class dhx.ui._any
 * @method addBind
 * @memberOf dhx.ui._any
 * @param {String} source addBind(source, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example 
 */
 dhx.ui._any.addBind = function(source, rule, format) {};


/**
 * fills target object with data
 * @id dhx.ui._any.getBindData
 * @class dhx.ui._any
 * @method getBindData
 * @memberOf dhx.ui._any
 * @param {String} key getBindData(key, update)
 * @param {String} update Type: Method
 * @example 
 */
 dhx.ui._any.getBindData = function(key, update) {};


/**
 * makes simultaneous saving several components
 * @id dhx.ui._any.saveBatch
 * @class dhx.ui._any
 * @method saveBatch
 * @memberOf dhx.ui._any
 * @param {String} code saveBatch(code)
 * @example $$('myform1').bind('myStore');
 * $$('myform2').bind('myStore');
 * �
 * $$('myStore').saveBatch(function(){
 *         $$('myform1').save();
 *         $$('myform2').save();
 * });
 */
 dhx.ui._any.saveBatch = function(code) {};


/**
 * 
 * @id dhx.ui._any.setBindData
 * @class dhx.ui._any
 * @method setBindData
 * @memberOf dhx.ui._any
 * @param {String} data setBindData(data, key)
 * @param {String} key Type: Method
 * @example 
 */
 dhx.ui._any.setBindData = function(data, key) {};


/**
 * clears canvas
 * @id dhx.ui._any.clearCanvas
 * @class dhx.ui._any
 * @method clearCanvas
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearCanvas = function() {};


/**
 * gets canvas
 * @id dhx.ui._any.getCanvas
 * @class dhx.ui._any
 * @method getCanvas
 * @memberOf dhx.ui._any
 * @param {String} context getCanvas(context)
 * @example 
 */
 dhx.ui._any.getCanvas = function(context) {};


/**
 * creates absolutely positioned container
 * @id dhx.ui._any.renderText
 * @class dhx.ui._any
 * @method renderText
 * @memberOf dhx.ui._any
 * @param {String} x renderText(x,y,text,css,w)
 * @param {String} y Type: Method
 * @param {String} text File:
 * @param {String} css Implemented in: Canvas
 * @param {String} w Included in: chart
 * @example 
 */
 dhx.ui._any.renderText = function(x,y,text,css,w) {};


/**
 * creates absolutely positioned container and then align it according to the 1st and 2nd parameters
 * @id dhx.ui._any.renderTextAt
 * @class dhx.ui._any
 * @method renderTextAt
 * @memberOf dhx.ui._any
 * @param {String} valign renderTextAt(valign,align, x,y,t,c,w)
 * @param {String} align Type: Method
 * @param {String} x File:
 * @param {String} y Implemented in: Canvas
 * @param {String} t Included in: chart
 * @param {String} [c] valign - vertical align (optional)
 * @param {String} [w] align - horizontal align (optional)
 * @example 
 */
 dhx.ui._any.renderTextAt = function(valign,align, x,y,t,c,w) {};


/**
 * some unknown method
 * @id dhx.ui._any.dhxArrowLeft
 * @class dhx.ui._any
 * @method dhxArrowLeft
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dhxArrowLeft = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.dhxArrowLeftT
 * @class dhx.ui._any
 * @method dhxArrowLeftT
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dhxArrowLeftT = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.dhxArrowRight
 * @class dhx.ui._any
 * @method dhxArrowRight
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dhxArrowRight = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.dhxArrowRightT
 * @class dhx.ui._any
 * @method dhxArrowRightT
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dhxArrowRightT = function() {};


/**
 * gets cursor
 * @id dhx.ui._any.getCursor
 * @class dhx.ui._any
 * @method getCursor
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getCursor = function() {};


/**
 * sets cursor to an item
 * @id dhx.ui._any.setCursor
 * @class dhx.ui._any
 * @method setCursor
 * @memberOf dhx.ui._any
 * @param {String} id setCursor(id)
 * @example 
 */
 dhx.ui._any.setCursor = function(id) {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.isVisible = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * some unknown method
 * @id dhx.ui._any.loadNext
 * @class dhx.ui._any
 * @method loadNext
 * @memberOf dhx.ui._any
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui._any.loadNext = function(count, start) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * repaints the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * some unknown method
 * @id dhx.ui._any.loadNext
 * @class dhx.ui._any
 * @method loadNext
 * @memberOf dhx.ui._any
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui._any.loadNext = function(count, start) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * copies an item to the same or another object
 * @id dhx.ui._any.copy
 * @class dhx.ui._any
 * @method copy
 * @memberOf dhx.ui._any
 * @param {Number} sid copy(sid,tindex,tobj,tid)
 * @param {String} tindex Type: Method
 * @param {Object} tobj File: core/move.js
 * @param {String} tid Implemented in: DataMove
 * @example 
 */
 dhx.ui._any.copy = function(sid,tindex,tobj,tid) {};


/**
 * makes data copy
 * @id dhx.ui._any.externalData
 * @class dhx.ui._any
 * @method externalData
 * @memberOf dhx.ui._any
 * @param {String} data externalData(data,id)
 * @param {String} id Type: Method
 * @example 
 */
 dhx.ui._any.externalData = function(data,id) {};


/**
 * moves an item to the new position
 * @id dhx.ui._any.move
 * @class dhx.ui._any
 * @method move
 * @memberOf dhx.ui._any
 * @param {Number} sid move(sid,tindex,tobj,tid)
 * @param {String} tindex Type: Method
 * @param {Object} tobj File: core/move.js
 * @param {String} tid Implemented in: DataMove
 * @example 
 */
 dhx.ui._any.move = function(sid,tindex,tobj,tid) {};


/**
 * moves an item to the last position
 * @id dhx.ui._any.moveBottom
 * @class dhx.ui._any
 * @method moveBottom
 * @memberOf dhx.ui._any
 * @param {String} id moveBottom(id)
 * @example 
 */
 dhx.ui._any.moveBottom = function(id) {};


/**
 * increases item index
 * @id dhx.ui._any.moveDown
 * @class dhx.ui._any
 * @method moveDown
 * @memberOf dhx.ui._any
 * @param {String} id moveDown(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.moveDown = function(id,step) {};


/**
 * moves an item to the first position
 * @id dhx.ui._any.moveTop
 * @class dhx.ui._any
 * @method moveTop
 * @memberOf dhx.ui._any
 * @param {String} id moveTop(id)
 * @example 
 */
 dhx.ui._any.moveTop = function(id) {};


/**
 * decreases item index
 * @id dhx.ui._any.moveUp
 * @class dhx.ui._any
 * @method moveUp
 * @memberOf dhx.ui._any
 * @param {String} id moveUp(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.moveUp = function(id,step) {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * sets requests encoding
 * @id dhx.ui._any.escape
 * @class dhx.ui._any
 * @method escape
 * @memberOf dhx.ui._any
 * @param {String} value escape(value)
 * @example 
 */
 dhx.ui._any.escape = function(value) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * the code that you pass here as the parameter will not react on any data changes (will not be affected by &#039;onStoreUpdated&#039; event handler)
 * @id dhx.ui._any.ignore
 * @class dhx.ui._any
 * @method ignore
 * @memberOf dhx.ui._any
 * @param {String} code ignore(code,master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.ui._any.ignore = function(code,master) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * disables dataProcessor
 * @id dhx.ui._any.off
 * @class dhx.ui._any
 * @method off
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.off = function() {};


/**
 * enables dataProcessor
 * @id dhx.ui._any.on
 * @class dhx.ui._any
 * @method on
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.on = function() {};


/**
 * allows to save data changes
 * @id dhx.ui._any.save
 * @class dhx.ui._any
 * @method save
 * @memberOf dhx.ui._any
 * @param {String} id save(id, operation)
 * @param {String} operation Type: Method
 * @example 
 */
 dhx.ui._any.save = function(id, operation) {};


/**
 * sends a request to server. Allows to save data changes on server.
 * @id dhx.ui._any.send
 * @class dhx.ui._any
 * @method send
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.send = function() {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * validates for the defined rules
 * @id dhx.ui._any.validate
 * @class dhx.ui._any
 * @method validate
 * @memberOf dhx.ui._any
 * @param {Object} obj validate(obj)
 * @example dhx.ui({
 * 	view:"form", 
 * 	id:"myform", 
 * 	elements:[
 * 		{ view:"text", inputWidth:300, label:"Name *", id:"name"},
 * 		{ view:"text", inputWidth:300, label:"Age *",  id:"age"},
 * 		{ view:"button", inputWidth:300, label:"Submit", click:"submit_form"}],
 * 	rules:{
 * 		name:dhx.rules.isNotEmpty,
 * 		age:dhx.rules.isNumber
 * 	}
 * });
 * �
 * submit_form = function(){
 * 	if ($$("myform").validate()==false)
 * 		{dhx.notice("Invalid value for some field");}
 * }
 */
 dhx.ui._any.validate = function(obj) {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * gets hash of data values
 * @id dhx.ui._any.getValues
 * @class dhx.ui._any
 * @method getValues
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValues = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.isVisible = function() {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * repaints view
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * sets values for all inputs in the component
 * @id dhx.ui._any.setValues
 * @class dhx.ui._any
 * @method setValues
 * @memberOf dhx.ui._any
 * @param {String} data setValues(data)
 * @example 
 */
 dhx.ui._any.setValues = function(data) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * adds item to the store
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui._any.add = function(obj,index) {};


/**
 * changes id of the data item
 * @id dhx.ui._any.changeId
 * @class dhx.ui._any
 * @method changeId
 * @memberOf dhx.ui._any
 * @param {String} old changeId(old, newid)
 * @param {String} newid Type: Method
 * @example 
 */
 dhx.ui._any.changeId = function(old, newid) {};


/**
 * removes all items from the component
 * @id dhx.ui._any.clearAll
 * @class dhx.ui._any
 * @method clearAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearAll = function() {};


/**
 * gets count of items
 * @id dhx.ui._any.dataCount
 * @class dhx.ui._any
 * @method dataCount
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.dataCount = function() {};


/**
 * iterates through collection
 * @id dhx.ui._any.each
 * @class dhx.ui._any
 * @method each
 * @memberOf dhx.ui._any
 * @param {String} method each(method,master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.ui._any.each = function(method,master) {};


/**
 * checks if the item with such ID exists
 * @id dhx.ui._any.exists
 * @class dhx.ui._any
 * @method exists
 * @memberOf dhx.ui._any
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui._any.exists = function(id) {};


/**
 * filters data
 * @id dhx.ui._any.filter
 * @class dhx.ui._any
 * @method filter
 * @memberOf dhx.ui._any
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui._any.filter = function(text,value,preserve) {};


/**
 * gets the ID of the first item
 * @id dhx.ui._any.first
 * @class dhx.ui._any
 * @method first
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.first = function() {};


/**
 * converts the range of indexes to array of all IDs between them
 * @id dhx.ui._any.getIndexRange
 * @class dhx.ui._any
 * @method getIndexRange
 * @memberOf dhx.ui._any
 * @param {String} from getIndexRange(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui._any.getIndexRange = function(from,to) {};


/**
 * converts range IDs to array of all IDs between them
 * @id dhx.ui._any.getRange
 * @class dhx.ui._any
 * @method getRange
 * @memberOf dhx.ui._any
 * @param {String} from getRange(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui._any.getRange = function(from,to) {};


/**
 * gets id of data object
 * @id dhx.ui._any.id
 * @class dhx.ui._any
 * @method id
 * @memberOf dhx.ui._any
 * @param {String} data id(data)
 * @example 
 */
 dhx.ui._any.id = function(data) {};


/**
 * gets the id of an item with taken index
 * @id dhx.ui._any.idByIndex
 * @class dhx.ui._any
 * @method idByIndex
 * @memberOf dhx.ui._any
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui._any.idByIndex = function(index) {};


/**
 * the index of the item in question
 * @id dhx.ui._any.indexById
 * @class dhx.ui._any
 * @method indexById
 * @memberOf dhx.ui._any
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui._any.indexById = function(id) {};


/**
 * gets the object of a data item
 * @id dhx.ui._any.item
 * @class dhx.ui._any
 * @method item
 * @memberOf dhx.ui._any
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui._any.item = function(id) {};


/**
 * gets the id of the last item
 * @id dhx.ui._any.last
 * @class dhx.ui._any
 * @method last
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.last = function() {};


/**
 * moves an item from one position to another
 * @id dhx.ui._any.move
 * @class dhx.ui._any
 * @method move
 * @memberOf dhx.ui._any
 * @param {Number} sindex move(sindex,tindex)
 * @param {String} tindex Type: Method
 * @example 
 */
 dhx.ui._any.move = function(sindex,tindex) {};


/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui._any.next
 * @class dhx.ui._any
 * @method next
 * @memberOf dhx.ui._any
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.next = function(id,step) {};


/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui._any.previous
 * @class dhx.ui._any
 * @method previous
 * @memberOf dhx.ui._any
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui._any.previous = function(id,step) {};


/**
 * assigns methods (and events) of DataStore to an object
 * @id dhx.ui._any.provideApi
 * @class dhx.ui._any
 * @method provideApi
 * @memberOf dhx.ui._any
 * @param {String} target provideApi(target,eventable)
 * @param {String} eventable Type: Method
 * @example 
 */
 dhx.ui._any.provideApi = function(target,eventable) {};


/**
 * repaint the whole view or a certain item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui._any.refresh = function(id) {};


/**
 * removes element from datastore
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui._any.remove = function(id) {};


/**
 * sets hash of default values for properties
 * @id dhx.ui._any.scheme
 * @class dhx.ui._any
 * @method scheme
 * @memberOf dhx.ui._any
 * @param {String} config scheme(config)
 * @example $$('list').data.scheme({
 * 		name:"unknown", 
 * 		sex:"male",
 * 		age:"30"
 * });
 * �
 * $$('list').add({
 * 		id:1,
 * 		name:"Alex"
 * })
 * //will add a record:
 * //name:Alex,
 * //sex:male,
 * //age:30
 */
 dhx.ui._any.scheme = function(config) {};


/**
 * serializes data to a json object
 * @id dhx.ui._any.serialize
 * @class dhx.ui._any
 * @method serialize
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.serialize = function() {};


/**
 * defines type of used data driver
 * @id dhx.ui._any.setDriver
 * @class dhx.ui._any
 * @method setDriver
 * @memberOf dhx.ui._any
 * @param {String} type setDriver(type)
 * @example 
 */
 dhx.ui._any.setDriver = function(type) {};


/**
 * code that you pass here as the parameter will not be affected by &#039;onStoreUpdated&#039; event handler
 * @id dhx.ui._any.silent
 * @class dhx.ui._any
 * @method silent
 * @memberOf dhx.ui._any
 * @param {String} code silent(code, master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.ui._any.silent = function(code, master) {};


/**
 * sorts datastore
 * @id dhx.ui._any.sort
 * @class dhx.ui._any
 * @method sort
 * @memberOf dhx.ui._any
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sort = function(by, dir, as) {};


/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui._any.sync
 * @class dhx.ui._any
 * @method sync
 * @memberOf dhx.ui._any
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui._any.sync = function(source, filter, silent) {};


/**
 * sets properties of the data item
 * @id dhx.ui._any.update
 * @class dhx.ui._any
 * @method update
 * @memberOf dhx.ui._any
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.update = function(id,data) {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * returns current value of control
 * @id dhx.ui._any.getValue
 * @class dhx.ui._any
 * @method getValue
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getValue = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.isVisible = function() {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * repaints a control
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * sets a new value of control
 * @id dhx.ui._any.setValue
 * @class dhx.ui._any
 * @method setValue
 * @memberOf dhx.ui._any
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui._any.setValue = function(value) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * adds the number of date units to date
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {String} date add(date,inc,mode)
 * @param {String} inc Type: Method
 * @param {String} mode File: core/date.js
 * @example 
 */
 dhx.ui._any.add = function(date,inc,mode) {};


/**
 * creates date copy
 * @id dhx.ui._any.copy
 * @class dhx.ui._any
 * @method copy
 * @memberOf dhx.ui._any
 * @param {String} date copy(date)
 * @example 
 */
 dhx.ui._any.copy = function(date) {};


/**
 * gets the date part of date object
 * @id dhx.ui._any.datePart
 * @class dhx.ui._any
 * @method datePart
 * @memberOf dhx.ui._any
 * @param {String} date datePart(date)
 * @example 
 */
 dhx.ui._any.datePart = function(date) {};


/**
 * converts date object to a string in a certain format
 * @id dhx.ui._any.dateToStr
 * @class dhx.ui._any
 * @method dateToStr
 * @memberOf dhx.ui._any
 * @param {String} format dateToStr(format,utc)
 * @param {String} utc Type: Method
 * @example 
 */
 dhx.ui._any.dateToStr = function(format,utc) {};


/**
 * gets day start
 * @id dhx.ui._any.dayStart
 * @class dhx.ui._any
 * @method dayStart
 * @memberOf dhx.ui._any
 * @param {String} date dayStart(date)
 * @example 
 */
 dhx.ui._any.dayStart = function(date) {};


/**
 * 
 * @id dhx.ui._any.getISOWeek
 * @class dhx.ui._any
 * @method getISOWeek
 * @memberOf dhx.ui._any
 * @param {String} ndate getISOWeek(ndate)
 * @example 
 */
 dhx.ui._any.getISOWeek = function(ndate) {};


/**
 * 
 * @id dhx.ui._any.getUTCISOWeek
 * @class dhx.ui._any
 * @method getUTCISOWeek
 * @memberOf dhx.ui._any
 * @param {String} ndate getUTCISOWeek(ndate)
 * @example 
 */
 dhx.ui._any.getUTCISOWeek = function(ndate) {};


/**
 * gets the start of the month
 * @id dhx.ui._any.monthStart
 * @class dhx.ui._any
 * @method monthStart
 * @memberOf dhx.ui._any
 * @param {String} date monthStart(date)
 * @example 
 */
 dhx.ui._any.monthStart = function(date) {};


/**
 * convert string to date object
 * @id dhx.ui._any.strToDate
 * @class dhx.ui._any
 * @method strToDate
 * @memberOf dhx.ui._any
 * @param {String} format strToDate(format,utc)
 * @param {String} utc Type: Method
 * @example 
 */
 dhx.ui._any.strToDate = function(format,utc) {};


/**
 * gets time part of a date in seconds
 * @id dhx.ui._any.timePart
 * @class dhx.ui._any
 * @method timePart
 * @memberOf dhx.ui._any
 * @param {String} date timePart(date)
 * @example 
 */
 dhx.ui._any.timePart = function(date) {};


/**
 * gets the week start
 * @id dhx.ui._any.weekStart
 * @class dhx.ui._any
 * @method weekStart
 * @memberOf dhx.ui._any
 * @param {String} date weekStart(date)
 * @example 
 */
 dhx.ui._any.weekStart = function(date) {};


/**
 * gets the year start
 * @id dhx.ui._any.yearStart
 * @class dhx.ui._any
 * @method yearStart
 * @memberOf dhx.ui._any
 * @param {String} date yearStart(date)
 * @example 
 */
 dhx.ui._any.yearStart = function(date) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * registers drag area
 * @id dhx.ui._any.addDrag
 * @class dhx.ui._any
 * @method addDrag
 * @memberOf dhx.ui._any
 * @param {String} node addDrag(node,ctrl)
 * @param {String} ctrl Type: Method
 * @example 
 */
 dhx.ui._any.addDrag = function(node,ctrl) {};


/**
 * registers drop area
 * @id dhx.ui._any.addDrop
 * @class dhx.ui._any
 * @method addDrop
 * @memberOf dhx.ui._any
 * @param {String} node addDrop(node,ctrl,master_mode)
 * @param {String} ctrl Type: Method
 * @param {String} master_mode File: core/dnd.js
 * @example 
 */
 dhx.ui._any.addDrop = function(node,ctrl,master_mode) {};


/**
 * called when drag-n-drop is initiated, creates drag representation
 * @id dhx.ui._any.createDrag
 * @class dhx.ui._any
 * @method createDrag
 * @memberOf dhx.ui._any
 * @param {String} e createDrag(e)
 * @example 
 */
 dhx.ui._any.createDrag = function(e) {};


/**
 * called after drag-n-drop, removes all traces and html elements
 * @id dhx.ui._any.destroyDrag
 * @class dhx.ui._any
 * @method destroyDrag
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.destroyDrag = function() {};


/**
 * gets drag-n-drop context object
 * @id dhx.ui._any.getContext
 * @class dhx.ui._any
 * @method getContext
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getContext = function() {};


/**
 * component object or hash code of the control methods
 * @id dhx.ui._any.getMaster
 * @class dhx.ui._any
 * @method getMaster
 * @memberOf dhx.ui._any
 * @param {String} t getMaster(t)
 * @example 
 */
 dhx.ui._any.getMaster = function(t) {};


/**
 * gets dragged node
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * called when drag-n-drop was started and defines dragging behavior
 * @id dhx.ui._any.onDrag
 * @class dhx.ui._any
 * @method onDrag
 * @memberOf dhx.ui._any
 * @param {String} s onDrag(s,e)
 * @param {String} e Type: Method
 * @example 
 */
 dhx.ui._any.onDrag = function(s,e) {};


/**
 * called when mouse was moved in drop area and defines marker behavior within the drop area
 * @id dhx.ui._any.onDragIn
 * @class dhx.ui._any
 * @method onDragIn
 * @memberOf dhx.ui._any
 * @param {String} s onDragIn(s,t,e)
 * @param {String} t Type: Method
 * @param {String} e File: core/dnd.js
 * @example 
 */
 dhx.ui._any.onDragIn = function(s,t,e) {};


/**
 * called when mouse was moved out drop area and defines marker behavior out of the drop area
 * @id dhx.ui._any.onDragOut
 * @class dhx.ui._any
 * @method onDragOut
 * @memberOf dhx.ui._any
 * @param {String} s onDragOut(s,t,n,e)
 * @param {String} t Type: Method
 * @param {String} n File: core/dnd.js
 * @param {String} e Implemented in: DragControl
 * @example 
 */
 dhx.ui._any.onDragOut = function(s,t,n,e) {};


/**
 * called when mouse was released over drop area and defines dropping behavior
 * @id dhx.ui._any.onDrop
 * @class dhx.ui._any
 * @method onDrop
 * @memberOf dhx.ui._any
 * @param {String} s onDrop(s,t,d,e)
 * @param {String} t Type: Method
 * @param {String} d File: core/dnd.js
 * @param {String} e Implemented in: DragControl
 * @example 
 */
 dhx.ui._any.onDrop = function(s,t,d,e) {};


/**
 * sets drag-n-drop active state for drag-n-drop context object
 * @id dhx.ui._any.sendSignal
 * @class dhx.ui._any
 * @method sendSignal
 * @memberOf dhx.ui._any
 * @param {String} signal sendSignal(signal)
 * @example 
 */
 dhx.ui._any.sendSignal = function(signal) {};


/**
 * switches item to the edit state
 * @id dhx.ui._any.edit
 * @class dhx.ui._any
 * @method edit
 * @memberOf dhx.ui._any
 * @param {String} id edit(id)
 * @example 
 */
 dhx.ui._any.edit = function(id) {};


/**
 * returns id of item in edit state, or null if none
 * @id dhx.ui._any.isEdit
 * @class dhx.ui._any
 * @method isEdit
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.isEdit = function() {};


/**
 * switches any item in edit state, back to normal
 * @id dhx.ui._any.stopEdit
 * @class dhx.ui._any
 * @method stopEdit
 * @memberOf dhx.ui._any
 * @param {String} mode stopEdit(mode, if_not_id)
 * @param {String} if_not_id Type: Method
 * @example 
 */
 dhx.ui._any.stopEdit = function(mode, if_not_id) {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * groups data
 * @id dhx.ui._any.group
 * @class dhx.ui._any
 * @method group
 * @memberOf dhx.ui._any
 * @param {String} config group(config,mode)
 * @param {String} mode Type: Method
 * @example 
 */
 dhx.ui._any.group = function(config,mode) {};


/**
 * ungroups data
 * @id dhx.ui._any.ungroup
 * @class dhx.ui._any
 * @method ungroup
 * @memberOf dhx.ui._any
 * @param {String} mode ungroup(mode)
 * @example 
 */
 dhx.ui._any.ungroup = function(mode) {};


/**
 * groups data
 * @id dhx.ui._any.group
 * @class dhx.ui._any
 * @method group
 * @memberOf dhx.ui._any
 * @param {String} stats group(stats)
 * @example 
 */
 dhx.ui._any.group = function(stats) {};


/**
 * gets the maximum value of a property
 * @id dhx.ui._any.max
 * @class dhx.ui._any
 * @method max
 * @memberOf dhx.ui._any
 * @param {String} property max(property, data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.max = function(property, data) {};


/**
 * gets the minimum value of a property
 * @id dhx.ui._any.min
 * @class dhx.ui._any
 * @method min
 * @memberOf dhx.ui._any
 * @param {String} property min(property, data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.min = function(property, data) {};


/**
 * gets the sum of property values
 * @id dhx.ui._any.sum
 * @class dhx.ui._any
 * @method sum
 * @memberOf dhx.ui._any
 * @param {String} property sum(property, data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui._any.sum = function(property, data) {};


/**
 * ungroups data
 * @id dhx.ui._any.ungroup
 * @class dhx.ui._any
 * @method ungroup
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.ungroup = function() {};


/**
 * returns inner unique id of item
 * @id dhx.ui._any.innerId
 * @class dhx.ui._any
 * @method innerId
 * @memberOf dhx.ui._any
 * @param {String} id innerId(id)
 * @example dhx.ui({
 *   view:"window",
 *   id:"win1",
 *   body:"
 *         view:"list", 
 *         id:"mylist",
 *         ...",
 *   ...
 * });
 * �
 * dhx.ui({
 *   view:"window",
 *   id:"win2",
 *   body:"
 *         view:"list", 
 *         id:"mylist",
 *         ...",
 *   ...
 * });
 */
 dhx.ui._any.innerId = function(id) {};


/**
 * some unknown method
 * @id dhx.ui._any.format
 * @class dhx.ui._any
 * @method format
 * @memberOf dhx.ui._any
 * @param {String} value format(value, config)
 * @param {String} config Type: Method
 * @example 
 */
 dhx.ui._any.format = function(value, config) {};


/**
 * some unknown method
 * @id dhx.ui._any.numToStr
 * @class dhx.ui._any
 * @method numToStr
 * @memberOf dhx.ui._any
 * @param {String} config numToStr(config)
 * @example 
 */
 dhx.ui._any.numToStr = function(config) {};


/**
 * executes a method for each element of an array
 * @id dhx.ui._any.each
 * @class dhx.ui._any
 * @method each
 * @memberOf dhx.ui._any
 * @param {String} functor each(functor,master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.ui._any.each = function(functor,master) {};


/**
 * gets the index of an element in an array
 * @id dhx.ui._any.find
 * @class dhx.ui._any
 * @method find
 * @memberOf dhx.ui._any
 * @param {String} data find(data)
 * @example 
 */
 dhx.ui._any.find = function(data) {};


/**
 * adds an element in a collection at a specific position
 * @id dhx.ui._any.insertAt
 * @class dhx.ui._any
 * @method insertAt
 * @memberOf dhx.ui._any
 * @param {String} data insertAt(data,pos)
 * @param {String} pos Type: Method
 * @example 
 */
 dhx.ui._any.insertAt = function(data,pos) {};


/**
 * creates a new array from data source, by using results of functor
 * @id dhx.ui._any.map
 * @class dhx.ui._any
 * @method map
 * @memberOf dhx.ui._any
 * @param {String} functor map(functor,master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.ui._any.map = function(functor,master) {};


/**
 * removes an element from an array
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} value remove(value)
 * @example 
 */
 dhx.ui._any.remove = function(value) {};


/**
 * removes one or more elements from a specified position
 * @id dhx.ui._any.removeAt
 * @class dhx.ui._any
 * @method removeAt
 * @memberOf dhx.ui._any
 * @param {String} pos removeAt(pos,len)
 * @param {String} len Type: Method
 * @example 
 */
 dhx.ui._any.removeAt = function(pos,len) {};


/**
 * applies new type settings
 * @id dhx.ui._any.customize
 * @class dhx.ui._any
 * @method customize
 * @memberOf dhx.ui._any
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui._any.customize = function(obj) {};


/**
 * 
 * @id dhx.ui._any.locate
 * @class dhx.ui._any
 * @method locate
 * @memberOf dhx.ui._any
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui._any.locate = function(e) {};


/**
 * renders a current state of an item or the whole component
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui._any.render = function(id,data,type) {};


/**
 * shows the specified item
 * @id dhx.ui._any.showItem
 * @class dhx.ui._any
 * @method showItem
 * @memberOf dhx.ui._any
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui._any.showItem = function(id) {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * returns ID of selected item(s)
 * @id dhx.ui._any.getSelected
 * @class dhx.ui._any
 * @method getSelected
 * @memberOf dhx.ui._any
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui._any.getSelected = function(as_array) {};


/**
 * checks if item is selected or not
 * @id dhx.ui._any.isSelected
 * @class dhx.ui._any
 * @method isSelected
 * @memberOf dhx.ui._any
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui._any.isSelected = function(id) {};


/**
 * selects item
 * @id dhx.ui._any.select
 * @class dhx.ui._any
 * @method select
 * @memberOf dhx.ui._any
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui._any.select = function(id,non_modal,continue_old) {};


/**
 * selects all items
 * @id dhx.ui._any.selectAll
 * @class dhx.ui._any
 * @method selectAll
 * @memberOf dhx.ui._any
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui._any.selectAll = function(from,to) {};


/**
 * unselects item
 * @id dhx.ui._any.unselect
 * @class dhx.ui._any
 * @method unselect
 * @memberOf dhx.ui._any
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui._any.unselect = function(id) {};


/**
 * unselects all items
 * @id dhx.ui._any.unselectAll
 * @class dhx.ui._any
 * @method unselectAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.unselectAll = function() {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * applies new type settings
 * @id dhx.ui._any.customize
 * @class dhx.ui._any
 * @method customize
 * @memberOf dhx.ui._any
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui._any.customize = function(obj) {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * 
 * @id dhx.ui._any.adjust
 * @class dhx.ui._any
 * @method adjust
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.adjust = function() {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * binds components
 * @id dhx.ui._any.bind
 * @class dhx.ui._any
 * @method bind
 * @memberOf dhx.ui._any
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui._any.bind = function(target, rule, format) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * sets configuration property or a hash of properties
 * @id dhx.ui._any.define
 * @class dhx.ui._any
 * @method define
 * @memberOf dhx.ui._any
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui._any.define = function(property, value) {};


/**
 * destructs an object
 * @id dhx.ui._any.destructor
 * @class dhx.ui._any
 * @method destructor
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui._any.destructor = function() {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * returns main html container of view
 * @id dhx.ui._any.getNode
 * @class dhx.ui._any
 * @method getNode
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getNode = function() {};


/**
 * returns parent object of current view
 * @id dhx.ui._any.getParent
 * @class dhx.ui._any
 * @method getParent
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getParent = function() {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * hides view
 * @id dhx.ui._any.hide
 * @class dhx.ui._any
 * @method hide
 * @memberOf dhx.ui._any
 * @example $$('myform').hide();
 */
 dhx.ui._any.hide = function() {};


/**
 * returns true if current view is visible
 * @id dhx.ui._any.isVisible
 * @class dhx.ui._any
 * @method isVisible
 * @memberOf dhx.ui._any
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui._any.isVisible = function(base_id, prev_id) {};


/**
 * loads values from external datasource
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui._any.load = function(url,call) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * addes data from a datasource
 * @id dhx.ui._any.parse
 * @class dhx.ui._any
 * @method parse
 * @memberOf dhx.ui._any
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui._any.parse = function(data,type) {};


/**
 * repaints the whole view or a certain a item
 * @id dhx.ui._any.refresh
 * @class dhx.ui._any
 * @method refresh
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.refresh = function() {};


/**
 * renders a single item
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.render = function() {};


/**
 * adjusts view to the new size
 * @id dhx.ui._any.resize
 * @class dhx.ui._any
 * @method resize
 * @memberOf dhx.ui._any
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui._any.resize = function(force) {};


/**
 * some unknown method
 * @id dhx.ui._any.scrollState
 * @class dhx.ui._any
 * @method scrollState
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.scrollState = function() {};


/**
 * scrolls data container to a certain position
 * @id dhx.ui._any.scrollTo
 * @class dhx.ui._any
 * @method scrollTo
 * @memberOf dhx.ui._any
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui._any.scrollTo = function(x,y) {};


/**
 * sets data hash
 * @id dhx.ui._any.setValues
 * @class dhx.ui._any
 * @method setValues
 * @memberOf dhx.ui._any
 * @param {Object} obj setValues(obj)
 * @example 
 */
 dhx.ui._any.setValues = function(obj) {};


/**
 * makes view visible
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui._any.show = function(animate_settings) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.disable
 * @class dhx.ui._any
 * @method disable
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.disable = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.enable
 * @class dhx.ui._any
 * @method enable
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.enable = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.swipe
 * @class dhx.ui._any
 * @method swipe
 * @memberOf dhx.ui._any
 * @param {String} id swipe(id)
 * @example 
 */
 dhx.ui._any.swipe = function(id) {};


/**
 * some unknown method
 * @id dhx.ui._any.unSwipe
 * @class dhx.ui._any
 * @method unSwipe
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.unSwipe = function() {};


/**
 * adds a new item into a certain branch
 * @id dhx.ui._any.add
 * @class dhx.ui._any
 * @method add
 * @memberOf dhx.ui._any
 * @param {Number} obj add(obj, index, parent)
 * @param {String} index Type: Method
 * @param {String} parent File:
 * @example 
 */
 dhx.ui._any.add = function(obj, index, parent) {};


/**
 * gets position of the item in the parent branch
 * @id dhx.ui._any.branchIndex
 * @class dhx.ui._any
 * @method branchIndex
 * @memberOf dhx.ui._any
 * @param {String} parent branchIndex(parent, child)
 * @param {String} child Type: Method
 * @example 
 */
 dhx.ui._any.branchIndex = function(parent, child) {};


/**
 * removes all data
 * @id dhx.ui._any.clearAll
 * @class dhx.ui._any
 * @method clearAll
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.clearAll = function() {};


/**
 * calls the defined functor for each child node of a certain branch
 * @id dhx.ui._any.eachChild
 * @class dhx.ui._any
 * @method eachChild
 * @memberOf dhx.ui._any
 * @param {String} id eachChild(id, functor)
 * @param {String} functor Type: Method
 * @example 
 */
 dhx.ui._any.eachChild = function(id, functor) {};


/**
 * addes data from data source
 * @id dhx.ui._any.extraParser
 * @class dhx.ui._any
 * @method extraParser
 * @memberOf dhx.ui._any
 * @param {String} data extraParser(data, parent, level)
 * @param {String} parent Type: Method
 * @param {String} level File:
 * @example 
 */
 dhx.ui._any.extraParser = function(data, parent, level) {};


/**
 * gets the id of the first child in a certain branch
 * @id dhx.ui._any.firstChild
 * @class dhx.ui._any
 * @method firstChild
 * @memberOf dhx.ui._any
 * @param {String} id firstChild(id)
 * @example 
 */
 dhx.ui._any.firstChild = function(id) {};


/**
 * gets all ids of all child nodes in the top level
 * @id dhx.ui._any.getTopRange
 * @class dhx.ui._any
 * @method getTopRange
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.getTopRange = function() {};


/**
 * some unknown method
 * @id dhx.ui._any.groupBy
 * @class dhx.ui._any
 * @method groupBy
 * @memberOf dhx.ui._any
 * @param {String} _scheme groupBy(_scheme, pull, inner_call, parent, level)
 * @param {String} pull Type: Method
 * @param {String} inner_call File:
 * @param {String} parent Implemented in: TreeStore
 * @param {String} level Included in:
 * @example 
 */
 dhx.ui._any.groupBy = function(_scheme, pull, inner_call, parent, level) {};


/**
 * checks whether an item exists in a certain branch (at any level)
 * @id dhx.ui._any.hasChild
 * @class dhx.ui._any
 * @method hasChild
 * @memberOf dhx.ui._any
 * @param {String} parent hasChild(parent, child)
 * @param {String} child Type: Method
 * @example 
 */
 dhx.ui._any.hasChild = function(parent, child) {};


/**
 * gets the id of the next item
 * @id dhx.ui._any.nextSibling
 * @class dhx.ui._any
 * @method nextSibling
 * @memberOf dhx.ui._any
 * @param {String} id nextSibling(id)
 * @example 
 */
 dhx.ui._any.nextSibling = function(id) {};


/**
 * gets the id of the parent branch
 * @id dhx.ui._any.parent
 * @class dhx.ui._any
 * @method parent
 * @memberOf dhx.ui._any
 * @param {String} id parent(id)
 * @example 
 */
 dhx.ui._any.parent = function(id) {};


/**
 * gets the id of the previous item
 * @id dhx.ui._any.prevSibling
 * @class dhx.ui._any
 * @method prevSibling
 * @memberOf dhx.ui._any
 * @param {String} id prevSibling(id)
 * @example 
 */
 dhx.ui._any.prevSibling = function(id) {};


/**
 * assigns methods (and events) of DataStore to an object
 * @id dhx.ui._any.provideApi
 * @class dhx.ui._any
 * @method provideApi
 * @memberOf dhx.ui._any
 * @param {String} target provideApi(target,eventable)
 * @param {String} eventable Type: Method
 * @example 
 */
 dhx.ui._any.provideApi = function(target,eventable) {};


/**
 * removes an item
 * @id dhx.ui._any.remove
 * @class dhx.ui._any
 * @method remove
 * @memberOf dhx.ui._any
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui._any.remove = function(id) {};


/**
 * serializes branch or the whole dataset to a json object
 * @id dhx.ui._any.serialize
 * @class dhx.ui._any
 * @method serialize
 * @memberOf dhx.ui._any
 * @param {String} id serialize(id)
 * @example 
 */
 dhx.ui._any.serialize = function(id) {};


/**
 * validates for the defined rules
 * @id dhx.ui._any.validate
 * @class dhx.ui._any
 * @method validate
 * @memberOf dhx.ui._any
 * @param {Object} obj validate(obj)
 * @example dhx.ui({
 * 	view:"form", 
 * 	id:"myform", 
 * 	elements:[
 * 		{ view:"text", inputWidth:300, label:"Name *", id:"name"},
 * 		{ view:"text", inputWidth:300, label:"Age *",  id:"age"},
 * 		{ view:"button", inputWidth:300, label:"Submit", click:"submit_form"}],
 * 	rules:{
 * 		name:dhx.rules.isNotEmpty,
 * 		age:dhx.rules.isNumber
 * 	}
 * });
 * �
 * submit_form = function(){
 * 	if ($$("myform").validate()==false)
 * 		{dhx.notice("Invalid value for some field");}
 * }
 */
 dhx.ui._any.validate = function(obj) {};


/**
 * clears values of all inputs ( resets them to the default values )
 * @id dhx.ui._any.clear
 * @class dhx.ui._any
 * @method clear
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", label: 'Clear form', click:"clear_form" }]
 * });
 * �
 * function clear_form(){
 * 	$$('myform').clear();
 * };
 */
 dhx.ui._any.clear = function() {};


/**
 * sets focus to an input
 * @id dhx.ui._any.focus
 * @class dhx.ui._any
 * @method focus
 * @memberOf dhx.ui._any
 * @param {String} name focus(name)
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('myform').focus("field_a");
 */
 dhx.ui._any.focus = function(name) {};


/**
 * gets hash of data values
 * @id dhx.ui._any.getValues
 * @class dhx.ui._any
 * @method getValues
 * @memberOf dhx.ui._any
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'From', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'To', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", id:"button1", label: 'Show values', click:"get_form" }]
 * 	},
 * 	{ id:"log", template:function(obj){ return "<pre>"+JSON.stringify(obj).replace(/,/g,"\n,")+"</pre>"; }}]
 * });
 * �
 * function get_form(){
 * 	$$('log').parse($$('myform').getValues());
 * };
 */
 dhx.ui._any.getValues = function() {};


/**
 * sets values for all inputs in the component
 * @id dhx.ui._any.setValues
 * @class dhx.ui._any
 * @method setValues
 * @memberOf dhx.ui._any
 * @param {String} data setValues(data)
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" }]
 * 	},
 * 	{ view:"button", label: 'Fill form', click:"set_form" }]
 * });
 * �
 * function set_form(){
 * 	$$('myform').setValues({
 * 			field_a: "London",
 * 			field_b: "New York",
 * 			field_c: "left"
 * 	});
 * };
 */
 dhx.ui._any.setValues = function(data) {};


/**
 * renders a current state of an item or the whole component
 * @id dhx.ui._any.render
 * @class dhx.ui._any
 * @method render
 * @memberOf dhx.ui._any
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/virtual_render.js
 * @example 
 */
 dhx.ui._any.render = function(id,data,type) {};


/**
 * adjusts scroll state to show an item in question
 * @id dhx.ui._any.show
 * @class dhx.ui._any
 * @method show
 * @memberOf dhx.ui._any
 * @param {String} id show(id)
 * @example 
 */
 dhx.ui._any.show = function(id) {};


/**
 * checks whether history storing is activated
 * @id dhx.ui._any.active
 * @class dhx.ui._any
 * @method active
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.active = function() {};


/**
 * says to ignore the specified multiview tabs while storing history
 * @id dhx.ui._any.ignore
 * @class dhx.ui._any
 * @method ignore
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.ignore = function() {};


/**
 * clears all the stored history and stops further storing for all the activated multiviews
 * @id dhx.ui._any.reset
 * @class dhx.ui._any
 * @method reset
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.reset = function() {};


/**
 * starts storing tabs history
 * @id dhx.ui._any.start
 * @class dhx.ui._any
 * @method start
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.start = function() {};


/**
 * pauses storing tabs history
 * @id dhx.ui._any.stop
 * @class dhx.ui._any
 * @method stop
 * @memberOf dhx.ui._any
 * @example 
 */
 dhx.ui._any.stop = function() {};


/**
 * resumes storing history of an ignored tab
 * @id dhx.ui._any.unignore
 * @class dhx.ui._any
 * @method unignore
 * @memberOf dhx.ui._any
 * @param {String} name unignore(name)
 * @example 
 */
 dhx.ui._any.unignore = function(name) {};


/**
 * attaches custom handler to inner event
 * @id dhx.ui._any.attachEvent
 * @class dhx.ui._any
 * @method attachEvent
 * @memberOf dhx.ui._any
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui._any.attachEvent = function(type,functor,id) {};


/**
 * blocks event triggering
 * @id dhx.ui._any.blockEvent
 * @class dhx.ui._any
 * @method blockEvent
 * @memberOf dhx.ui._any
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui._any.blockEvent = function() {};


/**
 * calls inner event
 * @id dhx.ui._any.callEvent
 * @class dhx.ui._any
 * @method callEvent
 * @memberOf dhx.ui._any
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui._any.callEvent = function(type,params) {};


/**
 * detaches custom code from handler
 * @id dhx.ui._any.detachEvent
 * @class dhx.ui._any
 * @method detachEvent
 * @memberOf dhx.ui._any
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui._any.detachEvent = function(id) {};


/**
 * sends a request of the type GET
 * @id dhx.ui._any.get
 * @class dhx.ui._any
 * @method get
 * @memberOf dhx.ui._any
 * @param {String} params get(params, callback)
 * @param {Function} callback Type: Method
 * @example 
 */
 dhx.ui._any.get = function(params, callback) {};


/**
 * checks whether a component has an event
 * @id dhx.ui._any.hasEvent
 * @class dhx.ui._any
 * @method hasEvent
 * @memberOf dhx.ui._any
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui._any.hasEvent = function(type) {};


/**
 * loads data from the specified url via proxy
 * @id dhx.ui._any.load
 * @class dhx.ui._any
 * @method load
 * @memberOf dhx.ui._any
 * @param {String} dest load(dest, driver)
 * @param {String} driver Type: Method
 * @example 
 */
 dhx.ui._any.load = function(dest, driver) {};


/**
 * routes events from one object to another
 * @id dhx.ui._any.mapEvent
 * @class dhx.ui._any
 * @method mapEvent
 * @memberOf dhx.ui._any
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui._any.mapEvent = function(map) {};


/**
 * sends a request of the type POST
 * @id dhx.ui._any.post
 * @class dhx.ui._any
 * @method post
 * @memberOf dhx.ui._any
 * @param {String} params post(params, callback)
 * @param {Function} callback Type: Method
 * @example 
 */
 dhx.ui._any.post = function(params, callback) {};


/**
 * restores data from the cache into the specified datastore
 * @id dhx.ui._any.restore
 * @class dhx.ui._any
 * @method restore
 * @memberOf dhx.ui._any
 * @param {String} dest restore(dest, driver, text, xml, XmlHttpRequest)
 * @param {String} driver Type: Method
 * @param {String} text File:
 * @param {String} xml Implemented in: proxy
 * @param {String} XmlHttpRequest Included in:
 * @example 
 */
 dhx.ui._any.restore = function(dest, driver, text, xml, XmlHttpRequest) {};


/**
 * enables event triggering
 * @id dhx.ui._any.unblockEvent
 * @class dhx.ui._any
 * @method unblockEvent
 * @memberOf dhx.ui._any
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui._any.unblockEvent = function() {};

/**
*
* dhx.ui.accordion object class.
* @id dhx.ui.accordion
* @class dhx.ui.accordion
* @constructor
* @alias dhx.ui.accordion.prototype

 * @return {dhx.ui.accordion}
 */


dhx.ui.accordion.config = {

/**
 * array of views arranged horizontally
 * @id dhx.ui.accordion.config.cols
 * @type object
 * @property
 */
cols: '',


/**
 * html container or its id where view needs being initialized
 * @id dhx.ui.accordion.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * class name for view container
 * @id dhx.ui.accordion.config.css
 * @type string
 * @property
 */
css: '',


/**
 * view gravity (1 by default)
 * @id dhx.ui.accordion.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * view height
 * @id dhx.ui.accordion.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.accordion.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.accordion.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * enables/disables mode when several items can be visible at once
 * @id dhx.ui.accordion.config.multi
 * @type boolean
 * @property
 */
multi: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.accordion.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * array of views arranged vertically
 * @id dhx.ui.accordion.config.rows
 * @type object
 * @property
 */
rows: '',


/**
 * defines border of layout
 * @id dhx.ui.accordion.config.type
 * @type &#039;wide&#039;, &#039;head&#039; or &#039;clean&#039;
 * @property
 */
type: '',


/**
 * view width
 * @id dhx.ui.accordion.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.accordion.adjust
 * @class dhx.ui.accordion
 * @method adjust
 * @memberOf dhx.ui.accordion
 * @example 
 */
 dhx.ui.accordion.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.accordion.attachEvent
 * @class dhx.ui.accordion
 * @method attachEvent
 * @memberOf dhx.ui.accordion
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.accordion.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.accordion.bind
 * @class dhx.ui.accordion
 * @method bind
 * @memberOf dhx.ui.accordion
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.accordion.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.accordion.blockEvent
 * @class dhx.ui.accordion
 * @method blockEvent
 * @memberOf dhx.ui.accordion
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.accordion.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.accordion.callEvent
 * @class dhx.ui.accordion
 * @method callEvent
 * @memberOf dhx.ui.accordion
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.accordion.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.accordion.define
 * @class dhx.ui.accordion
 * @method define
 * @memberOf dhx.ui.accordion
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.accordion.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.accordion.destructor
 * @class dhx.ui.accordion
 * @method destructor
 * @memberOf dhx.ui.accordion
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.accordion.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.accordion.detachEvent
 * @class dhx.ui.accordion
 * @method detachEvent
 * @memberOf dhx.ui.accordion
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.accordion.detachEvent = function(id) {};
/**
 * some unknown method
 * @id dhx.ui.accordion.first
 * @class dhx.ui.accordion
 * @method first
 * @memberOf dhx.ui.accordion
 * @example 
 */
 dhx.ui.accordion.first = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.accordion.getNode
 * @class dhx.ui.accordion
 * @method getNode
 * @memberOf dhx.ui.accordion
 * @example 
 */
 dhx.ui.accordion.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.accordion.getParent
 * @class dhx.ui.accordion
 * @method getParent
 * @memberOf dhx.ui.accordion
 * @example 
 */
 dhx.ui.accordion.getParent = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.accordion.hasEvent
 * @class dhx.ui.accordion
 * @method hasEvent
 * @memberOf dhx.ui.accordion
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.accordion.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.accordion.hide
 * @class dhx.ui.accordion
 * @method hide
 * @memberOf dhx.ui.accordion
 * @example $$('myform').hide();
 */
 dhx.ui.accordion.hide = function() {};
/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui.accordion.index
 * @class dhx.ui.accordion
 * @method index
 * @memberOf dhx.ui.accordion
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui.accordion.index = function(obj) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.accordion.isVisible
 * @class dhx.ui.accordion
 * @method isVisible
 * @memberOf dhx.ui.accordion
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.accordion.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.accordion.mapEvent
 * @class dhx.ui.accordion
 * @method mapEvent
 * @memberOf dhx.ui.accordion
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.accordion.mapEvent = function(map) {};
/**
 * rebuilds layout
 * @id dhx.ui.accordion.reconstruct
 * @class dhx.ui.accordion
 * @method reconstruct
 * @memberOf dhx.ui.accordion
 * @example 
 */
 dhx.ui.accordion.reconstruct = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.accordion.resize
 * @class dhx.ui.accordion
 * @method resize
 * @memberOf dhx.ui.accordion
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.accordion.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.accordion.resizeChildren
 * @class dhx.ui.accordion
 * @method resizeChildren
 * @memberOf dhx.ui.accordion
 * @example 
 */
 dhx.ui.accordion.resizeChildren = function() {};
/**
 * makes view visible
 * @id dhx.ui.accordion.show
 * @class dhx.ui.accordion
 * @method show
 * @memberOf dhx.ui.accordion
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.accordion.show = function(animate_settings) {};
/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui.accordion.showBatch
 * @class dhx.ui.accordion
 * @method showBatch
 * @memberOf dhx.ui.accordion
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui.accordion.showBatch = function(name) {};
/**
 * enables event triggering
 * @id dhx.ui.accordion.unblockEvent
 * @class dhx.ui.accordion
 * @method unblockEvent
 * @memberOf dhx.ui.accordion
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.accordion.unblockEvent = function() {};


/**
*
* dhx.ui.accordionitem object class.
* @id dhx.ui.accordionitem
* @class dhx.ui.accordionitem
* @constructor
* @alias dhx.ui.accordionitem.prototype

 * @return {dhx.ui.accordionitem}
 */


dhx.ui.accordionitem.config = {

/**
 * a view or html content that is shown in item
 * @id dhx.ui.accordionitem.config.body
 * @type any
 * @property
 */
body: '',


/**
 * defines whether an accordion cell needs being collapsed, takes true/false as a parameter
 * @id dhx.ui.accordionitem.config.collapsed
 * @type boolean
 * @property
 */
collapsed: '',


/**
 * html container or its id where view needs being initialized
 * @id dhx.ui.accordionitem.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * class name for view container
 * @id dhx.ui.accordionitem.config.css
 * @type string
 * @property
 */
css: '',


/**
 * view gravity (1 by default)
 * @id dhx.ui.accordionitem.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * header height in the collapsed state
 * @id dhx.ui.accordionitem.config.headerAltHeight
 * @type dimension
 * @property
 */
headerAltHeight: '',


/**
 * specifies header in the collapsed state
 * @id dhx.ui.accordionitem.config.headerAlt
 * @type template or &#039;false&#039;
 * @property
 */
headerAlt: '',


/**
 * header height
 * @id dhx.ui.accordionitem.config.headerHeight
 * @type dimension
 * @property
 */
headerHeight: '',


/**
 * specifies header in the expanded state
 * @id dhx.ui.accordionitem.config.header
 * @type template or &#039;false&#039;
 * @property
 */
header: '',


/**
 * view height
 * @id dhx.ui.accordionitem.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.accordionitem.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.accordionitem.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.accordionitem.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * view width
 * @id dhx.ui.accordionitem.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.accordionitem.adjust
 * @class dhx.ui.accordionitem
 * @method adjust
 * @memberOf dhx.ui.accordionitem
 * @example 
 */
 dhx.ui.accordionitem.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.accordionitem.attachEvent
 * @class dhx.ui.accordionitem
 * @method attachEvent
 * @memberOf dhx.ui.accordionitem
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.accordionitem.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.accordionitem.bind
 * @class dhx.ui.accordionitem
 * @method bind
 * @memberOf dhx.ui.accordionitem
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.accordionitem.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.accordionitem.blockEvent
 * @class dhx.ui.accordionitem
 * @method blockEvent
 * @memberOf dhx.ui.accordionitem
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.accordionitem.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.accordionitem.callEvent
 * @class dhx.ui.accordionitem
 * @method callEvent
 * @memberOf dhx.ui.accordionitem
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.accordionitem.callEvent = function(type,params) {};
/**
 * collapses accordion item
 * @id dhx.ui.accordionitem.collapse
 * @class dhx.ui.accordionitem
 * @method collapse
 * @memberOf dhx.ui.accordionitem
 * @example 
 */
 dhx.ui.accordionitem.collapse = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.accordionitem.define
 * @class dhx.ui.accordionitem
 * @method define
 * @memberOf dhx.ui.accordionitem
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.accordionitem.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.accordionitem.destructor
 * @class dhx.ui.accordionitem
 * @method destructor
 * @memberOf dhx.ui.accordionitem
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.accordionitem.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.accordionitem.detachEvent
 * @class dhx.ui.accordionitem
 * @method detachEvent
 * @memberOf dhx.ui.accordionitem
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.accordionitem.detachEvent = function(id) {};
/**
 * expands accordion item
 * @id dhx.ui.accordionitem.expand
 * @class dhx.ui.accordionitem
 * @method expand
 * @memberOf dhx.ui.accordionitem
 * @example 
 */
 dhx.ui.accordionitem.expand = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.accordionitem.getNode
 * @class dhx.ui.accordionitem
 * @method getNode
 * @memberOf dhx.ui.accordionitem
 * @example 
 */
 dhx.ui.accordionitem.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.accordionitem.getParent
 * @class dhx.ui.accordionitem
 * @method getParent
 * @memberOf dhx.ui.accordionitem
 * @example 
 */
 dhx.ui.accordionitem.getParent = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.accordionitem.hasEvent
 * @class dhx.ui.accordionitem
 * @method hasEvent
 * @memberOf dhx.ui.accordionitem
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.accordionitem.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.accordionitem.hide
 * @class dhx.ui.accordionitem
 * @method hide
 * @memberOf dhx.ui.accordionitem
 * @example $$('myform').hide();
 */
 dhx.ui.accordionitem.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.accordionitem.isVisible
 * @class dhx.ui.accordionitem
 * @method isVisible
 * @memberOf dhx.ui.accordionitem
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.accordionitem.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.accordionitem.mapEvent
 * @class dhx.ui.accordionitem
 * @method mapEvent
 * @memberOf dhx.ui.accordionitem
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.accordionitem.mapEvent = function(map) {};
/**
 * refreshes header label
 * @id dhx.ui.accordionitem.refresh
 * @class dhx.ui.accordionitem
 * @method refresh
 * @memberOf dhx.ui.accordionitem
 * @example 
 */
 dhx.ui.accordionitem.refresh = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.accordionitem.resize
 * @class dhx.ui.accordionitem
 * @method resize
 * @memberOf dhx.ui.accordionitem
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.accordionitem.resize = function(force) {};
/**
 * makes view visible
 * @id dhx.ui.accordionitem.show
 * @class dhx.ui.accordionitem
 * @method show
 * @memberOf dhx.ui.accordionitem
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.accordionitem.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.accordionitem.unblockEvent
 * @class dhx.ui.accordionitem
 * @method unblockEvent
 * @memberOf dhx.ui.accordionitem
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.accordionitem.unblockEvent = function() {};


/**
*
* dhx.ui.button object class.
* @id dhx.ui.button
* @class dhx.ui.button
* @constructor
* @alias dhx.ui.button.prototype

 * @return {dhx.ui.button}
 */


dhx.ui.button.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.button.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.button.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.button.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.button.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.button.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.button.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * text label of control
 * @id dhx.ui.button.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.button.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.button.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.button.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.button.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.button.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.button.adjust
 * @class dhx.ui.button
 * @method adjust
 * @memberOf dhx.ui.button
 * @example 
 */
 dhx.ui.button.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.button.attachEvent
 * @class dhx.ui.button
 * @method attachEvent
 * @memberOf dhx.ui.button
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.button.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.button.bind
 * @class dhx.ui.button
 * @method bind
 * @memberOf dhx.ui.button
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.button.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.button.blockEvent
 * @class dhx.ui.button
 * @method blockEvent
 * @memberOf dhx.ui.button
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.button.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.button.callEvent
 * @class dhx.ui.button
 * @method callEvent
 * @memberOf dhx.ui.button
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.button.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.button.define
 * @class dhx.ui.button
 * @method define
 * @memberOf dhx.ui.button
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.button.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.button.destructor
 * @class dhx.ui.button
 * @method destructor
 * @memberOf dhx.ui.button
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.button.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.button.detachEvent
 * @class dhx.ui.button
 * @method detachEvent
 * @memberOf dhx.ui.button
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.button.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.button.focus
 * @class dhx.ui.button
 * @method focus
 * @memberOf dhx.ui.button
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.button.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.button.getInput
 * @class dhx.ui.button
 * @method getInput
 * @memberOf dhx.ui.button
 * @example 
 */
 dhx.ui.button.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.button.getNode
 * @class dhx.ui.button
 * @method getNode
 * @memberOf dhx.ui.button
 * @example 
 */
 dhx.ui.button.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.button.getParent
 * @class dhx.ui.button
 * @method getParent
 * @memberOf dhx.ui.button
 * @example 
 */
 dhx.ui.button.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.button.getValue
 * @class dhx.ui.button
 * @method getValue
 * @memberOf dhx.ui.button
 * @example 
 */
 dhx.ui.button.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.button.hasEvent
 * @class dhx.ui.button
 * @method hasEvent
 * @memberOf dhx.ui.button
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.button.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.button.hide
 * @class dhx.ui.button
 * @method hide
 * @memberOf dhx.ui.button
 * @example $$('myform').hide();
 */
 dhx.ui.button.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.button.isVisible
 * @class dhx.ui.button
 * @method isVisible
 * @memberOf dhx.ui.button
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.button.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.button.mapEvent
 * @class dhx.ui.button
 * @method mapEvent
 * @memberOf dhx.ui.button
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.button.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.button.refresh
 * @class dhx.ui.button
 * @method refresh
 * @memberOf dhx.ui.button
 * @example 
 */
 dhx.ui.button.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.button.render
 * @class dhx.ui.button
 * @method render
 * @memberOf dhx.ui.button
 * @example 
 */
 dhx.ui.button.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.button.resize
 * @class dhx.ui.button
 * @method resize
 * @memberOf dhx.ui.button
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.button.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.button.setValue
 * @class dhx.ui.button
 * @method setValue
 * @memberOf dhx.ui.button
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.button.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.button.show
 * @class dhx.ui.button
 * @method show
 * @memberOf dhx.ui.button
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.button.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.button.unblockEvent
 * @class dhx.ui.button
 * @method unblockEvent
 * @memberOf dhx.ui.button
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.button.unblockEvent = function() {};


/**
*
* dhx.ui.calendar object class.
* @id dhx.ui.calendar
* @class dhx.ui.calendar
* @constructor
* @alias dhx.ui.calendar.prototype

 * @return {dhx.ui.calendar}
 */


dhx.ui.calendar.config = {

/**
 * date format (%Y-%m-%d)
 * @id dhx.ui.calendar.config.calendarDateFormat
 * @type string
 * @property
 */
calendarDateFormat: '',


/**
 * format for week header (%d)
 * @id dhx.ui.calendar.config.calendarDayHeader
 * @type string
 * @property
 */
calendarDayHeader: '',


/**
 * day format (%d)
 * @id dhx.ui.calendar.config.calendarDay
 * @type string
 * @property
 */
calendarDay: '',


/**
 * format for header (%F %Y)
 * @id dhx.ui.calendar.config.calendarHeader
 * @type string
 * @property
 */
calendarHeader: '',


/**
 * month format in header (%F %Y)
 * @id dhx.ui.calendar.config.calendarMonthHeader
 * @type string
 * @property
 */
calendarMonthHeader: '',


/**
 * label for column with weeks numbers (W#)
 * @id dhx.ui.calendar.config.calendarWeekHeader
 * @type string
 * @property
 */
calendarWeekHeader: '',


/**
 * format for week number (%W)
 * @id dhx.ui.calendar.config.calendarWeek
 * @type string
 * @property
 */
calendarWeek: '',


/**
 * height of the cell with day (36)
 * @id dhx.ui.calendar.config.cellHeight
 * @type dimension or &#039;auto&#039;
 * @property
 */
cellHeight: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.calendar.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.calendar.config.css
 * @type string
 * @property
 */
css: '',


/**
 * Date() object that specifies the initial date of the calendar (particularly month).
 * @id dhx.ui.calendar.config.date
 * @type object
 * @property
 */
date: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.calendar.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * calendar height (300)
 * @id dhx.ui.calendar.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.calendar.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * the last hour in a hour select
 * @id dhx.ui.calendar.config.hourEnd
 * @type dimension
 * @property
 */
hourEnd: '',


/**
 * hour format (%H)
 * @id dhx.ui.calendar.config.hourFormat
 * @type string
 * @property
 */
hourFormat: '',


/**
 * the first hour in a hour select (8)
 * @id dhx.ui.calendar.config.hourStart
 * @type dimension
 * @property
 */
hourStart: '',


/**
 * view id
 * @id dhx.ui.calendar.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * step in minutes selector (15)
 * @id dhx.ui.calendar.config.minuteStep
 * @type dimension
 * @property
 */
minuteStep: '',


/**
 * the height of month header (40 by default, property should be changed in css too)
 * @id dhx.ui.calendar.config.monthHeaderHeight
 * @type dimension
 * @property
 */
monthHeaderHeight: '',


/**
 * makes view movable
 * @id dhx.ui.calendar.config.move
 * @type boolean
 * @property
 */
move: '',


/**
 * enables/disables month navigation in header - the possibility to change months (true)
 * @id dhx.ui.calendar.config.navigation
 * @type boolean
 * @property
 */
navigation: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.calendar.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.calendar.config.selectedCss
 * @type unknown
 * @property
 */
selectedCss: '',


/**
 * class name for the selected date (dhx_cal_selected_day)
 * @id dhx.ui.calendar.config.selectedDateClassName
 * @type string
 * @property
 */
selectedDateClassName: '',


/**
 * enables/disables displaying empty weeks (true)
 * @id dhx.ui.calendar.config.skipEmptyWeeks
 * @type boolean
 * @property
 */
skipEmptyWeeks: '',


/**
 * defines whether week is started on monday
 * @id dhx.ui.calendar.config.startOnMonday
 * @type boolean
 * @property
 */
startOnMonday: '',


/**
 * the height of area with time selector (32 by default, property should be changed in css too)
 * @id dhx.ui.calendar.config.timeSelectHeight
 * @type dimension
 * @property
 */
timeSelectHeight: '',


/**
 * enables/disables time selector (false)
 * @id dhx.ui.calendar.config.timeSelect
 * @type boolean
 * @property
 */
timeSelect: '',


/**
 * the height of week header (20 by default, property should be changed in css too)
 * @id dhx.ui.calendar.config.weekHeaderHeight
 * @type dimension
 * @property
 */
weekHeaderHeight: '',


/**
 * enables/disables additional header with week days (false)
 * @id dhx.ui.calendar.config.weekHeader
 * @type boolean
 * @property
 */
weekHeader: '',


/**
 * enables/disables additional left column with weeks&#039; numbers (false)
 * @id dhx.ui.calendar.config.weekNumber
 * @type boolean
 * @property
 */
weekNumber: '',


/**
 * calendar width (300)
 * @id dhx.ui.calendar.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.calendar.adjust
 * @class dhx.ui.calendar
 * @method adjust
 * @memberOf dhx.ui.calendar
 * @example 
 */
 dhx.ui.calendar.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.calendar.attachEvent
 * @class dhx.ui.calendar
 * @method attachEvent
 * @memberOf dhx.ui.calendar
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.calendar.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.calendar.bind
 * @class dhx.ui.calendar
 * @method bind
 * @memberOf dhx.ui.calendar
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.calendar.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.calendar.blockEvent
 * @class dhx.ui.calendar
 * @method blockEvent
 * @memberOf dhx.ui.calendar
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.calendar.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.calendar.callEvent
 * @class dhx.ui.calendar
 * @method callEvent
 * @memberOf dhx.ui.calendar
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.calendar.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.calendar.define
 * @class dhx.ui.calendar
 * @method define
 * @memberOf dhx.ui.calendar
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.calendar.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.calendar.destructor
 * @class dhx.ui.calendar
 * @method destructor
 * @memberOf dhx.ui.calendar
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.calendar.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.calendar.detachEvent
 * @class dhx.ui.calendar
 * @method detachEvent
 * @memberOf dhx.ui.calendar
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.calendar.detachEvent = function(id) {};
/**
 * returns main html container of view
 * @id dhx.ui.calendar.getNode
 * @class dhx.ui.calendar
 * @method getNode
 * @memberOf dhx.ui.calendar
 * @example 
 */
 dhx.ui.calendar.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.calendar.getParent
 * @class dhx.ui.calendar
 * @method getParent
 * @memberOf dhx.ui.calendar
 * @example 
 */
 dhx.ui.calendar.getParent = function() {};
/**
 * returns currently selected date
 * @id dhx.ui.calendar.getSelectedDate
 * @class dhx.ui.calendar
 * @method getSelectedDate
 * @memberOf dhx.ui.calendar
 * @example 
 */
 dhx.ui.calendar.getSelectedDate = function() {};
/**
 * returns the current value of control
 * @id dhx.ui.calendar.getValue
 * @class dhx.ui.calendar
 * @method getValue
 * @memberOf dhx.ui.calendar
 * @param {String} date getValue(date)
 * @example 
 */
 dhx.ui.calendar.getValue = function(date) {};
/**
 * retuns visible date: in the general case, the selected date or the first day of the month if the currently selected date is not visible
 * @id dhx.ui.calendar.getVisibleDate
 * @class dhx.ui.calendar
 * @method getVisibleDate
 * @memberOf dhx.ui.calendar
 * @example 
 */
 dhx.ui.calendar.getVisibleDate = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.calendar.hasEvent
 * @class dhx.ui.calendar
 * @method hasEvent
 * @memberOf dhx.ui.calendar
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.calendar.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.calendar.hide
 * @class dhx.ui.calendar
 * @method hide
 * @memberOf dhx.ui.calendar
 * @example $$('myform').hide();
 */
 dhx.ui.calendar.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.calendar.isVisible
 * @class dhx.ui.calendar
 * @method isVisible
 * @memberOf dhx.ui.calendar
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.calendar.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.calendar.mapEvent
 * @class dhx.ui.calendar
 * @method mapEvent
 * @memberOf dhx.ui.calendar
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.calendar.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.calendar.refresh
 * @class dhx.ui.calendar
 * @method refresh
 * @memberOf dhx.ui.calendar
 * @example 
 */
 dhx.ui.calendar.refresh = function() {};
/**
 * renders an object
 * @id dhx.ui.calendar.render
 * @class dhx.ui.calendar
 * @method render
 * @memberOf dhx.ui.calendar
 * @example 
 */
 dhx.ui.calendar.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.calendar.resize
 * @class dhx.ui.calendar
 * @method resize
 * @memberOf dhx.ui.calendar
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.calendar.resize = function(force) {};
/**
 * selects date
 * @id dhx.ui.calendar.selectDate
 * @class dhx.ui.calendar
 * @method selectDate
 * @memberOf dhx.ui.calendar
 * @param {String} date selectDate(date, show)
 * @param {String} show Type: Method
 * @example 
 */
 dhx.ui.calendar.selectDate = function(date, show) {};
/**
 * sets a new value for a control
 * @id dhx.ui.calendar.setValue
 * @class dhx.ui.calendar
 * @method setValue
 * @memberOf dhx.ui.calendar
 * @param {String} date setValue(date)
 * @example 
 */
 dhx.ui.calendar.setValue = function(date) {};
/**
 * makes view visible
 * @id dhx.ui.calendar.show
 * @class dhx.ui.calendar
 * @method show
 * @memberOf dhx.ui.calendar
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.calendar.show = function(animate_settings) {};
/**
 * shows calendar (and selects date if it is defined)
 * @id dhx.ui.calendar.showCalendar
 * @class dhx.ui.calendar
 * @method showCalendar
 * @memberOf dhx.ui.calendar
 * @param {String} date showCalendar(date)
 * @example 
 */
 dhx.ui.calendar.showCalendar = function(date) {};
/**
 * enables event triggering
 * @id dhx.ui.calendar.unblockEvent
 * @class dhx.ui.calendar
 * @method unblockEvent
 * @memberOf dhx.ui.calendar
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.calendar.unblockEvent = function() {};


/**
*
* dhx.ui.carousel object class.
* @id dhx.ui.carousel
* @class dhx.ui.carousel
* @constructor
* @alias dhx.ui.carousel.prototype

 * @return {dhx.ui.carousel}
 */


dhx.ui.carousel.config = {

/**
 * array of views arranged horizontally
 * @id dhx.ui.carousel.config.cols
 * @type object
 * @property
 */
cols: '',


/**
 * html container or its id where view needs being initialized
 * @id dhx.ui.carousel.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * class name for view container
 * @id dhx.ui.carousel.config.css
 * @type string
 * @property
 */
css: '',


/**
 * view gravity (1 by default)
 * @id dhx.ui.carousel.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * view height
 * @id dhx.ui.carousel.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.carousel.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.carousel.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.carousel.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * panel showing the total amount of carousel&#039;s items and which one of them is selected.
 * @id dhx.ui.carousel.config.panel
 * @type object
 * @property
 */
panel: '',


/**
 * array of views arranged vertically
 * @id dhx.ui.carousel.config.rows
 * @type object
 * @property
 */
rows: '',


/**
 * speed of scrolling (&#039;100ms&#039; by default)
 * @id dhx.ui.carousel.config.scrollSpeed
 * @type string
 * @property
 */
scrollSpeed: '',


/**
 * view width
 * @id dhx.ui.carousel.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.carousel.adjust
 * @class dhx.ui.carousel
 * @method adjust
 * @memberOf dhx.ui.carousel
 * @example 
 */
 dhx.ui.carousel.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.carousel.attachEvent
 * @class dhx.ui.carousel
 * @method attachEvent
 * @memberOf dhx.ui.carousel
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.carousel.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.carousel.bind
 * @class dhx.ui.carousel
 * @method bind
 * @memberOf dhx.ui.carousel
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.carousel.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.carousel.blockEvent
 * @class dhx.ui.carousel
 * @method blockEvent
 * @memberOf dhx.ui.carousel
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.carousel.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.carousel.callEvent
 * @class dhx.ui.carousel
 * @method callEvent
 * @memberOf dhx.ui.carousel
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.carousel.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.carousel.define
 * @class dhx.ui.carousel
 * @method define
 * @memberOf dhx.ui.carousel
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.carousel.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.carousel.destructor
 * @class dhx.ui.carousel
 * @method destructor
 * @memberOf dhx.ui.carousel
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.carousel.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.carousel.detachEvent
 * @class dhx.ui.carousel
 * @method detachEvent
 * @memberOf dhx.ui.carousel
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.carousel.detachEvent = function(id) {};
/**
 * some unknown method
 * @id dhx.ui.carousel.first
 * @class dhx.ui.carousel
 * @method first
 * @memberOf dhx.ui.carousel
 * @example 
 */
 dhx.ui.carousel.first = function() {};
/**
 * returns id of the currently selected item
 * @id dhx.ui.carousel.getActive
 * @class dhx.ui.carousel
 * @method getActive
 * @memberOf dhx.ui.carousel
 * @example 
 */
 dhx.ui.carousel.getActive = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.carousel.getNode
 * @class dhx.ui.carousel
 * @method getNode
 * @memberOf dhx.ui.carousel
 * @example 
 */
 dhx.ui.carousel.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.carousel.getParent
 * @class dhx.ui.carousel
 * @method getParent
 * @memberOf dhx.ui.carousel
 * @example 
 */
 dhx.ui.carousel.getParent = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.carousel.hasEvent
 * @class dhx.ui.carousel
 * @method hasEvent
 * @memberOf dhx.ui.carousel
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.carousel.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.carousel.hide
 * @class dhx.ui.carousel
 * @method hide
 * @memberOf dhx.ui.carousel
 * @example $$('myform').hide();
 */
 dhx.ui.carousel.hide = function() {};
/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui.carousel.index
 * @class dhx.ui.carousel
 * @method index
 * @memberOf dhx.ui.carousel
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui.carousel.index = function(obj) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.carousel.isVisible
 * @class dhx.ui.carousel
 * @method isVisible
 * @memberOf dhx.ui.carousel
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.carousel.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.carousel.mapEvent
 * @class dhx.ui.carousel
 * @method mapEvent
 * @memberOf dhx.ui.carousel
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.carousel.mapEvent = function(map) {};
/**
 * rebuilds layout
 * @id dhx.ui.carousel.reconstruct
 * @class dhx.ui.carousel
 * @method reconstruct
 * @memberOf dhx.ui.carousel
 * @example 
 */
 dhx.ui.carousel.reconstruct = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.carousel.resize
 * @class dhx.ui.carousel
 * @method resize
 * @memberOf dhx.ui.carousel
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.carousel.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.carousel.resizeChildren
 * @class dhx.ui.carousel
 * @method resizeChildren
 * @memberOf dhx.ui.carousel
 * @example 
 */
 dhx.ui.carousel.resizeChildren = function() {};
/**
 * scrolls carousel container to a certain position
 * @id dhx.ui.carousel.scrollTo
 * @class dhx.ui.carousel
 * @method scrollTo
 * @memberOf dhx.ui.carousel
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.carousel.scrollTo = function(x,y) {};
/**
 * makes view visible
 * @id dhx.ui.carousel.show
 * @class dhx.ui.carousel
 * @method show
 * @memberOf dhx.ui.carousel
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.carousel.show = function(animate_settings) {};
/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui.carousel.showBatch
 * @class dhx.ui.carousel
 * @method showBatch
 * @memberOf dhx.ui.carousel
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui.carousel.showBatch = function(name) {};
/**
 * enables event triggering
 * @id dhx.ui.carousel.unblockEvent
 * @class dhx.ui.carousel
 * @method unblockEvent
 * @memberOf dhx.ui.carousel
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.carousel.unblockEvent = function() {};


/**
*
* dhx.ui.chart object class.
* @id dhx.ui.chart
* @class dhx.ui.chart
* @constructor
* @alias dhx.ui.chart.prototype

 * @return {dhx.ui.chart}
 */


dhx.ui.chart.config = {

/**
 * the transparency of a chart item (a number between 0 and 1)
 * @id dhx.ui.chart.config.alpha
 * @type dimension
 * @property
 */
alpha: '',


/**
 * the width of bars
 * @id dhx.ui.chart.config.barWidth
 * @type dimension
 * @property
 */
barWidth: '',


/**
 * enables/disables bar border
 * @id dhx.ui.chart.config.border
 * @type boolean
 * @property
 */
border: '',


/**
 * a value from 0 to 1 that defines the slope angle of 3D pie (default value - 0.5)
 * @id dhx.ui.chart.config.cant
 * @type dimension
 * @property
 */
cant: '',


/**
 * a certain color or template that defines items colors
 * @id dhx.ui.chart.config.color
 * @type any
 * @property
 */
color: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.chart.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.chart.config.css
 * @type string
 * @property
 */
css: '',


/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui.chart.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',


/**
 * loaded data
 * @id dhx.ui.chart.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * custom DataStore object
 * @id dhx.ui.chart.config.datastore
 * @type object
 * @property
 */
datastore: '',


/**
 * type of loaded data
 * @id dhx.ui.chart.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * specifies a chart gradient (applicable to bar, pie charts)
 * @id dhx.ui.chart.config.gradient
 * @type any
 * @property
 */
gradient: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.chart.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * an object with settings for initial grouping
 * @id dhx.ui.chart.config.group
 * @type object
 * @property
 */
group: '',


/**
 * height of view
 * @id dhx.ui.chart.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.chart.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.chart.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * defines chart point presenting an item (applicable to line charts: &#039;line&#039; and &#039;spline&#039;)
 * @id dhx.ui.chart.config.item
 * @type object
 * @property
 */
item: '',


/**
 * property of pie charts that defines offset of sector labels from the pie edge (20 is default)
 * @id dhx.ui.chart.config.labelOffset
 * @type dimension
 * @property
 */
labelOffset: '',


/**
 * the template for items&#039; labels
 * @id dhx.ui.chart.config.label
 * @type any
 * @property
 */
label: '',


/**
 * defines chart legend
 * @id dhx.ui.chart.config.legend
 * @type object
 * @property
 */
legend: '',


/**
 * pie chart property that sets color for pie borders (#ffffff)
 * @id dhx.ui.chart.config.lineColor
 * @type string
 * @property
 */
lineColor: '',


/**
 * defines chart line (applicable to line charts:&#039;line&#039; and &#039;spline&#039;)
 * @id dhx.ui.chart.config.line
 * @type object
 * @property
 */
line: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.chart.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * bar chart property, sets scale origin
 * @id dhx.ui.chart.config.origin
 * @type dimension
 * @property
 */
origin: '',


/**
 * an object that defines padding of chart content
 * @id dhx.ui.chart.config.padding
 * @type object
 * @property
 */
padding: '',


/**
 * pie chart property, the template for the inner labels
 * @id dhx.ui.chart.config.pieInnerText
 * @type any
 * @property
 */
pieInnerText: '',


/**
 * the radius for the bar&#039;s rounding
 * @id dhx.ui.chart.config.radius
 * @type dimension
 * @property
 */
radius: '',


/**
 * unknown
 * @id dhx.ui.chart.config.scheme
 * @type unknown
 * @property
 */
scheme: '',


/**
 * the array of series configuration objects
 * @id dhx.ui.chart.config.series
 * @type object
 * @property
 */
series: '',


/**
 * enables/disables pie shadow
 * @id dhx.ui.chart.config.shadow
 * @type boolean
 * @property
 */
shadow: '',


/**
 * defines sorting settings
 * @id dhx.ui.chart.config.sort
 * @type object
 * @property
 */
sort: '',


/**
 * chart type
 * @id dhx.ui.chart.config.type
 * @type string
 * @property
 */
type: '',


/**
 * data url
 * @id dhx.ui.chart.config.url
 * @type string
 * @property
 */
url: '',


/**
 * the template for item values
 * @id dhx.ui.chart.config.value
 * @type any
 * @property
 */
value: '',


/**
 * width of view
 * @id dhx.ui.chart.config.width
 * @type dimension
 * @property
 */
width: '',


/**
 * defines the horizontal axis
 * @id dhx.ui.chart.config.xAxis
 * @type object
 * @property
 */
xAxis: '',


/**
 * defines the vertical axis
 * @id dhx.ui.chart.config.yAxis
 * @type object
 * @property
 */
yAxis: ''
};
		

/**
 * adds item to the store
 * @id dhx.ui.chart.add
 * @class dhx.ui.chart
 * @method add
 * @memberOf dhx.ui.chart
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui.chart.add = function(obj,index) {};
/**
 * adds the new chart series
 * @id dhx.ui.chart.addSeries
 * @class dhx.ui.chart
 * @method addSeries
 * @memberOf dhx.ui.chart
 * @param {Object} obj addSeries(obj)
 * @example 
 */
 dhx.ui.chart.addSeries = function(obj) {};
/**
 * 
 * @id dhx.ui.chart.adjust
 * @class dhx.ui.chart
 * @method adjust
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.chart.attachEvent
 * @class dhx.ui.chart
 * @method attachEvent
 * @memberOf dhx.ui.chart
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.chart.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.chart.bind
 * @class dhx.ui.chart
 * @method bind
 * @memberOf dhx.ui.chart
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.chart.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.chart.blockEvent
 * @class dhx.ui.chart
 * @method blockEvent
 * @memberOf dhx.ui.chart
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.chart.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.chart.callEvent
 * @class dhx.ui.chart
 * @method callEvent
 * @memberOf dhx.ui.chart
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.chart.callEvent = function(type,params) {};
/**
 * removes all items from the component
 * @id dhx.ui.chart.clearAll
 * @class dhx.ui.chart
 * @method clearAll
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.clearAll = function() {};
/**
 * clears canvas
 * @id dhx.ui.chart.clearCanvas
 * @class dhx.ui.chart
 * @method clearCanvas
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.clearCanvas = function() {};
/**
 * gets count of items
 * @id dhx.ui.chart.dataCount
 * @class dhx.ui.chart
 * @method dataCount
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.dataCount = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.chart.define
 * @class dhx.ui.chart
 * @method define
 * @memberOf dhx.ui.chart
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.chart.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.chart.destructor
 * @class dhx.ui.chart
 * @method destructor
 * @memberOf dhx.ui.chart
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.chart.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.chart.detachEvent
 * @class dhx.ui.chart
 * @method detachEvent
 * @memberOf dhx.ui.chart
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.chart.detachEvent = function(id) {};
/**
 * checks if the item with such ID exists
 * @id dhx.ui.chart.exists
 * @class dhx.ui.chart
 * @method exists
 * @memberOf dhx.ui.chart
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui.chart.exists = function(id) {};
/**
 * filters data
 * @id dhx.ui.chart.filter
 * @class dhx.ui.chart
 * @method filter
 * @memberOf dhx.ui.chart
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui.chart.filter = function(text,value,preserve) {};
/**
 * gets the ID of the first item
 * @id dhx.ui.chart.first
 * @class dhx.ui.chart
 * @method first
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.first = function() {};
/**
 * gets canvas
 * @id dhx.ui.chart.getCanvas
 * @class dhx.ui.chart
 * @method getCanvas
 * @memberOf dhx.ui.chart
 * @param {String} context getCanvas(context)
 * @example 
 */
 dhx.ui.chart.getCanvas = function(context) {};
/**
 * returns main html container of view
 * @id dhx.ui.chart.getNode
 * @class dhx.ui.chart
 * @method getNode
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.chart.getParent
 * @class dhx.ui.chart
 * @method getParent
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.getParent = function() {};
/**
 * groups data
 * @id dhx.ui.chart.group
 * @class dhx.ui.chart
 * @method group
 * @memberOf dhx.ui.chart
 * @param {String} config group(config,mode)
 * @param {String} mode Type: Method
 * @example 
 */
 dhx.ui.chart.group = function(config,mode) {};
/**
 * checks whether a component has an event
 * @id dhx.ui.chart.hasEvent
 * @class dhx.ui.chart
 * @method hasEvent
 * @memberOf dhx.ui.chart
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.chart.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.chart.hide
 * @class dhx.ui.chart
 * @method hide
 * @memberOf dhx.ui.chart
 * @example $$('myform').hide();
 */
 dhx.ui.chart.hide = function() {};
/**
 * gets the id of an item with taken index
 * @id dhx.ui.chart.idByIndex
 * @class dhx.ui.chart
 * @method idByIndex
 * @memberOf dhx.ui.chart
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui.chart.idByIndex = function(index) {};
/**
 * the index of the item in question
 * @id dhx.ui.chart.indexById
 * @class dhx.ui.chart
 * @method indexById
 * @memberOf dhx.ui.chart
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui.chart.indexById = function(id) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.chart.isVisible
 * @class dhx.ui.chart
 * @method isVisible
 * @memberOf dhx.ui.chart
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.chart.isVisible = function(base_id, prev_id) {};
/**
 * gets the object of a data item
 * @id dhx.ui.chart.item
 * @class dhx.ui.chart
 * @method item
 * @memberOf dhx.ui.chart
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui.chart.item = function(id) {};
/**
 * gets the id of the last item
 * @id dhx.ui.chart.last
 * @class dhx.ui.chart
 * @method last
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.last = function() {};
/**
 * loads values from external datasource
 * @id dhx.ui.chart.load
 * @class dhx.ui.chart
 * @method load
 * @memberOf dhx.ui.chart
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui.chart.load = function(url,call) {};
/**
 * some unknown method
 * @id dhx.ui.chart.loadNext
 * @class dhx.ui.chart
 * @method loadNext
 * @memberOf dhx.ui.chart
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui.chart.loadNext = function(count, start) {};
/**
 * routes events from one object to another
 * @id dhx.ui.chart.mapEvent
 * @class dhx.ui.chart
 * @method mapEvent
 * @memberOf dhx.ui.chart
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.chart.mapEvent = function(map) {};
/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui.chart.next
 * @class dhx.ui.chart
 * @method next
 * @memberOf dhx.ui.chart
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.chart.next = function(id,step) {};
/**
 * addes data from a datasource
 * @id dhx.ui.chart.parse
 * @class dhx.ui.chart
 * @method parse
 * @memberOf dhx.ui.chart
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui.chart.parse = function(data,type) {};
/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui.chart.previous
 * @class dhx.ui.chart
 * @method previous
 * @memberOf dhx.ui.chart
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.chart.previous = function(id,step) {};
/**
 * repaint the whole view or a certain item
 * @id dhx.ui.chart.refresh
 * @class dhx.ui.chart
 * @method refresh
 * @memberOf dhx.ui.chart
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui.chart.refresh = function(id) {};
/**
 * removes element from datastore
 * @id dhx.ui.chart.remove
 * @class dhx.ui.chart
 * @method remove
 * @memberOf dhx.ui.chart
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui.chart.remove = function(id) {};
/**
 * renders a chart
 * @id dhx.ui.chart.render
 * @class dhx.ui.chart
 * @method render
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.render = function() {};
/**
 * creates absolutely positioned container
 * @id dhx.ui.chart.renderText
 * @class dhx.ui.chart
 * @method renderText
 * @memberOf dhx.ui.chart
 * @param {String} x renderText(x,y,text,css,w)
 * @param {String} y Type: Method
 * @param {String} text File:
 * @param {String} css Implemented in: Canvas
 * @param {String} w Included in: chart
 * @example 
 */
 dhx.ui.chart.renderText = function(x,y,text,css,w) {};
/**
 * creates absolutely positioned container and then align it according to the 1st and 2nd parameters
 * @id dhx.ui.chart.renderTextAt
 * @class dhx.ui.chart
 * @method renderTextAt
 * @memberOf dhx.ui.chart
 * @param {String} valign renderTextAt(valign,align, x,y,t,c,w)
 * @param {String} align Type: Method
 * @param {String} x File:
 * @param {String} y Implemented in: Canvas
 * @param {String} t Included in: chart
 * @param {String} [c] valign - vertical align (optional)
 * @param {String} [w] align - horizontal align (optional)
 * @example 
 */
 dhx.ui.chart.renderTextAt = function(valign,align, x,y,t,c,w) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.chart.resize
 * @class dhx.ui.chart
 * @method resize
 * @memberOf dhx.ui.chart
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.chart.resize = function(force) {};
/**
 * serializes data to a json object
 * @id dhx.ui.chart.serialize
 * @class dhx.ui.chart
 * @method serialize
 * @memberOf dhx.ui.chart
 * @example 
 */
 dhx.ui.chart.serialize = function() {};
/**
 * makes view visible
 * @id dhx.ui.chart.show
 * @class dhx.ui.chart
 * @method show
 * @memberOf dhx.ui.chart
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.chart.show = function(animate_settings) {};
/**
 * sorts datastore
 * @id dhx.ui.chart.sort
 * @class dhx.ui.chart
 * @method sort
 * @memberOf dhx.ui.chart
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui.chart.sort = function(by, dir, as) {};
/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui.chart.sync
 * @class dhx.ui.chart
 * @method sync
 * @memberOf dhx.ui.chart
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui.chart.sync = function(source, filter, silent) {};
/**
 * enables event triggering
 * @id dhx.ui.chart.unblockEvent
 * @class dhx.ui.chart
 * @method unblockEvent
 * @memberOf dhx.ui.chart
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.chart.unblockEvent = function() {};
/**
 * ungroups data
 * @id dhx.ui.chart.ungroup
 * @class dhx.ui.chart
 * @method ungroup
 * @memberOf dhx.ui.chart
 * @param {String} mode ungroup(mode)
 * @example 
 */
 dhx.ui.chart.ungroup = function(mode) {};
/**
 * sets properties of the data item
 * @id dhx.ui.chart.update
 * @class dhx.ui.chart
 * @method update
 * @memberOf dhx.ui.chart
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui.chart.update = function(id,data) {};


/**
*
* dhx.ui.checkbox object class.
* @id dhx.ui.checkbox
* @class dhx.ui.checkbox
* @constructor
* @alias dhx.ui.checkbox.prototype

 * @return {dhx.ui.checkbox}
 */


dhx.ui.checkbox.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.checkbox.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.checkbox.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.checkbox.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.checkbox.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.checkbox.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.checkbox.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.checkbox.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * the text label of control
 * @id dhx.ui.checkbox.config.label
 * @type string
 * @property
 */
label: '',


/**
 * the minimum value of the control
 * @id dhx.ui.checkbox.config.min
 * @type dimension
 * @property
 */
min: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.checkbox.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.checkbox.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.checkbox.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * the step of the control (the difference between two successive values)
 * @id dhx.ui.checkbox.config.step
 * @type dimension
 * @property
 */
step: '',


/**
 * item template
 * @id dhx.ui.checkbox.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.checkbox.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.checkbox.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.checkbox.adjust
 * @class dhx.ui.checkbox
 * @method adjust
 * @memberOf dhx.ui.checkbox
 * @example 
 */
 dhx.ui.checkbox.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.checkbox.attachEvent
 * @class dhx.ui.checkbox
 * @method attachEvent
 * @memberOf dhx.ui.checkbox
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.checkbox.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.checkbox.bind
 * @class dhx.ui.checkbox
 * @method bind
 * @memberOf dhx.ui.checkbox
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.checkbox.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.checkbox.blockEvent
 * @class dhx.ui.checkbox
 * @method blockEvent
 * @memberOf dhx.ui.checkbox
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.checkbox.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.checkbox.callEvent
 * @class dhx.ui.checkbox
 * @method callEvent
 * @memberOf dhx.ui.checkbox
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.checkbox.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.checkbox.define
 * @class dhx.ui.checkbox
 * @method define
 * @memberOf dhx.ui.checkbox
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.checkbox.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.checkbox.destructor
 * @class dhx.ui.checkbox
 * @method destructor
 * @memberOf dhx.ui.checkbox
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.checkbox.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.checkbox.detachEvent
 * @class dhx.ui.checkbox
 * @method detachEvent
 * @memberOf dhx.ui.checkbox
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.checkbox.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.checkbox.focus
 * @class dhx.ui.checkbox
 * @method focus
 * @memberOf dhx.ui.checkbox
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.checkbox.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.checkbox.getInput
 * @class dhx.ui.checkbox
 * @method getInput
 * @memberOf dhx.ui.checkbox
 * @example 
 */
 dhx.ui.checkbox.getInput = function() {};
/**
 * returns text label of the control
 * @id dhx.ui.checkbox.getLabel
 * @class dhx.ui.checkbox
 * @method getLabel
 * @memberOf dhx.ui.checkbox
 * @example 
 */
 dhx.ui.checkbox.getLabel = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.checkbox.getNode
 * @class dhx.ui.checkbox
 * @method getNode
 * @memberOf dhx.ui.checkbox
 * @example 
 */
 dhx.ui.checkbox.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.checkbox.getParent
 * @class dhx.ui.checkbox
 * @method getParent
 * @memberOf dhx.ui.checkbox
 * @example 
 */
 dhx.ui.checkbox.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.checkbox.getValue
 * @class dhx.ui.checkbox
 * @method getValue
 * @memberOf dhx.ui.checkbox
 * @example 
 */
 dhx.ui.checkbox.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.checkbox.hasEvent
 * @class dhx.ui.checkbox
 * @method hasEvent
 * @memberOf dhx.ui.checkbox
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.checkbox.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.checkbox.hide
 * @class dhx.ui.checkbox
 * @method hide
 * @memberOf dhx.ui.checkbox
 * @example $$('myform').hide();
 */
 dhx.ui.checkbox.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.checkbox.isVisible
 * @class dhx.ui.checkbox
 * @method isVisible
 * @memberOf dhx.ui.checkbox
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.checkbox.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.checkbox.mapEvent
 * @class dhx.ui.checkbox
 * @method mapEvent
 * @memberOf dhx.ui.checkbox
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.checkbox.mapEvent = function(map) {};
/**
 * sets the next value of the control
 * @id dhx.ui.checkbox.next
 * @class dhx.ui.checkbox
 * @method next
 * @memberOf dhx.ui.checkbox
 * @param {String} step next(step, min, max)
 * @param {String} min Type: Method
 * @param {String} max File:
 * @example 
 */
 dhx.ui.checkbox.next = function(step, min, max) {};
/**
 * sets the previous value of the control
 * @id dhx.ui.checkbox.prev
 * @class dhx.ui.checkbox
 * @method prev
 * @memberOf dhx.ui.checkbox
 * @param {String} step prev(step, min, max)
 * @param {String} min Type: Method
 * @param {String} max File:
 * @example 
 */
 dhx.ui.checkbox.prev = function(step, min, max) {};
/**
 * repaints input
 * @id dhx.ui.checkbox.refresh
 * @class dhx.ui.checkbox
 * @method refresh
 * @memberOf dhx.ui.checkbox
 * @example 
 */
 dhx.ui.checkbox.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.checkbox.render
 * @class dhx.ui.checkbox
 * @method render
 * @memberOf dhx.ui.checkbox
 * @example 
 */
 dhx.ui.checkbox.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.checkbox.resize
 * @class dhx.ui.checkbox
 * @method resize
 * @memberOf dhx.ui.checkbox
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.checkbox.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.checkbox.setValue
 * @class dhx.ui.checkbox
 * @method setValue
 * @memberOf dhx.ui.checkbox
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.checkbox.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.checkbox.show
 * @class dhx.ui.checkbox
 * @method show
 * @memberOf dhx.ui.checkbox
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.checkbox.show = function(animate_settings) {};
/**
 * swiches states of the control, i.e. true to false and vice-versa
 * @id dhx.ui.checkbox.toggle
 * @class dhx.ui.checkbox
 * @method toggle
 * @memberOf dhx.ui.checkbox
 * @example 
 */
 dhx.ui.checkbox.toggle = function() {};
/**
 * enables event triggering
 * @id dhx.ui.checkbox.unblockEvent
 * @class dhx.ui.checkbox
 * @method unblockEvent
 * @memberOf dhx.ui.checkbox
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.checkbox.unblockEvent = function() {};


/**
*
* dhx.ui.combo object class.
* @id dhx.ui.combo
* @class dhx.ui.combo
* @constructor
* @alias dhx.ui.combo.prototype

 * @return {dhx.ui.combo}
 */


dhx.ui.combo.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.combo.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.combo.config.css
 * @type string
 * @property
 */
css: '',


/**
 * unknown
 * @id dhx.ui.combo.config.filter
 * @type unknown
 * @property
 */
filter: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.combo.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.combo.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.combo.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * unknown
 * @id dhx.ui.combo.config.iconCss
 * @type unknown
 * @property
 */
iconCss: '',


/**
 * unknown
 * @id dhx.ui.combo.config.iconWidth
 * @type unknown
 * @property
 */
iconWidth: '',


/**
 * unknown
 * @id dhx.ui.combo.config.icon
 * @type unknown
 * @property
 */
icon: '',


/**
 * view id
 * @id dhx.ui.combo.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.combo.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.combo.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.combo.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * defines select options of control
 * @id dhx.ui.combo.config.options
 * @type object
 * @property
 */
options: '',


/**
 * unknown
 * @id dhx.ui.combo.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.combo.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.combo.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.combo.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.combo.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.combo.adjust
 * @class dhx.ui.combo
 * @method adjust
 * @memberOf dhx.ui.combo
 * @example 
 */
 dhx.ui.combo.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.combo.attachEvent
 * @class dhx.ui.combo
 * @method attachEvent
 * @memberOf dhx.ui.combo
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.combo.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.combo.bind
 * @class dhx.ui.combo
 * @method bind
 * @memberOf dhx.ui.combo
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.combo.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.combo.blockEvent
 * @class dhx.ui.combo
 * @method blockEvent
 * @memberOf dhx.ui.combo
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.combo.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.combo.callEvent
 * @class dhx.ui.combo
 * @method callEvent
 * @memberOf dhx.ui.combo
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.combo.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.combo.define
 * @class dhx.ui.combo
 * @method define
 * @memberOf dhx.ui.combo
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.combo.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.combo.destructor
 * @class dhx.ui.combo
 * @method destructor
 * @memberOf dhx.ui.combo
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.combo.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.combo.detachEvent
 * @class dhx.ui.combo
 * @method detachEvent
 * @memberOf dhx.ui.combo
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.combo.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.combo.focus
 * @class dhx.ui.combo
 * @method focus
 * @memberOf dhx.ui.combo
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.combo.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.combo.getInput
 * @class dhx.ui.combo
 * @method getInput
 * @memberOf dhx.ui.combo
 * @example 
 */
 dhx.ui.combo.getInput = function() {};
/**
 * some unknown method
 * @id dhx.ui.combo.getList
 * @class dhx.ui.combo
 * @method getList
 * @memberOf dhx.ui.combo
 * @example 
 */
 dhx.ui.combo.getList = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.combo.getNode
 * @class dhx.ui.combo
 * @method getNode
 * @memberOf dhx.ui.combo
 * @example 
 */
 dhx.ui.combo.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.combo.getParent
 * @class dhx.ui.combo
 * @method getParent
 * @memberOf dhx.ui.combo
 * @example 
 */
 dhx.ui.combo.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.combo.getValue
 * @class dhx.ui.combo
 * @method getValue
 * @memberOf dhx.ui.combo
 * @example 
 */
 dhx.ui.combo.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.combo.hasEvent
 * @class dhx.ui.combo
 * @method hasEvent
 * @memberOf dhx.ui.combo
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.combo.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.combo.hide
 * @class dhx.ui.combo
 * @method hide
 * @memberOf dhx.ui.combo
 * @example $$('myform').hide();
 */
 dhx.ui.combo.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.combo.isVisible
 * @class dhx.ui.combo
 * @method isVisible
 * @memberOf dhx.ui.combo
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.combo.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.combo.mapEvent
 * @class dhx.ui.combo
 * @method mapEvent
 * @memberOf dhx.ui.combo
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.combo.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.combo.refresh
 * @class dhx.ui.combo
 * @method refresh
 * @memberOf dhx.ui.combo
 * @example 
 */
 dhx.ui.combo.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.combo.render
 * @class dhx.ui.combo
 * @method render
 * @memberOf dhx.ui.combo
 * @example 
 */
 dhx.ui.combo.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.combo.resize
 * @class dhx.ui.combo
 * @method resize
 * @memberOf dhx.ui.combo
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.combo.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.combo.setValue
 * @class dhx.ui.combo
 * @method setValue
 * @memberOf dhx.ui.combo
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.combo.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.combo.show
 * @class dhx.ui.combo
 * @method show
 * @memberOf dhx.ui.combo
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.combo.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.combo.unblockEvent
 * @class dhx.ui.combo
 * @method unblockEvent
 * @memberOf dhx.ui.combo
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.combo.unblockEvent = function() {};


/**
*
* dhx.ui.counter object class.
* @id dhx.ui.counter
* @class dhx.ui.counter
* @constructor
* @alias dhx.ui.counter.prototype

 * @return {dhx.ui.counter}
 */


dhx.ui.counter.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.counter.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.counter.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.counter.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.counter.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.counter.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.counter.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.counter.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.counter.config.label
 * @type string
 * @property
 */
label: '',


/**
 * the minimum value of the control
 * @id dhx.ui.counter.config.min
 * @type dimension
 * @property
 */
min: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.counter.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.counter.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.counter.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * the step of the control (the difference between two successive values)
 * @id dhx.ui.counter.config.step
 * @type dimension
 * @property
 */
step: '',


/**
 * item template
 * @id dhx.ui.counter.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.counter.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.counter.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.counter.adjust
 * @class dhx.ui.counter
 * @method adjust
 * @memberOf dhx.ui.counter
 * @example 
 */
 dhx.ui.counter.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.counter.attachEvent
 * @class dhx.ui.counter
 * @method attachEvent
 * @memberOf dhx.ui.counter
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.counter.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.counter.bind
 * @class dhx.ui.counter
 * @method bind
 * @memberOf dhx.ui.counter
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.counter.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.counter.blockEvent
 * @class dhx.ui.counter
 * @method blockEvent
 * @memberOf dhx.ui.counter
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.counter.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.counter.callEvent
 * @class dhx.ui.counter
 * @method callEvent
 * @memberOf dhx.ui.counter
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.counter.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.counter.define
 * @class dhx.ui.counter
 * @method define
 * @memberOf dhx.ui.counter
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.counter.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.counter.destructor
 * @class dhx.ui.counter
 * @method destructor
 * @memberOf dhx.ui.counter
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.counter.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.counter.detachEvent
 * @class dhx.ui.counter
 * @method detachEvent
 * @memberOf dhx.ui.counter
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.counter.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.counter.focus
 * @class dhx.ui.counter
 * @method focus
 * @memberOf dhx.ui.counter
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.counter.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.counter.getInput
 * @class dhx.ui.counter
 * @method getInput
 * @memberOf dhx.ui.counter
 * @example 
 */
 dhx.ui.counter.getInput = function() {};
/**
 * returns text label of the control
 * @id dhx.ui.counter.getLabel
 * @class dhx.ui.counter
 * @method getLabel
 * @memberOf dhx.ui.counter
 * @example 
 */
 dhx.ui.counter.getLabel = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.counter.getNode
 * @class dhx.ui.counter
 * @method getNode
 * @memberOf dhx.ui.counter
 * @example 
 */
 dhx.ui.counter.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.counter.getParent
 * @class dhx.ui.counter
 * @method getParent
 * @memberOf dhx.ui.counter
 * @example 
 */
 dhx.ui.counter.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.counter.getValue
 * @class dhx.ui.counter
 * @method getValue
 * @memberOf dhx.ui.counter
 * @example 
 */
 dhx.ui.counter.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.counter.hasEvent
 * @class dhx.ui.counter
 * @method hasEvent
 * @memberOf dhx.ui.counter
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.counter.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.counter.hide
 * @class dhx.ui.counter
 * @method hide
 * @memberOf dhx.ui.counter
 * @example $$('myform').hide();
 */
 dhx.ui.counter.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.counter.isVisible
 * @class dhx.ui.counter
 * @method isVisible
 * @memberOf dhx.ui.counter
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.counter.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.counter.mapEvent
 * @class dhx.ui.counter
 * @method mapEvent
 * @memberOf dhx.ui.counter
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.counter.mapEvent = function(map) {};
/**
 * sets the next value of the control
 * @id dhx.ui.counter.next
 * @class dhx.ui.counter
 * @method next
 * @memberOf dhx.ui.counter
 * @param {String} step next(step, min, max)
 * @param {String} min Type: Method
 * @param {String} max File:
 * @example 
 */
 dhx.ui.counter.next = function(step, min, max) {};
/**
 * sets the previous value of the control
 * @id dhx.ui.counter.prev
 * @class dhx.ui.counter
 * @method prev
 * @memberOf dhx.ui.counter
 * @param {String} step prev(step, min, max)
 * @param {String} min Type: Method
 * @param {String} max File:
 * @example 
 */
 dhx.ui.counter.prev = function(step, min, max) {};
/**
 * repaints input
 * @id dhx.ui.counter.refresh
 * @class dhx.ui.counter
 * @method refresh
 * @memberOf dhx.ui.counter
 * @example 
 */
 dhx.ui.counter.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.counter.render
 * @class dhx.ui.counter
 * @method render
 * @memberOf dhx.ui.counter
 * @example 
 */
 dhx.ui.counter.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.counter.resize
 * @class dhx.ui.counter
 * @method resize
 * @memberOf dhx.ui.counter
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.counter.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.counter.setValue
 * @class dhx.ui.counter
 * @method setValue
 * @memberOf dhx.ui.counter
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.counter.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.counter.show
 * @class dhx.ui.counter
 * @method show
 * @memberOf dhx.ui.counter
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.counter.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.counter.unblockEvent
 * @class dhx.ui.counter
 * @method unblockEvent
 * @memberOf dhx.ui.counter
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.counter.unblockEvent = function() {};


/**
*
* dhx.ui.dataview object class.
* @id dhx.ui.dataview
* @class dhx.ui.dataview
* @constructor
* @alias dhx.ui.dataview.prototype

 * @return {dhx.ui.dataview}
 */


dhx.ui.dataview.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.dataview.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.dataview.config.css
 * @type string
 * @property
 */
css: '',


/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui.dataview.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',


/**
 * loaded data
 * @id dhx.ui.dataview.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * custom DataStore object
 * @id dhx.ui.dataview.config.datastore
 * @type object
 * @property
 */
datastore: '',


/**
 * type of loaded data
 * @id dhx.ui.dataview.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * enables/disables item editing
 * @id dhx.ui.dataview.config.edit
 * @type boolean
 * @property
 */
edit: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.dataview.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.dataview.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.dataview.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.dataview.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.dataview.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.dataview.config.scheme
 * @type unknown
 * @property
 */
scheme: '',


/**
 * enables/disables scroll
 * @id dhx.ui.dataview.config.scroll
 * @type boolean
 * @property
 */
scroll: '',


/**
 * enables/disables item selection or multiselection in grouplist
 * @id dhx.ui.dataview.config.select
 * @type boolean or &#039;multiselect&#039;
 * @property
 */
select: '',


/**
 * item template
 * @id dhx.ui.dataview.config.template
 * @type any
 * @property
 */
template: '',


/**
 * object that specifies items list presentation
 * @id dhx.ui.dataview.config.type
 * @type object
 * @property
 */
type: '',


/**
 * data url
 * @id dhx.ui.dataview.config.url
 * @type string
 * @property
 */
url: '',


/**
 * width of view
 * @id dhx.ui.dataview.config.width
 * @type dimension
 * @property
 */
width: '',


/**
 * adjusts view width to display the defined number of items in a row
 * @id dhx.ui.dataview.config.xCount
 * @type dimension
 * @property
 */
xCount: '',


/**
 * adjusts view height to display the defined number of items in a column
 * @id dhx.ui.dataview.config.yCount
 * @type dimension
 * @property
 */
yCount: ''
};
		

/**
 * adds item to the store
 * @id dhx.ui.dataview.add
 * @class dhx.ui.dataview
 * @method add
 * @memberOf dhx.ui.dataview
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui.dataview.add = function(obj,index) {};
/**
 * 
 * @id dhx.ui.dataview.adjust
 * @class dhx.ui.dataview
 * @method adjust
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.dataview.attachEvent
 * @class dhx.ui.dataview
 * @method attachEvent
 * @memberOf dhx.ui.dataview
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.dataview.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.dataview.bind
 * @class dhx.ui.dataview
 * @method bind
 * @memberOf dhx.ui.dataview
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.dataview.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.dataview.blockEvent
 * @class dhx.ui.dataview
 * @method blockEvent
 * @memberOf dhx.ui.dataview
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.dataview.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.dataview.callEvent
 * @class dhx.ui.dataview
 * @method callEvent
 * @memberOf dhx.ui.dataview
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.dataview.callEvent = function(type,params) {};
/**
 * removes all items from the component
 * @id dhx.ui.dataview.clearAll
 * @class dhx.ui.dataview
 * @method clearAll
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.clearAll = function() {};
/**
 * applies new type settings
 * @id dhx.ui.dataview.customize
 * @class dhx.ui.dataview
 * @method customize
 * @memberOf dhx.ui.dataview
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui.dataview.customize = function(obj) {};
/**
 * gets count of items
 * @id dhx.ui.dataview.dataCount
 * @class dhx.ui.dataview
 * @method dataCount
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.dataCount = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.dataview.define
 * @class dhx.ui.dataview
 * @method define
 * @memberOf dhx.ui.dataview
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.dataview.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.dataview.destructor
 * @class dhx.ui.dataview
 * @method destructor
 * @memberOf dhx.ui.dataview
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.dataview.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.dataview.detachEvent
 * @class dhx.ui.dataview
 * @method detachEvent
 * @memberOf dhx.ui.dataview
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.dataview.detachEvent = function(id) {};
/**
 * renders drag-n-drop marker
 * @id dhx.ui.dataview.dragMarker
 * @class dhx.ui.dataview
 * @method dragMarker
 * @memberOf dhx.ui.dataview
 * @param {String} context dragMarker(context,ev)
 * @param {String} ev Type: Method
 * @example 
 */
 dhx.ui.dataview.dragMarker = function(context,ev) {};
/**
 * switches item to the edit state
 * @id dhx.ui.dataview.edit
 * @class dhx.ui.dataview
 * @method edit
 * @memberOf dhx.ui.dataview
 * @param {String} id edit(id)
 * @example 
 */
 dhx.ui.dataview.edit = function(id) {};
/**
 * checks if the item with such ID exists
 * @id dhx.ui.dataview.exists
 * @class dhx.ui.dataview
 * @method exists
 * @memberOf dhx.ui.dataview
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui.dataview.exists = function(id) {};
/**
 * filters data
 * @id dhx.ui.dataview.filter
 * @class dhx.ui.dataview
 * @method filter
 * @memberOf dhx.ui.dataview
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui.dataview.filter = function(text,value,preserve) {};
/**
 * gets the ID of the first item
 * @id dhx.ui.dataview.first
 * @class dhx.ui.dataview
 * @method first
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.first = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.dataview.getNode
 * @class dhx.ui.dataview
 * @method getNode
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.dataview.getParent
 * @class dhx.ui.dataview
 * @method getParent
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.getParent = function() {};
/**
 * returns ID of selected item(s)
 * @id dhx.ui.dataview.getSelected
 * @class dhx.ui.dataview
 * @method getSelected
 * @memberOf dhx.ui.dataview
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui.dataview.getSelected = function(as_array) {};
/**
 * checks whether a component has an event
 * @id dhx.ui.dataview.hasEvent
 * @class dhx.ui.dataview
 * @method hasEvent
 * @memberOf dhx.ui.dataview
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.dataview.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.dataview.hide
 * @class dhx.ui.dataview
 * @method hide
 * @memberOf dhx.ui.dataview
 * @example $$('myform').hide();
 */
 dhx.ui.dataview.hide = function() {};
/**
 * gets the id of an item with taken index
 * @id dhx.ui.dataview.idByIndex
 * @class dhx.ui.dataview
 * @method idByIndex
 * @memberOf dhx.ui.dataview
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui.dataview.idByIndex = function(index) {};
/**
 * the index of the item in question
 * @id dhx.ui.dataview.indexById
 * @class dhx.ui.dataview
 * @method indexById
 * @memberOf dhx.ui.dataview
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui.dataview.indexById = function(id) {};
/**
 * returns id of item in edit state, or null if none
 * @id dhx.ui.dataview.isEdit
 * @class dhx.ui.dataview
 * @method isEdit
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.isEdit = function() {};
/**
 * checks if item is selected or not
 * @id dhx.ui.dataview.isSelected
 * @class dhx.ui.dataview
 * @method isSelected
 * @memberOf dhx.ui.dataview
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui.dataview.isSelected = function(id) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.dataview.isVisible
 * @class dhx.ui.dataview
 * @method isVisible
 * @memberOf dhx.ui.dataview
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.dataview.isVisible = function(base_id, prev_id) {};
/**
 * gets the object of a data item
 * @id dhx.ui.dataview.item
 * @class dhx.ui.dataview
 * @method item
 * @memberOf dhx.ui.dataview
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui.dataview.item = function(id) {};
/**
 * gets the id of the last item
 * @id dhx.ui.dataview.last
 * @class dhx.ui.dataview
 * @method last
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.last = function() {};
/**
 * loads values from external datasource
 * @id dhx.ui.dataview.load
 * @class dhx.ui.dataview
 * @method load
 * @memberOf dhx.ui.dataview
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui.dataview.load = function(url,call) {};
/**
 * some unknown method
 * @id dhx.ui.dataview.loadNext
 * @class dhx.ui.dataview
 * @method loadNext
 * @memberOf dhx.ui.dataview
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui.dataview.loadNext = function(count, start) {};
/**
 * 
 * @id dhx.ui.dataview.locate
 * @class dhx.ui.dataview
 * @method locate
 * @memberOf dhx.ui.dataview
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui.dataview.locate = function(e) {};
/**
 * routes events from one object to another
 * @id dhx.ui.dataview.mapEvent
 * @class dhx.ui.dataview
 * @method mapEvent
 * @memberOf dhx.ui.dataview
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.dataview.mapEvent = function(map) {};
/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui.dataview.next
 * @class dhx.ui.dataview
 * @method next
 * @memberOf dhx.ui.dataview
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.dataview.next = function(id,step) {};
/**
 * addes data from a datasource
 * @id dhx.ui.dataview.parse
 * @class dhx.ui.dataview
 * @method parse
 * @memberOf dhx.ui.dataview
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui.dataview.parse = function(data,type) {};
/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui.dataview.previous
 * @class dhx.ui.dataview
 * @method previous
 * @memberOf dhx.ui.dataview
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.dataview.previous = function(id,step) {};
/**
 * repaint the whole view or a certain item
 * @id dhx.ui.dataview.refresh
 * @class dhx.ui.dataview
 * @method refresh
 * @memberOf dhx.ui.dataview
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui.dataview.refresh = function(id) {};
/**
 * removes element from datastore
 * @id dhx.ui.dataview.remove
 * @class dhx.ui.dataview
 * @method remove
 * @memberOf dhx.ui.dataview
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui.dataview.remove = function(id) {};
/**
 * renders a current state of an item or the whole component
 * @id dhx.ui.dataview.render
 * @class dhx.ui.dataview
 * @method render
 * @memberOf dhx.ui.dataview
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui.dataview.render = function(id,data,type) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.dataview.resize
 * @class dhx.ui.dataview
 * @method resize
 * @memberOf dhx.ui.dataview
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.dataview.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.dataview.scrollState
 * @class dhx.ui.dataview
 * @method scrollState
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.ui.dataview.scrollTo
 * @class dhx.ui.dataview
 * @method scrollTo
 * @memberOf dhx.ui.dataview
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.dataview.scrollTo = function(x,y) {};
/**
 * selects item
 * @id dhx.ui.dataview.select
 * @class dhx.ui.dataview
 * @method select
 * @memberOf dhx.ui.dataview
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui.dataview.select = function(id,non_modal,continue_old) {};
/**
 * selects all items
 * @id dhx.ui.dataview.selectAll
 * @class dhx.ui.dataview
 * @method selectAll
 * @memberOf dhx.ui.dataview
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui.dataview.selectAll = function(from,to) {};
/**
 * serializes data to a json object
 * @id dhx.ui.dataview.serialize
 * @class dhx.ui.dataview
 * @method serialize
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.serialize = function() {};
/**
 * makes view visible
 * @id dhx.ui.dataview.show
 * @class dhx.ui.dataview
 * @method show
 * @memberOf dhx.ui.dataview
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.dataview.show = function(animate_settings) {};
/**
 * shows the specified item
 * @id dhx.ui.dataview.showItem
 * @class dhx.ui.dataview
 * @method showItem
 * @memberOf dhx.ui.dataview
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui.dataview.showItem = function(id) {};
/**
 * sorts datastore
 * @id dhx.ui.dataview.sort
 * @class dhx.ui.dataview
 * @method sort
 * @memberOf dhx.ui.dataview
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui.dataview.sort = function(by, dir, as) {};
/**
 * switches any item in edit state, back to normal
 * @id dhx.ui.dataview.stopEdit
 * @class dhx.ui.dataview
 * @method stopEdit
 * @memberOf dhx.ui.dataview
 * @param {String} mode stopEdit(mode, if_not_id)
 * @param {String} if_not_id Type: Method
 * @example 
 */
 dhx.ui.dataview.stopEdit = function(mode, if_not_id) {};
/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui.dataview.sync
 * @class dhx.ui.dataview
 * @method sync
 * @memberOf dhx.ui.dataview
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui.dataview.sync = function(source, filter, silent) {};
/**
 * enables event triggering
 * @id dhx.ui.dataview.unblockEvent
 * @class dhx.ui.dataview
 * @method unblockEvent
 * @memberOf dhx.ui.dataview
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.dataview.unblockEvent = function() {};
/**
 * unselects item
 * @id dhx.ui.dataview.unselect
 * @class dhx.ui.dataview
 * @method unselect
 * @memberOf dhx.ui.dataview
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui.dataview.unselect = function(id) {};
/**
 * unselects all items
 * @id dhx.ui.dataview.unselectAll
 * @class dhx.ui.dataview
 * @method unselectAll
 * @memberOf dhx.ui.dataview
 * @example 
 */
 dhx.ui.dataview.unselectAll = function() {};
/**
 * sets properties of the data item
 * @id dhx.ui.dataview.update
 * @class dhx.ui.dataview
 * @method update
 * @memberOf dhx.ui.dataview
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui.dataview.update = function(id,data) {};


/**
*
* dhx.ui.datepicker object class.
* @id dhx.ui.datepicker
* @class dhx.ui.datepicker
* @constructor
* @alias dhx.ui.datepicker.prototype

 * @return {dhx.ui.datepicker}
 */


dhx.ui.datepicker.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.datepicker.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.datepicker.config.css
 * @type string
 * @property
 */
css: '',


/**
 * date format (%Y-%m-%d)
 * @id dhx.ui.datepicker.config.dateFormat
 * @type string
 * @property
 */
dateFormat: '',


/**
 * unknown
 * @id dhx.ui.datepicker.config.externalDateFormat
 * @type unknown
 * @property
 */
externalDateFormat: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.datepicker.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.datepicker.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.datepicker.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * unknown
 * @id dhx.ui.datepicker.config.iconCss
 * @type unknown
 * @property
 */
iconCss: '',


/**
 * unknown
 * @id dhx.ui.datepicker.config.iconWidth
 * @type unknown
 * @property
 */
iconWidth: '',


/**
 * unknown
 * @id dhx.ui.datepicker.config.icon
 * @type unknown
 * @property
 */
icon: '',


/**
 * view id
 * @id dhx.ui.datepicker.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.datepicker.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.datepicker.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.datepicker.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * defines select options of control
 * @id dhx.ui.datepicker.config.options
 * @type object
 * @property
 */
options: '',


/**
 * unknown
 * @id dhx.ui.datepicker.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.datepicker.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * unknown
 * @id dhx.ui.datepicker.config.stringResult
 * @type unknown
 * @property
 */
stringResult: '',


/**
 * item template
 * @id dhx.ui.datepicker.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.datepicker.config.type
 * @type string
 * @property
 */
type: '',


/**
 * initial value of the control
 * @id dhx.ui.datepicker.config.value
 * @type string
 * @property
 */
value: '',


/**
 * width of view
 * @id dhx.ui.datepicker.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.datepicker.adjust
 * @class dhx.ui.datepicker
 * @method adjust
 * @memberOf dhx.ui.datepicker
 * @example 
 */
 dhx.ui.datepicker.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.datepicker.attachEvent
 * @class dhx.ui.datepicker
 * @method attachEvent
 * @memberOf dhx.ui.datepicker
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.datepicker.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.datepicker.bind
 * @class dhx.ui.datepicker
 * @method bind
 * @memberOf dhx.ui.datepicker
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.datepicker.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.datepicker.blockEvent
 * @class dhx.ui.datepicker
 * @method blockEvent
 * @memberOf dhx.ui.datepicker
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.datepicker.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.datepicker.callEvent
 * @class dhx.ui.datepicker
 * @method callEvent
 * @memberOf dhx.ui.datepicker
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.datepicker.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.datepicker.define
 * @class dhx.ui.datepicker
 * @method define
 * @memberOf dhx.ui.datepicker
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.datepicker.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.datepicker.destructor
 * @class dhx.ui.datepicker
 * @method destructor
 * @memberOf dhx.ui.datepicker
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.datepicker.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.datepicker.detachEvent
 * @class dhx.ui.datepicker
 * @method detachEvent
 * @memberOf dhx.ui.datepicker
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.datepicker.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.datepicker.focus
 * @class dhx.ui.datepicker
 * @method focus
 * @memberOf dhx.ui.datepicker
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.datepicker.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.datepicker.getInput
 * @class dhx.ui.datepicker
 * @method getInput
 * @memberOf dhx.ui.datepicker
 * @example 
 */
 dhx.ui.datepicker.getInput = function() {};
/**
 * some unknown method
 * @id dhx.ui.datepicker.getList
 * @class dhx.ui.datepicker
 * @method getList
 * @memberOf dhx.ui.datepicker
 * @example 
 */
 dhx.ui.datepicker.getList = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.datepicker.getNode
 * @class dhx.ui.datepicker
 * @method getNode
 * @memberOf dhx.ui.datepicker
 * @example 
 */
 dhx.ui.datepicker.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.datepicker.getParent
 * @class dhx.ui.datepicker
 * @method getParent
 * @memberOf dhx.ui.datepicker
 * @example 
 */
 dhx.ui.datepicker.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.datepicker.getValue
 * @class dhx.ui.datepicker
 * @method getValue
 * @memberOf dhx.ui.datepicker
 * @example 
 */
 dhx.ui.datepicker.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.datepicker.hasEvent
 * @class dhx.ui.datepicker
 * @method hasEvent
 * @memberOf dhx.ui.datepicker
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.datepicker.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.datepicker.hide
 * @class dhx.ui.datepicker
 * @method hide
 * @memberOf dhx.ui.datepicker
 * @example $$('myform').hide();
 */
 dhx.ui.datepicker.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.datepicker.isVisible
 * @class dhx.ui.datepicker
 * @method isVisible
 * @memberOf dhx.ui.datepicker
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.datepicker.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.datepicker.mapEvent
 * @class dhx.ui.datepicker
 * @method mapEvent
 * @memberOf dhx.ui.datepicker
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.datepicker.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.datepicker.refresh
 * @class dhx.ui.datepicker
 * @method refresh
 * @memberOf dhx.ui.datepicker
 * @example 
 */
 dhx.ui.datepicker.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.datepicker.render
 * @class dhx.ui.datepicker
 * @method render
 * @memberOf dhx.ui.datepicker
 * @example 
 */
 dhx.ui.datepicker.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.datepicker.resize
 * @class dhx.ui.datepicker
 * @method resize
 * @memberOf dhx.ui.datepicker
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.datepicker.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.datepicker.setValue
 * @class dhx.ui.datepicker
 * @method setValue
 * @memberOf dhx.ui.datepicker
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.datepicker.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.datepicker.show
 * @class dhx.ui.datepicker
 * @method show
 * @memberOf dhx.ui.datepicker
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.datepicker.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.datepicker.unblockEvent
 * @class dhx.ui.datepicker
 * @method unblockEvent
 * @memberOf dhx.ui.datepicker
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.datepicker.unblockEvent = function() {};


/**
*
* dhx.ui.form object class.
* @id dhx.ui.form
* @class dhx.ui.form
* @constructor
* @alias dhx.ui.form.prototype

 * @return {dhx.ui.form}
 */


dhx.ui.form.config = {

/**
 * array of views arranged horizontally
 * @id dhx.ui.form.config.cols
 * @type object
 * @property
 */
cols: '',


/**
 * html container or its id where view needs being initialized
 * @id dhx.ui.form.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * class name for view container
 * @id dhx.ui.form.config.css
 * @type string
 * @property
 */
css: '',


/**
 * loaded data
 * @id dhx.ui.form.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * type of loaded data
 * @id dhx.ui.form.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * view gravity (1 by default)
 * @id dhx.ui.form.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * view height
 * @id dhx.ui.form.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.form.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.form.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.form.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * array of views arranged vertically
 * @id dhx.ui.form.config.rows
 * @type object
 * @property
 */
rows: '',


/**
 * enables/disables scroll
 * @id dhx.ui.form.config.scroll
 * @type boolean
 * @property
 */
scroll: '',


/**
 * the type of toolbar
 * @id dhx.ui.form.config.type
 * @type &#039;MainBar&#039; or &#039;SubBar&#039;
 * @property
 */
type: '',


/**
 * data url
 * @id dhx.ui.form.config.url
 * @type string
 * @property
 */
url: '',


/**
 * view width
 * @id dhx.ui.form.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.form.adjust
 * @class dhx.ui.form
 * @method adjust
 * @memberOf dhx.ui.form
 * @example 
 */
 dhx.ui.form.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.form.attachEvent
 * @class dhx.ui.form
 * @method attachEvent
 * @memberOf dhx.ui.form
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.form.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.form.bind
 * @class dhx.ui.form
 * @method bind
 * @memberOf dhx.ui.form
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.form.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.form.blockEvent
 * @class dhx.ui.form
 * @method blockEvent
 * @memberOf dhx.ui.form
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.form.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.form.callEvent
 * @class dhx.ui.form
 * @method callEvent
 * @memberOf dhx.ui.form
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.form.callEvent = function(type,params) {};
/**
 * clears values of all inputs ( resets them to the default values )
 * @id dhx.ui.form.clear
 * @class dhx.ui.form
 * @method clear
 * @memberOf dhx.ui.form
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", label: 'Clear form', click:"clear_form" }]
 * });
 * �
 * function clear_form(){
 * 	$$('myform').clear();
 * };
 */
 dhx.ui.form.clear = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.form.define
 * @class dhx.ui.form
 * @method define
 * @memberOf dhx.ui.form
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.form.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.form.destructor
 * @class dhx.ui.form
 * @method destructor
 * @memberOf dhx.ui.form
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.form.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.form.detachEvent
 * @class dhx.ui.form
 * @method detachEvent
 * @memberOf dhx.ui.form
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.form.detachEvent = function(id) {};
/**
 * some unknown method
 * @id dhx.ui.form.first
 * @class dhx.ui.form
 * @method first
 * @memberOf dhx.ui.form
 * @example 
 */
 dhx.ui.form.first = function() {};
/**
 * sets focus to an input
 * @id dhx.ui.form.focus
 * @class dhx.ui.form
 * @method focus
 * @memberOf dhx.ui.form
 * @param {String} name focus(name)
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('myform').focus("field_a");
 */
 dhx.ui.form.focus = function(name) {};
/**
 * returns main html container of view
 * @id dhx.ui.form.getNode
 * @class dhx.ui.form
 * @method getNode
 * @memberOf dhx.ui.form
 * @example 
 */
 dhx.ui.form.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.form.getParent
 * @class dhx.ui.form
 * @method getParent
 * @memberOf dhx.ui.form
 * @example 
 */
 dhx.ui.form.getParent = function() {};
/**
 * gets hash of data values
 * @id dhx.ui.form.getValues
 * @class dhx.ui.form
 * @method getValues
 * @memberOf dhx.ui.form
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'From', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'To', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", id:"button1", label: 'Show values', click:"get_form" }]
 * 	},
 * 	{ id:"log", template:function(obj){ return "<pre>"+JSON.stringify(obj).replace(/,/g,"\n,")+"</pre>"; }}]
 * });
 * �
 * function get_form(){
 * 	$$('log').parse($$('myform').getValues());
 * };
 */
 dhx.ui.form.getValues = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.form.hasEvent
 * @class dhx.ui.form
 * @method hasEvent
 * @memberOf dhx.ui.form
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.form.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.form.hide
 * @class dhx.ui.form
 * @method hide
 * @memberOf dhx.ui.form
 * @example $$('myform').hide();
 */
 dhx.ui.form.hide = function() {};
/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui.form.index
 * @class dhx.ui.form
 * @method index
 * @memberOf dhx.ui.form
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui.form.index = function(obj) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.form.isVisible
 * @class dhx.ui.form
 * @method isVisible
 * @memberOf dhx.ui.form
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.form.isVisible = function(base_id, prev_id) {};
/**
 * loads values from external datasource
 * @id dhx.ui.form.load
 * @class dhx.ui.form
 * @method load
 * @memberOf dhx.ui.form
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui.form.load = function(url,call) {};
/**
 * routes events from one object to another
 * @id dhx.ui.form.mapEvent
 * @class dhx.ui.form
 * @method mapEvent
 * @memberOf dhx.ui.form
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.form.mapEvent = function(map) {};
/**
 * addes data from a datasource
 * @id dhx.ui.form.parse
 * @class dhx.ui.form
 * @method parse
 * @memberOf dhx.ui.form
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui.form.parse = function(data,type) {};
/**
 * rebuilds layout
 * @id dhx.ui.form.reconstruct
 * @class dhx.ui.form
 * @method reconstruct
 * @memberOf dhx.ui.form
 * @example 
 */
 dhx.ui.form.reconstruct = function() {};
/**
 * repaints the whole view or a certain item
 * @id dhx.ui.form.refresh
 * @class dhx.ui.form
 * @method refresh
 * @memberOf dhx.ui.form
 * @example 
 */
 dhx.ui.form.refresh = function() {};
/**
 * renders a current state of an item or the whole component
 * @id dhx.ui.form.render
 * @class dhx.ui.form
 * @method render
 * @memberOf dhx.ui.form
 * @example 
 */
 dhx.ui.form.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.form.resize
 * @class dhx.ui.form
 * @method resize
 * @memberOf dhx.ui.form
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.form.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.form.resizeChildren
 * @class dhx.ui.form
 * @method resizeChildren
 * @memberOf dhx.ui.form
 * @example 
 */
 dhx.ui.form.resizeChildren = function() {};
/**
 * some unknown method
 * @id dhx.ui.form.scrollState
 * @class dhx.ui.form
 * @method scrollState
 * @memberOf dhx.ui.form
 * @example 
 */
 dhx.ui.form.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.ui.form.scrollTo
 * @class dhx.ui.form
 * @method scrollTo
 * @memberOf dhx.ui.form
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.form.scrollTo = function(x,y) {};
/**
 * sets values for all inputs in the component
 * @id dhx.ui.form.setValues
 * @class dhx.ui.form
 * @method setValues
 * @memberOf dhx.ui.form
 * @param {String} data setValues(data)
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" }]
 * 	},
 * 	{ view:"button", label: 'Fill form', click:"set_form" }]
 * });
 * �
 * function set_form(){
 * 	$$('myform').setValues({
 * 			field_a: "London",
 * 			field_b: "New York",
 * 			field_c: "left"
 * 	});
 * };
 */
 dhx.ui.form.setValues = function(data) {};
/**
 * makes view visible
 * @id dhx.ui.form.show
 * @class dhx.ui.form
 * @method show
 * @memberOf dhx.ui.form
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.form.show = function(animate_settings) {};
/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui.form.showBatch
 * @class dhx.ui.form
 * @method showBatch
 * @memberOf dhx.ui.form
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui.form.showBatch = function(name) {};
/**
 * enables event triggering
 * @id dhx.ui.form.unblockEvent
 * @class dhx.ui.form
 * @method unblockEvent
 * @memberOf dhx.ui.form
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.form.unblockEvent = function() {};
/**
 * validates for the defined rules
 * @id dhx.ui.form.validate
 * @class dhx.ui.form
 * @method validate
 * @memberOf dhx.ui.form
 * @param {Object} obj validate(obj)
 * @example dhx.ui({
 * 	view:"form", 
 * 	id:"myform", 
 * 	elements:[
 * 		{ view:"text", inputWidth:300, label:"Name *", id:"name"},
 * 		{ view:"text", inputWidth:300, label:"Age *",  id:"age"},
 * 		{ view:"button", inputWidth:300, label:"Submit", click:"submit_form"}],
 * 	rules:{
 * 		name:dhx.rules.isNotEmpty,
 * 		age:dhx.rules.isNumber
 * 	}
 * });
 * �
 * submit_form = function(){
 * 	if ($$("myform").validate()==false)
 * 		{dhx.notice("Invalid value for some field");}
 * }
 */
 dhx.ui.form.validate = function(obj) {};


/**
*
* dhx.ui.googlemap object class.
* @id dhx.ui.googlemap
* @class dhx.ui.googlemap
* @constructor
* @alias dhx.ui.googlemap.prototype

 * @return {dhx.ui.googlemap}
 */


dhx.ui.googlemap.config = {

/**
 * sets initial center of the map. After initialization, map will be focused on this point.
 * @id dhx.ui.googlemap.config.center
 * @type object
 * @property
 */
center: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.googlemap.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.googlemap.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.googlemap.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.googlemap.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.googlemap.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.googlemap.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * type of the map
 * @id dhx.ui.googlemap.config.mapType
 * @type ROADMAP,SATELLITE,HYBRID or TERRAIN
 * @property
 */
mapType: '',


/**
 * width of view
 * @id dhx.ui.googlemap.config.width
 * @type dimension
 * @property
 */
width: '',


/**
 * sets initial zoom (value can be changed from 0 to 20. The default value - 5)
 * @id dhx.ui.googlemap.config.zoom
 * @type dimension
 * @property
 */
zoom: ''
};
		

/**
 * 
 * @id dhx.ui.googlemap.adjust
 * @class dhx.ui.googlemap
 * @method adjust
 * @memberOf dhx.ui.googlemap
 * @example 
 */
 dhx.ui.googlemap.adjust = function() {};
/**
 * binds components
 * @id dhx.ui.googlemap.bind
 * @class dhx.ui.googlemap
 * @method bind
 * @memberOf dhx.ui.googlemap
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.googlemap.bind = function(target, rule, format) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.googlemap.define
 * @class dhx.ui.googlemap
 * @method define
 * @memberOf dhx.ui.googlemap
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.googlemap.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.googlemap.destructor
 * @class dhx.ui.googlemap
 * @method destructor
 * @memberOf dhx.ui.googlemap
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.googlemap.destructor = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.googlemap.getNode
 * @class dhx.ui.googlemap
 * @method getNode
 * @memberOf dhx.ui.googlemap
 * @example 
 */
 dhx.ui.googlemap.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.googlemap.getParent
 * @class dhx.ui.googlemap
 * @method getParent
 * @memberOf dhx.ui.googlemap
 * @example 
 */
 dhx.ui.googlemap.getParent = function() {};
/**
 * hides view
 * @id dhx.ui.googlemap.hide
 * @class dhx.ui.googlemap
 * @method hide
 * @memberOf dhx.ui.googlemap
 * @example $$('myform').hide();
 */
 dhx.ui.googlemap.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.googlemap.isVisible
 * @class dhx.ui.googlemap
 * @method isVisible
 * @memberOf dhx.ui.googlemap
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.googlemap.isVisible = function(base_id, prev_id) {};
/**
 * renders map object
 * @id dhx.ui.googlemap.render
 * @class dhx.ui.googlemap
 * @method render
 * @memberOf dhx.ui.googlemap
 * @example 
 */
 dhx.ui.googlemap.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.googlemap.resize
 * @class dhx.ui.googlemap
 * @method resize
 * @memberOf dhx.ui.googlemap
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.googlemap.resize = function(force) {};
/**
 * makes view visible
 * @id dhx.ui.googlemap.show
 * @class dhx.ui.googlemap
 * @method show
 * @memberOf dhx.ui.googlemap
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.googlemap.show = function(animate_settings) {};


/**
*
* dhx.ui.grid object class.
* @id dhx.ui.grid
* @class dhx.ui.grid
* @constructor
* @alias dhx.ui.grid.prototype

 * @return {dhx.ui.grid}
 */


dhx.ui.grid.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.grid.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.grid.config.css
 * @type string
 * @property
 */
css: '',


/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui.grid.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',


/**
 * loaded data
 * @id dhx.ui.grid.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * custom DataStore object
 * @id dhx.ui.grid.config.datastore
 * @type object
 * @property
 */
datastore: '',


/**
 * type of loaded data
 * @id dhx.ui.grid.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * specifies grid columns (in the grid will be as many columns as there are fields specified by this parameter)
 * @id dhx.ui.grid.config.fields
 * @type object
 * @property
 */
fields: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.grid.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of header
 * @id dhx.ui.grid.config.headerHeight
 * @type dimension
 * @property
 */
headerHeight: '',


/**
 * shows/hides grid header
 * @id dhx.ui.grid.config.header
 * @type boolean
 * @property
 */
header: '',


/**
 * height of view
 * @id dhx.ui.grid.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.grid.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.grid.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.grid.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.grid.config.scheme
 * @type unknown
 * @property
 */
scheme: '',


/**
 * defines touch scroll: x or y
 * @id dhx.ui.grid.config.scroll
 * @type string
 * @property
 */
scroll: '',


/**
 * enables/disables item selection or multiselection in grid
 * @id dhx.ui.grid.config.select
 * @type boolean,string
 * @property
 */
select: '',


/**
 * enables/disables sorting
 * @id dhx.ui.grid.config.sorting
 * @type boolean
 * @property
 */
sorting: '',


/**
 * item template
 * @id dhx.ui.grid.config.template
 * @type any
 * @property
 */
template: '',


/**
 * object that specifies items list presentation
 * @id dhx.ui.grid.config.type
 * @type object
 * @property
 */
type: '',


/**
 * data url
 * @id dhx.ui.grid.config.url
 * @type string
 * @property
 */
url: '',


/**
 * width of view
 * @id dhx.ui.grid.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * adds item to the store
 * @id dhx.ui.grid.add
 * @class dhx.ui.grid
 * @method add
 * @memberOf dhx.ui.grid
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui.grid.add = function(obj,index) {};
/**
 * 
 * @id dhx.ui.grid.adjust
 * @class dhx.ui.grid
 * @method adjust
 * @memberOf dhx.ui.grid
 * @example 
 */
 dhx.ui.grid.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.grid.attachEvent
 * @class dhx.ui.grid
 * @method attachEvent
 * @memberOf dhx.ui.grid
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.grid.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.grid.bind
 * @class dhx.ui.grid
 * @method bind
 * @memberOf dhx.ui.grid
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.grid.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.grid.blockEvent
 * @class dhx.ui.grid
 * @method blockEvent
 * @memberOf dhx.ui.grid
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.grid.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.grid.callEvent
 * @class dhx.ui.grid
 * @method callEvent
 * @memberOf dhx.ui.grid
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.grid.callEvent = function(type,params) {};
/**
 * removes all items from the component
 * @id dhx.ui.grid.clearAll
 * @class dhx.ui.grid
 * @method clearAll
 * @memberOf dhx.ui.grid
 * @example 
 */
 dhx.ui.grid.clearAll = function() {};
/**
 * applies new type settings
 * @id dhx.ui.grid.customize
 * @class dhx.ui.grid
 * @method customize
 * @memberOf dhx.ui.grid
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui.grid.customize = function(obj) {};
/**
 * gets count of items
 * @id dhx.ui.grid.dataCount
 * @class dhx.ui.grid
 * @method dataCount
 * @memberOf dhx.ui.grid
 * @example 
 */
 dhx.ui.grid.dataCount = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.grid.define
 * @class dhx.ui.grid
 * @method define
 * @memberOf dhx.ui.grid
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.grid.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.grid.destructor
 * @class dhx.ui.grid
 * @method destructor
 * @memberOf dhx.ui.grid
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.grid.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.grid.detachEvent
 * @class dhx.ui.grid
 * @method detachEvent
 * @memberOf dhx.ui.grid
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.grid.detachEvent = function(id) {};
/**
 * checks if the item with such ID exists
 * @id dhx.ui.grid.exists
 * @class dhx.ui.grid
 * @method exists
 * @memberOf dhx.ui.grid
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui.grid.exists = function(id) {};
/**
 * filters data
 * @id dhx.ui.grid.filter
 * @class dhx.ui.grid
 * @method filter
 * @memberOf dhx.ui.grid
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui.grid.filter = function(text,value,preserve) {};
/**
 * gets the ID of the first item
 * @id dhx.ui.grid.first
 * @class dhx.ui.grid
 * @method first
 * @memberOf dhx.ui.grid
 * @example 
 */
 dhx.ui.grid.first = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.grid.getNode
 * @class dhx.ui.grid
 * @method getNode
 * @memberOf dhx.ui.grid
 * @example 
 */
 dhx.ui.grid.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.grid.getParent
 * @class dhx.ui.grid
 * @method getParent
 * @memberOf dhx.ui.grid
 * @example 
 */
 dhx.ui.grid.getParent = function() {};
/**
 * returns ID of selected item(s)
 * @id dhx.ui.grid.getSelected
 * @class dhx.ui.grid
 * @method getSelected
 * @memberOf dhx.ui.grid
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui.grid.getSelected = function(as_array) {};
/**
 * checks whether a component has an event
 * @id dhx.ui.grid.hasEvent
 * @class dhx.ui.grid
 * @method hasEvent
 * @memberOf dhx.ui.grid
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.grid.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.grid.hide
 * @class dhx.ui.grid
 * @method hide
 * @memberOf dhx.ui.grid
 * @example $$('myform').hide();
 */
 dhx.ui.grid.hide = function() {};
/**
 * gets the id of an item with taken index
 * @id dhx.ui.grid.idByIndex
 * @class dhx.ui.grid
 * @method idByIndex
 * @memberOf dhx.ui.grid
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui.grid.idByIndex = function(index) {};
/**
 * the index of the item in question
 * @id dhx.ui.grid.indexById
 * @class dhx.ui.grid
 * @method indexById
 * @memberOf dhx.ui.grid
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui.grid.indexById = function(id) {};
/**
 * checks if item is selected or not
 * @id dhx.ui.grid.isSelected
 * @class dhx.ui.grid
 * @method isSelected
 * @memberOf dhx.ui.grid
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui.grid.isSelected = function(id) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.grid.isVisible
 * @class dhx.ui.grid
 * @method isVisible
 * @memberOf dhx.ui.grid
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.grid.isVisible = function(base_id, prev_id) {};
/**
 * gets the object of a data item
 * @id dhx.ui.grid.item
 * @class dhx.ui.grid
 * @method item
 * @memberOf dhx.ui.grid
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui.grid.item = function(id) {};
/**
 * gets the id of the last item
 * @id dhx.ui.grid.last
 * @class dhx.ui.grid
 * @method last
 * @memberOf dhx.ui.grid
 * @example 
 */
 dhx.ui.grid.last = function() {};
/**
 * loads values from external datasource
 * @id dhx.ui.grid.load
 * @class dhx.ui.grid
 * @method load
 * @memberOf dhx.ui.grid
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui.grid.load = function(url,call) {};
/**
 * some unknown method
 * @id dhx.ui.grid.loadNext
 * @class dhx.ui.grid
 * @method loadNext
 * @memberOf dhx.ui.grid
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui.grid.loadNext = function(count, start) {};
/**
 * 
 * @id dhx.ui.grid.locate
 * @class dhx.ui.grid
 * @method locate
 * @memberOf dhx.ui.grid
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui.grid.locate = function(e) {};
/**
 * routes events from one object to another
 * @id dhx.ui.grid.mapEvent
 * @class dhx.ui.grid
 * @method mapEvent
 * @memberOf dhx.ui.grid
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.grid.mapEvent = function(map) {};
/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui.grid.next
 * @class dhx.ui.grid
 * @method next
 * @memberOf dhx.ui.grid
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.grid.next = function(id,step) {};
/**
 * addes data from a datasource
 * @id dhx.ui.grid.parse
 * @class dhx.ui.grid
 * @method parse
 * @memberOf dhx.ui.grid
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui.grid.parse = function(data,type) {};
/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui.grid.previous
 * @class dhx.ui.grid
 * @method previous
 * @memberOf dhx.ui.grid
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.grid.previous = function(id,step) {};
/**
 * repaint the whole view or a certain item
 * @id dhx.ui.grid.refresh
 * @class dhx.ui.grid
 * @method refresh
 * @memberOf dhx.ui.grid
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui.grid.refresh = function(id) {};
/**
 * removes element from datastore
 * @id dhx.ui.grid.remove
 * @class dhx.ui.grid
 * @method remove
 * @memberOf dhx.ui.grid
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui.grid.remove = function(id) {};
/**
 * renders a current state of an item or the whole component
 * @id dhx.ui.grid.render
 * @class dhx.ui.grid
 * @method render
 * @memberOf dhx.ui.grid
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui.grid.render = function(id,data,type) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.grid.resize
 * @class dhx.ui.grid
 * @method resize
 * @memberOf dhx.ui.grid
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.grid.resize = function(force) {};
/**
 * selects item
 * @id dhx.ui.grid.select
 * @class dhx.ui.grid
 * @method select
 * @memberOf dhx.ui.grid
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui.grid.select = function(id,non_modal,continue_old) {};
/**
 * selects all items
 * @id dhx.ui.grid.selectAll
 * @class dhx.ui.grid
 * @method selectAll
 * @memberOf dhx.ui.grid
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui.grid.selectAll = function(from,to) {};
/**
 * serializes data to a json object
 * @id dhx.ui.grid.serialize
 * @class dhx.ui.grid
 * @method serialize
 * @memberOf dhx.ui.grid
 * @example 
 */
 dhx.ui.grid.serialize = function() {};
/**
 * makes view visible
 * @id dhx.ui.grid.show
 * @class dhx.ui.grid
 * @method show
 * @memberOf dhx.ui.grid
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.grid.show = function(animate_settings) {};
/**
 * shows the specified item
 * @id dhx.ui.grid.showItem
 * @class dhx.ui.grid
 * @method showItem
 * @memberOf dhx.ui.grid
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui.grid.showItem = function(id) {};
/**
 * sorts datastore
 * @id dhx.ui.grid.sort
 * @class dhx.ui.grid
 * @method sort
 * @memberOf dhx.ui.grid
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui.grid.sort = function(by, dir, as) {};
/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui.grid.sync
 * @class dhx.ui.grid
 * @method sync
 * @memberOf dhx.ui.grid
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui.grid.sync = function(source, filter, silent) {};
/**
 * enables event triggering
 * @id dhx.ui.grid.unblockEvent
 * @class dhx.ui.grid
 * @method unblockEvent
 * @memberOf dhx.ui.grid
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.grid.unblockEvent = function() {};
/**
 * unselects item
 * @id dhx.ui.grid.unselect
 * @class dhx.ui.grid
 * @method unselect
 * @memberOf dhx.ui.grid
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui.grid.unselect = function(id) {};
/**
 * unselects all items
 * @id dhx.ui.grid.unselectAll
 * @class dhx.ui.grid
 * @method unselectAll
 * @memberOf dhx.ui.grid
 * @example 
 */
 dhx.ui.grid.unselectAll = function() {};
/**
 * sets properties of the data item
 * @id dhx.ui.grid.update
 * @class dhx.ui.grid
 * @method update
 * @memberOf dhx.ui.grid
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui.grid.update = function(id,data) {};


/**
*
* dhx.ui.grouplist object class.
* @id dhx.ui.grouplist
* @class dhx.ui.grouplist
* @constructor
* @alias dhx.ui.grouplist.prototype

 * @return {dhx.ui.grouplist}
 */


dhx.ui.grouplist.config = {

/**
 * enables/disables animation
 * @id dhx.ui.grouplist.config.animate
 * @type boolean, object
 * @property
 */
animate: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.grouplist.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.grouplist.config.css
 * @type string
 * @property
 */
css: '',


/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui.grouplist.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',


/**
 * loaded data
 * @id dhx.ui.grouplist.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * custom DataStore object
 * @id dhx.ui.grouplist.config.datastore
 * @type object
 * @property
 */
datastore: '',


/**
 * type of loaded data
 * @id dhx.ui.grouplist.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.grouplist.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.grouplist.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.grouplist.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.grouplist.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.grouplist.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.grouplist.config.scheme
 * @type unknown
 * @property
 */
scheme: '',


/**
 * enables/disables scroll
 * @id dhx.ui.grouplist.config.scroll
 * @type boolean
 * @property
 */
scroll: '',


/**
 * enables/disables item selection or multiselection in grouplist
 * @id dhx.ui.grouplist.config.select
 * @type boolean,string
 * @property
 */
select: '',


/**
 * an html template that defines data that will be presented in group header in the expanded state
 * @id dhx.ui.grouplist.config.templateBack
 * @type any
 * @property
 */
templateBack: '',


/**
 * an html template that defines data that will be presented in group header in the collapsed state
 * @id dhx.ui.grouplist.config.templateGroup
 * @type any
 * @property
 */
templateGroup: '',


/**
 * an html template that defines data that will be presented in grouplist
 * @id dhx.ui.grouplist.config.templateItem
 * @type any
 * @property
 */
templateItem: '',


/**
 * item template
 * @id dhx.ui.grouplist.config.template
 * @type any
 * @property
 */
template: '',


/**
 * object that specifies items list presentation
 * @id dhx.ui.grouplist.config.type
 * @type object
 * @property
 */
type: '',


/**
 * data url
 * @id dhx.ui.grouplist.config.url
 * @type string
 * @property
 */
url: '',


/**
 * width of view
 * @id dhx.ui.grouplist.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * adds a new item into a certain branch
 * @id dhx.ui.grouplist.add
 * @class dhx.ui.grouplist
 * @method add
 * @memberOf dhx.ui.grouplist
 * @param {Number} obj add(obj, index, parent)
 * @param {String} index Type: Method
 * @param {String} parent File:
 * @example 
 */
 dhx.ui.grouplist.add = function(obj, index, parent) {};
/**
 * adds a new item into a certain branch
 * @id dhx.ui.grouplist.add
 * @class dhx.ui.grouplist
 * @method add
 * @memberOf dhx.ui.grouplist
 * @param {Number} obj add(obj, index, parent)
 * @param {String} index Type: Method
 * @param {String} parent File:
 * @example 
 */
 dhx.ui.grouplist.add = function(obj, index, parent) {};
/**
 * 
 * @id dhx.ui.grouplist.adjust
 * @class dhx.ui.grouplist
 * @method adjust
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.grouplist.attachEvent
 * @class dhx.ui.grouplist
 * @method attachEvent
 * @memberOf dhx.ui.grouplist
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.grouplist.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.grouplist.bind
 * @class dhx.ui.grouplist
 * @method bind
 * @memberOf dhx.ui.grouplist
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.grouplist.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.grouplist.blockEvent
 * @class dhx.ui.grouplist
 * @method blockEvent
 * @memberOf dhx.ui.grouplist
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.grouplist.blockEvent = function() {};
/**
 * gets position of the item in the parent branch
 * @id dhx.ui.grouplist.branchIndex
 * @class dhx.ui.grouplist
 * @method branchIndex
 * @memberOf dhx.ui.grouplist
 * @param {String} parent branchIndex(parent, child)
 * @param {String} child Type: Method
 * @example 
 */
 dhx.ui.grouplist.branchIndex = function(parent, child) {};
/**
 * calls inner event
 * @id dhx.ui.grouplist.callEvent
 * @class dhx.ui.grouplist
 * @method callEvent
 * @memberOf dhx.ui.grouplist
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.grouplist.callEvent = function(type,params) {};
/**
 * removes all data
 * @id dhx.ui.grouplist.clearAll
 * @class dhx.ui.grouplist
 * @method clearAll
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.clearAll = function() {};
/**
 * removes all data
 * @id dhx.ui.grouplist.clearAll
 * @class dhx.ui.grouplist
 * @method clearAll
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.clearAll = function() {};
/**
 * applies new type settings
 * @id dhx.ui.grouplist.customize
 * @class dhx.ui.grouplist
 * @method customize
 * @memberOf dhx.ui.grouplist
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui.grouplist.customize = function(obj) {};
/**
 * gets count of items
 * @id dhx.ui.grouplist.dataCount
 * @class dhx.ui.grouplist
 * @method dataCount
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.dataCount = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.grouplist.define
 * @class dhx.ui.grouplist
 * @method define
 * @memberOf dhx.ui.grouplist
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.grouplist.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.grouplist.destructor
 * @class dhx.ui.grouplist
 * @method destructor
 * @memberOf dhx.ui.grouplist
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.grouplist.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.grouplist.detachEvent
 * @class dhx.ui.grouplist
 * @method detachEvent
 * @memberOf dhx.ui.grouplist
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.grouplist.detachEvent = function(id) {};
/**
 * checks if the item with such ID exists
 * @id dhx.ui.grouplist.exists
 * @class dhx.ui.grouplist
 * @method exists
 * @memberOf dhx.ui.grouplist
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui.grouplist.exists = function(id) {};
/**
 * filters data
 * @id dhx.ui.grouplist.filter
 * @class dhx.ui.grouplist
 * @method filter
 * @memberOf dhx.ui.grouplist
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui.grouplist.filter = function(text,value,preserve) {};
/**
 * gets the ID of the first item
 * @id dhx.ui.grouplist.first
 * @class dhx.ui.grouplist
 * @method first
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.first = function() {};
/**
 * gets the id of the first child in a certain branch
 * @id dhx.ui.grouplist.firstChild
 * @class dhx.ui.grouplist
 * @method firstChild
 * @memberOf dhx.ui.grouplist
 * @param {String} id firstChild(id)
 * @example 
 */
 dhx.ui.grouplist.firstChild = function(id) {};
/**
 * returns main html container of view
 * @id dhx.ui.grouplist.getNode
 * @class dhx.ui.grouplist
 * @method getNode
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.grouplist.getParent
 * @class dhx.ui.grouplist
 * @method getParent
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.getParent = function() {};
/**
 * returns ID of selected item(s)
 * @id dhx.ui.grouplist.getSelected
 * @class dhx.ui.grouplist
 * @method getSelected
 * @memberOf dhx.ui.grouplist
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui.grouplist.getSelected = function(as_array) {};
/**
 * checks whether an item exists in a certain branch (at any level)
 * @id dhx.ui.grouplist.hasChild
 * @class dhx.ui.grouplist
 * @method hasChild
 * @memberOf dhx.ui.grouplist
 * @param {String} parent hasChild(parent, child)
 * @param {String} child Type: Method
 * @example 
 */
 dhx.ui.grouplist.hasChild = function(parent, child) {};
/**
 * checks whether a component has an event
 * @id dhx.ui.grouplist.hasEvent
 * @class dhx.ui.grouplist
 * @method hasEvent
 * @memberOf dhx.ui.grouplist
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.grouplist.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.grouplist.hide
 * @class dhx.ui.grouplist
 * @method hide
 * @memberOf dhx.ui.grouplist
 * @example $$('myform').hide();
 */
 dhx.ui.grouplist.hide = function() {};
/**
 * gets the id of an item with taken index
 * @id dhx.ui.grouplist.idByIndex
 * @class dhx.ui.grouplist
 * @method idByIndex
 * @memberOf dhx.ui.grouplist
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui.grouplist.idByIndex = function(index) {};
/**
 * the index of the item in question
 * @id dhx.ui.grouplist.indexById
 * @class dhx.ui.grouplist
 * @method indexById
 * @memberOf dhx.ui.grouplist
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui.grouplist.indexById = function(id) {};
/**
 * checks if item is selected or not
 * @id dhx.ui.grouplist.isSelected
 * @class dhx.ui.grouplist
 * @method isSelected
 * @memberOf dhx.ui.grouplist
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui.grouplist.isSelected = function(id) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.grouplist.isVisible
 * @class dhx.ui.grouplist
 * @method isVisible
 * @memberOf dhx.ui.grouplist
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.grouplist.isVisible = function(base_id, prev_id) {};
/**
 * gets the object of a data item
 * @id dhx.ui.grouplist.item
 * @class dhx.ui.grouplist
 * @method item
 * @memberOf dhx.ui.grouplist
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui.grouplist.item = function(id) {};
/**
 * gets the id of the last item
 * @id dhx.ui.grouplist.last
 * @class dhx.ui.grouplist
 * @method last
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.last = function() {};
/**
 * loads values from external datasource
 * @id dhx.ui.grouplist.load
 * @class dhx.ui.grouplist
 * @method load
 * @memberOf dhx.ui.grouplist
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui.grouplist.load = function(url,call) {};
/**
 * some unknown method
 * @id dhx.ui.grouplist.loadNext
 * @class dhx.ui.grouplist
 * @method loadNext
 * @memberOf dhx.ui.grouplist
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui.grouplist.loadNext = function(count, start) {};
/**
 * 
 * @id dhx.ui.grouplist.locate
 * @class dhx.ui.grouplist
 * @method locate
 * @memberOf dhx.ui.grouplist
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui.grouplist.locate = function(e) {};
/**
 * routes events from one object to another
 * @id dhx.ui.grouplist.mapEvent
 * @class dhx.ui.grouplist
 * @method mapEvent
 * @memberOf dhx.ui.grouplist
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.grouplist.mapEvent = function(map) {};
/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui.grouplist.next
 * @class dhx.ui.grouplist
 * @method next
 * @memberOf dhx.ui.grouplist
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.grouplist.next = function(id,step) {};
/**
 * gets the id of the next item
 * @id dhx.ui.grouplist.nextSibling
 * @class dhx.ui.grouplist
 * @method nextSibling
 * @memberOf dhx.ui.grouplist
 * @param {String} id nextSibling(id)
 * @example 
 */
 dhx.ui.grouplist.nextSibling = function(id) {};
/**
 * gets the id of the parent branch
 * @id dhx.ui.grouplist.parent
 * @class dhx.ui.grouplist
 * @method parent
 * @memberOf dhx.ui.grouplist
 * @param {String} id parent(id)
 * @example 
 */
 dhx.ui.grouplist.parent = function(id) {};
/**
 * addes data from a datasource
 * @id dhx.ui.grouplist.parse
 * @class dhx.ui.grouplist
 * @method parse
 * @memberOf dhx.ui.grouplist
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui.grouplist.parse = function(data,type) {};
/**
 * gets the id of the previous item
 * @id dhx.ui.grouplist.prevSibling
 * @class dhx.ui.grouplist
 * @method prevSibling
 * @memberOf dhx.ui.grouplist
 * @param {String} id prevSibling(id)
 * @example 
 */
 dhx.ui.grouplist.prevSibling = function(id) {};
/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui.grouplist.previous
 * @class dhx.ui.grouplist
 * @method previous
 * @memberOf dhx.ui.grouplist
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.grouplist.previous = function(id,step) {};
/**
 * repaint the whole view or a certain item
 * @id dhx.ui.grouplist.refresh
 * @class dhx.ui.grouplist
 * @method refresh
 * @memberOf dhx.ui.grouplist
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui.grouplist.refresh = function(id) {};
/**
 * removes an item
 * @id dhx.ui.grouplist.remove
 * @class dhx.ui.grouplist
 * @method remove
 * @memberOf dhx.ui.grouplist
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui.grouplist.remove = function(id) {};
/**
 * removes an item
 * @id dhx.ui.grouplist.remove
 * @class dhx.ui.grouplist
 * @method remove
 * @memberOf dhx.ui.grouplist
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui.grouplist.remove = function(id) {};
/**
 * renders a current state of an item or the whole component
 * @id dhx.ui.grouplist.render
 * @class dhx.ui.grouplist
 * @method render
 * @memberOf dhx.ui.grouplist
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui.grouplist.render = function(id,data,type) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.grouplist.resize
 * @class dhx.ui.grouplist
 * @method resize
 * @memberOf dhx.ui.grouplist
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.grouplist.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.grouplist.scrollState
 * @class dhx.ui.grouplist
 * @method scrollState
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.ui.grouplist.scrollTo
 * @class dhx.ui.grouplist
 * @method scrollTo
 * @memberOf dhx.ui.grouplist
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.grouplist.scrollTo = function(x,y) {};
/**
 * selects item
 * @id dhx.ui.grouplist.select
 * @class dhx.ui.grouplist
 * @method select
 * @memberOf dhx.ui.grouplist
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui.grouplist.select = function(id,non_modal,continue_old) {};
/**
 * selects all items
 * @id dhx.ui.grouplist.selectAll
 * @class dhx.ui.grouplist
 * @method selectAll
 * @memberOf dhx.ui.grouplist
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui.grouplist.selectAll = function(from,to) {};
/**
 * serializes branch or the whole dataset to a json object
 * @id dhx.ui.grouplist.serialize
 * @class dhx.ui.grouplist
 * @method serialize
 * @memberOf dhx.ui.grouplist
 * @param {String} id serialize(id)
 * @example 
 */
 dhx.ui.grouplist.serialize = function(id) {};
/**
 * serializes branch or the whole dataset to a json object
 * @id dhx.ui.grouplist.serialize
 * @class dhx.ui.grouplist
 * @method serialize
 * @memberOf dhx.ui.grouplist
 * @param {String} id serialize(id)
 * @example 
 */
 dhx.ui.grouplist.serialize = function(id) {};
/**
 * makes view visible
 * @id dhx.ui.grouplist.show
 * @class dhx.ui.grouplist
 * @method show
 * @memberOf dhx.ui.grouplist
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.grouplist.show = function(animate_settings) {};
/**
 * shows the specified item
 * @id dhx.ui.grouplist.showItem
 * @class dhx.ui.grouplist
 * @method showItem
 * @memberOf dhx.ui.grouplist
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui.grouplist.showItem = function(id) {};
/**
 * sorts datastore
 * @id dhx.ui.grouplist.sort
 * @class dhx.ui.grouplist
 * @method sort
 * @memberOf dhx.ui.grouplist
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui.grouplist.sort = function(by, dir, as) {};
/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui.grouplist.sync
 * @class dhx.ui.grouplist
 * @method sync
 * @memberOf dhx.ui.grouplist
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui.grouplist.sync = function(source, filter, silent) {};
/**
 * enables event triggering
 * @id dhx.ui.grouplist.unblockEvent
 * @class dhx.ui.grouplist
 * @method unblockEvent
 * @memberOf dhx.ui.grouplist
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.grouplist.unblockEvent = function() {};
/**
 * unselects item
 * @id dhx.ui.grouplist.unselect
 * @class dhx.ui.grouplist
 * @method unselect
 * @memberOf dhx.ui.grouplist
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui.grouplist.unselect = function(id) {};
/**
 * unselects all items
 * @id dhx.ui.grouplist.unselectAll
 * @class dhx.ui.grouplist
 * @method unselectAll
 * @memberOf dhx.ui.grouplist
 * @example 
 */
 dhx.ui.grouplist.unselectAll = function() {};
/**
 * sets properties of the data item
 * @id dhx.ui.grouplist.update
 * @class dhx.ui.grouplist
 * @method update
 * @memberOf dhx.ui.grouplist
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui.grouplist.update = function(id,data) {};


/**
*
* dhx.ui.icon object class.
* @id dhx.ui.icon
* @class dhx.ui.icon
* @constructor
* @alias dhx.ui.icon.prototype

 * @return {dhx.ui.icon}
 */


dhx.ui.icon.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.icon.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.icon.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.icon.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.icon.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.icon.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.icon.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * text label of control
 * @id dhx.ui.icon.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.icon.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.icon.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.icon.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.icon.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.icon.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.icon.adjust
 * @class dhx.ui.icon
 * @method adjust
 * @memberOf dhx.ui.icon
 * @example 
 */
 dhx.ui.icon.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.icon.attachEvent
 * @class dhx.ui.icon
 * @method attachEvent
 * @memberOf dhx.ui.icon
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.icon.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.icon.bind
 * @class dhx.ui.icon
 * @method bind
 * @memberOf dhx.ui.icon
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.icon.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.icon.blockEvent
 * @class dhx.ui.icon
 * @method blockEvent
 * @memberOf dhx.ui.icon
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.icon.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.icon.callEvent
 * @class dhx.ui.icon
 * @method callEvent
 * @memberOf dhx.ui.icon
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.icon.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.icon.define
 * @class dhx.ui.icon
 * @method define
 * @memberOf dhx.ui.icon
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.icon.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.icon.destructor
 * @class dhx.ui.icon
 * @method destructor
 * @memberOf dhx.ui.icon
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.icon.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.icon.detachEvent
 * @class dhx.ui.icon
 * @method detachEvent
 * @memberOf dhx.ui.icon
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.icon.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.icon.focus
 * @class dhx.ui.icon
 * @method focus
 * @memberOf dhx.ui.icon
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.icon.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.icon.getInput
 * @class dhx.ui.icon
 * @method getInput
 * @memberOf dhx.ui.icon
 * @example 
 */
 dhx.ui.icon.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.icon.getNode
 * @class dhx.ui.icon
 * @method getNode
 * @memberOf dhx.ui.icon
 * @example 
 */
 dhx.ui.icon.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.icon.getParent
 * @class dhx.ui.icon
 * @method getParent
 * @memberOf dhx.ui.icon
 * @example 
 */
 dhx.ui.icon.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.icon.getValue
 * @class dhx.ui.icon
 * @method getValue
 * @memberOf dhx.ui.icon
 * @example 
 */
 dhx.ui.icon.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.icon.hasEvent
 * @class dhx.ui.icon
 * @method hasEvent
 * @memberOf dhx.ui.icon
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.icon.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.icon.hide
 * @class dhx.ui.icon
 * @method hide
 * @memberOf dhx.ui.icon
 * @example $$('myform').hide();
 */
 dhx.ui.icon.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.icon.isVisible
 * @class dhx.ui.icon
 * @method isVisible
 * @memberOf dhx.ui.icon
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.icon.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.icon.mapEvent
 * @class dhx.ui.icon
 * @method mapEvent
 * @memberOf dhx.ui.icon
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.icon.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.icon.refresh
 * @class dhx.ui.icon
 * @method refresh
 * @memberOf dhx.ui.icon
 * @example 
 */
 dhx.ui.icon.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.icon.render
 * @class dhx.ui.icon
 * @method render
 * @memberOf dhx.ui.icon
 * @example 
 */
 dhx.ui.icon.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.icon.resize
 * @class dhx.ui.icon
 * @method resize
 * @memberOf dhx.ui.icon
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.icon.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.icon.setValue
 * @class dhx.ui.icon
 * @method setValue
 * @memberOf dhx.ui.icon
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.icon.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.icon.show
 * @class dhx.ui.icon
 * @method show
 * @memberOf dhx.ui.icon
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.icon.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.icon.unblockEvent
 * @class dhx.ui.icon
 * @method unblockEvent
 * @memberOf dhx.ui.icon
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.icon.unblockEvent = function() {};


/**
*
* dhx.ui.iframe object class.
* @id dhx.ui.iframe
* @class dhx.ui.iframe
* @constructor
* @alias dhx.ui.iframe.prototype

 * @return {dhx.ui.iframe}
 */


dhx.ui.iframe.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.iframe.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.iframe.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.iframe.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.iframe.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.iframe.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.iframe.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * enables/disables loading cover
 * @id dhx.ui.iframe.config.loading
 * @type boolean
 * @property
 */
loading: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.iframe.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * 
 * @id dhx.ui.iframe.config.src
 * @type 
 * @property
 */
src: '',


/**
 * defines whether the loading cover should be displayed while loading (actual in case of &#039;src&#039; parameter)
 * @id dhx.ui.iframe.config.waitMessage
 * @type boolean
 * @property
 */
waitMessage: '',


/**
 * width of view
 * @id dhx.ui.iframe.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.iframe.adjust
 * @class dhx.ui.iframe
 * @method adjust
 * @memberOf dhx.ui.iframe
 * @example 
 */
 dhx.ui.iframe.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.iframe.attachEvent
 * @class dhx.ui.iframe
 * @method attachEvent
 * @memberOf dhx.ui.iframe
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.iframe.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.iframe.bind
 * @class dhx.ui.iframe
 * @method bind
 * @memberOf dhx.ui.iframe
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.iframe.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.iframe.blockEvent
 * @class dhx.ui.iframe
 * @method blockEvent
 * @memberOf dhx.ui.iframe
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.iframe.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.iframe.callEvent
 * @class dhx.ui.iframe
 * @method callEvent
 * @memberOf dhx.ui.iframe
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.iframe.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.iframe.define
 * @class dhx.ui.iframe
 * @method define
 * @memberOf dhx.ui.iframe
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.iframe.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.iframe.destructor
 * @class dhx.ui.iframe
 * @method destructor
 * @memberOf dhx.ui.iframe
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.iframe.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.iframe.detachEvent
 * @class dhx.ui.iframe
 * @method detachEvent
 * @memberOf dhx.ui.iframe
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.iframe.detachEvent = function(id) {};
/**
 * returns main html container of view
 * @id dhx.ui.iframe.getNode
 * @class dhx.ui.iframe
 * @method getNode
 * @memberOf dhx.ui.iframe
 * @example 
 */
 dhx.ui.iframe.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.iframe.getParent
 * @class dhx.ui.iframe
 * @method getParent
 * @memberOf dhx.ui.iframe
 * @example 
 */
 dhx.ui.iframe.getParent = function() {};
/**
 * gets the window object of an iframe
 * @id dhx.ui.iframe.getWindow
 * @class dhx.ui.iframe
 * @method getWindow
 * @memberOf dhx.ui.iframe
 * @example 
 */
 dhx.ui.iframe.getWindow = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.iframe.hasEvent
 * @class dhx.ui.iframe
 * @method hasEvent
 * @memberOf dhx.ui.iframe
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.iframe.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.iframe.hide
 * @class dhx.ui.iframe
 * @method hide
 * @memberOf dhx.ui.iframe
 * @example $$('myform').hide();
 */
 dhx.ui.iframe.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.iframe.isVisible
 * @class dhx.ui.iframe
 * @method isVisible
 * @memberOf dhx.ui.iframe
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.iframe.isVisible = function(base_id, prev_id) {};
/**
 * loads the document you&#039;d like to show in an iframe
 * @id dhx.ui.iframe.load
 * @class dhx.ui.iframe
 * @method load
 * @memberOf dhx.ui.iframe
 * @param {String} value load(value)
 * @example 
 */
 dhx.ui.iframe.load = function(value) {};
/**
 * routes events from one object to another
 * @id dhx.ui.iframe.mapEvent
 * @class dhx.ui.iframe
 * @method mapEvent
 * @memberOf dhx.ui.iframe
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.iframe.mapEvent = function(map) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.iframe.resize
 * @class dhx.ui.iframe
 * @method resize
 * @memberOf dhx.ui.iframe
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.iframe.resize = function(force) {};
/**
 * makes view visible
 * @id dhx.ui.iframe.show
 * @class dhx.ui.iframe
 * @method show
 * @memberOf dhx.ui.iframe
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.iframe.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.iframe.unblockEvent
 * @class dhx.ui.iframe
 * @method unblockEvent
 * @memberOf dhx.ui.iframe
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.iframe.unblockEvent = function() {};


/**
*
* dhx.ui.imagebutton object class.
* @id dhx.ui.imagebutton
* @class dhx.ui.imagebutton
* @constructor
* @alias dhx.ui.imagebutton.prototype

 * @return {dhx.ui.imagebutton}
 */


dhx.ui.imagebutton.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.imagebutton.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.imagebutton.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.imagebutton.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.imagebutton.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.imagebutton.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.imagebutton.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * text label of control
 * @id dhx.ui.imagebutton.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.imagebutton.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.imagebutton.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.imagebutton.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.imagebutton.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.imagebutton.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.imagebutton.adjust
 * @class dhx.ui.imagebutton
 * @method adjust
 * @memberOf dhx.ui.imagebutton
 * @example 
 */
 dhx.ui.imagebutton.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.imagebutton.attachEvent
 * @class dhx.ui.imagebutton
 * @method attachEvent
 * @memberOf dhx.ui.imagebutton
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.imagebutton.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.imagebutton.bind
 * @class dhx.ui.imagebutton
 * @method bind
 * @memberOf dhx.ui.imagebutton
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.imagebutton.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.imagebutton.blockEvent
 * @class dhx.ui.imagebutton
 * @method blockEvent
 * @memberOf dhx.ui.imagebutton
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.imagebutton.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.imagebutton.callEvent
 * @class dhx.ui.imagebutton
 * @method callEvent
 * @memberOf dhx.ui.imagebutton
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.imagebutton.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.imagebutton.define
 * @class dhx.ui.imagebutton
 * @method define
 * @memberOf dhx.ui.imagebutton
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.imagebutton.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.imagebutton.destructor
 * @class dhx.ui.imagebutton
 * @method destructor
 * @memberOf dhx.ui.imagebutton
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.imagebutton.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.imagebutton.detachEvent
 * @class dhx.ui.imagebutton
 * @method detachEvent
 * @memberOf dhx.ui.imagebutton
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.imagebutton.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.imagebutton.focus
 * @class dhx.ui.imagebutton
 * @method focus
 * @memberOf dhx.ui.imagebutton
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.imagebutton.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.imagebutton.getInput
 * @class dhx.ui.imagebutton
 * @method getInput
 * @memberOf dhx.ui.imagebutton
 * @example 
 */
 dhx.ui.imagebutton.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.imagebutton.getNode
 * @class dhx.ui.imagebutton
 * @method getNode
 * @memberOf dhx.ui.imagebutton
 * @example 
 */
 dhx.ui.imagebutton.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.imagebutton.getParent
 * @class dhx.ui.imagebutton
 * @method getParent
 * @memberOf dhx.ui.imagebutton
 * @example 
 */
 dhx.ui.imagebutton.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.imagebutton.getValue
 * @class dhx.ui.imagebutton
 * @method getValue
 * @memberOf dhx.ui.imagebutton
 * @example 
 */
 dhx.ui.imagebutton.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.imagebutton.hasEvent
 * @class dhx.ui.imagebutton
 * @method hasEvent
 * @memberOf dhx.ui.imagebutton
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.imagebutton.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.imagebutton.hide
 * @class dhx.ui.imagebutton
 * @method hide
 * @memberOf dhx.ui.imagebutton
 * @example $$('myform').hide();
 */
 dhx.ui.imagebutton.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.imagebutton.isVisible
 * @class dhx.ui.imagebutton
 * @method isVisible
 * @memberOf dhx.ui.imagebutton
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.imagebutton.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.imagebutton.mapEvent
 * @class dhx.ui.imagebutton
 * @method mapEvent
 * @memberOf dhx.ui.imagebutton
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.imagebutton.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.imagebutton.refresh
 * @class dhx.ui.imagebutton
 * @method refresh
 * @memberOf dhx.ui.imagebutton
 * @example 
 */
 dhx.ui.imagebutton.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.imagebutton.render
 * @class dhx.ui.imagebutton
 * @method render
 * @memberOf dhx.ui.imagebutton
 * @example 
 */
 dhx.ui.imagebutton.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.imagebutton.resize
 * @class dhx.ui.imagebutton
 * @method resize
 * @memberOf dhx.ui.imagebutton
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.imagebutton.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.imagebutton.setValue
 * @class dhx.ui.imagebutton
 * @method setValue
 * @memberOf dhx.ui.imagebutton
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.imagebutton.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.imagebutton.show
 * @class dhx.ui.imagebutton
 * @method show
 * @memberOf dhx.ui.imagebutton
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.imagebutton.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.imagebutton.unblockEvent
 * @class dhx.ui.imagebutton
 * @method unblockEvent
 * @memberOf dhx.ui.imagebutton
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.imagebutton.unblockEvent = function() {};


/**
*
* dhx.ui.input object class.
* @id dhx.ui.input
* @class dhx.ui.input
* @constructor
* @alias dhx.ui.input.prototype

 * @return {dhx.ui.input}
 */


dhx.ui.input.config = {

/**
 * unknown
 * @id dhx.ui.input.config.attributes
 * @type unknown
 * @property
 */
attributes: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.input.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.input.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.input.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.input.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.input.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.input.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.input.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.input.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.input.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.input.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.input.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.input.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.input.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.input.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.input.adjust
 * @class dhx.ui.input
 * @method adjust
 * @memberOf dhx.ui.input
 * @example 
 */
 dhx.ui.input.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.input.attachEvent
 * @class dhx.ui.input
 * @method attachEvent
 * @memberOf dhx.ui.input
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.input.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.input.bind
 * @class dhx.ui.input
 * @method bind
 * @memberOf dhx.ui.input
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.input.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.input.blockEvent
 * @class dhx.ui.input
 * @method blockEvent
 * @memberOf dhx.ui.input
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.input.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.input.callEvent
 * @class dhx.ui.input
 * @method callEvent
 * @memberOf dhx.ui.input
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.input.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.input.define
 * @class dhx.ui.input
 * @method define
 * @memberOf dhx.ui.input
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.input.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.input.destructor
 * @class dhx.ui.input
 * @method destructor
 * @memberOf dhx.ui.input
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.input.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.input.detachEvent
 * @class dhx.ui.input
 * @method detachEvent
 * @memberOf dhx.ui.input
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.input.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.input.focus
 * @class dhx.ui.input
 * @method focus
 * @memberOf dhx.ui.input
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.input.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.input.getInput
 * @class dhx.ui.input
 * @method getInput
 * @memberOf dhx.ui.input
 * @example 
 */
 dhx.ui.input.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.input.getNode
 * @class dhx.ui.input
 * @method getNode
 * @memberOf dhx.ui.input
 * @example 
 */
 dhx.ui.input.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.input.getParent
 * @class dhx.ui.input
 * @method getParent
 * @memberOf dhx.ui.input
 * @example 
 */
 dhx.ui.input.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.input.getValue
 * @class dhx.ui.input
 * @method getValue
 * @memberOf dhx.ui.input
 * @example 
 */
 dhx.ui.input.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.input.hasEvent
 * @class dhx.ui.input
 * @method hasEvent
 * @memberOf dhx.ui.input
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.input.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.input.hide
 * @class dhx.ui.input
 * @method hide
 * @memberOf dhx.ui.input
 * @example $$('myform').hide();
 */
 dhx.ui.input.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.input.isVisible
 * @class dhx.ui.input
 * @method isVisible
 * @memberOf dhx.ui.input
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.input.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.input.mapEvent
 * @class dhx.ui.input
 * @method mapEvent
 * @memberOf dhx.ui.input
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.input.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.input.refresh
 * @class dhx.ui.input
 * @method refresh
 * @memberOf dhx.ui.input
 * @example 
 */
 dhx.ui.input.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.input.render
 * @class dhx.ui.input
 * @method render
 * @memberOf dhx.ui.input
 * @example 
 */
 dhx.ui.input.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.input.resize
 * @class dhx.ui.input
 * @method resize
 * @memberOf dhx.ui.input
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.input.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.input.setValue
 * @class dhx.ui.input
 * @method setValue
 * @memberOf dhx.ui.input
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.input.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.input.show
 * @class dhx.ui.input
 * @method show
 * @memberOf dhx.ui.input
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.input.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.input.unblockEvent
 * @class dhx.ui.input
 * @method unblockEvent
 * @memberOf dhx.ui.input
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.input.unblockEvent = function() {};


/**
*
* dhx.ui.label object class.
* @id dhx.ui.label
* @class dhx.ui.label
* @constructor
* @alias dhx.ui.label.prototype

 * @return {dhx.ui.label}
 */


dhx.ui.label.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.label.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.label.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.label.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.label.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.label.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.label.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * text label of control
 * @id dhx.ui.label.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.label.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.label.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.label.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.label.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.label.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.label.adjust
 * @class dhx.ui.label
 * @method adjust
 * @memberOf dhx.ui.label
 * @example 
 */
 dhx.ui.label.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.label.attachEvent
 * @class dhx.ui.label
 * @method attachEvent
 * @memberOf dhx.ui.label
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.label.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.label.bind
 * @class dhx.ui.label
 * @method bind
 * @memberOf dhx.ui.label
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.label.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.label.blockEvent
 * @class dhx.ui.label
 * @method blockEvent
 * @memberOf dhx.ui.label
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.label.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.label.callEvent
 * @class dhx.ui.label
 * @method callEvent
 * @memberOf dhx.ui.label
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.label.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.label.define
 * @class dhx.ui.label
 * @method define
 * @memberOf dhx.ui.label
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.label.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.label.destructor
 * @class dhx.ui.label
 * @method destructor
 * @memberOf dhx.ui.label
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.label.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.label.detachEvent
 * @class dhx.ui.label
 * @method detachEvent
 * @memberOf dhx.ui.label
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.label.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.label.focus
 * @class dhx.ui.label
 * @method focus
 * @memberOf dhx.ui.label
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.label.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.label.getInput
 * @class dhx.ui.label
 * @method getInput
 * @memberOf dhx.ui.label
 * @example 
 */
 dhx.ui.label.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.label.getNode
 * @class dhx.ui.label
 * @method getNode
 * @memberOf dhx.ui.label
 * @example 
 */
 dhx.ui.label.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.label.getParent
 * @class dhx.ui.label
 * @method getParent
 * @memberOf dhx.ui.label
 * @example 
 */
 dhx.ui.label.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.label.getValue
 * @class dhx.ui.label
 * @method getValue
 * @memberOf dhx.ui.label
 * @example 
 */
 dhx.ui.label.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.label.hasEvent
 * @class dhx.ui.label
 * @method hasEvent
 * @memberOf dhx.ui.label
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.label.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.label.hide
 * @class dhx.ui.label
 * @method hide
 * @memberOf dhx.ui.label
 * @example $$('myform').hide();
 */
 dhx.ui.label.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.label.isVisible
 * @class dhx.ui.label
 * @method isVisible
 * @memberOf dhx.ui.label
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.label.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.label.mapEvent
 * @class dhx.ui.label
 * @method mapEvent
 * @memberOf dhx.ui.label
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.label.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.label.refresh
 * @class dhx.ui.label
 * @method refresh
 * @memberOf dhx.ui.label
 * @example 
 */
 dhx.ui.label.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.label.render
 * @class dhx.ui.label
 * @method render
 * @memberOf dhx.ui.label
 * @example 
 */
 dhx.ui.label.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.label.resize
 * @class dhx.ui.label
 * @method resize
 * @memberOf dhx.ui.label
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.label.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.label.setValue
 * @class dhx.ui.label
 * @method setValue
 * @memberOf dhx.ui.label
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.label.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.label.show
 * @class dhx.ui.label
 * @method show
 * @memberOf dhx.ui.label
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.label.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.label.unblockEvent
 * @class dhx.ui.label
 * @method unblockEvent
 * @memberOf dhx.ui.label
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.label.unblockEvent = function() {};


/**
*
* dhx.ui.layout object class.
* @id dhx.ui.layout
* @class dhx.ui.layout
* @constructor
* @alias dhx.ui.layout.prototype

 * @return {dhx.ui.layout}
 */


dhx.ui.layout.config = {

/**
 * array of views arranged horizontally
 * @id dhx.ui.layout.config.cols
 * @type object
 * @property
 */
cols: '',


/**
 * html container or its id where view needs being initialized
 * @id dhx.ui.layout.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * class name for view container
 * @id dhx.ui.layout.config.css
 * @type string
 * @property
 */
css: '',


/**
 * view gravity (1 by default)
 * @id dhx.ui.layout.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * view height
 * @id dhx.ui.layout.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.layout.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.layout.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * array of views arranged vertically
 * @id dhx.ui.layout.config.rows
 * @type object
 * @property
 */
rows: '',


/**
 * defines border of layout
 * @id dhx.ui.layout.config.type
 * @type &#039;wide&#039;, &#039;head&#039; or &#039;clean&#039;
 * @property
 */
type: '',


/**
 * view width
 * @id dhx.ui.layout.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.layout.adjust
 * @class dhx.ui.layout
 * @method adjust
 * @memberOf dhx.ui.layout
 * @example 
 */
 dhx.ui.layout.adjust = function() {};
/**
 * binds components
 * @id dhx.ui.layout.bind
 * @class dhx.ui.layout
 * @method bind
 * @memberOf dhx.ui.layout
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.layout.bind = function(target, rule, format) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.layout.define
 * @class dhx.ui.layout
 * @method define
 * @memberOf dhx.ui.layout
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.layout.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.layout.destructor
 * @class dhx.ui.layout
 * @method destructor
 * @memberOf dhx.ui.layout
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.layout.destructor = function() {};
/**
 * some unknown method
 * @id dhx.ui.layout.first
 * @class dhx.ui.layout
 * @method first
 * @memberOf dhx.ui.layout
 * @example 
 */
 dhx.ui.layout.first = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.layout.getNode
 * @class dhx.ui.layout
 * @method getNode
 * @memberOf dhx.ui.layout
 * @example 
 */
 dhx.ui.layout.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.layout.getParent
 * @class dhx.ui.layout
 * @method getParent
 * @memberOf dhx.ui.layout
 * @example 
 */
 dhx.ui.layout.getParent = function() {};
/**
 * hides view
 * @id dhx.ui.layout.hide
 * @class dhx.ui.layout
 * @method hide
 * @memberOf dhx.ui.layout
 * @example $$('myform').hide();
 */
 dhx.ui.layout.hide = function() {};
/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui.layout.index
 * @class dhx.ui.layout
 * @method index
 * @memberOf dhx.ui.layout
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui.layout.index = function(obj) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.layout.isVisible
 * @class dhx.ui.layout
 * @method isVisible
 * @memberOf dhx.ui.layout
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.layout.isVisible = function(base_id, prev_id) {};
/**
 * rebuilds layout
 * @id dhx.ui.layout.reconstruct
 * @class dhx.ui.layout
 * @method reconstruct
 * @memberOf dhx.ui.layout
 * @example 
 */
 dhx.ui.layout.reconstruct = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.layout.resize
 * @class dhx.ui.layout
 * @method resize
 * @memberOf dhx.ui.layout
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.layout.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.layout.resizeChildren
 * @class dhx.ui.layout
 * @method resizeChildren
 * @memberOf dhx.ui.layout
 * @example 
 */
 dhx.ui.layout.resizeChildren = function() {};
/**
 * makes view visible
 * @id dhx.ui.layout.show
 * @class dhx.ui.layout
 * @method show
 * @memberOf dhx.ui.layout
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.layout.show = function(animate_settings) {};
/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui.layout.showBatch
 * @class dhx.ui.layout
 * @method showBatch
 * @memberOf dhx.ui.layout
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui.layout.showBatch = function(name) {};


/**
*
* dhx.ui.list object class.
* @id dhx.ui.list
* @class dhx.ui.list
* @constructor
* @alias dhx.ui.list.prototype

 * @return {dhx.ui.list}
 */


dhx.ui.list.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.list.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.list.config.css
 * @type string
 * @property
 */
css: '',


/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui.list.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',


/**
 * loaded data
 * @id dhx.ui.list.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * custom DataStore object
 * @id dhx.ui.list.config.datastore
 * @type object
 * @property
 */
datastore: '',


/**
 * type of loaded data
 * @id dhx.ui.list.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.list.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.list.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.list.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.list.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.list.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.list.config.scheme
 * @type unknown
 * @property
 */
scheme: '',


/**
 * enables/disables scroll
 * @id dhx.ui.list.config.scroll
 * @type boolean
 * @property
 */
scroll: '',


/**
 * enables/disables item selection or multiselection in grid
 * @id dhx.ui.list.config.select
 * @type boolean,string
 * @property
 */
select: '',


/**
 * item template
 * @id dhx.ui.list.config.template
 * @type any
 * @property
 */
template: '',


/**
 * object that specifies items list presentation
 * @id dhx.ui.list.config.type
 * @type object
 * @property
 */
type: '',


/**
 * data url
 * @id dhx.ui.list.config.url
 * @type string
 * @property
 */
url: '',


/**
 * width of view
 * @id dhx.ui.list.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * adds item to the store
 * @id dhx.ui.list.add
 * @class dhx.ui.list
 * @method add
 * @memberOf dhx.ui.list
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui.list.add = function(obj,index) {};
/**
 * 
 * @id dhx.ui.list.adjust
 * @class dhx.ui.list
 * @method adjust
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.list.attachEvent
 * @class dhx.ui.list
 * @method attachEvent
 * @memberOf dhx.ui.list
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.list.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.list.bind
 * @class dhx.ui.list
 * @method bind
 * @memberOf dhx.ui.list
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.list.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.list.blockEvent
 * @class dhx.ui.list
 * @method blockEvent
 * @memberOf dhx.ui.list
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.list.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.list.callEvent
 * @class dhx.ui.list
 * @method callEvent
 * @memberOf dhx.ui.list
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.list.callEvent = function(type,params) {};
/**
 * removes all items from the component
 * @id dhx.ui.list.clearAll
 * @class dhx.ui.list
 * @method clearAll
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.clearAll = function() {};
/**
 * applies new type settings
 * @id dhx.ui.list.customize
 * @class dhx.ui.list
 * @method customize
 * @memberOf dhx.ui.list
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui.list.customize = function(obj) {};
/**
 * gets count of items
 * @id dhx.ui.list.dataCount
 * @class dhx.ui.list
 * @method dataCount
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.dataCount = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.list.define
 * @class dhx.ui.list
 * @method define
 * @memberOf dhx.ui.list
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.list.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.list.destructor
 * @class dhx.ui.list
 * @method destructor
 * @memberOf dhx.ui.list
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.list.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.list.detachEvent
 * @class dhx.ui.list
 * @method detachEvent
 * @memberOf dhx.ui.list
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.list.detachEvent = function(id) {};
/**
 * checks if the item with such ID exists
 * @id dhx.ui.list.exists
 * @class dhx.ui.list
 * @method exists
 * @memberOf dhx.ui.list
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui.list.exists = function(id) {};
/**
 * filters data
 * @id dhx.ui.list.filter
 * @class dhx.ui.list
 * @method filter
 * @memberOf dhx.ui.list
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui.list.filter = function(text,value,preserve) {};
/**
 * gets the ID of the first item
 * @id dhx.ui.list.first
 * @class dhx.ui.list
 * @method first
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.first = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.list.getNode
 * @class dhx.ui.list
 * @method getNode
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.list.getParent
 * @class dhx.ui.list
 * @method getParent
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.getParent = function() {};
/**
 * returns ID of selected item(s)
 * @id dhx.ui.list.getSelected
 * @class dhx.ui.list
 * @method getSelected
 * @memberOf dhx.ui.list
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui.list.getSelected = function(as_array) {};
/**
 * checks whether a component has an event
 * @id dhx.ui.list.hasEvent
 * @class dhx.ui.list
 * @method hasEvent
 * @memberOf dhx.ui.list
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.list.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.list.hide
 * @class dhx.ui.list
 * @method hide
 * @memberOf dhx.ui.list
 * @example $$('myform').hide();
 */
 dhx.ui.list.hide = function() {};
/**
 * gets the id of an item with taken index
 * @id dhx.ui.list.idByIndex
 * @class dhx.ui.list
 * @method idByIndex
 * @memberOf dhx.ui.list
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui.list.idByIndex = function(index) {};
/**
 * the index of the item in question
 * @id dhx.ui.list.indexById
 * @class dhx.ui.list
 * @method indexById
 * @memberOf dhx.ui.list
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui.list.indexById = function(id) {};
/**
 * checks if item is selected or not
 * @id dhx.ui.list.isSelected
 * @class dhx.ui.list
 * @method isSelected
 * @memberOf dhx.ui.list
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui.list.isSelected = function(id) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.list.isVisible
 * @class dhx.ui.list
 * @method isVisible
 * @memberOf dhx.ui.list
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.list.isVisible = function(base_id, prev_id) {};
/**
 * gets the object of a data item
 * @id dhx.ui.list.item
 * @class dhx.ui.list
 * @method item
 * @memberOf dhx.ui.list
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui.list.item = function(id) {};
/**
 * gets the id of the last item
 * @id dhx.ui.list.last
 * @class dhx.ui.list
 * @method last
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.last = function() {};
/**
 * loads values from external datasource
 * @id dhx.ui.list.load
 * @class dhx.ui.list
 * @method load
 * @memberOf dhx.ui.list
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui.list.load = function(url,call) {};
/**
 * some unknown method
 * @id dhx.ui.list.loadNext
 * @class dhx.ui.list
 * @method loadNext
 * @memberOf dhx.ui.list
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui.list.loadNext = function(count, start) {};
/**
 * 
 * @id dhx.ui.list.locate
 * @class dhx.ui.list
 * @method locate
 * @memberOf dhx.ui.list
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui.list.locate = function(e) {};
/**
 * routes events from one object to another
 * @id dhx.ui.list.mapEvent
 * @class dhx.ui.list
 * @method mapEvent
 * @memberOf dhx.ui.list
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.list.mapEvent = function(map) {};
/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui.list.next
 * @class dhx.ui.list
 * @method next
 * @memberOf dhx.ui.list
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.list.next = function(id,step) {};
/**
 * addes data from a datasource
 * @id dhx.ui.list.parse
 * @class dhx.ui.list
 * @method parse
 * @memberOf dhx.ui.list
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui.list.parse = function(data,type) {};
/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui.list.previous
 * @class dhx.ui.list
 * @method previous
 * @memberOf dhx.ui.list
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.list.previous = function(id,step) {};
/**
 * repaint the whole view or a certain item
 * @id dhx.ui.list.refresh
 * @class dhx.ui.list
 * @method refresh
 * @memberOf dhx.ui.list
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui.list.refresh = function(id) {};
/**
 * removes element from datastore
 * @id dhx.ui.list.remove
 * @class dhx.ui.list
 * @method remove
 * @memberOf dhx.ui.list
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui.list.remove = function(id) {};
/**
 * renders a current state of an item or the whole component
 * @id dhx.ui.list.render
 * @class dhx.ui.list
 * @method render
 * @memberOf dhx.ui.list
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui.list.render = function(id,data,type) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.list.resize
 * @class dhx.ui.list
 * @method resize
 * @memberOf dhx.ui.list
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.list.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.list.scrollState
 * @class dhx.ui.list
 * @method scrollState
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.ui.list.scrollTo
 * @class dhx.ui.list
 * @method scrollTo
 * @memberOf dhx.ui.list
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.list.scrollTo = function(x,y) {};
/**
 * selects item
 * @id dhx.ui.list.select
 * @class dhx.ui.list
 * @method select
 * @memberOf dhx.ui.list
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui.list.select = function(id,non_modal,continue_old) {};
/**
 * selects all items
 * @id dhx.ui.list.selectAll
 * @class dhx.ui.list
 * @method selectAll
 * @memberOf dhx.ui.list
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui.list.selectAll = function(from,to) {};
/**
 * serializes data to a json object
 * @id dhx.ui.list.serialize
 * @class dhx.ui.list
 * @method serialize
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.serialize = function() {};
/**
 * makes view visible
 * @id dhx.ui.list.show
 * @class dhx.ui.list
 * @method show
 * @memberOf dhx.ui.list
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.list.show = function(animate_settings) {};
/**
 * shows the specified item
 * @id dhx.ui.list.showItem
 * @class dhx.ui.list
 * @method showItem
 * @memberOf dhx.ui.list
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui.list.showItem = function(id) {};
/**
 * sorts datastore
 * @id dhx.ui.list.sort
 * @class dhx.ui.list
 * @method sort
 * @memberOf dhx.ui.list
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui.list.sort = function(by, dir, as) {};
/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui.list.sync
 * @class dhx.ui.list
 * @method sync
 * @memberOf dhx.ui.list
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui.list.sync = function(source, filter, silent) {};
/**
 * enables event triggering
 * @id dhx.ui.list.unblockEvent
 * @class dhx.ui.list
 * @method unblockEvent
 * @memberOf dhx.ui.list
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.list.unblockEvent = function() {};
/**
 * unselects item
 * @id dhx.ui.list.unselect
 * @class dhx.ui.list
 * @method unselect
 * @memberOf dhx.ui.list
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui.list.unselect = function(id) {};
/**
 * unselects all items
 * @id dhx.ui.list.unselectAll
 * @class dhx.ui.list
 * @method unselectAll
 * @memberOf dhx.ui.list
 * @example 
 */
 dhx.ui.list.unselectAll = function() {};
/**
 * sets properties of the data item
 * @id dhx.ui.list.update
 * @class dhx.ui.list
 * @method update
 * @memberOf dhx.ui.list
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui.list.update = function(id,data) {};


/**
*
* dhx.ui.multiview object class.
* @id dhx.ui.multiview
* @class dhx.ui.multiview
* @constructor
* @alias dhx.ui.multiview.prototype

 * @return {dhx.ui.multiview}
 */


dhx.ui.multiview.config = {

/**
 * defines animation on view change (object with direction, type and subtype properties) or disables animation (false)
 * @id dhx.ui.multiview.config.animate
 * @type boolean,object
 * @property
 */
animate: '',


/**
 * the array with views objects
 * @id dhx.ui.multiview.config.cells
 * @type object
 * @property
 */
cells: '',


/**
 * array of views arranged horizontally
 * @id dhx.ui.multiview.config.cols
 * @type object
 * @property
 */
cols: '',


/**
 * html container or its id where view needs being initialized
 * @id dhx.ui.multiview.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * class name for view container
 * @id dhx.ui.multiview.config.css
 * @type string
 * @property
 */
css: '',


/**
 * view gravity (1 by default)
 * @id dhx.ui.multiview.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * view height
 * @id dhx.ui.multiview.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.multiview.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.multiview.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.multiview.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * array of views arranged vertically
 * @id dhx.ui.multiview.config.rows
 * @type object
 * @property
 */
rows: '',


/**
 * view width
 * @id dhx.ui.multiview.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.multiview.adjust
 * @class dhx.ui.multiview
 * @method adjust
 * @memberOf dhx.ui.multiview
 * @example 
 */
 dhx.ui.multiview.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.multiview.attachEvent
 * @class dhx.ui.multiview
 * @method attachEvent
 * @memberOf dhx.ui.multiview
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.multiview.attachEvent = function(type,functor,id) {};
/**
 * switches multiview to previously active view
 * @id dhx.ui.multiview.back
 * @class dhx.ui.multiview
 * @method back
 * @memberOf dhx.ui.multiview
 * @param {String} step back(step)
 * @example 
 */
 dhx.ui.multiview.back = function(step) {};
/**
 * binds components
 * @id dhx.ui.multiview.bind
 * @class dhx.ui.multiview
 * @method bind
 * @memberOf dhx.ui.multiview
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.multiview.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.multiview.blockEvent
 * @class dhx.ui.multiview
 * @method blockEvent
 * @memberOf dhx.ui.multiview
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.multiview.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.multiview.callEvent
 * @class dhx.ui.multiview
 * @method callEvent
 * @memberOf dhx.ui.multiview
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.multiview.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.multiview.define
 * @class dhx.ui.multiview
 * @method define
 * @memberOf dhx.ui.multiview
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.multiview.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.multiview.destructor
 * @class dhx.ui.multiview
 * @method destructor
 * @memberOf dhx.ui.multiview
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.multiview.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.multiview.detachEvent
 * @class dhx.ui.multiview
 * @method detachEvent
 * @memberOf dhx.ui.multiview
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.multiview.detachEvent = function(id) {};
/**
 * some unknown method
 * @id dhx.ui.multiview.first
 * @class dhx.ui.multiview
 * @method first
 * @memberOf dhx.ui.multiview
 * @example 
 */
 dhx.ui.multiview.first = function() {};
/**
 * returns id of currently visible sub-view
 * @id dhx.ui.multiview.getActive
 * @class dhx.ui.multiview
 * @method getActive
 * @memberOf dhx.ui.multiview
 * @example 
 */
 dhx.ui.multiview.getActive = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.multiview.getNode
 * @class dhx.ui.multiview
 * @method getNode
 * @memberOf dhx.ui.multiview
 * @example 
 */
 dhx.ui.multiview.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.multiview.getParent
 * @class dhx.ui.multiview
 * @method getParent
 * @memberOf dhx.ui.multiview
 * @example 
 */
 dhx.ui.multiview.getParent = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.multiview.hasEvent
 * @class dhx.ui.multiview
 * @method hasEvent
 * @memberOf dhx.ui.multiview
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.multiview.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.multiview.hide
 * @class dhx.ui.multiview
 * @method hide
 * @memberOf dhx.ui.multiview
 * @example $$('myform').hide();
 */
 dhx.ui.multiview.hide = function() {};
/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui.multiview.index
 * @class dhx.ui.multiview
 * @method index
 * @memberOf dhx.ui.multiview
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui.multiview.index = function(obj) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.multiview.isVisible
 * @class dhx.ui.multiview
 * @method isVisible
 * @memberOf dhx.ui.multiview
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.multiview.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.multiview.mapEvent
 * @class dhx.ui.multiview
 * @method mapEvent
 * @memberOf dhx.ui.multiview
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.multiview.mapEvent = function(map) {};
/**
 * rebuilds layout
 * @id dhx.ui.multiview.reconstruct
 * @class dhx.ui.multiview
 * @method reconstruct
 * @memberOf dhx.ui.multiview
 * @example 
 */
 dhx.ui.multiview.reconstruct = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.multiview.resize
 * @class dhx.ui.multiview
 * @method resize
 * @memberOf dhx.ui.multiview
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.multiview.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.multiview.resizeChildren
 * @class dhx.ui.multiview
 * @method resizeChildren
 * @memberOf dhx.ui.multiview
 * @example 
 */
 dhx.ui.multiview.resizeChildren = function() {};
/**
 * makes view visible
 * @id dhx.ui.multiview.show
 * @class dhx.ui.multiview
 * @method show
 * @memberOf dhx.ui.multiview
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.multiview.show = function(animate_settings) {};
/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui.multiview.showBatch
 * @class dhx.ui.multiview
 * @method showBatch
 * @memberOf dhx.ui.multiview
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui.multiview.showBatch = function(name) {};
/**
 * enables event triggering
 * @id dhx.ui.multiview.unblockEvent
 * @class dhx.ui.multiview
 * @method unblockEvent
 * @memberOf dhx.ui.multiview
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.multiview.unblockEvent = function() {};


/**
*
* dhx.ui.pagelist object class.
* @id dhx.ui.pagelist
* @class dhx.ui.pagelist
* @constructor
* @alias dhx.ui.pagelist.prototype

 * @return {dhx.ui.pagelist}
 */


dhx.ui.pagelist.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.pagelist.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.pagelist.config.css
 * @type string
 * @property
 */
css: '',


/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.ui.pagelist.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',


/**
 * loaded data
 * @id dhx.ui.pagelist.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * custom DataStore object
 * @id dhx.ui.pagelist.config.datastore
 * @type object
 * @property
 */
datastore: '',


/**
 * type of loaded data
 * @id dhx.ui.pagelist.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.pagelist.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.pagelist.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.pagelist.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.pagelist.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.pagelist.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * 
 * @id dhx.ui.pagelist.config.panel
 * @type 
 * @property
 */
panel: '',


/**
 * unknown
 * @id dhx.ui.pagelist.config.scheme
 * @type unknown
 * @property
 */
scheme: '',


/**
 * defines offset for the scroll stop
 * @id dhx.ui.pagelist.config.scrollOffset
 * @type dimension
 * @property
 */
scrollOffset: '',


/**
 * enables/disables scroll
 * @id dhx.ui.pagelist.config.scroll
 * @type boolean
 * @property
 */
scroll: '',


/**
 * enables/disables item selection or multiselection in grid
 * @id dhx.ui.pagelist.config.select
 * @type boolean,string
 * @property
 */
select: '',


/**
 * item template
 * @id dhx.ui.pagelist.config.template
 * @type any
 * @property
 */
template: '',


/**
 * object that specifies items list presentation
 * @id dhx.ui.pagelist.config.type
 * @type object
 * @property
 */
type: '',


/**
 * data url
 * @id dhx.ui.pagelist.config.url
 * @type string
 * @property
 */
url: '',


/**
 * width of view
 * @id dhx.ui.pagelist.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * adds item to the store
 * @id dhx.ui.pagelist.add
 * @class dhx.ui.pagelist
 * @method add
 * @memberOf dhx.ui.pagelist
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.ui.pagelist.add = function(obj,index) {};
/**
 * 
 * @id dhx.ui.pagelist.adjust
 * @class dhx.ui.pagelist
 * @method adjust
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.pagelist.attachEvent
 * @class dhx.ui.pagelist
 * @method attachEvent
 * @memberOf dhx.ui.pagelist
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.pagelist.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.pagelist.bind
 * @class dhx.ui.pagelist
 * @method bind
 * @memberOf dhx.ui.pagelist
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.pagelist.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.pagelist.blockEvent
 * @class dhx.ui.pagelist
 * @method blockEvent
 * @memberOf dhx.ui.pagelist
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.pagelist.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.pagelist.callEvent
 * @class dhx.ui.pagelist
 * @method callEvent
 * @memberOf dhx.ui.pagelist
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.pagelist.callEvent = function(type,params) {};
/**
 * removes all items from the component
 * @id dhx.ui.pagelist.clearAll
 * @class dhx.ui.pagelist
 * @method clearAll
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.clearAll = function() {};
/**
 * applies new type settings
 * @id dhx.ui.pagelist.customize
 * @class dhx.ui.pagelist
 * @method customize
 * @memberOf dhx.ui.pagelist
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.ui.pagelist.customize = function(obj) {};
/**
 * gets count of items
 * @id dhx.ui.pagelist.dataCount
 * @class dhx.ui.pagelist
 * @method dataCount
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.dataCount = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.pagelist.define
 * @class dhx.ui.pagelist
 * @method define
 * @memberOf dhx.ui.pagelist
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.pagelist.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.pagelist.destructor
 * @class dhx.ui.pagelist
 * @method destructor
 * @memberOf dhx.ui.pagelist
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.pagelist.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.pagelist.detachEvent
 * @class dhx.ui.pagelist
 * @method detachEvent
 * @memberOf dhx.ui.pagelist
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.pagelist.detachEvent = function(id) {};
/**
 * checks if the item with such ID exists
 * @id dhx.ui.pagelist.exists
 * @class dhx.ui.pagelist
 * @method exists
 * @memberOf dhx.ui.pagelist
 * @param {String} id exists(id)
 * @example 
 */
 dhx.ui.pagelist.exists = function(id) {};
/**
 * filters data
 * @id dhx.ui.pagelist.filter
 * @class dhx.ui.pagelist
 * @method filter
 * @memberOf dhx.ui.pagelist
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.ui.pagelist.filter = function(text,value,preserve) {};
/**
 * gets the ID of the first item
 * @id dhx.ui.pagelist.first
 * @class dhx.ui.pagelist
 * @method first
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.first = function() {};
/**
 * returns id of currently visible sub-view
 * @id dhx.ui.pagelist.getActive
 * @class dhx.ui.pagelist
 * @method getActive
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.getActive = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.pagelist.getNode
 * @class dhx.ui.pagelist
 * @method getNode
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.pagelist.getParent
 * @class dhx.ui.pagelist
 * @method getParent
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.getParent = function() {};
/**
 * returns ID of selected item(s)
 * @id dhx.ui.pagelist.getSelected
 * @class dhx.ui.pagelist
 * @method getSelected
 * @memberOf dhx.ui.pagelist
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.ui.pagelist.getSelected = function(as_array) {};
/**
 * checks whether a component has an event
 * @id dhx.ui.pagelist.hasEvent
 * @class dhx.ui.pagelist
 * @method hasEvent
 * @memberOf dhx.ui.pagelist
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.pagelist.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.pagelist.hide
 * @class dhx.ui.pagelist
 * @method hide
 * @memberOf dhx.ui.pagelist
 * @example $$('myform').hide();
 */
 dhx.ui.pagelist.hide = function() {};
/**
 * gets the id of an item with taken index
 * @id dhx.ui.pagelist.idByIndex
 * @class dhx.ui.pagelist
 * @method idByIndex
 * @memberOf dhx.ui.pagelist
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.ui.pagelist.idByIndex = function(index) {};
/**
 * the index of the item in question
 * @id dhx.ui.pagelist.indexById
 * @class dhx.ui.pagelist
 * @method indexById
 * @memberOf dhx.ui.pagelist
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.ui.pagelist.indexById = function(id) {};
/**
 * checks if item is selected or not
 * @id dhx.ui.pagelist.isSelected
 * @class dhx.ui.pagelist
 * @method isSelected
 * @memberOf dhx.ui.pagelist
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.ui.pagelist.isSelected = function(id) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.pagelist.isVisible
 * @class dhx.ui.pagelist
 * @method isVisible
 * @memberOf dhx.ui.pagelist
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.pagelist.isVisible = function(base_id, prev_id) {};
/**
 * gets the object of a data item
 * @id dhx.ui.pagelist.item
 * @class dhx.ui.pagelist
 * @method item
 * @memberOf dhx.ui.pagelist
 * @param {String} id item(id)
 * @example 
 */
 dhx.ui.pagelist.item = function(id) {};
/**
 * gets the id of the last item
 * @id dhx.ui.pagelist.last
 * @class dhx.ui.pagelist
 * @method last
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.last = function() {};
/**
 * loads values from external datasource
 * @id dhx.ui.pagelist.load
 * @class dhx.ui.pagelist
 * @method load
 * @memberOf dhx.ui.pagelist
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui.pagelist.load = function(url,call) {};
/**
 * some unknown method
 * @id dhx.ui.pagelist.loadNext
 * @class dhx.ui.pagelist
 * @method loadNext
 * @memberOf dhx.ui.pagelist
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.ui.pagelist.loadNext = function(count, start) {};
/**
 * 
 * @id dhx.ui.pagelist.locate
 * @class dhx.ui.pagelist
 * @method locate
 * @memberOf dhx.ui.pagelist
 * @param {String} e locate(e)
 * @example 
 */
 dhx.ui.pagelist.locate = function(e) {};
/**
 * routes events from one object to another
 * @id dhx.ui.pagelist.mapEvent
 * @class dhx.ui.pagelist
 * @method mapEvent
 * @memberOf dhx.ui.pagelist
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.pagelist.mapEvent = function(map) {};
/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.ui.pagelist.next
 * @class dhx.ui.pagelist
 * @method next
 * @memberOf dhx.ui.pagelist
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.pagelist.next = function(id,step) {};
/**
 * addes data from a datasource
 * @id dhx.ui.pagelist.parse
 * @class dhx.ui.pagelist
 * @method parse
 * @memberOf dhx.ui.pagelist
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui.pagelist.parse = function(data,type) {};
/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.ui.pagelist.previous
 * @class dhx.ui.pagelist
 * @method previous
 * @memberOf dhx.ui.pagelist
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.ui.pagelist.previous = function(id,step) {};
/**
 * repaint the whole view or a certain item
 * @id dhx.ui.pagelist.refresh
 * @class dhx.ui.pagelist
 * @method refresh
 * @memberOf dhx.ui.pagelist
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.ui.pagelist.refresh = function(id) {};
/**
 * removes element from datastore
 * @id dhx.ui.pagelist.remove
 * @class dhx.ui.pagelist
 * @method remove
 * @memberOf dhx.ui.pagelist
 * @param {String} id remove(id)
 * @example 
 */
 dhx.ui.pagelist.remove = function(id) {};
/**
 * renders a current state of an item or the whole component
 * @id dhx.ui.pagelist.render
 * @class dhx.ui.pagelist
 * @method render
 * @memberOf dhx.ui.pagelist
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.ui.pagelist.render = function(id,data,type) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.pagelist.resize
 * @class dhx.ui.pagelist
 * @method resize
 * @memberOf dhx.ui.pagelist
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.pagelist.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.pagelist.scrollState
 * @class dhx.ui.pagelist
 * @method scrollState
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.ui.pagelist.scrollTo
 * @class dhx.ui.pagelist
 * @method scrollTo
 * @memberOf dhx.ui.pagelist
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.pagelist.scrollTo = function(x,y) {};
/**
 * selects item
 * @id dhx.ui.pagelist.select
 * @class dhx.ui.pagelist
 * @method select
 * @memberOf dhx.ui.pagelist
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.ui.pagelist.select = function(id,non_modal,continue_old) {};
/**
 * selects all items
 * @id dhx.ui.pagelist.selectAll
 * @class dhx.ui.pagelist
 * @method selectAll
 * @memberOf dhx.ui.pagelist
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.ui.pagelist.selectAll = function(from,to) {};
/**
 * serializes data to a json object
 * @id dhx.ui.pagelist.serialize
 * @class dhx.ui.pagelist
 * @method serialize
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.serialize = function() {};
/**
 * makes view visible
 * @id dhx.ui.pagelist.show
 * @class dhx.ui.pagelist
 * @method show
 * @memberOf dhx.ui.pagelist
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.pagelist.show = function(animate_settings) {};
/**
 * shows the specified item
 * @id dhx.ui.pagelist.showItem
 * @class dhx.ui.pagelist
 * @method showItem
 * @memberOf dhx.ui.pagelist
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.ui.pagelist.showItem = function(id) {};
/**
 * sorts datastore
 * @id dhx.ui.pagelist.sort
 * @class dhx.ui.pagelist
 * @method sort
 * @memberOf dhx.ui.pagelist
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.ui.pagelist.sort = function(by, dir, as) {};
/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.ui.pagelist.sync
 * @class dhx.ui.pagelist
 * @method sync
 * @memberOf dhx.ui.pagelist
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.ui.pagelist.sync = function(source, filter, silent) {};
/**
 * enables event triggering
 * @id dhx.ui.pagelist.unblockEvent
 * @class dhx.ui.pagelist
 * @method unblockEvent
 * @memberOf dhx.ui.pagelist
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.pagelist.unblockEvent = function() {};
/**
 * unselects item
 * @id dhx.ui.pagelist.unselect
 * @class dhx.ui.pagelist
 * @method unselect
 * @memberOf dhx.ui.pagelist
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.ui.pagelist.unselect = function(id) {};
/**
 * unselects all items
 * @id dhx.ui.pagelist.unselectAll
 * @class dhx.ui.pagelist
 * @method unselectAll
 * @memberOf dhx.ui.pagelist
 * @example 
 */
 dhx.ui.pagelist.unselectAll = function() {};
/**
 * sets properties of the data item
 * @id dhx.ui.pagelist.update
 * @class dhx.ui.pagelist
 * @method update
 * @memberOf dhx.ui.pagelist
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.ui.pagelist.update = function(id,data) {};


/**
*
* dhx.ui.popup object class.
* @id dhx.ui.popup
* @class dhx.ui.popup
* @constructor
* @alias dhx.ui.popup.prototype

 * @return {dhx.ui.popup}
 */


dhx.ui.popup.config = {

/**
 * the content of window body: template or view
 * @id dhx.ui.popup.config.body
 * @type template, object
 * @property
 */
body: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.popup.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.popup.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.popup.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * defines the header height (43 by default)
 * @id dhx.ui.popup.config.headHeight
 * @type dimension
 * @property
 */
headHeight: '',


/**
 * sets header view
 * @id dhx.ui.popup.config.head
 * @type object
 * @property
 */
head: '',


/**
 * the content of window header: template or view
 * @id dhx.ui.popup.config.header
 * @type template, object
 * @property
 */
header: '',


/**
 * window height (200)
 * @id dhx.ui.popup.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * hides the window initially
 * @id dhx.ui.popup.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.popup.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * the left offset of a window (100)
 * @id dhx.ui.popup.config.left
 * @type dimension
 * @property
 */
left: '',


/**
 * switches window modality
 * @id dhx.ui.popup.config.modal
 * @type boolean
 * @property
 */
modal: '',


/**
 * makes view movable
 * @id dhx.ui.popup.config.move
 * @type boolean
 * @property
 */
move: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.popup.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * window padding
 * @id dhx.ui.popup.config.padding
 * @type object
 * @property
 */
padding: '',


/**
 * window position: &#039;top&#039; or &#039;center&#039;
 * @id dhx.ui.popup.config.position
 * @type string
 * @property
 */
position: '',


/**
 * the top offset of a window (100)
 * @id dhx.ui.popup.config.top
 * @type dimension
 * @property
 */
top: '',


/**
 * window width (300)
 * @id dhx.ui.popup.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.popup.adjust
 * @class dhx.ui.popup
 * @method adjust
 * @memberOf dhx.ui.popup
 * @example 
 */
 dhx.ui.popup.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.popup.attachEvent
 * @class dhx.ui.popup
 * @method attachEvent
 * @memberOf dhx.ui.popup
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.popup.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.popup.bind
 * @class dhx.ui.popup
 * @method bind
 * @memberOf dhx.ui.popup
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.popup.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.popup.blockEvent
 * @class dhx.ui.popup
 * @method blockEvent
 * @memberOf dhx.ui.popup
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.popup.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.popup.callEvent
 * @class dhx.ui.popup
 * @method callEvent
 * @memberOf dhx.ui.popup
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.popup.callEvent = function(type,params) {};
/**
 * removes a window
 * @id dhx.ui.popup.close
 * @class dhx.ui.popup
 * @method close
 * @memberOf dhx.ui.popup
 * @example 
 */
 dhx.ui.popup.close = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.popup.define
 * @class dhx.ui.popup
 * @method define
 * @memberOf dhx.ui.popup
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.popup.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.popup.destructor
 * @class dhx.ui.popup
 * @method destructor
 * @memberOf dhx.ui.popup
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.popup.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.popup.detachEvent
 * @class dhx.ui.popup
 * @method detachEvent
 * @memberOf dhx.ui.popup
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.popup.detachEvent = function(id) {};
/**
 * gets the ui view of the window body
 * @id dhx.ui.popup.getBody
 * @class dhx.ui.popup
 * @method getBody
 * @memberOf dhx.ui.popup
 * @example 
 */
 dhx.ui.popup.getBody = function() {};
/**
 * gets the ui view of the window header
 * @id dhx.ui.popup.getHead
 * @class dhx.ui.popup
 * @method getHead
 * @memberOf dhx.ui.popup
 * @example 
 */
 dhx.ui.popup.getHead = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.popup.getNode
 * @class dhx.ui.popup
 * @method getNode
 * @memberOf dhx.ui.popup
 * @example 
 */
 dhx.ui.popup.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.popup.getParent
 * @class dhx.ui.popup
 * @method getParent
 * @memberOf dhx.ui.popup
 * @example 
 */
 dhx.ui.popup.getParent = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.popup.hasEvent
 * @class dhx.ui.popup
 * @method hasEvent
 * @memberOf dhx.ui.popup
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.popup.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.popup.hide
 * @class dhx.ui.popup
 * @method hide
 * @memberOf dhx.ui.popup
 * @example $$('myform').hide();
 */
 dhx.ui.popup.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.popup.isVisible
 * @class dhx.ui.popup
 * @method isVisible
 * @memberOf dhx.ui.popup
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.popup.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.popup.mapEvent
 * @class dhx.ui.popup
 * @method mapEvent
 * @memberOf dhx.ui.popup
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.popup.mapEvent = function(map) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.popup.resize
 * @class dhx.ui.popup
 * @method resize
 * @memberOf dhx.ui.popup
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.popup.resize = function(force) {};
/**
 * sets window&#039;s position
 * @id dhx.ui.popup.setPosition
 * @class dhx.ui.popup
 * @method setPosition
 * @memberOf dhx.ui.popup
 * @param {String} x setPosition(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.popup.setPosition = function(x,y) {};
/**
 * makes view visible
 * @id dhx.ui.popup.show
 * @class dhx.ui.popup
 * @method show
 * @memberOf dhx.ui.popup
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.popup.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.popup.unblockEvent
 * @class dhx.ui.popup
 * @method unblockEvent
 * @memberOf dhx.ui.popup
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.popup.unblockEvent = function() {};


/**
*
* dhx.ui.radio object class.
* @id dhx.ui.radio
* @class dhx.ui.radio
* @constructor
* @alias dhx.ui.radio.prototype

 * @return {dhx.ui.radio}
 */


dhx.ui.radio.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.radio.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.radio.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.radio.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.radio.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.radio.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.radio.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.radio.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.radio.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.radio.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.radio.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.radio.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.radio.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.radio.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.radio.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.radio.adjust
 * @class dhx.ui.radio
 * @method adjust
 * @memberOf dhx.ui.radio
 * @example 
 */
 dhx.ui.radio.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.radio.attachEvent
 * @class dhx.ui.radio
 * @method attachEvent
 * @memberOf dhx.ui.radio
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.radio.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.radio.bind
 * @class dhx.ui.radio
 * @method bind
 * @memberOf dhx.ui.radio
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.radio.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.radio.blockEvent
 * @class dhx.ui.radio
 * @method blockEvent
 * @memberOf dhx.ui.radio
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.radio.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.radio.callEvent
 * @class dhx.ui.radio
 * @method callEvent
 * @memberOf dhx.ui.radio
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.radio.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.radio.define
 * @class dhx.ui.radio
 * @method define
 * @memberOf dhx.ui.radio
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.radio.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.radio.destructor
 * @class dhx.ui.radio
 * @method destructor
 * @memberOf dhx.ui.radio
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.radio.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.radio.detachEvent
 * @class dhx.ui.radio
 * @method detachEvent
 * @memberOf dhx.ui.radio
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.radio.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.radio.focus
 * @class dhx.ui.radio
 * @method focus
 * @memberOf dhx.ui.radio
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.radio.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.radio.getInput
 * @class dhx.ui.radio
 * @method getInput
 * @memberOf dhx.ui.radio
 * @example 
 */
 dhx.ui.radio.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.radio.getNode
 * @class dhx.ui.radio
 * @method getNode
 * @memberOf dhx.ui.radio
 * @example 
 */
 dhx.ui.radio.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.radio.getParent
 * @class dhx.ui.radio
 * @method getParent
 * @memberOf dhx.ui.radio
 * @example 
 */
 dhx.ui.radio.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.radio.getValue
 * @class dhx.ui.radio
 * @method getValue
 * @memberOf dhx.ui.radio
 * @example 
 */
 dhx.ui.radio.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.radio.hasEvent
 * @class dhx.ui.radio
 * @method hasEvent
 * @memberOf dhx.ui.radio
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.radio.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.radio.hide
 * @class dhx.ui.radio
 * @method hide
 * @memberOf dhx.ui.radio
 * @example $$('myform').hide();
 */
 dhx.ui.radio.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.radio.isVisible
 * @class dhx.ui.radio
 * @method isVisible
 * @memberOf dhx.ui.radio
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.radio.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.radio.mapEvent
 * @class dhx.ui.radio
 * @method mapEvent
 * @memberOf dhx.ui.radio
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.radio.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.radio.refresh
 * @class dhx.ui.radio
 * @method refresh
 * @memberOf dhx.ui.radio
 * @example 
 */
 dhx.ui.radio.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.radio.render
 * @class dhx.ui.radio
 * @method render
 * @memberOf dhx.ui.radio
 * @example 
 */
 dhx.ui.radio.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.radio.resize
 * @class dhx.ui.radio
 * @method resize
 * @memberOf dhx.ui.radio
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.radio.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.radio.setValue
 * @class dhx.ui.radio
 * @method setValue
 * @memberOf dhx.ui.radio
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.radio.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.radio.show
 * @class dhx.ui.radio
 * @method show
 * @memberOf dhx.ui.radio
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.radio.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.radio.unblockEvent
 * @class dhx.ui.radio
 * @method unblockEvent
 * @memberOf dhx.ui.radio
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.radio.unblockEvent = function() {};


/**
*
* dhx.ui.richselect object class.
* @id dhx.ui.richselect
* @class dhx.ui.richselect
* @constructor
* @alias dhx.ui.richselect.prototype

 * @return {dhx.ui.richselect}
 */


dhx.ui.richselect.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.richselect.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.richselect.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.richselect.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.richselect.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.richselect.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * unknown
 * @id dhx.ui.richselect.config.iconCss
 * @type unknown
 * @property
 */
iconCss: '',


/**
 * unknown
 * @id dhx.ui.richselect.config.iconWidth
 * @type unknown
 * @property
 */
iconWidth: '',


/**
 * unknown
 * @id dhx.ui.richselect.config.icon
 * @type unknown
 * @property
 */
icon: '',


/**
 * view id
 * @id dhx.ui.richselect.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.richselect.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.richselect.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.richselect.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * defines select options of control
 * @id dhx.ui.richselect.config.options
 * @type object
 * @property
 */
options: '',


/**
 * unknown
 * @id dhx.ui.richselect.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.richselect.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.richselect.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.richselect.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.richselect.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.richselect.adjust
 * @class dhx.ui.richselect
 * @method adjust
 * @memberOf dhx.ui.richselect
 * @example 
 */
 dhx.ui.richselect.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.richselect.attachEvent
 * @class dhx.ui.richselect
 * @method attachEvent
 * @memberOf dhx.ui.richselect
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.richselect.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.richselect.bind
 * @class dhx.ui.richselect
 * @method bind
 * @memberOf dhx.ui.richselect
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.richselect.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.richselect.blockEvent
 * @class dhx.ui.richselect
 * @method blockEvent
 * @memberOf dhx.ui.richselect
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.richselect.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.richselect.callEvent
 * @class dhx.ui.richselect
 * @method callEvent
 * @memberOf dhx.ui.richselect
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.richselect.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.richselect.define
 * @class dhx.ui.richselect
 * @method define
 * @memberOf dhx.ui.richselect
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.richselect.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.richselect.destructor
 * @class dhx.ui.richselect
 * @method destructor
 * @memberOf dhx.ui.richselect
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.richselect.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.richselect.detachEvent
 * @class dhx.ui.richselect
 * @method detachEvent
 * @memberOf dhx.ui.richselect
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.richselect.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.richselect.focus
 * @class dhx.ui.richselect
 * @method focus
 * @memberOf dhx.ui.richselect
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.richselect.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.richselect.getInput
 * @class dhx.ui.richselect
 * @method getInput
 * @memberOf dhx.ui.richselect
 * @example 
 */
 dhx.ui.richselect.getInput = function() {};
/**
 * some unknown method
 * @id dhx.ui.richselect.getList
 * @class dhx.ui.richselect
 * @method getList
 * @memberOf dhx.ui.richselect
 * @example 
 */
 dhx.ui.richselect.getList = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.richselect.getNode
 * @class dhx.ui.richselect
 * @method getNode
 * @memberOf dhx.ui.richselect
 * @example 
 */
 dhx.ui.richselect.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.richselect.getParent
 * @class dhx.ui.richselect
 * @method getParent
 * @memberOf dhx.ui.richselect
 * @example 
 */
 dhx.ui.richselect.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.richselect.getValue
 * @class dhx.ui.richselect
 * @method getValue
 * @memberOf dhx.ui.richselect
 * @example 
 */
 dhx.ui.richselect.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.richselect.hasEvent
 * @class dhx.ui.richselect
 * @method hasEvent
 * @memberOf dhx.ui.richselect
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.richselect.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.richselect.hide
 * @class dhx.ui.richselect
 * @method hide
 * @memberOf dhx.ui.richselect
 * @example $$('myform').hide();
 */
 dhx.ui.richselect.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.richselect.isVisible
 * @class dhx.ui.richselect
 * @method isVisible
 * @memberOf dhx.ui.richselect
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.richselect.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.richselect.mapEvent
 * @class dhx.ui.richselect
 * @method mapEvent
 * @memberOf dhx.ui.richselect
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.richselect.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.richselect.refresh
 * @class dhx.ui.richselect
 * @method refresh
 * @memberOf dhx.ui.richselect
 * @example 
 */
 dhx.ui.richselect.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.richselect.render
 * @class dhx.ui.richselect
 * @method render
 * @memberOf dhx.ui.richselect
 * @example 
 */
 dhx.ui.richselect.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.richselect.resize
 * @class dhx.ui.richselect
 * @method resize
 * @memberOf dhx.ui.richselect
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.richselect.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.richselect.setValue
 * @class dhx.ui.richselect
 * @method setValue
 * @memberOf dhx.ui.richselect
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.richselect.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.richselect.show
 * @class dhx.ui.richselect
 * @method show
 * @memberOf dhx.ui.richselect
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.richselect.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.richselect.unblockEvent
 * @class dhx.ui.richselect
 * @method unblockEvent
 * @memberOf dhx.ui.richselect
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.richselect.unblockEvent = function() {};


/**
*
* dhx.ui.scrollview object class.
* @id dhx.ui.scrollview
* @class dhx.ui.scrollview
* @constructor
* @alias dhx.ui.scrollview.prototype

 * @return {dhx.ui.scrollview}
 */


dhx.ui.scrollview.config = {

/**
 * unknown
 * @id dhx.ui.scrollview.config.body
 * @type unknown
 * @property
 */
body: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.scrollview.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * sets the height of scrollable view, actual for y scrolling
 * @id dhx.ui.scrollview.config.contentHeight
 * @type dimention
 * @property
 */
contentHeight: '',


/**
 * sets the width of scrollable view, actual for x scrolling,
 * @id dhx.ui.scrollview.config.contentWidth
 * @type dimention
 * @property
 */
contentWidth: '',


/**
 * the view object that needs being scrolled
 * @id dhx.ui.scrollview.config.content
 * @type object
 * @property
 */
content: '',


/**
 * css class for a view container
 * @id dhx.ui.scrollview.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.scrollview.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.scrollview.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.scrollview.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.scrollview.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * the speed of scrolling (the default speed is &#039;0ms&#039;)
 * @id dhx.ui.scrollview.config.scrollSpeed
 * @type string
 * @property
 */
scrollSpeed: '',


/**
 * sets the type of scrolling (x - horizontal, y - vertical)
 * @id dhx.ui.scrollview.config.scroll
 * @type string
 * @property
 */
scroll: '',


/**
 * width of view
 * @id dhx.ui.scrollview.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.scrollview.adjust
 * @class dhx.ui.scrollview
 * @method adjust
 * @memberOf dhx.ui.scrollview
 * @example 
 */
 dhx.ui.scrollview.adjust = function() {};
/**
 * binds components
 * @id dhx.ui.scrollview.bind
 * @class dhx.ui.scrollview
 * @method bind
 * @memberOf dhx.ui.scrollview
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.scrollview.bind = function(target, rule, format) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.scrollview.define
 * @class dhx.ui.scrollview
 * @method define
 * @memberOf dhx.ui.scrollview
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.scrollview.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.scrollview.destructor
 * @class dhx.ui.scrollview
 * @method destructor
 * @memberOf dhx.ui.scrollview
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.scrollview.destructor = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.scrollview.getNode
 * @class dhx.ui.scrollview
 * @method getNode
 * @memberOf dhx.ui.scrollview
 * @example 
 */
 dhx.ui.scrollview.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.scrollview.getParent
 * @class dhx.ui.scrollview
 * @method getParent
 * @memberOf dhx.ui.scrollview
 * @example 
 */
 dhx.ui.scrollview.getParent = function() {};
/**
 * hides view
 * @id dhx.ui.scrollview.hide
 * @class dhx.ui.scrollview
 * @method hide
 * @memberOf dhx.ui.scrollview
 * @example $$('myform').hide();
 */
 dhx.ui.scrollview.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.scrollview.isVisible
 * @class dhx.ui.scrollview
 * @method isVisible
 * @memberOf dhx.ui.scrollview
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.scrollview.isVisible = function(base_id, prev_id) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.scrollview.resize
 * @class dhx.ui.scrollview
 * @method resize
 * @memberOf dhx.ui.scrollview
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.scrollview.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.scrollview.scrollState
 * @class dhx.ui.scrollview
 * @method scrollState
 * @memberOf dhx.ui.scrollview
 * @example 
 */
 dhx.ui.scrollview.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.ui.scrollview.scrollTo
 * @class dhx.ui.scrollview
 * @method scrollTo
 * @memberOf dhx.ui.scrollview
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.scrollview.scrollTo = function(x,y) {};
/**
 * makes view visible
 * @id dhx.ui.scrollview.show
 * @class dhx.ui.scrollview
 * @method show
 * @memberOf dhx.ui.scrollview
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.scrollview.show = function(animate_settings) {};


/**
*
* dhx.ui.segmented object class.
* @id dhx.ui.segmented
* @class dhx.ui.segmented
* @constructor
* @alias dhx.ui.segmented.prototype

 * @return {dhx.ui.segmented}
 */


dhx.ui.segmented.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.segmented.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.segmented.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.segmented.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.segmented.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.segmented.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.segmented.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * text label of control
 * @id dhx.ui.segmented.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.segmented.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.segmented.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.segmented.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.segmented.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.segmented.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.segmented.adjust
 * @class dhx.ui.segmented
 * @method adjust
 * @memberOf dhx.ui.segmented
 * @example 
 */
 dhx.ui.segmented.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.segmented.attachEvent
 * @class dhx.ui.segmented
 * @method attachEvent
 * @memberOf dhx.ui.segmented
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.segmented.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.segmented.bind
 * @class dhx.ui.segmented
 * @method bind
 * @memberOf dhx.ui.segmented
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.segmented.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.segmented.blockEvent
 * @class dhx.ui.segmented
 * @method blockEvent
 * @memberOf dhx.ui.segmented
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.segmented.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.segmented.callEvent
 * @class dhx.ui.segmented
 * @method callEvent
 * @memberOf dhx.ui.segmented
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.segmented.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.segmented.define
 * @class dhx.ui.segmented
 * @method define
 * @memberOf dhx.ui.segmented
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.segmented.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.segmented.destructor
 * @class dhx.ui.segmented
 * @method destructor
 * @memberOf dhx.ui.segmented
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.segmented.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.segmented.detachEvent
 * @class dhx.ui.segmented
 * @method detachEvent
 * @memberOf dhx.ui.segmented
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.segmented.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.segmented.focus
 * @class dhx.ui.segmented
 * @method focus
 * @memberOf dhx.ui.segmented
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.segmented.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.segmented.getInput
 * @class dhx.ui.segmented
 * @method getInput
 * @memberOf dhx.ui.segmented
 * @example 
 */
 dhx.ui.segmented.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.segmented.getNode
 * @class dhx.ui.segmented
 * @method getNode
 * @memberOf dhx.ui.segmented
 * @example 
 */
 dhx.ui.segmented.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.segmented.getParent
 * @class dhx.ui.segmented
 * @method getParent
 * @memberOf dhx.ui.segmented
 * @example 
 */
 dhx.ui.segmented.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.segmented.getValue
 * @class dhx.ui.segmented
 * @method getValue
 * @memberOf dhx.ui.segmented
 * @example 
 */
 dhx.ui.segmented.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.segmented.hasEvent
 * @class dhx.ui.segmented
 * @method hasEvent
 * @memberOf dhx.ui.segmented
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.segmented.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.segmented.hide
 * @class dhx.ui.segmented
 * @method hide
 * @memberOf dhx.ui.segmented
 * @example $$('myform').hide();
 */
 dhx.ui.segmented.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.segmented.isVisible
 * @class dhx.ui.segmented
 * @method isVisible
 * @memberOf dhx.ui.segmented
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.segmented.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.segmented.mapEvent
 * @class dhx.ui.segmented
 * @method mapEvent
 * @memberOf dhx.ui.segmented
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.segmented.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.segmented.refresh
 * @class dhx.ui.segmented
 * @method refresh
 * @memberOf dhx.ui.segmented
 * @example 
 */
 dhx.ui.segmented.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.segmented.render
 * @class dhx.ui.segmented
 * @method render
 * @memberOf dhx.ui.segmented
 * @example 
 */
 dhx.ui.segmented.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.segmented.resize
 * @class dhx.ui.segmented
 * @method resize
 * @memberOf dhx.ui.segmented
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.segmented.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.segmented.setValue
 * @class dhx.ui.segmented
 * @method setValue
 * @memberOf dhx.ui.segmented
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.segmented.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.segmented.show
 * @class dhx.ui.segmented
 * @method show
 * @memberOf dhx.ui.segmented
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.segmented.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.segmented.unblockEvent
 * @class dhx.ui.segmented
 * @method unblockEvent
 * @memberOf dhx.ui.segmented
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.segmented.unblockEvent = function() {};


/**
*
* dhx.ui.select object class.
* @id dhx.ui.select
* @class dhx.ui.select
* @constructor
* @alias dhx.ui.select.prototype

 * @return {dhx.ui.select}
 */


dhx.ui.select.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.select.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.select.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.select.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.select.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.select.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.select.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.select.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.select.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.select.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.select.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.select.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.select.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.select.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.select.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.select.adjust
 * @class dhx.ui.select
 * @method adjust
 * @memberOf dhx.ui.select
 * @example 
 */
 dhx.ui.select.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.select.attachEvent
 * @class dhx.ui.select
 * @method attachEvent
 * @memberOf dhx.ui.select
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.select.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.select.bind
 * @class dhx.ui.select
 * @method bind
 * @memberOf dhx.ui.select
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.select.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.select.blockEvent
 * @class dhx.ui.select
 * @method blockEvent
 * @memberOf dhx.ui.select
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.select.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.select.callEvent
 * @class dhx.ui.select
 * @method callEvent
 * @memberOf dhx.ui.select
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.select.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.select.define
 * @class dhx.ui.select
 * @method define
 * @memberOf dhx.ui.select
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.select.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.select.destructor
 * @class dhx.ui.select
 * @method destructor
 * @memberOf dhx.ui.select
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.select.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.select.detachEvent
 * @class dhx.ui.select
 * @method detachEvent
 * @memberOf dhx.ui.select
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.select.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.select.focus
 * @class dhx.ui.select
 * @method focus
 * @memberOf dhx.ui.select
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.select.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.select.getInput
 * @class dhx.ui.select
 * @method getInput
 * @memberOf dhx.ui.select
 * @example 
 */
 dhx.ui.select.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.select.getNode
 * @class dhx.ui.select
 * @method getNode
 * @memberOf dhx.ui.select
 * @example 
 */
 dhx.ui.select.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.select.getParent
 * @class dhx.ui.select
 * @method getParent
 * @memberOf dhx.ui.select
 * @example 
 */
 dhx.ui.select.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.select.getValue
 * @class dhx.ui.select
 * @method getValue
 * @memberOf dhx.ui.select
 * @example 
 */
 dhx.ui.select.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.select.hasEvent
 * @class dhx.ui.select
 * @method hasEvent
 * @memberOf dhx.ui.select
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.select.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.select.hide
 * @class dhx.ui.select
 * @method hide
 * @memberOf dhx.ui.select
 * @example $$('myform').hide();
 */
 dhx.ui.select.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.select.isVisible
 * @class dhx.ui.select
 * @method isVisible
 * @memberOf dhx.ui.select
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.select.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.select.mapEvent
 * @class dhx.ui.select
 * @method mapEvent
 * @memberOf dhx.ui.select
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.select.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.select.refresh
 * @class dhx.ui.select
 * @method refresh
 * @memberOf dhx.ui.select
 * @example 
 */
 dhx.ui.select.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.select.render
 * @class dhx.ui.select
 * @method render
 * @memberOf dhx.ui.select
 * @example 
 */
 dhx.ui.select.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.select.resize
 * @class dhx.ui.select
 * @method resize
 * @memberOf dhx.ui.select
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.select.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.select.setValue
 * @class dhx.ui.select
 * @method setValue
 * @memberOf dhx.ui.select
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.select.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.select.show
 * @class dhx.ui.select
 * @method show
 * @memberOf dhx.ui.select
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.select.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.select.unblockEvent
 * @class dhx.ui.select
 * @method unblockEvent
 * @memberOf dhx.ui.select
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.select.unblockEvent = function() {};


/**
*
* dhx.ui.slider object class.
* @id dhx.ui.slider
* @class dhx.ui.slider
* @constructor
* @alias dhx.ui.slider.prototype

 * @return {dhx.ui.slider}
 */


dhx.ui.slider.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.slider.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.slider.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.slider.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.slider.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.slider.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.slider.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * unknown
 * @id dhx.ui.slider.config.labelWidth
 * @type unknown
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.slider.config.label
 * @type string
 * @property
 */
label: '',


/**
 * unknown
 * @id dhx.ui.slider.config.max
 * @type unknown
 * @property
 */
max: '',


/**
 * unknown
 * @id dhx.ui.slider.config.min
 * @type unknown
 * @property
 */
min: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.slider.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.slider.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * unknown
 * @id dhx.ui.slider.config.step
 * @type unknown
 * @property
 */
step: '',


/**
 * item template
 * @id dhx.ui.slider.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.slider.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.slider.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.slider.adjust
 * @class dhx.ui.slider
 * @method adjust
 * @memberOf dhx.ui.slider
 * @example 
 */
 dhx.ui.slider.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.slider.attachEvent
 * @class dhx.ui.slider
 * @method attachEvent
 * @memberOf dhx.ui.slider
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.slider.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.slider.bind
 * @class dhx.ui.slider
 * @method bind
 * @memberOf dhx.ui.slider
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.slider.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.slider.blockEvent
 * @class dhx.ui.slider
 * @method blockEvent
 * @memberOf dhx.ui.slider
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.slider.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.slider.callEvent
 * @class dhx.ui.slider
 * @method callEvent
 * @memberOf dhx.ui.slider
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.slider.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.slider.define
 * @class dhx.ui.slider
 * @method define
 * @memberOf dhx.ui.slider
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.slider.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.slider.destructor
 * @class dhx.ui.slider
 * @method destructor
 * @memberOf dhx.ui.slider
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.slider.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.slider.detachEvent
 * @class dhx.ui.slider
 * @method detachEvent
 * @memberOf dhx.ui.slider
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.slider.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.slider.focus
 * @class dhx.ui.slider
 * @method focus
 * @memberOf dhx.ui.slider
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.slider.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.slider.getInput
 * @class dhx.ui.slider
 * @method getInput
 * @memberOf dhx.ui.slider
 * @example 
 */
 dhx.ui.slider.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.slider.getNode
 * @class dhx.ui.slider
 * @method getNode
 * @memberOf dhx.ui.slider
 * @example 
 */
 dhx.ui.slider.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.slider.getParent
 * @class dhx.ui.slider
 * @method getParent
 * @memberOf dhx.ui.slider
 * @example 
 */
 dhx.ui.slider.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.slider.getValue
 * @class dhx.ui.slider
 * @method getValue
 * @memberOf dhx.ui.slider
 * @example 
 */
 dhx.ui.slider.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.slider.hasEvent
 * @class dhx.ui.slider
 * @method hasEvent
 * @memberOf dhx.ui.slider
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.slider.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.slider.hide
 * @class dhx.ui.slider
 * @method hide
 * @memberOf dhx.ui.slider
 * @example $$('myform').hide();
 */
 dhx.ui.slider.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.slider.isVisible
 * @class dhx.ui.slider
 * @method isVisible
 * @memberOf dhx.ui.slider
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.slider.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.slider.mapEvent
 * @class dhx.ui.slider
 * @method mapEvent
 * @memberOf dhx.ui.slider
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.slider.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.slider.refresh
 * @class dhx.ui.slider
 * @method refresh
 * @memberOf dhx.ui.slider
 * @example 
 */
 dhx.ui.slider.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.slider.render
 * @class dhx.ui.slider
 * @method render
 * @memberOf dhx.ui.slider
 * @example 
 */
 dhx.ui.slider.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.slider.resize
 * @class dhx.ui.slider
 * @method resize
 * @memberOf dhx.ui.slider
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.slider.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.slider.setSliderTitle
 * @class dhx.ui.slider
 * @method setSliderTitle
 * @memberOf dhx.ui.slider
 * @param {String} title setSliderTitle(title)
 * @example 
 */
 dhx.ui.slider.setSliderTitle = function(title) {};
/**
 * sets a new value for the button
 * @id dhx.ui.slider.setValue
 * @class dhx.ui.slider
 * @method setValue
 * @memberOf dhx.ui.slider
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.slider.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.slider.show
 * @class dhx.ui.slider
 * @method show
 * @memberOf dhx.ui.slider
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.slider.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.slider.unblockEvent
 * @class dhx.ui.slider
 * @method unblockEvent
 * @memberOf dhx.ui.slider
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.slider.unblockEvent = function() {};


/**
*
* dhx.ui.tabbar object class.
* @id dhx.ui.tabbar
* @class dhx.ui.tabbar
* @constructor
* @alias dhx.ui.tabbar.prototype

 * @return {dhx.ui.tabbar}
 */


dhx.ui.tabbar.config = {

/**
 * the array of views
 * @id dhx.ui.tabbar.config.cells
 * @type object
 * @property
 */
cells: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.tabbar.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.tabbar.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.tabbar.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.tabbar.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.tabbar.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.tabbar.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * text label of control
 * @id dhx.ui.tabbar.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.tabbar.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.tabbar.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.tabbar.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.tabbar.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.tabbar.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.tabbar.adjust
 * @class dhx.ui.tabbar
 * @method adjust
 * @memberOf dhx.ui.tabbar
 * @example 
 */
 dhx.ui.tabbar.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.tabbar.attachEvent
 * @class dhx.ui.tabbar
 * @method attachEvent
 * @memberOf dhx.ui.tabbar
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.tabbar.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.tabbar.bind
 * @class dhx.ui.tabbar
 * @method bind
 * @memberOf dhx.ui.tabbar
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.tabbar.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.tabbar.blockEvent
 * @class dhx.ui.tabbar
 * @method blockEvent
 * @memberOf dhx.ui.tabbar
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.tabbar.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.tabbar.callEvent
 * @class dhx.ui.tabbar
 * @method callEvent
 * @memberOf dhx.ui.tabbar
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.tabbar.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.tabbar.define
 * @class dhx.ui.tabbar
 * @method define
 * @memberOf dhx.ui.tabbar
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.tabbar.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.tabbar.destructor
 * @class dhx.ui.tabbar
 * @method destructor
 * @memberOf dhx.ui.tabbar
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.tabbar.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.tabbar.detachEvent
 * @class dhx.ui.tabbar
 * @method detachEvent
 * @memberOf dhx.ui.tabbar
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.tabbar.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.tabbar.focus
 * @class dhx.ui.tabbar
 * @method focus
 * @memberOf dhx.ui.tabbar
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.tabbar.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.tabbar.getInput
 * @class dhx.ui.tabbar
 * @method getInput
 * @memberOf dhx.ui.tabbar
 * @example 
 */
 dhx.ui.tabbar.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.tabbar.getNode
 * @class dhx.ui.tabbar
 * @method getNode
 * @memberOf dhx.ui.tabbar
 * @example 
 */
 dhx.ui.tabbar.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.tabbar.getParent
 * @class dhx.ui.tabbar
 * @method getParent
 * @memberOf dhx.ui.tabbar
 * @example 
 */
 dhx.ui.tabbar.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.tabbar.getValue
 * @class dhx.ui.tabbar
 * @method getValue
 * @memberOf dhx.ui.tabbar
 * @example 
 */
 dhx.ui.tabbar.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.tabbar.hasEvent
 * @class dhx.ui.tabbar
 * @method hasEvent
 * @memberOf dhx.ui.tabbar
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.tabbar.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.tabbar.hide
 * @class dhx.ui.tabbar
 * @method hide
 * @memberOf dhx.ui.tabbar
 * @example $$('myform').hide();
 */
 dhx.ui.tabbar.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.tabbar.isVisible
 * @class dhx.ui.tabbar
 * @method isVisible
 * @memberOf dhx.ui.tabbar
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.tabbar.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.tabbar.mapEvent
 * @class dhx.ui.tabbar
 * @method mapEvent
 * @memberOf dhx.ui.tabbar
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.tabbar.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.tabbar.refresh
 * @class dhx.ui.tabbar
 * @method refresh
 * @memberOf dhx.ui.tabbar
 * @example 
 */
 dhx.ui.tabbar.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.tabbar.render
 * @class dhx.ui.tabbar
 * @method render
 * @memberOf dhx.ui.tabbar
 * @example 
 */
 dhx.ui.tabbar.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.tabbar.resize
 * @class dhx.ui.tabbar
 * @method resize
 * @memberOf dhx.ui.tabbar
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.tabbar.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.tabbar.setValue
 * @class dhx.ui.tabbar
 * @method setValue
 * @memberOf dhx.ui.tabbar
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.tabbar.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.tabbar.show
 * @class dhx.ui.tabbar
 * @method show
 * @memberOf dhx.ui.tabbar
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.tabbar.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.tabbar.unblockEvent
 * @class dhx.ui.tabbar
 * @method unblockEvent
 * @memberOf dhx.ui.tabbar
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.tabbar.unblockEvent = function() {};


/**
*
* dhx.ui.template object class.
* @id dhx.ui.template
* @class dhx.ui.template
* @constructor
* @alias dhx.ui.template.prototype

 * @return {dhx.ui.template}
 */


dhx.ui.template.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.template.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * the id or node, whose content will be moved to the view
 * @id dhx.ui.template.config.content
 * @type any
 * @property
 */
content: '',


/**
 * css class for a view container
 * @id dhx.ui.template.config.css
 * @type string
 * @property
 */
css: '',


/**
 * loaded data
 * @id dhx.ui.template.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * type of loaded data
 * @id dhx.ui.template.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.template.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.template.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.template.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.template.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * unknown
 * @id dhx.ui.template.config.loading
 * @type unknown
 * @property
 */
loading: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.template.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * enables/disables scroll
 * @id dhx.ui.template.config.scroll
 * @type boolean
 * @property
 */
scroll: '',


/**
 * path to external template that is loaded by Ajax
 * @id dhx.ui.template.config.src
 * @type string
 * @property
 */
src: '',


/**
 * item template
 * @id dhx.ui.template.config.template
 * @type template
 * @property
 */
template: '',


/**
 * data url
 * @id dhx.ui.template.config.url
 * @type string
 * @property
 */
url: '',


/**
 * defines whether the loading cover should be displayed while loading (actual in case of &#039;src&#039; parameter)
 * @id dhx.ui.template.config.waitMessage
 * @type boolean
 * @property
 */
waitMessage: '',


/**
 * width of view
 * @id dhx.ui.template.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.template.adjust
 * @class dhx.ui.template
 * @method adjust
 * @memberOf dhx.ui.template
 * @example 
 */
 dhx.ui.template.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.template.attachEvent
 * @class dhx.ui.template
 * @method attachEvent
 * @memberOf dhx.ui.template
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.template.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.template.bind
 * @class dhx.ui.template
 * @method bind
 * @memberOf dhx.ui.template
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.template.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.template.blockEvent
 * @class dhx.ui.template
 * @method blockEvent
 * @memberOf dhx.ui.template
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.template.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.template.callEvent
 * @class dhx.ui.template
 * @method callEvent
 * @memberOf dhx.ui.template
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.template.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.template.define
 * @class dhx.ui.template
 * @method define
 * @memberOf dhx.ui.template
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.template.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.template.destructor
 * @class dhx.ui.template
 * @method destructor
 * @memberOf dhx.ui.template
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.template.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.template.detachEvent
 * @class dhx.ui.template
 * @method detachEvent
 * @memberOf dhx.ui.template
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.template.detachEvent = function(id) {};
/**
 * returns main html container of view
 * @id dhx.ui.template.getNode
 * @class dhx.ui.template
 * @method getNode
 * @memberOf dhx.ui.template
 * @example 
 */
 dhx.ui.template.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.template.getParent
 * @class dhx.ui.template
 * @method getParent
 * @memberOf dhx.ui.template
 * @example 
 */
 dhx.ui.template.getParent = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.template.hasEvent
 * @class dhx.ui.template
 * @method hasEvent
 * @memberOf dhx.ui.template
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.template.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.template.hide
 * @class dhx.ui.template
 * @method hide
 * @memberOf dhx.ui.template
 * @example $$('myform').hide();
 */
 dhx.ui.template.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.template.isVisible
 * @class dhx.ui.template
 * @method isVisible
 * @memberOf dhx.ui.template
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.template.isVisible = function(base_id, prev_id) {};
/**
 * loads values from external datasource
 * @id dhx.ui.template.load
 * @class dhx.ui.template
 * @method load
 * @memberOf dhx.ui.template
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui.template.load = function(url,call) {};
/**
 * routes events from one object to another
 * @id dhx.ui.template.mapEvent
 * @class dhx.ui.template
 * @method mapEvent
 * @memberOf dhx.ui.template
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.template.mapEvent = function(map) {};
/**
 * addes data from a datasource
 * @id dhx.ui.template.parse
 * @class dhx.ui.template
 * @method parse
 * @memberOf dhx.ui.template
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui.template.parse = function(data,type) {};
/**
 * repaints the whole view or a certain a item
 * @id dhx.ui.template.refresh
 * @class dhx.ui.template
 * @method refresh
 * @memberOf dhx.ui.template
 * @example 
 */
 dhx.ui.template.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.template.render
 * @class dhx.ui.template
 * @method render
 * @memberOf dhx.ui.template
 * @example 
 */
 dhx.ui.template.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.template.resize
 * @class dhx.ui.template
 * @method resize
 * @memberOf dhx.ui.template
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.template.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.template.scrollState
 * @class dhx.ui.template
 * @method scrollState
 * @memberOf dhx.ui.template
 * @example 
 */
 dhx.ui.template.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.ui.template.scrollTo
 * @class dhx.ui.template
 * @method scrollTo
 * @memberOf dhx.ui.template
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.template.scrollTo = function(x,y) {};
/**
 * sets data hash
 * @id dhx.ui.template.setValues
 * @class dhx.ui.template
 * @method setValues
 * @memberOf dhx.ui.template
 * @param {Object} obj setValues(obj)
 * @example 
 */
 dhx.ui.template.setValues = function(obj) {};
/**
 * makes view visible
 * @id dhx.ui.template.show
 * @class dhx.ui.template
 * @method show
 * @memberOf dhx.ui.template
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.template.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.template.unblockEvent
 * @class dhx.ui.template
 * @method unblockEvent
 * @memberOf dhx.ui.template
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.template.unblockEvent = function() {};


/**
*
* dhx.ui.text object class.
* @id dhx.ui.text
* @class dhx.ui.text
* @constructor
* @alias dhx.ui.text.prototype

 * @return {dhx.ui.text}
 */


dhx.ui.text.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.text.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.text.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.text.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.text.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.text.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.text.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.text.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.text.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.text.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.text.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.text.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.text.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.text.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.text.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.text.adjust
 * @class dhx.ui.text
 * @method adjust
 * @memberOf dhx.ui.text
 * @example 
 */
 dhx.ui.text.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.text.attachEvent
 * @class dhx.ui.text
 * @method attachEvent
 * @memberOf dhx.ui.text
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.text.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.text.bind
 * @class dhx.ui.text
 * @method bind
 * @memberOf dhx.ui.text
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.text.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.text.blockEvent
 * @class dhx.ui.text
 * @method blockEvent
 * @memberOf dhx.ui.text
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.text.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.text.callEvent
 * @class dhx.ui.text
 * @method callEvent
 * @memberOf dhx.ui.text
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.text.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.text.define
 * @class dhx.ui.text
 * @method define
 * @memberOf dhx.ui.text
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.text.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.text.destructor
 * @class dhx.ui.text
 * @method destructor
 * @memberOf dhx.ui.text
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.text.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.text.detachEvent
 * @class dhx.ui.text
 * @method detachEvent
 * @memberOf dhx.ui.text
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.text.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.text.focus
 * @class dhx.ui.text
 * @method focus
 * @memberOf dhx.ui.text
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.text.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.text.getInput
 * @class dhx.ui.text
 * @method getInput
 * @memberOf dhx.ui.text
 * @example 
 */
 dhx.ui.text.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.text.getNode
 * @class dhx.ui.text
 * @method getNode
 * @memberOf dhx.ui.text
 * @example 
 */
 dhx.ui.text.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.text.getParent
 * @class dhx.ui.text
 * @method getParent
 * @memberOf dhx.ui.text
 * @example 
 */
 dhx.ui.text.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.text.getValue
 * @class dhx.ui.text
 * @method getValue
 * @memberOf dhx.ui.text
 * @example 
 */
 dhx.ui.text.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.text.hasEvent
 * @class dhx.ui.text
 * @method hasEvent
 * @memberOf dhx.ui.text
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.text.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.text.hide
 * @class dhx.ui.text
 * @method hide
 * @memberOf dhx.ui.text
 * @example $$('myform').hide();
 */
 dhx.ui.text.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.text.isVisible
 * @class dhx.ui.text
 * @method isVisible
 * @memberOf dhx.ui.text
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.text.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.text.mapEvent
 * @class dhx.ui.text
 * @method mapEvent
 * @memberOf dhx.ui.text
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.text.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.text.refresh
 * @class dhx.ui.text
 * @method refresh
 * @memberOf dhx.ui.text
 * @example 
 */
 dhx.ui.text.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.text.render
 * @class dhx.ui.text
 * @method render
 * @memberOf dhx.ui.text
 * @example 
 */
 dhx.ui.text.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.text.resize
 * @class dhx.ui.text
 * @method resize
 * @memberOf dhx.ui.text
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.text.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.text.setValue
 * @class dhx.ui.text
 * @method setValue
 * @memberOf dhx.ui.text
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.text.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.text.show
 * @class dhx.ui.text
 * @method show
 * @memberOf dhx.ui.text
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.text.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.text.unblockEvent
 * @class dhx.ui.text
 * @method unblockEvent
 * @memberOf dhx.ui.text
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.text.unblockEvent = function() {};


/**
*
* dhx.ui.textarea object class.
* @id dhx.ui.textarea
* @class dhx.ui.textarea
* @constructor
* @alias dhx.ui.textarea.prototype

 * @return {dhx.ui.textarea}
 */


dhx.ui.textarea.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.textarea.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * unknown
 * @id dhx.ui.textarea.config.cssContant
 * @type unknown
 * @property
 */
cssContant: '',


/**
 * css class for a view container
 * @id dhx.ui.textarea.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.textarea.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.textarea.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.textarea.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.textarea.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.textarea.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.textarea.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.textarea.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.textarea.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.textarea.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.textarea.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.textarea.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.textarea.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.textarea.adjust
 * @class dhx.ui.textarea
 * @method adjust
 * @memberOf dhx.ui.textarea
 * @example 
 */
 dhx.ui.textarea.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.textarea.attachEvent
 * @class dhx.ui.textarea
 * @method attachEvent
 * @memberOf dhx.ui.textarea
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.textarea.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.textarea.bind
 * @class dhx.ui.textarea
 * @method bind
 * @memberOf dhx.ui.textarea
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.textarea.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.textarea.blockEvent
 * @class dhx.ui.textarea
 * @method blockEvent
 * @memberOf dhx.ui.textarea
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.textarea.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.textarea.callEvent
 * @class dhx.ui.textarea
 * @method callEvent
 * @memberOf dhx.ui.textarea
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.textarea.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.textarea.define
 * @class dhx.ui.textarea
 * @method define
 * @memberOf dhx.ui.textarea
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.textarea.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.textarea.destructor
 * @class dhx.ui.textarea
 * @method destructor
 * @memberOf dhx.ui.textarea
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.textarea.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.textarea.detachEvent
 * @class dhx.ui.textarea
 * @method detachEvent
 * @memberOf dhx.ui.textarea
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.textarea.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.textarea.focus
 * @class dhx.ui.textarea
 * @method focus
 * @memberOf dhx.ui.textarea
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.textarea.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.textarea.getInput
 * @class dhx.ui.textarea
 * @method getInput
 * @memberOf dhx.ui.textarea
 * @example 
 */
 dhx.ui.textarea.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.textarea.getNode
 * @class dhx.ui.textarea
 * @method getNode
 * @memberOf dhx.ui.textarea
 * @example 
 */
 dhx.ui.textarea.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.textarea.getParent
 * @class dhx.ui.textarea
 * @method getParent
 * @memberOf dhx.ui.textarea
 * @example 
 */
 dhx.ui.textarea.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.textarea.getValue
 * @class dhx.ui.textarea
 * @method getValue
 * @memberOf dhx.ui.textarea
 * @example 
 */
 dhx.ui.textarea.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.textarea.hasEvent
 * @class dhx.ui.textarea
 * @method hasEvent
 * @memberOf dhx.ui.textarea
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.textarea.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.textarea.hide
 * @class dhx.ui.textarea
 * @method hide
 * @memberOf dhx.ui.textarea
 * @example $$('myform').hide();
 */
 dhx.ui.textarea.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.textarea.isVisible
 * @class dhx.ui.textarea
 * @method isVisible
 * @memberOf dhx.ui.textarea
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.textarea.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.textarea.mapEvent
 * @class dhx.ui.textarea
 * @method mapEvent
 * @memberOf dhx.ui.textarea
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.textarea.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.textarea.refresh
 * @class dhx.ui.textarea
 * @method refresh
 * @memberOf dhx.ui.textarea
 * @example 
 */
 dhx.ui.textarea.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.textarea.render
 * @class dhx.ui.textarea
 * @method render
 * @memberOf dhx.ui.textarea
 * @example 
 */
 dhx.ui.textarea.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.textarea.resize
 * @class dhx.ui.textarea
 * @method resize
 * @memberOf dhx.ui.textarea
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.textarea.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.textarea.setValue
 * @class dhx.ui.textarea
 * @method setValue
 * @memberOf dhx.ui.textarea
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.textarea.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.textarea.show
 * @class dhx.ui.textarea
 * @method show
 * @memberOf dhx.ui.textarea
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.textarea.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.textarea.unblockEvent
 * @class dhx.ui.textarea
 * @method unblockEvent
 * @memberOf dhx.ui.textarea
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.textarea.unblockEvent = function() {};


/**
*
* dhx.ui.toggle object class.
* @id dhx.ui.toggle
* @class dhx.ui.toggle
* @constructor
* @alias dhx.ui.toggle.prototype

 * @return {dhx.ui.toggle}
 */


dhx.ui.toggle.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.toggle.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.toggle.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.toggle.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.toggle.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.toggle.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.toggle.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of label
 * @id dhx.ui.toggle.config.labelWidth
 * @type dimension
 * @property
 */
labelWidth: '',


/**
 * text label of control
 * @id dhx.ui.toggle.config.label
 * @type string
 * @property
 */
label: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.toggle.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.ui.toggle.config.outerPadding
 * @type unknown
 * @property
 */
outerPadding: '',


/**
 * allows to attach pop-up menu to the button
 * @id dhx.ui.toggle.config.popup
 * @type &#039;popup&#039; object
 * @property
 */
popup: '',


/**
 * item template
 * @id dhx.ui.toggle.config.template
 * @type template
 * @property
 */
template: '',


/**
 * type of control
 * @id dhx.ui.toggle.config.type
 * @type string
 * @property
 */
type: '',


/**
 * width of view
 * @id dhx.ui.toggle.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.toggle.adjust
 * @class dhx.ui.toggle
 * @method adjust
 * @memberOf dhx.ui.toggle
 * @example 
 */
 dhx.ui.toggle.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.toggle.attachEvent
 * @class dhx.ui.toggle
 * @method attachEvent
 * @memberOf dhx.ui.toggle
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.toggle.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.toggle.bind
 * @class dhx.ui.toggle
 * @method bind
 * @memberOf dhx.ui.toggle
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.toggle.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.toggle.blockEvent
 * @class dhx.ui.toggle
 * @method blockEvent
 * @memberOf dhx.ui.toggle
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.toggle.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.toggle.callEvent
 * @class dhx.ui.toggle
 * @method callEvent
 * @memberOf dhx.ui.toggle
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.toggle.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.toggle.define
 * @class dhx.ui.toggle
 * @method define
 * @memberOf dhx.ui.toggle
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.toggle.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.toggle.destructor
 * @class dhx.ui.toggle
 * @method destructor
 * @memberOf dhx.ui.toggle
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.toggle.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.toggle.detachEvent
 * @class dhx.ui.toggle
 * @method detachEvent
 * @memberOf dhx.ui.toggle
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.toggle.detachEvent = function(id) {};
/**
 * moves focus to the input
 * @id dhx.ui.toggle.focus
 * @class dhx.ui.toggle
 * @method focus
 * @memberOf dhx.ui.toggle
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('field_b').focus();
 */
 dhx.ui.toggle.focus = function() {};
/**
 * returns input html object
 * @id dhx.ui.toggle.getInput
 * @class dhx.ui.toggle
 * @method getInput
 * @memberOf dhx.ui.toggle
 * @example 
 */
 dhx.ui.toggle.getInput = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.toggle.getNode
 * @class dhx.ui.toggle
 * @method getNode
 * @memberOf dhx.ui.toggle
 * @example 
 */
 dhx.ui.toggle.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.toggle.getParent
 * @class dhx.ui.toggle
 * @method getParent
 * @memberOf dhx.ui.toggle
 * @example 
 */
 dhx.ui.toggle.getParent = function() {};
/**
 * returns current value
 * @id dhx.ui.toggle.getValue
 * @class dhx.ui.toggle
 * @method getValue
 * @memberOf dhx.ui.toggle
 * @example 
 */
 dhx.ui.toggle.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.toggle.hasEvent
 * @class dhx.ui.toggle
 * @method hasEvent
 * @memberOf dhx.ui.toggle
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.toggle.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.toggle.hide
 * @class dhx.ui.toggle
 * @method hide
 * @memberOf dhx.ui.toggle
 * @example $$('myform').hide();
 */
 dhx.ui.toggle.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.toggle.isVisible
 * @class dhx.ui.toggle
 * @method isVisible
 * @memberOf dhx.ui.toggle
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.toggle.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.toggle.mapEvent
 * @class dhx.ui.toggle
 * @method mapEvent
 * @memberOf dhx.ui.toggle
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.toggle.mapEvent = function(map) {};
/**
 * repaints input
 * @id dhx.ui.toggle.refresh
 * @class dhx.ui.toggle
 * @method refresh
 * @memberOf dhx.ui.toggle
 * @example 
 */
 dhx.ui.toggle.refresh = function() {};
/**
 * renders a single item
 * @id dhx.ui.toggle.render
 * @class dhx.ui.toggle
 * @method render
 * @memberOf dhx.ui.toggle
 * @example 
 */
 dhx.ui.toggle.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.toggle.resize
 * @class dhx.ui.toggle
 * @method resize
 * @memberOf dhx.ui.toggle
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.toggle.resize = function(force) {};
/**
 * sets a new value for the button
 * @id dhx.ui.toggle.setValue
 * @class dhx.ui.toggle
 * @method setValue
 * @memberOf dhx.ui.toggle
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.ui.toggle.setValue = function(value) {};
/**
 * makes view visible
 * @id dhx.ui.toggle.show
 * @class dhx.ui.toggle
 * @method show
 * @memberOf dhx.ui.toggle
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.toggle.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.toggle.unblockEvent
 * @class dhx.ui.toggle
 * @method unblockEvent
 * @memberOf dhx.ui.toggle
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.toggle.unblockEvent = function() {};


/**
*
* dhx.ui.toolbar object class.
* @id dhx.ui.toolbar
* @class dhx.ui.toolbar
* @constructor
* @alias dhx.ui.toolbar.prototype

 * @return {dhx.ui.toolbar}
 */


dhx.ui.toolbar.config = {

/**
 * array of views arranged horizontally
 * @id dhx.ui.toolbar.config.cols
 * @type object
 * @property
 */
cols: '',


/**
 * html container or its id where view needs being initialized
 * @id dhx.ui.toolbar.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * class name for view container
 * @id dhx.ui.toolbar.config.css
 * @type string
 * @property
 */
css: '',


/**
 * loaded data
 * @id dhx.ui.toolbar.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * type of loaded data
 * @id dhx.ui.toolbar.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * view gravity (1 by default)
 * @id dhx.ui.toolbar.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * view height
 * @id dhx.ui.toolbar.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.toolbar.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.toolbar.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.toolbar.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * array of views arranged vertically
 * @id dhx.ui.toolbar.config.rows
 * @type object
 * @property
 */
rows: '',


/**
 * enables/disables scroll
 * @id dhx.ui.toolbar.config.scroll
 * @type boolean
 * @property
 */
scroll: '',


/**
 * the type of toolbar
 * @id dhx.ui.toolbar.config.type
 * @type &#039;MainBar&#039; or &#039;SubBar&#039;
 * @property
 */
type: '',


/**
 * data url
 * @id dhx.ui.toolbar.config.url
 * @type string
 * @property
 */
url: '',


/**
 * view width
 * @id dhx.ui.toolbar.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.toolbar.adjust
 * @class dhx.ui.toolbar
 * @method adjust
 * @memberOf dhx.ui.toolbar
 * @example 
 */
 dhx.ui.toolbar.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.toolbar.attachEvent
 * @class dhx.ui.toolbar
 * @method attachEvent
 * @memberOf dhx.ui.toolbar
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.toolbar.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.toolbar.bind
 * @class dhx.ui.toolbar
 * @method bind
 * @memberOf dhx.ui.toolbar
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.toolbar.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.toolbar.blockEvent
 * @class dhx.ui.toolbar
 * @method blockEvent
 * @memberOf dhx.ui.toolbar
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.toolbar.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.toolbar.callEvent
 * @class dhx.ui.toolbar
 * @method callEvent
 * @memberOf dhx.ui.toolbar
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.toolbar.callEvent = function(type,params) {};
/**
 * clears values of all inputs ( resets them to the default values )
 * @id dhx.ui.toolbar.clear
 * @class dhx.ui.toolbar
 * @method clear
 * @memberOf dhx.ui.toolbar
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", label: 'Clear form', click:"clear_form" }]
 * });
 * �
 * function clear_form(){
 * 	$$('myform').clear();
 * };
 */
 dhx.ui.toolbar.clear = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.toolbar.define
 * @class dhx.ui.toolbar
 * @method define
 * @memberOf dhx.ui.toolbar
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.toolbar.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.toolbar.destructor
 * @class dhx.ui.toolbar
 * @method destructor
 * @memberOf dhx.ui.toolbar
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.toolbar.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.toolbar.detachEvent
 * @class dhx.ui.toolbar
 * @method detachEvent
 * @memberOf dhx.ui.toolbar
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.toolbar.detachEvent = function(id) {};
/**
 * some unknown method
 * @id dhx.ui.toolbar.first
 * @class dhx.ui.toolbar
 * @method first
 * @memberOf dhx.ui.toolbar
 * @example 
 */
 dhx.ui.toolbar.first = function() {};
/**
 * sets focus to an input
 * @id dhx.ui.toolbar.focus
 * @class dhx.ui.toolbar
 * @method focus
 * @memberOf dhx.ui.toolbar
 * @param {String} name focus(name)
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('myform').focus("field_a");
 */
 dhx.ui.toolbar.focus = function(name) {};
/**
 * returns main html container of view
 * @id dhx.ui.toolbar.getNode
 * @class dhx.ui.toolbar
 * @method getNode
 * @memberOf dhx.ui.toolbar
 * @example 
 */
 dhx.ui.toolbar.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.toolbar.getParent
 * @class dhx.ui.toolbar
 * @method getParent
 * @memberOf dhx.ui.toolbar
 * @example 
 */
 dhx.ui.toolbar.getParent = function() {};
/**
 * gets hash of data values
 * @id dhx.ui.toolbar.getValues
 * @class dhx.ui.toolbar
 * @method getValues
 * @memberOf dhx.ui.toolbar
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'From', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'To', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", id:"button1", label: 'Show values', click:"get_form" }]
 * 	},
 * 	{ id:"log", template:function(obj){ return "<pre>"+JSON.stringify(obj).replace(/,/g,"\n,")+"</pre>"; }}]
 * });
 * �
 * function get_form(){
 * 	$$('log').parse($$('myform').getValues());
 * };
 */
 dhx.ui.toolbar.getValues = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.toolbar.hasEvent
 * @class dhx.ui.toolbar
 * @method hasEvent
 * @memberOf dhx.ui.toolbar
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.toolbar.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.toolbar.hide
 * @class dhx.ui.toolbar
 * @method hide
 * @memberOf dhx.ui.toolbar
 * @example $$('myform').hide();
 */
 dhx.ui.toolbar.hide = function() {};
/**
 * returns an index of the currently selected view (index in the array of views)
 * @id dhx.ui.toolbar.index
 * @class dhx.ui.toolbar
 * @method index
 * @memberOf dhx.ui.toolbar
 * @param {Number} obj index(obj)
 * @example 
 */
 dhx.ui.toolbar.index = function(obj) {};
/**
 * returns true if current view is visible
 * @id dhx.ui.toolbar.isVisible
 * @class dhx.ui.toolbar
 * @method isVisible
 * @memberOf dhx.ui.toolbar
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.toolbar.isVisible = function(base_id, prev_id) {};
/**
 * loads values from external datasource
 * @id dhx.ui.toolbar.load
 * @class dhx.ui.toolbar
 * @method load
 * @memberOf dhx.ui.toolbar
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.ui.toolbar.load = function(url,call) {};
/**
 * routes events from one object to another
 * @id dhx.ui.toolbar.mapEvent
 * @class dhx.ui.toolbar
 * @method mapEvent
 * @memberOf dhx.ui.toolbar
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.toolbar.mapEvent = function(map) {};
/**
 * addes data from a datasource
 * @id dhx.ui.toolbar.parse
 * @class dhx.ui.toolbar
 * @method parse
 * @memberOf dhx.ui.toolbar
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.ui.toolbar.parse = function(data,type) {};
/**
 * rebuilds layout
 * @id dhx.ui.toolbar.reconstruct
 * @class dhx.ui.toolbar
 * @method reconstruct
 * @memberOf dhx.ui.toolbar
 * @example 
 */
 dhx.ui.toolbar.reconstruct = function() {};
/**
 * repaints the whole view or a certain item
 * @id dhx.ui.toolbar.refresh
 * @class dhx.ui.toolbar
 * @method refresh
 * @memberOf dhx.ui.toolbar
 * @example 
 */
 dhx.ui.toolbar.refresh = function() {};
/**
 * renders a current state of an item or the whole component
 * @id dhx.ui.toolbar.render
 * @class dhx.ui.toolbar
 * @method render
 * @memberOf dhx.ui.toolbar
 * @example 
 */
 dhx.ui.toolbar.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.ui.toolbar.resize
 * @class dhx.ui.toolbar
 * @method resize
 * @memberOf dhx.ui.toolbar
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.toolbar.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.ui.toolbar.resizeChildren
 * @class dhx.ui.toolbar
 * @method resizeChildren
 * @memberOf dhx.ui.toolbar
 * @example 
 */
 dhx.ui.toolbar.resizeChildren = function() {};
/**
 * some unknown method
 * @id dhx.ui.toolbar.scrollState
 * @class dhx.ui.toolbar
 * @method scrollState
 * @memberOf dhx.ui.toolbar
 * @example 
 */
 dhx.ui.toolbar.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.ui.toolbar.scrollTo
 * @class dhx.ui.toolbar
 * @method scrollTo
 * @memberOf dhx.ui.toolbar
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.toolbar.scrollTo = function(x,y) {};
/**
 * sets values for all inputs in the component
 * @id dhx.ui.toolbar.setValues
 * @class dhx.ui.toolbar
 * @method setValues
 * @memberOf dhx.ui.toolbar
 * @param {String} data setValues(data)
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" }]
 * 	},
 * 	{ view:"button", label: 'Fill form', click:"set_form" }]
 * });
 * �
 * function set_form(){
 * 	$$('myform').setValues({
 * 			field_a: "London",
 * 			field_b: "New York",
 * 			field_c: "left"
 * 	});
 * };
 */
 dhx.ui.toolbar.setValues = function(data) {};
/**
 * makes view visible
 * @id dhx.ui.toolbar.show
 * @class dhx.ui.toolbar
 * @method show
 * @memberOf dhx.ui.toolbar
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.toolbar.show = function(animate_settings) {};
/**
 * makes visible elements which parameter &#039;batch&#039; is set to the specified name
 * @id dhx.ui.toolbar.showBatch
 * @class dhx.ui.toolbar
 * @method showBatch
 * @memberOf dhx.ui.toolbar
 * @param {String} name showBatch(name)
 * @example dhx.ui({
 * 	view:"toolbar", type:"top_bar", visibleBatch:"init", elements:[
 * 						{ view:"button", ..., batch:"batch_1" },
 * 						{ view:"label", ..., batch:"batch_1" },
 * 						  ...
 * 						{ view:"imagebutton", ..., batch:"batch_2" },
 * 						  ...
 * 						{ view:"radio", id:"batch_name", value:"batch_2", options:["batch_1", "batch_2"], click:"change_batch" }]
 * })
 * �
 * function change_batch(){
 * 	var mode = $$("batch_name").getValue();
 * 	$$("top_bar").showBatch(mode);
 * };
 */
 dhx.ui.toolbar.showBatch = function(name) {};
/**
 * enables event triggering
 * @id dhx.ui.toolbar.unblockEvent
 * @class dhx.ui.toolbar
 * @method unblockEvent
 * @memberOf dhx.ui.toolbar
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.toolbar.unblockEvent = function() {};
/**
 * validates for the defined rules
 * @id dhx.ui.toolbar.validate
 * @class dhx.ui.toolbar
 * @method validate
 * @memberOf dhx.ui.toolbar
 * @param {Object} obj validate(obj)
 * @example dhx.ui({
 * 	view:"form", 
 * 	id:"myform", 
 * 	elements:[
 * 		{ view:"text", inputWidth:300, label:"Name *", id:"name"},
 * 		{ view:"text", inputWidth:300, label:"Age *",  id:"age"},
 * 		{ view:"button", inputWidth:300, label:"Submit", click:"submit_form"}],
 * 	rules:{
 * 		name:dhx.rules.isNotEmpty,
 * 		age:dhx.rules.isNumber
 * 	}
 * });
 * �
 * submit_form = function(){
 * 	if ($$("myform").validate()==false)
 * 		{dhx.notice("Invalid value for some field");}
 * }
 */
 dhx.ui.toolbar.validate = function(obj) {};


/**
*
* dhx.ui.video object class.
* @id dhx.ui.video
* @class dhx.ui.video
* @constructor
* @alias dhx.ui.video.prototype

 * @return {dhx.ui.video}
 */


dhx.ui.video.config = {

/**
 * defines whether a video file must be played just after initialization, without waiting a button click (false)
 * @id dhx.ui.video.config.autoplay
 * @type boolean
 * @property
 */
autoplay: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.video.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * defines whether a control panel should be displayed (true)
 * @id dhx.ui.video.config.controls
 * @type boolean
 * @property
 */
controls: '',


/**
 * css class for a view container
 * @id dhx.ui.video.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.video.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.video.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.video.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.video.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * path to video file
 * @id dhx.ui.video.config.src
 * @type string
 * @property
 */
src: '',


/**
 * width of view
 * @id dhx.ui.video.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.video.adjust
 * @class dhx.ui.video
 * @method adjust
 * @memberOf dhx.ui.video
 * @example 
 */
 dhx.ui.video.adjust = function() {};
/**
 * binds components
 * @id dhx.ui.video.bind
 * @class dhx.ui.video
 * @method bind
 * @memberOf dhx.ui.video
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.video.bind = function(target, rule, format) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.video.define
 * @class dhx.ui.video
 * @method define
 * @memberOf dhx.ui.video
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.video.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.video.destructor
 * @class dhx.ui.video
 * @method destructor
 * @memberOf dhx.ui.video
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.video.destructor = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.video.getNode
 * @class dhx.ui.video
 * @method getNode
 * @memberOf dhx.ui.video
 * @example 
 */
 dhx.ui.video.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.video.getParent
 * @class dhx.ui.video
 * @method getParent
 * @memberOf dhx.ui.video
 * @example 
 */
 dhx.ui.video.getParent = function() {};
/**
 * gets the video object
 * @id dhx.ui.video.getVideo
 * @class dhx.ui.video
 * @method getVideo
 * @memberOf dhx.ui.video
 * @example 
 */
 dhx.ui.video.getVideo = function() {};
/**
 * hides view
 * @id dhx.ui.video.hide
 * @class dhx.ui.video
 * @method hide
 * @memberOf dhx.ui.video
 * @example $$('myform').hide();
 */
 dhx.ui.video.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.video.isVisible
 * @class dhx.ui.video
 * @method isVisible
 * @memberOf dhx.ui.video
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.video.isVisible = function(base_id, prev_id) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.video.resize
 * @class dhx.ui.video
 * @method resize
 * @memberOf dhx.ui.video
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.video.resize = function(force) {};
/**
 * makes view visible
 * @id dhx.ui.video.show
 * @class dhx.ui.video
 * @method show
 * @memberOf dhx.ui.video
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.video.show = function(animate_settings) {};


/**
*
* dhx.ui.view object class.
* @id dhx.ui.view
* @class dhx.ui.view
* @constructor
* @alias dhx.ui.view.prototype

 * @return {dhx.ui.view}
 */


dhx.ui.view.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.ui.view.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.view.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.view.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.ui.view.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.ui.view.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.view.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * width of view
 * @id dhx.ui.view.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.view.adjust
 * @class dhx.ui.view
 * @method adjust
 * @memberOf dhx.ui.view
 * @example 
 */
 dhx.ui.view.adjust = function() {};
/**
 * binds components
 * @id dhx.ui.view.bind
 * @class dhx.ui.view
 * @method bind
 * @memberOf dhx.ui.view
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.view.bind = function(target, rule, format) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.view.define
 * @class dhx.ui.view
 * @method define
 * @memberOf dhx.ui.view
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.view.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.view.destructor
 * @class dhx.ui.view
 * @method destructor
 * @memberOf dhx.ui.view
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.view.destructor = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.view.getNode
 * @class dhx.ui.view
 * @method getNode
 * @memberOf dhx.ui.view
 * @example 
 */
 dhx.ui.view.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.view.getParent
 * @class dhx.ui.view
 * @method getParent
 * @memberOf dhx.ui.view
 * @example 
 */
 dhx.ui.view.getParent = function() {};
/**
 * hides view
 * @id dhx.ui.view.hide
 * @class dhx.ui.view
 * @method hide
 * @memberOf dhx.ui.view
 * @example $$('myform').hide();
 */
 dhx.ui.view.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.view.isVisible
 * @class dhx.ui.view
 * @method isVisible
 * @memberOf dhx.ui.view
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.view.isVisible = function(base_id, prev_id) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.view.resize
 * @class dhx.ui.view
 * @method resize
 * @memberOf dhx.ui.view
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.view.resize = function(force) {};
/**
 * makes view visible
 * @id dhx.ui.view.show
 * @class dhx.ui.view
 * @method show
 * @memberOf dhx.ui.view
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.view.show = function(animate_settings) {};


/**
*
* dhx.ui.window object class.
* @id dhx.ui.window
* @class dhx.ui.window
* @constructor
* @alias dhx.ui.window.prototype

 * @return {dhx.ui.window}
 */


dhx.ui.window.config = {

/**
 * the content of window body: template or view
 * @id dhx.ui.window.config.body
 * @type template, object
 * @property
 */
body: '',


/**
 * html container or its id where view will be initialized
 * @id dhx.ui.window.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * css class for a view container
 * @id dhx.ui.window.config.css
 * @type string
 * @property
 */
css: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.ui.window.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * defines the header height (43 by default)
 * @id dhx.ui.window.config.headHeight
 * @type dimension
 * @property
 */
headHeight: '',


/**
 * sets header view
 * @id dhx.ui.window.config.head
 * @type object
 * @property
 */
head: '',


/**
 * the content of window header: template or view
 * @id dhx.ui.window.config.header
 * @type template, object
 * @property
 */
header: '',


/**
 * window height (200)
 * @id dhx.ui.window.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * hides the window initially
 * @id dhx.ui.window.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.ui.window.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * the left offset of a window (100)
 * @id dhx.ui.window.config.left
 * @type dimension
 * @property
 */
left: '',


/**
 * switches window modality
 * @id dhx.ui.window.config.modal
 * @type boolean
 * @property
 */
modal: '',


/**
 * makes view movable
 * @id dhx.ui.window.config.move
 * @type boolean
 * @property
 */
move: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.ui.window.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * window position: &#039;top&#039; or &#039;center&#039;
 * @id dhx.ui.window.config.position
 * @type string
 * @property
 */
position: '',


/**
 * the top offset of a window (100)
 * @id dhx.ui.window.config.top
 * @type dimension
 * @property
 */
top: '',


/**
 * window width (300)
 * @id dhx.ui.window.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.ui.window.adjust
 * @class dhx.ui.window
 * @method adjust
 * @memberOf dhx.ui.window
 * @example 
 */
 dhx.ui.window.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.ui.window.attachEvent
 * @class dhx.ui.window
 * @method attachEvent
 * @memberOf dhx.ui.window
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.ui.window.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.ui.window.bind
 * @class dhx.ui.window
 * @method bind
 * @memberOf dhx.ui.window
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.ui.window.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.ui.window.blockEvent
 * @class dhx.ui.window
 * @method blockEvent
 * @memberOf dhx.ui.window
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.ui.window.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.ui.window.callEvent
 * @class dhx.ui.window
 * @method callEvent
 * @memberOf dhx.ui.window
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.ui.window.callEvent = function(type,params) {};
/**
 * removes a window
 * @id dhx.ui.window.close
 * @class dhx.ui.window
 * @method close
 * @memberOf dhx.ui.window
 * @example 
 */
 dhx.ui.window.close = function() {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.ui.window.define
 * @class dhx.ui.window
 * @method define
 * @memberOf dhx.ui.window
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.ui.window.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.ui.window.destructor
 * @class dhx.ui.window
 * @method destructor
 * @memberOf dhx.ui.window
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.ui.window.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.ui.window.detachEvent
 * @class dhx.ui.window
 * @method detachEvent
 * @memberOf dhx.ui.window
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.ui.window.detachEvent = function(id) {};
/**
 * gets the ui view of the window body
 * @id dhx.ui.window.getBody
 * @class dhx.ui.window
 * @method getBody
 * @memberOf dhx.ui.window
 * @example 
 */
 dhx.ui.window.getBody = function() {};
/**
 * gets the ui view of the window header
 * @id dhx.ui.window.getHead
 * @class dhx.ui.window
 * @method getHead
 * @memberOf dhx.ui.window
 * @example 
 */
 dhx.ui.window.getHead = function() {};
/**
 * returns main html container of view
 * @id dhx.ui.window.getNode
 * @class dhx.ui.window
 * @method getNode
 * @memberOf dhx.ui.window
 * @example 
 */
 dhx.ui.window.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.ui.window.getParent
 * @class dhx.ui.window
 * @method getParent
 * @memberOf dhx.ui.window
 * @example 
 */
 dhx.ui.window.getParent = function() {};
/**
 * checks whether a component has an event
 * @id dhx.ui.window.hasEvent
 * @class dhx.ui.window
 * @method hasEvent
 * @memberOf dhx.ui.window
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.ui.window.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.ui.window.hide
 * @class dhx.ui.window
 * @method hide
 * @memberOf dhx.ui.window
 * @example $$('myform').hide();
 */
 dhx.ui.window.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.ui.window.isVisible
 * @class dhx.ui.window
 * @method isVisible
 * @memberOf dhx.ui.window
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.ui.window.isVisible = function(base_id, prev_id) {};
/**
 * routes events from one object to another
 * @id dhx.ui.window.mapEvent
 * @class dhx.ui.window
 * @method mapEvent
 * @memberOf dhx.ui.window
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.ui.window.mapEvent = function(map) {};
/**
 * adjusts view to the new size
 * @id dhx.ui.window.resize
 * @class dhx.ui.window
 * @method resize
 * @memberOf dhx.ui.window
 * @param {String} force resize(force)
 * @example 
 */
 dhx.ui.window.resize = function(force) {};
/**
 * sets window&#039;s position
 * @id dhx.ui.window.setPosition
 * @class dhx.ui.window
 * @method setPosition
 * @memberOf dhx.ui.window
 * @param {String} x setPosition(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.ui.window.setPosition = function(x,y) {};
/**
 * makes view visible
 * @id dhx.ui.window.show
 * @class dhx.ui.window
 * @method show
 * @memberOf dhx.ui.window
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.ui.window.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.ui.window.unblockEvent
 * @class dhx.ui.window
 * @method unblockEvent
 * @memberOf dhx.ui.window
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.ui.window.unblockEvent = function() {};


/**
*
* dhx.ActiveContent object class.
* @id dhx.ActiveContent
* @class dhx.ActiveContent
* @constructor
* @alias dhx.ActiveContent.prototype

 * @return {dhx.ActiveContent}
 */


dhx.ActiveContent.config = {

};
		



/**
*
* dhx.AtomDataLoader object class.
* @id dhx.AtomDataLoader
* @class dhx.AtomDataLoader
* @constructor
* @alias dhx.AtomDataLoader.prototype

 * @return {dhx.AtomDataLoader}
 */


dhx.AtomDataLoader.config = {

/**
 * loaded data
 * @id dhx.AtomDataLoader.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * type of loaded data
 * @id dhx.AtomDataLoader.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * data url
 * @id dhx.AtomDataLoader.config.url
 * @type string
 * @property
 */
url: ''
};
		

/**
 * loads values from external datasource
 * @id dhx.AtomDataLoader.load
 * @class dhx.AtomDataLoader
 * @method load
 * @memberOf dhx.AtomDataLoader
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.AtomDataLoader.load = function(url,call) {};
/**
 * addes data from a datasource
 * @id dhx.AtomDataLoader.parse
 * @class dhx.AtomDataLoader
 * @method parse
 * @memberOf dhx.AtomDataLoader
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.AtomDataLoader.parse = function(data,type) {};


/**
*
* dhx.AtomRender object class.
* @id dhx.AtomRender
* @class dhx.AtomRender
* @constructor
* @alias dhx.AtomRender.prototype

 * @return {dhx.AtomRender}
 */


dhx.AtomRender.config = {

/**
 * item template
 * @id dhx.AtomRender.config.template
 * @type template
 * @property
 */
template: ''
};
		

/**
 * renders a single item
 * @id dhx.AtomRender.render
 * @class dhx.AtomRender
 * @method render
 * @memberOf dhx.AtomRender
 * @example 
 */
 dhx.AtomRender.render = function() {};


/**
*
* dhx.BaseBind object class.
* @id dhx.BaseBind
* @class dhx.BaseBind
* @constructor
* @alias dhx.BaseBind.prototype

 * @return {dhx.BaseBind}
 */


dhx.BaseBind.config = {

};
		

/**
 * binds components
 * @id dhx.BaseBind.bind
 * @class dhx.BaseBind
 * @method bind
 * @memberOf dhx.BaseBind
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.BaseBind.bind = function(target, rule, format) {};


/**
*
* dhx.BindSource object class.
* @id dhx.BindSource
* @class dhx.BindSource
* @constructor
* @alias dhx.BindSource.prototype

 * @return {dhx.BindSource}
 */


dhx.BindSource.config = {

};
		

/**
 * adds one more bound target
 * @id dhx.BindSource.addBind
 * @class dhx.BindSource
 * @method addBind
 * @memberOf dhx.BindSource
 * @param {String} source addBind(source, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example 
 */
 dhx.BindSource.addBind = function(source, rule, format) {};
/**
 * fills target object with data
 * @id dhx.BindSource.getBindData
 * @class dhx.BindSource
 * @method getBindData
 * @memberOf dhx.BindSource
 * @param {String} key getBindData(key, update)
 * @param {String} update Type: Method
 * @example 
 */
 dhx.BindSource.getBindData = function(key, update) {};
/**
 * makes simultaneous saving several components
 * @id dhx.BindSource.saveBatch
 * @class dhx.BindSource
 * @method saveBatch
 * @memberOf dhx.BindSource
 * @param {String} code saveBatch(code)
 * @example $$('myform1').bind('myStore');
 * $$('myform2').bind('myStore');
 * �
 * $$('myStore').saveBatch(function(){
 *         $$('myform1').save();
 *         $$('myform2').save();
 * });
 */
 dhx.BindSource.saveBatch = function(code) {};
/**
 * 
 * @id dhx.BindSource.setBindData
 * @class dhx.BindSource
 * @method setBindData
 * @memberOf dhx.BindSource
 * @param {String} data setBindData(data, key)
 * @param {String} key Type: Method
 * @example 
 */
 dhx.BindSource.setBindData = function(data, key) {};


/**
*
* dhx.Canvas object class.
* @id dhx.Canvas
* @class dhx.Canvas
* @constructor
* @alias dhx.Canvas.prototype

 * @return {dhx.Canvas}
 */


dhx.Canvas.config = {

};
		

/**
 * clears canvas
 * @id dhx.Canvas.clearCanvas
 * @class dhx.Canvas
 * @method clearCanvas
 * @memberOf dhx.Canvas
 * @example 
 */
 dhx.Canvas.clearCanvas = function() {};
/**
 * gets canvas
 * @id dhx.Canvas.getCanvas
 * @class dhx.Canvas
 * @method getCanvas
 * @memberOf dhx.Canvas
 * @param {String} context getCanvas(context)
 * @example 
 */
 dhx.Canvas.getCanvas = function(context) {};
/**
 * creates absolutely positioned container
 * @id dhx.Canvas.renderText
 * @class dhx.Canvas
 * @method renderText
 * @memberOf dhx.Canvas
 * @param {String} x renderText(x,y,text,css,w)
 * @param {String} y Type: Method
 * @param {String} text File:
 * @param {String} css Implemented in: Canvas
 * @param {String} w Included in: chart
 * @example 
 */
 dhx.Canvas.renderText = function(x,y,text,css,w) {};
/**
 * creates absolutely positioned container and then align it according to the 1st and 2nd parameters
 * @id dhx.Canvas.renderTextAt
 * @class dhx.Canvas
 * @method renderTextAt
 * @memberOf dhx.Canvas
 * @param {String} valign renderTextAt(valign,align, x,y,t,c,w)
 * @param {String} align Type: Method
 * @param {String} x File:
 * @param {String} y Implemented in: Canvas
 * @param {String} t Included in: chart
 * @param {String} [c] valign - vertical align (optional)
 * @param {String} [w] align - horizontal align (optional)
 * @example 
 */
 dhx.Canvas.renderTextAt = function(valign,align, x,y,t,c,w) {};


/**
*
* dhx.CanvasMgr object class.
* @id dhx.CanvasMgr
* @class dhx.CanvasMgr
* @constructor
* @alias dhx.CanvasMgr.prototype

 * @return {dhx.CanvasMgr}
 */


dhx.CanvasMgr.config = {

};
		

/**
 * some unknown method
 * @id dhx.CanvasMgr.dhxArrowLeft
 * @class dhx.CanvasMgr
 * @method dhxArrowLeft
 * @memberOf dhx.CanvasMgr
 * @example 
 */
 dhx.CanvasMgr.dhxArrowLeft = function() {};
/**
 * some unknown method
 * @id dhx.CanvasMgr.dhxArrowLeftT
 * @class dhx.CanvasMgr
 * @method dhxArrowLeftT
 * @memberOf dhx.CanvasMgr
 * @example 
 */
 dhx.CanvasMgr.dhxArrowLeftT = function() {};
/**
 * some unknown method
 * @id dhx.CanvasMgr.dhxArrowRight
 * @class dhx.CanvasMgr
 * @method dhxArrowRight
 * @memberOf dhx.CanvasMgr
 * @example 
 */
 dhx.CanvasMgr.dhxArrowRight = function() {};
/**
 * some unknown method
 * @id dhx.CanvasMgr.dhxArrowRightT
 * @class dhx.CanvasMgr
 * @method dhxArrowRightT
 * @memberOf dhx.CanvasMgr
 * @example 
 */
 dhx.CanvasMgr.dhxArrowRightT = function() {};


/**
*
* dhx.CarouselPanel object class.
* @id dhx.CarouselPanel
* @class dhx.CarouselPanel
* @constructor
* @alias dhx.CarouselPanel.prototype

 * @return {dhx.CarouselPanel}
 */


dhx.CarouselPanel.config = {

};
		



/**
*
* dhx.CollectionBind object class.
* @id dhx.CollectionBind
* @class dhx.CollectionBind
* @constructor
* @alias dhx.CollectionBind.prototype

 * @return {dhx.CollectionBind}
 */


dhx.CollectionBind.config = {

};
		

/**
 * gets cursor
 * @id dhx.CollectionBind.getCursor
 * @class dhx.CollectionBind
 * @method getCursor
 * @memberOf dhx.CollectionBind
 * @example 
 */
 dhx.CollectionBind.getCursor = function() {};
/**
 * sets cursor to an item
 * @id dhx.CollectionBind.setCursor
 * @class dhx.CollectionBind
 * @method setCursor
 * @memberOf dhx.CollectionBind
 * @param {String} id setCursor(id)
 * @example 
 */
 dhx.CollectionBind.setCursor = function(id) {};


/**
*
* dhx.DataCollection object class.
* @id dhx.DataCollection
* @class dhx.DataCollection
* @constructor
* @alias dhx.DataCollection.prototype

 * @return {dhx.DataCollection}
 */


dhx.DataCollection.config = {

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.DataCollection.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',


/**
 * loaded data
 * @id dhx.DataCollection.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * custom DataStore object
 * @id dhx.DataCollection.config.datastore
 * @type object
 * @property
 */
datastore: '',


/**
 * type of loaded data
 * @id dhx.DataCollection.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.DataCollection.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * unknown
 * @id dhx.DataCollection.config.scheme
 * @type unknown
 * @property
 */
scheme: '',


/**
 * data url
 * @id dhx.DataCollection.config.url
 * @type string
 * @property
 */
url: ''
};
		

/**
 * attaches custom handler to inner event
 * @id dhx.DataCollection.attachEvent
 * @class dhx.DataCollection
 * @method attachEvent
 * @memberOf dhx.DataCollection
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.DataCollection.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.DataCollection.bind
 * @class dhx.DataCollection
 * @method bind
 * @memberOf dhx.DataCollection
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.DataCollection.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.DataCollection.blockEvent
 * @class dhx.DataCollection
 * @method blockEvent
 * @memberOf dhx.DataCollection
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.DataCollection.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.DataCollection.callEvent
 * @class dhx.DataCollection
 * @method callEvent
 * @memberOf dhx.DataCollection
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.DataCollection.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.DataCollection.define
 * @class dhx.DataCollection
 * @method define
 * @memberOf dhx.DataCollection
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.DataCollection.define = function(property, value) {};
/**
 * detaches custom code from handler
 * @id dhx.DataCollection.detachEvent
 * @class dhx.DataCollection
 * @method detachEvent
 * @memberOf dhx.DataCollection
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.DataCollection.detachEvent = function(id) {};
/**
 * checks whether a component has an event
 * @id dhx.DataCollection.hasEvent
 * @class dhx.DataCollection
 * @method hasEvent
 * @memberOf dhx.DataCollection
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.DataCollection.hasEvent = function(type) {};
/**
 * returns true if current view is visible
 * @id dhx.DataCollection.isVisible
 * @class dhx.DataCollection
 * @method isVisible
 * @memberOf dhx.DataCollection
 * @example 
 */
 dhx.DataCollection.isVisible = function() {};
/**
 * loads values from external datasource
 * @id dhx.DataCollection.load
 * @class dhx.DataCollection
 * @method load
 * @memberOf dhx.DataCollection
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.DataCollection.load = function(url,call) {};
/**
 * some unknown method
 * @id dhx.DataCollection.loadNext
 * @class dhx.DataCollection
 * @method loadNext
 * @memberOf dhx.DataCollection
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.DataCollection.loadNext = function(count, start) {};
/**
 * routes events from one object to another
 * @id dhx.DataCollection.mapEvent
 * @class dhx.DataCollection
 * @method mapEvent
 * @memberOf dhx.DataCollection
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.DataCollection.mapEvent = function(map) {};
/**
 * addes data from a datasource
 * @id dhx.DataCollection.parse
 * @class dhx.DataCollection
 * @method parse
 * @memberOf dhx.DataCollection
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.DataCollection.parse = function(data,type) {};
/**
 * repaints the whole view or a certain item
 * @id dhx.DataCollection.refresh
 * @class dhx.DataCollection
 * @method refresh
 * @memberOf dhx.DataCollection
 * @example 
 */
 dhx.DataCollection.refresh = function() {};
/**
 * enables event triggering
 * @id dhx.DataCollection.unblockEvent
 * @class dhx.DataCollection
 * @method unblockEvent
 * @memberOf dhx.DataCollection
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.DataCollection.unblockEvent = function() {};


/**
*
* dhx.DataDriver object class.
* @id dhx.DataDriver
* @class dhx.DataDriver
* @constructor
* @alias dhx.DataDriver.prototype

 * @return {dhx.DataDriver}
 */


dhx.DataDriver.config = {

};
		



/**
*
* dhx.DataLoader object class.
* @id dhx.DataLoader
* @class dhx.DataLoader
* @constructor
* @alias dhx.DataLoader.prototype

 * @return {dhx.DataLoader}
 */


dhx.DataLoader.config = {

/**
 * path to php file that will get data. Used to reload data from server.
 * @id dhx.DataLoader.config.dataFeed
 * @type string
 * @property
 */
dataFeed: '',


/**
 * loaded data
 * @id dhx.DataLoader.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * custom DataStore object
 * @id dhx.DataLoader.config.datastore
 * @type object
 * @property
 */
datastore: '',


/**
 * type of loaded data
 * @id dhx.DataLoader.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * unknown
 * @id dhx.DataLoader.config.scheme
 * @type unknown
 * @property
 */
scheme: '',


/**
 * data url
 * @id dhx.DataLoader.config.url
 * @type string
 * @property
 */
url: ''
};
		

/**
 * loads values from external datasource
 * @id dhx.DataLoader.load
 * @class dhx.DataLoader
 * @method load
 * @memberOf dhx.DataLoader
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.DataLoader.load = function(url,call) {};
/**
 * some unknown method
 * @id dhx.DataLoader.loadNext
 * @class dhx.DataLoader
 * @method loadNext
 * @memberOf dhx.DataLoader
 * @param {String} count loadNext(count, start)
 * @param {String} start Type: Method
 * @example 
 */
 dhx.DataLoader.loadNext = function(count, start) {};
/**
 * addes data from a datasource
 * @id dhx.DataLoader.parse
 * @class dhx.DataLoader
 * @method parse
 * @memberOf dhx.DataLoader
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.DataLoader.parse = function(data,type) {};


/**
*
* dhx.DataMove object class.
* @id dhx.DataMove
* @class dhx.DataMove
* @constructor
* @alias dhx.DataMove.prototype

 * @return {dhx.DataMove}
 */


dhx.DataMove.config = {

};
		

/**
 * copies an item to the same or another object
 * @id dhx.DataMove.copy
 * @class dhx.DataMove
 * @method copy
 * @memberOf dhx.DataMove
 * @param {Number} sid copy(sid,tindex,tobj,tid)
 * @param {String} tindex Type: Method
 * @param {Object} tobj File: core/move.js
 * @param {String} tid Implemented in: DataMove
 * @example 
 */
 dhx.DataMove.copy = function(sid,tindex,tobj,tid) {};
/**
 * makes data copy
 * @id dhx.DataMove.externalData
 * @class dhx.DataMove
 * @method externalData
 * @memberOf dhx.DataMove
 * @param {String} data externalData(data,id)
 * @param {String} id Type: Method
 * @example 
 */
 dhx.DataMove.externalData = function(data,id) {};
/**
 * moves an item to the new position
 * @id dhx.DataMove.move
 * @class dhx.DataMove
 * @method move
 * @memberOf dhx.DataMove
 * @param {Number} sid move(sid,tindex,tobj,tid)
 * @param {String} tindex Type: Method
 * @param {Object} tobj File: core/move.js
 * @param {String} tid Implemented in: DataMove
 * @example 
 */
 dhx.DataMove.move = function(sid,tindex,tobj,tid) {};
/**
 * moves an item to the last position
 * @id dhx.DataMove.moveBottom
 * @class dhx.DataMove
 * @method moveBottom
 * @memberOf dhx.DataMove
 * @param {String} id moveBottom(id)
 * @example 
 */
 dhx.DataMove.moveBottom = function(id) {};
/**
 * increases item index
 * @id dhx.DataMove.moveDown
 * @class dhx.DataMove
 * @method moveDown
 * @memberOf dhx.DataMove
 * @param {String} id moveDown(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.DataMove.moveDown = function(id,step) {};
/**
 * moves an item to the first position
 * @id dhx.DataMove.moveTop
 * @class dhx.DataMove
 * @method moveTop
 * @memberOf dhx.DataMove
 * @param {String} id moveTop(id)
 * @example 
 */
 dhx.DataMove.moveTop = function(id) {};
/**
 * decreases item index
 * @id dhx.DataMove.moveUp
 * @class dhx.DataMove
 * @method moveUp
 * @memberOf dhx.DataMove
 * @param {String} id moveUp(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.DataMove.moveUp = function(id,step) {};


/**
*
* dhx.DataProcessor object class.
* @id dhx.DataProcessor
* @class dhx.DataProcessor
* @constructor
* @alias dhx.DataProcessor.prototype

 * @return {dhx.DataProcessor}
 */


dhx.DataProcessor.config = {

/**
 * enables automatic data updating on server while any changes on client-side are done
 * @id dhx.DataProcessor.config.autoupdate
 * @type boolean
 * @property
 */
autoupdate: '',


/**
 * the linked data source. It can be both some independent data source and one of components operated on data (e.g. grid)
 * @id dhx.DataProcessor.config.master
 * @type object
 * @property
 */
master: '',


/**
 * type of request
 * @id dhx.DataProcessor.config.mode
 * @type &#039;post&#039; or &#039;get&#039;
 * @property
 */
mode: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.DataProcessor.config.on
 * @type undefined
 * @property
 */
on: ''
};
		

/**
 * attaches custom handler to inner event
 * @id dhx.DataProcessor.attachEvent
 * @class dhx.DataProcessor
 * @method attachEvent
 * @memberOf dhx.DataProcessor
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.DataProcessor.attachEvent = function(type,functor,id) {};
/**
 * blocks event triggering
 * @id dhx.DataProcessor.blockEvent
 * @class dhx.DataProcessor
 * @method blockEvent
 * @memberOf dhx.DataProcessor
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.DataProcessor.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.DataProcessor.callEvent
 * @class dhx.DataProcessor
 * @method callEvent
 * @memberOf dhx.DataProcessor
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.DataProcessor.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.DataProcessor.define
 * @class dhx.DataProcessor
 * @method define
 * @memberOf dhx.DataProcessor
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.DataProcessor.define = function(property, value) {};
/**
 * detaches custom code from handler
 * @id dhx.DataProcessor.detachEvent
 * @class dhx.DataProcessor
 * @method detachEvent
 * @memberOf dhx.DataProcessor
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.DataProcessor.detachEvent = function(id) {};
/**
 * sets requests encoding
 * @id dhx.DataProcessor.escape
 * @class dhx.DataProcessor
 * @method escape
 * @memberOf dhx.DataProcessor
 * @param {String} value escape(value)
 * @example 
 */
 dhx.DataProcessor.escape = function(value) {};
/**
 * checks whether a component has an event
 * @id dhx.DataProcessor.hasEvent
 * @class dhx.DataProcessor
 * @method hasEvent
 * @memberOf dhx.DataProcessor
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.DataProcessor.hasEvent = function(type) {};
/**
 * the code that you pass here as the parameter will not react on any data changes (will not be affected by &#039;onStoreUpdated&#039; event handler)
 * @id dhx.DataProcessor.ignore
 * @class dhx.DataProcessor
 * @method ignore
 * @memberOf dhx.DataProcessor
 * @param {String} code ignore(code,master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.DataProcessor.ignore = function(code,master) {};
/**
 * routes events from one object to another
 * @id dhx.DataProcessor.mapEvent
 * @class dhx.DataProcessor
 * @method mapEvent
 * @memberOf dhx.DataProcessor
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.DataProcessor.mapEvent = function(map) {};
/**
 * disables dataProcessor
 * @id dhx.DataProcessor.off
 * @class dhx.DataProcessor
 * @method off
 * @memberOf dhx.DataProcessor
 * @example 
 */
 dhx.DataProcessor.off = function() {};
/**
 * enables dataProcessor
 * @id dhx.DataProcessor.on
 * @class dhx.DataProcessor
 * @method on
 * @memberOf dhx.DataProcessor
 * @example 
 */
 dhx.DataProcessor.on = function() {};
/**
 * allows to save data changes
 * @id dhx.DataProcessor.save
 * @class dhx.DataProcessor
 * @method save
 * @memberOf dhx.DataProcessor
 * @param {String} id save(id, operation)
 * @param {String} operation Type: Method
 * @example 
 */
 dhx.DataProcessor.save = function(id, operation) {};
/**
 * sends a request to server. Allows to save data changes on server.
 * @id dhx.DataProcessor.send
 * @class dhx.DataProcessor
 * @method send
 * @memberOf dhx.DataProcessor
 * @example 
 */
 dhx.DataProcessor.send = function() {};
/**
 * enables event triggering
 * @id dhx.DataProcessor.unblockEvent
 * @class dhx.DataProcessor
 * @method unblockEvent
 * @memberOf dhx.DataProcessor
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.DataProcessor.unblockEvent = function() {};
/**
 * validates for the defined rules
 * @id dhx.DataProcessor.validate
 * @class dhx.DataProcessor
 * @method validate
 * @memberOf dhx.DataProcessor
 * @param {Object} obj validate(obj)
 * @example dhx.ui({
 * 	view:"form", 
 * 	id:"myform", 
 * 	elements:[
 * 		{ view:"text", inputWidth:300, label:"Name *", id:"name"},
 * 		{ view:"text", inputWidth:300, label:"Age *",  id:"age"},
 * 		{ view:"button", inputWidth:300, label:"Submit", click:"submit_form"}],
 * 	rules:{
 * 		name:dhx.rules.isNotEmpty,
 * 		age:dhx.rules.isNumber
 * 	}
 * });
 * �
 * submit_form = function(){
 * 	if ($$("myform").validate()==false)
 * 		{dhx.notice("Invalid value for some field");}
 * }
 */
 dhx.DataProcessor.validate = function(obj) {};


/**
*
* dhx.DataRecord object class.
* @id dhx.DataRecord
* @class dhx.DataRecord
* @constructor
* @alias dhx.DataRecord.prototype

 * @return {dhx.DataRecord}
 */


dhx.DataRecord.config = {

/**
 * loaded data
 * @id dhx.DataRecord.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * type of loaded data
 * @id dhx.DataRecord.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.DataRecord.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * data url
 * @id dhx.DataRecord.config.url
 * @type string
 * @property
 */
url: ''
};
		

/**
 * attaches custom handler to inner event
 * @id dhx.DataRecord.attachEvent
 * @class dhx.DataRecord
 * @method attachEvent
 * @memberOf dhx.DataRecord
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.DataRecord.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.DataRecord.bind
 * @class dhx.DataRecord
 * @method bind
 * @memberOf dhx.DataRecord
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.DataRecord.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.DataRecord.blockEvent
 * @class dhx.DataRecord
 * @method blockEvent
 * @memberOf dhx.DataRecord
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.DataRecord.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.DataRecord.callEvent
 * @class dhx.DataRecord
 * @method callEvent
 * @memberOf dhx.DataRecord
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.DataRecord.callEvent = function(type,params) {};
/**
 * detaches custom code from handler
 * @id dhx.DataRecord.detachEvent
 * @class dhx.DataRecord
 * @method detachEvent
 * @memberOf dhx.DataRecord
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.DataRecord.detachEvent = function(id) {};
/**
 * gets hash of data values
 * @id dhx.DataRecord.getValues
 * @class dhx.DataRecord
 * @method getValues
 * @memberOf dhx.DataRecord
 * @example 
 */
 dhx.DataRecord.getValues = function() {};
/**
 * checks whether a component has an event
 * @id dhx.DataRecord.hasEvent
 * @class dhx.DataRecord
 * @method hasEvent
 * @memberOf dhx.DataRecord
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.DataRecord.hasEvent = function(type) {};
/**
 * returns true if current view is visible
 * @id dhx.DataRecord.isVisible
 * @class dhx.DataRecord
 * @method isVisible
 * @memberOf dhx.DataRecord
 * @example 
 */
 dhx.DataRecord.isVisible = function() {};
/**
 * loads values from external datasource
 * @id dhx.DataRecord.load
 * @class dhx.DataRecord
 * @method load
 * @memberOf dhx.DataRecord
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.DataRecord.load = function(url,call) {};
/**
 * routes events from one object to another
 * @id dhx.DataRecord.mapEvent
 * @class dhx.DataRecord
 * @method mapEvent
 * @memberOf dhx.DataRecord
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.DataRecord.mapEvent = function(map) {};
/**
 * addes data from a datasource
 * @id dhx.DataRecord.parse
 * @class dhx.DataRecord
 * @method parse
 * @memberOf dhx.DataRecord
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.DataRecord.parse = function(data,type) {};
/**
 * repaints view
 * @id dhx.DataRecord.refresh
 * @class dhx.DataRecord
 * @method refresh
 * @memberOf dhx.DataRecord
 * @example 
 */
 dhx.DataRecord.refresh = function() {};
/**
 * sets values for all inputs in the component
 * @id dhx.DataRecord.setValues
 * @class dhx.DataRecord
 * @method setValues
 * @memberOf dhx.DataRecord
 * @param {String} data setValues(data)
 * @example 
 */
 dhx.DataRecord.setValues = function(data) {};
/**
 * enables event triggering
 * @id dhx.DataRecord.unblockEvent
 * @class dhx.DataRecord
 * @method unblockEvent
 * @memberOf dhx.DataRecord
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.DataRecord.unblockEvent = function() {};


/**
*
* dhx.DataStore object class.
* @id dhx.DataStore
* @class dhx.DataStore
* @constructor
* @alias dhx.DataStore.prototype

 * @return {dhx.DataStore}
 */


dhx.DataStore.config = {

};
		

/**
 * adds item to the store
 * @id dhx.DataStore.add
 * @class dhx.DataStore
 * @method add
 * @memberOf dhx.DataStore
 * @param {Number} obj add(obj,index)
 * @param {String} index Type: Method
 * @example $$('mylist').add({
 *   text:"Some new text"
 * })
 * �
 * //add to the start of list
 * $$('mylist').add({
 *   text:"First item"
 * }, 0)
 * �
 * //object can contain any properties
 * $$('mygrid').add({
 *   some:"some string",
 *   other:123,
 *   complex:{
 *   	contain:"any",
 *   	content:"inside"
 *   }
 * }, 0);
 */
 dhx.DataStore.add = function(obj,index) {};
/**
 * changes id of the data item
 * @id dhx.DataStore.changeId
 * @class dhx.DataStore
 * @method changeId
 * @memberOf dhx.DataStore
 * @param {String} old changeId(old, newid)
 * @param {String} newid Type: Method
 * @example 
 */
 dhx.DataStore.changeId = function(old, newid) {};
/**
 * removes all items from the component
 * @id dhx.DataStore.clearAll
 * @class dhx.DataStore
 * @method clearAll
 * @memberOf dhx.DataStore
 * @example 
 */
 dhx.DataStore.clearAll = function() {};
/**
 * gets count of items
 * @id dhx.DataStore.dataCount
 * @class dhx.DataStore
 * @method dataCount
 * @memberOf dhx.DataStore
 * @example 
 */
 dhx.DataStore.dataCount = function() {};
/**
 * iterates through collection
 * @id dhx.DataStore.each
 * @class dhx.DataStore
 * @method each
 * @memberOf dhx.DataStore
 * @param {String} method each(method,master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.DataStore.each = function(method,master) {};
/**
 * checks if the item with such ID exists
 * @id dhx.DataStore.exists
 * @class dhx.DataStore
 * @method exists
 * @memberOf dhx.DataStore
 * @param {String} id exists(id)
 * @example 
 */
 dhx.DataStore.exists = function(id) {};
/**
 * filters data
 * @id dhx.DataStore.filter
 * @class dhx.DataStore
 * @method filter
 * @memberOf dhx.DataStore
 * @param {String} text filter(text,value,preserve)
 * @param {String} value Type: Method
 * @param {String} preserve File: core/datastore.js
 * @example //filter all with 'abc' in 'text' property
 * list.filter('#text#',"abc")
 * �
 * //same with filtering function
 * list.filter(function(obj){
 * 	return obj.text.toString().indexOf("abc") != -1;
 * });
 */
 dhx.DataStore.filter = function(text,value,preserve) {};
/**
 * gets the ID of the first item
 * @id dhx.DataStore.first
 * @class dhx.DataStore
 * @method first
 * @memberOf dhx.DataStore
 * @example 
 */
 dhx.DataStore.first = function() {};
/**
 * converts the range of indexes to array of all IDs between them
 * @id dhx.DataStore.getIndexRange
 * @class dhx.DataStore
 * @method getIndexRange
 * @memberOf dhx.DataStore
 * @param {String} from getIndexRange(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.DataStore.getIndexRange = function(from,to) {};
/**
 * converts range IDs to array of all IDs between them
 * @id dhx.DataStore.getRange
 * @class dhx.DataStore
 * @method getRange
 * @memberOf dhx.DataStore
 * @param {String} from getRange(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.DataStore.getRange = function(from,to) {};
/**
 * gets id of data object
 * @id dhx.DataStore.id
 * @class dhx.DataStore
 * @method id
 * @memberOf dhx.DataStore
 * @param {String} data id(data)
 * @example 
 */
 dhx.DataStore.id = function(data) {};
/**
 * gets the id of an item with taken index
 * @id dhx.DataStore.idByIndex
 * @class dhx.DataStore
 * @method idByIndex
 * @memberOf dhx.DataStore
 * @param {Number} index idByIndex(index)
 * @example 
 */
 dhx.DataStore.idByIndex = function(index) {};
/**
 * the index of the item in question
 * @id dhx.DataStore.indexById
 * @class dhx.DataStore
 * @method indexById
 * @memberOf dhx.DataStore
 * @param {Number} id indexById(id)
 * @example 
 */
 dhx.DataStore.indexById = function(id) {};
/**
 * gets the object of a data item
 * @id dhx.DataStore.item
 * @class dhx.DataStore
 * @method item
 * @memberOf dhx.DataStore
 * @param {String} id item(id)
 * @example 
 */
 dhx.DataStore.item = function(id) {};
/**
 * gets the id of the last item
 * @id dhx.DataStore.last
 * @class dhx.DataStore
 * @method last
 * @memberOf dhx.DataStore
 * @example 
 */
 dhx.DataStore.last = function() {};
/**
 * moves an item from one position to another
 * @id dhx.DataStore.move
 * @class dhx.DataStore
 * @method move
 * @memberOf dhx.DataStore
 * @param {Number} sindex move(sindex,tindex)
 * @param {String} tindex Type: Method
 * @example 
 */
 dhx.DataStore.move = function(sindex,tindex) {};
/**
 * gets ID of the next element which is positioned in defined step
 * @id dhx.DataStore.next
 * @class dhx.DataStore
 * @method next
 * @memberOf dhx.DataStore
 * @param {String} id next(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.DataStore.next = function(id,step) {};
/**
 * gets ID of the previous element which is positioned in defined step
 * @id dhx.DataStore.previous
 * @class dhx.DataStore
 * @method previous
 * @memberOf dhx.DataStore
 * @param {String} id previous(id,step)
 * @param {String} step Type: Method
 * @example 
 */
 dhx.DataStore.previous = function(id,step) {};
/**
 * assigns methods (and events) of DataStore to an object
 * @id dhx.DataStore.provideApi
 * @class dhx.DataStore
 * @method provideApi
 * @memberOf dhx.DataStore
 * @param {String} target provideApi(target,eventable)
 * @param {String} eventable Type: Method
 * @example 
 */
 dhx.DataStore.provideApi = function(target,eventable) {};
/**
 * repaint the whole view or a certain item
 * @id dhx.DataStore.refresh
 * @class dhx.DataStore
 * @method refresh
 * @memberOf dhx.DataStore
 * @param {String} id refresh(id)
 * @example 
 */
 dhx.DataStore.refresh = function(id) {};
/**
 * removes element from datastore
 * @id dhx.DataStore.remove
 * @class dhx.DataStore
 * @method remove
 * @memberOf dhx.DataStore
 * @param {String} id remove(id)
 * @example 
 */
 dhx.DataStore.remove = function(id) {};
/**
 * sets hash of default values for properties
 * @id dhx.DataStore.scheme
 * @class dhx.DataStore
 * @method scheme
 * @memberOf dhx.DataStore
 * @param {String} config scheme(config)
 * @example $$('list').data.scheme({
 * 		name:"unknown", 
 * 		sex:"male",
 * 		age:"30"
 * });
 * �
 * $$('list').add({
 * 		id:1,
 * 		name:"Alex"
 * })
 * //will add a record:
 * //name:Alex,
 * //sex:male,
 * //age:30
 */
 dhx.DataStore.scheme = function(config) {};
/**
 * serializes data to a json object
 * @id dhx.DataStore.serialize
 * @class dhx.DataStore
 * @method serialize
 * @memberOf dhx.DataStore
 * @example 
 */
 dhx.DataStore.serialize = function() {};
/**
 * defines type of used data driver
 * @id dhx.DataStore.setDriver
 * @class dhx.DataStore
 * @method setDriver
 * @memberOf dhx.DataStore
 * @param {String} type setDriver(type)
 * @example 
 */
 dhx.DataStore.setDriver = function(type) {};
/**
 * code that you pass here as the parameter will not be affected by &#039;onStoreUpdated&#039; event handler
 * @id dhx.DataStore.silent
 * @class dhx.DataStore
 * @method silent
 * @memberOf dhx.DataStore
 * @param {String} code silent(code, master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.DataStore.silent = function(code, master) {};
/**
 * sorts datastore
 * @id dhx.DataStore.sort
 * @class dhx.DataStore
 * @method sort
 * @memberOf dhx.DataStore
 * @param {String} by sort(by, dir, as)
 * @param {String} dir Type: Method
 * @param {String} as File: core/datastore.js
 * @example 
 */
 dhx.DataStore.sort = function(by, dir, as) {};
/**
 * allows to sync two copy all, or part of data from one DataCollection to another
 * @id dhx.DataStore.sync
 * @class dhx.DataStore
 * @method sync
 * @memberOf dhx.DataStore
 * @param {String} source sync(source, filter, silent)
 * @param {String} filter Type: Method
 * @param {String} silent File: core/datastore.js
 * @example 
 */
 dhx.DataStore.sync = function(source, filter, silent) {};
/**
 * sets properties of the data item
 * @id dhx.DataStore.update
 * @class dhx.DataStore
 * @method update
 * @memberOf dhx.DataStore
 * @param {String} id update(id,data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.DataStore.update = function(id,data) {};


/**
*
* dhx.DataValue object class.
* @id dhx.DataValue
* @class dhx.DataValue
* @constructor
* @alias dhx.DataValue.prototype

 * @return {dhx.DataValue}
 */


dhx.DataValue.config = {

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.DataValue.config.on
 * @type undefined
 * @property
 */
on: ''
};
		

/**
 * attaches custom handler to inner event
 * @id dhx.DataValue.attachEvent
 * @class dhx.DataValue
 * @method attachEvent
 * @memberOf dhx.DataValue
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.DataValue.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.DataValue.bind
 * @class dhx.DataValue
 * @method bind
 * @memberOf dhx.DataValue
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.DataValue.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.DataValue.blockEvent
 * @class dhx.DataValue
 * @method blockEvent
 * @memberOf dhx.DataValue
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.DataValue.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.DataValue.callEvent
 * @class dhx.DataValue
 * @method callEvent
 * @memberOf dhx.DataValue
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.DataValue.callEvent = function(type,params) {};
/**
 * detaches custom code from handler
 * @id dhx.DataValue.detachEvent
 * @class dhx.DataValue
 * @method detachEvent
 * @memberOf dhx.DataValue
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.DataValue.detachEvent = function(id) {};
/**
 * returns current value of control
 * @id dhx.DataValue.getValue
 * @class dhx.DataValue
 * @method getValue
 * @memberOf dhx.DataValue
 * @example 
 */
 dhx.DataValue.getValue = function() {};
/**
 * checks whether a component has an event
 * @id dhx.DataValue.hasEvent
 * @class dhx.DataValue
 * @method hasEvent
 * @memberOf dhx.DataValue
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.DataValue.hasEvent = function(type) {};
/**
 * returns true if current view is visible
 * @id dhx.DataValue.isVisible
 * @class dhx.DataValue
 * @method isVisible
 * @memberOf dhx.DataValue
 * @example 
 */
 dhx.DataValue.isVisible = function() {};
/**
 * routes events from one object to another
 * @id dhx.DataValue.mapEvent
 * @class dhx.DataValue
 * @method mapEvent
 * @memberOf dhx.DataValue
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.DataValue.mapEvent = function(map) {};
/**
 * repaints a control
 * @id dhx.DataValue.refresh
 * @class dhx.DataValue
 * @method refresh
 * @memberOf dhx.DataValue
 * @example 
 */
 dhx.DataValue.refresh = function() {};
/**
 * sets a new value of control
 * @id dhx.DataValue.setValue
 * @class dhx.DataValue
 * @method setValue
 * @memberOf dhx.DataValue
 * @param {String} value setValue(value)
 * @example 
 */
 dhx.DataValue.setValue = function(value) {};
/**
 * enables event triggering
 * @id dhx.DataValue.unblockEvent
 * @class dhx.DataValue
 * @method unblockEvent
 * @memberOf dhx.DataValue
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.DataValue.unblockEvent = function() {};


/**
*
* dhx.Date object class.
* @id dhx.Date
* @class dhx.Date
* @constructor
* @alias dhx.Date.prototype

 * @return {dhx.Date}
 */


dhx.Date.config = {

};
		

/**
 * adds the number of date units to date
 * @id dhx.Date.add
 * @class dhx.Date
 * @method add
 * @memberOf dhx.Date
 * @param {String} date add(date,inc,mode)
 * @param {String} inc Type: Method
 * @param {String} mode File: core/date.js
 * @example 
 */
 dhx.Date.add = function(date,inc,mode) {};
/**
 * creates date copy
 * @id dhx.Date.copy
 * @class dhx.Date
 * @method copy
 * @memberOf dhx.Date
 * @param {String} date copy(date)
 * @example 
 */
 dhx.Date.copy = function(date) {};
/**
 * gets the date part of date object
 * @id dhx.Date.datePart
 * @class dhx.Date
 * @method datePart
 * @memberOf dhx.Date
 * @param {String} date datePart(date)
 * @example 
 */
 dhx.Date.datePart = function(date) {};
/**
 * converts date object to a string in a certain format
 * @id dhx.Date.dateToStr
 * @class dhx.Date
 * @method dateToStr
 * @memberOf dhx.Date
 * @param {String} format dateToStr(format,utc)
 * @param {String} utc Type: Method
 * @example 
 */
 dhx.Date.dateToStr = function(format,utc) {};
/**
 * gets day start
 * @id dhx.Date.dayStart
 * @class dhx.Date
 * @method dayStart
 * @memberOf dhx.Date
 * @param {String} date dayStart(date)
 * @example 
 */
 dhx.Date.dayStart = function(date) {};
/**
 * 
 * @id dhx.Date.getISOWeek
 * @class dhx.Date
 * @method getISOWeek
 * @memberOf dhx.Date
 * @param {String} ndate getISOWeek(ndate)
 * @example 
 */
 dhx.Date.getISOWeek = function(ndate) {};
/**
 * 
 * @id dhx.Date.getUTCISOWeek
 * @class dhx.Date
 * @method getUTCISOWeek
 * @memberOf dhx.Date
 * @param {String} ndate getUTCISOWeek(ndate)
 * @example 
 */
 dhx.Date.getUTCISOWeek = function(ndate) {};
/**
 * gets the start of the month
 * @id dhx.Date.monthStart
 * @class dhx.Date
 * @method monthStart
 * @memberOf dhx.Date
 * @param {String} date monthStart(date)
 * @example 
 */
 dhx.Date.monthStart = function(date) {};
/**
 * convert string to date object
 * @id dhx.Date.strToDate
 * @class dhx.Date
 * @method strToDate
 * @memberOf dhx.Date
 * @param {String} format strToDate(format,utc)
 * @param {String} utc Type: Method
 * @example 
 */
 dhx.Date.strToDate = function(format,utc) {};
/**
 * gets time part of a date in seconds
 * @id dhx.Date.timePart
 * @class dhx.Date
 * @method timePart
 * @memberOf dhx.Date
 * @param {String} date timePart(date)
 * @example 
 */
 dhx.Date.timePart = function(date) {};
/**
 * gets the week start
 * @id dhx.Date.weekStart
 * @class dhx.Date
 * @method weekStart
 * @memberOf dhx.Date
 * @param {String} date weekStart(date)
 * @example 
 */
 dhx.Date.weekStart = function(date) {};
/**
 * gets the year start
 * @id dhx.Date.yearStart
 * @class dhx.Date
 * @method yearStart
 * @memberOf dhx.Date
 * @param {String} date yearStart(date)
 * @example 
 */
 dhx.Date.yearStart = function(date) {};


/**
*
* dhx.Destruction object class.
* @id dhx.Destruction
* @class dhx.Destruction
* @constructor
* @alias dhx.Destruction.prototype

 * @return {dhx.Destruction}
 */


dhx.Destruction.config = {

};
		

/**
 * destructs an object
 * @id dhx.Destruction.destructor
 * @class dhx.Destruction
 * @method destructor
 * @memberOf dhx.Destruction
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.Destruction.destructor = function() {};


/**
*
* dhx.DragControl object class.
* @id dhx.DragControl
* @class dhx.DragControl
* @constructor
* @alias dhx.DragControl.prototype

 * @return {dhx.DragControl}
 */


dhx.DragControl.config = {

/**
 * enables or disables dnd
 * @id dhx.DragControl.config.drag
 * @type boolean
 * @property
 */
drag: ''
};
		

/**
 * registers drag area
 * @id dhx.DragControl.addDrag
 * @class dhx.DragControl
 * @method addDrag
 * @memberOf dhx.DragControl
 * @param {String} node addDrag(node,ctrl)
 * @param {String} ctrl Type: Method
 * @example 
 */
 dhx.DragControl.addDrag = function(node,ctrl) {};
/**
 * registers drop area
 * @id dhx.DragControl.addDrop
 * @class dhx.DragControl
 * @method addDrop
 * @memberOf dhx.DragControl
 * @param {String} node addDrop(node,ctrl,master_mode)
 * @param {String} ctrl Type: Method
 * @param {String} master_mode File: core/dnd.js
 * @example 
 */
 dhx.DragControl.addDrop = function(node,ctrl,master_mode) {};
/**
 * called when drag-n-drop is initiated, creates drag representation
 * @id dhx.DragControl.createDrag
 * @class dhx.DragControl
 * @method createDrag
 * @memberOf dhx.DragControl
 * @param {String} e createDrag(e)
 * @example 
 */
 dhx.DragControl.createDrag = function(e) {};
/**
 * called after drag-n-drop, removes all traces and html elements
 * @id dhx.DragControl.destroyDrag
 * @class dhx.DragControl
 * @method destroyDrag
 * @memberOf dhx.DragControl
 * @example 
 */
 dhx.DragControl.destroyDrag = function() {};
/**
 * gets drag-n-drop context object
 * @id dhx.DragControl.getContext
 * @class dhx.DragControl
 * @method getContext
 * @memberOf dhx.DragControl
 * @example 
 */
 dhx.DragControl.getContext = function() {};
/**
 * component object or hash code of the control methods
 * @id dhx.DragControl.getMaster
 * @class dhx.DragControl
 * @method getMaster
 * @memberOf dhx.DragControl
 * @param {String} t getMaster(t)
 * @example 
 */
 dhx.DragControl.getMaster = function(t) {};
/**
 * gets dragged node
 * @id dhx.DragControl.getNode
 * @class dhx.DragControl
 * @method getNode
 * @memberOf dhx.DragControl
 * @example 
 */
 dhx.DragControl.getNode = function() {};
/**
 * called when drag-n-drop was started and defines dragging behavior
 * @id dhx.DragControl.onDrag
 * @class dhx.DragControl
 * @method onDrag
 * @memberOf dhx.DragControl
 * @param {String} s onDrag(s,e)
 * @param {String} e Type: Method
 * @example 
 */
 dhx.DragControl.onDrag = function(s,e) {};
/**
 * called when mouse was moved in drop area and defines marker behavior within the drop area
 * @id dhx.DragControl.onDragIn
 * @class dhx.DragControl
 * @method onDragIn
 * @memberOf dhx.DragControl
 * @param {String} s onDragIn(s,t,e)
 * @param {String} t Type: Method
 * @param {String} e File: core/dnd.js
 * @example 
 */
 dhx.DragControl.onDragIn = function(s,t,e) {};
/**
 * called when mouse was moved out drop area and defines marker behavior out of the drop area
 * @id dhx.DragControl.onDragOut
 * @class dhx.DragControl
 * @method onDragOut
 * @memberOf dhx.DragControl
 * @param {String} s onDragOut(s,t,n,e)
 * @param {String} t Type: Method
 * @param {String} n File: core/dnd.js
 * @param {String} e Implemented in: DragControl
 * @example 
 */
 dhx.DragControl.onDragOut = function(s,t,n,e) {};
/**
 * called when mouse was released over drop area and defines dropping behavior
 * @id dhx.DragControl.onDrop
 * @class dhx.DragControl
 * @method onDrop
 * @memberOf dhx.DragControl
 * @param {String} s onDrop(s,t,d,e)
 * @param {String} t Type: Method
 * @param {String} d File: core/dnd.js
 * @param {String} e Implemented in: DragControl
 * @example 
 */
 dhx.DragControl.onDrop = function(s,t,d,e) {};
/**
 * sets drag-n-drop active state for drag-n-drop context object
 * @id dhx.DragControl.sendSignal
 * @class dhx.DragControl
 * @method sendSignal
 * @memberOf dhx.DragControl
 * @param {String} signal sendSignal(signal)
 * @example 
 */
 dhx.DragControl.sendSignal = function(signal) {};


/**
*
* dhx.DragItem object class.
* @id dhx.DragItem
* @class dhx.DragItem
* @constructor
* @alias dhx.DragItem.prototype

 * @return {dhx.DragItem}
 */


dhx.DragItem.config = {

};
		



/**
*
* dhx.EditAbility object class.
* @id dhx.EditAbility
* @class dhx.EditAbility
* @constructor
* @alias dhx.EditAbility.prototype

 * @return {dhx.EditAbility}
 */


dhx.EditAbility.config = {

/**
 * allows or denies edit operations
 * @id dhx.EditAbility.config.edit
 * @type boolean
 * @property
 */
edit: ''
};
		

/**
 * switches item to the edit state
 * @id dhx.EditAbility.edit
 * @class dhx.EditAbility
 * @method edit
 * @memberOf dhx.EditAbility
 * @param {String} id edit(id)
 * @example 
 */
 dhx.EditAbility.edit = function(id) {};
/**
 * returns id of item in edit state, or null if none
 * @id dhx.EditAbility.isEdit
 * @class dhx.EditAbility
 * @method isEdit
 * @memberOf dhx.EditAbility
 * @example 
 */
 dhx.EditAbility.isEdit = function() {};
/**
 * switches any item in edit state, back to normal
 * @id dhx.EditAbility.stopEdit
 * @class dhx.EditAbility
 * @method stopEdit
 * @memberOf dhx.EditAbility
 * @param {String} mode stopEdit(mode, if_not_id)
 * @param {String} if_not_id Type: Method
 * @example 
 */
 dhx.EditAbility.stopEdit = function(mode, if_not_id) {};


/**
*
* dhx.EventSystem object class.
* @id dhx.EventSystem
* @class dhx.EventSystem
* @constructor
* @alias dhx.EventSystem.prototype

 * @return {dhx.EventSystem}
 */


dhx.EventSystem.config = {

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.EventSystem.config.on
 * @type undefined
 * @property
 */
on: ''
};
		

/**
 * attaches custom handler to inner event
 * @id dhx.EventSystem.attachEvent
 * @class dhx.EventSystem
 * @method attachEvent
 * @memberOf dhx.EventSystem
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.EventSystem.attachEvent = function(type,functor,id) {};
/**
 * blocks event triggering
 * @id dhx.EventSystem.blockEvent
 * @class dhx.EventSystem
 * @method blockEvent
 * @memberOf dhx.EventSystem
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.EventSystem.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.EventSystem.callEvent
 * @class dhx.EventSystem
 * @method callEvent
 * @memberOf dhx.EventSystem
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.EventSystem.callEvent = function(type,params) {};
/**
 * detaches custom code from handler
 * @id dhx.EventSystem.detachEvent
 * @class dhx.EventSystem
 * @method detachEvent
 * @memberOf dhx.EventSystem
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.EventSystem.detachEvent = function(id) {};
/**
 * checks whether a component has an event
 * @id dhx.EventSystem.hasEvent
 * @class dhx.EventSystem
 * @method hasEvent
 * @memberOf dhx.EventSystem
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.EventSystem.hasEvent = function(type) {};
/**
 * routes events from one object to another
 * @id dhx.EventSystem.mapEvent
 * @class dhx.EventSystem
 * @method mapEvent
 * @memberOf dhx.EventSystem
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.EventSystem.mapEvent = function(map) {};
/**
 * enables event triggering
 * @id dhx.EventSystem.unblockEvent
 * @class dhx.EventSystem
 * @method unblockEvent
 * @memberOf dhx.EventSystem
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.EventSystem.unblockEvent = function() {};


/**
*
* dhx.GlobalStore object class.
* @id dhx.GlobalStore
* @class dhx.GlobalStore
* @constructor
* @alias dhx.GlobalStore.prototype

 * @return {dhx.GlobalStore}
 */


dhx.GlobalStore.config = {

};
		



/**
*
* dhx.Group object class.
* @id dhx.Group
* @class dhx.Group
* @constructor
* @alias dhx.Group.prototype

 * @return {dhx.Group}
 */


dhx.Group.config = {

/**
 * an object with settings for initial grouping
 * @id dhx.Group.config.group
 * @type object
 * @property
 */
group: '',


/**
 * defines sorting settings
 * @id dhx.Group.config.sort
 * @type object
 * @property
 */
sort: ''
};
		

/**
 * groups data
 * @id dhx.Group.group
 * @class dhx.Group
 * @method group
 * @memberOf dhx.Group
 * @param {String} config group(config,mode)
 * @param {String} mode Type: Method
 * @example 
 */
 dhx.Group.group = function(config,mode) {};
/**
 * ungroups data
 * @id dhx.Group.ungroup
 * @class dhx.Group
 * @method ungroup
 * @memberOf dhx.Group
 * @param {String} mode ungroup(mode)
 * @example 
 */
 dhx.Group.ungroup = function(mode) {};


/**
*
* dhx.GroupStore object class.
* @id dhx.GroupStore
* @class dhx.GroupStore
* @constructor
* @alias dhx.GroupStore.prototype

 * @return {dhx.GroupStore}
 */


dhx.GroupStore.config = {

};
		

/**
 * groups data
 * @id dhx.GroupStore.group
 * @class dhx.GroupStore
 * @method group
 * @memberOf dhx.GroupStore
 * @param {String} stats group(stats)
 * @example 
 */
 dhx.GroupStore.group = function(stats) {};
/**
 * gets the maximum value of a property
 * @id dhx.GroupStore.max
 * @class dhx.GroupStore
 * @method max
 * @memberOf dhx.GroupStore
 * @param {String} property max(property, data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.GroupStore.max = function(property, data) {};
/**
 * gets the minimum value of a property
 * @id dhx.GroupStore.min
 * @class dhx.GroupStore
 * @method min
 * @memberOf dhx.GroupStore
 * @param {String} property min(property, data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.GroupStore.min = function(property, data) {};
/**
 * gets the sum of property values
 * @id dhx.GroupStore.sum
 * @class dhx.GroupStore
 * @method sum
 * @memberOf dhx.GroupStore
 * @param {String} property sum(property, data)
 * @param {String} data Type: Method
 * @example 
 */
 dhx.GroupStore.sum = function(property, data) {};
/**
 * ungroups data
 * @id dhx.GroupStore.ungroup
 * @class dhx.GroupStore
 * @method ungroup
 * @memberOf dhx.GroupStore
 * @example 
 */
 dhx.GroupStore.ungroup = function() {};


/**
*
* dhx.IdSpace object class.
* @id dhx.IdSpace
* @class dhx.IdSpace
* @constructor
* @alias dhx.IdSpace.prototype

 * @return {dhx.IdSpace}
 */


dhx.IdSpace.config = {

};
		

/**
 * returns inner unique id of item
 * @id dhx.IdSpace.innerId
 * @class dhx.IdSpace
 * @method innerId
 * @memberOf dhx.IdSpace
 * @param {String} id innerId(id)
 * @example dhx.ui({
 *   view:"window",
 *   id:"win1",
 *   body:"
 *         view:"list", 
 *         id:"mylist",
 *         ...",
 *   ...
 * });
 * �
 * dhx.ui({
 *   view:"window",
 *   id:"win2",
 *   body:"
 *         view:"list", 
 *         id:"mylist",
 *         ...",
 *   ...
 * });
 */
 dhx.IdSpace.innerId = function(id) {};


/**
*
* dhx.KeyEvents object class.
* @id dhx.KeyEvents
* @class dhx.KeyEvents
* @constructor
* @alias dhx.KeyEvents.prototype

 * @return {dhx.KeyEvents}
 */


dhx.KeyEvents.config = {

};
		



/**
*
* dhx.LinkedPanel object class.
* @id dhx.LinkedPanel
* @class dhx.LinkedPanel
* @constructor
* @alias dhx.LinkedPanel.prototype

 * @return {dhx.LinkedPanel}
 */


dhx.LinkedPanel.config = {

};
		



/**
*
* dhx.Modality object class.
* @id dhx.Modality
* @class dhx.Modality
* @constructor
* @alias dhx.Modality.prototype

 * @return {dhx.Modality}
 */


dhx.Modality.config = {

/**
 * switches window modality
 * @id dhx.Modality.config.modal
 * @type boolean
 * @property
 */
modal: ''
};
		



/**
*
* dhx.MouseEvents object class.
* @id dhx.MouseEvents
* @class dhx.MouseEvents
* @constructor
* @alias dhx.MouseEvents.prototype

 * @return {dhx.MouseEvents}
 */


dhx.MouseEvents.config = {

};
		



/**
*
* dhx.Movable object class.
* @id dhx.Movable
* @class dhx.Movable
* @constructor
* @alias dhx.Movable.prototype

 * @return {dhx.Movable}
 */


dhx.Movable.config = {

/**
 * makes view movable
 * @id dhx.Movable.config.move
 * @type boolean
 * @property
 */
move: ''
};
		



/**
*
* dhx.Number object class.
* @id dhx.Number
* @class dhx.Number
* @constructor
* @alias dhx.Number.prototype

 * @return {dhx.Number}
 */


dhx.Number.config = {

};
		

/**
 * some unknown method
 * @id dhx.Number.format
 * @class dhx.Number
 * @method format
 * @memberOf dhx.Number
 * @param {String} value format(value, config)
 * @param {String} config Type: Method
 * @example 
 */
 dhx.Number.format = function(value, config) {};
/**
 * some unknown method
 * @id dhx.Number.numToStr
 * @class dhx.Number
 * @method numToStr
 * @memberOf dhx.Number
 * @param {String} config numToStr(config)
 * @example 
 */
 dhx.Number.numToStr = function(config) {};


/**
*
* dhx.PowerArray object class.
* @id dhx.PowerArray
* @class dhx.PowerArray
* @constructor
* @alias dhx.PowerArray.prototype

 * @return {dhx.PowerArray}
 */


dhx.PowerArray.config = {

};
		

/**
 * executes a method for each element of an array
 * @id dhx.PowerArray.each
 * @class dhx.PowerArray
 * @method each
 * @memberOf dhx.PowerArray
 * @param {String} functor each(functor,master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.PowerArray.each = function(functor,master) {};
/**
 * gets the index of an element in an array
 * @id dhx.PowerArray.find
 * @class dhx.PowerArray
 * @method find
 * @memberOf dhx.PowerArray
 * @param {String} data find(data)
 * @example 
 */
 dhx.PowerArray.find = function(data) {};
/**
 * adds an element in a collection at a specific position
 * @id dhx.PowerArray.insertAt
 * @class dhx.PowerArray
 * @method insertAt
 * @memberOf dhx.PowerArray
 * @param {String} data insertAt(data,pos)
 * @param {String} pos Type: Method
 * @example 
 */
 dhx.PowerArray.insertAt = function(data,pos) {};
/**
 * creates a new array from data source, by using results of functor
 * @id dhx.PowerArray.map
 * @class dhx.PowerArray
 * @method map
 * @memberOf dhx.PowerArray
 * @param {String} functor map(functor,master)
 * @param {String} master Type: Method
 * @example 
 */
 dhx.PowerArray.map = function(functor,master) {};
/**
 * removes an element from an array
 * @id dhx.PowerArray.remove
 * @class dhx.PowerArray
 * @method remove
 * @memberOf dhx.PowerArray
 * @param {String} value remove(value)
 * @example 
 */
 dhx.PowerArray.remove = function(value) {};
/**
 * removes one or more elements from a specified position
 * @id dhx.PowerArray.removeAt
 * @class dhx.PowerArray
 * @method removeAt
 * @memberOf dhx.PowerArray
 * @param {String} pos removeAt(pos,len)
 * @param {String} len Type: Method
 * @example 
 */
 dhx.PowerArray.removeAt = function(pos,len) {};


/**
*
* dhx.RecordBind object class.
* @id dhx.RecordBind
* @class dhx.RecordBind
* @constructor
* @alias dhx.RecordBind.prototype

 * @return {dhx.RecordBind}
 */


dhx.RecordBind.config = {

};
		



/**
*
* dhx.RenderStack object class.
* @id dhx.RenderStack
* @class dhx.RenderStack
* @constructor
* @alias dhx.RenderStack.prototype

 * @return {dhx.RenderStack}
 */


dhx.RenderStack.config = {

/**
 * item template
 * @id dhx.RenderStack.config.template
 * @type any
 * @property
 */
template: '',


/**
 * object that specifies items list presentation
 * @id dhx.RenderStack.config.type
 * @type object
 * @property
 */
type: ''
};
		

/**
 * applies new type settings
 * @id dhx.RenderStack.customize
 * @class dhx.RenderStack
 * @method customize
 * @memberOf dhx.RenderStack
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.RenderStack.customize = function(obj) {};
/**
 * 
 * @id dhx.RenderStack.locate
 * @class dhx.RenderStack
 * @method locate
 * @memberOf dhx.RenderStack
 * @param {String} e locate(e)
 * @example 
 */
 dhx.RenderStack.locate = function(e) {};
/**
 * renders a current state of an item or the whole component
 * @id dhx.RenderStack.render
 * @class dhx.RenderStack
 * @method render
 * @memberOf dhx.RenderStack
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/render.js
 * @example 
 */
 dhx.RenderStack.render = function(id,data,type) {};
/**
 * shows the specified item
 * @id dhx.RenderStack.showItem
 * @class dhx.RenderStack
 * @method showItem
 * @memberOf dhx.RenderStack
 * @param {String} id showItem(id)
 * @example 
 */
 dhx.RenderStack.showItem = function(id) {};


/**
*
* dhx.RenderType object class.
* @id dhx.RenderType
* @class dhx.RenderType
* @constructor
* @alias dhx.RenderType.prototype

 * @return {dhx.RenderType}
 */


dhx.RenderType.config = {

/**
 * type name or an object that defines Type properties
 * @id dhx.RenderType.config.type
 * @type string, object
 * @property
 */
type: ''
};
		



/**
*
* dhx.Scrollable object class.
* @id dhx.Scrollable
* @class dhx.Scrollable
* @constructor
* @alias dhx.Scrollable.prototype

 * @return {dhx.Scrollable}
 */


dhx.Scrollable.config = {

/**
 * enables/disables scroll
 * @id dhx.Scrollable.config.scroll
 * @type boolean
 * @property
 */
scroll: ''
};
		

/**
 * some unknown method
 * @id dhx.Scrollable.scrollState
 * @class dhx.Scrollable
 * @method scrollState
 * @memberOf dhx.Scrollable
 * @example 
 */
 dhx.Scrollable.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.Scrollable.scrollTo
 * @class dhx.Scrollable
 * @method scrollTo
 * @memberOf dhx.Scrollable
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.Scrollable.scrollTo = function(x,y) {};


/**
*
* dhx.SelectionModel object class.
* @id dhx.SelectionModel
* @class dhx.SelectionModel
* @constructor
* @alias dhx.SelectionModel.prototype

 * @return {dhx.SelectionModel}
 */


dhx.SelectionModel.config = {

};
		

/**
 * returns ID of selected item(s)
 * @id dhx.SelectionModel.getSelected
 * @class dhx.SelectionModel
 * @method getSelected
 * @memberOf dhx.SelectionModel
 * @param {String} as_array getSelected(as_array)
 * @example //single select mode
 * var id = list.getSelected(); // id = someid
 * �
 * //multiselect mode
 * var id = list.getSelected(); // id = [someid1, someid2, someid3]
 */
 dhx.SelectionModel.getSelected = function(as_array) {};
/**
 * checks if item is selected or not
 * @id dhx.SelectionModel.isSelected
 * @class dhx.SelectionModel
 * @method isSelected
 * @memberOf dhx.SelectionModel
 * @param {String} id isSelected(id)
 * @example 
 */
 dhx.SelectionModel.isSelected = function(id) {};
/**
 * selects item
 * @id dhx.SelectionModel.select
 * @class dhx.SelectionModel
 * @method select
 * @memberOf dhx.SelectionModel
 * @param {String} id select(id,non_modal,continue_old)
 * @param {String} non_modal Type: Method
 * @param {String} continue_old File: core/selection.js
 * @example 
 */
 dhx.SelectionModel.select = function(id,non_modal,continue_old) {};
/**
 * selects all items
 * @id dhx.SelectionModel.selectAll
 * @class dhx.SelectionModel
 * @method selectAll
 * @memberOf dhx.SelectionModel
 * @param {String} from selectAll(from,to)
 * @param {String} to Type: Method
 * @example 
 */
 dhx.SelectionModel.selectAll = function(from,to) {};
/**
 * unselects item
 * @id dhx.SelectionModel.unselect
 * @class dhx.SelectionModel
 * @method unselect
 * @memberOf dhx.SelectionModel
 * @param {String} id unselect(id)
 * @example 
 */
 dhx.SelectionModel.unselect = function(id) {};
/**
 * unselects all items
 * @id dhx.SelectionModel.unselectAll
 * @class dhx.SelectionModel
 * @method unselectAll
 * @memberOf dhx.SelectionModel
 * @example 
 */
 dhx.SelectionModel.unselectAll = function() {};


/**
*
* dhx.Settings object class.
* @id dhx.Settings
* @class dhx.Settings
* @constructor
* @alias dhx.Settings.prototype

 * @return {dhx.Settings}
 */


dhx.Settings.config = {

};
		

/**
 * sets configuration property or a hash of properties
 * @id dhx.Settings.define
 * @class dhx.Settings
 * @method define
 * @memberOf dhx.Settings
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.Settings.define = function(property, value) {};


/**
*
* dhx.SingleRender object class.
* @id dhx.SingleRender
* @class dhx.SingleRender
* @constructor
* @alias dhx.SingleRender.prototype

 * @return {dhx.SingleRender}
 */


dhx.SingleRender.config = {

/**
 * item template
 * @id dhx.SingleRender.config.template
 * @type template
 * @property
 */
template: ''
};
		

/**
 * applies new type settings
 * @id dhx.SingleRender.customize
 * @class dhx.SingleRender
 * @method customize
 * @memberOf dhx.SingleRender
 * @param {Object} obj customize(obj)
 * @example 
 */
 dhx.SingleRender.customize = function(obj) {};
/**
 * renders a single item
 * @id dhx.SingleRender.render
 * @class dhx.SingleRender
 * @method render
 * @memberOf dhx.SingleRender
 * @example 
 */
 dhx.SingleRender.render = function() {};


/**
*
* dhx.Template object class.
* @id dhx.Template
* @class dhx.Template
* @constructor
* @alias dhx.Template.prototype

 * @return {dhx.Template}
 */


dhx.Template.config = {

/**
 * html container or its id where view will be initialized
 * @id dhx.Template.config.container
 * @type object,string
 * @property
 */
container: '',


/**
 * the id or node, whose content will be moved to the view
 * @id dhx.Template.config.content
 * @type any
 * @property
 */
content: '',


/**
 * css class for a view container
 * @id dhx.Template.config.css
 * @type string
 * @property
 */
css: '',


/**
 * loaded data
 * @id dhx.Template.config.data
 * @type string,object
 * @property
 */
data: '',


/**
 * type of loaded data
 * @id dhx.Template.config.datatype
 * @type &#039;xml&#039;, &#039;json&#039;, &#039;jsarray&#039; or &#039;csv&#039;
 * @property
 */
datatype: '',


/**
 * defines the space width proportions (1 by default)
 * @id dhx.Template.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * height of view
 * @id dhx.Template.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * sets whether a view will be hidden initially
 * @id dhx.Template.config.hidden
 * @type boolean
 * @property
 */
hidden: '',


/**
 * view id
 * @id dhx.Template.config.id
 * @type string,dimension
 * @property
 */
id: '',


/**
 * unknown
 * @id dhx.Template.config.loading
 * @type unknown
 * @property
 */
loading: '',


/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.Template.config.on
 * @type undefined
 * @property
 */
on: '',


/**
 * enables/disables scroll
 * @id dhx.Template.config.scroll
 * @type boolean
 * @property
 */
scroll: '',


/**
 * path to external template that is loaded by Ajax
 * @id dhx.Template.config.src
 * @type string
 * @property
 */
src: '',


/**
 * item template
 * @id dhx.Template.config.template
 * @type template
 * @property
 */
template: '',


/**
 * data url
 * @id dhx.Template.config.url
 * @type string
 * @property
 */
url: '',


/**
 * defines whether the loading cover should be displayed while loading (actual in case of &#039;src&#039; parameter)
 * @id dhx.Template.config.waitMessage
 * @type boolean
 * @property
 */
waitMessage: '',


/**
 * width of view
 * @id dhx.Template.config.width
 * @type dimension
 * @property
 */
width: ''
};
		

/**
 * 
 * @id dhx.Template.adjust
 * @class dhx.Template
 * @method adjust
 * @memberOf dhx.Template
 * @example 
 */
 dhx.Template.adjust = function() {};
/**
 * attaches custom handler to inner event
 * @id dhx.Template.attachEvent
 * @class dhx.Template
 * @method attachEvent
 * @memberOf dhx.Template
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.Template.attachEvent = function(type,functor,id) {};
/**
 * binds components
 * @id dhx.Template.bind
 * @class dhx.Template
 * @method bind
 * @memberOf dhx.Template
 * @param {String} target bind(target, rule, format)
 * @param {String} rule Type: Method
 * @param {String} format File:
 * @example $$('mylist').bind('form1', function(list_data, form_data){
 * 	if (!form_data) return false;
 * 	return list_data.some_property == form_data.some_property;
 * });
 */
 dhx.Template.bind = function(target, rule, format) {};
/**
 * blocks event triggering
 * @id dhx.Template.blockEvent
 * @class dhx.Template
 * @method blockEvent
 * @memberOf dhx.Template
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.Template.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.Template.callEvent
 * @class dhx.Template
 * @method callEvent
 * @memberOf dhx.Template
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.Template.callEvent = function(type,params) {};
/**
 * sets configuration property or a hash of properties
 * @id dhx.Template.define
 * @class dhx.Template
 * @method define
 * @memberOf dhx.Template
 * @param {String} property define(property, value)
 * @param {String} value Type: Method
 * @example //redefine data url
 * $$('mylist').define("url", "new_data.xml");
 * �
 * //change label of button
 * $$('button1').define("label", "New value");
 * $$('button1').refresh;
 */
 dhx.Template.define = function(property, value) {};
/**
 * destructs an object
 * @id dhx.Template.destructor
 * @class dhx.Template
 * @method destructor
 * @memberOf dhx.Template
 * @example dhx.ui({
 * 	view:"form",
 * 	id:"myform",
 *         elements:[...]
 * });
 * �
 * ...
 * �
 * $$('myform').destructor();
 */
 dhx.Template.destructor = function() {};
/**
 * detaches custom code from handler
 * @id dhx.Template.detachEvent
 * @class dhx.Template
 * @method detachEvent
 * @memberOf dhx.Template
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.Template.detachEvent = function(id) {};
/**
 * returns main html container of view
 * @id dhx.Template.getNode
 * @class dhx.Template
 * @method getNode
 * @memberOf dhx.Template
 * @example 
 */
 dhx.Template.getNode = function() {};
/**
 * returns parent object of current view
 * @id dhx.Template.getParent
 * @class dhx.Template
 * @method getParent
 * @memberOf dhx.Template
 * @example 
 */
 dhx.Template.getParent = function() {};
/**
 * checks whether a component has an event
 * @id dhx.Template.hasEvent
 * @class dhx.Template
 * @method hasEvent
 * @memberOf dhx.Template
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.Template.hasEvent = function(type) {};
/**
 * hides view
 * @id dhx.Template.hide
 * @class dhx.Template
 * @method hide
 * @memberOf dhx.Template
 * @example $$('myform').hide();
 */
 dhx.Template.hide = function() {};
/**
 * returns true if current view is visible
 * @id dhx.Template.isVisible
 * @class dhx.Template
 * @method isVisible
 * @memberOf dhx.Template
 * @param {String} base_id isVisible(base_id, prev_id)
 * @param {String} prev_id Type: Method
 * @example $$('myform').isVisible();
 */
 dhx.Template.isVisible = function(base_id, prev_id) {};
/**
 * loads values from external datasource
 * @id dhx.Template.load
 * @class dhx.Template
 * @method load
 * @memberOf dhx.Template
 * @param {String} url load(url,call)
 * @param {String} call Type: Method
 * @example $$('component_id').load("some/path/data.json");
 */
 dhx.Template.load = function(url,call) {};
/**
 * routes events from one object to another
 * @id dhx.Template.mapEvent
 * @class dhx.Template
 * @method mapEvent
 * @memberOf dhx.Template
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.Template.mapEvent = function(map) {};
/**
 * addes data from a datasource
 * @id dhx.Template.parse
 * @class dhx.Template
 * @method parse
 * @memberOf dhx.Template
 * @param {String} data parse(data,type)
 * @param {String} type Type: Method
 * @example 
 */
 dhx.Template.parse = function(data,type) {};
/**
 * repaints the whole view or a certain a item
 * @id dhx.Template.refresh
 * @class dhx.Template
 * @method refresh
 * @memberOf dhx.Template
 * @example 
 */
 dhx.Template.refresh = function() {};
/**
 * renders a single item
 * @id dhx.Template.render
 * @class dhx.Template
 * @method render
 * @memberOf dhx.Template
 * @example 
 */
 dhx.Template.render = function() {};
/**
 * adjusts view to the new size
 * @id dhx.Template.resize
 * @class dhx.Template
 * @method resize
 * @memberOf dhx.Template
 * @param {String} force resize(force)
 * @example 
 */
 dhx.Template.resize = function(force) {};
/**
 * some unknown method
 * @id dhx.Template.scrollState
 * @class dhx.Template
 * @method scrollState
 * @memberOf dhx.Template
 * @example 
 */
 dhx.Template.scrollState = function() {};
/**
 * scrolls data container to a certain position
 * @id dhx.Template.scrollTo
 * @class dhx.Template
 * @method scrollTo
 * @memberOf dhx.Template
 * @param {String} x scrollTo(x,y)
 * @param {String} y Type: Method
 * @example 
 */
 dhx.Template.scrollTo = function(x,y) {};
/**
 * sets data hash
 * @id dhx.Template.setValues
 * @class dhx.Template
 * @method setValues
 * @memberOf dhx.Template
 * @param {Object} obj setValues(obj)
 * @example 
 */
 dhx.Template.setValues = function(obj) {};
/**
 * makes view visible
 * @id dhx.Template.show
 * @class dhx.Template
 * @method show
 * @memberOf dhx.Template
 * @param {String} animate_settings show(animate_settings)
 * @example $$('mygrid').show(); 
 * �
 * // just for mutliview
 * $$('multiview_id').show({type:"flip", subtype:"horizontal"});
 */
 dhx.Template.show = function(animate_settings) {};
/**
 * enables event triggering
 * @id dhx.Template.unblockEvent
 * @class dhx.Template
 * @method unblockEvent
 * @memberOf dhx.Template
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.Template.unblockEvent = function() {};


/**
*
* dhx.Touch object class.
* @id dhx.Touch
* @class dhx.Touch
* @constructor
* @alias dhx.Touch.prototype

 * @return {dhx.Touch}
 */


dhx.Touch.config = {

/**
 * in order to movement will be interpreted as scrolling or swapping, you should drag finger over the distance defined by this parameter (by default 30 millimeters)
 * @id dhx.Touch.config.deltaStep
 * @type dimension
 * @property
 */
deltaStep: '',


/**
 * the duration of scrolling after you lifted fingers up (1500)
 * @id dhx.Touch.config.finish
 * @type dimension
 * @property
 */
finish: '',


/**
 * the force of gravity (500)
 * @id dhx.Touch.config.gravity
 * @type dimension
 * @property
 */
gravity: '',


/**
 * the duration of touching in milliseconds to fire longTouch event (1000)
 * @id dhx.Touch.config.longTouchDelay
 * @type dimension
 * @property
 */
longTouchDelay: '',


/**
 * 
 * @id dhx.Touch.config.stepSize
 * @type 
 * @property
 */
stepSize: ''
};
		

/**
 * some unknown method
 * @id dhx.Touch.disable
 * @class dhx.Touch
 * @method disable
 * @memberOf dhx.Touch
 * @example 
 */
 dhx.Touch.disable = function() {};
/**
 * some unknown method
 * @id dhx.Touch.enable
 * @class dhx.Touch
 * @method enable
 * @memberOf dhx.Touch
 * @example 
 */
 dhx.Touch.enable = function() {};


/**
*
* dhx.TouchEvents object class.
* @id dhx.TouchEvents
* @class dhx.TouchEvents
* @constructor
* @alias dhx.TouchEvents.prototype

 * @return {dhx.TouchEvents}
 */


dhx.TouchEvents.config = {

};
		

/**
 * some unknown method
 * @id dhx.TouchEvents.swipe
 * @class dhx.TouchEvents
 * @method swipe
 * @memberOf dhx.TouchEvents
 * @param {String} id swipe(id)
 * @example 
 */
 dhx.TouchEvents.swipe = function(id) {};
/**
 * some unknown method
 * @id dhx.TouchEvents.unSwipe
 * @class dhx.TouchEvents
 * @method unSwipe
 * @memberOf dhx.TouchEvents
 * @example 
 */
 dhx.TouchEvents.unSwipe = function() {};


/**
*
* dhx.TreeDataMove object class.
* @id dhx.TreeDataMove
* @class dhx.TreeDataMove
* @constructor
* @alias dhx.TreeDataMove.prototype

 * @return {dhx.TreeDataMove}
 */


dhx.TreeDataMove.config = {

};
		



/**
*
* dhx.TreeRenderStack object class.
* @id dhx.TreeRenderStack
* @class dhx.TreeRenderStack
* @constructor
* @alias dhx.TreeRenderStack.prototype

 * @return {dhx.TreeRenderStack}
 */


dhx.TreeRenderStack.config = {

};
		



/**
*
* dhx.TreeStore object class.
* @id dhx.TreeStore
* @class dhx.TreeStore
* @constructor
* @alias dhx.TreeStore.prototype

 * @return {dhx.TreeStore}
 */


dhx.TreeStore.config = {

};
		

/**
 * adds a new item into a certain branch
 * @id dhx.TreeStore.add
 * @class dhx.TreeStore
 * @method add
 * @memberOf dhx.TreeStore
 * @param {Number} obj add(obj, index, parent)
 * @param {String} index Type: Method
 * @param {String} parent File:
 * @example 
 */
 dhx.TreeStore.add = function(obj, index, parent) {};
/**
 * gets position of the item in the parent branch
 * @id dhx.TreeStore.branchIndex
 * @class dhx.TreeStore
 * @method branchIndex
 * @memberOf dhx.TreeStore
 * @param {String} parent branchIndex(parent, child)
 * @param {String} child Type: Method
 * @example 
 */
 dhx.TreeStore.branchIndex = function(parent, child) {};
/**
 * removes all data
 * @id dhx.TreeStore.clearAll
 * @class dhx.TreeStore
 * @method clearAll
 * @memberOf dhx.TreeStore
 * @example 
 */
 dhx.TreeStore.clearAll = function() {};
/**
 * calls the defined functor for each child node of a certain branch
 * @id dhx.TreeStore.eachChild
 * @class dhx.TreeStore
 * @method eachChild
 * @memberOf dhx.TreeStore
 * @param {String} id eachChild(id, functor)
 * @param {String} functor Type: Method
 * @example 
 */
 dhx.TreeStore.eachChild = function(id, functor) {};
/**
 * addes data from data source
 * @id dhx.TreeStore.extraParser
 * @class dhx.TreeStore
 * @method extraParser
 * @memberOf dhx.TreeStore
 * @param {String} data extraParser(data, parent, level)
 * @param {String} parent Type: Method
 * @param {String} level File:
 * @example 
 */
 dhx.TreeStore.extraParser = function(data, parent, level) {};
/**
 * gets the id of the first child in a certain branch
 * @id dhx.TreeStore.firstChild
 * @class dhx.TreeStore
 * @method firstChild
 * @memberOf dhx.TreeStore
 * @param {String} id firstChild(id)
 * @example 
 */
 dhx.TreeStore.firstChild = function(id) {};
/**
 * gets all ids of all child nodes in the top level
 * @id dhx.TreeStore.getTopRange
 * @class dhx.TreeStore
 * @method getTopRange
 * @memberOf dhx.TreeStore
 * @example 
 */
 dhx.TreeStore.getTopRange = function() {};
/**
 * some unknown method
 * @id dhx.TreeStore.groupBy
 * @class dhx.TreeStore
 * @method groupBy
 * @memberOf dhx.TreeStore
 * @param {String} _scheme groupBy(_scheme, pull, inner_call, parent, level)
 * @param {String} pull Type: Method
 * @param {String} inner_call File:
 * @param {String} parent Implemented in: TreeStore
 * @param {String} level Included in:
 * @example 
 */
 dhx.TreeStore.groupBy = function(_scheme, pull, inner_call, parent, level) {};
/**
 * checks whether an item exists in a certain branch (at any level)
 * @id dhx.TreeStore.hasChild
 * @class dhx.TreeStore
 * @method hasChild
 * @memberOf dhx.TreeStore
 * @param {String} parent hasChild(parent, child)
 * @param {String} child Type: Method
 * @example 
 */
 dhx.TreeStore.hasChild = function(parent, child) {};
/**
 * gets the id of the next item
 * @id dhx.TreeStore.nextSibling
 * @class dhx.TreeStore
 * @method nextSibling
 * @memberOf dhx.TreeStore
 * @param {String} id nextSibling(id)
 * @example 
 */
 dhx.TreeStore.nextSibling = function(id) {};
/**
 * gets the id of the parent branch
 * @id dhx.TreeStore.parent
 * @class dhx.TreeStore
 * @method parent
 * @memberOf dhx.TreeStore
 * @param {String} id parent(id)
 * @example 
 */
 dhx.TreeStore.parent = function(id) {};
/**
 * gets the id of the previous item
 * @id dhx.TreeStore.prevSibling
 * @class dhx.TreeStore
 * @method prevSibling
 * @memberOf dhx.TreeStore
 * @param {String} id prevSibling(id)
 * @example 
 */
 dhx.TreeStore.prevSibling = function(id) {};
/**
 * assigns methods (and events) of DataStore to an object
 * @id dhx.TreeStore.provideApi
 * @class dhx.TreeStore
 * @method provideApi
 * @memberOf dhx.TreeStore
 * @param {String} target provideApi(target,eventable)
 * @param {String} eventable Type: Method
 * @example 
 */
 dhx.TreeStore.provideApi = function(target,eventable) {};
/**
 * removes an item
 * @id dhx.TreeStore.remove
 * @class dhx.TreeStore
 * @method remove
 * @memberOf dhx.TreeStore
 * @param {String} id remove(id)
 * @example 
 */
 dhx.TreeStore.remove = function(id) {};
/**
 * serializes branch or the whole dataset to a json object
 * @id dhx.TreeStore.serialize
 * @class dhx.TreeStore
 * @method serialize
 * @memberOf dhx.TreeStore
 * @param {String} id serialize(id)
 * @example 
 */
 dhx.TreeStore.serialize = function(id) {};


/**
*
* dhx.Type object class.
* @id dhx.Type
* @class dhx.Type
* @constructor
* @alias dhx.Type.prototype

 * @return {dhx.Type}
 */


dhx.Type.config = {

/**
 * Css class of single item
 * @id dhx.Type.config.css
 * @type string
 * @property
 */
css: '',


/**
 * item height
 * @id dhx.Type.config.height
 * @type dimension
 * @property
 */
height: '',


/**
 * item margin
 * @id dhx.Type.config.margin
 * @type dimension
 * @property
 */
margin: '',


/**
 * Name of type
 * @id dhx.Type.config.name
 * @type string
 * @property
 */
name: '',


/**
 * Css class of single item
 * @id dhx.Type.config.padding
 * @type dimension
 * @property
 */
padding: '',


/**
 * Main template
 * @id dhx.Type.config.template
 * @type template
 * @property
 */
template: '',


/**
 * Edit template
 * @id dhx.Type.config.template_edit
 * @type template
 * @property
 */
template_edit: '',


/**
 * Loading template
 * @id dhx.Type.config.template_loading
 * @type template
 * @property
 */
template_loading: '',


/**
 * item width
 * @id dhx.Type.config.width
 * @type dimension
 * @property
 */
width: ''
};
		



/**
*
* dhx.ValidateData object class.
* @id dhx.ValidateData
* @class dhx.ValidateData
* @constructor
* @alias dhx.ValidateData.prototype

 * @return {dhx.ValidateData}
 */


dhx.ValidateData.config = {

};
		

/**
 * validates for the defined rules
 * @id dhx.ValidateData.validate
 * @class dhx.ValidateData
 * @method validate
 * @memberOf dhx.ValidateData
 * @param {Object} obj validate(obj)
 * @example dhx.ui({
 * 	view:"form", 
 * 	id:"myform", 
 * 	elements:[
 * 		{ view:"text", inputWidth:300, label:"Name *", id:"name"},
 * 		{ view:"text", inputWidth:300, label:"Age *",  id:"age"},
 * 		{ view:"button", inputWidth:300, label:"Submit", click:"submit_form"}],
 * 	rules:{
 * 		name:dhx.rules.isNotEmpty,
 * 		age:dhx.rules.isNumber
 * 	}
 * });
 * �
 * submit_form = function(){
 * 	if ($$("myform").validate()==false)
 * 		{dhx.notice("Invalid value for some field");}
 * }
 */
 dhx.ValidateData.validate = function(obj) {};


/**
*
* dhx.ValueBind object class.
* @id dhx.ValueBind
* @class dhx.ValueBind
* @constructor
* @alias dhx.ValueBind.prototype

 * @return {dhx.ValueBind}
 */


dhx.ValueBind.config = {

};
		



/**
*
* dhx.Values object class.
* @id dhx.Values
* @class dhx.Values
* @constructor
* @alias dhx.Values.prototype

 * @return {dhx.Values}
 */


dhx.Values.config = {

};
		

/**
 * clears values of all inputs ( resets them to the default values )
 * @id dhx.Values.clear
 * @class dhx.Values
 * @method clear
 * @memberOf dhx.Values
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", label: 'Clear form', click:"clear_form" }]
 * });
 * �
 * function clear_form(){
 * 	$$('myform').clear();
 * };
 */
 dhx.Values.clear = function() {};
/**
 * sets focus to an input
 * @id dhx.Values.focus
 * @class dhx.Values
 * @method focus
 * @memberOf dhx.Values
 * @param {String} name focus(name)
 * @example dhx.ui({
 * 	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'Username', labelWidth:100},
 * 			{ view:"text", id:'field_b', label: 'Password', labelWidth:100},
 * 			{ view:"button", label: 'Log in'}]
 * });
 * �
 * $$('myform').focus("field_a");
 */
 dhx.Values.focus = function(name) {};
/**
 * gets hash of data values
 * @id dhx.Values.getValues
 * @class dhx.Values
 * @method getValues
 * @memberOf dhx.Values
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'From', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'To', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" },
 * 			{ view:"button", id:"button1", label: 'Show values', click:"get_form" }]
 * 	},
 * 	{ id:"log", template:function(obj){ return "<pre>"+JSON.stringify(obj).replace(/,/g,"\n,")+"</pre>"; }}]
 * });
 * �
 * function get_form(){
 * 	$$('log').parse($$('myform').getValues());
 * };
 */
 dhx.Values.getValues = function() {};
/**
 * sets values for all inputs in the component
 * @id dhx.Values.setValues
 * @class dhx.Values
 * @method setValues
 * @memberOf dhx.Values
 * @param {String} data setValues(data)
 * @example dhx.ui({
 * 	rows:[{	view:"form", id:"myform", elements:[
 * 			{ view:"text", id:'field_a', label: 'from', value: "Madrid"},
 * 			{ view:"text", id:'field_b', label: 'to', value: "Milan"},
 * 			{ view:"toggle", id:'field_c', options: ["Roundtrip","Oneway"], align: "center" }]
 * 	},
 * 	{ view:"button", label: 'Fill form', click:"set_form" }]
 * });
 * �
 * function set_form(){
 * 	$$('myform').setValues({
 * 			field_a: "London",
 * 			field_b: "New York",
 * 			field_c: "left"
 * 	});
 * };
 */
 dhx.Values.setValues = function(data) {};


/**
*
* dhx.VirtualRenderStack object class.
* @id dhx.VirtualRenderStack
* @class dhx.VirtualRenderStack
* @constructor
* @alias dhx.VirtualRenderStack.prototype

 * @return {dhx.VirtualRenderStack}
 */


dhx.VirtualRenderStack.config = {

};
		

/**
 * renders a current state of an item or the whole component
 * @id dhx.VirtualRenderStack.render
 * @class dhx.VirtualRenderStack
 * @method render
 * @memberOf dhx.VirtualRenderStack
 * @param {String} id render(id,data,type)
 * @param {String} data Type: Method
 * @param {String} type File: core/render/virtual_render.js
 * @example 
 */
 dhx.VirtualRenderStack.render = function(id,data,type) {};
/**
 * adjusts scroll state to show an item in question
 * @id dhx.VirtualRenderStack.show
 * @class dhx.VirtualRenderStack
 * @method show
 * @memberOf dhx.VirtualRenderStack
 * @param {String} id show(id)
 * @example 
 */
 dhx.VirtualRenderStack.show = function(id) {};


/**
*
* dhx.history object class.
* @id dhx.history
* @class dhx.history
* @constructor
* @alias dhx.history.prototype

 * @return {dhx.history}
 */


dhx.history.config = {

};
		

/**
 * checks whether history storing is activated
 * @id dhx.history.active
 * @class dhx.history
 * @method active
 * @memberOf dhx.history
 * @example 
 */
 dhx.history.active = function() {};
/**
 * says to ignore the specified multiview tabs while storing history
 * @id dhx.history.ignore
 * @class dhx.history
 * @method ignore
 * @memberOf dhx.history
 * @example 
 */
 dhx.history.ignore = function() {};
/**
 * clears all the stored history and stops further storing for all the activated multiviews
 * @id dhx.history.reset
 * @class dhx.history
 * @method reset
 * @memberOf dhx.history
 * @example 
 */
 dhx.history.reset = function() {};
/**
 * starts storing tabs history
 * @id dhx.history.start
 * @class dhx.history
 * @method start
 * @memberOf dhx.history
 * @example 
 */
 dhx.history.start = function() {};
/**
 * pauses storing tabs history
 * @id dhx.history.stop
 * @class dhx.history
 * @method stop
 * @memberOf dhx.history
 * @example 
 */
 dhx.history.stop = function() {};
/**
 * resumes storing history of an ignored tab
 * @id dhx.history.unignore
 * @class dhx.history
 * @method unignore
 * @memberOf dhx.history
 * @param {String} name unignore(name)
 * @example 
 */
 dhx.history.unignore = function(name) {};


/**
*
* dhx.proxy object class.
* @id dhx.proxy
* @class dhx.proxy
* @constructor
* @alias dhx.proxy.prototype

 * @return {dhx.proxy}
 */


dhx.proxy.config = {

/**
 * allows to attach custom handlers to inner events of the component
 * @id dhx.proxy.config.on
 * @type undefined
 * @property
 */
on: ''
};
		

/**
 * attaches custom handler to inner event
 * @id dhx.proxy.attachEvent
 * @class dhx.proxy
 * @method attachEvent
 * @memberOf dhx.proxy
 * @param {String} type attachEvent(type,functor,id)
 * @param {String} functor Type: Method
 * @param {String} id File: core/dhx.js
 * @example $$("menu").attachEvent("onXLE",function(){
 * 				this.select(2);
 * })
 */
 dhx.proxy.attachEvent = function(type,functor,id) {};
/**
 * blocks event triggering
 * @id dhx.proxy.blockEvent
 * @class dhx.proxy
 * @method blockEvent
 * @memberOf dhx.proxy
 * @example $$('list').blockEvent();
 * $$('list').add({ text:'abc'}); //will not trigger any events 
 * $$('list').unblockEvent();
 */
 dhx.proxy.blockEvent = function() {};
/**
 * calls inner event
 * @id dhx.proxy.callEvent
 * @class dhx.proxy
 * @method callEvent
 * @memberOf dhx.proxy
 * @param {String} type callEvent(type,params)
 * @param {String} params Type: Method
 * @example 
 */
 dhx.proxy.callEvent = function(type,params) {};
/**
 * detaches custom code from handler
 * @id dhx.proxy.detachEvent
 * @class dhx.proxy
 * @method detachEvent
 * @memberOf dhx.proxy
 * @param {String} id detachEvent(id)
 * @example var myEvent = $$("mylist").attachEvent("onItemClick", function (){
 *     ...//event handler code
 * });
 * ...
 * $$("mylist").detachEvent(myEvent);
 */
 dhx.proxy.detachEvent = function(id) {};
/**
 * sends a request of the type GET
 * @id dhx.proxy.get
 * @class dhx.proxy
 * @method get
 * @memberOf dhx.proxy
 * @param {String} params get(params, callback)
 * @param {Function} callback Type: Method
 * @example 
 */
 dhx.proxy.get = function(params, callback) {};
/**
 * checks whether a component has an event
 * @id dhx.proxy.hasEvent
 * @class dhx.proxy
 * @method hasEvent
 * @memberOf dhx.proxy
 * @param {String} type hasEvent(type)
 * @example 
 */
 dhx.proxy.hasEvent = function(type) {};
/**
 * loads data from the specified url via proxy
 * @id dhx.proxy.load
 * @class dhx.proxy
 * @method load
 * @memberOf dhx.proxy
 * @param {String} dest load(dest, driver)
 * @param {String} driver Type: Method
 * @example 
 */
 dhx.proxy.load = function(dest, driver) {};
/**
 * routes events from one object to another
 * @id dhx.proxy.mapEvent
 * @class dhx.proxy
 * @method mapEvent
 * @memberOf dhx.proxy
 * @param {String} map mapEvent(map)
 * @example //as result , buttons event will fire for list component
 * button.mapEvent({
 * 	onItemClick:list // where list - some other component
 * });
 */
 dhx.proxy.mapEvent = function(map) {};
/**
 * sends a request of the type POST
 * @id dhx.proxy.post
 * @class dhx.proxy
 * @method post
 * @memberOf dhx.proxy
 * @param {String} params post(params, callback)
 * @param {Function} callback Type: Method
 * @example 
 */
 dhx.proxy.post = function(params, callback) {};
/**
 * restores data from the cache into the specified datastore
 * @id dhx.proxy.restore
 * @class dhx.proxy
 * @method restore
 * @memberOf dhx.proxy
 * @param {String} dest restore(dest, driver, text, xml, XmlHttpRequest)
 * @param {String} driver Type: Method
 * @param {String} text File:
 * @param {String} xml Implemented in: proxy
 * @param {String} XmlHttpRequest Included in:
 * @example 
 */
 dhx.proxy.restore = function(dest, driver, text, xml, XmlHttpRequest) {};
/**
 * enables event triggering
 * @id dhx.proxy.unblockEvent
 * @class dhx.proxy
 * @method unblockEvent
 * @memberOf dhx.proxy
 * @example $$('mylist').blockEvent();
 * $$('mylist').add({ text:'abc'}); //will not trigger any events 
 * $$('mylist').unblockEvent();
 */
 dhx.proxy.unblockEvent = function() {};


/**
*
* dhx.storagecookie object class.
* @id dhx.storagecookie
* @class dhx.storagecookie
* @constructor
* @alias dhx.storagecookie.prototype

 * @return {dhx.storagecookie}
 */


dhx.storagecookie.config = {

};
		



/**
*
* dhx.storagelocal object class.
* @id dhx.storagelocal
* @class dhx.storagelocal
* @constructor
* @alias dhx.storagelocal.prototype

 * @return {dhx.storagelocal}
 */


dhx.storagelocal.config = {

};
		



/**
*
* dhx.storagesession object class.
* @id dhx.storagesession
* @class dhx.storagesession
* @constructor
* @alias dhx.storagesession.prototype

 * @return {dhx.storagesession}
 */


dhx.storagesession.config = {

};
		
