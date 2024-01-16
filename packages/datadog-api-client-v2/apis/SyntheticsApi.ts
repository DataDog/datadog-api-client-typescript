import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
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
import { OnDemandConcurrencyCapAttributes } from "../models/OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapResponse } from "../models/OnDemandConcurrencyCapResponse";

export class SyntheticsApiRequestFactory extends BaseAPIRequestFactory {
  public async getOnDemandConcurrencyCap(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/settings/on_demand_concurrency_cap";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getOnDemandConcurrencyCap")
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

  public async setOnDemandConcurrencyCap(
    body: OnDemandConcurrencyCapAttributes,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "setOnDemandConcurrencyCap");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/settings/on_demand_concurrency_cap";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.setOnDemandConcurrencyCap")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OnDemandConcurrencyCapAttributes", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class SyntheticsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getOnDemandConcurrencyCap
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnDemandConcurrencyCap(
    response: ResponseContext
  ): Promise<OnDemandConcurrencyCapResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnDemandConcurrencyCapResponse"
      ) as OnDemandConcurrencyCapResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnDemandConcurrencyCapResponse",
        ""
      ) as OnDemandConcurrencyCapResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to setOnDemandConcurrencyCap
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async setOnDemandConcurrencyCap(
    response: ResponseContext
  ): Promise<OnDemandConcurrencyCapResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnDemandConcurrencyCapResponse"
      ) as OnDemandConcurrencyCapResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnDemandConcurrencyCapResponse",
        ""
      ) as OnDemandConcurrencyCapResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SyntheticsApiSetOnDemandConcurrencyCapRequest {
  /**
   * .
   * @type OnDemandConcurrencyCapAttributes
   */
  body: OnDemandConcurrencyCapAttributes;
}

export class SyntheticsApi {
  private requestFactory: SyntheticsApiRequestFactory;
  private responseProcessor: SyntheticsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SyntheticsApiRequestFactory,
    responseProcessor?: SyntheticsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SyntheticsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SyntheticsApiResponseProcessor();
  }

  /**
   * Get the on-demand concurrency cap.
   * @param param The request object
   */
  public getOnDemandConcurrencyCap(
    options?: Configuration
  ): Promise<OnDemandConcurrencyCapResponse> {
    const requestContextPromise =
      this.requestFactory.getOnDemandConcurrencyCap(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnDemandConcurrencyCap(
            responseContext
          );
        });
    });
  }

  /**
   * Save new value for on-demand concurrency cap.
   * @param param The request object
   */
  public setOnDemandConcurrencyCap(
    param: SyntheticsApiSetOnDemandConcurrencyCapRequest,
    options?: Configuration
  ): Promise<OnDemandConcurrencyCapResponse> {
    const requestContextPromise = this.requestFactory.setOnDemandConcurrencyCap(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.setOnDemandConcurrencyCap(
            responseContext
          );
        });
    });
  }
}
