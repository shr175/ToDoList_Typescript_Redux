import React, { useState } from "react";
import { connect } from "react-redux";

const style = {
  border: "solid 2px",
  padding:"15px",
  width:"160px",

};

interface Props {
    tasks : []
    // submit : Function(tittle : string , desc : string, id : number){
    //   return submit
    // }

    submit : Function
    delete : Function
  } 

  interface RootState {
    tasks: []
  } 

function ToDoList(props : Props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id,setId]= useState(1);

  function handleTitle(e : React.ChangeEvent<HTMLInputElement>):void {
 
    setTitle((e.target as HTMLInputElement).value);
    console.log("handle tittle reached")
    
  }

  function handleDesc( e : React.ChangeEvent<HTMLTextAreaElement>) {
    
    setDesc((e.target as HTMLTextAreaElement).value);
    console.log("handle desc reached")
  }

  const handleSubmit = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   
    e.preventDefault();
    console.log("handlesubmit")

    if (!title || !desc) {
      window.alert("Please enter title and desc");
    } else {
      props.submit(title, desc,id);
      console.log("prop for submit is passed");
      setId(id+1);
      console.log("incrementing id");
      setTitle("");
      setDesc("");
      console.log("reached");


    }
  };

  const handleDelete = (deleteId:string) => {
    // e.preventDefault();

    props.delete(deleteId);
    console.log("props for delete  is passed")
  };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     props.update(title, desc);
//   };

// 
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <div className="top">
            <h1>
              <strong>Tittle</strong>
            </h1>
            <input
              type="Text"
              className="form-control"
              onChange={handleTitle}
              value={title}
              id="title"
              placeholder="text"
            />
          </div>

          <div className="bottom">
            <h1>
              <strong>Description</strong>
            </h1>
            <textarea
              className="form-control"
              onChange={handleDesc}
              value={desc}
              id="desc"
            //   rows={8}
            ></textarea>
          </div>

          <button
            type="submit"
            className="button-style"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>

          
        </div>
        <div className="table">
          <table>
            <thead>
              <tr className="org">
                <td style={style}>
                  <strong>Title</strong>
                </td>
                <td style={style}>
                  <strong>Desc</strong>
                </td>
                <td style={style}>
                  <strong>Action</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {props.tasks?.map((item:any,index:number) => (
                <tr key = {item.id}>
                  <td style={style}>{item.title}</td>
                  <td style={style}>{item.desc}</td>

                  <td style={style}>
                    <div className="action-style">
                     
                      {/* <button
                        type="update"
                        className="button-style11"
                        onClick={(e) => handleUpdate(e)}
                      >
                        Update
                      </button> */}

                      <button
                        // type="delete"
                        className=" button-style11"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>

                    </div>
                  </td>
                  <td style={style}>{index}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state : RootState) => {
  console.log("mapstate reached")
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch : Function) => {
  console.log("mapdispatch  reached")
  return {
    submit: (title : string, desc : string ,id : number) =>
      dispatch({ type: "submit_task", payload: {title, desc ,id} }),

    delete: (id : number) =>
      dispatch({ type: "delete_task", payload: {id} }),


  };
};



export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

