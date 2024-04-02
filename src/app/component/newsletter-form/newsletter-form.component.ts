import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule
  ],
  providers:[
    NewsletterService
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {

  newsletterForms!: FormGroup;
  loading = signal(false);

  constructor(
    private service:NewsletterService
  ){
    this.newsletterForms = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email])
    });
  }


  onSubmit(){
    this.loading.set(true);
    if(!this.newsletterForms.valid){
      this.service.sendData(
        this.newsletterForms.value.name,
        this.newsletterForms.value.email)
          .subscribe({
            next:()=>{
              this.newsletterForms.reset();
              this.loading.set(false);
            }
          })
    }
  }
}
