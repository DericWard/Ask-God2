import { useState } from 'react'


const FormSection = ({ generateResponse }) => {

    const [newQuestion, setNewQuestion] = useState('');

    return (
        <div className="form-section">

            <textarea
                rows="5"
                className="form-control"
                placeholder="Ask God anything!"
                value={newQuestion}
                onChange={(event) => setNewQuestion(event.target.value)}>
            </textarea>

            <button className="btn" onClick={() => generateResponse(newQuestion, setNewQuestion)}>
                Ask God Now!
            </button>
            
        </div>
    );
};

export default FormSection;