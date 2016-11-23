import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {LogoutPage} from '../pages/logout/logout';
import {Router} from 'emiya-ionic2-router';
import {PopoverPage} from '../pages/goods-menu/goods-menu';
import {GoodsInfoPage} from '../pages/goods-info/goods-info';
import {GoodsListPage} from '../pages/goods-list/goods-list';
import {ShopCartPage} from '../directives/shopcart/shopcart-footer';
import { Fetch } from "emiya-angular2-fetch";
import {DataPool,DataPoolHandle} from 'emiya-angular2-datapool';
import {PlusReduce} from '../directives/plus-reduce/plus-reduce';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {GoodsOrderPage} from '../pages/goods-order/goods-order';
import {Header} from '../directives/header/header';
import {GoodsPage} from '../pages/goods/goods';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    LogoutPage,
    PopoverPage,
    GoodsInfoPage,
    GoodsListPage,
    ShopCartPage,
    PlusReduce,
    GoodsOrderPage,
    Header,
    GoodsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement: 'bottom'}, {
      links: [
        {component: LoginPage, name: 'Login', segment: 'login'},
        {component: LogoutPage, name: 'Logout', segment: 'logout'},
      ]
    }),
    ChartsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    LogoutPage,
    PopoverPage,
    GoodsInfoPage,
    GoodsListPage,
    ShopCartPage,
    PlusReduce,
    GoodsOrderPage,
    Header,
    GoodsPage
  ],
  providers: [Router,Fetch,DataPool]
})
export class AppModule {
}
