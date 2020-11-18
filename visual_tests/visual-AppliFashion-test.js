/*
Author: Enrique Decoss

@package: page-object
E2E Test for Configuring Onboarding, Offboarding and Teams
*/
require('dotenv').config()
import NavAction from '../page-object/Nav-Bar-page'
import Eyes from '@applitools/eyes-testcafe'
import config from './config.json'

const eyes = new Eyes()

fixture `AppliFashion`
.page`${config.baseProd}`
.after(async () => eyes.waitForResults())
.afterEach( async () => eyes.close)

test(`Should Check the main page of the app by using Applitools Eyes`, async t => {
    await t.maximizeWindow()
    await eyes.open({
        appName: 'AppliFashion!',
        testName: 'Test 1',
        browser: [
            { width: 1200, height: 800, name: 'chrome' },
            {width: 1200, height: 800, name: 'firefox'},
            {width: 1200, height: 800, name: 'edgechromium'},
            {width: 1200, height: 800, name: 'safari'},
            // Add mobile emulation devices in Portrait mode
            {deviceName: 'iPhone X', screenOrientation: 'portrait'}],
        batchName: 'Testing Lifecycle',
        t
    })
    await eyes.checkWindow({
        tag: "main page",
        target: 'window',
        fully: true
    })

})

test(`Should Check Filtered Product`, async t => {
    await t.maximizeWindow()
    await eyes.open({
        appName: 'AppliFashion',
        testName: 'Test 2',
        browser: [
            { width: 1200, height: 800, name: 'chrome' },
            {width: 1200, height: 800, name: 'firefox'},
            {width: 1200, height: 800, name: 'edgechromium'},
            {width: 1200, height: 800, name: 'safari'},
            // Add mobile emulation devices in Portrait mode
            {deviceName: 'iPhone X', screenOrientation: 'portrait'}],
        batchName: 'Testing Lifecycle',
        t
    })
    await NavAction.goToColorBlack()
    await eyes.checkWindow({
        tag: 'filter by color',
        target: 'region',
        selector: '#product_grid' 
       })

})

test(`Should Check Product Details`, async t => {
    await t.maximizeWindow()
    await eyes.open({
        appName: 'AppliFashion',
        testName: 'Test 3',
        browser: [
            { width: 1200, height: 800, name: 'chrome' },
            {width: 1200, height: 800, name: 'firefox'},
            {width: 1200, height: 800, name: 'edgechromium'},
            {width: 1200, height: 800, name: 'safari'},
            // Add mobile emulation devices in Portrait mode
            {deviceName: 'iPhone X', screenOrientation: 'portrait'}],
        batchName: 'Testing Lifecycle',
        t
    })
    await NavAction.goToNightPrd()
    await eyes.checkWindow({
        tag: "product details",
        target: 'window',
        fully: true
    })

})



