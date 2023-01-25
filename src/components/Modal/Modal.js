import React from 'react';
import {useForm} from 'react-hook-form';
import './modal.css';

function Modal({active, setActive}) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };

  const clear = () => {
    reset();
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
        <h1>Register form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input'>
          <label>Name:</label>
            <input  {...register("name", {
              required: "Name is require field!",
              minLength: {
                value: 3,
                message: "Min length: 3"
              }
            })}
              placeholder="Name"
            />
            <div className='inputError'>{errors?.name && <span>{errors?.name?.message || "Error!"}</span>}</div>
          </div>
          <div className='input'>
          <label>Email:</label>
            <input  {...register("email", {
              required: "Email is require field!",
              pattern: {
                value: 
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter valid email!"
              },
              minLength: {
                value: 5,
                message: "Min length: 5"
              }
            })}
              placeholder="Email"
            />
            <div className='inputError'>{errors?.email && <span>{errors?.email?.message || "Error!"}</span>}</div>
          </div>
          <div className='input'>
          <label>Password:</label>
            <input  {...register("password", {
              required: "The field is mandatory",
              minLength: {
                value: 10,
                message: "Min length: 10"
              }
            })}
              placeholder="Password"
            />
            <div className='inputError'>{errors?.password && <span>{errors?.password?.message || "Error!"}</span>}</div>
          </div>
          <div className="buttons">
            <button disabled={!isValid}>Send</button>
            <button onClick={clear}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;