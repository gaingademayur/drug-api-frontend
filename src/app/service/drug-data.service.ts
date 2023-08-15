import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DrugDataService {
  url = "http://localhost:4000/api/index";
  addDrugurl = "http://localhost:4000/api/addDrug";
  searchDrugurl = "http://localhost:4000/api/searchDrug";

  constructor(private http: HttpClient) { }

  drugs(){
    return this.http.get(this.url);
  }

addDrug(compname:string, molucularfor:string, structure:string, molucularwt:string,
  smile:string,phycheproperties:string, genus:string, speciesname:string,
  family:string, geolocation:string, chemicalclassification:string, 
  meltingpoint:string, massspectra:string, msms:string, uv: string, irspector:string, 
  hmnr:string, cmnr:string, 
  hplc:string, activity:string, toxicity:string, clinicaltrial:string, 
  afi:string, reference:string) {
    
  const data = {
    compname: compname, molucularfor: molucularfor,
    structure: structure, molucularwt: molucularwt,
    smile: smile, phycheproperties: phycheproperties,
    genus: genus, speciesname: speciesname,
    family: family, geolocation: geolocation,
    chemicalclassification: chemicalclassification,
    meltingpoint: meltingpoint,
    massspectra: massspectra, msms: msms, uv:uv,
    irspector: irspector, hmnr: hmnr,
    cmnr: cmnr, hplc: hplc,
    activity: activity, toxicity: toxicity,
    clinicaltrial: clinicaltrial, afi: afi,
    reference: reference,
  };
  
  console.log(data)
  return this.http.post(this.addDrugurl, data);
}

  searchDrug(id: any){
  const myurl = `${this.searchDrugurl}/${id}`;
  return this.http.get(myurl);
  }

  validate(){
    return true;
  }
}
