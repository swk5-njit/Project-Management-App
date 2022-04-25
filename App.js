import React from 'react';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <TaskList
                        title="To Do"
                        id="0"
                        status="incomplete"
                    />
                </div>
            </div>
        </div>
    );
};