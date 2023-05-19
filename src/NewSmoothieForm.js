import {useState} from "react"

function NewSmoothieForm({addSmoothie, updateFormData}) {

  const [formSubmitted, setFormSubmitted] = useState(false)

    return (
      <div className="new-smoothie-form">
        <h2>New Smoothie</h2>
        {formSubmitted ? <h1>Thanks for adding a new smoothie suggestion!</h1> :
          <form onSubmit={(event) => {
            addSmoothie(event)
            setFormSubmitted(!formSubmitted)
          }}>
            <input onChange={updateFormData} type="text" name="name" placeholder="Smoothie name" required/>
            <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" required/>
            <input onChange={updateFormData} type="text" name="price" placeholder="Price" required/>
            <button type="submit">Add Smoothie</button>
          </form>}
      </div>
    );
  }
  
  export default NewSmoothieForm;
  