import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async () => {
  const res = await fetch('http://127.0.0.1:8000/api/tasks/');
  const data = await res.json();
  console.log(data);
  return {
      props: { Tasks: data }
  }
}

const Tasks = ({Tasks}) => {
  const [tasks, setTasks] = useState(Tasks);
  const [isUpdating, setIsUpdating] = useState(false);
  const [inEditTask, setInEditTask] = useState(null);
  const [updatingTask, setUpdatingTask] = useState(null);
  const formInputRef = useRef();

  const fetchTasks = () => {
    fetch('http://127.0.0.1:8000/api/tasks/')
        .then((res) => {
          if(!res.ok) {
            throw Error("There is something wrone");
          }
          return res.json();
        })
        .then(data => {
          console.log("fetching...",data);
          setTasks(data);
        })
        .catch((err => {
          if(!err.name==='AbortError'){
            console.log("fetching an Error");
          } else {
            console.log("fetch aborted");
          }
        }))
  }

  // useEffect(()=> {
  //   console.log("process started")
  //   fetchTasks();

  // }, [])

  const handleEdit = (task) => {
    setIsUpdating(true);
    setInEditTask(task.id);
    setUpdatingTask(task);
    formInputRef.current.focus();
    formInputRef.current.value = task.content;
  }

  const handlechange = (e) => {
    if (e.target.value.length === 0){
      setIsUpdating(false);
    }
    setInEditTask(e.target.value);
  }

  const handleAction = (e) => {
    e.preventDefault();
    let url = null;
    if (isUpdating){
      console.log('updated');
      console.log({'content': inEditTask});
      url = `http://127.0.0.1:8000/api/task/${updatingTask.id}/`;
      console.log(url);
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          //'X-CSRFToken':csrftoken,
        },
        body: JSON.stringify({'content': inEditTask}),
      }).then((response) => {
        console.log(response);
        console.log('Updated successfully');
        setIsUpdating(false);
        formInputRef.current.value = '';
      })
      .then(()=> fetchTasks())
    } else {
      console.log('added');
      console.log(inEditTask);

      url = 'http://127.0.0.1:8000/api/tasks/';
      console.log(url);
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          //'X-CSRFToken':csrftoken,
        },
        body: JSON.stringify({'content':inEditTask}),
      }).then((response) => {
        console.log(response);
        console.log('Added successfully');
        formInputRef.current.value = '';
      })
      .then(()=> fetchTasks())
    }
    
  }

  const handleDelete = (id) => {
    console.log("Deleted");
    var url = `http://127.0.0.1:8000/api/task/${id}/`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        //'X-CSRFToken':csrftoken,
      },
      body: JSON.stringify(updatingTask),
    }).then((response) => {
      console.log(response);
      console.log('deleted successfully');
      formInputRef.current.value = '';
      console.log(response.status);
      if (response.status === 204){
        console.log(response.status);
        setTasks( tasks => 
          tasks.filter(task => task.id!==id)
        )
      }
    })
    .then(()=>fetchTasks())
    
  }

  const handleDone = (id) => {
    console.log("Done");
    var url = `http://127.0.0.1:8000/api/task-doneUndone/${id}/`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        //'X-CSRFToken':csrftoken,
      },
    }).then((response) => {
      console.log(response);
      formInputRef.current.value = '';
      console.log(response.status);
    })
    .then(()=>fetchTasks())
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.tasksBody} >
        <form className='row mb-5' onSubmit={handleAction}>
          <div className='col-8'>
            <input className="form-control form-control" type="text" aria-label=".form-control-lg example" ref={formInputRef} 
              onChange={(e) => handlechange(e)}></input>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary d-inline'>
              {isUpdating && 'Update'}
              {!isUpdating && 'ADD'}
            </button>
          </div>    
        </form>
        <div>
          {tasks.map( (task) => (
              <div className='mt-3 row' key={task.id} >
                {
                  task.done ?
                  <p className='d-inline col-8 text-decoration-line-through'  onClick={() => handleDone(task.id)}>{task.content}</p>
                  : <p className='d-inline col-8'  onClick={() => handleDone(task.id)}>{task.content}</p> 
                }
                <div className='col-2'>
                  <button className='btn btn-primary mr-5' onClick={() => handleEdit(task)}>Edit</button>
                </div>
                <div className='col-2'>
                  <button className='btn btn-danger ml-2 float-right' onClick={() => handleDelete(task.id)}> - </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Tasks;
