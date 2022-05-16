import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class SpeciesTile extends LightningElement {

    @api specie;


    get isOutdoors() {
        return this.specie.Location__c.includes("Outdoor");
    }

    get isIntdoors() {
        return this.specie.Location__c.includes("Indoor");
    }

    navigateToRecorViewPage() {
        this[NavigationMixin.Navigate]({
            type: 'Standard_recorpage',
            attributes: {
                recordId: this.specie.Id,
                objectApiName: 'Species__c',
                actionName: 'view'
            }
        });
    }

}