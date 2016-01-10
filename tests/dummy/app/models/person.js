import DS from 'ember-data';
import Validator from '../mixins/model-validator';

export default DS.Model.extend(Validator, {
    name: DS.attr('string'),
    text: DS.attr('string'),
    pill: DS.attr('string'),
    accepted: DS.attr('boolean'),
    favouriteColor: DS.attr('string'),
    favouriteNumber: DS.attr('number'),
    address: DS.attr({defaultValue() {
        return {};
    }}),

    validations: {
        name: {
            presence: true
        },
        text: {
            length: {minimum: 10}
        },
        favouriteNumber: {
            inclusion: {in: [1, 2, 3, 4, 5, 6, 7, 8, 9]}
        },
        favouriteColor: {
            color: true
        },
        accepted: {
            acceptance: true
        },
        pill: {
            inclusion: {in: [
                'red',
                'blue'
            ]}
        },
        'address.country': {
            presence: true
        },
        'address.city': {
            presence: true
        },
        'address.street': {
            presence: true
        }
    }
});
