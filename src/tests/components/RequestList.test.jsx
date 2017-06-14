import React from 'react';
import ReactDOM from 'react-dom';

import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import RequestList from '../../components/RequestList.jsx';

describe('RequestList', () => {
    it('should exist', () => {
        expect(RequestList).toExist();
    });

});