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
import { DatasetRestrictionResponse } from "./models/DatasetRestrictionResponse";
import { DatasetRestrictionsListResponse } from "./models/DatasetRestrictionsListResponse";
import { DatasetRestrictionUpdateRequest } from "./models/DatasetRestrictionUpdateRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class DatasetRestrictionsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("dataset-restrictions", version);
    }
  }
  public async listDatasetRestrictions(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "DatasetRestrictionsApi.v2.listDatasetRestrictions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listDatasetRestrictions' is disabled. Enable it by setting `configuration.unstableOperations['DatasetRestrictionsApi.v2.listDatasetRestrictions'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/dataset_restrictions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DatasetRestrictionsApi.v2.listDatasetRestrictions",
      DatasetRestrictionsApi.operationServers,
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

  public async updateDatasetRestriction(
    productType: string,
    body: DatasetRestrictionUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "DatasetRestrictionsApi.v2.updateDatasetRestriction"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateDatasetRestriction' is disabled. Enable it by setting `configuration.unstableOperations['DatasetRestrictionsApi.v2.updateDatasetRestriction'] = true`",
      );
    }

    // verify required parameter 'productType' is not null or undefined
    if (productType === null || productType === undefined) {
      throw new RequiredError("productType", "updateDatasetRestriction");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDatasetRestriction");
    }

    // Path Params
    const localVarPath = "/api/v2/dataset_restrictions/{product_type}".replace(
      "{product_type}",
      encodeURIComponent(String(productType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DatasetRestrictionsApi.v2.updateDatasetRestriction",
      DatasetRestrictionsApi.operationServers,
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
      serialize(body, TypingInfo, "DatasetRestrictionUpdateRequest", ""),
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
}

export class DatasetRestrictionsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listDatasetRestrictions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDatasetRestrictions(
    response: ResponseContext,
  ): Promise<DatasetRestrictionsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DatasetRestrictionsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetRestrictionsListResponse",
      ) as DatasetRestrictionsListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
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
      const body: DatasetRestrictionsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetRestrictionsListResponse",
        "",
      ) as DatasetRestrictionsListResponse;
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
   * @params response Response returned by the server for a request to updateDatasetRestriction
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDatasetRestriction(
    response: ResponseContext,
  ): Promise<DatasetRestrictionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DatasetRestrictionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetRestrictionResponse",
      ) as DatasetRestrictionResponse;
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
      const body: DatasetRestrictionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetRestrictionResponse",
        "",
      ) as DatasetRestrictionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DatasetRestrictionsApiUpdateDatasetRestrictionRequest {
  /**
   * The Datadog product type to configure restrictions for (for example, `rum`, `apm`, or `logs`).
   * @type string
   */
  productType: string;
  /**
   * @type DatasetRestrictionUpdateRequest
   */
  body: DatasetRestrictionUpdateRequest;
}

export class DatasetRestrictionsApi {
  private requestFactory: DatasetRestrictionsApiRequestFactory;
  private responseProcessor: DatasetRestrictionsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: DatasetRestrictionsApiRequestFactory,
    responseProcessor?: DatasetRestrictionsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new DatasetRestrictionsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DatasetRestrictionsApiResponseProcessor();
  }

  /**
   * Retrieve all dataset restriction configurations for the organization.
   * Returns one restriction object per configured product type (for example, RUM, APM, or Logs),
   * including the current restriction mode, ownership mode, and any unrestricted principals.
   * Requires the `user_access_read` permission.
   * @param param The request object
   */
  public listDatasetRestrictions(
    options?: Configuration,
  ): Promise<DatasetRestrictionsListResponse> {
    const requestContextPromise =
      this.requestFactory.listDatasetRestrictions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDatasetRestrictions(
            responseContext,
          );
        });
    });
  }

  /**
   * Update the dataset restriction configuration for a specific product type.
   * Sets the restriction mode, optional ownership mode, and the list of principals
   * that are exempt from restrictions. Requires the `user_access_manage` permission.
   * Changes are audited and take effect immediately.
   * @param param The request object
   */
  public updateDatasetRestriction(
    param: DatasetRestrictionsApiUpdateDatasetRestrictionRequest,
    options?: Configuration,
  ): Promise<DatasetRestrictionResponse> {
    const requestContextPromise = this.requestFactory.updateDatasetRestriction(
      param.productType,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDatasetRestriction(
            responseContext,
          );
        });
    });
  }
}
