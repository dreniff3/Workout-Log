# Workout Log

## Description

A Single Page Application (SPA) that tracks exercises completed by the user by using a REST API implemented for the backend of the app using Node, Express, and MongoDB, with a React app as the frontend. This app performs all four CRUD operations.

### How the frontend pages interact:

#### 1. HomePage:
<ul>
  <li>When this page is first rendered, it displays all the exercises currently stored in our MongoDB exercise collection. This is done by calling the REST API endpoint to get all the exercises.
</li>
  <li>Each exercise is displayed with icons to delete or edit the exercise.</li>
  <li>Clicking on the icon for deleting the exercise deletes the exercise from the database. This is done by calling a REST API endpoint to delete the exercise.
</li>
  <li>Clicking on the icon for editing the exercise takes us to the Edit Exercise page. The data for the selected exercise is displayed in a form that is automatically filled in with this data.
</li>
  <li>This page has a link to the Add Exercise Page.
</li>
</ul>

#### 2. AddExercisePage:
<ul>
  <li>This page provides controls to input data for a new exercise. The controls allow the user to specify the new exercise’s name, reps, weight, unit, and date.
</li>
  <li>Clicking on an ‘Add’ button adds the exercise to the database. This is done by calling the REST API endpoint to create an exercise.
</li>
  <li>After adding the exercise, the user is automatically taken back to the Home Page.
</li>
</ul>

#### 3. EditExercisePage:
<ul>
  <li>This page has a form with controls to edit the data for an exercise.
</li>
  <li>The form is automatically filled-in when the page is loaded.
</li>
  <li>Clicking on a ‘Save’ button updates the exercise in the database. This is done by calling a REST API endpoint to update an exercise.
</li>
  <li>After saving the exercise, the user is automatically taken to the Home Page.</li>
</ul>

___

The component tree for the app is shown in the following figure:

![workoutlog_component_tree](https://user-images.githubusercontent.com/85808475/229376448-383e48ea-362a-45c3-b820-3e4fa82bc5eb.png)

<ul>
  <li>The <code>App</code> component has three child components: <code>HomePage</code>, <code>AddExercisePage</code>, and <code>EditExercisePage</code>.
</li>
  <li>The <code>App</code> passes down two properties: <code>setExercise</code> to the <code>HomePage</code> component and <code>exercise</code> to the <code>EditExercisePage</code> component.
</li>
  <li>The <code>HomePage</code> component has one child component: the <code>ExerciseList</code>.
</li>
  <li>The <code>HomePage</code> passes down three properties to the <code>ExerciseList</code>: <code>onDeleteExercise</code>, <code>onEditExercise</code>, and <code>exercises</code>.
</li>
  <li>The <code>ExerciseList</code> has <code>Exercise</code> components as its children.
</li>
  <li>The <code>ExerciseList</code> component renders all the exercises in an HTML table.
</li>
  <li>There will be one <code>Exercise</code> component corresponding to each exercise displayed in the HTML table. That <code>Exercise</code> component will generate the HTML content for the corresponding row in the HTML table.
</li>
  <li>The <code>ExerciseList</code> passes down three properties to each <code>Exercise</code> component: <code>onDeleteExercise</code>, <code>onEditExercise</code>, and <code>exercise</code>. </li>
</ul>

## Deployment

<ol>
  <li>Clone the repository to your own computer.</li>
  <li>Change the <code>MONGODB_CONNECT_STRING</code> in the <code>exercise-backend-rest/.env</code> file to connect to your own MongoDB database.</li>
  <li>In VS Code, right-click on the <code>exercise-backend-rest</code> folder and choose <strong>Open In an Integrated terminal</strong>. Type <code>npm install</code> and then <code>npm start</code>. This folder should connect using the <code>.env</code> file with <code>MONGODB_CONNECT_STRING</code> and <code>PORT=3000</code>.
</li>
  <li>In VS Code, right-click on the <code>exercise-frontend-ui</code> folder and choose <strong>Open In an Integrated terminal</strong>. Type <code>npm install</code> and then <code>npm start</code>. The frontend should now proxy requests to the backend server.<strong>*</strong></li>
  <li>View the app on <code>http://localhost:8000/</code>.
</li>
</ol>
 <strong>*</strong>Now HTTP requests from the React app to a URL such as <code>/exercises</code> will be sent using the value of the proxy property for the hostname and port in the URL. For example, the HTTP request <code>/exercises</code> will be sent to the URL <code>http://localhost:3000/exercises</code>. Now our React app, downloaded to the browser from <code>localhost:8000</code>, can send requests to the REST API running on <code>localhost:3000</code>.
