
// 加载公共组件

function loadComponent(id, file){

fetch(file)

.then(response => response.text())

.then(data => {

document.getElementById(id).innerHTML = data;

});

}



// 加载 Header

loadComponent(
"header-placeholder",
"components/header.html"
);



// 加载 Sidebar

loadComponent(
"sidebar-placeholder",
"components/sidebar.html"
);
