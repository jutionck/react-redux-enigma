import React from 'react';
import { shallow } from 'enzyme';
import App from "../App";
import Template from "../template/Template";

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if(state) wrapper.setState(state)
    return wrapper;
};

const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

describe("App", () => {
    it('should in <App/> component tobe one <Tamplate />', function () {
        const wrapper = setup()
        expect(wrapper.find(Template).length).toBe(1)
    })
});