function create_item(){
    console.log("creating item...")
    let item_name = document.querySelector("#item_name").value


    let id = parseInt(Math.random() * 999);
    let object = { id: id, name: item_name};
    

    // check if there are items already in localStorage
    if( localStorage.items ){
      console.log("yes items already there")
      // items is just text, but looks like an array, so convert it to an array
      const items = JSON.parse(localStorage.items) // converts text into array
      // items.push(item_name)

      
      items.push(object)


      // save it to the localStorage, but this is an array... we need text
      localStorage.items = JSON.stringify(items)
      render_item(object)
    }else{
      console.log("no, items not there. It is empty")
      const items = []
      items.push(object) // ["a","b","c"]
      // convert the items array into an items "array" text
      items_array_as_text = JSON.stringify(items)
      // save the items text in localStorage
      localStorage.items = items_array_as_text
      render_item(object)
    }
  }
  
  // ##############################
  
  function show_items(){
    if( localStorage.items ){
      // convert the items to an array
      const array_items = JSON.parse(localStorage.items) // text to array
      array_items.forEach( item => render_item(item) )
    }
  }
  show_items()
  
  
  // ##############################
  function render_item(item){
    let div_item = `
    <div class="item">
    <div>${item.id}</div>
    <div>${item.name}</div>
    <button>delete item</button>
    </div>`
    document.querySelector("#items").insertAdjacentHTML('beforeend', div_item)
    enableButtons()
  }

  function enableButtons() {
    let items = document.querySelectorAll("#items .item");
    items.forEach((singleItem) => {
      singleItem.querySelector("button").addEventListener("click", function(){
        // console.log("clicked")
          // console.log(singleItem)
          singleItem.remove();
      })
    })

    // allButtons.forEach((singleBtn) => {
    //   console.log(singleBtn)
    //   singleBtn.addEventListener("click", removeItem => {
    //     console.log(removeItem)
    //     console.log("clicked")
    //   })
    // })
  }
  

//   <h1>
//   Hi <span id="the_user_name"></span>
// </h1>

// <script>
//   // localStorage is inside the browser
//   // place to store data
//   // name age
//   // "arrays"
//   // "json"
//   // in local storage you can only store text
//   // localStorage.name = "b"
//   // localStorage.setItem("name", "b")
//   // const user_name = localStorage.name
//   // document.querySelector("#the_user_name").innerText = user_name
//   // localStorage.age = 10 // number
//   // let age = localStorage.age
//   // console.log(age) // text

//   // const letters = ["a", "b"] // memory in js
//   // // If you have an array or json, convert it to string first
//   // converted_letters_as_text = JSON.stringify(letters)
//   // localStorage.my_letters = converted_letters_as_text
//   // const letter_as_text = localStorage.my_letters // ["a","b"]
//   // // strings are just arrays of letters
//   // // We have a problem, local storage only gives text back
//   // // convert the text to an object
//   // const letters_as_array = JSON.parse(localStorage.my_letters)
//   // console.log(letters_as_array[1])

//   /*
//   Create an array with 3 people
//   people []
//   push {"id":1, "name":"a"}
//   push {"id":2, "name":"b"}
//   push {"id":3, "name":"c"}

//   save those people to localStorage
//   convert those people to text
//   */

//   let people = []
//   const person_one =    {"id":1, "name":"a"}
//   const person_two =    {"id":2, "name":"b"}
//   const person_three =  {"id":3, "name":"c"}
//   people.push(person_one)
//   people.push(person_two)
//   people.push(person_three)
//   // convert people to text, then stored it
//   localStorage.stored_people = JSON.stringify(people)
// </script>