import { Configuration, OpenAIApi } from 'openai';

import FormSection from '../assets/components/FormSection/FormSection.jsx';
import AnswerSection from '../assets/components/AnswerSection/AnswerSection.jsx';

import { useState } from 'react';

const Ask = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    let options = {
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['/'],
    };

    let completeOptions = {
      ...options,
      prompt: newQuestion,
    };

    const response = await openai.createCompletion(completeOptions);

    console.log(response.data.choices[0].text);

    if (response.data.choices) {
      setStoredValues([
        {
          question: newQuestion,
          answer: response.data.choices[0].text,
        },
        ...storedValues,
      ]);
      setNewQuestion('');
    }
};

  return (

    <div>

        <div className='header-section'>
          <h1>ASK GOD!</h1>
        </div>

      <FormSection generateResponse={generateResponse} />

      <AnswerSection storedValues={storedValues} />

    </div>
  );
};

export default Ask;


//     // apiKey: process.env.REACT_APP_OPENAI_API_KEY,





// import { Configuration, OpenAIApi } from 'openai';
// import FormSection from '../assets/components/FormSection/FormSection.jsx';
// import AnswerSection from '../assets/components/AnswerSection/AnswerSection.jsx';
// import { useState } from 'react';
// import './Ask.css';

// const Ask = () => {
//   const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
//   const configuration = new Configuration({ apiKey });
//   const openai = new OpenAIApi(configuration);
//   const [storedValues, setStoredValues] = useState([]);

//   const generateResponse = async (newQuestion, setNewQuestion) => {
//     let options = {
//       model: 'text-davinci-003',
//       temperature: 0,
//       max_tokens: 100,
//       top_p: 1,
//       frequency_penalty: 0.0,
//       presence_penalty: 0.0,
//       stop: ['/'],
//     };
//     let completeOptions = {
//       ...options,
//       prompt: newQuestion,
//     };
//     const response = await openai.createCompletion(completeOptions);
//     console.log(response.data.choices[0].text);
//     if (response.data.choices) {
//       setStoredValues([
//         {
//           question: newQuestion,
//           answer: response.data.choices[0].text,
//         },
//         ...storedValues,
//       ]);
//       setNewQuestion('');
//     }
//   };

//   return (
//     <div>
//       <div className='header-section'>
//         <h1>ASK GOD!</h1>
//       </div>
//       <FormSection generateResponse={generateResponse} />
//       <AnswerSection storedValues={storedValues} />
//     </div>
//   );
// };

// export default Ask;