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
import { ProductAnalyticsAnalyticsListRequest } from "../models/ProductAnalyticsAnalyticsListRequest";
import { ProductAnalyticsAnalyticsListResponse } from "../models/ProductAnalyticsAnalyticsListResponse";
import { ProductAnalyticsAnalyticsRequest } from "../models/ProductAnalyticsAnalyticsRequest";
import { ProductAnalyticsFormulaJourneyRequest } from "../models/ProductAnalyticsFormulaJourneyRequest";
import { ProductAnalyticsFormulaRetentionRequest } from "../models/ProductAnalyticsFormulaRetentionRequest";
import { ProductAnalyticsJourneyFunnelRequest } from "../models/ProductAnalyticsJourneyFunnelRequest";
import { ProductAnalyticsJourneyFunnelResponse } from "../models/ProductAnalyticsJourneyFunnelResponse";
import { ProductAnalyticsJourneyListRequest } from "../models/ProductAnalyticsJourneyListRequest";
import { ProductAnalyticsJourneyListResponse } from "../models/ProductAnalyticsJourneyListResponse";
import { ProductAnalyticsJourneyScalarRequest } from "../models/ProductAnalyticsJourneyScalarRequest";
import { ProductAnalyticsJourneyScalarResponse } from "../models/ProductAnalyticsJourneyScalarResponse";
import { ProductAnalyticsJourneyTimeseriesResponse } from "../models/ProductAnalyticsJourneyTimeseriesResponse";
import { ProductAnalyticsRetentionGridRequest } from "../models/ProductAnalyticsRetentionGridRequest";
import { ProductAnalyticsRetentionGridResponse } from "../models/ProductAnalyticsRetentionGridResponse";
import { ProductAnalyticsRetentionListRequest } from "../models/ProductAnalyticsRetentionListRequest";
import { ProductAnalyticsRetentionListResponse } from "../models/ProductAnalyticsRetentionListResponse";
import { ProductAnalyticsSankeyRequest } from "../models/ProductAnalyticsSankeyRequest";
import { ProductAnalyticsSankeyResponse } from "../models/ProductAnalyticsSankeyResponse";
import { ProductAnalyticsScalarResponse } from "../models/ProductAnalyticsScalarResponse";
import { ProductAnalyticsServerSideEventErrors } from "../models/ProductAnalyticsServerSideEventErrors";
import { ProductAnalyticsServerSideEventItem } from "../models/ProductAnalyticsServerSideEventItem";
import { ProductAnalyticsTimeseriesResponse } from "../models/ProductAnalyticsTimeseriesResponse";

