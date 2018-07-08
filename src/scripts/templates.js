export const plansTypesAndAmount = (planType, value, bestSeller = false) => {
	const showTermsButton = `
		<button class="plan-type-call-to-action" data-target="termsAndConditionsDialog">
			Assinar
		</button>
	`;

	return `
		<div class="plan-type ${(bestSeller) ? 'best-seller': ''}">
			<h3 class="plan-type-title">${planType}</h3>
			<span class="plan-type-value">
				<span>R$</span>
				<span class="value">
					<strong class="amount">${value}</strong>
				</span>
			</span>
			${showTermsButton}
		</div>
	`;
};

export const pricingRow = (tooltip, description, free, basic, plus, premium) => {
	const empty = '';

	function checkCircle(item) {
		if(item.toLowerCase().indexOf('sim') > -1) {
			return '<i class="material-icons">check_circle</i>';
		} else if (item.toLowerCase().indexOf('não') > -1) {
			return empty;
		}

		return item;
	}

	return `
		<div class="plan-row">
			<div class="plan-row__description">
				<span>${description}</span>
				${tooltip !== null ? '<i class="material-icons">help_outline</i>' : ''}
			</div>
			<div class="plan-row__table">
				<div class="plan-row__table-cell">
					<span>
						${checkCircle(free)}
					</span>
				</div>
				<div class="plan-row__table-cell">
					<span>
						${checkCircle(basic)}
					</span>
				</div>
				<div class="plan-row__table-cell">
					<span>
						${checkCircle(plus)}
					</span>
				</div>
				<div class="plan-row__table-cell">
					<span>
						${checkCircle(premium)}
					</span>
				</div>
			</div>
		</div>
	`;
};

export const emptyPlans = () => {
	return `
		<div class="plan-row">
			<p class="no-plans">Não há planos a serem exibidos.</p>
		</div>
	`;
};

