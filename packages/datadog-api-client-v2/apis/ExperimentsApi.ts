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
import { ExperimentsAnalysisPlanV2DTO } from "../models/ExperimentsAnalysisPlanV2DTO";
import { ExperimentsAnalysisPlanV2MutationResponse } from "../models/ExperimentsAnalysisPlanV2MutationResponse";
import { ExperimentsAnalysisPlanWriteV2Request } from "../models/ExperimentsAnalysisPlanWriteV2Request";
import { ExperimentsCancelExperimentV2Request } from "../models/ExperimentsCancelExperimentV2Request";
import { ExperimentsConcludeExperimentV2Request } from "../models/ExperimentsConcludeExperimentV2Request";
import { ExperimentsCreateExperimentMetricGroupV2Request } from "../models/ExperimentsCreateExperimentMetricGroupV2Request";
import { ExperimentsCreateExperimentV2Request } from "../models/ExperimentsCreateExperimentV2Request";
import { ExperimentsCreateExposureSQLModelV2Request } from "../models/ExperimentsCreateExposureSQLModelV2Request";
import { ExperimentsCreateMetricCollectionV2Request } from "../models/ExperimentsCreateMetricCollectionV2Request";
import { ExperimentsCreateMetricSQLModelV2Request } from "../models/ExperimentsCreateMetricSQLModelV2Request";
import { ExperimentsCreateMetricV2Request } from "../models/ExperimentsCreateMetricV2Request";
import { ExperimentsCreateSubjectTypeV2Request } from "../models/ExperimentsCreateSubjectTypeV2Request";
import { ExperimentsExperimentDiagnosticsV2DTO } from "../models/ExperimentsExperimentDiagnosticsV2DTO";
import { ExperimentsExperimentMetricGroupMutationV2 } from "../models/ExperimentsExperimentMetricGroupMutationV2";
import { ExperimentsExperimentMetricGroupV2DTOArray } from "../models/ExperimentsExperimentMetricGroupV2DTOArray";
import { ExperimentsExperimentV2DTO } from "../models/ExperimentsExperimentV2DTO";
import { ExperimentsExperimentV2ListDTOArray } from "../models/ExperimentsExperimentV2ListDTOArray";
import { ExperimentsExposureSQLModelV2DTO } from "../models/ExperimentsExposureSQLModelV2DTO";
import { ExperimentsExposureSQLModelV2DTOArray } from "../models/ExperimentsExposureSQLModelV2DTOArray";
import { ExperimentsMetricCollectionV2DTO } from "../models/ExperimentsMetricCollectionV2DTO";
import { ExperimentsMetricCollectionV2DTOArray } from "../models/ExperimentsMetricCollectionV2DTOArray";
import { ExperimentsMetricSQLModelV2DTO } from "../models/ExperimentsMetricSQLModelV2DTO";
import { ExperimentsMetricSQLModelV2DTOArray } from "../models/ExperimentsMetricSQLModelV2DTOArray";
import { ExperimentsMetricV2DTO } from "../models/ExperimentsMetricV2DTO";
import { ExperimentsMetricV2DTOArray } from "../models/ExperimentsMetricV2DTOArray";
import { ExperimentsPatchExperimentMetricGroupV2Request } from "../models/ExperimentsPatchExperimentMetricGroupV2Request";
import { ExperimentsPatchExperimentV2Request } from "../models/ExperimentsPatchExperimentV2Request";
import { ExperimentsPatchExperimentV2Response } from "../models/ExperimentsPatchExperimentV2Response";
import { ExperimentsPatchMetricCollectionV2Request } from "../models/ExperimentsPatchMetricCollectionV2Request";
import { ExperimentsPatchSubjectTypeV2Request } from "../models/ExperimentsPatchSubjectTypeV2Request";
import { ExperimentsPublicProtocolListResponseArray } from "../models/ExperimentsPublicProtocolListResponseArray";
import { ExperimentsPublicProtocolResponse } from "../models/ExperimentsPublicProtocolResponse";
import { ExperimentsPublicProtocolResponseDataAttributesStatus } from "../models/ExperimentsPublicProtocolResponseDataAttributesStatus";
import { ExperimentsRefreshExperimentResultsV2DTO } from "../models/ExperimentsRefreshExperimentResultsV2DTO";
import { ExperimentsRefreshExperimentResultsV2DTOArray } from "../models/ExperimentsRefreshExperimentResultsV2DTOArray";
import { ExperimentsStartExperimentV2Request } from "../models/ExperimentsStartExperimentV2Request";
import { ExperimentsSubjectTypeV2DTO } from "../models/ExperimentsSubjectTypeV2DTO";
import { ExperimentsSubjectTypeV2DTOArray } from "../models/ExperimentsSubjectTypeV2DTOArray";
import { ExperimentsTrafficSummaryV2DTO } from "../models/ExperimentsTrafficSummaryV2DTO";
import { ExperimentsUpdateExposureSQLModelV2Response } from "../models/ExperimentsUpdateExposureSQLModelV2Response";
import { ExperimentsUpdateMetricSQLModelV2Response } from "../models/ExperimentsUpdateMetricSQLModelV2Response";
import { ExperimentsUpdateMetricV2Request } from "../models/ExperimentsUpdateMetricV2Request";
import { ExperimentsVariantResultsV2DTOArray } from "../models/ExperimentsVariantResultsV2DTOArray";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class ExperimentsApiRequestFactory extends BaseAPIRequestFactory {
  public async archiveExposureSQLModel(
    exposureSqlModelId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exposureSqlModelId' is not null or undefined
    if (exposureSqlModelId === null || exposureSqlModelId === undefined) {
      throw new RequiredError("exposureSqlModelId", "archiveExposureSQLModel");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/exposure-sql-models/{exposure_sql_model_id}/archive".replace(
        "{exposure_sql_model_id}",
        encodeURIComponent(String(exposureSqlModelId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.archiveExposureSQLModel")
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

  public async cancelExperiment(
    experimentId: string,
    body: ExperimentsCancelExperimentV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "cancelExperiment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "cancelExperiment");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/{experiment_id}/cancel".replace(
      "{experiment_id}",
      encodeURIComponent(String(experimentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.cancelExperiment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsCancelExperimentV2Request",
        ""
      ),
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

  public async concludeExperiment(
    experimentId: string,
    body: ExperimentsConcludeExperimentV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "concludeExperiment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "concludeExperiment");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/{experiment_id}/conclude".replace(
      "{experiment_id}",
      encodeURIComponent(String(experimentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.concludeExperiment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsConcludeExperimentV2Request",
        ""
      ),
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

  public async createExperiment(
    body: ExperimentsCreateExperimentV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createExperiment");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.createExperiment")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsCreateExperimentV2Request",
        ""
      ),
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

  public async createExperimentMetricGroup(
    experimentId: string,
    body: ExperimentsCreateExperimentMetricGroupV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "createExperimentMetricGroup");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createExperimentMetricGroup");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/metric-groups".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.createExperimentMetricGroup")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsCreateExperimentMetricGroupV2Request",
        ""
      ),
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

  public async createExperimentMetricGroupFromCollection(
    experimentId: string,
    metricCollectionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError(
        "experimentId",
        "createExperimentMetricGroupFromCollection"
      );
    }

    // verify required parameter 'metricCollectionId' is not null or undefined
    if (metricCollectionId === null || metricCollectionId === undefined) {
      throw new RequiredError(
        "metricCollectionId",
        "createExperimentMetricGroupFromCollection"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/metric-groups/from-collection/{metric_collection_id}"
        .replace("{experiment_id}", encodeURIComponent(String(experimentId)))
        .replace(
          "{metric_collection_id}",
          encodeURIComponent(String(metricCollectionId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.createExperimentMetricGroupFromCollection")
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

  public async createExposureSQLModel(
    body: ExperimentsCreateExposureSQLModelV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createExposureSQLModel");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/exposure-sql-models";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.createExposureSQLModel")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsCreateExposureSQLModelV2Request",
        ""
      ),
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

  public async createMetric(
    body: ExperimentsCreateMetricV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/metrics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.createMetric")
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
      ObjectSerializer.serialize(body, "ExperimentsCreateMetricV2Request", ""),
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

  public async createMetricCollection(
    body: ExperimentsCreateMetricCollectionV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMetricCollection");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/metric-collections";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.createMetricCollection")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsCreateMetricCollectionV2Request",
        ""
      ),
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

  public async createMetricSQLModel(
    body: ExperimentsCreateMetricSQLModelV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMetricSQLModel");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/metric-sql-models";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.createMetricSQLModel")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsCreateMetricSQLModelV2Request",
        ""
      ),
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

  public async createSubjectType(
    body: ExperimentsCreateSubjectTypeV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSubjectType");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/subject-types";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.createSubjectType")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsCreateSubjectTypeV2Request",
        ""
      ),
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

  public async deleteExperiment(
    experimentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "deleteExperiment");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/{experiment_id}".replace(
      "{experiment_id}",
      encodeURIComponent(String(experimentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.deleteExperiment")
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

  public async deleteExperimentMetricGroup(
    experimentId: string,
    metricGroupId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "deleteExperimentMetricGroup");
    }

    // verify required parameter 'metricGroupId' is not null or undefined
    if (metricGroupId === null || metricGroupId === undefined) {
      throw new RequiredError("metricGroupId", "deleteExperimentMetricGroup");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/metric-groups/{metric_group_id}"
        .replace("{experiment_id}", encodeURIComponent(String(experimentId)))
        .replace(
          "{metric_group_id}",
          encodeURIComponent(String(metricGroupId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.deleteExperimentMetricGroup")
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

  public async deleteMetric(
    metricId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "deleteMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.deleteMetric")
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

  public async deleteMetricCollection(
    metricCollectionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricCollectionId' is not null or undefined
    if (metricCollectionId === null || metricCollectionId === undefined) {
      throw new RequiredError("metricCollectionId", "deleteMetricCollection");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/metric-collections/{metric_collection_id}".replace(
        "{metric_collection_id}",
        encodeURIComponent(String(metricCollectionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.deleteMetricCollection")
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

  public async deleteSubjectType(
    subjectTypeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'subjectTypeId' is not null or undefined
    if (subjectTypeId === null || subjectTypeId === undefined) {
      throw new RequiredError("subjectTypeId", "deleteSubjectType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/subject-types/{subject_type_id}".replace(
        "{subject_type_id}",
        encodeURIComponent(String(subjectTypeId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.deleteSubjectType")
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

  public async getExperiment(
    experimentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "getExperiment");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/{experiment_id}".replace(
      "{experiment_id}",
      encodeURIComponent(String(experimentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getExperiment")
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

  public async getExperimentAnalysisPlan(
    experimentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "getExperimentAnalysisPlan");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/analysis-plan".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getExperimentAnalysisPlan")
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

  public async getExperimentDiagnostics(
    experimentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "getExperimentDiagnostics");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/diagnostics".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getExperimentDiagnostics")
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

  public async getExperimentProtocol(
    protocolId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'protocolId' is not null or undefined
    if (protocolId === null || protocolId === undefined) {
      throw new RequiredError("protocolId", "getExperimentProtocol");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/protocols/{protocol_id}".replace(
      "{protocol_id}",
      encodeURIComponent(String(protocolId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getExperimentProtocol")
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

  public async getExperimentResults(
    experimentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "getExperimentResults");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/{experiment_id}/results".replace(
      "{experiment_id}",
      encodeURIComponent(String(experimentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getExperimentResults")
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

  public async getExperimentTrafficSummary(
    experimentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "getExperimentTrafficSummary");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/traffic-summary".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getExperimentTrafficSummary")
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

  public async getExposureSQLModel(
    exposureSqlModelId: string,
    include?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exposureSqlModelId' is not null or undefined
    if (exposureSqlModelId === null || exposureSqlModelId === undefined) {
      throw new RequiredError("exposureSqlModelId", "getExposureSQLModel");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/exposure-sql-models/{exposure_sql_model_id}".replace(
        "{exposure_sql_model_id}",
        encodeURIComponent(String(exposureSqlModelId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getExposureSQLModel")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<string>", ""),
        "multi"
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

  public async getMetric(
    metricId: string,
    include?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "getMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getMetric")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<string>", ""),
        "multi"
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

  public async getMetricCollection(
    metricCollectionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricCollectionId' is not null or undefined
    if (metricCollectionId === null || metricCollectionId === undefined) {
      throw new RequiredError("metricCollectionId", "getMetricCollection");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/metric-collections/{metric_collection_id}".replace(
        "{metric_collection_id}",
        encodeURIComponent(String(metricCollectionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getMetricCollection")
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

  public async getMetricSQLModel(
    metricSqlModelId: string,
    include?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricSqlModelId' is not null or undefined
    if (metricSqlModelId === null || metricSqlModelId === undefined) {
      throw new RequiredError("metricSqlModelId", "getMetricSQLModel");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/metric-sql-models/{metric_sql_model_id}".replace(
        "{metric_sql_model_id}",
        encodeURIComponent(String(metricSqlModelId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getMetricSQLModel")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<string>", ""),
        "multi"
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

  public async getSubjectType(
    subjectTypeId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'subjectTypeId' is not null or undefined
    if (subjectTypeId === null || subjectTypeId === undefined) {
      throw new RequiredError("subjectTypeId", "getSubjectType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/subject-types/{subject_type_id}".replace(
        "{subject_type_id}",
        encodeURIComponent(String(subjectTypeId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.getSubjectType")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async listExperimentMetricGroups(
    experimentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "listExperimentMetricGroups");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/metric-groups".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.listExperimentMetricGroups")
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

  public async listExperimentProtocols(
    filterStatus?: Array<ExperimentsPublicProtocolResponseDataAttributesStatus>,
    filterPrimaryMetricId?: string,
    filterQuery?: string,
    filterSubjectTypeId?: string,
    pageLimit?: number,
    pageOffset?: number,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/experiments/protocols";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.listExperimentProtocols")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        ObjectSerializer.serialize(
          filterStatus,
          "Array<ExperimentsPublicProtocolResponseDataAttributesStatus>",
          ""
        ),
        "multi"
      );
    }
    if (filterPrimaryMetricId !== undefined) {
      requestContext.setQueryParam(
        "filter[primary_metric_id]",
        ObjectSerializer.serialize(filterPrimaryMetricId, "string", "uuid"),
        ""
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (filterSubjectTypeId !== undefined) {
      requestContext.setQueryParam(
        "filter[subject_type_id]",
        ObjectSerializer.serialize(filterSubjectTypeId, "string", "uuid"),
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
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

  public async listExperiments(
    concludedSince?: Date,
    createdSince?: Date,
    pageLimit?: number,
    pageOffset?: number,
    protocolId?: Array<string>,
    resultsUpdatedBefore?: Date,
    resultsUpdatedSince?: Date,
    search?: string,
    sort?: string,
    status?: Array<string>,
    tags?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/experiments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.listExperiments")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (concludedSince !== undefined) {
      requestContext.setQueryParam(
        "concluded_since",
        ObjectSerializer.serialize(concludedSince, "Date", "date-time"),
        ""
      );
    }
    if (createdSince !== undefined) {
      requestContext.setQueryParam(
        "created_since",
        ObjectSerializer.serialize(createdSince, "Date", "date-time"),
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
    if (protocolId !== undefined) {
      requestContext.setQueryParam(
        "protocol_id",
        ObjectSerializer.serialize(protocolId, "Array<string>", "uuid"),
        "multi"
      );
    }
    if (resultsUpdatedBefore !== undefined) {
      requestContext.setQueryParam(
        "results_updated_before",
        ObjectSerializer.serialize(resultsUpdatedBefore, "Date", "date-time"),
        ""
      );
    }
    if (resultsUpdatedSince !== undefined) {
      requestContext.setQueryParam(
        "results_updated_since",
        ObjectSerializer.serialize(resultsUpdatedSince, "Date", "date-time"),
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        ObjectSerializer.serialize(status, "Array<string>", ""),
        "multi"
      );
    }
    if (tags !== undefined) {
      requestContext.setQueryParam(
        "tags",
        ObjectSerializer.serialize(tags, "Array<string>", ""),
        "multi"
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

  public async listExposureSQLModels(
    include?: Array<string>,
    includeArchived?: boolean,
    pageLimit?: number,
    pageOffset?: number,
    search?: string,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/experiments/exposure-sql-models";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.listExposureSQLModels")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<string>", ""),
        "multi"
      );
    }
    if (includeArchived !== undefined) {
      requestContext.setQueryParam(
        "include_archived",
        ObjectSerializer.serialize(includeArchived, "boolean", ""),
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
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        ObjectSerializer.serialize(search, "string", ""),
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listMetricCollections(
    include?: Array<string>,
    pageLimit?: number,
    pageOffset?: number,
    search?: string,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/experiments/metric-collections";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.listMetricCollections")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<string>", ""),
        "multi"
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
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        ObjectSerializer.serialize(search, "string", ""),
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listMetrics(
    include?: Array<string>,
    pageLimit?: number,
    pageOffset?: number,
    search?: string,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/experiments/metrics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.listMetrics")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<string>", ""),
        "multi"
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
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        ObjectSerializer.serialize(search, "string", ""),
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listMetricSQLModels(
    include?: Array<string>,
    pageLimit?: number,
    pageOffset?: number,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/experiments/metric-sql-models";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.listMetricSQLModels")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<string>", ""),
        "multi"
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
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

  public async listSubjectTypes(
    include?: string,
    pageLimit?: number,
    pageOffset?: number,
    search?: string,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/experiments/subject-types";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.listSubjectTypes")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        ObjectSerializer.serialize(search, "string", ""),
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async patchExperiment(
    experimentId: string,
    body: ExperimentsPatchExperimentV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "patchExperiment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchExperiment");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/{experiment_id}".replace(
      "{experiment_id}",
      encodeURIComponent(String(experimentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.patchExperiment")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsPatchExperimentV2Request",
        ""
      ),
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

  public async patchSubjectType(
    subjectTypeId: string,
    body: ExperimentsPatchSubjectTypeV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'subjectTypeId' is not null or undefined
    if (subjectTypeId === null || subjectTypeId === undefined) {
      throw new RequiredError("subjectTypeId", "patchSubjectType");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchSubjectType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/subject-types/{subject_type_id}".replace(
        "{subject_type_id}",
        encodeURIComponent(String(subjectTypeId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.patchSubjectType")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsPatchSubjectTypeV2Request",
        ""
      ),
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

  public async refreshExperimentResults(
    experimentId: string,
    fullRefresh?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "refreshExperimentResults");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/results/refresh".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.refreshExperimentResults")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (fullRefresh !== undefined) {
      requestContext.setQueryParam(
        "full_refresh",
        ObjectSerializer.serialize(fullRefresh, "boolean", ""),
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

  public async refreshExperimentResultsForOrg(
    fullRefresh?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/experiments/results/refresh";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.refreshExperimentResultsForOrg")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (fullRefresh !== undefined) {
      requestContext.setQueryParam(
        "full_refresh",
        ObjectSerializer.serialize(fullRefresh, "boolean", ""),
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

  public async setDefaultSubjectType(
    subjectTypeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'subjectTypeId' is not null or undefined
    if (subjectTypeId === null || subjectTypeId === undefined) {
      throw new RequiredError("subjectTypeId", "setDefaultSubjectType");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/subject-types/{subject_type_id}/default".replace(
        "{subject_type_id}",
        encodeURIComponent(String(subjectTypeId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.setDefaultSubjectType")
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

  public async startExperiment(
    experimentId: string,
    body?: ExperimentsStartExperimentV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "startExperiment");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/{experiment_id}/start".replace(
      "{experiment_id}",
      encodeURIComponent(String(experimentId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.startExperiment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsStartExperimentV2Request",
        ""
      ),
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

  public async unarchiveExposureSQLModel(
    exposureSqlModelId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exposureSqlModelId' is not null or undefined
    if (exposureSqlModelId === null || exposureSqlModelId === undefined) {
      throw new RequiredError(
        "exposureSqlModelId",
        "unarchiveExposureSQLModel"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/exposure-sql-models/{exposure_sql_model_id}/unarchive".replace(
        "{exposure_sql_model_id}",
        encodeURIComponent(String(exposureSqlModelId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.unarchiveExposureSQLModel")
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

  public async updateExperimentAnalysisPlanAttributes(
    experimentId: string,
    body: ExperimentsAnalysisPlanWriteV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError(
        "experimentId",
        "updateExperimentAnalysisPlanAttributes"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateExperimentAnalysisPlanAttributes");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/analysis-plan".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.updateExperimentAnalysisPlanAttributes")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsAnalysisPlanWriteV2Request",
        ""
      ),
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

  public async updateExperimentMetricGroup(
    experimentId: string,
    metricGroupId: string,
    body: ExperimentsPatchExperimentMetricGroupV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "updateExperimentMetricGroup");
    }

    // verify required parameter 'metricGroupId' is not null or undefined
    if (metricGroupId === null || metricGroupId === undefined) {
      throw new RequiredError("metricGroupId", "updateExperimentMetricGroup");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateExperimentMetricGroup");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/{experiment_id}/metric-groups/{metric_group_id}"
        .replace("{experiment_id}", encodeURIComponent(String(experimentId)))
        .replace(
          "{metric_group_id}",
          encodeURIComponent(String(metricGroupId))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.updateExperimentMetricGroup")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsPatchExperimentMetricGroupV2Request",
        ""
      ),
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

  public async updateExposureSQLModel(
    exposureSqlModelId: string,
    body: ExperimentsCreateExposureSQLModelV2Request,
    include?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exposureSqlModelId' is not null or undefined
    if (exposureSqlModelId === null || exposureSqlModelId === undefined) {
      throw new RequiredError("exposureSqlModelId", "updateExposureSQLModel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateExposureSQLModel");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/exposure-sql-models/{exposure_sql_model_id}".replace(
        "{exposure_sql_model_id}",
        encodeURIComponent(String(exposureSqlModelId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.updateExposureSQLModel")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<string>", ""),
        "multi"
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ExperimentsCreateExposureSQLModelV2Request",
        ""
      ),
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

  public async updateMetric(
    metricId: string,
    body: ExperimentsUpdateMetricV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "updateMetric");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/experiments/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.updateMetric")
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
      ObjectSerializer.serialize(body, "ExperimentsUpdateMetricV2Request", ""),
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

  public async updateMetricCollection(
    metricCollectionId: string,
    body: ExperimentsPatchMetricCollectionV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricCollectionId' is not null or undefined
    if (metricCollectionId === null || metricCollectionId === undefined) {
      throw new RequiredError("metricCollectionId", "updateMetricCollection");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMetricCollection");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/metric-collections/{metric_collection_id}".replace(
        "{metric_collection_id}",
        encodeURIComponent(String(metricCollectionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.updateMetricCollection")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsPatchMetricCollectionV2Request",
        ""
      ),
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

  public async updateMetricSQLModel(
    metricSqlModelId: string,
    body: ExperimentsCreateMetricSQLModelV2Request,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricSqlModelId' is not null or undefined
    if (metricSqlModelId === null || metricSqlModelId === undefined) {
      throw new RequiredError("metricSqlModelId", "updateMetricSQLModel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMetricSQLModel");
    }

    // Path Params
    const localVarPath =
      "/api/v2/experiments/metric-sql-models/{metric_sql_model_id}".replace(
        "{metric_sql_model_id}",
        encodeURIComponent(String(metricSqlModelId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ExperimentsApi.updateMetricSQLModel")
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
      ObjectSerializer.serialize(
        body,
        "ExperimentsCreateMetricSQLModelV2Request",
        ""
      ),
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

export class ExperimentsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to archiveExposureSQLModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async archiveExposureSQLModel(
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
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
   * @params response Response returned by the server for a request to cancelExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelExperiment(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
   * @params response Response returned by the server for a request to concludeExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async concludeExperiment(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
   * @params response Response returned by the server for a request to createExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createExperiment(
    response: ResponseContext
  ): Promise<ExperimentsExperimentV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ExperimentsExperimentV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsExperimentV2DTO"
      ) as ExperimentsExperimentV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415 ||
      response.httpStatusCode === 422
    ) {
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
      const body: ExperimentsExperimentV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsExperimentV2DTO",
        ""
      ) as ExperimentsExperimentV2DTO;
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
   * @params response Response returned by the server for a request to createExperimentMetricGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createExperimentMetricGroup(
    response: ResponseContext
  ): Promise<ExperimentsExperimentMetricGroupMutationV2> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ExperimentsExperimentMetricGroupMutationV2 =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentMetricGroupMutationV2"
        ) as ExperimentsExperimentMetricGroupMutationV2;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsExperimentMetricGroupMutationV2 =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentMetricGroupMutationV2",
          ""
        ) as ExperimentsExperimentMetricGroupMutationV2;
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
   * @params response Response returned by the server for a request to createExperimentMetricGroupFromCollection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createExperimentMetricGroupFromCollection(
    response: ResponseContext
  ): Promise<ExperimentsExperimentMetricGroupMutationV2> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ExperimentsExperimentMetricGroupMutationV2 =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentMetricGroupMutationV2"
        ) as ExperimentsExperimentMetricGroupMutationV2;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
      const body: ExperimentsExperimentMetricGroupMutationV2 =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentMetricGroupMutationV2",
          ""
        ) as ExperimentsExperimentMetricGroupMutationV2;
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
   * @params response Response returned by the server for a request to createExposureSQLModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createExposureSQLModel(
    response: ResponseContext
  ): Promise<ExperimentsExposureSQLModelV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ExperimentsExposureSQLModelV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExposureSQLModelV2DTO"
        ) as ExperimentsExposureSQLModelV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsExposureSQLModelV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExposureSQLModelV2DTO",
          ""
        ) as ExperimentsExposureSQLModelV2DTO;
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
   * @params response Response returned by the server for a request to createMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMetric(
    response: ResponseContext
  ): Promise<ExperimentsMetricV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ExperimentsMetricV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricV2DTO"
      ) as ExperimentsMetricV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsMetricV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricV2DTO",
        ""
      ) as ExperimentsMetricV2DTO;
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
   * @params response Response returned by the server for a request to createMetricCollection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMetricCollection(
    response: ResponseContext
  ): Promise<ExperimentsMetricCollectionV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ExperimentsMetricCollectionV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricCollectionV2DTO"
        ) as ExperimentsMetricCollectionV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsMetricCollectionV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricCollectionV2DTO",
          ""
        ) as ExperimentsMetricCollectionV2DTO;
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
   * @params response Response returned by the server for a request to createMetricSQLModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMetricSQLModel(
    response: ResponseContext
  ): Promise<ExperimentsMetricSQLModelV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ExperimentsMetricSQLModelV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricSQLModelV2DTO"
      ) as ExperimentsMetricSQLModelV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
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
      const body: ExperimentsMetricSQLModelV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricSQLModelV2DTO",
        ""
      ) as ExperimentsMetricSQLModelV2DTO;
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
   * @params response Response returned by the server for a request to createSubjectType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSubjectType(
    response: ResponseContext
  ): Promise<ExperimentsSubjectTypeV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ExperimentsSubjectTypeV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsSubjectTypeV2DTO"
      ) as ExperimentsSubjectTypeV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
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
      const body: ExperimentsSubjectTypeV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsSubjectTypeV2DTO",
        ""
      ) as ExperimentsSubjectTypeV2DTO;
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
   * @params response Response returned by the server for a request to deleteExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteExperiment(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
   * @params response Response returned by the server for a request to deleteExperimentMetricGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteExperimentMetricGroup(
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
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
   * @params response Response returned by the server for a request to deleteMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMetric(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
   * @params response Response returned by the server for a request to deleteMetricCollection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMetricCollection(
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
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
   * @params response Response returned by the server for a request to deleteSubjectType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSubjectType(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
   * @params response Response returned by the server for a request to getExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getExperiment(
    response: ResponseContext
  ): Promise<ExperimentsExperimentV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsExperimentV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsExperimentV2DTO"
      ) as ExperimentsExperimentV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
      const body: ExperimentsExperimentV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsExperimentV2DTO",
        ""
      ) as ExperimentsExperimentV2DTO;
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
   * @params response Response returned by the server for a request to getExperimentAnalysisPlan
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getExperimentAnalysisPlan(
    response: ResponseContext
  ): Promise<ExperimentsAnalysisPlanV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsAnalysisPlanV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsAnalysisPlanV2DTO"
      ) as ExperimentsAnalysisPlanV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsAnalysisPlanV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsAnalysisPlanV2DTO",
        ""
      ) as ExperimentsAnalysisPlanV2DTO;
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
   * @params response Response returned by the server for a request to getExperimentDiagnostics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getExperimentDiagnostics(
    response: ResponseContext
  ): Promise<ExperimentsExperimentDiagnosticsV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsExperimentDiagnosticsV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentDiagnosticsV2DTO"
        ) as ExperimentsExperimentDiagnosticsV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsExperimentDiagnosticsV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentDiagnosticsV2DTO",
          ""
        ) as ExperimentsExperimentDiagnosticsV2DTO;
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
   * @params response Response returned by the server for a request to getExperimentProtocol
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getExperimentProtocol(
    response: ResponseContext
  ): Promise<ExperimentsPublicProtocolResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsPublicProtocolResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsPublicProtocolResponse"
        ) as ExperimentsPublicProtocolResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsPublicProtocolResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsPublicProtocolResponse",
          ""
        ) as ExperimentsPublicProtocolResponse;
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
   * @params response Response returned by the server for a request to getExperimentResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getExperimentResults(
    response: ResponseContext
  ): Promise<ExperimentsVariantResultsV2DTOArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsVariantResultsV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsVariantResultsV2DTOArray"
        ) as ExperimentsVariantResultsV2DTOArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
      const body: ExperimentsVariantResultsV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsVariantResultsV2DTOArray",
          ""
        ) as ExperimentsVariantResultsV2DTOArray;
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
   * @params response Response returned by the server for a request to getExperimentTrafficSummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getExperimentTrafficSummary(
    response: ResponseContext
  ): Promise<ExperimentsTrafficSummaryV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsTrafficSummaryV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsTrafficSummaryV2DTO"
      ) as ExperimentsTrafficSummaryV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
      const body: ExperimentsTrafficSummaryV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsTrafficSummaryV2DTO",
        ""
      ) as ExperimentsTrafficSummaryV2DTO;
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
   * @params response Response returned by the server for a request to getExposureSQLModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getExposureSQLModel(
    response: ResponseContext
  ): Promise<ExperimentsExposureSQLModelV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsExposureSQLModelV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExposureSQLModelV2DTO"
        ) as ExperimentsExposureSQLModelV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsExposureSQLModelV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExposureSQLModelV2DTO",
          ""
        ) as ExperimentsExposureSQLModelV2DTO;
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
   * @params response Response returned by the server for a request to getMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMetric(
    response: ResponseContext
  ): Promise<ExperimentsMetricV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsMetricV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricV2DTO"
      ) as ExperimentsMetricV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsMetricV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricV2DTO",
        ""
      ) as ExperimentsMetricV2DTO;
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
   * @params response Response returned by the server for a request to getMetricCollection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMetricCollection(
    response: ResponseContext
  ): Promise<ExperimentsMetricCollectionV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsMetricCollectionV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricCollectionV2DTO"
        ) as ExperimentsMetricCollectionV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsMetricCollectionV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricCollectionV2DTO",
          ""
        ) as ExperimentsMetricCollectionV2DTO;
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
   * @params response Response returned by the server for a request to getMetricSQLModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMetricSQLModel(
    response: ResponseContext
  ): Promise<ExperimentsMetricSQLModelV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsMetricSQLModelV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricSQLModelV2DTO"
      ) as ExperimentsMetricSQLModelV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsMetricSQLModelV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricSQLModelV2DTO",
        ""
      ) as ExperimentsMetricSQLModelV2DTO;
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
   * @params response Response returned by the server for a request to getSubjectType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSubjectType(
    response: ResponseContext
  ): Promise<ExperimentsSubjectTypeV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsSubjectTypeV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsSubjectTypeV2DTO"
      ) as ExperimentsSubjectTypeV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsSubjectTypeV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsSubjectTypeV2DTO",
        ""
      ) as ExperimentsSubjectTypeV2DTO;
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
   * @params response Response returned by the server for a request to listExperimentMetricGroups
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listExperimentMetricGroups(
    response: ResponseContext
  ): Promise<ExperimentsExperimentMetricGroupV2DTOArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsExperimentMetricGroupV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentMetricGroupV2DTOArray"
        ) as ExperimentsExperimentMetricGroupV2DTOArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsExperimentMetricGroupV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentMetricGroupV2DTOArray",
          ""
        ) as ExperimentsExperimentMetricGroupV2DTOArray;
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
   * @params response Response returned by the server for a request to listExperimentProtocols
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listExperimentProtocols(
    response: ResponseContext
  ): Promise<ExperimentsPublicProtocolListResponseArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsPublicProtocolListResponseArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsPublicProtocolListResponseArray"
        ) as ExperimentsPublicProtocolListResponseArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
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
      const body: ExperimentsPublicProtocolListResponseArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsPublicProtocolListResponseArray",
          ""
        ) as ExperimentsPublicProtocolListResponseArray;
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
   * @params response Response returned by the server for a request to listExperiments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listExperiments(
    response: ResponseContext
  ): Promise<ExperimentsExperimentV2ListDTOArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsExperimentV2ListDTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentV2ListDTOArray"
        ) as ExperimentsExperimentV2ListDTOArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
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
      const body: ExperimentsExperimentV2ListDTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentV2ListDTOArray",
          ""
        ) as ExperimentsExperimentV2ListDTOArray;
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
   * @params response Response returned by the server for a request to listExposureSQLModels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listExposureSQLModels(
    response: ResponseContext
  ): Promise<ExperimentsExposureSQLModelV2DTOArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsExposureSQLModelV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExposureSQLModelV2DTOArray"
        ) as ExperimentsExposureSQLModelV2DTOArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
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
      const body: ExperimentsExposureSQLModelV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExposureSQLModelV2DTOArray",
          ""
        ) as ExperimentsExposureSQLModelV2DTOArray;
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
   * @params response Response returned by the server for a request to listMetricCollections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMetricCollections(
    response: ResponseContext
  ): Promise<ExperimentsMetricCollectionV2DTOArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsMetricCollectionV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricCollectionV2DTOArray"
        ) as ExperimentsMetricCollectionV2DTOArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
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
      const body: ExperimentsMetricCollectionV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricCollectionV2DTOArray",
          ""
        ) as ExperimentsMetricCollectionV2DTOArray;
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
   * @params response Response returned by the server for a request to listMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMetrics(
    response: ResponseContext
  ): Promise<ExperimentsMetricV2DTOArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsMetricV2DTOArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricV2DTOArray"
      ) as ExperimentsMetricV2DTOArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
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
      const body: ExperimentsMetricV2DTOArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricV2DTOArray",
        ""
      ) as ExperimentsMetricV2DTOArray;
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
   * @params response Response returned by the server for a request to listMetricSQLModels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMetricSQLModels(
    response: ResponseContext
  ): Promise<ExperimentsMetricSQLModelV2DTOArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsMetricSQLModelV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricSQLModelV2DTOArray"
        ) as ExperimentsMetricSQLModelV2DTOArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
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
      const body: ExperimentsMetricSQLModelV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricSQLModelV2DTOArray",
          ""
        ) as ExperimentsMetricSQLModelV2DTOArray;
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
   * @params response Response returned by the server for a request to listSubjectTypes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSubjectTypes(
    response: ResponseContext
  ): Promise<ExperimentsSubjectTypeV2DTOArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsSubjectTypeV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsSubjectTypeV2DTOArray"
        ) as ExperimentsSubjectTypeV2DTOArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
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
      const body: ExperimentsSubjectTypeV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsSubjectTypeV2DTOArray",
          ""
        ) as ExperimentsSubjectTypeV2DTOArray;
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
   * @params response Response returned by the server for a request to patchExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchExperiment(
    response: ResponseContext
  ): Promise<ExperimentsPatchExperimentV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsPatchExperimentV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsPatchExperimentV2Response"
        ) as ExperimentsPatchExperimentV2Response;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsPatchExperimentV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsPatchExperimentV2Response",
          ""
        ) as ExperimentsPatchExperimentV2Response;
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
   * @params response Response returned by the server for a request to patchSubjectType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchSubjectType(
    response: ResponseContext
  ): Promise<ExperimentsSubjectTypeV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsSubjectTypeV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsSubjectTypeV2DTO"
      ) as ExperimentsSubjectTypeV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: ExperimentsSubjectTypeV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsSubjectTypeV2DTO",
        ""
      ) as ExperimentsSubjectTypeV2DTO;
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
   * @params response Response returned by the server for a request to refreshExperimentResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async refreshExperimentResults(
    response: ResponseContext
  ): Promise<ExperimentsRefreshExperimentResultsV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: ExperimentsRefreshExperimentResultsV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsRefreshExperimentResultsV2DTO"
        ) as ExperimentsRefreshExperimentResultsV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
      const body: ExperimentsRefreshExperimentResultsV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsRefreshExperimentResultsV2DTO",
          ""
        ) as ExperimentsRefreshExperimentResultsV2DTO;
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
   * @params response Response returned by the server for a request to refreshExperimentResultsForOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async refreshExperimentResultsForOrg(
    response: ResponseContext
  ): Promise<ExperimentsRefreshExperimentResultsV2DTOArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: ExperimentsRefreshExperimentResultsV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsRefreshExperimentResultsV2DTOArray"
        ) as ExperimentsRefreshExperimentResultsV2DTOArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
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
      const body: ExperimentsRefreshExperimentResultsV2DTOArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsRefreshExperimentResultsV2DTOArray",
          ""
        ) as ExperimentsRefreshExperimentResultsV2DTOArray;
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
   * @params response Response returned by the server for a request to setDefaultSubjectType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async setDefaultSubjectType(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
   * @params response Response returned by the server for a request to startExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async startExperiment(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
   * @params response Response returned by the server for a request to unarchiveExposureSQLModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unarchiveExposureSQLModel(
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
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
   * @params response Response returned by the server for a request to updateExperimentAnalysisPlanAttributes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateExperimentAnalysisPlanAttributes(
    response: ResponseContext
  ): Promise<ExperimentsAnalysisPlanV2MutationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsAnalysisPlanV2MutationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsAnalysisPlanV2MutationResponse"
        ) as ExperimentsAnalysisPlanV2MutationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsAnalysisPlanV2MutationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsAnalysisPlanV2MutationResponse",
          ""
        ) as ExperimentsAnalysisPlanV2MutationResponse;
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
   * @params response Response returned by the server for a request to updateExperimentMetricGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateExperimentMetricGroup(
    response: ResponseContext
  ): Promise<ExperimentsExperimentMetricGroupMutationV2> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsExperimentMetricGroupMutationV2 =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentMetricGroupMutationV2"
        ) as ExperimentsExperimentMetricGroupMutationV2;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsExperimentMetricGroupMutationV2 =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsExperimentMetricGroupMutationV2",
          ""
        ) as ExperimentsExperimentMetricGroupMutationV2;
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
   * @params response Response returned by the server for a request to updateExposureSQLModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateExposureSQLModel(
    response: ResponseContext
  ): Promise<ExperimentsUpdateExposureSQLModelV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsUpdateExposureSQLModelV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsUpdateExposureSQLModelV2Response"
        ) as ExperimentsUpdateExposureSQLModelV2Response;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsUpdateExposureSQLModelV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsUpdateExposureSQLModelV2Response",
          ""
        ) as ExperimentsUpdateExposureSQLModelV2Response;
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
   * @params response Response returned by the server for a request to updateMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMetric(
    response: ResponseContext
  ): Promise<ExperimentsMetricV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsMetricV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricV2DTO"
      ) as ExperimentsMetricV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsMetricV2DTO = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExperimentsMetricV2DTO",
        ""
      ) as ExperimentsMetricV2DTO;
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
   * @params response Response returned by the server for a request to updateMetricCollection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMetricCollection(
    response: ResponseContext
  ): Promise<ExperimentsMetricCollectionV2DTO> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsMetricCollectionV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricCollectionV2DTO"
        ) as ExperimentsMetricCollectionV2DTO;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 415
    ) {
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
      const body: ExperimentsMetricCollectionV2DTO =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsMetricCollectionV2DTO",
          ""
        ) as ExperimentsMetricCollectionV2DTO;
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
   * @params response Response returned by the server for a request to updateMetricSQLModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMetricSQLModel(
    response: ResponseContext
  ): Promise<ExperimentsUpdateMetricSQLModelV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ExperimentsUpdateMetricSQLModelV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsUpdateMetricSQLModelV2Response"
        ) as ExperimentsUpdateMetricSQLModelV2Response;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
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
      const body: ExperimentsUpdateMetricSQLModelV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ExperimentsUpdateMetricSQLModelV2Response",
          ""
        ) as ExperimentsUpdateMetricSQLModelV2Response;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ExperimentsApiArchiveExposureSQLModelRequest {
  /**
   * The UUID of the exposure SQL model.
   * @type string
   */
  exposureSqlModelId: string;
}

export interface ExperimentsApiCancelExperimentRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * @type ExperimentsCancelExperimentV2Request
   */
  body: ExperimentsCancelExperimentV2Request;
}

export interface ExperimentsApiConcludeExperimentRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * @type ExperimentsConcludeExperimentV2Request
   */
  body: ExperimentsConcludeExperimentV2Request;
}

export interface ExperimentsApiCreateExperimentRequest {
  /**
   * @type ExperimentsCreateExperimentV2Request
   */
  body: ExperimentsCreateExperimentV2Request;
}

export interface ExperimentsApiCreateExperimentMetricGroupRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * @type ExperimentsCreateExperimentMetricGroupV2Request
   */
  body: ExperimentsCreateExperimentMetricGroupV2Request;
}

export interface ExperimentsApiCreateExperimentMetricGroupFromCollectionRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * The UUID of the metric collection.
   * @type string
   */
  metricCollectionId: string;
}

export interface ExperimentsApiCreateExposureSQLModelRequest {
  /**
   * @type ExperimentsCreateExposureSQLModelV2Request
   */
  body: ExperimentsCreateExposureSQLModelV2Request;
}

export interface ExperimentsApiCreateMetricRequest {
  /**
   * @type ExperimentsCreateMetricV2Request
   */
  body: ExperimentsCreateMetricV2Request;
}

export interface ExperimentsApiCreateMetricCollectionRequest {
  /**
   * @type ExperimentsCreateMetricCollectionV2Request
   */
  body: ExperimentsCreateMetricCollectionV2Request;
}

export interface ExperimentsApiCreateMetricSQLModelRequest {
  /**
   * @type ExperimentsCreateMetricSQLModelV2Request
   */
  body: ExperimentsCreateMetricSQLModelV2Request;
}

export interface ExperimentsApiCreateSubjectTypeRequest {
  /**
   * @type ExperimentsCreateSubjectTypeV2Request
   */
  body: ExperimentsCreateSubjectTypeV2Request;
}

export interface ExperimentsApiDeleteExperimentRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
}

export interface ExperimentsApiDeleteExperimentMetricGroupRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * The UUID of the metric group.
   * @type string
   */
  metricGroupId: string;
}

export interface ExperimentsApiDeleteMetricRequest {
  /**
   * The UUID of the metric.
   * @type string
   */
  metricId: string;
}

export interface ExperimentsApiDeleteMetricCollectionRequest {
  /**
   * The UUID of the metric collection.
   * @type string
   */
  metricCollectionId: string;
}

export interface ExperimentsApiDeleteSubjectTypeRequest {
  /**
   * The UUID of the subject type.
   * @type string
   */
  subjectTypeId: string;
}

export interface ExperimentsApiGetExperimentRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
}

export interface ExperimentsApiGetExperimentAnalysisPlanRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
}

export interface ExperimentsApiGetExperimentDiagnosticsRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
}

export interface ExperimentsApiGetExperimentProtocolRequest {
  /**
   * The UUID of the protocol.
   * @type string
   */
  protocolId: string;
}

export interface ExperimentsApiGetExperimentResultsRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
}

export interface ExperimentsApiGetExperimentTrafficSummaryRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
}

export interface ExperimentsApiGetExposureSQLModelRequest {
  /**
   * The UUID of the exposure SQL model.
   * @type string
   */
  exposureSqlModelId: string;
  /**
   * Optional fields to include. Repeat this parameter to request several fields. `counts` adds
   * experiment_count.
   * @type Array<string>
   */
  include?: Array<string>;
}

export interface ExperimentsApiGetMetricRequest {
  /**
   * The UUID of the metric.
   * @type string
   */
  metricId: string;
  /**
   * Optional fields to include. Repeat this parameter to request several fields. `counts` adds
   * experiment_count: how many experiments currently reference this metric.
   * @type Array<string>
   */
  include?: Array<string>;
}

export interface ExperimentsApiGetMetricCollectionRequest {
  /**
   * The UUID of the metric collection.
   * @type string
   */
  metricCollectionId: string;
}

export interface ExperimentsApiGetMetricSQLModelRequest {
  /**
   * The UUID of the metric SQL model.
   * @type string
   */
  metricSqlModelId: string;
  /**
   * Optional fields to include. Repeat this parameter to request several fields. `counts` adds metric_count
   * and experiment_count.
   * @type Array<string>
   */
  include?: Array<string>;
}

export interface ExperimentsApiGetSubjectTypeRequest {
  /**
   * The UUID of the subject type.
   * @type string
   */
  subjectTypeId: string;
  /**
   * Set to `counts` to add experiment_count, exposure_source_count, metric_sql_model_count and protocol_count.
   * @type string
   */
  include?: string;
}

export interface ExperimentsApiListExperimentMetricGroupsRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
}

export interface ExperimentsApiListExperimentProtocolsRequest {
  /**
   * Filter by protocol status. Repeat this parameter to select more than one status.
   * @type Array<ExperimentsPublicProtocolResponseDataAttributesStatus>
   */
  filterStatus?: Array<ExperimentsPublicProtocolResponseDataAttributesStatus>;
  /**
   * Filter by the UUID of the primary metric in the protocol template.
   * @type string
   */
  filterPrimaryMetricId?: string;
  /**
   * Find protocols whose names contain the search text, regardless of case. Leading and trailing spaces are
   * ignored. Blank values apply no filter. The maximum length is 1024 UTF-8 bytes.
   * @type string
   */
  filterQuery?: string;
  /**
   * Filter by the UUID of the subject type in the protocol template.
   * @type string
   */
  filterSubjectTypeId?: string;
  /**
   * Number of results per page. The default is 25. Values above 50 are reduced to 50.
   * @type number
   */
  pageLimit?: number;
  /**
   * Number of results to skip before returning this page.
   * @type number
   */
  pageOffset?: number;
  /**
   * Sort by `name`, `subject_type_name`, `primary_metric_name`, or `updated_at`. Prefix with `-` for
   * descending order. The default is `-updated_at`.
   * @type string
   */
  sort?: string;
}

export interface ExperimentsApiListExperimentsRequest {
  /**
   * Return only experiments concluded at or after this RFC3339 timestamp. Inclusive, and excludes experiments that have not concluded.
   * @type Date
   */
  concludedSince?: Date;
  /**
   * Return only experiments created at or after this RFC3339 timestamp. Inclusive.
   * @type Date
   */
  createdSince?: Date;
  /**
   * Maximum number of results to return. Defaults to 25 when omitted, and is capped at 50 (larger values are clamped to 50). The response includes meta.page (with total) and pagination links.
   * @type number
   */
  pageLimit?: number;
  /**
   * Number of results to skip for pagination. Defaults to 0 when omitted.
   * @type number
   */
  pageOffset?: number;
  /**
   * Filter by protocol UUID. Repeat this parameter to supply several IDs. An experiment matches if it uses any
   * listed protocol.
   * @type Array<string>
   */
  protocolId?: Array<string>;
  /**
   * Return only experiments whose results_last_updated is before this RFC3339 timestamp. results_last_updated is the later of the latest successful run completion and the latest stored result refresh. Exclusive, and excludes experiments without successful results.
   * @type Date
   */
  resultsUpdatedBefore?: Date;
  /**
   * Return only experiments whose results_last_updated is at or after this RFC3339 timestamp. results_last_updated is the later of the latest successful run completion and the latest stored result refresh. Inclusive, and excludes experiments without successful results. This filter does not include all metadata edits or deletions.
   * @type Date
   */
  resultsUpdatedSince?: Date;
  /**
   * Find experiments whose names contain the search text, regardless of case.
   * @type string
   */
  search?: string;
  /**
   * Sort fields: name, created_at, or updated_at. Use a comma-separated list in priority order, for example name,-created_at. Prefix each field with `-` for descending. Defaults to created_at descending.
   * @type string
   */
  sort?: string;
  /**
   * Filter by experiment status. Accepted values are DRAFT, SCHEDULED, IN_PROGRESS, READY_FOR_DECISION,
   * DECISION_MADE, and CANCELLED. Repeat this parameter to select several statuses, for example
   * `status=IN_PROGRESS&status=READY_FOR_DECISION`.
   * @type Array<string>
   */
  status?: Array<string>;
  /**
   * Filter by tag name. Repeat this parameter to supply several tags. An experiment matches if it has at least
   * one listed tag.
   * @type Array<string>
   */
  tags?: Array<string>;
}

export interface ExperimentsApiListExposureSQLModelsRequest {
  /**
   * Optional fields to include. Repeat this parameter to request several fields. `counts` adds
   * experiment_count, which costs an extra aggregate query.
   * @type Array<string>
   */
  include?: Array<string>;
  /**
   * When true, archived models are included in the result. Defaults to false, so archived models are hidden.
   * @type boolean
   */
  includeArchived?: boolean;
  /**
   * Maximum number of results to return. Defaults to 25 when omitted, and is capped at 50 (larger values are clamped to 50). The response includes meta.page (with total) and pagination links.
   * @type number
   */
  pageLimit?: number;
  /**
   * Number of results to skip for pagination. Defaults to 0 when omitted.
   * @type number
   */
  pageOffset?: number;
  /**
   * Find exposure SQL models whose names contain the search text, regardless of case.
   * @type string
   */
  search?: string;
  /**
   * Sort field: name, created_at, or updated_at. Prefix with `-` for descending (for example, `-created_at`).
   * Defaults to created_at descending.
   * @type string
   */
  sort?: string;
}

export interface ExperimentsApiListMetricCollectionsRequest {
  /**
   * Optional fields to include. Repeat this parameter to request several fields. `counts` adds metric_count.
   * @type Array<string>
   */
  include?: Array<string>;
  /**
   * Number of results per page. The default is 25. Values above 50 are reduced to 50.
   * @type number
   */
  pageLimit?: number;
  /**
   * Number of results to skip before returning this page.
   * @type number
   */
  pageOffset?: number;
  /**
   * Find collections whose names contain the search text, regardless of case. Leading and trailing spaces are
   * ignored. Blank values apply no filter. The maximum length is 1024 UTF-8 bytes.
   * @type string
   */
  search?: string;
  /**
   * Sort by one field: `name`, `created_at`, or `updated_at`. Prefix with `-` for descending order. The
   * default is `-created_at`.
   * @type string
   */
  sort?: string;
}

export interface ExperimentsApiListMetricsRequest {
  /**
   * Optional fields to include. Repeat this parameter to request several fields. `counts` adds
   * experiment_count on each metric, which costs an extra aggregate query.
   * @type Array<string>
   */
  include?: Array<string>;
  /**
   * Maximum number of results to return. Defaults to 25 when omitted, and is capped at 50 (larger values are clamped to 50). The response includes meta.page (with total) and pagination links.
   * @type number
   */
  pageLimit?: number;
  /**
   * Number of results to skip for pagination. Defaults to 0 when omitted.
   * @type number
   */
  pageOffset?: number;
  /**
   * Find metrics whose names contain the search text, regardless of case.
   * @type string
   */
  search?: string;
  /**
   * Sort field: name, created_at, or updated_at. Prefix with `-` for descending (for example, `-created_at`).
   * A single field only; a comma-separated list is rejected. Defaults to created_at descending.
   * @type string
   */
  sort?: string;
}

export interface ExperimentsApiListMetricSQLModelsRequest {
  /**
   * Optional fields to include. Repeat this parameter to request several fields. `counts` adds metric_count
   * and experiment_count, which cost an extra aggregate query.
   * @type Array<string>
   */
  include?: Array<string>;
  /**
   * Maximum number of results to return. Defaults to 25 when omitted, and is capped at 50 (larger values are clamped to 50). The response includes meta.page (with total) and pagination links.
   * @type number
   */
  pageLimit?: number;
  /**
   * Number of results to skip for pagination. Defaults to 0 when omitted.
   * @type number
   */
  pageOffset?: number;
  /**
   * Sort field: name, created_at, updated_at, metric_count, or experiment_count. A single field only; a
   * comma-separated list is rejected. Prefix with `-` for descending (for example, `-created_at`). Defaults to
   * created_at descending.
   * @type string
   */
  sort?: string;
}

export interface ExperimentsApiListSubjectTypesRequest {
  /**
   * Set to `counts` to add experiment_count, exposure_source_count, metric_sql_model_count and protocol_count to each subject type. Each costs an extra query, so they are omitted unless asked for.
   * @type string
   */
  include?: string;
  /**
   * Maximum number of results to return. Defaults to 25 when omitted, and is capped at 50 (larger values are clamped to 50). The response includes meta.page (with total) and pagination links.
   * @type number
   */
  pageLimit?: number;
  /**
   * Number of results to skip for pagination. Defaults to 0 when omitted.
   * @type number
   */
  pageOffset?: number;
  /**
   * Find subject types whose names contain the search text, regardless of case.
   * @type string
   */
  search?: string;
  /**
   * Sort fields: name, created_at, or updated_at. Use a comma-separated list in priority order, for example name,-created_at. Prefix each field with `-` for descending. Defaults to created_at descending.
   * @type string
   */
  sort?: string;
}

export interface ExperimentsApiPatchExperimentRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * @type ExperimentsPatchExperimentV2Request
   */
  body: ExperimentsPatchExperimentV2Request;
}

export interface ExperimentsApiPatchSubjectTypeRequest {
  /**
   * The UUID of the subject type.
   * @type string
   */
  subjectTypeId: string;
  /**
   * @type ExperimentsPatchSubjectTypeV2Request
   */
  body: ExperimentsPatchSubjectTypeV2Request;
}

export interface ExperimentsApiRefreshExperimentResultsRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * Force a full warehouse rebuild. Defaults to false when omitted.
   * @type boolean
   */
  fullRefresh?: boolean;
}

export interface ExperimentsApiRefreshExperimentResultsForOrgRequest {
  /**
   * Force a full warehouse rebuild. Defaults to false when omitted.
   * @type boolean
   */
  fullRefresh?: boolean;
}

export interface ExperimentsApiSetDefaultSubjectTypeRequest {
  /**
   * The UUID of the subject type.
   * @type string
   */
  subjectTypeId: string;
}

export interface ExperimentsApiStartExperimentRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * @type ExperimentsStartExperimentV2Request
   */
  body?: ExperimentsStartExperimentV2Request;
}

export interface ExperimentsApiUnarchiveExposureSQLModelRequest {
  /**
   * The UUID of the exposure SQL model.
   * @type string
   */
  exposureSqlModelId: string;
}

export interface ExperimentsApiUpdateExperimentAnalysisPlanAttributesRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * @type ExperimentsAnalysisPlanWriteV2Request
   */
  body: ExperimentsAnalysisPlanWriteV2Request;
}

export interface ExperimentsApiUpdateExperimentMetricGroupRequest {
  /**
   * The UUID of the experiment.
   * @type string
   */
  experimentId: string;
  /**
   * The UUID of the metric group.
   * @type string
   */
  metricGroupId: string;
  /**
   * @type ExperimentsPatchExperimentMetricGroupV2Request
   */
  body: ExperimentsPatchExperimentMetricGroupV2Request;
}

export interface ExperimentsApiUpdateExposureSQLModelRequest {
  /**
   * The UUID of the exposure SQL model.
   * @type string
   */
  exposureSqlModelId: string;
  /**
   * @type ExperimentsCreateExposureSQLModelV2Request
   */
  body: ExperimentsCreateExposureSQLModelV2Request;
  /**
   * Optional fields to include. Repeat this parameter to request several fields. `counts` adds
   * experiment_count to the updated model.
   * @type Array<string>
   */
  include?: Array<string>;
}

export interface ExperimentsApiUpdateMetricRequest {
  /**
   * The UUID of the metric.
   * @type string
   */
  metricId: string;
  /**
   * @type ExperimentsUpdateMetricV2Request
   */
  body: ExperimentsUpdateMetricV2Request;
}

export interface ExperimentsApiUpdateMetricCollectionRequest {
  /**
   * The UUID of the metric collection.
   * @type string
   */
  metricCollectionId: string;
  /**
   * @type ExperimentsPatchMetricCollectionV2Request
   */
  body: ExperimentsPatchMetricCollectionV2Request;
}

export interface ExperimentsApiUpdateMetricSQLModelRequest {
  /**
   * The UUID of the metric SQL model.
   * @type string
   */
  metricSqlModelId: string;
  /**
   * @type ExperimentsCreateMetricSQLModelV2Request
   */
  body: ExperimentsCreateMetricSQLModelV2Request;
}

export class ExperimentsApi {
  private requestFactory: ExperimentsApiRequestFactory;
  private responseProcessor: ExperimentsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ExperimentsApiRequestFactory,
    responseProcessor?: ExperimentsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ExperimentsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ExperimentsApiResponseProcessor();
  }

  /**
   * Archive an exposure SQL model. Archived models are hidden from the default list and are no longer refreshed for new feature flags. Experiments already reading from the model keep working. Archiving is how a model that is in use by an experiment, and therefore cannot be deleted, is retired.
   * @param param The request object
   */
  public archiveExposureSQLModel(
    param: ExperimentsApiArchiveExposureSQLModelRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.archiveExposureSQLModel(
      param.exposureSqlModelId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.archiveExposureSQLModel(
            responseContext
          );
        });
    });
  }

  /**
   * Cancel an experiment, ending it without a winning variant. The experiment moves to CANCELLED status, the
   * supplied reason is recorded in its conclusion as the decision reason, and the experiment is unlinked from the
   * feature flag allocations that exposed it, which stops its exposure. An experiment that has already completed
   * its rollout, had its code removed, or been canceled cannot be canceled again. Canceling is not reversible: an
   * experiment cannot be returned to a running state afterward. It is also not idempotent: canceling an
   * already-canceled experiment returns 409, so a retry after a timeout cannot be distinguished from a
   * cancellation made by someone else.
   * @param param The request object
   */
  public cancelExperiment(
    param: ExperimentsApiCancelExperimentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelExperiment(
      param.experimentId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelExperiment(responseContext);
        });
    });
  }

  /**
   * Conclude an experiment on a winning variant. The experiment moves to DECISION_MADE status, the outcome is recorded in its conclusion, and for a flag-backed experiment the winning variant is rolled out to 100% of the linked feature flag allocation. `decision_variant_key` must match a variant in the experiment. Only an experiment that is currently running or ready for a decision can be concluded. Concluding is not reversible and is not idempotent: concluding an already-concluded experiment returns 409.
   * @param param The request object
   */
  public concludeExperiment(
    param: ExperimentsApiConcludeExperimentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.concludeExperiment(
      param.experimentId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.concludeExperiment(responseContext);
        });
    });
  }

  /**
   * Create a draft experiment. `name` is required. `structured_metadata` identifies each metadata field by `field_key`; use `freetext_value` for free-text fields and `enum_values` for enum fields. When this attribute is present, the request must include a value for every required metadata field. When `protocol_id` is present, the published protocol supplies the subject type, decision metrics, analysis-plan defaults, and configuration and enforcement baselines. The request may also include hypothesis, tags, teams, related links, and assignment or event date overrides that satisfy the protocol's duration rules; omit subject_type_id, decision_metrics, variants, warehouse_exposure_configuration, datadog_flag_configuration, traffic_exposure, split_by_properties, and structured_metadata. The protocol association cannot be changed after creation. Without `protocol_id`, a complete Warehouse or Datadog configuration saves the experiment and its configuration in one transaction. For Datadog flag configuration, send `name`, `subject_type_id`, `decision_metrics`, `variants`, `traffic_exposure`, `assignments_start_date`, `assignments_end_date`, `events_start_date`, and `events_end_date`. The four date fields can be null. Inside `datadog_flag_configuration`, send `feature_flag_id`, `environment_id`, `targeting_rules`, and `entry_point`. Use `targeting_rules: []` and `entry_point: null` when unused. This creates one saved draft allocation that does not serve traffic. Omit all configuration fields to create an experiment without an allocation. This endpoint is not idempotent.
   * @param param The request object
   */
  public createExperiment(
    param: ExperimentsApiCreateExperimentRequest,
    options?: Configuration
  ): Promise<ExperimentsExperimentV2DTO> {
    const requestContextPromise = this.requestFactory.createExperiment(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createExperiment(responseContext);
        });
    });
  }

  /**
   * Create a non-decision metric group. The optional metrics array is ordered. Decision groups remain managed through decision_metrics on the experiment resource. This operation does not synchronously recompute results.
   * @param param The request object
   */
  public createExperimentMetricGroup(
    param: ExperimentsApiCreateExperimentMetricGroupRequest,
    options?: Configuration
  ): Promise<ExperimentsExperimentMetricGroupMutationV2> {
    const requestContextPromise =
      this.requestFactory.createExperimentMetricGroup(
        param.experimentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createExperimentMetricGroup(
            responseContext
          );
        });
    });
  }

  /**
   * Copy a metric collection into a new non-decision metric group. The group is a request-time snapshot: later changes to the collection do not affect the experiment. Metric order is preserved. The operation is not idempotent, and incompatible or empty collections are rejected without creating a group.
   * @param param The request object
   */
  public createExperimentMetricGroupFromCollection(
    param: ExperimentsApiCreateExperimentMetricGroupFromCollectionRequest,
    options?: Configuration
  ): Promise<ExperimentsExperimentMetricGroupMutationV2> {
    const requestContextPromise =
      this.requestFactory.createExperimentMetricGroupFromCollection(
        param.experimentId,
        param.metricCollectionId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createExperimentMetricGroupFromCollection(
            responseContext
          );
        });
    });
  }

  /**
   * Create an exposure SQL model. Requires at least one subject type. The warehouse connection is resolved from the organization, which has exactly one.
   * @param param The request object
   */
  public createExposureSQLModel(
    param: ExperimentsApiCreateExposureSQLModelRequest,
    options?: Configuration
  ): Promise<ExperimentsExposureSQLModelV2DTO> {
    const requestContextPromise = this.requestFactory.createExposureSQLModel(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createExposureSQLModel(responseContext);
        });
    });
  }

  /**
   * Create a metric. The metric's type is derived from the aggregation shape: a numerator alone is SIMPLE, a numerator with a denominator is RATIO, and a percentile aggregation is PERCENTILE. Warehouse aggregations reference measures by UUID. Property filters use property_id or measure_id UUIDs returned by the same metric SQL model; every reference must belong to the aggregation's data source. The is_certified attribute is rejected. Certification cannot be changed through this endpoint.
   * @param param The request object
   */
  public createMetric(
    param: ExperimentsApiCreateMetricRequest,
    options?: Configuration
  ): Promise<ExperimentsMetricV2DTO> {
    const requestContextPromise = this.requestFactory.createMetric(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMetric(responseContext);
        });
    });
  }

  /**
   * Create metric collection.
   * @param param The request object
   */
  public createMetricCollection(
    param: ExperimentsApiCreateMetricCollectionRequest,
    options?: Configuration
  ): Promise<ExperimentsMetricCollectionV2DTO> {
    const requestContextPromise = this.requestFactory.createMetricCollection(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMetricCollection(responseContext);
        });
    });
  }

  /**
   * Create a metric SQL model. Requires at least one subject type, whose subject_type_id must already exist for the organization (list them with GET /api/v2/experiments/subject-types). The model is created against the organization's warehouse connection, which is resolved server-side. Only customer-defined measures belong in measures. The response provides unique_subject_count_measure_id for each subject type and event_count_measure_id for use in metric aggregations. column_type is required for every measure and property. Certification is read-only and cannot be changed through this endpoint.
   * @param param The request object
   */
  public createMetricSQLModel(
    param: ExperimentsApiCreateMetricSQLModelRequest,
    options?: Configuration
  ): Promise<ExperimentsMetricSQLModelV2DTO> {
    const requestContextPromise = this.requestFactory.createMetricSQLModel(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMetricSQLModel(responseContext);
        });
    });
  }

  /**
   * Create a subject type for the organization.
   * @param param The request object
   */
  public createSubjectType(
    param: ExperimentsApiCreateSubjectTypeRequest,
    options?: Configuration
  ): Promise<ExperimentsSubjectTypeV2DTO> {
    const requestContextPromise = this.requestFactory.createSubjectType(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSubjectType(responseContext);
        });
    });
  }

  /**
   * Delete an experiment and its linked feature flag allocations in one database transaction. After deletion, the experiment is no longer returned by the API. If the transaction fails, neither the experiment nor its allocations are deleted. Deleting an experiment cannot be undone.
   * @param param The request object
   */
  public deleteExperiment(
    param: ExperimentsApiDeleteExperimentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteExperiment(
      param.experimentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteExperiment(responseContext);
        });
    });
  }

  /**
   * Delete a non-decision metric group and its memberships. Decision groups remain managed through the experiment resource. This operation does not start a pipeline. Read experiment results after deletion to check stale metadata, then explicitly refresh results when required.
   * @param param The request object
   */
  public deleteExperimentMetricGroup(
    param: ExperimentsApiDeleteExperimentMetricGroupRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteExperimentMetricGroup(
        param.experimentId,
        param.metricGroupId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteExperimentMetricGroup(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a metric. Certified metrics are read-only through this endpoint. The record is soft-deleted and stops appearing in reads. A metric still referenced by an experiment cannot be deleted; detach it from those experiments first.
   * @param param The request object
   */
  public deleteMetric(
    param: ExperimentsApiDeleteMetricRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteMetric(
      param.metricId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMetric(responseContext);
        });
    });
  }

  /**
   * Delete metric collection.
   * @param param The request object
   */
  public deleteMetricCollection(
    param: ExperimentsApiDeleteMetricCollectionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteMetricCollection(
      param.metricCollectionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMetricCollection(responseContext);
        });
    });
  }

  /**
   * Delete a subject type. The record is soft-deleted and stops appearing in reads. The call is idempotent: deleting the same subject type again also returns 204. The organization's default subject type cannot be deleted; make another one the default first. A subject type that experiments, exposure SQL models, metric SQL models or protocols still reference cannot be deleted either; the refusal names the blockers.
   * @param param The request object
   */
  public deleteSubjectType(
    param: ExperimentsApiDeleteSubjectTypeRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteSubjectType(
      param.subjectTypeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSubjectType(responseContext);
        });
    });
  }

  /**
   * Get a complete experiment by ID. The response includes structured metadata, related links, and, when a complete setup exists, decision metrics, variants, `warehouse_exposure_configuration`, `datadog_flag_configuration`, STATIC or STEPS traffic exposure, and assignment and event dates. STEPS describes the configured plan rather than wall-clock history; Datadog step durations exclude pauses. The list endpoint omits these setup details.
   * @param param The request object
   */
  public getExperiment(
    param: ExperimentsApiGetExperimentRequest,
    options?: Configuration
  ): Promise<ExperimentsExperimentV2DTO> {
    const requestContextPromise = this.requestFactory.getExperiment(
      param.experimentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getExperiment(responseContext);
        });
    });
  }

  /**
   * Get the effective public statistical analysis settings for an experiment. has_custom_analysis_settings compares only settings the caller can edit; protocol-required differences from company defaults do not make the plan custom.
   * @param param The request object
   */
  public getExperimentAnalysisPlan(
    param: ExperimentsApiGetExperimentAnalysisPlanRequest,
    options?: Configuration
  ): Promise<ExperimentsAnalysisPlanV2DTO> {
    const requestContextPromise = this.requestFactory.getExperimentAnalysisPlan(
      param.experimentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getExperimentAnalysisPlan(
            responseContext
          );
        });
    });
  }

  /**
   * Get the diagnostics produced by an experiment's latest analysis run. Each diagnostic includes its category, and the response includes an overall diagnostic or pipeline lifecycle status.
   * @param param The request object
   */
  public getExperimentDiagnostics(
    param: ExperimentsApiGetExperimentDiagnosticsRequest,
    options?: Configuration
  ): Promise<ExperimentsExperimentDiagnosticsV2DTO> {
    const requestContextPromise = this.requestFactory.getExperimentDiagnostics(
      param.experimentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getExperimentDiagnostics(
            responseContext
          );
        });
    });
  }

  /**
   * Get a draft, published, or archived experiment protocol by ID.
   * @param param The request object
   */
  public getExperimentProtocol(
    param: ExperimentsApiGetExperimentProtocolRequest,
    options?: Configuration
  ): Promise<ExperimentsPublicProtocolResponse> {
    const requestContextPromise = this.requestFactory.getExperimentProtocol(
      param.protocolId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getExperimentProtocol(responseContext);
        });
    });
  }

  /**
   * Get an experiment's computed results: per-variant statistical analysis for the latest successful run. A historical run cannot be selected. Unavailable analysis statistics, including `p_value` and `confidence_interval`, are omitted. The `numerator`, `denominator`, and `variant_metric_value` fields can be null when their values are unavailable. Do not treat an omitted or null value as zero.
   * @param param The request object
   */
  public getExperimentResults(
    param: ExperimentsApiGetExperimentResultsRequest,
    options?: Configuration
  ): Promise<ExperimentsVariantResultsV2DTOArray> {
    const requestContextPromise = this.requestFactory.getExperimentResults(
      param.experimentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getExperimentResults(responseContext);
        });
    });
  }

  /**
   * Get an experiment's traffic summary: per-variant exposure counts and a sample-ratio-mismatch flag (is_traffic_imbalanced). SRM statistics live on the diagnostics endpoint.
   * @param param The request object
   */
  public getExperimentTrafficSummary(
    param: ExperimentsApiGetExperimentTrafficSummaryRequest,
    options?: Configuration
  ): Promise<ExperimentsTrafficSummaryV2DTO> {
    const requestContextPromise =
      this.requestFactory.getExperimentTrafficSummary(
        param.experimentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getExperimentTrafficSummary(
            responseContext
          );
        });
    });
  }

  /**
   * Get an exposure SQL model. Returns a single model by its ID for the organization, including its subject types and properties.
   * @param param The request object
   */
  public getExposureSQLModel(
    param: ExperimentsApiGetExposureSQLModelRequest,
    options?: Configuration
  ): Promise<ExperimentsExposureSQLModelV2DTO> {
    const requestContextPromise = this.requestFactory.getExposureSQLModel(
      param.exposureSqlModelId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getExposureSQLModel(responseContext);
        });
    });
  }

  /**
   * Get a metric. Returns a single experiment metric by its ID for the organization.
   * @param param The request object
   */
  public getMetric(
    param: ExperimentsApiGetMetricRequest,
    options?: Configuration
  ): Promise<ExperimentsMetricV2DTO> {
    const requestContextPromise = this.requestFactory.getMetric(
      param.metricId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMetric(responseContext);
        });
    });
  }

  /**
   * Get metric collection.
   * @param param The request object
   */
  public getMetricCollection(
    param: ExperimentsApiGetMetricCollectionRequest,
    options?: Configuration
  ): Promise<ExperimentsMetricCollectionV2DTO> {
    const requestContextPromise = this.requestFactory.getMetricCollection(
      param.metricCollectionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMetricCollection(responseContext);
        });
    });
  }

  /**
   * Get a metric SQL model. Returns a single model by its ID for the organization, including its subject types, measures and properties.
   * @param param The request object
   */
  public getMetricSQLModel(
    param: ExperimentsApiGetMetricSQLModelRequest,
    options?: Configuration
  ): Promise<ExperimentsMetricSQLModelV2DTO> {
    const requestContextPromise = this.requestFactory.getMetricSQLModel(
      param.metricSqlModelId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMetricSQLModel(responseContext);
        });
    });
  }

  /**
   * Get a subject type. Returns a single subject type by its ID for the organization.
   * @param param The request object
   */
  public getSubjectType(
    param: ExperimentsApiGetSubjectTypeRequest,
    options?: Configuration
  ): Promise<ExperimentsSubjectTypeV2DTO> {
    const requestContextPromise = this.requestFactory.getSubjectType(
      param.subjectTypeId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSubjectType(responseContext);
        });
    });
  }

  /**
   * List every decision and non-decision metric group attached to an experiment. Metric references are returned in their stored order. An incomplete draft can have no decision group and returns only the groups that exist.
   * @param param The request object
   */
  public listExperimentMetricGroups(
    param: ExperimentsApiListExperimentMetricGroupsRequest,
    options?: Configuration
  ): Promise<ExperimentsExperimentMetricGroupV2DTOArray> {
    const requestContextPromise =
      this.requestFactory.listExperimentMetricGroups(
        param.experimentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listExperimentMetricGroups(
            responseContext
          );
        });
    });
  }

  /**
   * List draft, published, and archived experiment protocols. Omit filter[status] to return all statuses. Only published protocols can be used to create experiments.
   * @param param The request object
   */
  public listExperimentProtocols(
    param: ExperimentsApiListExperimentProtocolsRequest = {},
    options?: Configuration
  ): Promise<ExperimentsPublicProtocolListResponseArray> {
    const requestContextPromise = this.requestFactory.listExperimentProtocols(
      param.filterStatus,
      param.filterPrimaryMetricId,
      param.filterQuery,
      param.filterSubjectTypeId,
      param.pageLimit,
      param.pageOffset,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listExperimentProtocols(
            responseContext
          );
        });
    });
  }

  /**
   * List experiments. Returns a paginated list of experiments and their structured metadata for the organization. Supports filtering and pagination. Use Get experiment for variants, decision metrics, traffic exposure, and assignment configuration.
   * @param param The request object
   */
  public listExperiments(
    param: ExperimentsApiListExperimentsRequest = {},
    options?: Configuration
  ): Promise<ExperimentsExperimentV2ListDTOArray> {
    const requestContextPromise = this.requestFactory.listExperiments(
      param.concludedSince,
      param.createdSince,
      param.pageLimit,
      param.pageOffset,
      param.protocolId,
      param.resultsUpdatedBefore,
      param.resultsUpdatedSince,
      param.search,
      param.sort,
      param.status,
      param.tags,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listExperiments(responseContext);
        });
    });
  }

  /**
   * List exposure SQL models. Returns a paginated list of the SQL models that experiment exposures are read from for the organization. Models maintained by Datadog are not included: they cannot be modified and cannot be used as an experiment's assignment source.
   * @param param The request object
   */
  public listExposureSQLModels(
    param: ExperimentsApiListExposureSQLModelsRequest = {},
    options?: Configuration
  ): Promise<ExperimentsExposureSQLModelV2DTOArray> {
    const requestContextPromise = this.requestFactory.listExposureSQLModels(
      param.include,
      param.includeArchived,
      param.pageLimit,
      param.pageOffset,
      param.search,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listExposureSQLModels(responseContext);
        });
    });
  }

  /**
   * List metric collections for the organization. Collections are reusable ordered metric sets; attaching one to an experiment creates an independent snapshot.
   * @param param The request object
   */
  public listMetricCollections(
    param: ExperimentsApiListMetricCollectionsRequest = {},
    options?: Configuration
  ): Promise<ExperimentsMetricCollectionV2DTOArray> {
    const requestContextPromise = this.requestFactory.listMetricCollections(
      param.include,
      param.pageLimit,
      param.pageOffset,
      param.search,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMetricCollections(responseContext);
        });
    });
  }

  /**
   * List metrics. Returns a paginated list of the experiment metrics defined for the organization.
   * @param param The request object
   */
  public listMetrics(
    param: ExperimentsApiListMetricsRequest = {},
    options?: Configuration
  ): Promise<ExperimentsMetricV2DTOArray> {
    const requestContextPromise = this.requestFactory.listMetrics(
      param.include,
      param.pageLimit,
      param.pageOffset,
      param.search,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMetrics(responseContext);
        });
    });
  }

  /**
   * List metric SQL models. Returns a paginated list of the SQL models that metrics are defined on for the organization.
   * @param param The request object
   */
  public listMetricSQLModels(
    param: ExperimentsApiListMetricSQLModelsRequest = {},
    options?: Configuration
  ): Promise<ExperimentsMetricSQLModelV2DTOArray> {
    const requestContextPromise = this.requestFactory.listMetricSQLModels(
      param.include,
      param.pageLimit,
      param.pageOffset,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMetricSQLModels(responseContext);
        });
    });
  }

  /**
   * List subject types. Returns a paginated list of the subject types defined for the organization.
   * @param param The request object
   */
  public listSubjectTypes(
    param: ExperimentsApiListSubjectTypesRequest = {},
    options?: Configuration
  ): Promise<ExperimentsSubjectTypeV2DTOArray> {
    const requestContextPromise = this.requestFactory.listSubjectTypes(
      param.include,
      param.pageLimit,
      param.pageOffset,
      param.search,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSubjectTypes(responseContext);
        });
    });
  }

  /**
   * Update mutable experiment fields. State and protocol restrictions apply.
   *
   * **PATCH behavior**
   *
   * - Omitted fields stay unchanged, including fields inside `datadog_flag_configuration`.
   * - Supplied `tags`, `teams`, `related_links`, `decision_metrics`, and `variants` replace their stored lists.
   * - Validation can return several field errors before saving any changes. The response is HTTP 400 if any error
   *   concerns invalid input. It is HTTP 409 if all errors concern state or protocol conflicts.
   *
   * **Result refreshes**
   *
   * This endpoint does not start a pipeline run. `meta.needs_pipeline_refresh` states whether the edit requires a
   * run. When true, POST to `meta.refresh_endpoint` after finishing your edits. Its `full_refresh` query parameter
   * selects the run type.
   *
   * Keep refresh requirements across edits. A later false value does not clear an earlier requirement. Any
   * `full_refresh=true` requirement takes priority.
   *
   * After start, STATIC and STEPS exposure changes for warehouse experiments without a Datadog flag attempt to
   * recalculate stored results. Changes to decision metrics or the control variant also attempt recalculation when
   * results exist. If stored data is insufficient or recalculation fails, the edit stays saved and
   * `meta.needs_pipeline_refresh` is true.
   *
   * **Exposure rules**
   *
   * - Draft experiments can replace the full STATIC or STEPS plan through `traffic_exposure`.
   * - Warehouse steps start at `assignments_start_date` and can have different durations.
   * - Running warehouse experiments can replace step fractions, durations, and exposure mode. Retained variant
   *   weights cannot change through this API. You can send unchanged values again.
   * - After a warehouse experiment ends, configuration replacement supports only STATIC fraction changes.
   * - New Datadog plans have at most five steps. The first fraction must be positive. All steps except the last
   *   have equal durations. Durations exclude pauses.
   * - The last step has a null duration. Its fraction stays in effect until assignment ends.
   * - After start, use the experiment UI to change traffic exposure for experiments linked to a Datadog flag.
   *
   * **Metadata**
   *
   * `structured_metadata` updates fields by `field_key`. Use `freetext_value: ""` or `enum_values: []` to clear an
   * optional field. Omitted fields stay unchanged. A null or empty `structured_metadata` attribute makes no
   * change.
   *
   * **Flag changes**
   *
   * Before start, a Datadog update creates or edits the saved draft allocation. To add or replace a flag, send
   * `variants` and `traffic_exposure`. Inside `datadog_flag_configuration`, send `feature_flag_id`,
   * `environment_id`, `targeting_rules`, and `entry_point`. Use `targeting_rules: []` and `entry_point: null` when
   * unused.
   *
   * To replace a flag, also set `reset_on_feature_flag_change: true` inside that object. The server deletes the
   * old draft and creates a new one in the same transaction. The response includes a
   * `datadog_flag_configuration_reset` warning in `meta.warnings`.
   *
   * Set `datadog_flag_configuration: null` to delete the draft allocation. This also clears the experiment's flag
   * association, variants, assignment sources, and entry point. The experiment remains.
   *
   * Flag replacement and removal require a draft experiment without warehouse exposure. These actions do not
   * convert hybrid experiments.
   * @param param The request object
   */
  public patchExperiment(
    param: ExperimentsApiPatchExperimentRequest,
    options?: Configuration
  ): Promise<ExperimentsPatchExperimentV2Response> {
    const requestContextPromise = this.requestFactory.patchExperiment(
      param.experimentId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchExperiment(responseContext);
        });
    });
  }

  /**
   * Update mutable fields on a subject type. Only the fields present in the body are changed. Any subject type can be updated, including the organization's default one, but the is_default flag itself is read-only here: which subject type is the default cannot be changed through this endpoint.
   * @param param The request object
   */
  public patchSubjectType(
    param: ExperimentsApiPatchSubjectTypeRequest,
    options?: Configuration
  ): Promise<ExperimentsSubjectTypeV2DTO> {
    const requestContextPromise = this.requestFactory.patchSubjectType(
      param.subjectTypeId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchSubjectType(responseContext);
        });
    });
  }

  /**
   * Request a results refresh for one experiment. HTTP 202 confirms acceptance, not completed results. The response identifies the experiment and does not include a job ID. Read experiment results to check freshness. A request while a refresh is queued or running returns 409. After completion, another request can start another refresh.
   * @param param The request object
   */
  public refreshExperimentResults(
    param: ExperimentsApiRefreshExperimentResultsRequest,
    options?: Configuration
  ): Promise<ExperimentsRefreshExperimentResultsV2DTO> {
    const requestContextPromise = this.requestFactory.refreshExperimentResults(
      param.experimentId,
      param.fullRefresh,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.refreshExperimentResults(
            responseContext
          );
        });
    });
  }

  /**
   * Trigger a results refresh across the organization's active experiments. Returns the count of experiments whose refresh was triggered (meta.experiments_updated) plus a per-experiment breakdown of what happened to each (meta.results).
   * @param param The request object
   */
  public refreshExperimentResultsForOrg(
    param: ExperimentsApiRefreshExperimentResultsForOrgRequest = {},
    options?: Configuration
  ): Promise<ExperimentsRefreshExperimentResultsV2DTOArray> {
    const requestContextPromise =
      this.requestFactory.refreshExperimentResultsForOrg(
        param.fullRefresh,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.refreshExperimentResultsForOrg(
            responseContext
          );
        });
    });
  }

  /**
   * Make this subject type the organization's default. Experiment creation uses the default when the request names no subject type. Promoting one subject type demotes the previous default in the same transaction, so the organization always has exactly one. The call is idempotent: promoting the current default succeeds and changes nothing. There is no matching demote, because an organization cannot have no default; promote a different subject type instead.
   * @param param The request object
   */
  public setDefaultSubjectType(
    param: ExperimentsApiSetDefaultSubjectTypeRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.setDefaultSubjectType(
      param.subjectTypeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.setDefaultSubjectType(responseContext);
        });
    });
  }

  /**
   * Start an experiment. The experiment is started exactly as it is configured; this endpoint accepts no attributes, and a request body carrying any is rejected rather than ignored. Set the run window, duration, or variants with PATCH /api/v2/experiments/{experiment_id} before starting. An unconfigured draft returns HTTP 409. Configure either warehouse_exposure_configuration or datadog_flag_configuration, plus the required experiment fields, before starting. Start validation errors can include meta.configuration_pointer to identify a field on the experiment to correct. For a flag-backed experiment this enables the linked feature flag's environment, clears any stored variant override on it, and starts the allocation's rollout. The request is idempotent: an experiment that is already running or ready for a decision still returns 204, so a retry after a timeout is safe. One exception: an experiment scheduled to start is accepted only when it is backed by your own feature flag; a Datadog-flag experiment in that state returns 409 because its stored state and flag allocation disagree. Cancel and conclude are not idempotent and return 409 when repeated.
   * @param param The request object
   */
  public startExperiment(
    param: ExperimentsApiStartExperimentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.startExperiment(
      param.experimentId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.startExperiment(responseContext);
        });
    });
  }

  /**
   * Unarchive an exposure SQL model. Restores an archived model to the default list.
   * @param param The request object
   */
  public unarchiveExposureSQLModel(
    param: ExperimentsApiUnarchiveExposureSQLModelRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unarchiveExposureSQLModel(
      param.exposureSqlModelId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unarchiveExposureSQLModel(
            responseContext
          );
        });
    });
  }

  /**
   * Update selected statistical analysis settings. Omitted attributes remain unchanged and nullable attributes can be cleared with null. Protocol-locked settings cannot be changed.
   * @param param The request object
   */
  public updateExperimentAnalysisPlanAttributes(
    param: ExperimentsApiUpdateExperimentAnalysisPlanAttributesRequest,
    options?: Configuration
  ): Promise<ExperimentsAnalysisPlanV2MutationResponse> {
    const requestContextPromise =
      this.requestFactory.updateExperimentAnalysisPlanAttributes(
        param.experimentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateExperimentAnalysisPlanAttributes(
            responseContext
          );
        });
    });
  }

  /**
   * Update a non-decision metric group. Omitted attributes are unchanged; a supplied metrics array is the complete ordered replacement. Decision groups remain managed through the experiment resource. This operation does not synchronously recompute results.
   * @param param The request object
   */
  public updateExperimentMetricGroup(
    param: ExperimentsApiUpdateExperimentMetricGroupRequest,
    options?: Configuration
  ): Promise<ExperimentsExperimentMetricGroupMutationV2> {
    const requestContextPromise =
      this.requestFactory.updateExperimentMetricGroup(
        param.experimentId,
        param.metricGroupId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateExperimentMetricGroup(
            responseContext
          );
        });
    });
  }

  /**
   * Replace an exposure SQL model. This is a full replacement and is destructive: any subject type or property not present in the body is deleted, and properties are matched on name, column_name and column_type together, so changing one of those replaces the property rather than editing it. Send the complete set you want to keep. Anything removed is listed under meta.removed_subject_type_ids and meta.removed_property_names in the response. The warehouse connection is not settable and is left as stored.
   * @param param The request object
   */
  public updateExposureSQLModel(
    param: ExperimentsApiUpdateExposureSQLModelRequest,
    options?: Configuration
  ): Promise<ExperimentsUpdateExposureSQLModelV2Response> {
    const requestContextPromise = this.requestFactory.updateExposureSQLModel(
      param.exposureSqlModelId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateExposureSQLModel(responseContext);
        });
    });
  }

  /**
   * Update a metric. Certified metrics are read-only through this endpoint. This is a partial update: every attribute is optional and an omitted attribute keeps its stored value, so a body carrying only the fields being changed is enough. `guardrail_cutoff_threshold` is nullable -- send null to clear it, omit it to leave it alone. Omitting the aggregation leaves the metric's definition untouched; supplying one replaces it wholesale, and the metric's type is re-derived from the shape supplied. Property filters use property_id or measure_id UUIDs from the aggregation's data source. Attributes that are computed rather than stored (short_id, metric_type, certified_at, experiment_count, created_at, updated_at) are rejected rather than ignored, so a body copied from GET must have them removed. The is_certified attribute is rejected. Certification cannot be changed through this endpoint.
   * @param param The request object
   */
  public updateMetric(
    param: ExperimentsApiUpdateMetricRequest,
    options?: Configuration
  ): Promise<ExperimentsMetricV2DTO> {
    const requestContextPromise = this.requestFactory.updateMetric(
      param.metricId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMetric(responseContext);
        });
    });
  }

  /**
   * Update metric collection.
   * @param param The request object
   */
  public updateMetricCollection(
    param: ExperimentsApiUpdateMetricCollectionRequest,
    options?: Configuration
  ): Promise<ExperimentsMetricCollectionV2DTO> {
    const requestContextPromise = this.requestFactory.updateMetricCollection(
      param.metricCollectionId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMetricCollection(responseContext);
        });
    });
  }

  /**
   * Replace a metric SQL model. This is a destructive full replace: subject types, customer-defined measures, and properties absent from the body are deleted, so send the complete set. Properties are matched by name; changing a property's column, type, or description preserves its ID. column_type is required for every measure and property. Removing a measure or property that an active metric references returns 409 Conflict. Server-generated IDs returned by GET are read-only and can be left in a replayed body. The response reports removals in meta.deleted_subject_types, meta.deleted_measures, and meta.deleted_properties. Certification is read-only. Certified models cannot be replaced through this endpoint.
   * @param param The request object
   */
  public updateMetricSQLModel(
    param: ExperimentsApiUpdateMetricSQLModelRequest,
    options?: Configuration
  ): Promise<ExperimentsUpdateMetricSQLModelV2Response> {
    const requestContextPromise = this.requestFactory.updateMetricSQLModel(
      param.metricSqlModelId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMetricSQLModel(responseContext);
        });
    });
  }
}
