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

import { AllocationExposureScheduleResponse } from "../models/AllocationExposureScheduleResponse";
import { AllocationResponse } from "../models/AllocationResponse";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { CreateAllocationsRequest } from "../models/CreateAllocationsRequest";
import { CreateEnvironmentRequest } from "../models/CreateEnvironmentRequest";
import { CreateFeatureFlagRequest } from "../models/CreateFeatureFlagRequest";
import { CreateFlagSuggestionRequest } from "../models/CreateFlagSuggestionRequest";
import { EnvironmentResponse } from "../models/EnvironmentResponse";
import { FeatureFlagResponse } from "../models/FeatureFlagResponse";
import { FlagSuggestionResponse } from "../models/FlagSuggestionResponse";
import { ListAllocationsResponse } from "../models/ListAllocationsResponse";
import { ListEnvironmentsResponse } from "../models/ListEnvironmentsResponse";
import { ListFeatureFlagsResponse } from "../models/ListFeatureFlagsResponse";
import { OverwriteAllocationsRequest } from "../models/OverwriteAllocationsRequest";
import { ReviewFlagSuggestionRequest } from "../models/ReviewFlagSuggestionRequest";
import { UpdateEnvironmentRequest } from "../models/UpdateEnvironmentRequest";
import { UpdateFeatureFlagRequest } from "../models/UpdateFeatureFlagRequest";

