import Plans from './plans';
import { HELPERS } from './helpers';
import {
	actionsPlans,
	amountValues,
	planPerMonth,
	planPerYear,
	activeToggleClass,
	initialValues,
	planValues,
	businessPlans } from './constants';
import '../stylesheets/main.scss';

// Plans instance
const plans = new Plans(actionsPlans, amountValues, planPerMonth, planPerYear, activeToggleClass, initialValues, planValues);

// Scroll Helper
HELPERS.fixHeaderOnScroll(businessPlans);

// Init APP
plans.init();



