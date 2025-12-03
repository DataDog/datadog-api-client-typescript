/**
 * Attach security finding to a case returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiAttachCaseRequest = {
  body: {
    data: {
      id: "7d16945b-baf8-411e-ab2a-20fe43af1ea3",
      relationships: {
        findings: {
          data: [
            {
              id: "ZGZhMDI3ZjdjMDM3YjJmNzcxNTlhZGMwMjdmZWNiNTZ-MTVlYTNmYWU3NjNlOTNlYTE2YjM4N2JmZmI4Yjk5N2Y=",
              type: "findings",
            },
          ],
        },
      },
      type: "cases",
    },
  },
  caseId: "7d16945b-baf8-411e-ab2a-20fe43af1ea3",
};

apiInstance
  .attachCase(params)
  .then((data: v2.FindingCaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
