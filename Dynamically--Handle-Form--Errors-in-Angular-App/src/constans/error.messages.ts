
export const ERROR_MESSAGES: { [key:string]:(args:any)=>string }={
  required:()=>"This field is required.",
  minlength:({requiredLength})=>`Minimum ${requiredLength} characters is required.`
}
