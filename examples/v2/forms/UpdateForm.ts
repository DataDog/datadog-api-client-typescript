/**
 * Update a form returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateForm"] = true;
const apiInstance = new v2.FormsApi(configuration);

// there is a valid "form" in the system
const FORM_DATA_ID = process.env.FORM_DATA_ID as string;

const params: v2.FormsApiUpdateFormRequest = {
  body: {
    data: {
      attributes: {
        formUpdate: {
          datastoreConfig: {
            datastoreId: "5108ea24-dd83-4696-9caa-f069f73d0fad",
            primaryColumnName: "id",
            primaryKeyGenerationStrategy: "none",
          },
          description: "An updated description.",
          name: "Updated Form Name",
        },
      },
      id: FORM_DATA_ID,
      type: "forms",
    },
  },
  formId: FORM_DATA_ID,
};

apiInstance
  .updateForm(params)
  .then((data: v2.FormResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
