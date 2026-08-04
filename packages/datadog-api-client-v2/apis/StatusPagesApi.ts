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
import { CreateBackfilledDegradationRequest } from "../models/CreateBackfilledDegradationRequest";
import { CreateBackfilledMaintenanceRequest } from "../models/CreateBackfilledMaintenanceRequest";
import { CreateComponentRequest } from "../models/CreateComponentRequest";
import { CreateDegradationRequest } from "../models/CreateDegradationRequest";
import { CreateDegradationTemplateRequest } from "../models/CreateDegradationTemplateRequest";
import { CreateMaintenanceRequest } from "../models/CreateMaintenanceRequest";
import { CreateMaintenanceTemplateRequest } from "../models/CreateMaintenanceTemplateRequest";
import { CreateStatusPageRequest } from "../models/CreateStatusPageRequest";
import { Degradation } from "../models/Degradation";
import { DegradationArray } from "../models/DegradationArray";
import { DegradationTemplate } from "../models/DegradationTemplate";
import { DegradationTemplateArray } from "../models/DegradationTemplateArray";
import { DegradationUpdate } from "../models/DegradationUpdate";
import { Maintenance } from "../models/Maintenance";
import { MaintenanceArray } from "../models/MaintenanceArray";
import { MaintenanceTemplate } from "../models/MaintenanceTemplate";
import { MaintenanceTemplateArray } from "../models/MaintenanceTemplateArray";
import { PatchComponentRequest } from "../models/PatchComponentRequest";
import { PatchDegradationRequest } from "../models/PatchDegradationRequest";
import { PatchDegradationTemplateRequest } from "../models/PatchDegradationTemplateRequest";
import { PatchDegradationUpdateRequest } from "../models/PatchDegradationUpdateRequest";
import { PatchMaintenanceRequest } from "../models/PatchMaintenanceRequest";
import { PatchMaintenanceTemplateRequest } from "../models/PatchMaintenanceTemplateRequest";
import { PatchStatusPageRequest } from "../models/PatchStatusPageRequest";
import { StatusPage } from "../models/StatusPage";
import { StatusPageArray } from "../models/StatusPageArray";
import { StatusPagesComponent } from "../models/StatusPagesComponent";
import { StatusPagesComponentArray } from "../models/StatusPagesComponentArray";

