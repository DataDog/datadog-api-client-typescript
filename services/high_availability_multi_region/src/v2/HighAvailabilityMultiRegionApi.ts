import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { HamrOrgConnectionRequest } from "./models/HamrOrgConnectionRequest";
import { HamrOrgConnectionResponse } from "./models/HamrOrgConnectionResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class HighAvailabilityMultiRegionApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent(
        "high-availability-multi-region",
        version,
      );
    }
  }
  public async createHamrOrgConnection(
    body: HamrOrgConnectionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "HighAvailabilityMultiRegionApi.v2.createHamrOrgConnection"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createHamrOrgConnection' is disabled. Enable it by setting `configuration.unstableOperations['HighAvailabilityMultiRegionApi.v2.createHamrOrgConnection'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createHamrOrgConnection");
    }

    // Path Params
    const localVarPath = "/api/v2/hamr";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "HighAvailabilityMultiRegionApi.v2.createHamrOrgConnection",
      HighAvailabilityMultiRegionApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "HamrOrgConnectionRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getHamrOrgConnection(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "HighAvailabilityMultiRegionApi.v2.getHamrOrgConnection"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getHamrOrgConnection' is disabled. Enable it by setting `configuration.unstableOperations['HighAvailabilityMultiRegionApi.v2.getHamrOrgConnection'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/hamr";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "HighAvailabilityMultiRegionApi.v2.getHamrOrgConnection",
      HighAvailabilityMultiRegionApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class HighAvailabilityMultiRegionApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createHamrOrgConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createHamrOrgConnection(
    response: ResponseContext,
  ): Promise<HamrOrgConnectionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: HamrOrgConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "HamrOrgConnectionResponse",
      ) as HamrOrgConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HamrOrgConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "HamrOrgConnectionResponse",
        "",
      ) as HamrOrgConnectionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getHamrOrgConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHamrOrgConnection(
    response: ResponseContext,
  ): Promise<HamrOrgConnectionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: HamrOrgConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "HamrOrgConnectionResponse",
      ) as HamrOrgConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HamrOrgConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "HamrOrgConnectionResponse",
        "",
      ) as HamrOrgConnectionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface HighAvailabilityMultiRegionApiCreateHamrOrgConnectionRequest {
  /**
   * @type HamrOrgConnectionRequest
   */
  body: HamrOrgConnectionRequest;
}

export class HighAvailabilityMultiRegionApi {
  private requestFactory: HighAvailabilityMultiRegionApiRequestFactory;
  private responseProcessor: HighAvailabilityMultiRegionApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: HighAvailabilityMultiRegionApiRequestFactory,
    responseProcessor?: HighAvailabilityMultiRegionApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new HighAvailabilityMultiRegionApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor ||
      new HighAvailabilityMultiRegionApiResponseProcessor();
  }

  /**
   * Create or update the High Availability Multi-Region (HAMR) organization connection.
   * This endpoint allows you to configure the HAMR connection between the authenticated organization
   * and a target organization, including setting the connection status (ONBOARDING, PASSIVE, FAILOVER, ACTIVE, RECOVERY)
   * @param param The request object
   */
  public createHamrOrgConnection(
    param: HighAvailabilityMultiRegionApiCreateHamrOrgConnectionRequest,
    options?: Configuration,
  ): Promise<HamrOrgConnectionResponse> {
    const requestContextPromise = this.requestFactory.createHamrOrgConnection(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createHamrOrgConnection(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve the High Availability Multi-Region (HAMR) organization connection details for the authenticated organization.
   * This endpoint returns information about the HAMR connection configuration, including the target organization,
   * datacenter, status, and whether this is the primary or secondary organization in the HAMR relationship.
   * @param param The request object
   */
  public getHamrOrgConnection(
    options?: Configuration,
  ): Promise<HamrOrgConnectionResponse> {
    const requestContextPromise =
      this.requestFactory.getHamrOrgConnection(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHamrOrgConnection(responseContext);
        });
    });
  }
}
