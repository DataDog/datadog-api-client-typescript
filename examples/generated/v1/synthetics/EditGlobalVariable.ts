import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiEditGlobalVariableRequest = {
  // string | The ID of the global variable.
  variableId: "variable_id_example",
  // SyntheticsGlobalVariable | Details of the global variable to update.
  body: {
    attributes: {
      restrictedRoles: [
        "restrictedRoles_example",
      ],
    },
    description: "Example description",
    name: "MY_VARIABLE",
    parseTestOptions: {
      field: "content-type",
      parser: {
        type: "raw",
        value: "value_example",
      },
      type: "http_body",
    },
    parseTestPublicId: "abc-def-123",
    tags: ["team:front","test:workflow-1"],
    value: {
      secure: true,
      value: "example-value",
    },
  },
};

apiInstance.editGlobalVariable(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
