import {connect} from 'react-redux';

interface RootState {
    totalTasks: number,
    tasks : string,
  } 

  interface Props {
    totalTasks?: number,
  } 

function Navbar(props : Props){
  return (
    <div>
        <div className="body">
   <div className="wrapper">
      <div className="section">
          <div className="top_navbar">
          
          <nav>  
              <ul className="container">  
                 <li>TASK</li>  
                 <li>Tittle</li>  
                 <li>Description</li>  
                 <li>+ Create</li>
                 <li>Total Tasks{props.totalTasks}</li>
              </ul> 
            </nav>
             
          </div>
           
      </div>
  </div>
  
  </div>
    </div>
  )
};

function mapStateToProps(state : RootState){
return{
  totalTasks : state.tasks?.length,
}

};


export default connect(mapStateToProps,null)(Navbar);

// export type RootState = ReturnType<typeof store.getState>