import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { AwsScanOptionsResponse } from "../models/AwsScanOptionsResponse";

export class AgentlessScanningApiRequestFactory extends BaseAPIRequestFactory {
  public async listAwsScanOptions(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/agentless_scanning/accounts/aws";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.listAwsScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class AgentlessScanningApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAwsScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAwsScanOptions(
    response: ResponseContext
  ): Promise<AwsScanOptionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsScanOptionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsScanOptionsResponse"
      ) as AwsScanOptionsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AwsScanOptionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsScanOptionsResponse",
        ""
      ) as AwsScanOptionsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export class AgentlessScanningApi {
  private requestFactory: AgentlessScanningApiRequestFactory;
  private responseProcessor: AgentlessScanningApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AgentlessScanningApiRequestFactory,
    responseProcessor?: AgentlessScanningApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AgentlessScanningApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AgentlessScanningApiResponseProcessor();
  }

  /**
   * Fetches the scan options configured for AWS accounts.
   * @param param The request object
   */
  public listAwsScanOptions(
    options?: Configuration
  ): Promise<AwsScanOptionsResponse> {
    const requestContextPromise =
      this.requestFactory.listAwsScanOptions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAwsScanOptions(responseContext);
        });
    });
  }
}
