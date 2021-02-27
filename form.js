function validate(){
  // console.log(event.target)
  const frm = event.target
  // Clear errors
  all("[data-validate]").forEach(element=>{
    element.classList.remove("error")
  })

  let min
  let max

  // console.log(form.checkValidity())
  all("[data-validate]").forEach( element => {
    
    switch(element.getAttribute("data-validate")){ // str | int

      case "str":
        min = element.getAttribute("data-min")
        max = element.getAttribute("data-max")
        let total_characters = element.value.length
        if( total_characters < min ||  total_characters > max){
          element.classList.add("error") 
        }

        pw = all("[data-name]")[0].value;
        confirmPw = all("[data-name]")[1].value;

        if (pw == confirmPw) {
          // console.log("its the same")
          document.querySelector("#passwordError").classList.add("invalid")  
        } else {
          // console.log("nope")
          document.querySelector("#passwordError").classList.remove("invalid")
        }
      break

      case "int":
        min = parseInt(element.getAttribute("data-min")) // number
        max = parseInt(element.getAttribute("data-max")) // number
        let phone = parseInt(element.value)
        if( ! phone || phone < min || phone > max ){
          element.classList.add("error")     
        }
      break

      case "email":
        const re = /^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$/
        if( ! re.test(element.value.toLowerCase()) ){ 
          element.classList.add("error")
        }
      break
    }
  })
  validForm();
}

let allUsers = [];

function validForm(){

  let allErrors =  document.querySelectorAll(".error");
  if (allErrors.length == 0) {
    // console.log("Form is valid")
    let newUser = {
      firstName: all("[data-validate]")[0].value,
      lastName: all("[data-validate]")[1].value,
      email: all("[data-validate]")[2].value,
      password: all("[data-validate]")[3].value
    }
    allUsers.push(newUser);
    console.log("new Arrey: ", allUsers)
    addNewUser(newUser);
  }
}

function addNewUser(newUser){
  let newEntry = `
  <div class="userArea">
  <p>First name: <span>${newUser.firstName}</span></p>
  <p>Last name: <span>${newUser.lastName}</span></p>
  <p>Email: <span>${newUser.email}</span></p>
  </div>`
  document.querySelector("#userSection").insertAdjacentHTML('beforeend', newEntry)
  const form = document.querySelector("form");
  form.reset();
}

function clear_error(){
  event.target.classList.remove("error")
}

function one(selector){ return document.querySelector(selector)}
function all(selector){return document.querySelectorAll(selector)}
  