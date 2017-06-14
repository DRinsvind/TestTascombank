import React from 'react';
var RequestList = require('./RequestList.jsx');
var ModalForm  = require('./ModalForm.jsx');
const ComponentRequest = React.createClass({
    getInitialState:function(){
        return{
            requests:[]
        };
    },
    componentDidMount: function() {
        var localRequests = JSON.parse(localStorage.getItem('requests'));
        if (localRequests) {
            this.setState({ requests: localRequests });
        }
    },
    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    handleNoteRequest:function(newRequest){
        console.log(newRequest);
        let now = new Date().toLocaleTimeString();
        let newReq = {
            id:this.state.requests.length,
            name:newRequest.name,
            comment:newRequest.comment,
            date:now
        }
        var newRequests = this.state.requests.slice();
        newRequests.push(newReq);
        this.setState({ requests: newRequests }, this._updateLocalStorage);
    },
    render() {
        const {requests} = this.state;
        return (
        <div className="request-list">
            <div className="main-title">
                <h2>Заявки</h2>
                <button type="button" className="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">+ Добавить</button>

            </div>
            <RequestList
            requests={requests}
            />

            <ModalForm
            onClick={this.handleNoteRequest}
            />
        </div>


        );
    },
    _updateLocalStorage: function() {
        var requests = JSON.stringify(this.state.requests);
        localStorage.setItem('requests', requests);
    }

});

export default ComponentRequest;