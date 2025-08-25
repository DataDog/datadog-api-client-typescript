/**
 * Get an AuthN Mapping by UUID returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

// there is a valid "authn_mapping" in the system
const AUTHN_MAPPING_DATA_ID = process.env.AUTHN_MAPPING_DATA_ID as string;

const params: v2.AuthNMappingsApiGetAuthNMappingRequest = {
  authnMappingId: AUTHN_MAPPING_DATA_ID,
};

apiInstance
  .getAuthNMapping(params)
  .then((data: v2.AuthNMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