export class StatusPagesApiRequestFactory extends BaseAPIRequestFactory {
  public async createBackfilledDegradation(
    pageId: string,
    body: CreateBackfilledDegradationRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createBackfilledDegradation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createBackfilledDegradation");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradations/backfill".replace(
        "{page_id}",
        encodeURIComponent(String(pageId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createBackfilledDegradation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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
        "CreateBackfilledDegradationRequest",
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

  public async createBackfilledMaintenance(
    pageId: string,
    body: CreateBackfilledMaintenanceRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createBackfilledMaintenance");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createBackfilledMaintenance");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/maintenances/backfill".replace(
        "{page_id}",
        encodeURIComponent(String(pageId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createBackfilledMaintenance")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
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
        "CreateBackfilledMaintenanceRequest",
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

  public async createComponent(
    pageId: string,
    body: CreateComponentRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createComponent");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createComponent");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}/components".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createComponent")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateComponentRequest", ""),
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

  public async createDegradation(
    pageId: string,
    body: CreateDegradationRequest,
    notifySubscribers?: boolean,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createDegradation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDegradation");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}/degradations".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createDegradation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (notifySubscribers !== undefined) {
      requestContext.setQueryParam(
        "notify_subscribers",
        ObjectSerializer.serialize(notifySubscribers, "boolean", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateDegradationRequest", ""),
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

  public async createDegradationTemplate(
    pageId: string,
    body: CreateDegradationTemplateRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createDegradationTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDegradationTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradation_templates".replace(
        "{page_id}",
        encodeURIComponent(String(pageId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createDegradationTemplate")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateDegradationTemplateRequest", ""),
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

  public async createMaintenance(
    pageId: string,
    body: CreateMaintenanceRequest,
    notifySubscribers?: boolean,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createMaintenance");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMaintenance");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}/maintenances".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createMaintenance")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (notifySubscribers !== undefined) {
      requestContext.setQueryParam(
        "notify_subscribers",
        ObjectSerializer.serialize(notifySubscribers, "boolean", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateMaintenanceRequest", ""),
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

  public async createMaintenanceTemplate(
    pageId: string,
    body: CreateMaintenanceTemplateRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createMaintenanceTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMaintenanceTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/maintenance_templates".replace(
        "{page_id}",
        encodeURIComponent(String(pageId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createMaintenanceTemplate")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateMaintenanceTemplateRequest", ""),
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

  public async createStatusPage(
    body: CreateStatusPageRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createStatusPage")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateStatusPageRequest", ""),
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

  public async deleteComponent(
    pageId: string,
    componentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "deleteComponent");
    }

    // verify required parameter 'componentId' is not null or undefined
    if (componentId === null || componentId === undefined) {
      throw new RequiredError("componentId", "deleteComponent");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/components/{component_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{component_id}", encodeURIComponent(String(componentId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.deleteComponent")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteDegradation(
    pageId: string,
    degradationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "deleteDegradation");
    }

    // verify required parameter 'degradationId' is not null or undefined
    if (degradationId === null || degradationId === undefined) {
      throw new RequiredError("degradationId", "deleteDegradation");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradations/{degradation_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{degradation_id}", encodeURIComponent(String(degradationId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.deleteDegradation")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteDegradationTemplate(
    pageId: string,
    templateId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "deleteDegradationTemplate");
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "deleteDegradationTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradation_templates/{template_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{template_id}", encodeURIComponent(String(templateId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.deleteDegradationTemplate")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteMaintenanceTemplate(
    pageId: string,
    templateId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "deleteMaintenanceTemplate");
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "deleteMaintenanceTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/maintenance_templates/{template_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{template_id}", encodeURIComponent(String(templateId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.deleteMaintenanceTemplate")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteStatusPage(
    pageId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "deleteStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.deleteStatusPage")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async editDegradationUpdate(
    degradationId: string,
    pageId: string,
    updateId: string,
    body: PatchDegradationUpdateRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'degradationId' is not null or undefined
    if (degradationId === null || degradationId === undefined) {
      throw new RequiredError("degradationId", "editDegradationUpdate");
    }

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "editDegradationUpdate");
    }

    // verify required parameter 'updateId' is not null or undefined
    if (updateId === null || updateId === undefined) {
      throw new RequiredError("updateId", "editDegradationUpdate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editDegradationUpdate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradations/{degradation_id}/updates/{update_id}"
        .replace("{degradation_id}", encodeURIComponent(String(degradationId)))
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{update_id}", encodeURIComponent(String(updateId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.editDegradationUpdate")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchDegradationUpdateRequest", ""),
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

  public async getComponent(
    pageId: string,
    componentId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getComponent");
    }

    // verify required parameter 'componentId' is not null or undefined
    if (componentId === null || componentId === undefined) {
      throw new RequiredError("componentId", "getComponent");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/components/{component_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{component_id}", encodeURIComponent(String(componentId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.getComponent")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

  public async getDegradation(
    pageId: string,
    degradationId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getDegradation");
    }

    // verify required parameter 'degradationId' is not null or undefined
    if (degradationId === null || degradationId === undefined) {
      throw new RequiredError("degradationId", "getDegradation");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradations/{degradation_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{degradation_id}", encodeURIComponent(String(degradationId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.getDegradation")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

  public async getDegradationTemplate(
    pageId: string,
    templateId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getDegradationTemplate");
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "getDegradationTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradation_templates/{template_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{template_id}", encodeURIComponent(String(templateId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.getDegradationTemplate")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

  public async getMaintenance(
    pageId: string,
    maintenanceId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getMaintenance");
    }

    // verify required parameter 'maintenanceId' is not null or undefined
    if (maintenanceId === null || maintenanceId === undefined) {
      throw new RequiredError("maintenanceId", "getMaintenance");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/maintenances/{maintenance_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{maintenance_id}", encodeURIComponent(String(maintenanceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.getMaintenance")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

  public async getMaintenanceTemplate(
    pageId: string,
    templateId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getMaintenanceTemplate");
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "getMaintenanceTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/maintenance_templates/{template_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{template_id}", encodeURIComponent(String(templateId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.getMaintenanceTemplate")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

  public async getStatusPage(
    pageId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.getStatusPage")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

  public async listComponents(
    pageId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "listComponents");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}/components".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.listComponents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

  public async listDegradations(
    filterPageId?: string,
    pageOffset?: number,
    pageLimit?: number,
    include?: string,
    filterStatus?: string,
    sort?: string,
    filterSourceId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/statuspages/degradations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.listDegradations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterPageId !== undefined) {
      requestContext.setQueryParam(
        "filter[page_id]",
        ObjectSerializer.serialize(filterPageId, "string", ""),
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
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        ObjectSerializer.serialize(filterStatus, "string", ""),
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
    if (filterSourceId !== undefined) {
      requestContext.setQueryParam(
        "filter[source_id]",
        ObjectSerializer.serialize(filterSourceId, "string", ""),
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

  public async listDegradationTemplates(
    pageId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "listDegradationTemplates");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradation_templates".replace(
        "{page_id}",
        encodeURIComponent(String(pageId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.listDegradationTemplates")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

  public async listMaintenances(
    filterPageId?: string,
    pageOffset?: number,
    pageLimit?: number,
    include?: string,
    filterStatus?: string,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/statuspages/maintenances";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.listMaintenances")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterPageId !== undefined) {
      requestContext.setQueryParam(
        "filter[page_id]",
        ObjectSerializer.serialize(filterPageId, "string", ""),
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
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        ObjectSerializer.serialize(filterStatus, "string", ""),
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

  public async listMaintenanceTemplates(
    pageId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "listMaintenanceTemplates");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/maintenance_templates".replace(
        "{page_id}",
        encodeURIComponent(String(pageId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.listMaintenanceTemplates")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

  public async listStatusPages(
    pageOffset?: number,
    pageLimit?: number,
    filterDomainPrefix?: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/statuspages";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.listStatusPages")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
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
    if (filterDomainPrefix !== undefined) {
      requestContext.setQueryParam(
        "filter[domain_prefix]",
        ObjectSerializer.serialize(filterDomainPrefix, "string", ""),
        ""
      );
    }
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

  public async publishStatusPage(
    pageId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "publishStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}/publish".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.publishStatusPage")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async softDeleteDegradationUpdate(
    degradationId: string,
    pageId: string,
    updateId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'degradationId' is not null or undefined
    if (degradationId === null || degradationId === undefined) {
      throw new RequiredError("degradationId", "softDeleteDegradationUpdate");
    }

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "softDeleteDegradationUpdate");
    }

    // verify required parameter 'updateId' is not null or undefined
    if (updateId === null || updateId === undefined) {
      throw new RequiredError("updateId", "softDeleteDegradationUpdate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradations/{degradation_id}/updates/{update_id}"
        .replace("{degradation_id}", encodeURIComponent(String(degradationId)))
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{update_id}", encodeURIComponent(String(updateId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.softDeleteDegradationUpdate")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async unpublishStatusPage(
    pageId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "unpublishStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}/unpublish".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.unpublishStatusPage")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateComponent(
    pageId: string,
    componentId: string,
    body: PatchComponentRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateComponent");
    }

    // verify required parameter 'componentId' is not null or undefined
    if (componentId === null || componentId === undefined) {
      throw new RequiredError("componentId", "updateComponent");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateComponent");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/components/{component_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{component_id}", encodeURIComponent(String(componentId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.updateComponent")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchComponentRequest", ""),
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

  public async updateDegradation(
    pageId: string,
    degradationId: string,
    body: PatchDegradationRequest,
    notifySubscribers?: boolean,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateDegradation");
    }

    // verify required parameter 'degradationId' is not null or undefined
    if (degradationId === null || degradationId === undefined) {
      throw new RequiredError("degradationId", "updateDegradation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDegradation");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradations/{degradation_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{degradation_id}", encodeURIComponent(String(degradationId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.updateDegradation")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (notifySubscribers !== undefined) {
      requestContext.setQueryParam(
        "notify_subscribers",
        ObjectSerializer.serialize(notifySubscribers, "boolean", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchDegradationRequest", ""),
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

  public async updateDegradationTemplate(
    templateId: string,
    pageId: string,
    body: PatchDegradationTemplateRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "updateDegradationTemplate");
    }

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateDegradationTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDegradationTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradation_templates/{template_id}"
        .replace("{template_id}", encodeURIComponent(String(templateId)))
        .replace("{page_id}", encodeURIComponent(String(pageId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.updateDegradationTemplate")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchDegradationTemplateRequest", ""),
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

  public async updateMaintenance(
    pageId: string,
    maintenanceId: string,
    body: PatchMaintenanceRequest,
    notifySubscribers?: boolean,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateMaintenance");
    }

    // verify required parameter 'maintenanceId' is not null or undefined
    if (maintenanceId === null || maintenanceId === undefined) {
      throw new RequiredError("maintenanceId", "updateMaintenance");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMaintenance");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/maintenances/{maintenance_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{maintenance_id}", encodeURIComponent(String(maintenanceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.updateMaintenance")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (notifySubscribers !== undefined) {
      requestContext.setQueryParam(
        "notify_subscribers",
        ObjectSerializer.serialize(notifySubscribers, "boolean", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchMaintenanceRequest", ""),
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

  public async updateMaintenanceTemplate(
    pageId: string,
    templateId: string,
    body: PatchMaintenanceTemplateRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateMaintenanceTemplate");
    }

    // verify required parameter 'templateId' is not null or undefined
    if (templateId === null || templateId === undefined) {
      throw new RequiredError("templateId", "updateMaintenanceTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMaintenanceTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/maintenance_templates/{template_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{template_id}", encodeURIComponent(String(templateId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.updateMaintenanceTemplate")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchMaintenanceTemplateRequest", ""),
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

  public async updateStatusPage(
    pageId: string,
    body: PatchStatusPageRequest,
    deleteSubscribers?: boolean,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateStatusPage");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.updateStatusPage")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (deleteSubscribers !== undefined) {
      requestContext.setQueryParam(
        "delete_subscribers",
        ObjectSerializer.serialize(deleteSubscribers, "boolean", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchStatusPageRequest", ""),
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

export class StatusPagesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createBackfilledDegradation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createBackfilledDegradation(
    response: ResponseContext
  ): Promise<Degradation> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation"
      ) as Degradation;
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
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation",
        ""
      ) as Degradation;
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
   * @params response Response returned by the server for a request to createBackfilledMaintenance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createBackfilledMaintenance(
    response: ResponseContext
  ): Promise<Maintenance> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Maintenance = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Maintenance"
      ) as Maintenance;
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
      const body: Maintenance = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Maintenance",
        ""
      ) as Maintenance;
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
   * @params response Response returned by the server for a request to createComponent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createComponent(
    response: ResponseContext
  ): Promise<StatusPagesComponent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent"
      ) as StatusPagesComponent;
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
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent",
        ""
      ) as StatusPagesComponent;
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
   * @params response Response returned by the server for a request to createDegradation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDegradation(
    response: ResponseContext
  ): Promise<Degradation> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation"
      ) as Degradation;
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
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation",
        ""
      ) as Degradation;
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
   * @params response Response returned by the server for a request to createDegradationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDegradationTemplate(
    response: ResponseContext
  ): Promise<DegradationTemplate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: DegradationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationTemplate"
      ) as DegradationTemplate;
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
      const body: DegradationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationTemplate",
        ""
      ) as DegradationTemplate;
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
   * @params response Response returned by the server for a request to createMaintenance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMaintenance(
    response: ResponseContext
  ): Promise<Maintenance> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Maintenance = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Maintenance"
      ) as Maintenance;
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
      const body: Maintenance = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Maintenance",
        ""
      ) as Maintenance;
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
   * @params response Response returned by the server for a request to createMaintenanceTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMaintenanceTemplate(
    response: ResponseContext
  ): Promise<MaintenanceTemplate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: MaintenanceTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceTemplate"
      ) as MaintenanceTemplate;
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
      const body: MaintenanceTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceTemplate",
        ""
      ) as MaintenanceTemplate;
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
   * @params response Response returned by the server for a request to createStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createStatusPage(
    response: ResponseContext
  ): Promise<StatusPage> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage"
      ) as StatusPage;
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
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage",
        ""
      ) as StatusPage;
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
   * @params response Response returned by the server for a request to deleteComponent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteComponent(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteDegradation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDegradation(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteDegradationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDegradationTemplate(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteMaintenanceTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMaintenanceTemplate(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteStatusPage(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to editDegradationUpdate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editDegradationUpdate(
    response: ResponseContext
  ): Promise<DegradationUpdate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DegradationUpdate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationUpdate"
      ) as DegradationUpdate;
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
      const body: DegradationUpdate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationUpdate",
        ""
      ) as DegradationUpdate;
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
   * @params response Response returned by the server for a request to getComponent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getComponent(
    response: ResponseContext
  ): Promise<StatusPagesComponent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent"
      ) as StatusPagesComponent;
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
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent",
        ""
      ) as StatusPagesComponent;
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
   * @params response Response returned by the server for a request to getDegradation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDegradation(response: ResponseContext): Promise<Degradation> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation"
      ) as Degradation;
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
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation",
        ""
      ) as Degradation;
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
   * @params response Response returned by the server for a request to getDegradationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDegradationTemplate(
    response: ResponseContext
  ): Promise<DegradationTemplate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DegradationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationTemplate"
      ) as DegradationTemplate;
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
      const body: DegradationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationTemplate",
        ""
      ) as DegradationTemplate;
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
   * @params response Response returned by the server for a request to getMaintenance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMaintenance(response: ResponseContext): Promise<Maintenance> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Maintenance = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Maintenance"
      ) as Maintenance;
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
      const body: Maintenance = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Maintenance",
        ""
      ) as Maintenance;
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
   * @params response Response returned by the server for a request to getMaintenanceTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMaintenanceTemplate(
    response: ResponseContext
  ): Promise<MaintenanceTemplate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MaintenanceTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceTemplate"
      ) as MaintenanceTemplate;
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
      const body: MaintenanceTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceTemplate",
        ""
      ) as MaintenanceTemplate;
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
   * @params response Response returned by the server for a request to getStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getStatusPage(response: ResponseContext): Promise<StatusPage> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage"
      ) as StatusPage;
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
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage",
        ""
      ) as StatusPage;
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
   * @params response Response returned by the server for a request to listComponents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listComponents(
    response: ResponseContext
  ): Promise<StatusPagesComponentArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPagesComponentArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponentArray"
      ) as StatusPagesComponentArray;
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
      const body: StatusPagesComponentArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponentArray",
        ""
      ) as StatusPagesComponentArray;
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
   * @params response Response returned by the server for a request to listDegradations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDegradations(
    response: ResponseContext
  ): Promise<DegradationArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DegradationArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationArray"
      ) as DegradationArray;
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
      const body: DegradationArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationArray",
        ""
      ) as DegradationArray;
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
   * @params response Response returned by the server for a request to listDegradationTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDegradationTemplates(
    response: ResponseContext
  ): Promise<DegradationTemplateArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DegradationTemplateArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationTemplateArray"
      ) as DegradationTemplateArray;
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
      const body: DegradationTemplateArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationTemplateArray",
        ""
      ) as DegradationTemplateArray;
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
   * @params response Response returned by the server for a request to listMaintenances
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMaintenances(
    response: ResponseContext
  ): Promise<MaintenanceArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MaintenanceArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceArray"
      ) as MaintenanceArray;
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
      const body: MaintenanceArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceArray",
        ""
      ) as MaintenanceArray;
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
   * @params response Response returned by the server for a request to listMaintenanceTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMaintenanceTemplates(
    response: ResponseContext
  ): Promise<MaintenanceTemplateArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MaintenanceTemplateArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceTemplateArray"
      ) as MaintenanceTemplateArray;
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
      const body: MaintenanceTemplateArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceTemplateArray",
        ""
      ) as MaintenanceTemplateArray;
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
   * @params response Response returned by the server for a request to listStatusPages
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listStatusPages(
    response: ResponseContext
  ): Promise<StatusPageArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPageArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPageArray"
      ) as StatusPageArray;
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
      const body: StatusPageArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPageArray",
        ""
      ) as StatusPageArray;
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
   * @params response Response returned by the server for a request to publishStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async publishStatusPage(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to softDeleteDegradationUpdate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async softDeleteDegradationUpdate(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to unpublishStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unpublishStatusPage(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to updateComponent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateComponent(
    response: ResponseContext
  ): Promise<StatusPagesComponent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent"
      ) as StatusPagesComponent;
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
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent",
        ""
      ) as StatusPagesComponent;
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
   * @params response Response returned by the server for a request to updateDegradation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDegradation(
    response: ResponseContext
  ): Promise<Degradation> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation"
      ) as Degradation;
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
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation",
        ""
      ) as Degradation;
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
   * @params response Response returned by the server for a request to updateDegradationTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDegradationTemplate(
    response: ResponseContext
  ): Promise<DegradationTemplate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DegradationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationTemplate"
      ) as DegradationTemplate;
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
      const body: DegradationTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationTemplate",
        ""
      ) as DegradationTemplate;
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
   * @params response Response returned by the server for a request to updateMaintenance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMaintenance(
    response: ResponseContext
  ): Promise<Maintenance> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Maintenance = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Maintenance"
      ) as Maintenance;
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
      const body: Maintenance = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Maintenance",
        ""
      ) as Maintenance;
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
   * @params response Response returned by the server for a request to updateMaintenanceTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMaintenanceTemplate(
    response: ResponseContext
  ): Promise<MaintenanceTemplate> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MaintenanceTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceTemplate"
      ) as MaintenanceTemplate;
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
      const body: MaintenanceTemplate = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MaintenanceTemplate",
        ""
      ) as MaintenanceTemplate;
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
   * @params response Response returned by the server for a request to updateStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateStatusPage(
    response: ResponseContext
  ): Promise<StatusPage> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage"
      ) as StatusPage;
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
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage",
        ""
      ) as StatusPage;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface StatusPagesApiCreateBackfilledDegradationRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type CreateBackfilledDegradationRequest
   */
  body: CreateBackfilledDegradationRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiCreateBackfilledMaintenanceRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type CreateBackfilledMaintenanceRequest
   */
  body: CreateBackfilledMaintenanceRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiCreateComponentRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type CreateComponentRequest
   */
  body: CreateComponentRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiCreateDegradationRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type CreateDegradationRequest
   */
  body: CreateDegradationRequest;
  /**
   * Whether to notify page subscribers of the degradation.
   * @type boolean
   */
  notifySubscribers?: boolean;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiCreateDegradationTemplateRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type CreateDegradationTemplateRequest
   */
  body: CreateDegradationTemplateRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiCreateMaintenanceRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type CreateMaintenanceRequest
   */
  body: CreateMaintenanceRequest;
  /**
   * Whether to notify page subscribers of the maintenance.
   * @type boolean
   */
  notifySubscribers?: boolean;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiCreateMaintenanceTemplateRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type CreateMaintenanceTemplateRequest
   */
  body: CreateMaintenanceTemplateRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiCreateStatusPageRequest {
  /**
   * @type CreateStatusPageRequest
   */
  body: CreateStatusPageRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiDeleteComponentRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the component.
   * @type string
   */
  componentId: string;
}

export interface StatusPagesApiDeleteDegradationRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation.
   * @type string
   */
  degradationId: string;
}

export interface StatusPagesApiDeleteDegradationTemplateRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation or maintenance template.
   * @type string
   */
  templateId: string;
}

export interface StatusPagesApiDeleteMaintenanceTemplateRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation or maintenance template.
   * @type string
   */
  templateId: string;
}

export interface StatusPagesApiDeleteStatusPageRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
}

export interface StatusPagesApiEditDegradationUpdateRequest {
  /**
   * The ID of the degradation.
   * @type string
   */
  degradationId: string;
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation update.
   * @type string
   */
  updateId: string;
  /**
   * @type PatchDegradationUpdateRequest
   */
  body: PatchDegradationUpdateRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, degradation, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiGetComponentRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the component.
   * @type string
   */
  componentId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiGetDegradationRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation.
   * @type string
   */
  degradationId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiGetDegradationTemplateRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation or maintenance template.
   * @type string
   */
  templateId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiGetMaintenanceRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the maintenance.
   * @type string
   */
  maintenanceId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiGetMaintenanceTemplateRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation or maintenance template.
   * @type string
   */
  templateId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiGetStatusPageRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiListComponentsRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiListDegradationsRequest {
  /**
   * Optional page id filter.
   * @type string
   */
  filterPageId?: string;
  /**
   * Offset to use as the start of the page.
   * @type number
   */
  pageOffset?: number;
  /**
   * The number of degradations to return per page.
   * @type number
   */
  pageLimit?: number;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
  /**
   * Optional degradation status filter. Supported values: investigating, identified, monitoring, resolved.
   * @type string
   */
  filterStatus?: string;
  /**
   * Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, modified_at, -modified_at.
   * @type string
   */
  sort?: string;
  /**
   * Optional source ID filter. Returns only degradations whose source matches this ID (for example, an incident ID).
   * @type string
   */
  filterSourceId?: string;
}

export interface StatusPagesApiListDegradationTemplatesRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiListMaintenancesRequest {
  /**
   * Optional page id filter.
   * @type string
   */
  filterPageId?: string;
  /**
   * Offset to use as the start of the page.
   * @type number
   */
  pageOffset?: number;
  /**
   * The number of maintenances to return per page.
   * @type number
   */
  pageLimit?: number;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
  /**
   * Optional maintenance status filter. Supported values: scheduled, in_progress, completed.
   * @type string
   */
  filterStatus?: string;
  /**
   * Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, start_date, -start_date.
   * @type string
   */
  sort?: string;
}

export interface StatusPagesApiListMaintenanceTemplatesRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiListStatusPagesRequest {
  /**
   * Offset to use as the start of the page.
   * @type number
   */
  pageOffset?: number;
  /**
   * The number of status pages to return per page.
   * @type number
   */
  pageLimit?: number;
  /**
   * Filter status pages by exact domain prefix match. Returns at most one result.
   * @type string
   */
  filterDomainPrefix?: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiPublishStatusPageRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
}

export interface StatusPagesApiSoftDeleteDegradationUpdateRequest {
  /**
   * The ID of the degradation.
   * @type string
   */
  degradationId: string;
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation update.
   * @type string
   */
  updateId: string;
}

export interface StatusPagesApiUnpublishStatusPageRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
}

export interface StatusPagesApiUpdateComponentRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the component.
   * @type string
   */
  componentId: string;
  /**
   * @type PatchComponentRequest
   */
  body: PatchComponentRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiUpdateDegradationRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation.
   * @type string
   */
  degradationId: string;
  /**
   * @type PatchDegradationRequest
   */
  body: PatchDegradationRequest;
  /**
   * Whether to notify page subscribers of the degradation.
   * @type boolean
   */
  notifySubscribers?: boolean;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiUpdateDegradationTemplateRequest {
  /**
   * The ID of the degradation or maintenance template.
   * @type string
   */
  templateId: string;
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type PatchDegradationTemplateRequest
   */
  body: PatchDegradationTemplateRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiUpdateMaintenanceRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the maintenance.
   * @type string
   */
  maintenanceId: string;
  /**
   * @type PatchMaintenanceRequest
   */
  body: PatchMaintenanceRequest;
  /**
   * Whether to notify page subscribers of the maintenance.
   * @type boolean
   */
  notifySubscribers?: boolean;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiUpdateMaintenanceTemplateRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation or maintenance template.
   * @type string
   */
  templateId: string;
  /**
   * @type PatchMaintenanceTemplateRequest
   */
  body: PatchMaintenanceTemplateRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiUpdateStatusPageRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type PatchStatusPageRequest
   */
  body: PatchStatusPageRequest;
  /**
   * Whether to delete existing subscribers when updating a status page's type.
   * @type boolean
   */
  deleteSubscribers?: boolean;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
   * @type string
   */
  include?: string;
}

export class StatusPagesApi {
  private requestFactory: StatusPagesApiRequestFactory;
  private responseProcessor: StatusPagesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: StatusPagesApiRequestFactory,
    responseProcessor?: StatusPagesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new StatusPagesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new StatusPagesApiResponseProcessor();
  }

  /**
   * Creates a backfilled degradation with predefined updates.
   * @param param The request object
   */
  public createBackfilledDegradation(
    param: StatusPagesApiCreateBackfilledDegradationRequest,
    options?: Configuration
  ): Promise<Degradation> {
    const requestContextPromise =
      this.requestFactory.createBackfilledDegradation(
        param.pageId,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createBackfilledDegradation(
            responseContext
          );
        });
    });
  }

  /**
   * Creates a backfilled maintenance with predefined updates.
   * @param param The request object
   */
  public createBackfilledMaintenance(
    param: StatusPagesApiCreateBackfilledMaintenanceRequest,
    options?: Configuration
  ): Promise<Maintenance> {
    const requestContextPromise =
      this.requestFactory.createBackfilledMaintenance(
        param.pageId,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createBackfilledMaintenance(
            responseContext
          );
        });
    });
  }

  /**
   * Creates a new component.
   * @param param The request object
   */
  public createComponent(
    param: StatusPagesApiCreateComponentRequest,
    options?: Configuration
  ): Promise<StatusPagesComponent> {
    const requestContextPromise = this.requestFactory.createComponent(
      param.pageId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createComponent(responseContext);
        });
    });
  }

  /**
   * Creates a new degradation.
   * @param param The request object
   */
  public createDegradation(
    param: StatusPagesApiCreateDegradationRequest,
    options?: Configuration
  ): Promise<Degradation> {
    const requestContextPromise = this.requestFactory.createDegradation(
      param.pageId,
      param.body,
      param.notifySubscribers,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDegradation(responseContext);
        });
    });
  }

  /**
   * Creates a new degradation template.
   * @param param The request object
   */
  public createDegradationTemplate(
    param: StatusPagesApiCreateDegradationTemplateRequest,
    options?: Configuration
  ): Promise<DegradationTemplate> {
    const requestContextPromise = this.requestFactory.createDegradationTemplate(
      param.pageId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDegradationTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Schedules a new maintenance.
   * @param param The request object
   */
  public createMaintenance(
    param: StatusPagesApiCreateMaintenanceRequest,
    options?: Configuration
  ): Promise<Maintenance> {
    const requestContextPromise = this.requestFactory.createMaintenance(
      param.pageId,
      param.body,
      param.notifySubscribers,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMaintenance(responseContext);
        });
    });
  }

  /**
   * Creates a new maintenance template.
   * @param param The request object
   */
  public createMaintenanceTemplate(
    param: StatusPagesApiCreateMaintenanceTemplateRequest,
    options?: Configuration
  ): Promise<MaintenanceTemplate> {
    const requestContextPromise = this.requestFactory.createMaintenanceTemplate(
      param.pageId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMaintenanceTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Creates a new status page in an unpublished state. Use the dedicated [publish](#publish-status-page) status page endpoint to publish the page after creation.
   * @param param The request object
   */
  public createStatusPage(
    param: StatusPagesApiCreateStatusPageRequest,
    options?: Configuration
  ): Promise<StatusPage> {
    const requestContextPromise = this.requestFactory.createStatusPage(
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createStatusPage(responseContext);
        });
    });
  }

  /**
   * Deletes a component by its ID.
   * @param param The request object
   */
  public deleteComponent(
    param: StatusPagesApiDeleteComponentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteComponent(
      param.pageId,
      param.componentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteComponent(responseContext);
        });
    });
  }

  /**
   * Deletes a degradation by its ID.
   * @param param The request object
   */
  public deleteDegradation(
    param: StatusPagesApiDeleteDegradationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDegradation(
      param.pageId,
      param.degradationId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDegradation(responseContext);
        });
    });
  }

  /**
   * Deletes a degradation template by its ID (soft delete).
   * @param param The request object
   */
  public deleteDegradationTemplate(
    param: StatusPagesApiDeleteDegradationTemplateRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDegradationTemplate(
      param.pageId,
      param.templateId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDegradationTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Deletes a maintenance template by its ID (soft delete).
   * @param param The request object
   */
  public deleteMaintenanceTemplate(
    param: StatusPagesApiDeleteMaintenanceTemplateRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteMaintenanceTemplate(
      param.pageId,
      param.templateId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMaintenanceTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Deletes a status page by its ID.
   * @param param The request object
   */
  public deleteStatusPage(
    param: StatusPagesApiDeleteStatusPageRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteStatusPage(
      param.pageId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteStatusPage(responseContext);
        });
    });
  }

  /**
   * Edits a specific degradation update.
   * @param param The request object
   */
  public editDegradationUpdate(
    param: StatusPagesApiEditDegradationUpdateRequest,
    options?: Configuration
  ): Promise<DegradationUpdate> {
    const requestContextPromise = this.requestFactory.editDegradationUpdate(
      param.degradationId,
      param.pageId,
      param.updateId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editDegradationUpdate(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific component by its ID.
   * @param param The request object
   */
  public getComponent(
    param: StatusPagesApiGetComponentRequest,
    options?: Configuration
  ): Promise<StatusPagesComponent> {
    const requestContextPromise = this.requestFactory.getComponent(
      param.pageId,
      param.componentId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getComponent(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific degradation by its ID.
   * @param param The request object
   */
  public getDegradation(
    param: StatusPagesApiGetDegradationRequest,
    options?: Configuration
  ): Promise<Degradation> {
    const requestContextPromise = this.requestFactory.getDegradation(
      param.pageId,
      param.degradationId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDegradation(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific degradation template by its ID.
   * @param param The request object
   */
  public getDegradationTemplate(
    param: StatusPagesApiGetDegradationTemplateRequest,
    options?: Configuration
  ): Promise<DegradationTemplate> {
    const requestContextPromise = this.requestFactory.getDegradationTemplate(
      param.pageId,
      param.templateId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDegradationTemplate(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific maintenance by its ID.
   * @param param The request object
   */
  public getMaintenance(
    param: StatusPagesApiGetMaintenanceRequest,
    options?: Configuration
  ): Promise<Maintenance> {
    const requestContextPromise = this.requestFactory.getMaintenance(
      param.pageId,
      param.maintenanceId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMaintenance(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific maintenance template by its ID.
   * @param param The request object
   */
  public getMaintenanceTemplate(
    param: StatusPagesApiGetMaintenanceTemplateRequest,
    options?: Configuration
  ): Promise<MaintenanceTemplate> {
    const requestContextPromise = this.requestFactory.getMaintenanceTemplate(
      param.pageId,
      param.templateId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMaintenanceTemplate(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific status page by its ID.
   * @param param The request object
   */
  public getStatusPage(
    param: StatusPagesApiGetStatusPageRequest,
    options?: Configuration
  ): Promise<StatusPage> {
    const requestContextPromise = this.requestFactory.getStatusPage(
      param.pageId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getStatusPage(responseContext);
        });
    });
  }

  /**
   * Lists all components for a status page.
   * @param param The request object
   */
  public listComponents(
    param: StatusPagesApiListComponentsRequest,
    options?: Configuration
  ): Promise<StatusPagesComponentArray> {
    const requestContextPromise = this.requestFactory.listComponents(
      param.pageId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listComponents(responseContext);
        });
    });
  }

  /**
   * Lists all degradations for the organization. Optionally filter by status and page.
   * @param param The request object
   */
  public listDegradations(
    param: StatusPagesApiListDegradationsRequest = {},
    options?: Configuration
  ): Promise<DegradationArray> {
    const requestContextPromise = this.requestFactory.listDegradations(
      param.filterPageId,
      param.pageOffset,
      param.pageLimit,
      param.include,
      param.filterStatus,
      param.sort,
      param.filterSourceId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDegradations(responseContext);
        });
    });
  }

  /**
   * Lists all degradation templates for a status page.
   * @param param The request object
   */
  public listDegradationTemplates(
    param: StatusPagesApiListDegradationTemplatesRequest,
    options?: Configuration
  ): Promise<DegradationTemplateArray> {
    const requestContextPromise = this.requestFactory.listDegradationTemplates(
      param.pageId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDegradationTemplates(
            responseContext
          );
        });
    });
  }

  /**
   * Lists all maintenances for the organization. Optionally filter by status and page.
   * @param param The request object
   */
  public listMaintenances(
    param: StatusPagesApiListMaintenancesRequest = {},
    options?: Configuration
  ): Promise<MaintenanceArray> {
    const requestContextPromise = this.requestFactory.listMaintenances(
      param.filterPageId,
      param.pageOffset,
      param.pageLimit,
      param.include,
      param.filterStatus,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMaintenances(responseContext);
        });
    });
  }

  /**
   * Lists all maintenance templates for a status page.
   * @param param The request object
   */
  public listMaintenanceTemplates(
    param: StatusPagesApiListMaintenanceTemplatesRequest,
    options?: Configuration
  ): Promise<MaintenanceTemplateArray> {
    const requestContextPromise = this.requestFactory.listMaintenanceTemplates(
      param.pageId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMaintenanceTemplates(
            responseContext
          );
        });
    });
  }

  /**
   * Lists all status pages for the organization.
   * @param param The request object
   */
  public listStatusPages(
    param: StatusPagesApiListStatusPagesRequest = {},
    options?: Configuration
  ): Promise<StatusPageArray> {
    const requestContextPromise = this.requestFactory.listStatusPages(
      param.pageOffset,
      param.pageLimit,
      param.filterDomainPrefix,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listStatusPages(responseContext);
        });
    });
  }

  /**
   * Publishes a status page. For pages of type `public`, makes the status page available on the public internet and requires the `status_pages_public_page_publish` permission. For pages of type `internal`, makes the status page available under the `status-pages/$domain_prefix/view` route within the Datadog organization and requires the `status_pages_internal_page_publish` permission. The `status_pages_settings_write` permission is temporarily honored as we migrate publishing functionality from the update status page endpoint to the publish status page endpoint.
   * @param param The request object
   */
  public publishStatusPage(
    param: StatusPagesApiPublishStatusPageRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.publishStatusPage(
      param.pageId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.publishStatusPage(responseContext);
        });
    });
  }

  /**
   * Soft-deletes a degradation update.
   * @param param The request object
   */
  public softDeleteDegradationUpdate(
    param: StatusPagesApiSoftDeleteDegradationUpdateRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.softDeleteDegradationUpdate(
        param.degradationId,
        param.pageId,
        param.updateId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.softDeleteDegradationUpdate(
            responseContext
          );
        });
    });
  }

  /**
   * Unpublishes a status page. For pages of type `public`, removes the status page from the public internet and requires the `status_pages_public_page_publish` permission. For pages of type `internal`, removes the `status-pages/$domain_prefix/view` route from the Datadog organization and requires the `status_pages_internal_page_publish` permission. The `status_pages_settings_write` permission is temporarily honored as we migrate unpublishing functionality from the update status page endpoint to the unpublish status page endpoint.
   * @param param The request object
   */
  public unpublishStatusPage(
    param: StatusPagesApiUnpublishStatusPageRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unpublishStatusPage(
      param.pageId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unpublishStatusPage(responseContext);
        });
    });
  }

  /**
   * Updates an existing component's attributes.
   * @param param The request object
   */
  public updateComponent(
    param: StatusPagesApiUpdateComponentRequest,
    options?: Configuration
  ): Promise<StatusPagesComponent> {
    const requestContextPromise = this.requestFactory.updateComponent(
      param.pageId,
      param.componentId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateComponent(responseContext);
        });
    });
  }

  /**
   * Updates an existing degradation's attributes.
   * @param param The request object
   */
  public updateDegradation(
    param: StatusPagesApiUpdateDegradationRequest,
    options?: Configuration
  ): Promise<Degradation> {
    const requestContextPromise = this.requestFactory.updateDegradation(
      param.pageId,
      param.degradationId,
      param.body,
      param.notifySubscribers,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDegradation(responseContext);
        });
    });
  }

  /**
   * Updates an existing degradation template's attributes.
   * @param param The request object
   */
  public updateDegradationTemplate(
    param: StatusPagesApiUpdateDegradationTemplateRequest,
    options?: Configuration
  ): Promise<DegradationTemplate> {
    const requestContextPromise = this.requestFactory.updateDegradationTemplate(
      param.templateId,
      param.pageId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDegradationTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Updates an existing maintenance's attributes.
   * @param param The request object
   */
  public updateMaintenance(
    param: StatusPagesApiUpdateMaintenanceRequest,
    options?: Configuration
  ): Promise<Maintenance> {
    const requestContextPromise = this.requestFactory.updateMaintenance(
      param.pageId,
      param.maintenanceId,
      param.body,
      param.notifySubscribers,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMaintenance(responseContext);
        });
    });
  }

  /**
   * Updates an existing maintenance template's attributes.
   * @param param The request object
   */
  public updateMaintenanceTemplate(
    param: StatusPagesApiUpdateMaintenanceTemplateRequest,
    options?: Configuration
  ): Promise<MaintenanceTemplate> {
    const requestContextPromise = this.requestFactory.updateMaintenanceTemplate(
      param.pageId,
      param.templateId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMaintenanceTemplate(
            responseContext
          );
        });
    });
  }

  /**
   * Updates an existing status page's attributes. **Note**: Publishing and unpublishing via the `enabled` property will be deprecated on this endpoint. Use the dedicated [publish](#publish-status-page) and [unpublish](#unpublish-status-page) status page endpoints instead.
   * @param param The request object
   */
  public updateStatusPage(
    param: StatusPagesApiUpdateStatusPageRequest,
    options?: Configuration
  ): Promise<StatusPage> {
    const requestContextPromise = this.requestFactory.updateStatusPage(
      param.pageId,
      param.body,
      param.deleteSubscribers,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateStatusPage(responseContext);
        });
    });
  }
}
