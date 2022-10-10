import React, { useRef } from 'react'
import classes from './AddMovies.module.css'

const AddMovies = (props) => {
  
    const titleRef = useRef('')
    const textareaRef = useRef('')
    const dateRef = useRef('')

    const submitHandler=(e)=>{
        e.preventDefault()
        const movie = {
            title:titleRef.current.value,
            textarea:textareaRef.current.value,
            date:dateRef.current.value
        }

        props.onAddMovie(movie)

        titleRef.current.value=''
        textareaRef.current.value=''
        dateRef.current.value=''

    }
    return (
      
      <form onSubmit={submitHandler}>
        <div className={classes.formgroup}>
            <label htmlFor='Title'>Title</label>
            <input type="text" ref={titleRef} />
        </div>
        <div className={classes.formgroup}>
            <label  htmlFor='OpeningText'>Opening Text</label>
            <textarea type="text" ref={textareaRef}/>
        </div>
        <div className={classes.formgroup}>
            <label  htmlFor='date'>Release Date</label>
            <input type="date" ref={dateRef} />
        </div>
        <button >Add movies</button>
      </form>
      
    )
  }

export default AddMovies
