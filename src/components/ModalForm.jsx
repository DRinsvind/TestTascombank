import React from 'react';

const ModalForm = React.createClass({

    validateForm:function(e){
        e.preventDefault();
        if(!this.refs.name.value || !this.refs.comment.value){
            this.refs.err.style.display = 'block';
        }
        else{

            let data = {
                name:this.refs.name.value,
                comment:this.refs.comment.value,
            }
            this.refs.close.click();
            this.props.onClick(data);
            this.refs.name.value = '';
            this.refs.comment.value  = '';
            this.refs.err.style.display = 'none';
        }
    },
    render() {
        return (
                <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <form action="" id="form" onSubmit={this.validateForm}>
                                <div className="form-group">
                                    <label htmlFor="nameOfUser">Ваше Имя</label>
                                    <input type="text" ref="name"  className="form-control" id="nameOfUser" placeholder="Введите ваше Имя"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">Ваш комментарий</label>
                                    <textarea className="form-control" ref='comment' rows="3"  id="comment" placeholder="Ведите ваш коментарий"></textarea>
                                </div>
                                <div className="alert alert-danger err" role="alert" ref="err" id="err">Заполните пожалуйста все поля</div>
                                <button type="button" id='closeButton' ref='close' className="btn btn-default " data-dismiss="modal">Закрыть</button>
                                <button type="submit" id='requestButton'  className="btn btn-default go" >Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
                 );
            },

});

export default ModalForm;