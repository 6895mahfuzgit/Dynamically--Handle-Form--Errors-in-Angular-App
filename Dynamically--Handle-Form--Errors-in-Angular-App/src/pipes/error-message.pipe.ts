import { ERROR_MESSAGES } from './../constans/error.messages';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(key: any, value?: any): any {

    if(!ERROR_MESSAGES[key]){
      console.error(`no value found  for this key named ${key}.`);
    }

    return ERROR_MESSAGES[key](value);
  }

}
