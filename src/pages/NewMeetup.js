import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useNavigate();

    function addMeetupHandler(meetupData){
       fetch('https://react-getting-started-7fdff-default-rtdb.firebaseio.com/meetups.json',
           {
               method: 'POST',
               body: JSON.stringify(meetupData),
               headers:{
                   'Content-Type': 'application/json'
                }
           }
       ).then(() => {
           history('/');
       });
    }
    return (
        <section>
            <h1>New Meetups Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}
export default NewMeetupPage;

