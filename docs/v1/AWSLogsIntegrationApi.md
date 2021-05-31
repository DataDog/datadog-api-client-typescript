# datadog-api-client.v1.AWSLogsIntegrationApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkAWSLogsLambdaAsync**](AWSLogsIntegrationApi.md#checkAWSLogsLambdaAsync) | **POST** /api/v1/integration/aws/logs/check_async | Check that an AWS Lambda Function exists
[**checkAWSLogsServicesAsync**](AWSLogsIntegrationApi.md#checkAWSLogsServicesAsync) | **POST** /api/v1/integration/aws/logs/services_async | Check permissions for log services
[**createAWSLambdaARN**](AWSLogsIntegrationApi.md#createAWSLambdaARN) | **POST** /api/v1/integration/aws/logs | Add AWS Log Lambda ARN
[**deleteAWSLambdaARN**](AWSLogsIntegrationApi.md#deleteAWSLambdaARN) | **DELETE** /api/v1/integration/aws/logs | Delete an AWS Logs integration
[**enableAWSLogServices**](AWSLogsIntegrationApi.md#enableAWSLogServices) | **POST** /api/v1/integration/aws/logs/services | Enable an AWS Logs integration
[**listAWSLogsIntegrations**](AWSLogsIntegrationApi.md#listAWSLogsIntegrations) | **GET** /api/v1/integration/aws/logs | List all AWS Logs integrations
[**listAWSLogsServices**](AWSLogsIntegrationApi.md#listAWSLogsServices) | **GET** /api/v1/integration/aws/logs/services | Get list of AWS log ready services


## **checkAWSLogsLambdaAsync**
> AWSLogsAsyncResponse checkAWSLogsLambdaAsync(body)

Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this endpoint can be polled intermittently instead of blocking.  - Returns a status of 'created' when it's checking if the Lambda exists in the account. - Returns a status of 'waiting' while checking. - Returns a status of 'checked and ok' if the Lambda exists. - Returns a status of 'error' if the Lambda does not exist.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

let params:v1.AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest = {
  // AWSAccountAndLambdaRequest | Check AWS Log Lambda Async request body.
  body: {
    accountId: "1234567",
    lambdaArn: "arn:aws:lambda:us-east-1:1234567:function:LogsCollectionAPITest",
  },
};

apiInstance.checkAWSLogsLambdaAsync(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AWSAccountAndLambdaRequest**| Check AWS Log Lambda Async request body. |


### Return type

**AWSLogsAsyncResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Authentication Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **checkAWSLogsServicesAsync**
> AWSLogsAsyncResponse checkAWSLogsServicesAsync(body)

Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

let params:v1.AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest = {
  // AWSLogsServicesRequest | Check AWS Logs Async Services request body.
  body: {
    accountId: "1234567",
    services: ["s3","elb","elbv2","cloudfront","redshift","lambda"],
  },
};

apiInstance.checkAWSLogsServicesAsync(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AWSLogsServicesRequest**| Check AWS Logs Async Services request body. |


### Return type

**AWSLogsAsyncResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Authentication Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createAWSLambdaARN**
> any createAWSLambdaARN(body)

Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

let params:v1.AWSLogsIntegrationApiCreateAWSLambdaARNRequest = {
  // AWSAccountAndLambdaRequest | AWS Log Lambda Async request body.
  body: {
    accountId: "1234567",
    lambdaArn: "arn:aws:lambda:us-east-1:1234567:function:LogsCollectionAPITest",
  },
};

apiInstance.createAWSLambdaARN(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AWSAccountAndLambdaRequest**| AWS Log Lambda Async request body. |


### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Authentication Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteAWSLambdaARN**
> any deleteAWSLambdaARN(body)

Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

let params:v1.AWSLogsIntegrationApiDeleteAWSLambdaARNRequest = {
  // AWSAccountAndLambdaRequest | Delete AWS Lambda ARN request body.
  body: {
    accountId: "1234567",
    lambdaArn: "arn:aws:lambda:us-east-1:1234567:function:LogsCollectionAPITest",
  },
};

apiInstance.deleteAWSLambdaARN(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AWSAccountAndLambdaRequest**| Delete AWS Lambda ARN request body. |


### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Authentication Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **enableAWSLogServices**
> any enableAWSLogServices(body)

Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

let params:v1.AWSLogsIntegrationApiEnableAWSLogServicesRequest = {
  // AWSLogsServicesRequest | Enable AWS Log Services request body.
  body: {
    accountId: "1234567",
    services: ["s3","elb","elbv2","cloudfront","redshift","lambda"],
  },
};

apiInstance.enableAWSLogServices(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AWSLogsServicesRequest**| Enable AWS Log Services request body. |


### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Authentication Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listAWSLogsIntegrations**
> Array<AWSLogsListResponse> listAWSLogsIntegrations()

List all Datadog-AWS Logs integrations configured in your Datadog account.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);


apiInstance.listAWSLogsIntegrations().then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<AWSLogsListResponse>**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Authentication Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listAWSLogsServices**
> Array<AWSLogsListServicesResponse> listAWSLogsServices()

Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);


apiInstance.listAWSLogsServices().then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<AWSLogsListServicesResponse>**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Authentication Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