export class FeatureFlagsApiRequestFactory extends BaseAPIRequestFactory {
  public async approveFlagSuggestion(
    suggestionId: string,
    body: ReviewFlagSuggestionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suggestionId' is not null or undefined
    if (suggestionId === null || suggestionId === undefined) {
      throw new RequiredError("suggestionId", "approveFlagSuggestion");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "approveFlagSuggestion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/suggestions/{suggestion_id}/approve".replace(
        "{suggestion_id}",
        encodeURIComponent(String(suggestionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.approveFlagSuggestion")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ReviewFlagSuggestionRequest", ""),
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

  public async archiveFeatureFlag(
    featureFlagId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "archiveFeatureFlag");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/archive".replace(
        "{feature_flag_id}",
        encodeURIComponent(String(featureFlagId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.archiveFeatureFlag")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createAllocationsForFeatureFlagInEnvironment(
    featureFlagId: string,
    environmentId: string,
    body: CreateAllocationsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError(
        "featureFlagId",
        "createAllocationsForFeatureFlagInEnvironment"
      );
    }

    // verify required parameter 'environmentId' is not null or undefined
    if (environmentId === null || environmentId === undefined) {
      throw new RequiredError(
        "environmentId",
        "createAllocationsForFeatureFlagInEnvironment"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createAllocationsForFeatureFlagInEnvironment"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/allocations"
        .replace("{feature_flag_id}", encodeURIComponent(String(featureFlagId)))
        .replace("{environment_id}", encodeURIComponent(String(environmentId)));

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.FeatureFlagsApi.createAllocationsForFeatureFlagInEnvironment"
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
      ObjectSerializer.serialize(body, "CreateAllocationsRequest", ""),
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

  public async createFeatureFlag(
    body: CreateFeatureFlagRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFeatureFlag");
    }

    // Path Params
    const localVarPath = "/api/v2/feature-flags";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.createFeatureFlag")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateFeatureFlagRequest", ""),
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

  public async createFeatureFlagsEnvironment(
    body: CreateEnvironmentRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFeatureFlagsEnvironment");
    }

    // Path Params
    const localVarPath = "/api/v2/feature-flags/environments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.createFeatureFlagsEnvironment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateEnvironmentRequest", ""),
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

  public async createFlagSuggestion(
    featureFlagId: string,
    body: CreateFlagSuggestionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "createFlagSuggestion");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFlagSuggestion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/suggestions".replace(
        "{feature_flag_id}",
        encodeURIComponent(String(featureFlagId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.createFlagSuggestion")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateFlagSuggestionRequest", ""),
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

  public async deleteFeatureFlagsEnvironment(
    environmentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'environmentId' is not null or undefined
    if (environmentId === null || environmentId === undefined) {
      throw new RequiredError("environmentId", "deleteFeatureFlagsEnvironment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/environments/{environment_id}".replace(
        "{environment_id}",
        encodeURIComponent(String(environmentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.deleteFeatureFlagsEnvironment")
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

  public async deleteFlagSuggestion(
    suggestionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suggestionId' is not null or undefined
    if (suggestionId === null || suggestionId === undefined) {
      throw new RequiredError("suggestionId", "deleteFlagSuggestion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/suggestions/{suggestion_id}".replace(
        "{suggestion_id}",
        encodeURIComponent(String(suggestionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.deleteFlagSuggestion")
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

  public async disableFeatureFlagEnvironment(
    featureFlagId: string,
    environmentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "disableFeatureFlagEnvironment");
    }

    // verify required parameter 'environmentId' is not null or undefined
    if (environmentId === null || environmentId === undefined) {
      throw new RequiredError("environmentId", "disableFeatureFlagEnvironment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/disable"
        .replace("{feature_flag_id}", encodeURIComponent(String(featureFlagId)))
        .replace("{environment_id}", encodeURIComponent(String(environmentId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.disableFeatureFlagEnvironment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async enableFeatureFlagEnvironment(
    featureFlagId: string,
    environmentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "enableFeatureFlagEnvironment");
    }

    // verify required parameter 'environmentId' is not null or undefined
    if (environmentId === null || environmentId === undefined) {
      throw new RequiredError("environmentId", "enableFeatureFlagEnvironment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/enable"
        .replace("{feature_flag_id}", encodeURIComponent(String(featureFlagId)))
        .replace("{environment_id}", encodeURIComponent(String(environmentId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.enableFeatureFlagEnvironment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getFeatureFlag(
    featureFlagId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "getFeatureFlag");
    }

    // Path Params
    const localVarPath = "/api/v2/feature-flags/{feature_flag_id}".replace(
      "{feature_flag_id}",
      encodeURIComponent(String(featureFlagId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.getFeatureFlag")
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

  public async getFeatureFlagsEnvironment(
    environmentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'environmentId' is not null or undefined
    if (environmentId === null || environmentId === undefined) {
      throw new RequiredError("environmentId", "getFeatureFlagsEnvironment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/environments/{environment_id}".replace(
        "{environment_id}",
        encodeURIComponent(String(environmentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.getFeatureFlagsEnvironment")
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

  public async getFlagSuggestion(
    suggestionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suggestionId' is not null or undefined
    if (suggestionId === null || suggestionId === undefined) {
      throw new RequiredError("suggestionId", "getFlagSuggestion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/suggestions/{suggestion_id}".replace(
        "{suggestion_id}",
        encodeURIComponent(String(suggestionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.getFlagSuggestion")
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

  public async listFeatureFlags(
    key?: string,
    isArchived?: boolean,
    limit?: number,
    offset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/feature-flags";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.listFeatureFlags")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (key !== undefined) {
      requestContext.setQueryParam(
        "key",
        ObjectSerializer.serialize(key, "string", ""),
        ""
      );
    }
    if (isArchived !== undefined) {
      requestContext.setQueryParam(
        "is_archived",
        ObjectSerializer.serialize(isArchived, "boolean", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
        ""
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", ""),
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

  public async listFeatureFlagsEnvironments(
    name?: string,
    key?: string,
    limit?: number,
    offset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/feature-flags/environments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.listFeatureFlagsEnvironments")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (name !== undefined) {
      requestContext.setQueryParam(
        "name",
        ObjectSerializer.serialize(name, "string", ""),
        ""
      );
    }
    if (key !== undefined) {
      requestContext.setQueryParam(
        "key",
        ObjectSerializer.serialize(key, "string", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
        ""
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", ""),
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

  public async pauseExposureSchedule(
    exposureScheduleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exposureScheduleId' is not null or undefined
    if (exposureScheduleId === null || exposureScheduleId === undefined) {
      throw new RequiredError("exposureScheduleId", "pauseExposureSchedule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/pause".replace(
        "{exposure_schedule_id}",
        encodeURIComponent(String(exposureScheduleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.pauseExposureSchedule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async rejectFlagSuggestion(
    suggestionId: string,
    body: ReviewFlagSuggestionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suggestionId' is not null or undefined
    if (suggestionId === null || suggestionId === undefined) {
      throw new RequiredError("suggestionId", "rejectFlagSuggestion");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "rejectFlagSuggestion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/suggestions/{suggestion_id}/reject".replace(
        "{suggestion_id}",
        encodeURIComponent(String(suggestionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.rejectFlagSuggestion")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ReviewFlagSuggestionRequest", ""),
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

  public async resumeExposureSchedule(
    exposureScheduleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exposureScheduleId' is not null or undefined
    if (exposureScheduleId === null || exposureScheduleId === undefined) {
      throw new RequiredError("exposureScheduleId", "resumeExposureSchedule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/resume".replace(
        "{exposure_schedule_id}",
        encodeURIComponent(String(exposureScheduleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.resumeExposureSchedule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async startExposureSchedule(
    exposureScheduleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exposureScheduleId' is not null or undefined
    if (exposureScheduleId === null || exposureScheduleId === undefined) {
      throw new RequiredError("exposureScheduleId", "startExposureSchedule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/start".replace(
        "{exposure_schedule_id}",
        encodeURIComponent(String(exposureScheduleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.startExposureSchedule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async stopExposureSchedule(
    exposureScheduleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exposureScheduleId' is not null or undefined
    if (exposureScheduleId === null || exposureScheduleId === undefined) {
      throw new RequiredError("exposureScheduleId", "stopExposureSchedule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/stop".replace(
        "{exposure_schedule_id}",
        encodeURIComponent(String(exposureScheduleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.stopExposureSchedule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async unarchiveFeatureFlag(
    featureFlagId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "unarchiveFeatureFlag");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/unarchive".replace(
        "{feature_flag_id}",
        encodeURIComponent(String(featureFlagId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.unarchiveFeatureFlag")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateAllocationsForFeatureFlagInEnvironment(
    featureFlagId: string,
    environmentId: string,
    body: OverwriteAllocationsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError(
        "featureFlagId",
        "updateAllocationsForFeatureFlagInEnvironment"
      );
    }

    // verify required parameter 'environmentId' is not null or undefined
    if (environmentId === null || environmentId === undefined) {
      throw new RequiredError(
        "environmentId",
        "updateAllocationsForFeatureFlagInEnvironment"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateAllocationsForFeatureFlagInEnvironment"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/allocations"
        .replace("{feature_flag_id}", encodeURIComponent(String(featureFlagId)))
        .replace("{environment_id}", encodeURIComponent(String(environmentId)));

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.FeatureFlagsApi.updateAllocationsForFeatureFlagInEnvironment"
      )
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OverwriteAllocationsRequest", ""),
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

  public async updateFeatureFlag(
    featureFlagId: string,
    body: UpdateFeatureFlagRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "updateFeatureFlag");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateFeatureFlag");
    }

    // Path Params
    const localVarPath = "/api/v2/feature-flags/{feature_flag_id}".replace(
      "{feature_flag_id}",
      encodeURIComponent(String(featureFlagId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.updateFeatureFlag")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateFeatureFlagRequest", ""),
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

  public async updateFeatureFlagsEnvironment(
    environmentId: string,
    body: UpdateEnvironmentRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'environmentId' is not null or undefined
    if (environmentId === null || environmentId === undefined) {
      throw new RequiredError("environmentId", "updateFeatureFlagsEnvironment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateFeatureFlagsEnvironment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/environments/{environment_id}".replace(
        "{environment_id}",
        encodeURIComponent(String(environmentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.updateFeatureFlagsEnvironment")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateEnvironmentRequest", ""),
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

export class FeatureFlagsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to approveFlagSuggestion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async approveFlagSuggestion(
    response: ResponseContext
  ): Promise<FlagSuggestionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FlagSuggestionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlagSuggestionResponse"
      ) as FlagSuggestionResponse;
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
      const body: FlagSuggestionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlagSuggestionResponse",
        ""
      ) as FlagSuggestionResponse;
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
   * @params response Response returned by the server for a request to archiveFeatureFlag
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async archiveFeatureFlag(
    response: ResponseContext
  ): Promise<FeatureFlagResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse"
      ) as FeatureFlagResponse;
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
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse",
        ""
      ) as FeatureFlagResponse;
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
   * @params response Response returned by the server for a request to createAllocationsForFeatureFlagInEnvironment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAllocationsForFeatureFlagInEnvironment(
    response: ResponseContext
  ): Promise<AllocationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201 || response.httpStatusCode === 202) {
      const body: AllocationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AllocationResponse"
      ) as AllocationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: AllocationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AllocationResponse",
        ""
      ) as AllocationResponse;
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
   * @params response Response returned by the server for a request to createFeatureFlag
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFeatureFlag(
    response: ResponseContext
  ): Promise<FeatureFlagResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse"
      ) as FeatureFlagResponse;
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
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse",
        ""
      ) as FeatureFlagResponse;
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
   * @params response Response returned by the server for a request to createFeatureFlagsEnvironment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFeatureFlagsEnvironment(
    response: ResponseContext
  ): Promise<EnvironmentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: EnvironmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EnvironmentResponse"
      ) as EnvironmentResponse;
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
      const body: EnvironmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EnvironmentResponse",
        ""
      ) as EnvironmentResponse;
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
   * @params response Response returned by the server for a request to createFlagSuggestion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFlagSuggestion(
    response: ResponseContext
  ): Promise<FlagSuggestionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FlagSuggestionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlagSuggestionResponse"
      ) as FlagSuggestionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: FlagSuggestionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlagSuggestionResponse",
        ""
      ) as FlagSuggestionResponse;
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
   * @params response Response returned by the server for a request to deleteFeatureFlagsEnvironment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteFeatureFlagsEnvironment(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteFlagSuggestion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteFlagSuggestion(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to disableFeatureFlagEnvironment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async disableFeatureFlagEnvironment(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 202) {
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
   * @params response Response returned by the server for a request to enableFeatureFlagEnvironment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async enableFeatureFlagEnvironment(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 202) {
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
   * @params response Response returned by the server for a request to getFeatureFlag
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFeatureFlag(
    response: ResponseContext
  ): Promise<FeatureFlagResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse"
      ) as FeatureFlagResponse;
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
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse",
        ""
      ) as FeatureFlagResponse;
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
   * @params response Response returned by the server for a request to getFeatureFlagsEnvironment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFeatureFlagsEnvironment(
    response: ResponseContext
  ): Promise<EnvironmentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: EnvironmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EnvironmentResponse"
      ) as EnvironmentResponse;
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
      const body: EnvironmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EnvironmentResponse",
        ""
      ) as EnvironmentResponse;
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
   * @params response Response returned by the server for a request to getFlagSuggestion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFlagSuggestion(
    response: ResponseContext
  ): Promise<FlagSuggestionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FlagSuggestionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlagSuggestionResponse"
      ) as FlagSuggestionResponse;
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
      const body: FlagSuggestionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlagSuggestionResponse",
        ""
      ) as FlagSuggestionResponse;
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
   * @params response Response returned by the server for a request to listFeatureFlags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFeatureFlags(
    response: ResponseContext
  ): Promise<ListFeatureFlagsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListFeatureFlagsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListFeatureFlagsResponse"
      ) as ListFeatureFlagsResponse;
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
      const body: ListFeatureFlagsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListFeatureFlagsResponse",
        ""
      ) as ListFeatureFlagsResponse;
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
   * @params response Response returned by the server for a request to listFeatureFlagsEnvironments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFeatureFlagsEnvironments(
    response: ResponseContext
  ): Promise<ListEnvironmentsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListEnvironmentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListEnvironmentsResponse"
      ) as ListEnvironmentsResponse;
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
      const body: ListEnvironmentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListEnvironmentsResponse",
        ""
      ) as ListEnvironmentsResponse;
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
   * @params response Response returned by the server for a request to pauseExposureSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async pauseExposureSchedule(
    response: ResponseContext
  ): Promise<AllocationExposureScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AllocationExposureScheduleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AllocationExposureScheduleResponse"
        ) as AllocationExposureScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: AllocationExposureScheduleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AllocationExposureScheduleResponse",
          ""
        ) as AllocationExposureScheduleResponse;
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
   * @params response Response returned by the server for a request to rejectFlagSuggestion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async rejectFlagSuggestion(
    response: ResponseContext
  ): Promise<FlagSuggestionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FlagSuggestionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlagSuggestionResponse"
      ) as FlagSuggestionResponse;
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
      const body: FlagSuggestionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlagSuggestionResponse",
        ""
      ) as FlagSuggestionResponse;
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
   * @params response Response returned by the server for a request to resumeExposureSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async resumeExposureSchedule(
    response: ResponseContext
  ): Promise<AllocationExposureScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AllocationExposureScheduleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AllocationExposureScheduleResponse"
        ) as AllocationExposureScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: AllocationExposureScheduleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AllocationExposureScheduleResponse",
          ""
        ) as AllocationExposureScheduleResponse;
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
   * @params response Response returned by the server for a request to startExposureSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async startExposureSchedule(
    response: ResponseContext
  ): Promise<AllocationExposureScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AllocationExposureScheduleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AllocationExposureScheduleResponse"
        ) as AllocationExposureScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: AllocationExposureScheduleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AllocationExposureScheduleResponse",
          ""
        ) as AllocationExposureScheduleResponse;
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
   * @params response Response returned by the server for a request to stopExposureSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async stopExposureSchedule(
    response: ResponseContext
  ): Promise<AllocationExposureScheduleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AllocationExposureScheduleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AllocationExposureScheduleResponse"
        ) as AllocationExposureScheduleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: AllocationExposureScheduleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AllocationExposureScheduleResponse",
          ""
        ) as AllocationExposureScheduleResponse;
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
   * @params response Response returned by the server for a request to unarchiveFeatureFlag
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unarchiveFeatureFlag(
    response: ResponseContext
  ): Promise<FeatureFlagResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse"
      ) as FeatureFlagResponse;
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
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse",
        ""
      ) as FeatureFlagResponse;
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
   * @params response Response returned by the server for a request to updateAllocationsForFeatureFlagInEnvironment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAllocationsForFeatureFlagInEnvironment(
    response: ResponseContext
  ): Promise<ListAllocationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 202) {
      const body: ListAllocationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListAllocationsResponse"
      ) as ListAllocationsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: ListAllocationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListAllocationsResponse",
        ""
      ) as ListAllocationsResponse;
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
   * @params response Response returned by the server for a request to updateFeatureFlag
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateFeatureFlag(
    response: ResponseContext
  ): Promise<FeatureFlagResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse"
      ) as FeatureFlagResponse;
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
      const body: FeatureFlagResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FeatureFlagResponse",
        ""
      ) as FeatureFlagResponse;
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
   * @params response Response returned by the server for a request to updateFeatureFlagsEnvironment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateFeatureFlagsEnvironment(
    response: ResponseContext
  ): Promise<EnvironmentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: EnvironmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EnvironmentResponse"
      ) as EnvironmentResponse;
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
      const body: EnvironmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EnvironmentResponse",
        ""
      ) as EnvironmentResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface FeatureFlagsApiApproveFlagSuggestionRequest {
  /**
   * The ID of the flag suggestion.
   * @type string
   */
  suggestionId: string;
  /**
   * @type ReviewFlagSuggestionRequest
   */
  body: ReviewFlagSuggestionRequest;
}

export interface FeatureFlagsApiArchiveFeatureFlagRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
}

export interface FeatureFlagsApiCreateAllocationsForFeatureFlagInEnvironmentRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
  /**
   * The ID of the environment.
   * @type string
   */
  environmentId: string;
  /**
   * @type CreateAllocationsRequest
   */
  body: CreateAllocationsRequest;
}

export interface FeatureFlagsApiCreateFeatureFlagRequest {
  /**
   * @type CreateFeatureFlagRequest
   */
  body: CreateFeatureFlagRequest;
}

export interface FeatureFlagsApiCreateFeatureFlagsEnvironmentRequest {
  /**
   * @type CreateEnvironmentRequest
   */
  body: CreateEnvironmentRequest;
}

export interface FeatureFlagsApiCreateFlagSuggestionRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
  /**
   * @type CreateFlagSuggestionRequest
   */
  body: CreateFlagSuggestionRequest;
}

export interface FeatureFlagsApiDeleteFeatureFlagsEnvironmentRequest {
  /**
   * The ID of the environment.
   * @type string
   */
  environmentId: string;
}

export interface FeatureFlagsApiDeleteFlagSuggestionRequest {
  /**
   * The ID of the flag suggestion.
   * @type string
   */
  suggestionId: string;
}

export interface FeatureFlagsApiDisableFeatureFlagEnvironmentRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
  /**
   * The ID of the environment.
   * @type string
   */
  environmentId: string;
}

export interface FeatureFlagsApiEnableFeatureFlagEnvironmentRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
  /**
   * The ID of the environment.
   * @type string
   */
  environmentId: string;
}

export interface FeatureFlagsApiGetFeatureFlagRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
}

export interface FeatureFlagsApiGetFeatureFlagsEnvironmentRequest {
  /**
   * The ID of the environment.
   * @type string
   */
  environmentId: string;
}

export interface FeatureFlagsApiGetFlagSuggestionRequest {
  /**
   * The ID of the flag suggestion.
   * @type string
   */
  suggestionId: string;
}

export interface FeatureFlagsApiListFeatureFlagsRequest {
  /**
   * Filter feature flags by key (partial matching).
   * @type string
   */
  key?: string;
  /**
   * Filter by archived status.
   * @type boolean
   */
  isArchived?: boolean;
  /**
   * Maximum number of results to return.
   * @type number
   */
  limit?: number;
  /**
   * Number of results to skip.
   * @type number
   */
  offset?: number;
}

export interface FeatureFlagsApiListFeatureFlagsEnvironmentsRequest {
  /**
   * Filter environments by name (partial matching).
   * @type string
   */
  name?: string;
  /**
   * Filter environments by key (partial matching).
   * @type string
   */
  key?: string;
  /**
   * Maximum number of results to return.
   * @type number
   */
  limit?: number;
  /**
   * Number of results to skip.
   * @type number
   */
  offset?: number;
}

export interface FeatureFlagsApiPauseExposureScheduleRequest {
  /**
   * The ID of the exposure schedule.
   * @type string
   */
  exposureScheduleId: string;
}

export interface FeatureFlagsApiRejectFlagSuggestionRequest {
  /**
   * The ID of the flag suggestion.
   * @type string
   */
  suggestionId: string;
  /**
   * @type ReviewFlagSuggestionRequest
   */
  body: ReviewFlagSuggestionRequest;
}

export interface FeatureFlagsApiResumeExposureScheduleRequest {
  /**
   * The ID of the exposure schedule.
   * @type string
   */
  exposureScheduleId: string;
}

export interface FeatureFlagsApiStartExposureScheduleRequest {
  /**
   * The ID of the exposure schedule.
   * @type string
   */
  exposureScheduleId: string;
}

export interface FeatureFlagsApiStopExposureScheduleRequest {
  /**
   * The ID of the exposure schedule.
   * @type string
   */
  exposureScheduleId: string;
}

export interface FeatureFlagsApiUnarchiveFeatureFlagRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
}

export interface FeatureFlagsApiUpdateAllocationsForFeatureFlagInEnvironmentRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
  /**
   * The ID of the environment.
   * @type string
   */
  environmentId: string;
  /**
   * @type OverwriteAllocationsRequest
   */
  body: OverwriteAllocationsRequest;
}

export interface FeatureFlagsApiUpdateFeatureFlagRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
  /**
   * @type UpdateFeatureFlagRequest
   */
  body: UpdateFeatureFlagRequest;
}

export interface FeatureFlagsApiUpdateFeatureFlagsEnvironmentRequest {
  /**
   * The ID of the environment.
   * @type string
   */
  environmentId: string;
  /**
   * @type UpdateEnvironmentRequest
   */
  body: UpdateEnvironmentRequest;
}

export class FeatureFlagsApi {
  private requestFactory: FeatureFlagsApiRequestFactory;
  private responseProcessor: FeatureFlagsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: FeatureFlagsApiRequestFactory,
    responseProcessor?: FeatureFlagsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new FeatureFlagsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new FeatureFlagsApiResponseProcessor();
  }

  /**
   * Approve a pending flag change suggestion. The change is applied immediately
   * upon approval. A user cannot approve their own suggestion.
   * @param param The request object
   */
  public approveFlagSuggestion(
    param: FeatureFlagsApiApproveFlagSuggestionRequest,
    options?: Configuration
  ): Promise<FlagSuggestionResponse> {
    const requestContextPromise = this.requestFactory.approveFlagSuggestion(
      param.suggestionId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.approveFlagSuggestion(responseContext);
        });
    });
  }

  /**
   * Archives a feature flag. Archived flags are
   * hidden from the main list but remain accessible and can be unarchived.
   * @param param The request object
   */
  public archiveFeatureFlag(
    param: FeatureFlagsApiArchiveFeatureFlagRequest,
    options?: Configuration
  ): Promise<FeatureFlagResponse> {
    const requestContextPromise = this.requestFactory.archiveFeatureFlag(
      param.featureFlagId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.archiveFeatureFlag(responseContext);
        });
    });
  }

  /**
   * Creates a new targeting rule (allocation) for a specific feature flag in a specific environment.
   * @param param The request object
   */
  public createAllocationsForFeatureFlagInEnvironment(
    param: FeatureFlagsApiCreateAllocationsForFeatureFlagInEnvironmentRequest,
    options?: Configuration
  ): Promise<AllocationResponse> {
    const requestContextPromise =
      this.requestFactory.createAllocationsForFeatureFlagInEnvironment(
        param.featureFlagId,
        param.environmentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAllocationsForFeatureFlagInEnvironment(
            responseContext
          );
        });
    });
  }

  /**
   * Creates a new feature flag with variants.
   * @param param The request object
   */
  public createFeatureFlag(
    param: FeatureFlagsApiCreateFeatureFlagRequest,
    options?: Configuration
  ): Promise<FeatureFlagResponse> {
    const requestContextPromise = this.requestFactory.createFeatureFlag(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFeatureFlag(responseContext);
        });
    });
  }

  /**
   * Creates a new environment for organizing feature flags.
   * @param param The request object
   */
  public createFeatureFlagsEnvironment(
    param: FeatureFlagsApiCreateFeatureFlagsEnvironmentRequest,
    options?: Configuration
  ): Promise<EnvironmentResponse> {
    const requestContextPromise =
      this.requestFactory.createFeatureFlagsEnvironment(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFeatureFlagsEnvironment(
            responseContext
          );
        });
    });
  }

  /**
   * Create a change suggestion for a feature flag. Suggestions require approval
   * before the change is applied. The request must include at least one
   * notification_rule_targets handle to receive approval or rejection notifications.
   * @param param The request object
   */
  public createFlagSuggestion(
    param: FeatureFlagsApiCreateFlagSuggestionRequest,
    options?: Configuration
  ): Promise<FlagSuggestionResponse> {
    const requestContextPromise = this.requestFactory.createFlagSuggestion(
      param.featureFlagId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFlagSuggestion(responseContext);
        });
    });
  }

  /**
   * Deletes an environment. This operation cannot be undone.
   * @param param The request object
   */
  public deleteFeatureFlagsEnvironment(
    param: FeatureFlagsApiDeleteFeatureFlagsEnvironmentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteFeatureFlagsEnvironment(
        param.environmentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteFeatureFlagsEnvironment(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a pending flag change suggestion. Approved suggestions cannot be deleted.
   * @param param The request object
   */
  public deleteFlagSuggestion(
    param: FeatureFlagsApiDeleteFlagSuggestionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteFlagSuggestion(
      param.suggestionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteFlagSuggestion(responseContext);
        });
    });
  }

  /**
   * Disable a feature flag in a specific environment.
   * @param param The request object
   */
  public disableFeatureFlagEnvironment(
    param: FeatureFlagsApiDisableFeatureFlagEnvironmentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.disableFeatureFlagEnvironment(
        param.featureFlagId,
        param.environmentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.disableFeatureFlagEnvironment(
            responseContext
          );
        });
    });
  }

  /**
   * Enable a feature flag in a specific environment.
   * @param param The request object
   */
  public enableFeatureFlagEnvironment(
    param: FeatureFlagsApiEnableFeatureFlagEnvironmentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.enableFeatureFlagEnvironment(
        param.featureFlagId,
        param.environmentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.enableFeatureFlagEnvironment(
            responseContext
          );
        });
    });
  }

  /**
   * Returns the details of a specific feature flag
   * including variants and environment status.
   * @param param The request object
   */
  public getFeatureFlag(
    param: FeatureFlagsApiGetFeatureFlagRequest,
    options?: Configuration
  ): Promise<FeatureFlagResponse> {
    const requestContextPromise = this.requestFactory.getFeatureFlag(
      param.featureFlagId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFeatureFlag(responseContext);
        });
    });
  }

  /**
   * Returns the details of a specific environment.
   * @param param The request object
   */
  public getFeatureFlagsEnvironment(
    param: FeatureFlagsApiGetFeatureFlagsEnvironmentRequest,
    options?: Configuration
  ): Promise<EnvironmentResponse> {
    const requestContextPromise =
      this.requestFactory.getFeatureFlagsEnvironment(
        param.environmentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFeatureFlagsEnvironment(
            responseContext
          );
        });
    });
  }

  /**
   * Get a flag change suggestion by ID.
   * @param param The request object
   */
  public getFlagSuggestion(
    param: FeatureFlagsApiGetFlagSuggestionRequest,
    options?: Configuration
  ): Promise<FlagSuggestionResponse> {
    const requestContextPromise = this.requestFactory.getFlagSuggestion(
      param.suggestionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFlagSuggestion(responseContext);
        });
    });
  }

  /**
   * Returns a list of feature flags for the organization.
   * Supports filtering by key and archived status.
   * @param param The request object
   */
  public listFeatureFlags(
    param: FeatureFlagsApiListFeatureFlagsRequest = {},
    options?: Configuration
  ): Promise<ListFeatureFlagsResponse> {
    const requestContextPromise = this.requestFactory.listFeatureFlags(
      param.key,
      param.isArchived,
      param.limit,
      param.offset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFeatureFlags(responseContext);
        });
    });
  }

  /**
   * Returns a list of environments for the organization.
   * Supports filtering by name and key.
   * @param param The request object
   */
  public listFeatureFlagsEnvironments(
    param: FeatureFlagsApiListFeatureFlagsEnvironmentsRequest = {},
    options?: Configuration
  ): Promise<ListEnvironmentsResponse> {
    const requestContextPromise =
      this.requestFactory.listFeatureFlagsEnvironments(
        param.name,
        param.key,
        param.limit,
        param.offset,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFeatureFlagsEnvironments(
            responseContext
          );
        });
    });
  }

  /**
   * Pauses a progressive rollout while preserving rollout state.
   * @param param The request object
   */
  public pauseExposureSchedule(
    param: FeatureFlagsApiPauseExposureScheduleRequest,
    options?: Configuration
  ): Promise<AllocationExposureScheduleResponse> {
    const requestContextPromise = this.requestFactory.pauseExposureSchedule(
      param.exposureScheduleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.pauseExposureSchedule(responseContext);
        });
    });
  }

  /**
   * Reject a pending flag change suggestion. The suggested change is not applied.
   * @param param The request object
   */
  public rejectFlagSuggestion(
    param: FeatureFlagsApiRejectFlagSuggestionRequest,
    options?: Configuration
  ): Promise<FlagSuggestionResponse> {
    const requestContextPromise = this.requestFactory.rejectFlagSuggestion(
      param.suggestionId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.rejectFlagSuggestion(responseContext);
        });
    });
  }

  /**
   * Resumes progression for a previously paused progressive rollout.
   * @param param The request object
   */
  public resumeExposureSchedule(
    param: FeatureFlagsApiResumeExposureScheduleRequest,
    options?: Configuration
  ): Promise<AllocationExposureScheduleResponse> {
    const requestContextPromise = this.requestFactory.resumeExposureSchedule(
      param.exposureScheduleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.resumeExposureSchedule(responseContext);
        });
    });
  }

  /**
   * Starts a progressive rollout and begins progression.
   * @param param The request object
   */
  public startExposureSchedule(
    param: FeatureFlagsApiStartExposureScheduleRequest,
    options?: Configuration
  ): Promise<AllocationExposureScheduleResponse> {
    const requestContextPromise = this.requestFactory.startExposureSchedule(
      param.exposureScheduleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.startExposureSchedule(responseContext);
        });
    });
  }

  /**
   * Stops a progressive rollout and marks it as aborted.
   * @param param The request object
   */
  public stopExposureSchedule(
    param: FeatureFlagsApiStopExposureScheduleRequest,
    options?: Configuration
  ): Promise<AllocationExposureScheduleResponse> {
    const requestContextPromise = this.requestFactory.stopExposureSchedule(
      param.exposureScheduleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.stopExposureSchedule(responseContext);
        });
    });
  }

  /**
   * Unarchives a previously archived feature flag,
   * making it visible in the main list again.
   * @param param The request object
   */
  public unarchiveFeatureFlag(
    param: FeatureFlagsApiUnarchiveFeatureFlagRequest,
    options?: Configuration
  ): Promise<FeatureFlagResponse> {
    const requestContextPromise = this.requestFactory.unarchiveFeatureFlag(
      param.featureFlagId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unarchiveFeatureFlag(responseContext);
        });
    });
  }

  /**
   * Updates targeting rules (allocations) for a specific feature flag in a specific environment.
   * This operation replaces the existing allocation set with the request payload.
   * @param param The request object
   */
  public updateAllocationsForFeatureFlagInEnvironment(
    param: FeatureFlagsApiUpdateAllocationsForFeatureFlagInEnvironmentRequest,
    options?: Configuration
  ): Promise<ListAllocationsResponse> {
    const requestContextPromise =
      this.requestFactory.updateAllocationsForFeatureFlagInEnvironment(
        param.featureFlagId,
        param.environmentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAllocationsForFeatureFlagInEnvironment(
            responseContext
          );
        });
    });
  }

  /**
   * Updates an existing feature flag's metadata such as
   *  name and description. Does not modify targeting rules or allocations.
   * @param param The request object
   */
  public updateFeatureFlag(
    param: FeatureFlagsApiUpdateFeatureFlagRequest,
    options?: Configuration
  ): Promise<FeatureFlagResponse> {
    const requestContextPromise = this.requestFactory.updateFeatureFlag(
      param.featureFlagId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateFeatureFlag(responseContext);
        });
    });
  }

  /**
   * Updates an existing environment's metadata such as
   *  name and description.
   * @param param The request object
   */
  public updateFeatureFlagsEnvironment(
    param: FeatureFlagsApiUpdateFeatureFlagsEnvironmentRequest,
    options?: Configuration
  ): Promise<EnvironmentResponse> {
    const requestContextPromise =
      this.requestFactory.updateFeatureFlagsEnvironment(
        param.environmentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateFeatureFlagsEnvironment(
            responseContext
          );
        });
    });
  }
}
