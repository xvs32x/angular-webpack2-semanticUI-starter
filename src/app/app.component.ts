import {Component, OnInit} from '@angular/core';
import '../assets/css/style.css';
declare let $: any;

@Component({
    selector: 'my-app',
    template: `
        <div class="grid container">
            <div class="ui top attached demo menu">
                <a class="item" (click)="toggleSidebar()">
                    <i class="sidebar icon"></i>
                    Меню
                </a>
            </div>
            <div class="ui bottom attached pushable">
                <div class="ui inverted labeled icon left inline vertical sidebar menu">
                    <a class="item">
                        <i class="setting icon"></i>
                        Настройки
                    </a>
                    <a class="item">
                        <i class="block layout icon"></i>
                        Topics
                    </a>
                    <a class="item">
                        <i class="smile icon"></i>
                        Friends
                    </a>
                    <a class="item">
                        <i class="calendar icon"></i>
                        History
                    </a>
                </div>
            </div>
            <div class="pusher">
                <div class="ui basic segment">
                    <h3 class="ui header">Application Content</h3>
                </div>
            </div>
        </div>
    `,
})
export class AppComponent {

    toggleSidebar(): void {
        $('.ui.sidebar').sidebar('toggle');
    }

}