export class ProductAnalyticsApiRequestFactory extends BaseAPIRequestFactory {
  public async queryProductAnalyticsJourneyFunnel(
    body: ProductAnalyticsJourneyFunnelRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'queryProductAnalyticsJourneyFunnel'"
    );
    if (!_config.unstableOperations["v2.queryProductAnalyticsJourneyFunnel"]) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsJourneyFunnel' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsJourneyFunnel");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/journey/funnel";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsJourneyFunnel")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsJourneyFunnelRequest",
        ""
      ),
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

  public async queryProductAnalyticsJourneyList(
    body: ProductAnalyticsJourneyListRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'queryProductAnalyticsJourneyList'");
    if (!_config.unstableOperations["v2.queryProductAnalyticsJourneyList"]) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsJourneyList' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsJourneyList");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/journey/list";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsJourneyList")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsJourneyListRequest",
        ""
      ),
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

  public async queryProductAnalyticsJourneyScalar(
    body: ProductAnalyticsJourneyScalarRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'queryProductAnalyticsJourneyScalar'"
    );
    if (!_config.unstableOperations["v2.queryProductAnalyticsJourneyScalar"]) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsJourneyScalar' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsJourneyScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/journey/scalar";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsJourneyScalar")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsJourneyScalarRequest",
        ""
      ),
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

  public async queryProductAnalyticsJourneyTimeseries(
    body: ProductAnalyticsFormulaJourneyRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'queryProductAnalyticsJourneyTimeseries'"
    );
    if (
      !_config.unstableOperations["v2.queryProductAnalyticsJourneyTimeseries"]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsJourneyTimeseries' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsJourneyTimeseries");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/journey/timeseries";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ProductAnalyticsApi.queryProductAnalyticsJourneyTimeseries"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsFormulaJourneyRequest",
        ""
      ),
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

  public async queryProductAnalyticsList(
    body: ProductAnalyticsAnalyticsListRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'queryProductAnalyticsList'");
    if (!_config.unstableOperations["v2.queryProductAnalyticsList"]) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsList' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsList");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/analytics/list";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsList")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsAnalyticsListRequest",
        ""
      ),
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

  public async queryProductAnalyticsRetentionGrid(
    body: ProductAnalyticsRetentionGridRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'queryProductAnalyticsRetentionGrid'"
    );
    if (!_config.unstableOperations["v2.queryProductAnalyticsRetentionGrid"]) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsRetentionGrid' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsRetentionGrid");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/retention/grid";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsRetentionGrid")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsRetentionGridRequest",
        ""
      ),
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

  public async queryProductAnalyticsRetentionList(
    body: ProductAnalyticsRetentionListRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'queryProductAnalyticsRetentionList'"
    );
    if (!_config.unstableOperations["v2.queryProductAnalyticsRetentionList"]) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsRetentionList' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsRetentionList");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/retention/list";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsRetentionList")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsRetentionListRequest",
        ""
      ),
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

  public async queryProductAnalyticsRetentionScalar(
    body: ProductAnalyticsFormulaRetentionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'queryProductAnalyticsRetentionScalar'"
    );
    if (
      !_config.unstableOperations["v2.queryProductAnalyticsRetentionScalar"]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsRetentionScalar' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsRetentionScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/retention/scalar";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsRetentionScalar")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsFormulaRetentionRequest",
        ""
      ),
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

  public async queryProductAnalyticsRetentionTimeseries(
    body: ProductAnalyticsFormulaRetentionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'queryProductAnalyticsRetentionTimeseries'"
    );
    if (
      !_config.unstableOperations["v2.queryProductAnalyticsRetentionTimeseries"]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsRetentionTimeseries' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "queryProductAnalyticsRetentionTimeseries"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/retention/timeseries";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ProductAnalyticsApi.queryProductAnalyticsRetentionTimeseries"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsFormulaRetentionRequest",
        ""
      ),
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

  public async queryProductAnalyticsSankey(
    body: ProductAnalyticsSankeyRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'queryProductAnalyticsSankey'");
    if (!_config.unstableOperations["v2.queryProductAnalyticsSankey"]) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsSankey' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsSankey");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/sankey";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsSankey")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ProductAnalyticsSankeyRequest", ""),
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

  public async queryProductAnalyticsScalar(
    body: ProductAnalyticsAnalyticsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/analytics/scalar";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsScalar")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ProductAnalyticsAnalyticsRequest", ""),
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

  public async queryProductAnalyticsTimeseries(
    body: ProductAnalyticsAnalyticsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsTimeseries");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/analytics/timeseries";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.queryProductAnalyticsTimeseries")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ProductAnalyticsAnalyticsRequest", ""),
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

  public async submitProductAnalyticsEvent(
    body: ProductAnalyticsServerSideEventItem,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitProductAnalyticsEvent");
    }

    // Path Params
    const localVarPath = "/api/v2/prodlytics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.submitProductAnalyticsEvent")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ProductAnalyticsServerSideEventItem",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }
}

