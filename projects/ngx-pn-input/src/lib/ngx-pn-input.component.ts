import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CountryListConstant} from './constants/country-list.constant';
import {ShortNumberInfo, PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';
import ComponentStyles from './ngx-pn-input-styles.model';

const DEFAULT_DIALING_CODE = '+58';
const DEFAULT_COUNTRY_FLAG = 've';
const DEFAULT_INACTIVE_UNDERLINE_COLOR = '#ccc';
const DEFAULT_ACTIVE_UNDERLINE_COLOR = '#999';
const DEFAULT_FONT_COLOR = '#666';
const DEFAULT_FONT_SIZE = '15px';

@Component({
    selector: 'ngx-pn-input',
    templateUrl: './ngx-pn-input.component.html',
    styleUrls: ['./ngx-pn-input.component.sass'],
})
export class NgxPnInputComponent implements OnInit {
    @ViewChild('container') container: ElementRef;
    @ViewChild('phoneNumberInput') phoneNumberInput: ElementRef;
    @Input() phone: string;
    @Input() code: string;
    @Input() basicStyle: ComponentStyles = new ComponentStyles();
    @Output() submitPhoneData = new EventEmitter<any>();

    countryList = [];
    shortInfo;
    showCountryList = false;
    userCountryNameInput = '';
    filter = {
        dialingCode: DEFAULT_DIALING_CODE,
        countryFlag: DEFAULT_COUNTRY_FLAG
    };
    PNF;
    phoneNumber = '';
    phoneUtil;

    constructor() {
    }

    ngOnInit() {
        this.countryList = CountryListConstant.list;
        this.PNF = PhoneNumberFormat;
        this.phoneUtil = PhoneNumberUtil.getInstance();
        this.shortInfo = ShortNumberInfo.getInstance();

        this.getBasicStyle();
    }

    public getBasicStyle() {
        this.basicStyle.inactiveUnderlineColor = this.basicStyle.inactiveUnderlineColor || DEFAULT_INACTIVE_UNDERLINE_COLOR;
        this.basicStyle.activeUnderlineColor = this.basicStyle.activeUnderlineColor || DEFAULT_ACTIVE_UNDERLINE_COLOR;
        this.basicStyle.fontColor = this.basicStyle.fontColor || DEFAULT_FONT_COLOR;
        this.basicStyle.fontSize = this.basicStyle.fontSize || DEFAULT_FONT_SIZE;
    };

    public displayCountryList() {
        this.showCountryList = !this.showCountryList;
    }

    @HostListener('document:click', ['$event'])
    public hideDropdown(event) {
        if (!this.container.nativeElement.contains(event.target)) {
            this.showCountryList = false;
        }
    }

    public activeUnderline() {
        this.phoneNumberInput.nativeElement.style.borderBottomColor = this.basicStyle.activeUnderlineColor;
    }

    public inactiveUnderline() {
        this.phoneNumberInput.nativeElement.style.borderBottomColor = this.basicStyle.inactiveUnderlineColor;
    }

    public handlePhoneInput(event) {
        if (event.target.value && event.target.value.length > 2) {
            try {
                const number = this.phoneUtil.parseAndKeepRawInput(event.target.value, this.filter.countryFlag.toUpperCase());
                // Formatting phone number by a international format
                let formattedNumber = this.phoneUtil.format(number, this.PNF.INTERNATIONAL);
                // The international format set the dialing code, then, we have to remove it (with a blank space), because we set it before as an input
                this.phoneNumber = formattedNumber.replace(`${this.filter.dialingCode} `, '');
                this.emitPhoneData(formattedNumber, this.phoneUtil.isValidNumberForRegion(number, this.filter.countryFlag.toUpperCase()));
            } catch (e) {
                this.emitPhoneData(null, false);
            }
        } else {
            this.emitPhoneData(null, false);
        }
    }

    public selectCountry(dialingCode, isoCode) {
        this.filter.dialingCode = `+${dialingCode}`;
        this.filter.countryFlag = isoCode;
        this.displayCountryList();
    }

    public searchCountryByInput(event) {
        if (event.target.value) {
            this.userCountryNameInput = event.target.value.toString();
            let userInput = this.userCountryNameInput.toUpperCase();
            this.countryList = [];
            for (let country of CountryListConstant.list) {
                // Decompose string in simple characters and accents. Eg: Crème -> C r e ̀  m e
                const countryName = country['name'].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                userInput = userInput.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                if (countryName.includes(userInput)) {
                    this.countryList.push(country);
                }
            }
        } else {
            this.userCountryNameInput = '';
            this.countryList = CountryListConstant.list;
        }
    }

    public emitPhoneData(phone, valid) {
        this.submitPhoneData.emit({phone, valid});
    }

    public onMouseOver(event){
        if(event.target.classList.contains('option')){
            event.target.style.cursor = 'pointer';
            event.target.style.background = this.basicStyle.optionHover || '#eee';
        }
    }

    public onMouseLeave(event){
        if(event.target.classList.contains('option')){
            event.target.style.cursor = 'default';
            event.target.style.background = 'none';
        }
    }
}
