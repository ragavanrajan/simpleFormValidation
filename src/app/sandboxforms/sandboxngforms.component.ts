import { Component } from '@angular/core';

@Component({
    selector: 'sandboxngforms',
    template: `
     <div class="container">
        <h1>Form Validation </h1>
        <!-- by default html5 has validation. if u add a directive called "novalidate" in form tag
        then we can build our customised template.
        create an id called f so that we can easily group--> 
        <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)">
            <div class="form-group">
                <label>Name</label>
                <input
                    type="text" 
                    class="form-control"
                    [(ngModel)]="user.name"
                    name="name"
                    #userName="ngModel"
                    minlength="2"
                    required
                    placeholder="Click this input box and click outside to see validation"
                >
                <!-- using the name input field #tagid (i.e userName) write the below if condition 
                touched is a special directive that allows u when u click on the field and click outside
                will produce error-->
                <div *ngIf="userName.errors?.required && userName.touched" class="alert alert-danger">Name is required</div>
                <div *ngIf="userName.errors?.minlength && userName.touched" 
                class="alert alert-danger">Name should be at least 2 characters</div>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input 
                    type="text" 
                    class="form-control"
                    [(ngModel)]="user.email"
                    name="email"
                    #userEmail="ngModel"
                    required
                    placeholder="Click this input box and click outside to see validation"
                >
                <div *ngIf="userEmail.errors?.required && userEmail.touched" class="alert alert-danger">Email is required</div>
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input 
                    type="text" 
                    class="form-control"
                    [(ngModel)]="user.phone"
                    name="phone"
                    #userPhone="ngModel"
                    minlength="10"
                >
                <div *ngIf="userPhone.errors?.minlength && userPhone.touched" class="alert alert-danger">Enter a valid phone number</div>
            </div>
            <input type="submit" class="btn btn-success" value="Submit">
        </form>
        </div>
    `
})

export class SandboxngformsComponent {
    // create an user object
    user = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit({ value, valid }) {
        if (valid) {
            console.log(value);
        } else {
            console.log('Form is invalid');
        }
    }
}