
import { UnparsedObject } from '../../packages/datadog-api-client-common/util';
import { ObjectSerializer as ObjectSerializerV1 } from '../../packages/datadog-api-client-v1/models/ObjectSerializer';
import { ObjectSerializer as ObjectSerializerV2 } from '../../packages/datadog-api-client-v2/models/ObjectSerializer';

test('TestDeserializationUnknownNestedOneOfInList', () => {
  const data = `
  {
      "status": "paused",
      "public_id": "jv7-wfd-kvt",
      "tags": [],
      "locations": [
          "pl:pl-kevin-y-6382df0d72d4588e1817f090b131541f"
      ],
      "message": "",
      "name": "Test on www.example.com",
      "monitor_id": 28558768,
      "type": "api",
      "created_at": "2021-01-12T10:11:40.802074+00:00",
      "modified_at": "2021-01-22T16:42:10.520384+00:00",
      "subtype": "http",
      "config": {
          "request": {
              "url": "https://www.example.com",
              "method": "GET",
              "timeout": 30
          },
          "assertions": [
              {
                  "operator": "lessThan",
                  "type": "responseTime",
                  "target": 1000
              },
              {
                  "operator": "is",
                  "type": "statusCode",
                  "target": 200
              },
              {
                  "operator": "A non existent operator",
                  "type": "body",
                  "target": {
                      "xPath": "//html/head/title",
                      "operator": "contains",
                      "targetValue": "Example"
                  }
              }
          ],
          "configVariables": []
      },
      "options": {
          "monitor_options": {
              "notify_audit": false,
              "locked": false,
              "include_tags": true,
              "new_host_delay": 300,
              "notify_no_data": false,
              "renotify_interval": 0
          },
          "retry": {
              "count": 0,
              "interval": 300
          },
          "min_location_failed": 1,
          "min_failure_duration": 0,
          "tick_every": 60
      }
  }
  `;


  const result = ObjectSerializerV1.deserialize(
    ObjectSerializerV1.parse(data, "application/json"),
    "SyntheticsAPITest",
    "");

    expect(result._unparsed).toBe(true);
    expect(result.config.assertions.length).toBe(3);
    expect(result.config.assertions[2]._data["operator"]).toBe("A non existent operator");
  }
);


test('TestDeserializationUnknownNestedEnumInList', () => {
  const data = `
{
    "data": {
        "type": "downtime",
        "attributes": {
            "mute_first_recovery_notification": false,
            "schedule": {
                "end": null,
                "start": "2024-11-10T03:12:35.223223+00:00"
            },
            "notify_end_types": [
                "expired"
            ],
            "status": "active",
            "monitor_identifier": {
                "monitor_tags": [
                    "*"
                ]
            },
            "display_timezone": "UTC",
            "notify_end_states": [
                "warn",
                "alert",
                "not an end state"
            ],
            "created": "2024-11-10T03:12:35.241213+00:00",
            "modified": "2024-11-10T03:12:35.241213+00:00",
            "canceled": null,
            "message": null,
            "scope": "host:java-hostsMuteErrorsTest-local-1731208355"
        },
        "id": "a5546ef7-fea3-4a1b-b82e-04f8067f655a"
    }
}
  `;


  const result = ObjectSerializerV2.deserialize(
    ObjectSerializerV2.parse(data, "application/json"),
    "DowntimeResponse",
    "");

    expect(result._unparsed).toBe(true);
    expect(result.data.attributes.notifyEndStates.length).toBe(3);
    expect(result.data.attributes.notifyEndStates[2]._data).toBe("not an end state");
  }
);

