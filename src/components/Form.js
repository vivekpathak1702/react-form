import "./Form.css";

const Form = (props) => {

    console.log(props.id)
  return (
    <div className="form">
      <label>Username</label>
      <input
        type="text"
        placeholder={props.placeholder}
       name={props.name}
      />
    </div>
  );
};

export default Form;
