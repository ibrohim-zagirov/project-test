import { DOCUMENT } from "@angular/common";
import { AfterViewInit, Directive, ElementRef, Inject } from "@angular/core";
import { filter, fromEvent } from "rxjs";

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsidedirective implements AfterViewInit {
    constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) { }

    ngAfterViewInit(): void {
        fromEvent(this.document, 'click').pipe(filter(event) => {
            return !this.isInside(event?.target as HTMLElement)
        })
    }

    isInside(elementToCheck: HTMLElement): boolean {
        return (
            elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck)
        )
    }

}