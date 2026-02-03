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
import { CreateTenancyConfigRequest } from "../models/CreateTenancyConfigRequest";
import { TenancyConfig } from "../models/TenancyConfig";
import { TenancyConfigList } from "../models/TenancyConfigList";
import { TenancyProductsList } from "../models/TenancyProductsList";
import { UpdateTenancyConfigRequest } from "../models/UpdateTenancyConfigRequest";

export class OCIIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createTenancyConfig(
    body: CreateTenancyConfigRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createTenancyConfig'");
    if (!_config.unstableOperations["v2.createTenancyConfig"]) {
      throw new Error("Unstable operation 'createTenancyConfig' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTenancyConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/oci/tenancies";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OCIIntegrationApi.createTenancyConfig")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateTenancyConfigRequest", ""),
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

  public async deleteTenancyConfig(
    tenancyOcid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tenancyOcid' is not null or undefined
    if (tenancyOcid === null || tenancyOcid === undefined) {
      throw new RequiredError("tenancyOcid", "deleteTenancyConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/oci/tenancies/{tenancy_ocid}".replace(
        "{tenancy_ocid}",
        encodeURIComponent(String(tenancyOcid))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OCIIntegrationApi.deleteTenancyConfig")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getTenancyConfig(
    tenancyOcid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tenancyOcid' is not null or undefined
    if (tenancyOcid === null || tenancyOcid === undefined) {
      throw new RequiredError("tenancyOcid", "getTenancyConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/oci/tenancies/{tenancy_ocid}".replace(
        "{tenancy_ocid}",
        encodeURIComponent(String(tenancyOcid))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OCIIntegrationApi.getTenancyConfig")
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

  public async getTenancyConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getTenancyConfigs'");
    if (!_config.unstableOperations["v2.getTenancyConfigs"]) {
      throw new Error("Unstable operation 'getTenancyConfigs' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/oci/tenancies";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OCIIntegrationApi.getTenancyConfigs")
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

  public async listTenancyProducts(
    productKeys: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'productKeys' is not null or undefined
    if (productKeys === null || productKeys === undefined) {
      throw new RequiredError("productKeys", "listTenancyProducts");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/oci/products";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OCIIntegrationApi.listTenancyProducts")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (productKeys !== undefined) {
      requestContext.setQueryParam(
        "productKeys",
        ObjectSerializer.serialize(productKeys, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateTenancyConfig(
    tenancyOcid: string,
    body: UpdateTenancyConfigRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tenancyOcid' is not null or undefined
    if (tenancyOcid === null || tenancyOcid === undefined) {
      throw new RequiredError("tenancyOcid", "updateTenancyConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTenancyConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/oci/tenancies/{tenancy_ocid}".replace(
        "{tenancy_ocid}",
        encodeURIComponent(String(tenancyOcid))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OCIIntegrationApi.updateTenancyConfig")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateTenancyConfigRequest", ""),
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

export class OCIIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTenancyConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTenancyConfig(
    response: ResponseContext
  ): Promise<TenancyConfig> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: TenancyConfig = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyConfig"
      ) as TenancyConfig;
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
      const body: TenancyConfig = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyConfig",
        ""
      ) as TenancyConfig;
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
   * @params response Response returned by the server for a request to deleteTenancyConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTenancyConfig(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
      return;
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
   * @params response Response returned by the server for a request to getTenancyConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTenancyConfig(
    response: ResponseContext
  ): Promise<TenancyConfig> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TenancyConfig = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyConfig"
      ) as TenancyConfig;
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
      const body: TenancyConfig = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyConfig",
        ""
      ) as TenancyConfig;
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
   * @params response Response returned by the server for a request to getTenancyConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTenancyConfigs(
    response: ResponseContext
  ): Promise<TenancyConfigList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TenancyConfigList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyConfigList"
      ) as TenancyConfigList;
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
      const body: TenancyConfigList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyConfigList",
        ""
      ) as TenancyConfigList;
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
   * @params response Response returned by the server for a request to listTenancyProducts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTenancyProducts(
    response: ResponseContext
  ): Promise<TenancyProductsList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TenancyProductsList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyProductsList"
      ) as TenancyProductsList;
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
      const body: TenancyProductsList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyProductsList",
        ""
      ) as TenancyProductsList;
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
   * @params response Response returned by the server for a request to updateTenancyConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTenancyConfig(
    response: ResponseContext
  ): Promise<TenancyConfig> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TenancyConfig = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyConfig"
      ) as TenancyConfig;
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
      const body: TenancyConfig = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TenancyConfig",
        ""
      ) as TenancyConfig;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface OCIIntegrationApiCreateTenancyConfigRequest {
  /**
   * @type CreateTenancyConfigRequest
   */
  body: CreateTenancyConfigRequest;
}

export interface OCIIntegrationApiDeleteTenancyConfigRequest {
  /**
   * The OCID of the tenancy config to delete.
   * @type string
   */
  tenancyOcid: string;
}

export interface OCIIntegrationApiGetTenancyConfigRequest {
  /**
   * The OCID of the tenancy config to retrieve.
   * @type string
   */
  tenancyOcid: string;
}

export interface OCIIntegrationApiListTenancyProductsRequest {
  /**
   * Comma-separated list of product keys to filter by.
   * @type string
   */
  productKeys: string;
}

export interface OCIIntegrationApiUpdateTenancyConfigRequest {
  /**
   * The OCID of the tenancy config to update.
   * @type string
   */
  tenancyOcid: string;
  /**
   * @type UpdateTenancyConfigRequest
   */
  body: UpdateTenancyConfigRequest;
}

export class OCIIntegrationApi {
  private requestFactory: OCIIntegrationApiRequestFactory;
  private responseProcessor: OCIIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OCIIntegrationApiRequestFactory,
    responseProcessor?: OCIIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new OCIIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OCIIntegrationApiResponseProcessor();
  }

  /**
   * Create a new tenancy config to establish monitoring and data collection from your OCI environment. Requires OCI authentication credentials and tenancy details. Warning: Datadog recommends interacting with this endpoint only through the Datadog web UI to ensure all necessary OCI resources have been created and configured properly.
   * @param param The request object
   */
  public createTenancyConfig(
    param: OCIIntegrationApiCreateTenancyConfigRequest,
    options?: Configuration
  ): Promise<TenancyConfig> {
    const requestContextPromise = this.requestFactory.createTenancyConfig(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTenancyConfig(responseContext);
        });
    });
  }

  /**
   * Delete an existing tenancy config. This will stop all data collection from the specified OCI tenancy and remove the stored configuration. This operation cannot be undone.
   * @param param The request object
   */
  public deleteTenancyConfig(
    param: OCIIntegrationApiDeleteTenancyConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTenancyConfig(
      param.tenancyOcid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTenancyConfig(responseContext);
        });
    });
  }

  /**
   * Get a single tenancy config object by its OCID. Returns detailed configuration including authentication credentials, enabled services, region settings, and collection preferences.
   * @param param The request object
   */
  public getTenancyConfig(
    param: OCIIntegrationApiGetTenancyConfigRequest,
    options?: Configuration
  ): Promise<TenancyConfig> {
    const requestContextPromise = this.requestFactory.getTenancyConfig(
      param.tenancyOcid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTenancyConfig(responseContext);
        });
    });
  }

  /**
   * Get a list of all configured OCI tenancy integrations. Returns basic information about each tenancy including authentication credentials, region settings, and collection preferences for metrics, logs, and resources.
   * @param param The request object
   */
  public getTenancyConfigs(
    options?: Configuration
  ): Promise<TenancyConfigList> {
    const requestContextPromise =
      this.requestFactory.getTenancyConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTenancyConfigs(responseContext);
        });
    });
  }

  /**
   * Lists the products for a given tenancy. Returns the enabled/disabled status of Datadog products (such as Cloud Security Posture Management) for specific OCI tenancies.
   * @param param The request object
   */
  public listTenancyProducts(
    param: OCIIntegrationApiListTenancyProductsRequest,
    options?: Configuration
  ): Promise<TenancyProductsList> {
    const requestContextPromise = this.requestFactory.listTenancyProducts(
      param.productKeys,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTenancyProducts(responseContext);
        });
    });
  }

  /**
   * Update an existing tenancy config. You can modify authentication credentials, enable/disable collection types, update service filters, and change region settings. Warning: We recommend using the Datadog web UI to avoid unintended update effects.
   * @param param The request object
   */
  public updateTenancyConfig(
    param: OCIIntegrationApiUpdateTenancyConfigRequest,
    options?: Configuration
  ): Promise<TenancyConfig> {
    const requestContextPromise = this.requestFactory.updateTenancyConfig(
      param.tenancyOcid,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTenancyConfig(responseContext);
        });
    });
  }
}
