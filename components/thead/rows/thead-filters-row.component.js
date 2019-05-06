import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var TheadFitlersRowComponent = /** @class */ (function () {
    function TheadFitlersRowComponent() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    TheadFitlersRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    };
    TheadFitlersRowComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ng2-st-thead-filters-row]',
                    template: "\n  <th></th>  <th></th>   <th></th>   <th></th>   <th></th> <th></th>  <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  ",
                },] },
    ];
    /** @nocollapse */
    TheadFitlersRowComponent.propDecorators = {
        "grid": [{ type: Input },],
        "source": [{ type: Input },],
        "create": [{ type: Output },],
        "filter": [{ type: Output },],
    };
    return TheadFitlersRowComponent;
}());
export { TheadFitlersRowComponent };
//# sourceMappingURL=thead-filters-row.component.js.map