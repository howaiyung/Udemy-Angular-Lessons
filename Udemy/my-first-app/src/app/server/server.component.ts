/*import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
}) //Class Decorator
export class ServerComponent {

}*/
import { Component } from '@angular/core';

@Component({
    selector: 'app-server', // HTML tag, you can use this component in other places to reference from 
    templateUrl: 'server.component.html' // Template 
}) //Class Decorator, Pass a Javascript object, store meta-data
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'offline';
}
