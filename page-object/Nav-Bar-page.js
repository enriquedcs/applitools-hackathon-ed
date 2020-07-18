/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Nav Bar action
*/

import { Selector, t } from 'testcafe'

class NavBarAction {
    constructor() {
        this.dashboardIcon = Selector(`li:nth-of-type(1) > a`)
        this.employeesIcon = Selector('li:nth-of-type(2) > a')
        this.calendarIcon = Selector('li:nth-of-type(3) > a')
        this.recrutingIcon = Selector('li:nth-of-type(4) > a')
        this.reportsIcon = Selector('li:nth-of-type(5) > a')
        this.payrollIcon = Selector('li:nth-of-type(6) > a')
        this.importsIcon = Selector('li:nth-of-type(7) > a')
        this.settingsIcon = Selector('li:nth-of-type(8) > a')
        //Setting
        this.on_offBoarding = Selector('li:nth-of-type(14)')
        //Assertion
    }

    async navigateToIcons(icon){
        icon == "dashboard" && await t.click(this.this.dashboardIcon)
        icon == "employee" && await t.click(this.employeesIcon)
        icon == "calendar" && await t.click(this.calendarIcon)
        icon == "recruiting" && await t.click(this.recrutingIcon)
        icon == "report" && await t.click(this.reportsIcon)
        icon == "payroll" && await t.click(this.payrollIcon)
        icon == "import" && await t.click(this.importsIcon)
        icon == "settings" && await t.click(this.settingsIcon)
    }

}

export default new NavBarAction