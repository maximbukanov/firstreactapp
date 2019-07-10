import { observable, computed, action, values } from 'mobx';

class PersonalData {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable personalData = getPersonalData();

    @computed get personalDataIsInvalid() {
        //Direct Observable manipulation [values] 
        //https://mobx.js.org/refguide/object-api.html
        const result = values(this.personalData).filter(({ ...item }) => {
            return item.hasErrors === true || item.value.toString() === "";
        });
        return result.length > 0 ? "disabled" : false;
    }

    @action change(name, value) {
        const input = this.personalData[name];
        const pattern = this.personalData[name].pattern;
        input.value = value;
        if (pattern) {
            const test = new RegExp(pattern).test(value);
            input.hasErrors = !test;
        }
    }
}

function getPersonalData() {
    return {
        name: {
            label: 'Name',
            value: '',
            type: 'text',
            pattern: null,
            hasErrors: false,
            testRegexpError: null
        },
        email: {
            label: 'Email',
            value: '',
            type: 'email',
            pattern: '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$',
            hasErrors: false,
            testRegexpError: 'Your email is not correct'
        },
        phone: {
            label: 'Phone',
            value: '',
            type: 'text',
            pattern: null,
            hasErrors: false,
            testRegexpError: null
        }
    }
}

export default PersonalData;