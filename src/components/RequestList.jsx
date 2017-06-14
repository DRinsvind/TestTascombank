import React from 'react';

const RequestList = React.createClass({





    render() {
        const {requests} = this.props;
        return (
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Комментарий</th>
                        <th>Дата</th>
                    </tr>


                        { requests.map(request=>
                            <tr key={request.id} className="request">
                                <td>{request.id}</td>
                                <td>{request.name}</td>
                                <td>{request.comment}</td>
                                <td>{request.date}</td>
                            </tr>
                            ) }
                        </tbody>
                        

                </table>
               
            
        );
    }
});

export default RequestList;