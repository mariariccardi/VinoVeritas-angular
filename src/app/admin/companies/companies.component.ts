import { Component, OnInit } from '@angular/core';
import { CompanyDTO } from 'src/dto/companydto';
import { CompanyService } from 'src/service/company.service';
import { UserDTO } from 'src/dto/userdto';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

    companies: CompanyDTO[];
    companiesOld: CompanyDTO[];
    companytoinsert: CompanyDTO;
    companytosearch: CompanyDTO;

   
    

  constructor(private service: CompanyService) {
        this.companytoinsert = new CompanyDTO ();
        this.companytoinsert.user = new UserDTO ();
        this.companytosearch = new  CompanyDTO ();
        this.companytosearch.user = new UserDTO ();
   }

  ngOnInit() {

      this.getCompanies();
  }
  getCompanies(){
    this.service.getAll().subscribe(companies => {
    this.companies = this.companiesOld = companies;
});
  }
delete(company: CompanyDTO){
    this.service.delete(company.id).subscribe(() => this.getCompanies());
}
update(company: CompanyDTO){
    this.service.update(company).subscribe(() => this.getCompanies());
}
insert(){
    this.service.insert(this.companytoinsert).subscribe(() => this.getCompanies());
    this.clear();
}
clear(){
    this.companytoinsert = new CompanyDTO();
    this.companytoinsert.user = new UserDTO ();
}
search() {
    this.companies = [];
    this.companiesOld.forEach(c => {
    if ((!this.companytosearch.name || c.name.toLowerCase().includes(this.companytosearch.name.toLowerCase()))) {
        this.companies.push(c);
    }
    });
}
clearSearch(){
    this.companytosearch= new CompanyDTO();
    this.companytosearch.user = new UserDTO ();
    this.companies = this.companiesOld;
}
}
