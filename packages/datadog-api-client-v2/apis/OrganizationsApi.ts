import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
} from "../../datadog-api-client-common/http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";

export class OrganizationsApiRequestFactory extends BaseAPIRequestFactory {
  public async uploadIdPMetadata(
    idpFile?: HttpFile,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/saml_configurations/idp_metadata";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.uploadIdPMetadata")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
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
   * @params response Response returned by the server for a request to uploadIdPMetadata
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async uploadIdPMetadata(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      return;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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
}

export interface OrganizationsApiUploadIdPMetadataRequest {
  /**
   * The IdP metadata XML file
   * @type HttpFile
   */
  idpFile?: HttpFile;
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
   * Endpoint for uploading IdP metadata for SAML setup.
   *
   * Use this endpoint to upload or replace IdP metadata for SAML login configuration.
   * @param param The request object
   */
  public uploadIdPMetadata(
    param: OrganizationsApiUploadIdPMetadataRequest = {},
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.uploadIdPMetadata(
      param.idpFile,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.uploadIdPMetadata(responseContext);
        });
    });
  }
}
