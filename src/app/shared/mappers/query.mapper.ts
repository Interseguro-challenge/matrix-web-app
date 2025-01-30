import { FormField } from '../../core/models/generic-filter-form.model';
import { Query } from '../../core/models/query.model';

export class QueryMapper {
  static fromFormValueToModel(formValue: any, filters: FormField[]): Query {
    console.log(formValue);

    const query: Query = {
      filters: [],
    };

    for (const field in formValue) {
      if (formValue.hasOwnProperty(field)) {
        if (!!formValue[field]) {
          query.filters.push({
            field,
            operator: filters.find(filter => filter.name === field)?.operator!,
            value: formValue[field],
          });
        }
      }
    }

    return query;
  }
}
