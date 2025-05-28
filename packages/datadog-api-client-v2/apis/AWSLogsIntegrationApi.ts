import { BaseAPIRequestFactory, RequiredError } from "../../datadog-api-client-common/baseapi";
import { Configuration, applySecurityAuthentication} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile
  } from "../../datadog-api-client-common/http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";


import { APIErrorResponse } from "../models/APIErrorResponse";
import { AWSLogsServicesResponse } from "../models/AWSLogsServicesResponse";

export class AWSLogsIntegrationApiRequestFactory extends BaseAPIRequestFactory {

  public async listAWSLogsServices(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAWSLogsServices'");
    if (!_config.unstableOperations['v2.listAWSLogsServices']) {
      throw new Error("Unstable operation 'listAWSLogsServices' is disabled");
    }

    // Path Params
    const localVarPath = '/api/v2/integration/aws/logs/services';

    // Make Request Context
    const requestContext = _config.getServer('v2.AWSLogsIntegrationApi.listAWSLogsServices').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }
}

export class AWSLogsIntegrationApiResponseProcessor {

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAWSLogsServices
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listAWSLogsServices(response: ResponseContext): Promise<AWSLogsServicesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AWSLogsServicesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSLogsServicesResponse"
      ) as AWSLogsServicesResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSLogsServicesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSLogsServicesResponse", ""
      ) as AWSLogsServicesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export class AWSLogsIntegrationApi {
  private requestFactory: AWSLogsIntegrationApiRequestFactory;
  private responseProcessor: AWSLogsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: AWSLogsIntegrationApiRequestFactory, responseProcessor?: AWSLogsIntegrationApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new AWSLogsIntegrationApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new AWSLogsIntegrationApiResponseProcessor();
  }

  /**
   * Get a list of AWS services that can send logs to Datadog.
   * @param param The request object
   */
  public listAWSLogsServices( options?: Configuration): Promise<AWSLogsServicesResponse> {
    const requestContextPromise = this.requestFactory.listAWSLogsServices(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listAWSLogsServices(responseContext);
        });
    });
  }
}