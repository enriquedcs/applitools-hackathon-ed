/*
Author: Enrique Decoss

@package: page-object
All elements and methods for on - OffBoarding
*/

import { Selector, t } from 'testcafe'

class OnoffBoarding {
    constructor() {
        this.onBoardingSteps = Selector('#employee_details_tab > li:nth-of-type(2)')
        this.offBoardingSteps = Selector('#employee_details_tab > li:nth-of-type(4)')
        this.groups = Selector('#employee_details_tab > li:nth-of-type(5)')
        this.inputStep = Selector(`input[name='step_name']`)
        this.inputTeam = Selector(`input[name='team_name']`)
        this.onBoardingType = Selector('.btn.btn-default.dropdown-toggle')
        this.drpType = Selector('.btn.btn-default.dropdown-toggle')
        this.emailType = Selector('.dropdown-menu.select-step-type > li:nth-of-type(2) > a')
        this.plusButton = Selector('.input-group-sm .btn-primary')
        //Item
        this.addLastItem = Selector(`div:nth-last-of-type(1) > div > form[method='post'] > a`)
        this.drpDown= Selector('div:nth-of-type(1) > .col-md-6')
        this.createBtn = Selector(`#modal-add-item .btn.btn-primary`)
        //Text 
        this.textArea = Selector('div:nth-last-of-type(1) [placeholder]')
        //Download 
        
        
        //Employee-attribute 
        
        
        //Profile-picture 
        
        
        //Checkbox 
        
        
        
        //Enter-text 
        
        
        
        //Enter-url 
        
        

        //Upload

        //Groups
        this.delGroups = Selector(`.sub-header [data-toggle='modal']:nth-child(2)`)
        this.deleteBtnTeam = Selector(`#modal-delete-team form[method='post']  .btn.btn-danger`)

        //Delete
        this.testStep = Selector('#step_list > li:nth-last-of-type(1)')
        this.deleteIcon = Selector('div:nth-last-of-type(1) > .sub-header > a > i')
        this.deleteBtn = Selector(`#modal-delete-step form[method='post']  .btn.btn-danger`)
        
        //Assertion
        this.saveChg = Selector(`div:nth-of-type(2) > div > form[method='post'] > .btn.btn-primary.btn-sm`)
    }

    async goToSteps(varname){

        varname == "on" && await t.click(this.onBoardingSteps)
        varname == "off" && await t.click(this.offBoardingSteps)
        varname == "group" && await t.click(this.groups)

    }
    
    async goToAddStep(name, input){
        input == "step" && await t.typeText(this.inputStep, "X"+name)
        input == "team" && await t.typeText(this.inputTeam, "X"+name)
        await t.click(this.plusButton)
    }
    async goToAddItem(item){
        await t.click(this.addLastItem)
        await t.hover(this.drpDown)
                .click(this.drpDown)
                .click(Selector('select[name=\'item_type\'] > option[value='+item+']'))
                .click(this.createBtn)
    }
    async deleteOption(){
        await t.hover(this.testStep)
                .click(this.testStep)
        await t.click(this.deleteIcon)
        await t.click(this.deleteBtn)
    }
    async deleteGroup(){
        await t.click(this.delGroups)
        await t.click(this.deleteBtnTeam)
    }

}

export default new OnoffBoarding