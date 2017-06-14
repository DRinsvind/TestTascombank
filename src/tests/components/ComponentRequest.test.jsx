import React from 'react';
import ReactDOM from 'react-dom';

import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import ComponentRequest from '../../components/ComponentRequest.jsx';

describe('ComponentRequest', () =>{
  it('should exist', ()=>{
    expect(ComponentRequest).toExist();
  });

  describe('render', ()=> {
    it('Should render correctly requests to list from state', ()=>{

      let items = [
        {
          "id":"1",
          "name":"Illia",
          "comment":"test",
          "date":"§12"
        },
        {
          "id":"2",
          "name":"Illia2",
          "comment":"test2",
          "date":"§122"
        }];


      let requestList = TestUtils.renderIntoDocument(<ComponentRequest/>);
      requestList.getInitialState({
          requests: []
      });

      requestList.setState({
        requests: items
      });

      let $el  = $(ReactDOM.findDOMNode(requestList));
      let $renderCards = $el.find('.request');
      expect($renderCards.length).toBe(requestList.state.requests.length);

    });
  });

});