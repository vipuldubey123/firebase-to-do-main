"use client";
import {  useEffect,Fragment, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import Show from "@/components/Show";
import Create from "@/components/Create";



const page = () => {
     console.log(useAuthState)
  const [user] = useAuthState(auth);
  const router = useRouter()


   useEffect(() => {
    if (!user) {
      router.push('/signin')
    }
   
   }, [])
  
   const [task, settask] = useState([])

   const [taskname, settaskname] = useState("")
   const [description, setdescription] = useState("")
   const [updateTask, setupdateTask] = useState(null)
 
 
   function updater(idx) {
 
     setupdateTask(idx)
 
     settaskname(task[idx].taskname)
     setdescription(task[idx].description)
 
 
   }
   

   return (
    <Fragment>

      <Create
        task={task}
        settask={settask}
        taskname={taskname}
        description={description}
        settaskname={settaskname}
        setdescription={setdescription}
        updateTask={updateTask}
        setupdateTask={setupdateTask}
      ></Create>

      <Show
        task={task}
        settask={settask}
        updater={updater}
      ></Show>


    </Fragment>
  )
};

export default page
