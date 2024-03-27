/*
Demo application
*/
var btnTitleChange = $.button("Let's change Frame title").on_click(changeTitle,"Wow, I changed!");

var frame = $.frame("Demo Application")
    .layout($.layout("table",[[20,-1,20],[20,40,10,-1,20]]))
        .add($.button("About").on_click(alert),"1,1")
        .add(btnTitleChange,"1,3");
frame.show();

function changeTitle(title){frame.title(title);}
function alert(){js.alert("Welcome to JavaScript executable!");};