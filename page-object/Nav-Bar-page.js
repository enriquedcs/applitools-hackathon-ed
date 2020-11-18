/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Nav Bar action
*/

import { Selector, t } from 'testcafe'

class NavAction {
    constructor() {
        this.blackColor = Selector('#LABEL__containerc__104')
        this.filterBtn = Selector('#filterBtn')
        
        this.appAirProd = Selector('#IMG__imgfluid__215')
        
        //Assertion
        this.productGrid = Selector('#product_grid')
        this.appAirDsp = Selector('#DIV__collg__69')
    }

    async goToColorBlack(){
        await t.hover(this.blackColor)
                .click(this.blackColor)
                .click(this.filterBtn)
        //Assertion
        await t.expect(this.productGrid.exists).ok()
    }

    async goToNightPrd(){
        await t.hover(this.appAirProd)
                .click(this.appAirProd)
        //Assertion
        await t.expect(this.appAirDsp.exists).ok()
    }

}

export default new NavAction