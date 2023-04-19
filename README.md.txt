## Description
The app allows visitors to browse created todos. Authors can create todos to add to this list, or edit/delete their own todos.

### Navigation Bar
Guests have access to the Todos, Home, Register, and Login pages. The logged-in user can see the links to the Todos, Add new todo, Logout and Home page.

### Login Page
The Login page contains a form for existing user authentication. Successful login occurs after the user inputs email and password.

After login, the REST service will return information about the existing user along with a property accessToken, which allows the user to perform authenticated requests. 


### Register Page
The Register page contains a form for new user registration. By providing an email, password and confirm password the app should register a new user in the system if there are no empty fields. 

After register, the REST service will return the newly created object with an automatically generated _id and a property accessToken, which allows the user to perform authenticated requests.

### Logout
Logout is available to logged in users. 

Upon success, the REST service will return an empty response and the session information will be cleared.

### Todos
Here users can see a list of all created todos, each with a "Details" button, leading to a Details page of that particular todo.


### Home Page
Users, regardless of whether they are logged-in or not, can see this page. 

### Add new todo
The Add new todo page is available to logged-in users. It contains a form for creating new post. 


### Details Page
All users can view details about posts. Clicking the Details link in of a post should display the Details page.

If the currently logged in user is the creator of the post, the Edit, Delete, and Add Comment will be displayed, otherwise they will not be available.

### Edit Page
The Edit page is available to users who are both logged in and authors of a particular todo. Clicking the Edit button in the details page of a particular todo will display the Edit page. It contains a form with the necessary input fields.

Upon success, the user will be redirected to the Details page for the current game.

### Delete Page
The delete button is available to logged-in users, for todos they have created. When the author clicks on the Delete button on a todo they have created, that todo will be deleted.


### Comments
Every logged-in user will be able to comment on todos. Guest will not be able to see the section Add new comment, but will be able to see the section Comments.