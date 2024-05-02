import { useState, useRef} from "react";
import { MdAddCircleOutline } from "react-icons/md";

function AddTodo({handleadd}) {

  // const [todoName,newname] = useState('');
  // const [todoDate,newdate] = useState('');

  // const handlename = (e) =>{
  //   newname(e.target.value)
  // }

  // const handledate = (e) =>{
  //  newdate(e.target.value)
  // }


  //useref/...........................
 
  const nameofelement = useRef();
  const dateofelement = useRef();
    const sendtoparent =(e) =>{
    e.preventDefault();
    const todoName = nameofelement.current.value;
    const todoDate = dateofelement.current.value;
    nameofelement.current.value = '';
    dateofelement.current.value = '';
    handleadd(todoName,todoDate)
    
  }

    return (
      <div className="container text-center">
        <form className="row kg-row" onSubmit={sendtoparent}>
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" ref={nameofelement}/>
          </div>
          <div className="col-4">
            <input type="date" ref={dateofelement} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button"
              
>           <MdAddCircleOutline></MdAddCircleOutline>
              
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default AddTodo;