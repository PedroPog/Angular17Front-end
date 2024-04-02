import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btnText") btnText:string = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Input() disabled:boolean = false;
  @Input() loading:boolean = false;
  @Input() variant: BtnVariants = "primary";

  submit(){
    this.onSubmit.emit();
  }
}
