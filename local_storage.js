function create_item(){
    console.log("creating item...")
    let item_name = document.querySelector("#item_name").value

    let id = parseInt(Math.random() * 999);
    let object = { id: id, name: item_name};

    // check if there are items already in localStorage
    if( localStorage.items ){
      console.log("yes items already there")
      const items = JSON.parse(localStorage.items) // converts text into array

      items.push(object)

      localStorage.items = JSON.stringify(items)
      render_item(object)
    }else{
      console.log("no, items not there. It is empty")
      const items = []
      items.push(object)
      items_array_as_text = JSON.stringify(items)
      localStorage.items = items_array_as_text
      render_item(object)
    }
  }
  
  // ##############################
  
  function show_items(){
    if( localStorage.items ){
      const array_items = JSON.parse(localStorage.items) // text to array
      array_items.forEach( item => render_item(item))
      // array_items.forEach( item => enableButtons(item))
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
    enableButtons();
  }

   // ##############################
  function enableButtons() {
    let items = document.querySelectorAll("#items .item");
    items.forEach((singleItem) => {
      singleItem.querySelector("button").addEventListener("click", function(){
        singleItem.remove();
        let selectedId = singleItem.querySelector("div").innerHTML;
        removeLocalStorage(selectedId);
      })
    })
  }

  function removeLocalStorage(selectedId){
      let allItems = JSON.parse(localStorage.items);
        for (var i = 0; i < allItems.length; i++) { //loop over the collection
          if (allItems[i].id == selectedId) { //see if ids match
            allItems.splice(i, 1); //remove item from array
          localStorage.setItem("items", JSON.stringify(allItems));
          }
        }
  }
  