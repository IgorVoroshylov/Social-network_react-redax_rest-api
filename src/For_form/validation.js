export const requiredField = (value) => {
   if(value) return undefined;
   return 'field is required';
}

export const maxLenghtCreator = (maxLength) => (value) => {
   if(value.length > maxLength) return " ";
   return undefined;
}

export const minLenghtCreator = (minLength) => (value) => {
   if(value.length < minLength) return ' ';
   return undefined;
}