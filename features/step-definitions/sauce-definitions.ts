import { Given, When, Then } from '@wdio/cucumber-framework';
import "../page/booking-page"
import { expect } from '@wdio/globals';


Given(/^Me encuentro en el login$/, async () => {
   $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView').click();
   $('//android.widget.TextView[@text="Log Out"]').click()
   $('//android.widget.Button[@resource-id="android:id/button1"]').click()

   await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]'))
      .toHaveText(expect.stringContaining("You are successfully logged out."));
   $('//android.widget.Button[@resource-id="android:id/button1"]').click()
   await expect($('(//android.widget.TextView[@text="Login"])[1]')).toHaveText(expect.stringContaining('Login'))
});

When(/^Escribo el username (.*) y (.*)$/, async (username, password) => {
   await $('//android.widget.EditText[@content-desc="Username input field"]').setValue(username)
   await $('//android.widget.EditText[@content-desc="Password input field"]').setValue(password)
});

Then(/^Le doy click en el boton login$/, async () => {
   $('//android.view.ViewGroup[@content-desc="Login button"]').click()
});
Then(/^Validar mensaje (.*)$/, async (mensaje) => {
   await expect($(`//android.widget.TextView[@text="${mensaje}"]`)).toHaveText(expect.stringContaining(mensaje))
});
Then(/^Validar pagina de inicio (.*)$/, async (mensaje) => {
   await expect($(`//android.widget.TextView[@text="Checkout"]`)).toHaveText(expect.stringContaining(mensaje))
});
