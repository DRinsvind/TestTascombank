
import React from 'react';
import ReactDOM from 'react-dom';

import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';
import ComponentRequest from '../../components/ComponentRequest.jsx';

import ModalForm from '../../components/ModalForm.jsx';

describe('ModalForm', () => {
    it('should exist', () => {
        expect(ModalForm).toExist();
    });


    describe('render validation', ()=> {
        it('Form validation is work', ()=>{

            let app = TestUtils.renderIntoDocument(<ComponentRequest/>);
            let $el  = $(ReactDOM.findDOMNode(app));
            let $button = $el.find('.go');
            TestUtils.Simulate.click($button[0]);
            let $err = $el.find('.err');
            // expect('Заполните пожалуйста все поля').toBe('Заполните пожалуйста все поля');
            expect($err[0].textContent).toBe('Заполните пожалуйста все поля');

        });

    });
});