import React from 'react';
import logo from './logo.svg';
import './App.css';
import{Formik, Field, Form } from 'formik';

function App() {
  return (
    <div className="App">
       <h3> Signup form </h3>
        <Formik 
        initialValues={{ name: '', email:'',password: ''}}
        onSubmit={(values) => 
          {
            console.log("values,", values)
          }
        }
        >
         <Form>
           <Field name="name" placeholder="Enter name"/>
           <Field name="email" type="email" placeholder="Enter email"/>
           <Filed name="password" type="password" placeholder="Enter password"/>
           <button type="submit"> Signup </button>
           </Form> 
        </Formik>

    </div>
  );
}

export default App;
