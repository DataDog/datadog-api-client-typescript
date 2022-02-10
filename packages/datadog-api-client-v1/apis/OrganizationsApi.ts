import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
} from "../http/http";
import FormData from "form-data";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { IdpResponse } from "../models/IdpResponse";
import { Organization } from "../models/Organization";
import { OrganizationCreateBody } from "../models/OrganizationCreateBody";
import { OrganizationCreateResponse } from "../models/OrganizationCreateResponse";
import { OrganizationListResponse } from "../models/OrganizationListResponse";
import { OrganizationResponse } from "../models/OrganizationResponse";

export class OrganizationsApiRequestFactory extends BaseAPIRequestFactory {
  public async createChildOrg(
    body: OrganizationCreateBody,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createChildOrg."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/org";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "OrganizationsApi.createChildOrg"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OrganizationCreateBody", ""),
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

  public async getOrg(
    publicId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling getOrg."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/org/{public_id}".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "OrganizationsApi.getOrg"
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

  public async listOrgs(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/org";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "OrganizationsApi.listOrgs"
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

  public async updateOrg(
    publicId: string,
    body: Organization,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling updateOrg."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateOrg."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/org/{public_id}".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "OrganizationsApi.updateOrg"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Organization", ""),
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

  public async uploadIdPForOrg(
    publicId: string,
    idpFile: HttpFile,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling uploadIdPForOrg."
      );
    }

    // verify required parameter 'idpFile' is not null or undefined
    if (idpFile === null || idpFile === undefined) {
      throw new RequiredError(
        "Required parameter idpFile was null or undefined when calling uploadIdPForOrg."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/org/{public_id}/idp_metadata".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "OrganizationsApi.uploadIdPForOrg"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Form Params
    const localVarFormParams = new FormData();

    if (idpFile !== undefined) {
      // TODO: replace .append with .set
      localVarFormParams.append("idp_file", idpFile.data, idpFile.name);
    }
    requestContext.setBody(localVarFormParams);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class OrganizationsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createChildOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createChildOrg(
    response: ResponseContext
  ): Promise<OrganizationCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: OrganizationCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationCreateResponse",
        ""
      ) as OrganizationCreateResponse;
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
      const body: OrganizationCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationCreateResponse",
        ""
      ) as OrganizationCreateResponse;
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
   * @params response Response returned by the server for a request to getOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOrg(
    response: ResponseContext
  ): Promise<OrganizationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: OrganizationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationResponse",
        ""
      ) as OrganizationResponse;
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
      const body: OrganizationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationResponse",
        ""
      ) as OrganizationResponse;
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
   * @params response Response returned by the server for a request to listOrgs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgs(
    response: ResponseContext
  ): Promise<OrganizationListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: OrganizationListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationListResponse",
        ""
      ) as OrganizationListResponse;
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
      const body: OrganizationListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationListResponse",
        ""
      ) as OrganizationListResponse;
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
   * @params response Response returned by the server for a request to updateOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrg(
    response: ResponseContext
  ): Promise<OrganizationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: OrganizationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationResponse",
        ""
      ) as OrganizationResponse;
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
      const body: OrganizationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationResponse",
        ""
      ) as OrganizationResponse;
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
   * @params response Response returned by the server for a request to uploadIdPForOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async uploadIdPForOrg(
    response: ResponseContext
  ): Promise<IdpResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IdpResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IdpResponse",
        ""
      ) as IdpResponse;
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
    if (isCodeInRange("415", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(415, body);
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
      const body: IdpResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IdpResponse",
        ""
      ) as IdpResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface OrganizationsApiCreateChildOrgRequest {
  /**
   * Organization object that needs to be created
   * @type OrganizationCreateBody
   */
  body: OrganizationCreateBody;
}

export interface OrganizationsApiGetOrgRequest {
  /**
   * The &#x60;public_id&#x60; of the organization you are operating within.
   * @type string
   */
  publicId: string;
}

export interface OrganizationsApiUpdateOrgRequest {
  /**
   * The &#x60;public_id&#x60; of the organization you are operating within.
   * @type string
   */
  publicId: string;
  /**
   *
   * @type Organization
   */
  body: Organization;
}

export interface OrganizationsApiUploadIdPForOrgRequest {
  /**
   * The &#x60;public_id&#x60; of the organization you are operating with
   * @type string
   */
  publicId: string;
  /**
   * The path to the XML metadata file you wish to upload.
   * @type HttpFile
   */
  idpFile: HttpFile;
}

export class OrganizationsApi {
  private requestFactory: OrganizationsApiRequestFactory;
  private responseProcessor: OrganizationsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OrganizationsApiRequestFactory,
    responseProcessor?: OrganizationsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new OrganizationsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OrganizationsApiResponseProcessor();
  }

  /**
   * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `api_key.key`, and `application_key.hash` provided in the response.
   * @param param The request object
   */
  public createChildOrg(
    param: OrganizationsApiCreateChildOrgRequest,
    options?: Configuration
  ): Promise<OrganizationCreateResponse> {
    const requestContextPromise = this.requestFactory.createChildOrg(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createChildOrg(responseContext);
        });
    });
  }

  /**
   * Get organization information.
   * @param param The request object
   */
  public getOrg(
    param: OrganizationsApiGetOrgRequest,
    options?: Configuration
  ): Promise<OrganizationResponse> {
    const requestContextPromise = this.requestFactory.getOrg(
      param.publicId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOrg(responseContext);
        });
    });
  }

  /**
   * List your managed organizations.
   * @param param The request object
   */
  public listOrgs(options?: Configuration): Promise<OrganizationListResponse> {
    const requestContextPromise = this.requestFactory.listOrgs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgs(responseContext);
        });
    });
  }

  /**
   * Update your organization.
   * @param param The request object
   */
  public updateOrg(
    param: OrganizationsApiUpdateOrgRequest,
    options?: Configuration
  ): Promise<OrganizationResponse> {
    const requestContextPromise = this.requestFactory.updateOrg(
      param.publicId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrg(responseContext);
        });
    });
  }

  /**
   * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
   * @param param The request object
   */
  public uploadIdPForOrg(
    param: OrganizationsApiUploadIdPForOrgRequest,
    options?: Configuration
  ): Promise<IdpResponse> {
    const requestContextPromise = this.requestFactory.uploadIdPForOrg(
      param.publicId,
      param.idpFile,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.uploadIdPForOrg(responseContext);
        });
    });
  }
}
