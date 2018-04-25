import { Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        console.log(`The ratings ${this.rating} was clicked`) //using the ES2015 backtick to log out the value of the star ratings to define a template string allowing embeddign direcly
        this.ratingClicked.emit(`The ratings ${this.rating} was clicked!`);
    }

}