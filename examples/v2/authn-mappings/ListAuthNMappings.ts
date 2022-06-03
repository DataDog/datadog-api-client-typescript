/**
 * List all AuthN Mappings returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

// there is a valid "authn_mapping" in the system
const AUTHN_MAPPING_DATA_ATTRIBUTES_ATTRIBUTE_KEY = process.env
  .AUTHN_MAPPING_DATA_ATTRIBUTES_ATTRIBUTE_KEY as string;

const params: v2.AuthNMappingsApiListAuthNMappingsRequest = {
  filter: AUTHN_MAPPING_DATA_ATTRIBUTES_ATTRIBUTE_KEY,
};

apiInstance
  .listAuthNMappings(params)
  .then((data: v2.AuthNMappingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
