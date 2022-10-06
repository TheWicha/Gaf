import Link from 'next/link'
import React from 'react';
import styles from './Lessons.module.scss'


const Lessons = ({lessons}) => {
  
    const lessonsList = React.useMemo(() => {
        return (
            lessons.map(lesson => (
              <Link  href={'/lessons/' + lesson.id} key={lesson.id}>
                <div className={styles.link}> Lesson number: {lesson.id}</div>
              </Link>
            ))
        )
    }, [lessons])


  return (
      <div className={styles.container}>
        {lessonsList}
      </div>
  )
}

export default Lessons