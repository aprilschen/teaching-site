export type AmplifyDependentResourcesAttributes = {
  "api": {
    "getStudents": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "getUserInfo": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "function": {
    "getStudents": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "getUserInfo": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}