// 这个文件是 Angular 根模块，告诉 Angular 如何组装应用


// BroserModule，浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// Angular 核心模块
import { NgModule } from '@angular/core';
// 引入表单相关模块 才可以用双向数据绑定
import {FormsModule} from '@angular/forms';

// 根组件
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { from } from 'rxjs';

// @NgModule 装饰器，@NgModule 接受一个元数据对象，告诉 Angular 如何编译和启动应用
@NgModule({
  declarations: [         /*配置当前项目运行的组件*/
    AppComponent, SearchComponent
  ],
  imports: [              /*配置当前模块运行依赖的其他模块*/
    BrowserModule,
    FormsModule
  ],
  providers: [],          /*配置项目所需要的服务*/
  bootstrap: [AppComponent]   /*指定应用的主视图（称为根组件）通过引导根 AppModule 来启动应用，这里一般写的是跟组件*/
})

// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
