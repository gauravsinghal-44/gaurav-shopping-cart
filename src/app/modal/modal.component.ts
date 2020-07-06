import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() amount;
  IsmodelShow  =false;
  constructor() { }

  ngOnInit() {
  }


  close(m){
    this.IsmodelShow = true;
  }
}