export class ProductAnalyticsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to queryProductAnalyticsJourneyFunnel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsJourneyFunnel(
    response: ResponseContext
  ): Promise<ProductAnalyticsJourneyFunnelResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsJourneyFunnelResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsJourneyFunnelResponse"
        ) as ProductAnalyticsJourneyFunnelResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsJourneyFunnelResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsJourneyFunnelResponse",
          ""
        ) as ProductAnalyticsJourneyFunnelResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsJourneyList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsJourneyList(
    response: ResponseContext
  ): Promise<ProductAnalyticsJourneyListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsJourneyListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsJourneyListResponse"
        ) as ProductAnalyticsJourneyListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsJourneyListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsJourneyListResponse",
          ""
        ) as ProductAnalyticsJourneyListResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsJourneyScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsJourneyScalar(
    response: ResponseContext
  ): Promise<ProductAnalyticsJourneyScalarResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsJourneyScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsJourneyScalarResponse"
        ) as ProductAnalyticsJourneyScalarResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsJourneyScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsJourneyScalarResponse",
          ""
        ) as ProductAnalyticsJourneyScalarResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsJourneyTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsJourneyTimeseries(
    response: ResponseContext
  ): Promise<ProductAnalyticsJourneyTimeseriesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsJourneyTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsJourneyTimeseriesResponse"
        ) as ProductAnalyticsJourneyTimeseriesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsJourneyTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsJourneyTimeseriesResponse",
          ""
        ) as ProductAnalyticsJourneyTimeseriesResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsList(
    response: ResponseContext
  ): Promise<ProductAnalyticsAnalyticsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsAnalyticsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsAnalyticsListResponse"
        ) as ProductAnalyticsAnalyticsListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsAnalyticsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsAnalyticsListResponse",
          ""
        ) as ProductAnalyticsAnalyticsListResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsRetentionGrid
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsRetentionGrid(
    response: ResponseContext
  ): Promise<ProductAnalyticsRetentionGridResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsRetentionGridResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsRetentionGridResponse"
        ) as ProductAnalyticsRetentionGridResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsRetentionGridResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsRetentionGridResponse",
          ""
        ) as ProductAnalyticsRetentionGridResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsRetentionList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsRetentionList(
    response: ResponseContext
  ): Promise<ProductAnalyticsRetentionListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsRetentionListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsRetentionListResponse"
        ) as ProductAnalyticsRetentionListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsRetentionListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsRetentionListResponse",
          ""
        ) as ProductAnalyticsRetentionListResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsRetentionScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsRetentionScalar(
    response: ResponseContext
  ): Promise<ProductAnalyticsScalarResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsScalarResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ProductAnalyticsScalarResponse"
      ) as ProductAnalyticsScalarResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsScalarResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ProductAnalyticsScalarResponse",
        ""
      ) as ProductAnalyticsScalarResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsRetentionTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsRetentionTimeseries(
    response: ResponseContext
  ): Promise<ProductAnalyticsTimeseriesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsTimeseriesResponse"
        ) as ProductAnalyticsTimeseriesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsTimeseriesResponse",
          ""
        ) as ProductAnalyticsTimeseriesResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsSankey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsSankey(
    response: ResponseContext
  ): Promise<ProductAnalyticsSankeyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsSankeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ProductAnalyticsSankeyResponse"
      ) as ProductAnalyticsSankeyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsSankeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ProductAnalyticsSankeyResponse",
        ""
      ) as ProductAnalyticsSankeyResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsScalar(
    response: ResponseContext
  ): Promise<ProductAnalyticsScalarResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsScalarResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ProductAnalyticsScalarResponse"
      ) as ProductAnalyticsScalarResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsScalarResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ProductAnalyticsScalarResponse",
        ""
      ) as ProductAnalyticsScalarResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsTimeseries(
    response: ResponseContext
  ): Promise<ProductAnalyticsTimeseriesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsTimeseriesResponse"
        ) as ProductAnalyticsTimeseriesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ProductAnalyticsTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ProductAnalyticsTimeseriesResponse",
          ""
        ) as ProductAnalyticsTimeseriesResponse;
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
   * @params response Response returned by the server for a request to submitProductAnalyticsEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitProductAnalyticsEvent(
    response: ResponseContext
  ): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 408 ||
      response.httpStatusCode === 413 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500 ||
      response.httpStatusCode === 503
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: ProductAnalyticsServerSideEventErrors;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "ProductAnalyticsServerSideEventErrors"
        ) as ProductAnalyticsServerSideEventErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<ProductAnalyticsServerSideEventErrors>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<ProductAnalyticsServerSideEventErrors>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ProductAnalyticsApiQueryProductAnalyticsJourneyFunnelRequest {
  /**
   * @type ProductAnalyticsJourneyFunnelRequest
   */
  body: ProductAnalyticsJourneyFunnelRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsJourneyListRequest {
  /**
   * @type ProductAnalyticsJourneyListRequest
   */
  body: ProductAnalyticsJourneyListRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsJourneyScalarRequest {
  /**
   * @type ProductAnalyticsJourneyScalarRequest
   */
  body: ProductAnalyticsJourneyScalarRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsJourneyTimeseriesRequest {
  /**
   * @type ProductAnalyticsFormulaJourneyRequest
   */
  body: ProductAnalyticsFormulaJourneyRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsListRequest {
  /**
   * @type ProductAnalyticsAnalyticsListRequest
   */
  body: ProductAnalyticsAnalyticsListRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsRetentionGridRequest {
  /**
   * The retention grid query.
   * @type ProductAnalyticsRetentionGridRequest
   */
  body: ProductAnalyticsRetentionGridRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsRetentionListRequest {
  /**
   * The retention list query.
   * @type ProductAnalyticsRetentionListRequest
   */
  body: ProductAnalyticsRetentionListRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsRetentionScalarRequest {
  /**
   * The retention scalar query.
   * @type ProductAnalyticsFormulaRetentionRequest
   */
  body: ProductAnalyticsFormulaRetentionRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsRetentionTimeseriesRequest {
  /**
   * The retention timeseries query.
   * @type ProductAnalyticsFormulaRetentionRequest
   */
  body: ProductAnalyticsFormulaRetentionRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsSankeyRequest {
  /**
   * The Sankey diagram query.
   * @type ProductAnalyticsSankeyRequest
   */
  body: ProductAnalyticsSankeyRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsScalarRequest {
  /**
   * @type ProductAnalyticsAnalyticsRequest
   */
  body: ProductAnalyticsAnalyticsRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsTimeseriesRequest {
  /**
   * @type ProductAnalyticsAnalyticsRequest
   */
  body: ProductAnalyticsAnalyticsRequest;
}

export interface ProductAnalyticsApiSubmitProductAnalyticsEventRequest {
  /**
   * Server-side event to send (JSON format).
   * @type ProductAnalyticsServerSideEventItem
   */
  body: ProductAnalyticsServerSideEventItem;
}

export class ProductAnalyticsApi {
  private requestFactory: ProductAnalyticsApiRequestFactory;
  private responseProcessor: ProductAnalyticsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ProductAnalyticsApiRequestFactory,
    responseProcessor?: ProductAnalyticsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ProductAnalyticsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ProductAnalyticsApiResponseProcessor();
  }

  /**
   * Compute a funnel over an ordered sequence of Product Analytics events.
   * Returns the per-step conversion counts, conversion rates, and elapsed times,
   * optionally segmented by group-by facets.
   * @param param The request object
   */
  public queryProductAnalyticsJourneyFunnel(
    param: ProductAnalyticsApiQueryProductAnalyticsJourneyFunnelRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsJourneyFunnelResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsJourneyFunnel(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsJourneyFunnel(
            responseContext
          );
        });
    });
  }

  /**
   * Return the individual sessions that reached, or dropped off at, a given step of the journey.
   * Each row contains the identity join key, the event timestamp, and the columns requested
   * in `entity_columns`.
   * @param param The request object
   */
  public queryProductAnalyticsJourneyList(
    param: ProductAnalyticsApiQueryProductAnalyticsJourneyListRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsJourneyListResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsJourneyList(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsJourneyList(
            responseContext
          );
        });
    });
  }

  /**
   * Compute scalar results for a journey query, such as the conversion count,
   * the conversion rate, or the time to convert, optionally segmented by group-by facets.
   * @param param The request object
   */
  public queryProductAnalyticsJourneyScalar(
    param: ProductAnalyticsApiQueryProductAnalyticsJourneyScalarRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsJourneyScalarResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsJourneyScalar(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsJourneyScalar(
            responseContext
          );
        });
    });
  }

  /**
   * Compute timeseries results for a journey query.
   * Returns one series per group-by combination, bucketed by the requested interval.
   * @param param The request object
   */
  public queryProductAnalyticsJourneyTimeseries(
    param: ProductAnalyticsApiQueryProductAnalyticsJourneyTimeseriesRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsJourneyTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsJourneyTimeseries(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsJourneyTimeseries(
            responseContext
          );
        });
    });
  }

  /**
   * List the individual event records matching an analytics query.
   * Use `columns` to choose the attributes returned on each row, `sort` to order the rows,
   * and `limit` to cap how many are returned.
   * @param param The request object
   */
  public queryProductAnalyticsList(
    param: ProductAnalyticsApiQueryProductAnalyticsListRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsAnalyticsListResponse> {
    const requestContextPromise = this.requestFactory.queryProductAnalyticsList(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsList(
            responseContext
          );
        });
    });
  }

  /**
   * Compute a retention grid, showing how much of each cohort came back over each subsequent period.
   * Rows are cohorts, columns are return periods, and each cell holds the count and rate of entities that returned.
   * @param param The request object
   */
  public queryProductAnalyticsRetentionGrid(
    param: ProductAnalyticsApiQueryProductAnalyticsRetentionGridRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsRetentionGridResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsRetentionGrid(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsRetentionGrid(
            responseContext
          );
        });
    });
  }

  /**
   * List the individual users or accounts counted in one cell of the retention grid.
   * Set `computation_scope` to the cohort and return period you want to examine.
   * @param param The request object
   */
  public queryProductAnalyticsRetentionList(
    param: ProductAnalyticsApiQueryProductAnalyticsRetentionListRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsRetentionListResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsRetentionList(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsRetentionList(
            responseContext
          );
        });
    });
  }

  /**
   * Compute retention as a single value per group, suitable for a query value or top list widget.
   * @param param The request object
   */
  public queryProductAnalyticsRetentionScalar(
    param: ProductAnalyticsApiQueryProductAnalyticsRetentionScalarRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsScalarResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsRetentionScalar(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsRetentionScalar(
            responseContext
          );
        });
    });
  }

  /**
   * Compute retention as a series of values over time, using the same query definition as the
   * retention grid.
   * @param param The request object
   */
  public queryProductAnalyticsRetentionTimeseries(
    param: ProductAnalyticsApiQueryProductAnalyticsRetentionTimeseriesRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsRetentionTimeseries(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsRetentionTimeseries(
            responseContext
          );
        });
    });
  }

  /**
   * Compute a Sankey diagram of how sessions flow between the values of two facets,
   * showing where users continue and where they drop off at each step.
   * @param param The request object
   */
  public queryProductAnalyticsSankey(
    param: ProductAnalyticsApiQueryProductAnalyticsSankeyRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsSankeyResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsSankey(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsSankey(
            responseContext
          );
        });
    });
  }

  /**
   * Compute scalar analytics results for Product Analytics data.
   * Returns aggregated values (counts, averages, percentiles) optionally grouped by facets.
   * @param param The request object
   */
  public queryProductAnalyticsScalar(
    param: ProductAnalyticsApiQueryProductAnalyticsScalarRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsScalarResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsScalar(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsScalar(
            responseContext
          );
        });
    });
  }

  /**
   * Compute timeseries analytics results for Product Analytics data.
   * Returns time-bucketed values for charts and trend analysis.
   * The `compute.interval` field (milliseconds) is required for time bucketing.
   * @param param The request object
   */
  public queryProductAnalyticsTimeseries(
    param: ProductAnalyticsApiQueryProductAnalyticsTimeseriesRequest,
    options?: Configuration
  ): Promise<ProductAnalyticsTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsTimeseries(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsTimeseries(
            responseContext
          );
        });
    });
  }

  /**
   * Send server-side events to Product Analytics. Server-side events are retained for 15 months.
   *
   * Server-Side events in Product Analytics are helpful for tracking events that occur on the server,
   * as opposed to client-side events, which are captured by Real User Monitoring (RUM) SDKs.
   * This allows for a more comprehensive view of the user journey by including actions that happen on the server.
   * Typical examples could be `checkout.completed` or `payment.processed`.
   *
   * Ingested server-side events are integrated into Product Analytics to allow users to select and filter
   * these events in the event picker, similar to how views or actions are handled.
   *
   * **Requirements:**
   * - At least one of `usr`, `account`, or `session` must be provided with a valid ID.
   * - The `application.id` must reference a Product Analytics-enabled application.
   *
   * **Custom Attributes:**
   * Any additional fields in the payload are flattened and searchable as facets.
   * For example, a payload with `{"customer": {"tier": "premium"}}` is searchable with
   * the syntax `@customer.tier:premium` in Datadog.
   *
   * The status codes answered by the HTTP API are:
   * - 202: Accepted: The request has been accepted for processing
   * - 400: Bad request (likely an issue in the payload formatting)
   * - 401: Unauthorized (likely a missing API Key)
   * - 403: Permission issue (likely using an invalid API Key)
   * - 408: Request Timeout, request should be retried after some time
   * - 413: Payload too large (batch is above 5MB uncompressed)
   * - 429: Too Many Requests, request should be retried after some time
   * - 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time
   * - 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time
   * @param param The request object
   */
  public submitProductAnalyticsEvent(
    param: ProductAnalyticsApiSubmitProductAnalyticsEventRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise =
      this.requestFactory.submitProductAnalyticsEvent(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitProductAnalyticsEvent(
            responseContext
          );
        });
    });
  }
}
