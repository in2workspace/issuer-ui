import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TempPower {
  tmf_action: string[];
  tmf_domain: string;
  tmf_function: string;
  tmf_type: string;
  execute: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
  operator: boolean;
  customer: boolean;
  provider: boolean;
  marketplace: boolean;
}

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent {
  @Input() public isDisabled: boolean = false;
  @Input() public viewMode: 'create' | 'detail' = 'create';
  @Input() public power: TempPower[] = [];
  @Input() public addedOptions: TempPower[] = [];
  @Output() public addedOptionsChange = new EventEmitter<TempPower[]>();
  @Output() public selectedOptionChange = new EventEmitter<string>();
  @Output() public handleSelectChange = new EventEmitter<Event>();

  public selectedOption: string = '';

  public addOption(): void {
    if (this.isDisabled) return;

    if (this.addedOptions.some((option) => option.tmf_function === this.selectedOption)) {
      alert('This option has already been added.');
      return;
    }
    if (!this.selectedOption) {
      alert('Please select an option.');
      return;
    }

    const newOption: TempPower = {
      tmf_action: [],
      tmf_domain: 'DOME',
      tmf_function: this.selectedOption,
      tmf_type: 'Domain',
      execute: false,
      create: false,
      update: false,
      delete: false,
      operator: false,
      customer: false,
      provider: false,
      marketplace: false,
    };

    switch(this.selectedOption) {
      case 'Marketplace':
        newOption.operator ;
        newOption.customer ;
        newOption.provider ;
        newOption.marketplace ;
        break;
      case 'ProductOffering':
        newOption.create ;
        newOption.update ;
        newOption.delete ;
        break;
      case 'Onboarding':
        newOption.execute ;
        break;
      default:
        break;
    }

    this.addedOptions.push(newOption);
    this.addedOptionsChange.emit(this.addedOptions);
    this.selectedOption = '';
  }

  public onHandleSelectChange(event: Event): void {
    this.handleSelectChange.emit(event);
  }
}
