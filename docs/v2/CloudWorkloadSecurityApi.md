# datadog-api-client.v2.CloudWorkloadSecurityApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                                                                       | HTTP request                                                                               | Description                                   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------- |
| [**createCloudWorkloadSecurityAgentRule**](CloudWorkloadSecurityApi.md#createCloudWorkloadSecurityAgentRule) | **POST** /api/v2/security_monitoring/cloud_workload_security/agent_rules                   | Create a Cloud Workload Security Agent rule   |
| [**deleteCloudWorkloadSecurityAgentRule**](CloudWorkloadSecurityApi.md#deleteCloudWorkloadSecurityAgentRule) | **DELETE** /api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id} | Delete a Cloud Workload Security Agent rule   |
| [**downloadCloudWorkloadPolicyFile**](CloudWorkloadSecurityApi.md#downloadCloudWorkloadPolicyFile)           | **GET** /api/v2/security/cloud_workload/policy/download                                    | Get the latest Cloud Workload Security policy |
| [**getCloudWorkloadSecurityAgentRule**](CloudWorkloadSecurityApi.md#getCloudWorkloadSecurityAgentRule)       | **GET** /api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}    | Get a Cloud Workload Security Agent rule      |
| [**listCloudWorkloadSecurityAgentRules**](CloudWorkloadSecurityApi.md#listCloudWorkloadSecurityAgentRules)   | **GET** /api/v2/security_monitoring/cloud_workload_security/agent_rules                    | Get all Cloud Workload Security Agent rules   |
| [**updateCloudWorkloadSecurityAgentRule**](CloudWorkloadSecurityApi.md#updateCloudWorkloadSecurityAgentRule) | **PATCH** /api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}  | Update a Cloud Workload Security Agent rule   |

## **createCloudWorkloadSecurityAgentRule**

> CloudWorkloadSecurityAgentRuleResponse createCloudWorkloadSecurityAgentRule(body)

Create a new Agent rule with the given parameters.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

let params: v2.CloudWorkloadSecurityApiCreateCloudWorkloadSecurityAgentRuleRequest =
  {
    // CloudWorkloadSecurityAgentRuleCreateRequest | The definition of the new Agent rule.
    body: {
      data: {
        attributes: {
          description: "My Agent rule",
          enabled: true,
          expression: 'exec.file.name == "sh"',
          name: "my_agent_rule",
        },
        type: "agent_rule",
      },
    },
  };

apiInstance
  .createCloudWorkloadSecurityAgentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                                            | Description                           | Notes |
| -------- | ----------------------------------------------- | ------------------------------------- | ----- |
| **body** | **CloudWorkloadSecurityAgentRuleCreateRequest** | The definition of the new Agent rule. |

### Return type

**CloudWorkloadSecurityAgentRuleResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Not Authorized    | -                |
| **409**     | Conflict          | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteCloudWorkloadSecurityAgentRule**

> void deleteCloudWorkloadSecurityAgentRule()

Delete a specific Agent rule.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

let params: v2.CloudWorkloadSecurityApiDeleteCloudWorkloadSecurityAgentRuleRequest =
  {
    // string | The ID of the Agent rule.
    agentRuleId: "3b5-v82-ns6",
  };

apiInstance
  .deleteCloudWorkloadSecurityAgentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description               | Notes                 |
| --------------- | ------------ | ------------------------- | --------------------- |
| **agentRuleId** | [**string**] | The ID of the Agent rule. | defaults to undefined |

### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **204**     | OK                | -                |
| **403**     | Not Authorized    | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **downloadCloudWorkloadPolicyFile**

> HttpFile downloadCloudWorkloadPolicyFile()

The download endpoint generates a Cloud Workload Security policy file from your currently active
Cloud Workload Security rules, and downloads them as a .policy file. This file can then be deployed to
your agents to update the policy running in your environment.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

apiInstance
  .downloadCloudWorkloadPolicyFile()
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**HttpFile**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/yaml, application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **403**     | Not Authorized    | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getCloudWorkloadSecurityAgentRule**

> CloudWorkloadSecurityAgentRuleResponse getCloudWorkloadSecurityAgentRule()

Get the details of a specific Agent rule.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

let params: v2.CloudWorkloadSecurityApiGetCloudWorkloadSecurityAgentRuleRequest =
  {
    // string | The ID of the Agent rule.
    agentRuleId: "3b5-v82-ns6",
  };

apiInstance
  .getCloudWorkloadSecurityAgentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description               | Notes                 |
| --------------- | ------------ | ------------------------- | --------------------- |
| **agentRuleId** | [**string**] | The ID of the Agent rule. | defaults to undefined |

### Return type

**CloudWorkloadSecurityAgentRuleResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **403**     | Not Authorized    | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listCloudWorkloadSecurityAgentRules**

> CloudWorkloadSecurityAgentRulesListResponse listCloudWorkloadSecurityAgentRules()

Get the list of Agent rules.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

apiInstance
  .listCloudWorkloadSecurityAgentRules()
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CloudWorkloadSecurityAgentRulesListResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **403**     | Not Authorized    | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateCloudWorkloadSecurityAgentRule**

> CloudWorkloadSecurityAgentRuleResponse updateCloudWorkloadSecurityAgentRule(body)

Update a specific Agent rule.
Returns the Agent rule object when the request is successful.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

let params: v2.CloudWorkloadSecurityApiUpdateCloudWorkloadSecurityAgentRuleRequest =
  {
    // string | The ID of the Agent rule.
    agentRuleId: "3b5-v82-ns6",
    // CloudWorkloadSecurityAgentRuleUpdateRequest | New definition of the Agent rule.
    body: {
      data: {
        attributes: {
          description: "My Agent rule",
          enabled: true,
          expression: 'exec.file.name == "sh"',
        },
        type: "agent_rule",
      },
    },
  };

apiInstance
  .updateCloudWorkloadSecurityAgentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type                                            | Description                       | Notes                 |
| --------------- | ----------------------------------------------- | --------------------------------- | --------------------- |
| **body**        | **CloudWorkloadSecurityAgentRuleUpdateRequest** | New definition of the Agent rule. |
| **agentRuleId** | [**string**]                                    | The ID of the Agent rule.         | defaults to undefined |

### Return type

**CloudWorkloadSecurityAgentRuleResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | OK                      | -                |
| **400**     | Bad Request             | -                |
| **403**     | Not Authorized          | -                |
| **404**     | Not Found               | -                |
| **409**     | Concurrent Modification | -                |
| **429**     | Too many requests       | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
