import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDialog} from '@material/dialog';
import {MDCTextField} from '@material/textfield';
import {MDCChipSet} from '@material/chips';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

document.querySelectorAll('.mdc-checkbox').forEach(el => {
	new MDCCheckbox(el);
})
document.querySelectorAll('.mdc-form-field').forEach(el => {
	new MDCFormField(el);
})

document.querySelectorAll('.mdc-text-field').forEach(el => {
	new MDCTextField(el);
})

document.querySelectorAll('.mdc-button').forEach(el => {
	new MDCRipple(el);
})

document.querySelectorAll('.mdc-dialog').forEach(el => {
	new MDCDialog(el);
})


// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));


