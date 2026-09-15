/**
 * Update a Snowflake integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateSnowflakeIntegrationAccount"] = true;
const apiInstance = new v2.SnowflakeIntegrationApi(configuration);

const params: v2.SnowflakeIntegrationApiUpdateSnowflakeIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "snowflake-private-key",
            privateKey:
              "-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----",
            privateKeyName: "my-rsa-key",
            privateKeyPassphrase: "your-private-key-passphrase",
          },
          dataflows: {
            snowflakeAccountUsageMetrics: {
              enabled: true,
              settings: {
                accountUsageMetricsAggregateLast24h: false,
              },
            },
            snowflakeCloudCostMetrics: {
              enabled: true,
              settings: {
                queryTags: "env,team,cost_center",
              },
            },
            snowflakeDataObservabilityQualityMonitoring: {
              enabled: true,
              settings: {
                doTableCrawlerCron: "0 */6 * * *",
                syncSnowflakeSystemDatabase: true,
              },
            },
            snowflakeEventTableLogs: {
              enabled: true,
              settings: {
                eventTableEventsEnabled: true,
                eventTableLogsEnabled: true,
                eventTableLogsIntervalMin: 15,
                eventTableSpanEventsEnabled: false,
                eventTableSpansEnabled: false,
              },
            },
            snowflakeOrganizationUsageMetrics: {
              enabled: true,
              settings: {
                organizationUsageMetricsAggregateLast24h: false,
              },
            },
            snowflakeQueryHistoryLogs: {
              enabled: true,
              settings: {
                joinQueryHistoryWithAccessHistoryEnabled: true,
                queryHistoryLogsIntervalMin: 15,
              },
            },
            snowflakeSecurityLogs: {
              enabled: true,
              settings: {
                securityLogsIntervalMin: 60,
              },
            },
            snowflakeTaskHistoryLogs: {
              enabled: true,
              settings: {
                taskHistoryLogsIntervalMin: 30,
              },
            },
          },
          name: "prod-snowflake",
          settings: {
            snowflakeAccountIdentifier: "myorg-myaccount",
            username: "datadog_user",
          },
        },
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateSnowflakeIntegrationAccount(params)
  .then((data: v2.SnowflakeIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
