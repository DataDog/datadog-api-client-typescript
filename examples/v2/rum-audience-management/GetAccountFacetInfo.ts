/**
 * Get account facet info returns "Successful response with facet information" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getAccountFacetInfo"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiGetAccountFacetInfoRequest = {
  body: {
    data: {
      attributes: {
        facetId: "first_browser_name",
        limit: 10,
        search: {
          query: "user_org_id:5001 AND first_country_code:US",
        },
        termSearch: {
          value: "Chrome",
        },
      },
      id: "facet_info_request",
      type: "users_facet_info_request",
    },
  },
};

apiInstance
  .getAccountFacetInfo(params)
  .then((data: v2.FacetInfoResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
