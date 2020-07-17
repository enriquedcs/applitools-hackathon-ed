/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Login page
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
        //Assertion
    }

}

export default new NavBarAction