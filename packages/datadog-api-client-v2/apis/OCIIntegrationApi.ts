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
import { CreateTenancyConfig } from "../models/CreateTenancyConfig";
import { TenancyConfig } from "../models/TenancyConfig";
import { TenancyConfigList } from "../models/TenancyConfigList";
import { UpdateTenancyConfig } from "../models/UpdateTenancyConfig";

export class OCIIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createTenancyConfig(
    body: CreateTenancyConfig,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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
      ObjectSerializer.serialize(body, "CreateTenancyConfig", ""),
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

  public async updateTenancyConfig(
    tenancyOcid: string,
    body: UpdateTenancyConfig,
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
      ObjectSerializer.serialize(body, "UpdateTenancyConfig", ""),
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
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
   * @type CreateTenancyConfig
   */
  body: CreateTenancyConfig;
}

export interface OCIIntegrationApiDeleteTenancyConfigRequest {
  /**
   * Unique tenancy OCID of the OCI integration config.
   * @type string
   */
  tenancyOcid: string;
}

export interface OCIIntegrationApiGetTenancyConfigRequest {
  /**
   * Unique tenancy OCID of the OCI integration config.
   * @type string
   */
  tenancyOcid: string;
}

export interface OCIIntegrationApiUpdateTenancyConfigRequest {
  /**
   * Unique tenancy OCID of the OCI integration config.
   * @type string
   */
  tenancyOcid: string;
  /**
   * @type UpdateTenancyConfig
   */
  body: UpdateTenancyConfig;
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
   * Create a new tenancy config.
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
   * Delete an existing tenancy config.
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
   * Get a single tenancy config object.
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
   * List all tenancy integrations.
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
   * Update an existing tenancy config.
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
