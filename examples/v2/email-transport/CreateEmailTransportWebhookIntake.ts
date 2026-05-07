/**
 * Ingest email transport webhook events returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createEmailTransportWebhookIntake"] = true;
const apiInstance = new v2.EmailTransportApi(configuration);

const params: v2.EmailTransportApiCreateEmailTransportWebhookIntakeRequest = {
  body: [
    {
      attributes: {
        category: ["transactional"],
        email: {
          address: "user@example.com",
          domain: "example.com",
          subject: "[Monitor Alert] CPU usage is high",
          type: ["transactional"],
        },
        emailId: "abc123-def456",
        emailTypeDisplayName: "Monitor Alert",
        message: {
          auth: {
            deliveredWithTls: "TLSv1.2",
          },
          customArgs: {
            emailId: "abc123-def456",
            emailTypeDisplayName: "Monitor Alert",
            orgUuid: "8dee7c38-00cb-11ea-a77b-8b5a08d3b091",
            queueTime: "2024-01-15T10:29:00Z",
            subject: "[Monitor Alert] CPU usage is high",
          },
          id: {
            messageId: "<message-id@example.com>",
            smtpId: "<abc123@mail.example.com>",
            transportEventId: "evt_abc123",
          },
          name: "delivered",
          response: {
            enhancedSmtpCode: "2.0.0",
            reason: "250 2.0.0 OK",
            smtpCode: "250",
          },
          senderIp: "192.168.1.1",
          timestamp: {
            eventTimestamp: 1705312200.0,
            lifetime: 3.2,
            queueTime: 1.5,
            scheduledTime: 1705312190.0,
          },
        },
        network: {
          ip: {
            attributes: [
              {
                ip: "192.168.1.1",
                source: ["sendgrid"],
              },
            ],
            list: ["192.168.1.1"],
          },
        },
        org: 1234,
        orgMetadata: {},
        orgUuid: "8dee7c38-00cb-11ea-a77b-8b5a08d3b091",
        queueTime: "2024-01-15T10:29:00Z",
        subject: "[Monitor Alert] CPU usage is high",
        useragent: "Mozilla/5.0",
      },
      date: new Date(2024, 1, 15, 10, 30, 0, 0),
      logId: "AQAAAZPHnBT0TwJAdgAAAABBWlBIblVlNEFBQ0dFMmVkYTFDSnRR",
      source: "sendgrid",
      status: "info",
      tags: ["env:production"],
    },
  ],
};

apiInstance
  .createEmailTransportWebhookIntake(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
