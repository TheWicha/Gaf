import ExerciseOne from "../../components/Exercises/ExerciseOne";
import ExerciseTwo from "../../components/Exercises/ExerciseTwo";



export const getExerciseOne = lesson => {
  switch(lesson.id){
      case 10:
      case 11:
      case 12:
      case 22:
        return <ExerciseOne />
  }
}

export const getExerciseTwo = lesson => {
  switch(lesson.id){
      case 10:
      case 15:
      case 17:
          return <ExerciseTwo />
  }
}
