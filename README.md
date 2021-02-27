# 5sem_exercises
Basic JS exercises for Web Development

BUTTONS.html

Create a website that shows 3 users. The data is hard coded in HTML

Each user has a name, last name, and email
Next to each field there is a button that says show/hide
Click on the button and the name, last name, or email will be shown or hidden
The page looks nice because each user is in its own box/column (CSS GRID)
NOTE: When the name, last name, or email are "hidden" in reality only the text becomes a little more transparent/softer. So it is still visible, but not to strong
Only 1 element can be "hidden" at any given time for any user. Example:

If the first user has its name "hidden", then it is not possible to "hide" the last name or email until the name is "shown"
If the first user has its last name "hidden", then it is not possible to "hide" the name or email until the last name is "shown"

----------------------------------------------------------------------------------------------------------------------------------------

LOCAL_STORAGE.html

- When the user saves an item the id of the item is also stored in localStorage. The id is automatically generated (Math.random())
- Since the item is not only a name anymore, I suggest you use JSON objects for it.
{"id":12212, "name":"THE NAME YOU GIVE TO IT"}
- localStorage that has text that looks like an array with JSON objects in it
- When the objects are rendered, the id is also shown
- When the user clicks on "delete item", then item is deleted from the website and also from localStorage. You will need a loop and an if statement to compare the id of the element with the id of localStorage

----------------------------------------------------------------------------------------------------------------------------------------

SIGNUP.html

Validate the form and  make sure that the given password and the confirm password are the same.

----------------------------------------------------------------------------------------------------------------------------------------

