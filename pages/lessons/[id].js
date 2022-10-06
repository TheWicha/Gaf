import React from "react";
import styles from './lesson.module.scss'
import { getExerciseOne, getExerciseTwo } from "../api/helpers";


//2. create list of paths for each posts

export const getStaticPaths = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const data = await res.json();
  
    const paths = data.map((post) => {
      let stringId = post.id.toString();
      return {
        params: { id: stringId },
      };
    });
  
    return {
      paths,
      fallback: false, //later to inplement, kind of 404 page if paths are broken/bugged
    };
  };

//3. get single page data
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await res.json();
  
    return {
      props: {
        lesson: data,
      },
    };
  };
  
  


const SingleLesson = ({lesson}) => {
    return <div className={styles.container}>
        <p>{`I'm lesson ${lesson.id} !`}</p>

        {lesson.id && getExerciseOne(lesson)}
        {lesson.id && getExerciseTwo(lesson)}
    </div>
} 


export default SingleLesson