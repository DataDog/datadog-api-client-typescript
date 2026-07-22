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
import { CustomerOrgDisableRequest } from "./models/CustomerOrgDisableRequest";
import { CustomerOrgDisableResponse } from "./models/CustomerOrgDisableResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class CustomerOrgApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("customer-org", version);
    }
  }
  public async disableCustomerOrg(
    body: CustomerOrgDisableRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CustomerOrgApi.v2.disableCustomerOrg"]) {
      throw new Error("Unstable operation 'disableCustomerOrg' is disabled. Enable it by setting `configuration.unstableOperations['CustomerOrgApi.v2.disableCustomerOrg'] = true`");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "disableCustomerOrg");
    }

    // Path Params
    const localVarPath = "/api/v2/org/disable";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("CustomerOrgApi.v2.disableCustomerOrg", CustomerOrgApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.POST, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CustomerOrgDisableRequest", ""),
      contentType,
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

export class CustomerOrgApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to disableCustomerOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async disableCustomerOrg(
    response: ResponseContext,
  ): Promise<CustomerOrgDisableResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CustomerOrgDisableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomerOrgDisableResponse",
      ) as CustomerOrgDisableResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CustomerOrgDisableResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomerOrgDisableResponse",
        "",
      ) as CustomerOrgDisableResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CustomerOrgApiDisableCustomerOrgRequest {
  /**
   * @type CustomerOrgDisableRequest
   */
  body: CustomerOrgDisableRequest;
}

export class CustomerOrgApi {
  private requestFactory: CustomerOrgApiRequestFactory;
  private responseProcessor: CustomerOrgApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: CustomerOrgApiRequestFactory,
    responseProcessor?: CustomerOrgApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CustomerOrgApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CustomerOrgApiResponseProcessor();
  }

  /**
   * Disable the Datadog organization associated with the authenticated user or API key.
   * The request body uses JSON:API format. If `org_uuid` is supplied, it must match
   * the authenticated org or the request is rejected. Successful calls disable the org
   * and return the resulting state from the downstream service. Requires the
   * `org_management` permission.
   * @param param The request object
   */
  public disableCustomerOrg(
    param: CustomerOrgApiDisableCustomerOrgRequest,
    options?: Configuration,
  ): Promise<CustomerOrgDisableResponse> {
    const requestContextPromise = this.requestFactory.disableCustomerOrg(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.disableCustomerOrg(responseContext);
        });
    });
  }
}
