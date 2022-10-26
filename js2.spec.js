describe('Verify create regular appointment successfully', async () => {
    it ('check create appointment fail', async ()=>{
        // Locators & Data
        const locatorOfLoginPage = {
            usernameInputField: '//*[@id="username-:0-text"]',
            passwordInputField: '//*[@id="password-:1-text"]',
            loginButton: '.login-button'
        }
        const account = {
            username: 'long1 ',
            password: '1'
        }
        const usernameField = await $(locatorOfLoginPage.usernameInputField)
        const passwordField = await $(locatorOfLoginPage.passwordInputField)
        const loginButton = await $(locatorOfLoginPage.loginButton)
        const garoonBtn = await $('a[href="/g/"]')
        const appointment = {
                title: 'This is WDIO testing',
            }
        const createdIcon = await $('//*[@id="gw_1_cal_tbody"]/tr[2]/td[2]/div[1]/a')
        const appointmentKind = await $('//*[@id="schedule/add"]/div[1]/span[2]')
        const start_day = await $('//*[@id="start_day"]')
        const subjectTiltle = await $('[title="Appointment title"]')
        const addBtn = await $('//*[@id="schedule_submit_button"]/a')
        const msgBox = await $('//*[@id="msgbox"]')
        const errorMsg = await $('//*[@id="msgbox"]/div[2]/div/table/tbody/tr/td/div[2]/span')
        
        // Open Scheduler url
        await browser.url("https://internship-qa-2.cybozu-dev.com/g/schedule/index.csp?")
        
        // Login
        await usernameField.setValue(account.username)
        await passwordField.setValue(account.password)
        await loginButton.click()
        await garoonBtn.click()
        browser.pause(3000);
        

        await expect(createdIcon).toBeDisplayed()
        await expect(createdIcon).toBeClickable()
        await createdIcon.click()

            await expect(appointmentKind).toHaveAttribute('class','tab_on')

            
           

            await subjectTiltle.addValue(appointment.title)
            await expect(subjectTiltle).toHaveValue(appointment.title)

            const end_day_value = await start_day.getValue()
            await  $(`//*[@id="end_day"]/option[${end_day_value-1}]`).click()
            await expect($(`//*[@id="end_day"]/option[${end_day_value-1}]`)).toBeSelected()

            await expect(addBtn).toBeDisplayed()
            await expect(addBtn).toBeClickable()
            await addBtn.click()

            await expect(msgBox).toBeDisplayed()

            await expect(errorMsg).toHaveText('GRN_SCHD_13006')
            await $('//*[@id="msgbox_btn_ok"]/a').click()
                    
                    })
        })