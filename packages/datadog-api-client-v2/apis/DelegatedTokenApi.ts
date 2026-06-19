import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { DelegatedTokenResponse } from "../models/DelegatedTokenResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class DelegatedTokenApiRequestFactory extends BaseAPIRequestFactory {
  public async getDelegatedToken(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/delegated-token";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DelegatedTokenApi.getDelegatedToken")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    return requestContext;
  }
}

export class DelegatedTokenApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDelegatedToken
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDelegatedToken(
    response: ResponseContext
  ): Promise<DelegatedTokenResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DelegatedTokenResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DelegatedTokenResponse"
      ) as DelegatedTokenResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: DelegatedTokenResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DelegatedTokenResponse",
        ""
      ) as DelegatedTokenResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export class DelegatedTokenApi {
  private requestFactory: DelegatedTokenApiRequestFactory;
  private responseProcessor: DelegatedTokenApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DelegatedTokenApiRequestFactory,
    responseProcessor?: DelegatedTokenApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DelegatedTokenApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DelegatedTokenApiResponseProcessor();
  }

  /**
   * Exchange a Workload Identity Federation (WIF) proof or Datadog credentials for a short-lived access token
   * scoped to a Datadog user.
   *
   * To authenticate with a WIF identity, pass the cloud-provider token in the `Authorization` header using
   * the `Bearer` or `Delegated` scheme. Datadog resolves the Datadog user from the persona mapping configured
   * for that cloud identity.
   *
   * To obtain a token for the calling user directly, authenticate with standard Datadog API and application keys.
   *
   * Use the returned `access_token` as a bearer token in subsequent API calls.
   * @param param The request object
   */
  public getDelegatedToken(
    options?: Configuration
  ): Promise<DelegatedTokenResponse> {
    const requestContextPromise =
      this.requestFactory.getDelegatedToken(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDelegatedToken(responseContext);
        });
    });
  }
}
