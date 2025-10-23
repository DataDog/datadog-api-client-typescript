/**
 * Create a pipeline with Schema Processor and preserve_source false returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testSchemaProcessor",
    processors: [
      {
        type: "schema-processor",
        isEnabled: true,
        name: "Apply OCSF schema for 3001",
        schema: {
          schemaType: "ocsf",
          version: "1.5.0",
          classUid: 3001,
          className: "Account Change",
          profiles: ["cloud", "datetime"],
        },
        mappers: [
          {
            type: "schema-category-mapper",
            name: "activity_id and activity_name",
            categories: [
              {
                filter: {
                  query: "@eventName:(*Create*)",
                },
                name: "Create",
                id: 1,
              },
              {
                filter: {
                  query: "@eventName:(ChangePassword OR PasswordUpdated)",
                },
                name: "Password Change",
                id: 3,
              },
              {
                filter: {
                  query: "@eventName:(*Attach*)",
                },
                name: "Attach Policy",
                id: 7,
              },
              {
                filter: {
                  query: "@eventName:(*Detach* OR *Remove*)",
                },
                name: "Detach Policy",
                id: 8,
              },
              {
                filter: {
                  query: "@eventName:(*Delete*)",
                },
                name: "Delete",
                id: 6,
              },
              {
                filter: {
                  query: "@eventName:*",
                },
                name: "Other",
                id: 99,
              },
            ],
            targets: {
              name: "ocsf.activity_name",
              id: "ocsf.activity_id",
            },
            fallback: {
              values: {
                "ocsf.activity_id": "99",
                "ocsf.activity_name": "Other",
              },
              sources: {
                "ocsf.activity_name": ["eventName"],
              },
            },
          },
          {
            type: "schema-category-mapper",
            name: "status",
            categories: [
              {
                filter: {
                  query: "-@errorCode:*",
                },
                id: 1,
                name: "Success",
              },
              {
                filter: {
                  query: "@errorCode:*",
                },
                id: 2,
                name: "Failure",
              },
            ],
            targets: {
              id: "ocsf.status_id",
              name: "ocsf.status",
            },
          },
          {
            type: "schema-category-mapper",
            name: "Set default severity",
            categories: [
              {
                filter: {
                  query: "@eventName:*",
                },
                name: "Informational",
                id: 1,
              },
            ],
            targets: {
              name: "ocsf.severity",
              id: "ocsf.severity_id",
            },
          },
          {
            type: "schema-remapper",
            name: "Map userIdentity to ocsf.user.uid",
            sources: [
              "userIdentity.principalId",
              "responseElements.role.roleId",
              "responseElements.user.userId",
            ],
            target: "ocsf.user.uid",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map userName to ocsf.user.name",
            sources: [
              "requestParameters.userName",
              "responseElements.role.roleName",
              "requestParameters.roleName",
              "responseElements.user.userName",
            ],
            target: "ocsf.user.name",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map api to ocsf.api",
            sources: ["api"],
            target: "ocsf.api",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map user to ocsf.user",
            sources: ["user"],
            target: "ocsf.user",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map actor to ocsf.actor",
            sources: ["actor"],
            target: "ocsf.actor",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map cloud to ocsf.cloud",
            sources: ["cloud"],
            target: "ocsf.cloud",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map http_request to ocsf.http_request",
            sources: ["http_request"],
            target: "ocsf.http_request",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map metadata to ocsf.metadata",
            sources: ["metadata"],
            target: "ocsf.metadata",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map time to ocsf.time",
            sources: ["time"],
            target: "ocsf.time",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map src_endpoint to ocsf.src_endpoint",
            sources: ["src_endpoint"],
            target: "ocsf.src_endpoint",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map severity to ocsf.severity",
            sources: ["severity"],
            target: "ocsf.severity",
            preserveSource: false,
          },
          {
            type: "schema-remapper",
            name: "Map severity_id to ocsf.severity_id",
            sources: ["severity_id"],
            target: "ocsf.severity_id",
            preserveSource: false,
          },
        ],
      },
    ],
    tags: [],
  },
};

apiInstance
  .createLogsPipeline(params)
  .then((data: v1.LogsPipeline) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
