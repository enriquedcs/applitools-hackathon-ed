/*
Author: Enrique Decoss

@package: page-object
All elements and methods for on - OffBoarding
*/

import { Selector, t } from 'testcafe'

class OnoffBoarding {
    constructor() {
        this.onBoardingSteps = Selector('#employee_details_tab > li:nth-of-type(2)')
        this.onBoardingInput = Selector(`input[name='step_name']`)
        this.onBoardingType = Selector('.btn.btn-default.dropdown-toggle')
        this.plusButton = Selector('.input-group-sm .btn-primary')
        this.addLastItem = Selector(`div:nth-of-type(14) .form-horizontal:nth-child(3) [data-toggle]`)
        this.drpDown= Selector('div:nth-of-type(1) > .col-md-6')
        this.drpDownText = Selector(`select[name='item_type'] > option[value='text']`)
        this.createBtn = Selector(`#modal-add-item .btn.btn-primary`)
        //Delete
        this.testStep = Selector('#step_list > li:nth-of-type(14)')
        this.deleteIcon = Selector('div:nth-of-type(14) > .sub-header > a > i')
        this.deleteBtn = Selector(`#modal-delete-step form[method='post']  .btn.btn-danger`)
        
        //Assertion
        this.saveChg = Selector(`div:nth-of-type(2) > div > form[method='post'] > .btn.btn-primary.btn-sm`)
    }

    async goToAddStep(){
        await t.hover(this.onBoardingSteps)
                .click(this.onBoardingSteps)
        await t.click(this.onBoardingInput)
                .typeText(this.onBoardingInput, "test")
                .click(this.plusButton)
        await t.click(this.addLastItem)
        await t.hover(this.drpDown)
                .click(this.drpDown)
                .click(this.drpDownText)
                .click(this.createBtn)
    }
    async deleteOption(){
        await t.hover(this.testStep)
                .click(this.testStep)
        await t.click(this.deleteIcon)
        await t.click(this.deleteBtn)

    }

}

export default new OnoffBoarding