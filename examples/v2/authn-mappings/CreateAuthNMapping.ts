/**
 * Create an AuthN Mapping returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

// there is a valid "role" in the system
const ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

const params: v2.AuthNMappingsApiCreateAuthNMappingRequest = {
  body: {
    data: {
      attributes: {
        attributeKey: "exampleauthnmapping",
        attributeValue: "Example-AuthN-Mapping",
      },
      relationships: {
        role: {
          data: {
            id: ROLE_DATA_ID,
            type: "roles",
          },
        },
      },
      type: "authn_mappings",
    },
  },
};

apiInstance
  .createAuthNMapping(params)
  .then((data: v2.AuthNMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
