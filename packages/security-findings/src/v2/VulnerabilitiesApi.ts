import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client-core";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { AssetType } from "./models/AssetType";
import { CloudAssetType } from "./models/CloudAssetType";
import { CycloneDXBom } from "./models/CycloneDXBom";
import { GetSBOMResponse } from "./models/GetSBOMResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListAssetsSBOMsResponse } from "./models/ListAssetsSBOMsResponse";
import { ListVulnerabilitiesResponse } from "./models/ListVulnerabilitiesResponse";
import { ListVulnerableAssetsResponse } from "./models/ListVulnerableAssetsResponse";
import { SBOMComponentLicenseType } from "./models/SBOMComponentLicenseType";
import { SBOMFormat } from "./models/SBOMFormat";
import { ScannedAssetsMetadata } from "./models/ScannedAssetsMetadata";
import { VulnerabilityEcosystem } from "./models/VulnerabilityEcosystem";
import { VulnerabilitySeverity } from "./models/VulnerabilitySeverity";
import { VulnerabilityStatus } from "./models/VulnerabilityStatus";
import { VulnerabilityTool } from "./models/VulnerabilityTool";
import { VulnerabilityType } from "./models/VulnerabilityType";
import { version } from "../version";

export class VulnerabilitiesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("security-findings", version);
    }
  }
  public async getSBOM(
    assetType: AssetType,
    filterAssetName: string,
    filterRepoDigest?: string,
    extFormat?: SBOMFormat,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'assetType' is not null or undefined
    if (assetType === null || assetType === undefined) {
      throw new RequiredError("assetType", "getSBOM");
    }

    // verify required parameter 'filterAssetName' is not null or undefined
    if (filterAssetName === null || filterAssetName === undefined) {
      throw new RequiredError("filterAssetName", "getSBOM");
    }

    // Path Params
    const localVarPath = "/api/v2/security/sboms/{asset_type}".replace(
      "{asset_type}",
      encodeURIComponent(String(assetType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSBOM",
      VulnerabilitiesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset_name]",
        serialize(filterAssetName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRepoDigest !== undefined) {
      requestContext.setQueryParam(
        "filter[repo_digest]",
        serialize(filterRepoDigest, TypingInfo, "string", ""),
        "",
      );
    }
    if (extFormat !== undefined) {
      requestContext.setQueryParam(
        "ext:format",
        serialize(extFormat, TypingInfo, "SBOMFormat", ""),
        "",
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

  public async importSecurityVulnerabilities(
    body: CycloneDXBom,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'importSecurityVulnerabilities'");
    if (!_config.unstableOperations["v2.importSecurityVulnerabilities"]) {
      throw new Error(
        "Unstable operation 'importSecurityVulnerabilities' is disabled. Enable it by setting `configuration.unstableOperations['v2.importSecurityVulnerabilities'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "importSecurityVulnerabilities");
    }

    // Path Params
    const localVarPath = "/api/v2/security/vulnerabilities";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.importSecurityVulnerabilities",
      VulnerabilitiesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CycloneDXBom", ""),
      contentType,
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

  public async listAssetsSBOMs(
    pageToken?: string,
    pageNumber?: number,
    filterAssetType?: AssetType,
    filterAssetName?: string,
    filterPackageName?: string,
    filterPackageVersion?: string,
    filterLicenseName?: string,
    filterLicenseType?: SBOMComponentLicenseType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/sboms";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listAssetsSBOMs",
      VulnerabilitiesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        serialize(pageToken, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterAssetType !== undefined) {
      requestContext.setQueryParam(
        "filter[asset_type]",
        serialize(filterAssetType, TypingInfo, "AssetType", ""),
        "",
      );
    }
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset_name]",
        serialize(filterAssetName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterPackageName !== undefined) {
      requestContext.setQueryParam(
        "filter[package_name]",
        serialize(filterPackageName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterPackageVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[package_version]",
        serialize(filterPackageVersion, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterLicenseName !== undefined) {
      requestContext.setQueryParam(
        "filter[license_name]",
        serialize(filterLicenseName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterLicenseType !== undefined) {
      requestContext.setQueryParam(
        "filter[license_type]",
        serialize(
          filterLicenseType,
          TypingInfo,
          "SBOMComponentLicenseType",
          "",
        ),
        "",
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

  public async listScannedAssetsMetadata(
    pageToken?: string,
    pageNumber?: number,
    filterAssetType?: CloudAssetType,
    filterAssetName?: string,
    filterLastSuccessOrigin?: string,
    filterLastSuccessEnv?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listScannedAssetsMetadata'");
    if (!_config.unstableOperations["v2.listScannedAssetsMetadata"]) {
      throw new Error(
        "Unstable operation 'listScannedAssetsMetadata' is disabled. Enable it by setting `configuration.unstableOperations['v2.listScannedAssetsMetadata'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/scanned-assets-metadata";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listScannedAssetsMetadata",
      VulnerabilitiesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        serialize(pageToken, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterAssetType !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.type]",
        serialize(filterAssetType, TypingInfo, "CloudAssetType", ""),
        "",
      );
    }
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.name]",
        serialize(filterAssetName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterLastSuccessOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[last_success.origin]",
        serialize(filterLastSuccessOrigin, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterLastSuccessEnv !== undefined) {
      requestContext.setQueryParam(
        "filter[last_success.env]",
        serialize(filterLastSuccessEnv, TypingInfo, "string", ""),
        "",
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

  public async listVulnerabilities(
    pageToken?: string,
    pageNumber?: number,
    filterType?: VulnerabilityType,
    filterCvssBaseScoreOp?: number,
    filterCvssBaseSeverity?: VulnerabilitySeverity,
    filterCvssBaseVector?: string,
    filterCvssDatadogScoreOp?: number,
    filterCvssDatadogSeverity?: VulnerabilitySeverity,
    filterCvssDatadogVector?: string,
    filterStatus?: VulnerabilityStatus,
    filterTool?: VulnerabilityTool,
    filterLibraryName?: string,
    filterLibraryVersion?: string,
    filterAdvisoryId?: string,
    filterRisksExploitationProbability?: boolean,
    filterRisksPocExploitAvailable?: boolean,
    filterRisksExploitAvailable?: boolean,
    filterRisksEpssScoreOp?: number,
    filterRisksEpssSeverity?: VulnerabilitySeverity,
    filterLanguage?: string,
    filterEcosystem?: VulnerabilityEcosystem,
    filterCodeLocationLocation?: string,
    filterCodeLocationFilePath?: string,
    filterCodeLocationMethod?: string,
    filterFixAvailable?: boolean,
    filterRepoDigests?: string,
    filterOrigin?: string,
    filterRunningKernel?: boolean,
    filterAssetName?: string,
    filterAssetType?: AssetType,
    filterAssetVersionFirst?: string,
    filterAssetVersionLast?: string,
    filterAssetRepositoryUrl?: string,
    filterAssetRisksInProduction?: boolean,
    filterAssetRisksUnderAttack?: boolean,
    filterAssetRisksIsPubliclyAccessible?: boolean,
    filterAssetRisksHasPrivilegedAccess?: boolean,
    filterAssetRisksHasAccessToSensitiveData?: boolean,
    filterAssetEnvironments?: string,
    filterAssetTeams?: string,
    filterAssetArch?: string,
    filterAssetOperatingSystemName?: string,
    filterAssetOperatingSystemVersion?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listVulnerabilities'");
    if (!_config.unstableOperations["v2.listVulnerabilities"]) {
      throw new Error(
        "Unstable operation 'listVulnerabilities' is disabled. Enable it by setting `configuration.unstableOperations['v2.listVulnerabilities'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/vulnerabilities";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listVulnerabilities",
      VulnerabilitiesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        serialize(pageToken, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        serialize(filterType, TypingInfo, "VulnerabilityType", ""),
        "",
      );
    }
    if (filterCvssBaseScoreOp !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.base.score][`$op`]",
        serialize(filterCvssBaseScoreOp, TypingInfo, "number", "double"),
        "",
      );
    }
    if (filterCvssBaseSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.base.severity]",
        serialize(
          filterCvssBaseSeverity,
          TypingInfo,
          "VulnerabilitySeverity",
          "",
        ),
        "",
      );
    }
    if (filterCvssBaseVector !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.base.vector]",
        serialize(filterCvssBaseVector, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCvssDatadogScoreOp !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.datadog.score][`$op`]",
        serialize(filterCvssDatadogScoreOp, TypingInfo, "number", "double"),
        "",
      );
    }
    if (filterCvssDatadogSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.datadog.severity]",
        serialize(
          filterCvssDatadogSeverity,
          TypingInfo,
          "VulnerabilitySeverity",
          "",
        ),
        "",
      );
    }
    if (filterCvssDatadogVector !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.datadog.vector]",
        serialize(filterCvssDatadogVector, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        serialize(filterStatus, TypingInfo, "VulnerabilityStatus", ""),
        "",
      );
    }
    if (filterTool !== undefined) {
      requestContext.setQueryParam(
        "filter[tool]",
        serialize(filterTool, TypingInfo, "VulnerabilityTool", ""),
        "",
      );
    }
    if (filterLibraryName !== undefined) {
      requestContext.setQueryParam(
        "filter[library.name]",
        serialize(filterLibraryName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterLibraryVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[library.version]",
        serialize(filterLibraryVersion, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAdvisoryId !== undefined) {
      requestContext.setQueryParam(
        "filter[advisory.id]",
        serialize(filterAdvisoryId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRisksExploitationProbability !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.exploitation_probability]",
        serialize(
          filterRisksExploitationProbability,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterRisksPocExploitAvailable !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.poc_exploit_available]",
        serialize(filterRisksPocExploitAvailable, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksExploitAvailable !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.exploit_available]",
        serialize(filterRisksExploitAvailable, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksEpssScoreOp !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.epss.score][`$op`]",
        serialize(filterRisksEpssScoreOp, TypingInfo, "number", "double"),
        "",
      );
    }
    if (filterRisksEpssSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.epss.severity]",
        serialize(
          filterRisksEpssSeverity,
          TypingInfo,
          "VulnerabilitySeverity",
          "",
        ),
        "",
      );
    }
    if (filterLanguage !== undefined) {
      requestContext.setQueryParam(
        "filter[language]",
        serialize(filterLanguage, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterEcosystem !== undefined) {
      requestContext.setQueryParam(
        "filter[ecosystem]",
        serialize(filterEcosystem, TypingInfo, "VulnerabilityEcosystem", ""),
        "",
      );
    }
    if (filterCodeLocationLocation !== undefined) {
      requestContext.setQueryParam(
        "filter[code_location.location]",
        serialize(filterCodeLocationLocation, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCodeLocationFilePath !== undefined) {
      requestContext.setQueryParam(
        "filter[code_location.file_path]",
        serialize(filterCodeLocationFilePath, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCodeLocationMethod !== undefined) {
      requestContext.setQueryParam(
        "filter[code_location.method]",
        serialize(filterCodeLocationMethod, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFixAvailable !== undefined) {
      requestContext.setQueryParam(
        "filter[fix_available]",
        serialize(filterFixAvailable, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRepoDigests !== undefined) {
      requestContext.setQueryParam(
        "filter[repo_digests]",
        serialize(filterRepoDigests, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[origin]",
        serialize(filterOrigin, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRunningKernel !== undefined) {
      requestContext.setQueryParam(
        "filter[running_kernel]",
        serialize(filterRunningKernel, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.name]",
        serialize(filterAssetName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetType !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.type]",
        serialize(filterAssetType, TypingInfo, "AssetType", ""),
        "",
      );
    }
    if (filterAssetVersionFirst !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.version.first]",
        serialize(filterAssetVersionFirst, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetVersionLast !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.version.last]",
        serialize(filterAssetVersionLast, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetRepositoryUrl !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.repository_url]",
        serialize(filterAssetRepositoryUrl, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetRisksInProduction !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.in_production]",
        serialize(filterAssetRisksInProduction, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterAssetRisksUnderAttack !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.under_attack]",
        serialize(filterAssetRisksUnderAttack, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterAssetRisksIsPubliclyAccessible !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.is_publicly_accessible]",
        serialize(
          filterAssetRisksIsPubliclyAccessible,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterAssetRisksHasPrivilegedAccess !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.has_privileged_access]",
        serialize(
          filterAssetRisksHasPrivilegedAccess,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterAssetRisksHasAccessToSensitiveData !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.has_access_to_sensitive_data]",
        serialize(
          filterAssetRisksHasAccessToSensitiveData,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterAssetEnvironments !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.environments]",
        serialize(filterAssetEnvironments, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetTeams !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.teams]",
        serialize(filterAssetTeams, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetArch !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.arch]",
        serialize(filterAssetArch, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetOperatingSystemName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.operating_system.name]",
        serialize(filterAssetOperatingSystemName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetOperatingSystemVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.operating_system.version]",
        serialize(filterAssetOperatingSystemVersion, TypingInfo, "string", ""),
        "",
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

  public async listVulnerableAssets(
    pageToken?: string,
    pageNumber?: number,
    filterName?: string,
    filterType?: AssetType,
    filterVersionFirst?: string,
    filterVersionLast?: string,
    filterRepositoryUrl?: string,
    filterRisksInProduction?: boolean,
    filterRisksUnderAttack?: boolean,
    filterRisksIsPubliclyAccessible?: boolean,
    filterRisksHasPrivilegedAccess?: boolean,
    filterRisksHasAccessToSensitiveData?: boolean,
    filterEnvironments?: string,
    filterTeams?: string,
    filterArch?: string,
    filterOperatingSystemName?: string,
    filterOperatingSystemVersion?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listVulnerableAssets'");
    if (!_config.unstableOperations["v2.listVulnerableAssets"]) {
      throw new Error(
        "Unstable operation 'listVulnerableAssets' is disabled. Enable it by setting `configuration.unstableOperations['v2.listVulnerableAssets'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/vulnerable-assets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listVulnerableAssets",
      VulnerabilitiesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        serialize(pageToken, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        serialize(filterType, TypingInfo, "AssetType", ""),
        "",
      );
    }
    if (filterVersionFirst !== undefined) {
      requestContext.setQueryParam(
        "filter[version.first]",
        serialize(filterVersionFirst, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterVersionLast !== undefined) {
      requestContext.setQueryParam(
        "filter[version.last]",
        serialize(filterVersionLast, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRepositoryUrl !== undefined) {
      requestContext.setQueryParam(
        "filter[repository_url]",
        serialize(filterRepositoryUrl, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRisksInProduction !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.in_production]",
        serialize(filterRisksInProduction, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksUnderAttack !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.under_attack]",
        serialize(filterRisksUnderAttack, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksIsPubliclyAccessible !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.is_publicly_accessible]",
        serialize(filterRisksIsPubliclyAccessible, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksHasPrivilegedAccess !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.has_privileged_access]",
        serialize(filterRisksHasPrivilegedAccess, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksHasAccessToSensitiveData !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.has_access_to_sensitive_data]",
        serialize(
          filterRisksHasAccessToSensitiveData,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterEnvironments !== undefined) {
      requestContext.setQueryParam(
        "filter[environments]",
        serialize(filterEnvironments, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTeams !== undefined) {
      requestContext.setQueryParam(
        "filter[teams]",
        serialize(filterTeams, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterArch !== undefined) {
      requestContext.setQueryParam(
        "filter[arch]",
        serialize(filterArch, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOperatingSystemName !== undefined) {
      requestContext.setQueryParam(
        "filter[operating_system.name]",
        serialize(filterOperatingSystemName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOperatingSystemVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[operating_system.version]",
        serialize(filterOperatingSystemVersion, TypingInfo, "string", ""),
        "",
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
}

export class VulnerabilitiesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSBOM
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSBOM(response: ResponseContext): Promise<GetSBOMResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetSBOMResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetSBOMResponse",
      ) as GetSBOMResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetSBOMResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetSBOMResponse",
        "",
      ) as GetSBOMResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to importSecurityVulnerabilities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async importSecurityVulnerabilities(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
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
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAssetsSBOMs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAssetsSBOMs(
    response: ResponseContext,
  ): Promise<ListAssetsSBOMsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListAssetsSBOMsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAssetsSBOMsResponse",
      ) as ListAssetsSBOMsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListAssetsSBOMsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAssetsSBOMsResponse",
        "",
      ) as ListAssetsSBOMsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listScannedAssetsMetadata
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScannedAssetsMetadata(
    response: ResponseContext,
  ): Promise<ScannedAssetsMetadata> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ScannedAssetsMetadata = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ScannedAssetsMetadata",
      ) as ScannedAssetsMetadata;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ScannedAssetsMetadata = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ScannedAssetsMetadata",
        "",
      ) as ScannedAssetsMetadata;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listVulnerabilities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listVulnerabilities(
    response: ResponseContext,
  ): Promise<ListVulnerabilitiesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListVulnerabilitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListVulnerabilitiesResponse",
      ) as ListVulnerabilitiesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListVulnerabilitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListVulnerabilitiesResponse",
        "",
      ) as ListVulnerabilitiesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listVulnerableAssets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listVulnerableAssets(
    response: ResponseContext,
  ): Promise<ListVulnerableAssetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListVulnerableAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListVulnerableAssetsResponse",
      ) as ListVulnerableAssetsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListVulnerableAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListVulnerableAssetsResponse",
        "",
      ) as ListVulnerableAssetsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface VulnerabilitiesApiGetSBOMRequest {
  /**
   * The type of the asset for the SBOM request.
   * @type AssetType
   */
  assetType: AssetType;
  /**
   * The name of the asset for the SBOM request.
   * @type string
   */
  filterAssetName: string;
  /**
   * The container image `repo_digest` for the SBOM request. When the requested asset type is 'Image', this filter is mandatory.
   * @type string
   */
  filterRepoDigest?: string;
  /**
   * The standard of the SBOM.
   * @type SBOMFormat
   */
  extFormat?: SBOMFormat;
}

export interface VulnerabilitiesApiImportSecurityVulnerabilitiesRequest {
  /**
   * @type CycloneDXBom
   */
  body: CycloneDXBom;
}

export interface VulnerabilitiesApiListAssetsSBOMsRequest {
  /**
   * Its value must come from the `links` section of the response of the first request. Do not manually edit it.
   * @type string
   */
  pageToken?: string;
  /**
   * The page number to be retrieved. It should be equal to or greater than 1.
   * @type number
   */
  pageNumber?: number;
  /**
   * The type of the assets for the SBOM request. Required for initial requests (when no `page[token]` is provided). Infrastructure types (`Host`, `HostImage`, `Image`, `ServerlessFunction`) and code types (`Repository`, `Service`) cannot be mixed in the same request.
   * @type AssetType
   */
  filterAssetType?: AssetType;
  /**
   * The name of the asset for the SBOM request.
   * @type string
   */
  filterAssetName?: string;
  /**
   * The name of the component that is a dependency of an asset.
   * @type string
   */
  filterPackageName?: string;
  /**
   * The version of the component that is a dependency of an asset.
   * @type string
   */
  filterPackageVersion?: string;
  /**
   * The software license name of the component that is a dependency of an asset.
   * @type string
   */
  filterLicenseName?: string;
  /**
   * The software license type of the component that is a dependency of an asset.
   * @type SBOMComponentLicenseType
   */
  filterLicenseType?: SBOMComponentLicenseType;
}

export interface VulnerabilitiesApiListScannedAssetsMetadataRequest {
  /**
   * Its value must come from the `links` section of the response of the first request. Do not manually edit it.
   * @type string
   */
  pageToken?: string;
  /**
   * The page number to be retrieved. It should be equal to or greater than 1.
   * @type number
   */
  pageNumber?: number;
  /**
   * The type of the scanned asset.
   * @type CloudAssetType
   */
  filterAssetType?: CloudAssetType;
  /**
   * The name of the scanned asset.
   * @type string
   */
  filterAssetName?: string;
  /**
   * The origin of last success scan.
   * @type string
   */
  filterLastSuccessOrigin?: string;
  /**
   * The environment of last success scan.
   * @type string
   */
  filterLastSuccessEnv?: string;
}

export interface VulnerabilitiesApiListVulnerabilitiesRequest {
  /**
   * Its value must come from the `links` section of the response of the first request. Do not manually edit it.
   * @type string
   */
  pageToken?: string;
  /**
   * The page number to be retrieved. It should be equal or greater than `1`
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by vulnerability type.
   * @type VulnerabilityType
   */
  filterType?: VulnerabilityType;
  /**
   * Filter by vulnerability base (i.e. from the original advisory) severity score.
   * @type number
   */
  filterCvssBaseScoreOp?: number;
  /**
   * Filter by vulnerability base severity.
   * @type VulnerabilitySeverity
   */
  filterCvssBaseSeverity?: VulnerabilitySeverity;
  /**
   * Filter by vulnerability base CVSS vector.
   * @type string
   */
  filterCvssBaseVector?: string;
  /**
   * Filter by vulnerability Datadog severity score.
   * @type number
   */
  filterCvssDatadogScoreOp?: number;
  /**
   * Filter by vulnerability Datadog severity.
   * @type VulnerabilitySeverity
   */
  filterCvssDatadogSeverity?: VulnerabilitySeverity;
  /**
   * Filter by vulnerability Datadog CVSS vector.
   * @type string
   */
  filterCvssDatadogVector?: string;
  /**
   * Filter by the status of the vulnerability.
   * @type VulnerabilityStatus
   */
  filterStatus?: VulnerabilityStatus;
  /**
   * Filter by the tool of the vulnerability.
   * @type VulnerabilityTool
   */
  filterTool?: VulnerabilityTool;
  /**
   * Filter by library name.
   * @type string
   */
  filterLibraryName?: string;
  /**
   * Filter by library version.
   * @type string
   */
  filterLibraryVersion?: string;
  /**
   * Filter by advisory ID.
   * @type string
   */
  filterAdvisoryId?: string;
  /**
   * Filter by exploitation probability.
   * @type boolean
   */
  filterRisksExploitationProbability?: boolean;
  /**
   * Filter by POC exploit availability.
   * @type boolean
   */
  filterRisksPocExploitAvailable?: boolean;
  /**
   * Filter by public exploit availability.
   * @type boolean
   */
  filterRisksExploitAvailable?: boolean;
  /**
   * Filter by vulnerability [EPSS](https://www.first.org/epss/) severity score.
   * @type number
   */
  filterRisksEpssScoreOp?: number;
  /**
   * Filter by vulnerability [EPSS](https://www.first.org/epss/) severity.
   * @type VulnerabilitySeverity
   */
  filterRisksEpssSeverity?: VulnerabilitySeverity;
  /**
   * Filter by language.
   * @type string
   */
  filterLanguage?: string;
  /**
   * Filter by ecosystem.
   * @type VulnerabilityEcosystem
   */
  filterEcosystem?: VulnerabilityEcosystem;
  /**
   * Filter by vulnerability location.
   * @type string
   */
  filterCodeLocationLocation?: string;
  /**
   * Filter by vulnerability file path.
   * @type string
   */
  filterCodeLocationFilePath?: string;
  /**
   * Filter by method.
   * @type string
   */
  filterCodeLocationMethod?: string;
  /**
   * Filter by fix availability.
   * @type boolean
   */
  filterFixAvailable?: boolean;
  /**
   * Filter by vulnerability `repo_digest` (when the vulnerability is related to `Image` asset).
   * @type string
   */
  filterRepoDigests?: string;
  /**
   * Filter by origin.
   * @type string
   */
  filterOrigin?: string;
  /**
   * Filter for whether the vulnerability affects a running kernel (for vulnerabilities related to a `Host` asset).
   * @type boolean
   */
  filterRunningKernel?: boolean;
  /**
   * Filter by asset name. This field supports the usage of wildcards (*).
   * @type string
   */
  filterAssetName?: string;
  /**
   * Filter by asset type.
   * @type AssetType
   */
  filterAssetType?: AssetType;
  /**
   * Filter by the first version of the asset this vulnerability has been detected on.
   * @type string
   */
  filterAssetVersionFirst?: string;
  /**
   * Filter by the last version of the asset this vulnerability has been detected on.
   * @type string
   */
  filterAssetVersionLast?: string;
  /**
   * Filter by the repository url associated to the asset.
   * @type string
   */
  filterAssetRepositoryUrl?: string;
  /**
   * Filter whether the asset is in production or not.
   * @type boolean
   */
  filterAssetRisksInProduction?: boolean;
  /**
   * Filter whether the asset is under attack or not.
   * @type boolean
   */
  filterAssetRisksUnderAttack?: boolean;
  /**
   * Filter whether the asset is publicly accessible or not.
   * @type boolean
   */
  filterAssetRisksIsPubliclyAccessible?: boolean;
  /**
   * Filter whether the asset is publicly accessible or not.
   * @type boolean
   */
  filterAssetRisksHasPrivilegedAccess?: boolean;
  /**
   * Filter whether the asset  has access to sensitive data or not.
   * @type boolean
   */
  filterAssetRisksHasAccessToSensitiveData?: boolean;
  /**
   * Filter by asset environments.
   * @type string
   */
  filterAssetEnvironments?: string;
  /**
   * Filter by asset teams.
   * @type string
   */
  filterAssetTeams?: string;
  /**
   * Filter by asset architecture.
   * @type string
   */
  filterAssetArch?: string;
  /**
   * Filter by asset operating system name.
   * @type string
   */
  filterAssetOperatingSystemName?: string;
  /**
   * Filter by asset operating system version.
   * @type string
   */
  filterAssetOperatingSystemVersion?: string;
}

export interface VulnerabilitiesApiListVulnerableAssetsRequest {
  /**
   * Its value must come from the `links` section of the response of the first request. Do not manually edit it.
   * @type string
   */
  pageToken?: string;
  /**
   * The page number to be retrieved. It should be equal or greater than `1`
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by name. This field supports the usage of wildcards (*).
   * @type string
   */
  filterName?: string;
  /**
   * Filter by type.
   * @type AssetType
   */
  filterType?: AssetType;
  /**
   * Filter by the first version of the asset since it has been vulnerable.
   * @type string
   */
  filterVersionFirst?: string;
  /**
   * Filter by the last detected version of the asset.
   * @type string
   */
  filterVersionLast?: string;
  /**
   * Filter by the repository url associated to the asset.
   * @type string
   */
  filterRepositoryUrl?: string;
  /**
   * Filter whether the asset is in production or not.
   * @type boolean
   */
  filterRisksInProduction?: boolean;
  /**
   * Filter whether the asset (Service) is under attack or not.
   * @type boolean
   */
  filterRisksUnderAttack?: boolean;
  /**
   * Filter whether the asset (Host) is publicly accessible or not.
   * @type boolean
   */
  filterRisksIsPubliclyAccessible?: boolean;
  /**
   * Filter whether the asset (Host) has privileged access or not.
   * @type boolean
   */
  filterRisksHasPrivilegedAccess?: boolean;
  /**
   * Filter whether the asset (Host)  has access to sensitive data or not.
   * @type boolean
   */
  filterRisksHasAccessToSensitiveData?: boolean;
  /**
   * Filter by environment.
   * @type string
   */
  filterEnvironments?: string;
  /**
   * Filter by teams.
   * @type string
   */
  filterTeams?: string;
  /**
   * Filter by architecture.
   * @type string
   */
  filterArch?: string;
  /**
   * Filter by operating system name.
   * @type string
   */
  filterOperatingSystemName?: string;
  /**
   * Filter by operating system version.
   * @type string
   */
  filterOperatingSystemVersion?: string;
}

export class VulnerabilitiesApi {
  private requestFactory: VulnerabilitiesApiRequestFactory;
  private responseProcessor: VulnerabilitiesApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: VulnerabilitiesApiRequestFactory,
    responseProcessor?: VulnerabilitiesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new VulnerabilitiesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new VulnerabilitiesApiResponseProcessor();
  }

  /**
   * Get a single SBOM related to an asset by its type and name.
   * @param param The request object
   */
  public getSBOM(
    param: VulnerabilitiesApiGetSBOMRequest,
    options?: Configuration,
  ): Promise<GetSBOMResponse> {
    const requestContextPromise = this.requestFactory.getSBOM(
      param.assetType,
      param.filterAssetName,
      param.filterRepoDigest,
      param.extFormat,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSBOM(responseContext);
        });
    });
  }

  /**
   * Import security vulnerabilities from an external scanner in CycloneDX 1.5 format.
   *
   * The payload is validated against the CycloneDX 1.5 JSON schema and the following
   * additional constraints:
   *
   * - `metadata`, `metadata.component`, and `metadata.component.name` are required.
   * - `metadata.tools.components` must contain exactly one element with a `name` field.
   * - `components` cannot be empty. Each component requires `bom-ref`, `type`, `name`, and `version`.
   * - When `type` is `library`, `purl` is required and must be a valid PURL.
   * - When `type` is `operating-system`, `name` must be one of the supported OS values:
   *   `alma`, `alpine`, `amazon`, `azurelinux`, `bottlerocket`, `cbl-mariner`, `chainguard`,
   *   `centos`, `debian`, `fedora`, `opensuse`, `opensuse-leap`, `opensuse-tumbleweed`,
   *   `oracle`, `photon`, `redhat`, `rocky`, `slem`, `sles`, `ubuntu`, `wolfi`, `windows`, `macos`.
   * - `vulnerabilities` cannot be empty. Each vulnerability requires `id`, exactly one `ratings` entry,
   *   and at least one `affects` entry.
   * - Each `affects[].ref` must match a `bom-ref` value in `components`.
   * @param param The request object
   */
  public importSecurityVulnerabilities(
    param: VulnerabilitiesApiImportSecurityVulnerabilitiesRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.importSecurityVulnerabilities(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.importSecurityVulnerabilities(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of assets SBOMs for an organization.
   *
   * The `filter[asset_type]` parameter is required for initial requests (when no `page[token]` is provided).
   * Subsequent pages encode the asset type in the pagination token, so `filter[asset_type]` is not required
   * for paginated requests. Mixing infrastructure asset types (`Host`, `HostImage`, `Image`, `ServerlessFunction`)
   * with code asset types (`Repository`, `Service`) in the same request is not supported and returns a 400 error.
   *
   * ### Pagination
   *
   * Please review the [Pagination section](#pagination) for the "List Vulnerabilities" endpoint.
   *
   * ### Filtering
   *
   * Please review the [Filtering section](#filtering) for the "List Vulnerabilities" endpoint.
   *
   * ### Metadata
   *
   * Please review the [Metadata section](#metadata) for the "List Vulnerabilities" endpoint.
   * @param param The request object
   */
  public listAssetsSBOMs(
    param: VulnerabilitiesApiListAssetsSBOMsRequest = {},
    options?: Configuration,
  ): Promise<ListAssetsSBOMsResponse> {
    const requestContextPromise = this.requestFactory.listAssetsSBOMs(
      param.pageToken,
      param.pageNumber,
      param.filterAssetType,
      param.filterAssetName,
      param.filterPackageName,
      param.filterPackageVersion,
      param.filterLicenseName,
      param.filterLicenseType,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAssetsSBOMs(responseContext);
        });
    });
  }

  /**
   * Get a list of security scanned assets metadata for an organization.
   *
   * ### Pagination
   *
   * For the "List Vulnerabilities" endpoint, see the [Pagination section](#pagination).
   *
   * ### Filtering
   *
   * For the "List Vulnerabilities" endpoint, see the [Filtering section](#filtering).
   *
   * ### Metadata
   *
   *  For the "List Vulnerabilities" endpoint, see the [Metadata section](#metadata).
   *
   * ### Related endpoints
   *
   * This endpoint returns additional metadata for cloud resources that is not available from the standard resource endpoints. To access a richer dataset, call this endpoint together with the relevant resource endpoint(s) and merge (join) their results using the resource identifier.
   *
   * **Hosts**
   *
   * To enrich host data, join the response from the [Hosts](https://docs.datadoghq.com/api/latest/hosts/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:
   *
   * | ENDPOINT | JOIN KEY | TYPE |
   * | --- | --- | --- |
   * | [/api/v1/hosts](https://docs.datadoghq.com/api/latest/hosts/) | host_list.host_name | string |
   * | /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |
   *
   * **Host Images**
   *
   * To enrich host image data, join the response from the [Hosts](https://docs.datadoghq.com/api/latest/hosts/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:
   *
   * | ENDPOINT | JOIN KEY | TYPE |
   * | --- | --- | --- |
   * | [/api/v1/hosts](https://docs.datadoghq.com/api/latest/hosts/) | host_list.tags_by_source["Amazon Web Services"]["image"] | string |
   * | /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |
   *
   * **Container Images**
   *
   * To enrich container image data, join the response from the [Container Images](https://docs.datadoghq.com/api/latest/container-images/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:
   *
   * | ENDPOINT | JOIN KEY | TYPE |
   * | --- | --- | --- |
   * | [/api/v2/container_images](https://docs.datadoghq.com/api/latest/container-images/) | `data.attributes.name`@`data.attributes.repo_digest` | string |
   * | /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |
   * @param param The request object
   */
  public listScannedAssetsMetadata(
    param: VulnerabilitiesApiListScannedAssetsMetadataRequest = {},
    options?: Configuration,
  ): Promise<ScannedAssetsMetadata> {
    const requestContextPromise = this.requestFactory.listScannedAssetsMetadata(
      param.pageToken,
      param.pageNumber,
      param.filterAssetType,
      param.filterAssetName,
      param.filterLastSuccessOrigin,
      param.filterLastSuccessEnv,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScannedAssetsMetadata(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of vulnerabilities.
   *
   * ### Pagination
   *
   * Pagination is enabled by default in both `vulnerabilities` and `assets`. The size of the page varies depending on the endpoint and cannot be modified. To automate the request of the next page, you can use the links section in the response.
   *
   * This endpoint will return paginated responses. The pages are stored in the links section of the response:
   *
   * ```JSON
   * {
   *   "data": [...],
   *   "meta": {...},
   *   "links": {
   *     "self": "https://.../api/v2/security/vulnerabilities",
   *     "first": "https://.../api/v2/security/vulnerabilities?page[number]=1&page[token]=abc",
   *     "last": "https://.../api/v2/security/vulnerabilities?page[number]=43&page[token]=abc",
   *     "next": "https://.../api/v2/security/vulnerabilities?page[number]=2&page[token]=abc"
   *   }
   * }
   * ```
   *
   *
   * - `links.previous` is empty if the first page is requested.
   * - `links.next` is empty if the last page is requested.
   *
   * #### Token
   *
   * Vulnerabilities can be created, updated or deleted at any point in time.
   *
   * Upon the first request, a token is created to ensure consistency across subsequent paginated requests.
   *
   * A token is valid only for 24 hours.
   *
   * #### First request
   *
   * We consider a request to be the first request when there is no `page[token]` parameter.
   *
   * The response of this first request contains the newly created token in the `links` section.
   *
   * This token can then be used in the subsequent paginated requests.
   *
   * *Note: The first request may take longer to complete than subsequent requests.*
   *
   * #### Subsequent requests
   *
   * Any request containing valid `page[token]` and `page[number]` parameters will be considered a subsequent request.
   *
   * If the `token` is invalid, a `404` response will be returned.
   *
   * If the page `number` is invalid, a `400` response will be returned.
   *
   * The returned `token` is valid for all requests in the pagination sequence. To send paginated requests in parallel, reuse the same `token` and change only the `page[number]` parameter.
   *
   * ### Filtering
   *
   * The request can include some filter parameters to filter the data to be retrieved. The format of the filter parameters follows the [JSON:API format](https://jsonapi.org/format/#fetching-filtering): `filter[$prop_name]`, where `prop_name` is the property name in the entity being filtered by.
   *
   * All filters can include multiple values, where data will be filtered with an OR clause: `filter[title]=Title1,Title2` will filter all vulnerabilities where title is equal to `Title1` OR `Title2`.
   *
   * String filters are case sensitive.
   *
   * Boolean filters accept `true` or `false` as values.
   *
   * Number filters must include an operator as a second filter input: `filter[$prop_name][$operator]`. For example, for the vulnerabilities endpoint: `filter[cvss.base.score][lte]=8`.
   *
   * Available operators are: `eq` (==), `lt` (<), `lte` (<=), `gt` (>) and `gte` (>=).
   *
   * ### Metadata
   *
   * Following [JSON:API format](https://jsonapi.org/format/#document-meta), object including non-standard meta-information.
   *
   * This endpoint includes the meta member in the response. For more details on each of the properties included in this section, check the endpoints response tables.
   *
   * ```JSON
   * {
   *   "data": [...],
   *   "meta": {
   *     "total": 1500,
   *     "count": 18732,
   *     "token": "some_token"
   *   },
   *   "links": {...}
   * }
   * ```
   * ### Extensions
   *
   * Requests may include extensions to modify the behavior of the requested endpoint. The filter parameters follow the [JSON:API format](https://jsonapi.org/extensions/#extensions) format: `ext:$extension_name`, where `extension_name` is the name of the modifier that is being applied.
   *
   * Extensions can only include one value: `ext:modifier=value`.
   * @param param The request object
   */
  public listVulnerabilities(
    param: VulnerabilitiesApiListVulnerabilitiesRequest = {},
    options?: Configuration,
  ): Promise<ListVulnerabilitiesResponse> {
    const requestContextPromise = this.requestFactory.listVulnerabilities(
      param.pageToken,
      param.pageNumber,
      param.filterType,
      param.filterCvssBaseScoreOp,
      param.filterCvssBaseSeverity,
      param.filterCvssBaseVector,
      param.filterCvssDatadogScoreOp,
      param.filterCvssDatadogSeverity,
      param.filterCvssDatadogVector,
      param.filterStatus,
      param.filterTool,
      param.filterLibraryName,
      param.filterLibraryVersion,
      param.filterAdvisoryId,
      param.filterRisksExploitationProbability,
      param.filterRisksPocExploitAvailable,
      param.filterRisksExploitAvailable,
      param.filterRisksEpssScoreOp,
      param.filterRisksEpssSeverity,
      param.filterLanguage,
      param.filterEcosystem,
      param.filterCodeLocationLocation,
      param.filterCodeLocationFilePath,
      param.filterCodeLocationMethod,
      param.filterFixAvailable,
      param.filterRepoDigests,
      param.filterOrigin,
      param.filterRunningKernel,
      param.filterAssetName,
      param.filterAssetType,
      param.filterAssetVersionFirst,
      param.filterAssetVersionLast,
      param.filterAssetRepositoryUrl,
      param.filterAssetRisksInProduction,
      param.filterAssetRisksUnderAttack,
      param.filterAssetRisksIsPubliclyAccessible,
      param.filterAssetRisksHasPrivilegedAccess,
      param.filterAssetRisksHasAccessToSensitiveData,
      param.filterAssetEnvironments,
      param.filterAssetTeams,
      param.filterAssetArch,
      param.filterAssetOperatingSystemName,
      param.filterAssetOperatingSystemVersion,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listVulnerabilities(responseContext);
        });
    });
  }

  /**
   * Get a list of vulnerable assets.
   *
   * ### Pagination
   *
   * Please review the [Pagination section for the "List Vulnerabilities"](#pagination) endpoint.
   *
   * ### Filtering
   *
   * Please review the [Filtering section for the "List Vulnerabilities"](#filtering) endpoint.
   *
   * ### Metadata
   *
   * Please review the [Metadata section for the "List Vulnerabilities"](#metadata) endpoint.
   * @param param The request object
   */
  public listVulnerableAssets(
    param: VulnerabilitiesApiListVulnerableAssetsRequest = {},
    options?: Configuration,
  ): Promise<ListVulnerableAssetsResponse> {
    const requestContextPromise = this.requestFactory.listVulnerableAssets(
      param.pageToken,
      param.pageNumber,
      param.filterName,
      param.filterType,
      param.filterVersionFirst,
      param.filterVersionLast,
      param.filterRepositoryUrl,
      param.filterRisksInProduction,
      param.filterRisksUnderAttack,
      param.filterRisksIsPubliclyAccessible,
      param.filterRisksHasPrivilegedAccess,
      param.filterRisksHasAccessToSensitiveData,
      param.filterEnvironments,
      param.filterTeams,
      param.filterArch,
      param.filterOperatingSystemName,
      param.filterOperatingSystemVersion,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listVulnerableAssets(responseContext);
        });
    });
  }
}