test('TestDeserializationUnknownTopLevelEnum', () => {
  const data = `
  {
      "status": "live",
      "public_id": "g6d-gcm-pdq",
      "tags": [],
      "locations": [
          "aws:eu-central-1",
          "aws:ap-northeast-1"
      ],
      "message": "",
      "name": "Check on www.10.0.0.1.xip.io",
      "monitor_id": 7464050,
      "type": "A non existent test type",
      "created_at": "2018-12-07T17:30:49.785089+00:00",
      "modified_at": "2019-09-04T17:01:09.921070+00:00",
      "subtype": "http",
      "config": {
          "request": {
              "url": "https://www.10.0.0.1.xip.io",
              "method": "GET",
              "timeout": 30
          },
          "assertions": [
              {
                  "operator": "is",
                  "type": "statusCode",
                  "target": 200
              }
          ]
      },
      "options": {
          "tick_every": 60
      }
  }
  `;


  const result = ObjectSerializerV1.deserialize(
    ObjectSerializerV1.parse(data, "application/json"),
    "SyntheticsBrowserTest",
    "");

    expect(result?.type).toBeInstanceOf(UnparsedObject);
    expect(result._unparsed).toBe(true);
    expect(result.type._data).toBe("A non existent test type");
    expect(result.name).toBe("Check on www.10.0.0.1.xip.io");
  }
);

test('TestDeserializationUnknownNestedEnum', () => {
  const data = `
  {
      "status": "live",
      "public_id": "g6d-gcm-pdq",
      "tags": [],
      "locations": [
          "aws:eu-central-1",
          "aws:ap-northeast-1"
      ],
      "message": "",
      "name": "Check on www.10.0.0.1.xip.io",
      "monitor_id": 7464050,
      "type": "api",
      "created_at": "2018-12-07T17:30:49.785089+00:00",
      "modified_at": "2019-09-04T17:01:09.921070+00:00",
      "subtype": "http",
      "config": {
          "request": {
              "url": "https://www.10.0.0.1.xip.io",
              "method": "GET",
              "timeout": 30
          },
          "assertions": [
              {
                  "operator": "not-an-operator",
                  "type": "statusCode",
                  "target": 200
              }
          ]
      },
      "options": {
          "tick_every": 60
      }
  }
  `;


  const result = ObjectSerializerV1.deserialize(
    ObjectSerializerV1.parse(data, "application/json"),
    "SyntheticsAPITest",
    "");

    expect(result._unparsed).toBe(true);
    expect(result.config.assertions[0]).toBeInstanceOf(UnparsedObject);
    expect(result.config.assertions[0]._data["operator"]).toBe("not-an-operator");
    expect(result.config.assertions[0]._data["target"]).toBe(200);
  }
);

test('TestDeserializationUnknownNestedOneOf', () => {
  const data = `
  {
      "data": {
          "type": "archives",
          "id": "n_XDSxVpScepiBnyhysj_A",
          "attributes": {
              "name": "my first azure archive",
              "query": "service:toto",
              "state": "UNKNOWN",
              "destination": {
                  "container": "my-container",
                  "storage_account": "storageaccount",
                  "path": "/path/blou",
                  "type": "A non existent destination",
                  "integration": {
                      "tenant_id": "tf-TestAccDatadogLogsArchiveAzure_basic-local-1624981538",
                      "client_id": "testc7f6-1234-5678-9101-3fcbf464test"
                  }
              },
              "rehydration_tags": [],
              "include_tags": false
          }
      }
  }
  `;


  const result = ObjectSerializerV2.deserialize(
    ObjectSerializerV2.parse(data, "application/json"),
    "LogsArchive",
    "");

    expect(result._unparsed).toBe(true);
    expect(result.data.attributes.destination._data["type"]).toBe("A non existent destination");
  }
);

test('TestDeserializationNoUnparsed', () => {
    const data = `
    {
        "data": {
            "type": "archives",
            "id": "n_XDSxVpScepiBnyhysj_A",
            "attributes": {
                "name": "my first azure archive",
                "query": "service:toto",
                "state": "UNKNOWN",
                "destination": {
                    "container": "my-container",
                    "storage_account": "storageaccount",
                    "path": "/path/blou",
                    "type": "azure",
                    "integration": {
                        "tenant_id": "tf-TestAccDatadogLogsArchiveAzure_basic-local-1624981538",
                        "client_id": "testc7f6-1234-5678-9101-3fcbf464test"
                    }
                },
                "rehydration_tags": [],
                "include_tags": false
            }
        }
    }
    `;
  
  
    const result = ObjectSerializerV2.deserialize(
      ObjectSerializerV2.parse(data, "application/json"),
      "LogsArchive",
      "");
  
      expect(result._unparsed).toBe(undefined);
    }
  );
  