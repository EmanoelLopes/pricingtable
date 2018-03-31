/* DOM Hooks */
export const actionsPlans = [].slice.call(document.querySelectorAll('.switch-plans-actions > .button'));
export const amountValues = [].slice.call(document.querySelectorAll('.plan-type-value .amount'));
export const callToTerms = [].slice.call(document.querySelectorAll('[data-target="termsAndConditionsDialog"]'));
export const businessPlans = document.getElementById('BusinessPlans');
export const planPerMonth = document.getElementById('planPerMonth');
export const planPerYear = document.getElementById('planPerYear');
export const plansRows = document.querySelector('[data-plans="plans-rows"]');
export const plansTypes = document.querySelector('[data-plans="plans-types"]');

export const activeToggleClass = 'button-toggle-active';

/* Inital State */
export const initialValues = [0, 289, 399, 899];
export const planValues = {
	perMonth: [...initialValues],
	perYear: initialValues.map(value => (value * 12) - value)
};





