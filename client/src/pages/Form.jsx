import '../styles/From.css';

export default function Form(){
    return(
        <div className='from'>
            <h1>Post a Message</h1>
            <form action="http://localhost:6969/messages/new" method="POST">

                <div className="form-group">
                    <label htmlFor="user">Username</label>
                    <input id="user" name="user" placeholder="Enter your username" type="text" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="text">Message</label>
                    <textarea id="text" name="text" placeholder="Write your message" rows="4" required></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
