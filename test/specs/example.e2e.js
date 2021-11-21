import LoginPage from  '../pageobjects/login.page';
import AuthPage from  '../pageobjects/auth.page';
import DropdownPage from '../pageobjects/auth.page';
import InputsPage from '../pageobjects/auth.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin', 'admin');
        await expect(AuthPage.getTitle).toBeExisting();
        await expect(AuthPage.getTitle).toHaveTextContaining('Basic Auth');
    });
});
describe('My Dropdown App',() =>{
    it('Should open the dropdown app',async() =>{
        await DropdownPage.open('drowpdown');
        await expect(DropdownPage.getTitle).toHaveTextContaining('Drowpdown List');
    });
});
describe('Inputs',() =>{
    it('Should open the inputs',async() =>{
        await InputsPage.open('inputs');
        await expect(InputsPage.getTitle).toHaveTextContaining('Inputs');
    });
});