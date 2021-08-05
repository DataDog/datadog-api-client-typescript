
import { ObjectSerializer as ObjectSerializerV1 } from '../../packages/datadog-api-client-v1/models/ObjectSerializer';
import { ObjectSerializer as ObjectSerializerV2 } from '../../packages/datadog-api-client-v2/models/ObjectSerializer';

test('TestDeserializationUnknownNestedOneOfInList', () => {
  let data = `
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


  let result = ObjectSerializerV1.deserialize(
    ObjectSerializerV1.parse(data, "application/json"),
    "SyntheticsAPITest",
    "");

    expect(result?.unparsedObject).toBe(undefined);
    expect(result.config.assertions.length).toBe(3);
    expect(result.config.assertions[2].unparsedObject["operator"]).toBe("A non existent operator");
  }
);


test('TestDeserializationUnknownNestedEnumInList', () => {
  let data = `
  {
      "status": "live",
      "public_id": "2fx-64b-fb8",
      "tags": [
          "mini-website",
          "team:synthetics",
          "firefox",
          "synthetics-ci-browser",
          "edge",
          "chrome"
      ],
      "locations": [
          "aws:ap-northeast-1",
          "aws:eu-north-1",
          "aws:eu-west-3",
          "aws:eu-central-1"
      ],
      "message": "This mini-website check failed, please investigate why. @slack-synthetics-ops-worker",
      "name": "Mini Website - Click Trap",
      "monitor_id": 7647262,
      "type": "browser",
      "created_at": "2018-12-20T13:19:23.734004+00:00",
      "modified_at": "2021-06-30T15:46:49.387631+00:00",
      "config": {
          "variables": [],
          "setCookie": "",
          "request": {
              "url": "http://34.95.79.70/click-trap",
              "headers": {},
              "method": "GET"
          },
          "assertions": [],
          "configVariables": []
      },
      "options": {
          "ci": {
              "executionRule": "blocking"
          },
          "retry": {
              "count": 1,
              "interval": 1000
          },
          "min_location_failed": 1,
          "min_failure_duration": 0,
          "noScreenshot": false,
          "tick_every": 300,
          "forwardProxy": false,
          "disableCors": false,
          "device_ids": [
              "chrome.laptop_large",
              "firefox.laptop_large",
              "A non existent device ID"
          ],
          "monitor_options": {
              "renotify_interval": 360
          },
          "ignoreServerCertificateError": true
      }
  }
  `;


  let result = ObjectSerializerV1.deserialize(
    ObjectSerializerV1.parse(data, "application/json"),
    "SyntheticsBrowserTest",
    "");

    expect(result?.unparsedObject).toBe(undefined);
    expect(result.options.deviceIds.length).toBe(3);
    expect(result.options.deviceIds[2]).toBe("A non existent device ID");
  }
);

test('TestDeserializationUnknownTopLevelEnum', () => {
  let data = `
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


  let result = ObjectSerializerV1.deserialize(
    ObjectSerializerV1.parse(data, "application/json"),
    "SyntheticsBrowserTest",
    "");

    expect(result?.unparsedObject).not.toBe(undefined);
    expect(result.unparsedObject["type"]).toBe("A non existent test type");
    expect(result.unparsedObject["name"]).toBe("Check on www.10.0.0.1.xip.io");
  }
);

test('TestDeserializationUnknownNestedEnum', () => {
  let data = `
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
              "method": "A non existent method",
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


  let result = ObjectSerializerV1.deserialize(
    ObjectSerializerV1.parse(data, "application/json"),
    "SyntheticsAPITest",
    "");

    expect(result?.unparsedObject).toBe(undefined);
    expect(result.config.unparsedObject).toBe(undefined);
    expect(result.config.request.unparsedObject).not.toBe(undefined);
    expect(result.config.request.unparsedObject["method"]).toBe("A non existent method");
    expect(result.config.request.unparsedObject["timeout"]).toBe(30.0);
  }
);

test('TestDeserializationUnknownNestedOneOf', () => {
  let data = `
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


  let result = ObjectSerializerV2.deserialize(
    ObjectSerializerV2.parse(data, "application/json"),
    "LogsArchive",
    "");

    expect(result?.unparsedObject).toBe(undefined);
    expect(result.data.attributes.unparsedObject).toBe(undefined);
    expect(result.data.attributes.destination.unparsedObject["type"]).toBe("A non existent destination");
  }
);
