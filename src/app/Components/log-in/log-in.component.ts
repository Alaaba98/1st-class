import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    }

  ngOnInit() {

  // Animation Login Form
  let current = null;
    // tslint:disable-next-line: only-arrow-functions
  document.querySelector('#email').addEventListener('focus', function(e) {
      if (current) { current.pause(); }
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    // tslint:disable-next-line: only-arrow-functions
  document.querySelector('#password').addEventListener('focus', function(e) {
      if (current) { current.pause(); }
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    // tslint:disable-next-line: only-arrow-functions
  document.querySelector('#submit').addEventListener('focus', function(e) {
      if (current) { current.pause(); }
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });

  }
}
