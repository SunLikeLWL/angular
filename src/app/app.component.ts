// 引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // 使用这个组件名称
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.less']  // css
})
export class AppComponent {
  title = 'myApp'; // 定义属性
  message: any;
  name: string;
  age: number;
  content = '<h2>我是一个html标签<h2>';
  // 声明属性的几种方式：

  // public 公有 * 默认 可以在这个类里面使用、也可以在类外面使用

  // protedted 保护类型    他只有当前；类和他的子类里面可以访问

  // private 私有   只有在当前类才能访问这个属性


  constructor() {
    this.age = 12;
    // 构造函数
  }
}
