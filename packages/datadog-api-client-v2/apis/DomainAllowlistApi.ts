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
import { DomainAllowlistRequest } from "../models/DomainAllowlistRequest";
import { DomainAllowlistResponse } from "../models/DomainAllowlistResponse";

export class DomainAllowlistApiRequestFactory extends BaseAPIRequestFactory {
  public async getDomainAllowlist(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/domain_allowlist";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DomainAllowlistApi.getDomainAllowlist")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async patchDomainAllowlist(
    body: DomainAllowlistRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchDomainAllowlist");
    }

    // Path Params
    const localVarPath = "/api/v2/domain_allowlist";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DomainAllowlistApi.patchDomainAllowlist")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DomainAllowlistRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class DomainAllowlistApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDomainAllowlist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDomainAllowlist(
    response: ResponseContext
  ): Promise<DomainAllowlistResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DomainAllowlistResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DomainAllowlistResponse"
      ) as DomainAllowlistResponse;
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
      const body: DomainAllowlistResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DomainAllowlistResponse",
        ""
      ) as DomainAllowlistResponse;
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
   * @params response Response returned by the server for a request to patchDomainAllowlist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchDomainAllowlist(
    response: ResponseContext
  ): Promise<DomainAllowlistResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DomainAllowlistResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DomainAllowlistResponse"
      ) as DomainAllowlistResponse;
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
      const body: DomainAllowlistResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DomainAllowlistResponse",
        ""
      ) as DomainAllowlistResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DomainAllowlistApiPatchDomainAllowlistRequest {
  /**
   * @type DomainAllowlistRequest
   */
  body: DomainAllowlistRequest;
}

export class DomainAllowlistApi {
  private requestFactory: DomainAllowlistApiRequestFactory;
  private responseProcessor: DomainAllowlistApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DomainAllowlistApiRequestFactory,
    responseProcessor?: DomainAllowlistApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DomainAllowlistApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DomainAllowlistApiResponseProcessor();
  }

  /**
   * Get the domain allowlist for an organization.
   * @param param The request object
   */
  public getDomainAllowlist(
    options?: Configuration
  ): Promise<DomainAllowlistResponse> {
    const requestContextPromise =
      this.requestFactory.getDomainAllowlist(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDomainAllowlist(responseContext);
        });
    });
  }

  /**
   * Update the domain allowlist for an organization.
   * @param param The request object
   */
  public patchDomainAllowlist(
    param: DomainAllowlistApiPatchDomainAllowlistRequest,
    options?: Configuration
  ): Promise<DomainAllowlistResponse> {
    const requestContextPromise = this.requestFactory.patchDomainAllowlist(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchDomainAllowlist(responseContext);
        });
    });
  }
}
