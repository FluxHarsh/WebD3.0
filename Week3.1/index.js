// function addTodo() {
//     const inputEl = document.querySelector("input");
//     console.log(inputEl.value);
// }

// let ctr = 0;
// function timeWatch() {
//     document.querySelectorAll("h4")[1].innerHTML = ctr;

//     ctr = ctr + 1;
//     console.log(ctr)
//     setTimeout(timeWatch, 1000);
// }

// setTimeout(timeWatch, 1000)

// //run this onClick
// function deleteT(index){
//     const element = document.getElementById("todo-"+ index );
//     element.parentNode.removeChild(element)
// }




  function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
  }


  