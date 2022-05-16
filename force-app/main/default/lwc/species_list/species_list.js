import { LightningElement, wire } from 'lwc';
import getAllSpec from "@salesforce/apex/SpeciesService.getAllSpecies"

export default class Species_list extends LightningElement {
    @wire(getAllSpec)
    species;
}