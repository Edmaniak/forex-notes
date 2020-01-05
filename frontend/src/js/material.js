import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDialog} from '@material/dialog';
import {MDCTextField} from '@material/textfield';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));


const textField = new MDCTextField(document.querySelector('.mdc-text-field'));