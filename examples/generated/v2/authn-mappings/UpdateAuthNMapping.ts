import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

let params: v2.AuthNMappingsApiUpdateAuthNMappingRequest = {
  // string | The UUID of the AuthN Mapping.
  authnMappingId: "authn_mapping_id_example",
  // AuthNMappingUpdateRequest
  body: {
    data: {
      attributes: {
        attributeKey: "member-of",
        attributeValue: "Development",
      },
      id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
      relationships: {
        role: {
          data: {
            id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
            type: "roles",
          },
        },
      },
      type: "authn_mappings",
    },
  },
};

apiInstance
  .updateAuthNMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
