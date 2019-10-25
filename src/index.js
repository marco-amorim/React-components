import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you there?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45 PM"
                comment="Nice day to go to the beach!"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>


            <ApprovalCard>
            <CommentDetail
            author="Alex"
            timeAgo="Today at 6:45 PM"
            comment="I miss you!"
            avatar={faker.image.avatar()}
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail
            author="Jane"
            timeAgo="Today at 7:45 PM"
            comment="You are beautiful!"
            avatar={faker.image.avatar()}
            />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);