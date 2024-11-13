import React, { useState } from 'react';
import '../styles/ScheduleChat.css';

const ScheduleChat = () => {
    const [user, setUser] = useState('');
    const [expert, setExpert] = useState('');
    const [scheduledDateTime, setScheduledDateTime] = useState('');
    const [message, setMessage] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleScheduleChat = async (e) => {
        e.preventDefault();

        const chatData = {
            user,
            expert,
            scheduledDateTime,
            message,
            isAnonymous,
        };

        setUser('');
        setExpert('');
        setScheduledDateTime('');
        setMessage('');
        setIsAnonymous(false);

        alert('Scheduled Data Sent Successfully!');
    };

    return (
        <div className="schedulechat">
            <div className="schedulechat_header">
                <h1>Schedule a Chat</h1>
                <h4>
                    Schedule a chat with a psychology expert to get help, help someone, or ask questions.
                </h4>
            </div>
            <div className="schedulechat_container">
                <div className="box">
                    <div className="schedulechat_left">
                        <img src="SchedueleChat.jpg" alt="Background" />
                    </div>
                    <div className="schedulechat_right">
                        <form onSubmit={handleScheduleChat}>
                            <div className="form-group">
                                <label htmlFor="user">User</label>
                                <input
                                    type="text"
                                    placeholder="User"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expert">Expert Profession</label>
                                <input
                                    type="text"
                                    placeholder="Expert Profession"
                                    value={expert}
                                    onChange={(e) => setExpert(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="scheduledDateTime">Scheduled Date and Time</label>
                                <input
                                    type="datetime-local"
                                    placeholder="Date"
                                    value={scheduledDateTime}
                                    onChange={(e) => setScheduledDateTime(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button className="submit" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleChat;