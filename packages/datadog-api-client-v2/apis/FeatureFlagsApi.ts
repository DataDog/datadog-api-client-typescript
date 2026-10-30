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
import { CreateVariantRequest } from "../models/CreateVariantRequest";
import { EnvironmentResponse } from "../models/EnvironmentResponse";
import { FeatureFlagDistributionChannel } from "../models/FeatureFlagDistributionChannel";
import { FeatureFlagProductionStatus } from "../models/FeatureFlagProductionStatus";
import { FeatureFlagResponse } from "../models/FeatureFlagResponse";
import { FeatureFlagStalenessStatus } from "../models/FeatureFlagStalenessStatus";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ListAllocationsResponse } from "../models/ListAllocationsResponse";
import { ListEnvironmentsResponse } from "../models/ListEnvironmentsResponse";
import { ListFeatureFlagsResponse } from "../models/ListFeatureFlagsResponse";
import { OverwriteAllocationsRequest } from "../models/OverwriteAllocationsRequest";
import { PatchSavedFilterConflictResponse } from "../models/PatchSavedFilterConflictResponse";
import { PatchSavedFilterForbiddenResponse } from "../models/PatchSavedFilterForbiddenResponse";
import { PatchSavedFilterRequest } from "../models/PatchSavedFilterRequest";
import { SavedFilterResponse } from "../models/SavedFilterResponse";
import { UpdateEnvironmentRequest } from "../models/UpdateEnvironmentRequest";
import { UpdateFeatureFlagRequest } from "../models/UpdateFeatureFlagRequest";
import { UpdateVariantRequest } from "../models/UpdateVariantRequest";
import { ValueType } from "../models/ValueType";
import { VariantResponse } from "../models/VariantResponse";

export class FeatureFlagsApiRequestFactory extends BaseAPIRequestFactory {
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createVariantForFeatureFlag(
    featureFlagId: string,
    body: CreateVariantRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "createVariantForFeatureFlag");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createVariantForFeatureFlag");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/variants".replace(
        "{feature_flag_id}",
        encodeURIComponent(String(featureFlagId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.createVariantForFeatureFlag")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateVariantRequest", ""),
      contentType
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteVariantFromFeatureFlag(
    featureFlagId: string,
    variantId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "deleteVariantFromFeatureFlag");
    }

    // verify required parameter 'variantId' is not null or undefined
    if (variantId === null || variantId === undefined) {
      throw new RequiredError("variantId", "deleteVariantFromFeatureFlag");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/variants/{variant_id}"
        .replace("{feature_flag_id}", encodeURIComponent(String(featureFlagId)))
        .replace("{variant_id}", encodeURIComponent(String(variantId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.deleteVariantFromFeatureFlag")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSavedFilter(
    savedFilterId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'savedFilterId' is not null or undefined
    if (savedFilterId === null || savedFilterId === undefined) {
      throw new RequiredError("savedFilterId", "getSavedFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/saved-filters/{saved_filter_id}".replace(
        "{saved_filter_id}",
        encodeURIComponent(String(savedFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.getSavedFilter")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listFeatureFlags(
    key?: string,
    isArchived?: boolean,
    limit?: number,
    offset?: number,
    tags?: Array<string>,
    teams?: Array<string>,
    productionStatus?: Array<FeatureFlagProductionStatus>,
    distributionChannel?: FeatureFlagDistributionChannel,
    search?: string,
    valueType?: Array<ValueType>,
    createdBy?: Array<string>,
    flagIds?: Array<string>,
    stalenessStatus?: FeatureFlagStalenessStatus,
    savedFilterId?: string,
    sort?: string,
    pageLimit?: number,
    pageOffset?: number,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
        ObjectSerializer.serialize(limit, "number", "int64"),
        ""
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int64"),
        ""
      );
    }
    if (tags !== undefined) {
      requestContext.setQueryParam(
        "tags",
        ObjectSerializer.serialize(tags, "Array<string>", ""),
        "multi"
      );
    }
    if (teams !== undefined) {
      requestContext.setQueryParam(
        "teams",
        ObjectSerializer.serialize(teams, "Array<string>", ""),
        "multi"
      );
    }
    if (productionStatus !== undefined) {
      requestContext.setQueryParam(
        "production_status",
        ObjectSerializer.serialize(
          productionStatus,
          "Array<FeatureFlagProductionStatus>",
          ""
        ),
        "multi"
      );
    }
    if (distributionChannel !== undefined) {
      requestContext.setQueryParam(
        "distribution_channel",
        ObjectSerializer.serialize(
          distributionChannel,
          "FeatureFlagDistributionChannel",
          ""
        ),
        ""
      );
    }
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        ObjectSerializer.serialize(search, "string", ""),
        ""
      );
    }
    if (valueType !== undefined) {
      requestContext.setQueryParam(
        "value_type",
        ObjectSerializer.serialize(valueType, "Array<ValueType>", ""),
        "multi"
      );
    }
    if (createdBy !== undefined) {
      requestContext.setQueryParam(
        "created_by",
        ObjectSerializer.serialize(createdBy, "Array<string>", "uuid"),
        "multi"
      );
    }
    if (flagIds !== undefined) {
      requestContext.setQueryParam(
        "flag_ids",
        ObjectSerializer.serialize(flagIds, "Array<string>", "uuid"),
        "multi"
      );
    }
    if (stalenessStatus !== undefined) {
      requestContext.setQueryParam(
        "staleness_status",
        ObjectSerializer.serialize(
          stalenessStatus,
          "FeatureFlagStalenessStatus",
          ""
        ),
        ""
      );
    }
    if (savedFilterId !== undefined) {
      requestContext.setQueryParam(
        "saved_filter_id",
        ObjectSerializer.serialize(savedFilterId, "string", "uuid"),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listFeatureFlagsEnvironments(
    name?: string,
    key?: string,
    ddEnv?: string,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
    if (ddEnv !== undefined) {
      requestContext.setQueryParam(
        "dd_env",
        ObjectSerializer.serialize(ddEnv, "string", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
        ""
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateSavedFilterAttributes(
    savedFilterId: string,
    body: PatchSavedFilterRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'savedFilterId' is not null or undefined
    if (savedFilterId === null || savedFilterId === undefined) {
      throw new RequiredError("savedFilterId", "updateSavedFilterAttributes");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSavedFilterAttributes");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/saved-filters/{saved_filter_id}".replace(
        "{saved_filter_id}",
        encodeURIComponent(String(savedFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.updateSavedFilterAttributes")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchSavedFilterRequest", ""),
      contentType
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

  public async updateVariantForFeatureFlag(
    featureFlagId: string,
    variantId: string,
    body: UpdateVariantRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'featureFlagId' is not null or undefined
    if (featureFlagId === null || featureFlagId === undefined) {
      throw new RequiredError("featureFlagId", "updateVariantForFeatureFlag");
    }

    // verify required parameter 'variantId' is not null or undefined
    if (variantId === null || variantId === undefined) {
      throw new RequiredError("variantId", "updateVariantForFeatureFlag");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateVariantForFeatureFlag");
    }

    // Path Params
    const localVarPath =
      "/api/v2/feature-flags/{feature_flag_id}/variants/{variant_id}"
        .replace("{feature_flag_id}", encodeURIComponent(String(featureFlagId)))
        .replace("{variant_id}", encodeURIComponent(String(variantId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FeatureFlagsApi.updateVariantForFeatureFlag")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateVariantRequest", ""),
      contentType
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

export class FeatureFlagsApiResponseProcessor {
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
   * @params response Response returned by the server for a request to createVariantForFeatureFlag
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createVariantForFeatureFlag(
    response: ResponseContext
  ): Promise<VariantResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: VariantResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "VariantResponse"
      ) as VariantResponse;
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
      const body: VariantResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "VariantResponse",
        ""
      ) as VariantResponse;
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
   * @params response Response returned by the server for a request to deleteVariantFromFeatureFlag
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteVariantFromFeatureFlag(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to getSavedFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSavedFilter(
    response: ResponseContext
  ): Promise<SavedFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SavedFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SavedFilterResponse"
      ) as SavedFilterResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SavedFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SavedFilterResponse",
        ""
      ) as SavedFilterResponse;
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
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateSavedFilterAttributes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSavedFilterAttributes(
    response: ResponseContext
  ): Promise<SavedFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SavedFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SavedFilterResponse"
      ) as SavedFilterResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: PatchSavedFilterForbiddenResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "PatchSavedFilterForbiddenResponse"
        ) as PatchSavedFilterForbiddenResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<PatchSavedFilterForbiddenResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<PatchSavedFilterForbiddenResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 409) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: PatchSavedFilterConflictResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "PatchSavedFilterConflictResponse"
        ) as PatchSavedFilterConflictResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<PatchSavedFilterConflictResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<PatchSavedFilterConflictResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SavedFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SavedFilterResponse",
        ""
      ) as SavedFilterResponse;
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
   * @params response Response returned by the server for a request to updateVariantForFeatureFlag
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateVariantForFeatureFlag(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
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

export interface FeatureFlagsApiCreateVariantForFeatureFlagRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
  /**
   * @type CreateVariantRequest
   */
  body: CreateVariantRequest;
}

export interface FeatureFlagsApiDeleteFeatureFlagsEnvironmentRequest {
  /**
   * The ID of the environment.
   * @type string
   */
  environmentId: string;
}

export interface FeatureFlagsApiDeleteVariantFromFeatureFlagRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
  /**
   * The ID of the variant.
   * @type string
   */
  variantId: string;
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

export interface FeatureFlagsApiGetSavedFilterRequest {
  /**
   * The ID of the saved filter.
   * @type string
   */
  savedFilterId: string;
}

export interface FeatureFlagsApiListFeatureFlagsRequest {
  /**
   * Filter feature flags by an exact, case-sensitive key. Use `search` for partial matching.
   * @type string
   */
  key?: string;
  /**
   * Filter by archived status. If `true`, return only archived flags. If `false`, return only flags that are not archived. If omitted, return both.
   * @type boolean
   */
  isArchived?: boolean;
  /**
   * Deprecated alias for `page[limit]`. Use `page[limit]` for new requests. Used only when `page[limit]` is absent. When both parameters are omitted, the server defaults to `25`. Values that exceed `50` are set to `50`; non-positive or empty values use the server default.
   * @type number
   */
  limit?: number;
  /**
   * Deprecated alias for `page[offset]`. Used only when `page[offset]` is absent. Defaults to `0`. Negative or empty values are set to `0`.
   * @type number
   */
  offset?: number;
  /**
   * Filter by exact tag values using repeated parameters, such as `tags=env:prod&tags=purpose:sitemap`. A flag must have all ordinary tags. Values of the form `team:<handle>` match any selected team and are combined with `teams` into one set. The result must match all ordinary tags, any selected team, and all other filters. Empty values are ignored.
   * @type Array<string>
   */
  tags?: Array<string>;
  /**
   * Filter by team handles without the `team:` prefix. Use repeated parameters to filter by multiple team handles, such as `teams=checkout&teams=payments`. A flag must belong to at least one selected team. Team handles from `teams` and `team:<handle>` values from tags are treated as a single set and combined with ordinary tags and other filters using AND logic. Duplicate handles do not duplicate results. Unknown handles do not match any flags. Empty handles, surrounding white space, or using the `team:` prefix return a bad request error. Response tags are unchanged.
   * @type Array<string>
   */
  teams?: Array<string>;
  /**
   * Filter by status across production environments. Use repeated parameters to match any selected status. `ENABLED` matches at least one enabled production environment without a variant override. `OVERRIDDEN` matches at least one enabled production environment with a variant override. `DISABLED` matches flags whose associated production environments are all disabled. A flag can match both `ENABLED` and `OVERRIDDEN` in different environments. Flags without associated production environments do not match. This does not filter by a specific environment. Unknown values do not match any status.
   * @type Array<FeatureFlagProductionStatus>
   */
  productionStatus?: Array<FeatureFlagProductionStatus>;
  /**
   * Filter by SDK availability. `CLIENT` returns flags with channel `CLIENT` or `ALL`. `SERVER` returns flags with channel `SERVER` or `ALL`. `ALL`, an empty value, or omission applies no channel restriction; it does not select only flags whose channel is `ALL`. Values are case-insensitive and surrounding white space is ignored. Invalid values return a bad request error.
   * @type FeatureFlagDistributionChannel
   */
  distributionChannel?: FeatureFlagDistributionChannel;
  /**
   * Case-insensitive substring search on flag names, keys, and tag names. Combined with all other filters. An empty value applies no search restriction.
   * @type string
   */
  search?: string;
  /**
   * Filter by variant value types using repeated parameters. A flag must match at least one selected type. Empty values are ignored. Invalid types return a bad request error.
   * @type Array<ValueType>
   */
  valueType?: Array<ValueType>;
  /**
   * Filter by creator UUIDs using repeated parameters. A flag must match at least one creator. Empty values are ignored. Invalid UUIDs return a bad request error.
   * @type Array<string>
   */
  createdBy?: Array<string>;
  /**
   * Filter by feature flag UUIDs using repeated parameters. A flag must match at least one ID and all other filters. Duplicate IDs return each flag once. Unknown IDs and IDs from other organizations do not match any flags. Empty or invalid UUIDs return a bad request error. Pagination still applies.
   * @type Array<string>
   */
  flagIds?: Array<string>;
  /**
   * Filter by the computed staleness status: `ACTIVE`, `STALE`, or `PERMANENT`. Values are case-insensitive and surrounding white space is ignored. An empty value or omission applies no restriction. Invalid values return a bad request error. Read the computed result from `staleness_details.staleness_status`, not the legacy `staleness_status` response field.
   * @type FeatureFlagStalenessStatus
   */
  stalenessStatus?: FeatureFlagStalenessStatus;
  /**
   * Filter to flags that reference this saved filter in their targeting conditions. An empty value or omission applies no restriction. An invalid UUID returns a bad request error.
   * @type string
   */
  savedFilterId?: string;
  /**
   * Sort by `name`, `updated_at`, `created_at`, or `evaluations`. Use a comma-separated list for multiple sort fields and prefix a field with `-` for descending order. The default is `updated_at` descending. When favorites are enabled, the authenticated user's favorite flags take precedence over the selected ordering. Unknown fields return a bad request error.
   * @type string
   */
  sort?: string;
  /**
   * Maximum number of flags to return. Defaults to `25` and is capped at `50`. Values that exceed `50` are set to `50`. Non-positive or empty values use the default. A non-integer value returns a bad request error. Takes precedence over `limit` when both are present. Pagination applies even when no pagination parameters are supplied.
   * @type number
   */
  pageLimit?: number;
  /**
   * Number of matching flags to skip before returning results. Defaults to `0`. Negative or empty values are set to `0`. A non-integer value returns a bad request error. Takes precedence over `offset` when both are present.
   * @type number
   */
  pageOffset?: number;
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
   * Filter environments by queries that contain the provided DD_ENV value.
   * @type string
   */
  ddEnv?: string;
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

export interface FeatureFlagsApiUpdateSavedFilterAttributesRequest {
  /**
   * The ID of the saved filter.
   * @type string
   */
  savedFilterId: string;
  /**
   * @type PatchSavedFilterRequest
   */
  body: PatchSavedFilterRequest;
}

export interface FeatureFlagsApiUpdateVariantForFeatureFlagRequest {
  /**
   * The ID of the feature flag.
   * @type string
   */
  featureFlagId: string;
  /**
   * The ID of the variant.
   * @type string
   */
  variantId: string;
  /**
   * @type UpdateVariantRequest
   */
  body: UpdateVariantRequest;
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
   * Adds a single new variant to an existing feature flag. This endpoint is
   * additive-only: it never modifies existing variants. A request whose `key`
   * already exists on the flag is rejected with `409 Conflict`; a `value`
   * whose type does not match the flag's `value_type` is rejected with `400`.
   * The server generates the variant UUID and returns it in the response body;
   * callers (for example, the flag-migration tool) need this UUID to reference
   * the new variant in subsequent allocation syncs.
   * @param param The request object
   */
  public createVariantForFeatureFlag(
    param: FeatureFlagsApiCreateVariantForFeatureFlagRequest,
    options?: Configuration
  ): Promise<VariantResponse> {
    const requestContextPromise =
      this.requestFactory.createVariantForFeatureFlag(
        param.featureFlagId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createVariantForFeatureFlag(
            responseContext
          );
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
   * Deletes a variant from a feature flag.
   *
   * When backend approvals are enabled and the flag requires approval, this endpoint creates and returns a `FlagSuggestion` with `201 Created` instead of deleting the variant immediately. If a pending suggestion already exists for this flag's variant property, the endpoint returns `409 Conflict`.
   * @param param The request object
   */
  public deleteVariantFromFeatureFlag(
    param: FeatureFlagsApiDeleteVariantFromFeatureFlagRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteVariantFromFeatureFlag(
        param.featureFlagId,
        param.variantId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteVariantFromFeatureFlag(
            responseContext
          );
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
   * Returns a saved filter by ID, including its full targeting rules, conditions, and values.
   * Supports both saved lists and saved rules. Targeting rules are combined with OR,
   * and conditions within each rule are combined with AND.
   * Returns the stored filter definition rather than evaluating it against users or organizations.
   * Archived filters can be retrieved. Filters that are deleted or belong to another organization return a not found error.
   * @param param The request object
   */
  public getSavedFilter(
    param: FeatureFlagsApiGetSavedFilterRequest,
    options?: Configuration
  ): Promise<SavedFilterResponse> {
    const requestContextPromise = this.requestFactory.getSavedFilter(
      param.savedFilterId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSavedFilter(responseContext);
        });
    });
  }

  /**
   * Returns a paginated list of feature flags for the organization.
   * Supports filtering by key, tags, teams, SDK availability, production status, and other flag properties.
   * Use `page[limit]` and `page[offset]` to paginate, or follow the `next` link in the response.
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
      param.tags,
      param.teams,
      param.productionStatus,
      param.distributionChannel,
      param.search,
      param.valueType,
      param.createdBy,
      param.flagIds,
      param.stalenessStatus,
      param.savedFilterId,
      param.sort,
      param.pageLimit,
      param.pageOffset,
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
   * Supports filtering by name, key, and DD_ENV.
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
        param.ddEnv,
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
   *
   * To change the owning team, update `tags` and include a tag of the form
   * `team:<team-handle>` in the array. `tags` is a full replacement of the
   * existing tag set (including any `team:` tag), so include every tag you
   * want to keep, not just the ones you're adding.
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

  /**
   * Partially updates a saved filter. Supports both `LIST` and `RULES` filters.
   * Supply at least one of `name`, `description`, or `targeting_rules`. Omitted or null fields
   * are preserved. Supplying `targeting_rules` replaces the entire collection and propagates
   * changes to every feature flag that references the saved filter.
   * Metadata-only updates do not require edit permission or approval on those feature flags.
   * Rule updates require edit permission on all consumer flags and are rejected when approval
   * is required, unless the caller has the `feature_flag_approvals_override` permission.
   * The optional `last_updated_at` field detects stale updates. It does not set the update time.
   * @param param The request object
   */
  public updateSavedFilterAttributes(
    param: FeatureFlagsApiUpdateSavedFilterAttributesRequest,
    options?: Configuration
  ): Promise<SavedFilterResponse> {
    const requestContextPromise =
      this.requestFactory.updateSavedFilterAttributes(
        param.savedFilterId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSavedFilterAttributes(
            responseContext
          );
        });
    });
  }

  /**
   * Updates the name and value of an existing variant on a feature flag.
   *
   * When backend approvals are enabled and the flag requires approval, this endpoint creates and returns a `FlagSuggestion` with `201 Created` instead of applying the change immediately. Use the returned suggestion `id` to approve or reject the change. If a pending suggestion already exists for this flag's variant property, the endpoint returns `409 Conflict`.
   * @param param The request object
   */
  public updateVariantForFeatureFlag(
    param: FeatureFlagsApiUpdateVariantForFeatureFlagRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateVariantForFeatureFlag(
        param.featureFlagId,
        param.variantId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateVariantForFeatureFlag(
            responseContext
          );
        });
    });
  }
}
