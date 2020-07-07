import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() amount;
  @Input() modal;
  
  constructor() { }

  ngOnInit() {
    console.log(this.modal)
  }

  close(){
    this.modal = !this.modal;
    console.log(this.modal)
  }
}
