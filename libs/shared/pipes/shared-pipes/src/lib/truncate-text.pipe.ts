import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'truncateText',
  standalone: true,
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, maxLength = 22): string {
    return value.length > maxLength ? value.slice(0, maxLength) + "..." : value;
  }
}