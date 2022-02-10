import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { logger } from "../../../index";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { MetricAllTagsResponse } from "../models/MetricAllTagsResponse";
import { MetricTagConfigurationCreateRequest } from "../models/MetricTagConfigurationCreateRequest";
import { MetricTagConfigurationMetricTypes } from "../models/MetricTagConfigurationMetricTypes";
import { MetricTagConfigurationResponse } from "../models/MetricTagConfigurationResponse";
import { MetricTagConfigurationUpdateRequest } from "../models/MetricTagConfigurationUpdateRequest";
import { MetricVolumesResponse } from "../models/MetricVolumesResponse";
import { MetricsAndMetricTagConfigurationsResponse } from "../models/MetricsAndMetricTagConfigurationsResponse";

export class MetricsApiRequestFactory extends BaseAPIRequestFactory {
  public async createTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createTagConfiguration'");
    if (!_config.unstableOperations["createTagConfiguration"]) {
      throw new Error(
        "Unstable operation 'createTagConfiguration' is disabled"
      );
    }

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError(
        "Required parameter metricName was null or undefined when calling createTagConfiguration."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createTagConfiguration."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{" + "metric_name" + "}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "MetricsApi.createTagConfiguration"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
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
        "MetricTagConfigurationCreateRequest",
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

  public async deleteTagConfiguration(
    metricName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteTagConfiguration'");
    if (!_config.unstableOperations["deleteTagConfiguration"]) {
      throw new Error(
        "Unstable operation 'deleteTagConfiguration' is disabled"
      );
    }

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError(
        "Required parameter metricName was null or undefined when calling deleteTagConfiguration."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{" + "metric_name" + "}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "MetricsApi.deleteTagConfiguration"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagConfigurationByName(
    metricName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listTagConfigurationByName'");
    if (!_config.unstableOperations["listTagConfigurationByName"]) {
      throw new Error(
        "Unstable operation 'listTagConfigurationByName' is disabled"
      );
    }

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError(
        "Required parameter metricName was null or undefined when calling listTagConfigurationByName."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{" + "metric_name" + "}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "MetricsApi.listTagConfigurationByName"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagConfigurations(
    filterConfigured?: boolean,
    filterTagsConfigured?: string,
    filterMetricType?: MetricTagConfigurationMetricTypes,
    filterIncludePercentiles?: boolean,
    filterTags?: string,
    windowSeconds?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listTagConfigurations'");
    if (!_config.unstableOperations["listTagConfigurations"]) {
      throw new Error("Unstable operation 'listTagConfigurations' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "MetricsApi.listTagConfigurations"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterConfigured !== undefined) {
      requestContext.setQueryParam(
        "filter[configured]",
        ObjectSerializer.serialize(filterConfigured, "boolean", "")
      );
    }
    if (filterTagsConfigured !== undefined) {
      requestContext.setQueryParam(
        "filter[tags_configured]",
        ObjectSerializer.serialize(filterTagsConfigured, "string", "")
      );
    }
    if (filterMetricType !== undefined) {
      requestContext.setQueryParam(
        "filter[metric_type]",
        ObjectSerializer.serialize(
          filterMetricType,
          "MetricTagConfigurationMetricTypes",
          ""
        )
      );
    }
    if (filterIncludePercentiles !== undefined) {
      requestContext.setQueryParam(
        "filter[include_percentiles]",
        ObjectSerializer.serialize(filterIncludePercentiles, "boolean", "")
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", "")
      );
    }
    if (windowSeconds !== undefined) {
      requestContext.setQueryParam(
        "window[seconds]",
        ObjectSerializer.serialize(windowSeconds, "number", "int64")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagsByMetricName(
    metricName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError(
        "Required parameter metricName was null or undefined when calling listTagsByMetricName."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/all-tags".replace(
      "{" + "metric_name" + "}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "MetricsApi.listTagsByMetricName"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listVolumesByMetricName(
    metricName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError(
        "Required parameter metricName was null or undefined when calling listVolumesByMetricName."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/volumes".replace(
      "{" + "metric_name" + "}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "MetricsApi.listVolumesByMetricName"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateTagConfiguration'");
    if (!_config.unstableOperations["updateTagConfiguration"]) {
      throw new Error(
        "Unstable operation 'updateTagConfiguration' is disabled"
      );
    }

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError(
        "Required parameter metricName was null or undefined when calling updateTagConfiguration."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateTagConfiguration."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{" + "metric_name" + "}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "MetricsApi.updateTagConfiguration"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "MetricTagConfigurationUpdateRequest",
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
}

export class MetricsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTagConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTagConfiguration(
    response: ResponseContext
  ): Promise<MetricTagConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse",
        ""
      ) as MetricTagConfigurationResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("409", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(409, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse",
        ""
      ) as MetricTagConfigurationResponse;
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
   * @params response Response returned by the server for a request to deleteTagConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTagConfiguration(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to listTagConfigurationByName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagConfigurationByName(
    response: ResponseContext
  ): Promise<MetricTagConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse",
        ""
      ) as MetricTagConfigurationResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse",
        ""
      ) as MetricTagConfigurationResponse;
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
   * @params response Response returned by the server for a request to listTagConfigurations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagConfigurations(
    response: ResponseContext
  ): Promise<MetricsAndMetricTagConfigurationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: MetricsAndMetricTagConfigurationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MetricsAndMetricTagConfigurationsResponse",
          ""
        ) as MetricsAndMetricTagConfigurationsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricsAndMetricTagConfigurationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MetricsAndMetricTagConfigurationsResponse",
          ""
        ) as MetricsAndMetricTagConfigurationsResponse;
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
   * @params response Response returned by the server for a request to listTagsByMetricName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagsByMetricName(
    response: ResponseContext
  ): Promise<MetricAllTagsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: MetricAllTagsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricAllTagsResponse",
        ""
      ) as MetricAllTagsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricAllTagsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricAllTagsResponse",
        ""
      ) as MetricAllTagsResponse;
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
   * @params response Response returned by the server for a request to listVolumesByMetricName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listVolumesByMetricName(
    response: ResponseContext
  ): Promise<MetricVolumesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: MetricVolumesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricVolumesResponse",
        ""
      ) as MetricVolumesResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricVolumesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricVolumesResponse",
        ""
      ) as MetricVolumesResponse;
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
   * @params response Response returned by the server for a request to updateTagConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTagConfiguration(
    response: ResponseContext
  ): Promise<MetricTagConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse",
        ""
      ) as MetricTagConfigurationResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("422", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(422, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse",
        ""
      ) as MetricTagConfigurationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface MetricsApiCreateTagConfigurationRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   *
   * @type MetricTagConfigurationCreateRequest
   */
  body: MetricTagConfigurationCreateRequest;
}

export interface MetricsApiDeleteTagConfigurationRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListTagConfigurationByNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListTagConfigurationsRequest {
  /**
   * Filter metrics that have configured tags.
   * @type boolean
   */
  filterConfigured?: boolean;
  /**
   * Filter tag configurations by configured tags.
   * @type string
   */
  filterTagsConfigured?: string;
  /**
   * Filter tag configurations by metric type.
   * @type MetricTagConfigurationMetricTypes
   */
  filterMetricType?: MetricTagConfigurationMetricTypes;
  /**
   * Filter distributions with additional percentile aggregations enabled or disabled.
   * @type boolean
   */
  filterIncludePercentiles?: boolean;
  /**
   * Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
   * @type string
   */
  filterTags?: string;
  /**
   * The number of seconds of look back (from now) to apply to a filter[tag] query. Defaults value is 3600 (1 hour), maximum value is 172,800 (2 days).
   * @type number
   */
  windowSeconds?: number;
}

export interface MetricsApiListTagsByMetricNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListVolumesByMetricNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiUpdateTagConfigurationRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   *
   * @type MetricTagConfigurationUpdateRequest
   */
  body: MetricTagConfigurationUpdateRequest;
}

export class MetricsApi {
  private requestFactory: MetricsApiRequestFactory;
  private responseProcessor: MetricsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: MetricsApiRequestFactory,
    responseProcessor?: MetricsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new MetricsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new MetricsApiResponseProcessor();
  }

  /**
   * Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric. Optionally, include percentile aggregations on any distribution metric or configure custom aggregations on any count, rate, or gauge metric. Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public createTagConfiguration(
    param: MetricsApiCreateTagConfigurationRequest,
    options?: Configuration
  ): Promise<MetricTagConfigurationResponse> {
    const requestContextPromise = this.requestFactory.createTagConfiguration(
      param.metricName,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTagConfiguration(responseContext);
        });
    });
  }

  /**
   * Deletes a metric's tag configuration. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public deleteTagConfiguration(
    param: MetricsApiDeleteTagConfigurationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTagConfiguration(
      param.metricName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTagConfiguration(responseContext);
        });
    });
  }

  /**
   * Returns the tag configuration for the given metric name.
   * @param param The request object
   */
  public listTagConfigurationByName(
    param: MetricsApiListTagConfigurationByNameRequest,
    options?: Configuration
  ): Promise<MetricTagConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.listTagConfigurationByName(param.metricName, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagConfigurationByName(
            responseContext
          );
        });
    });
  }

  /**
   * Returns all configured count/gauge/rate/distribution metric names (with additional filters if specified).
   * @param param The request object
   */
  public listTagConfigurations(
    param: MetricsApiListTagConfigurationsRequest = {},
    options?: Configuration
  ): Promise<MetricsAndMetricTagConfigurationsResponse> {
    const requestContextPromise = this.requestFactory.listTagConfigurations(
      param.filterConfigured,
      param.filterTagsConfigured,
      param.filterMetricType,
      param.filterIncludePercentiles,
      param.filterTags,
      param.windowSeconds,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagConfigurations(responseContext);
        });
    });
  }

  /**
   * View indexed tag key-value pairs for a given metric name.
   * @param param The request object
   */
  public listTagsByMetricName(
    param: MetricsApiListTagsByMetricNameRequest,
    options?: Configuration
  ): Promise<MetricAllTagsResponse> {
    const requestContextPromise = this.requestFactory.listTagsByMetricName(
      param.metricName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagsByMetricName(responseContext);
        });
    });
  }

  /**
   * View distinct metrics volumes for the given metric name.  Custom distribution metrics will return both ingested and indexed custom metric volumes. For Metrics without Limits&trade; beta customers, all metrics will return both ingested/indexed volumes. Custom metrics generated in-app from other products will return `null` for ingested volumes.
   * @param param The request object
   */
  public listVolumesByMetricName(
    param: MetricsApiListVolumesByMetricNameRequest,
    options?: Configuration
  ): Promise<MetricVolumesResponse> {
    const requestContextPromise = this.requestFactory.listVolumesByMetricName(
      param.metricName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listVolumesByMetricName(
            responseContext
          );
        });
    });
  }

  /**
   * Update the tag configuration of a metric or percentile aggregations of a distribution metric or custom aggregations of a count, rate, or gauge metric. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public updateTagConfiguration(
    param: MetricsApiUpdateTagConfigurationRequest,
    options?: Configuration
  ): Promise<MetricTagConfigurationResponse> {
    const requestContextPromise = this.requestFactory.updateTagConfiguration(
      param.metricName,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTagConfiguration(responseContext);
        });
    });
  }
}
