window.addEventListener('load',function(){
    // Side bar
    const menuOption = document.querySelectorAll(".side-element");
    const menuBtn = document.getElementById("menu-btn");
    const hoverClass = document.querySelector(".hover-bar");
    const sections = document.querySelectorAll(".hover-mid");
    menuOption.forEach(function (item) {
        item.addEventListener('click', function () {

            if (this.dataset.hover !== undefined) {

                menuOption.forEach(function (m) {
                    m.classList.remove('chosen-section');
                    console.log(m);
                });
                const chosenSection = this.dataset.hover;
                sections.forEach(function (s) {
                    if(chosenSection === s.id){

                        let containsHover = document.getElementById(chosenSection).classList.contains('active-hover');
                        switch(containsHover){
                            case false:
                                document.getElementById(chosenSection).classList.add('active-hover');
                                hoverClass.classList.add('active-hover');
                                document.querySelector(".main-content").classList.add("mc-extend");
                                item.classList.add("chosen-section");
                            break;
                            case true:
                                document.getElementById(chosenSection).classList.remove('active-hover');
                                hoverClass.classList.remove('active-hover');
                                document.querySelector(".main-content").classList.remove("mc-extend");
                                item.classList.remove("chosen-section");
                            break;
                        }
                    } else {
                        document.getElementById(s.id).classList.remove('active-hover');
                    }
                });
            }
        });
    });
    // Responsive
    const sideBarOptions = document.querySelector(".side-mid");
    menuBtn.addEventListener('click', function(){
      let icon = document.querySelector('.fa-bars');
      let displayCheck = window.getComputedStyle(sideBarOptions).display;
      if(displayCheck == 'none'){
        sideBarOptions.style.display = 'block';
        icon = this.querySelector('.fa-bars');
        icon.classList.add('fa-xmark');
        icon.classList.remove('fa-bars');
      } else {
          console.log(displayCheck);
            sideBarOptions.style.display = 'none';
            icon = this.querySelector('.fa-xmark');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
            menuOption.forEach(function (m) {
                m.classList.remove('chosen-section');
            });
            hoverClass.classList.remove('active-hover');
            sections.forEach(function(s){
                document.getElementById(s.id).classList.remove('active-hover');
            });
        }
    });
});

// window.addEventListener("load", onPageLoad);

// function onPageLoad() {
//   const refs = {
//     menuElements: document.querySelectorAll(
//       ".side-element"
//     ),
//     sideBar: document.querySelector(".side-bar"),
//     hoverBar:
//       document.querySelector(".hover-bar"),
//     hoverBarItems:
//       document.querySelectorAll(".hover-mid"),
//   };
 
//     refs.sideBar.addEventListener(
//       "click",
//       onSideBarClick
//     );


//   function onSideBarClick(evt) {
//     refs.menuElements.forEach((menu) => {
//       menu.classList.remove("chosen-section");
//     });
// console.log(evt.target);
//     if (
//       evt.target.closest(".side-element") !== null
//     ) {
//       const chosenMenu = evt.target.closest(
//         ".side-element"
//       );

//       refs.hoverBarItems.forEach((item) => {
//         if (
//           item.id === chosenMenu.dataset.hover
//         ) {
//           if (
//             !document
//               .getElementById(
//                 `${chosenMenu.dataset.hover}`
//               )
//               .classList.contains("active-hover")
//           ) {
            
//             chosenMenu.classList.add(
//               "chosen-section"
//             );

//             document
//               .getElementById(
//                 `${chosenMenu.dataset.hover}`
//               )
//               .classList.add("active-hover");
//             refs.hoverBar.classList.add(
//               "active-hover"
//             );
//            return
//           }else {
//               chosenMenu.classList.remove(
//                 "chosen-section"
//               );
//               document
//                 .getElementById(
//                   `${chosenMenu.dataset.hover}`
//                 )
//                 .classList.remove("active-hover");
//               refs.hoverBar.classList.remove(
//                 "active-hover"
//               );
//            return
//           }
//         } else item.classList.remove("active-hover");
//       });
//     }
//   }
// }
