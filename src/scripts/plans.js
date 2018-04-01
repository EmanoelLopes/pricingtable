import { pricingRow, emptyPlans, plansTypesAndAmount } from './templates';
import { plansRows, plansTypes, modalOverlay } from './constants';
import 'isomorphic-fetch';
import Promise from 'promise-polyfill';

if (!window.Promise) {
	window.Promise = Promise;
}

export default class Plans {
	constructor(
		actionsPlans,
		amountValues,
		planPerMonth,
		planPerYear,
		activeToggleClass,
		initialValues,
		planValues
	) {
		this.actionsPlans = actionsPlans;
		this._amountValues = amountValues;
		this.planPerMonth = planPerMonth;
		this.planPerYear = planPerYear;
		this.activeToggleClass = activeToggleClass;
		this.initialValues = initialValues;
		this.planValues = planValues;
	}

	// Methods
	setPlan(element, sibling) {
		element.addEventListener('click', e => {
			sibling.classList.remove(this.activeToggleClass);
			sibling.setAttribute('data-active', false);
			element.classList.add(this.activeToggleClass);
			element.setAttribute('data-active', true);
			e.target.id === 'planPerYear'
				? this._amountValues.map((value, index) => { value.textContent = this.planValues.perYear[index]; })
				: this._amountValues.map((value, index) => { value.textContent = this.planValues.perMonth[index]; });
		});
	}

	showTermsAndConditionalsDialog(element) {
		return {
			open: () => {
				document.body.classList.add('modal-open');
				element.classList.add('show-dialog');
			},
			close: () => {
				document.body.classList.remove('modal-open');
				element.classList.remove('show-dialog');
			}
		};
	}

	renderPlansRows() {
		const endpoint = '../../api/mock.json';
		const headers = new Headers();
		headers.set('Content-Type', 'application/json');
		const config = {
			method: 'GET',
			headers,
			redirect: 'follow'
		};

		fetch(endpoint, config)
			.then((response) => {
				(!response.ok)
					? plansRows.innerHTML = emptyPlans()
					: response.json().then((data) => {

						const plansData = data.planos.map((plan, index) => {
							const isBestSeller = (index === 2) ? true : false;
							return plansTypesAndAmount(plan.descricao, plan.valor, isBestSeller);
						}).join('');

						const rowData = data.caracteristicas.map((item) => {
							// This is bad but, its for now
							/* @TODO: Refeactor this part of code */
							return pricingRow(item.toolTip, item.descricao, item.caracteristicasPlanos[0].descricao, item.caracteristicasPlanos[1].descricao, item.caracteristicasPlanos[2].descricao, item.caracteristicasPlanos[3].descricao);
						}).join('');

						plansTypes.innerHTML = plansData;
						plansRows.innerHTML = rowData;

						const signInButtons = [].slice.call(document.querySelectorAll('[data-target="termsAndConditionsDialog"]'));

						signInButtons.map((button) => {
							button.addEventListener('click', () => {
								this.showTermsAndConditionalsDialog(modalOverlay).open();
							});
						});

						modalOverlay.addEventListener('click', () => {
							this.showTermsAndConditionalsDialog(modalOverlay).close();
						});
					});
			})
			.catch((err) => {
				throw new Error(err);
			});
	}

	init() {
		this.setPlan(this.planPerMonth, this.planPerYear);
		this.setPlan(this.planPerYear, this.planPerMonth);
		this.renderPlansRows();
	}
}


