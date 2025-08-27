import {
  HttpLibrary,
  HttpConfiguration,
  RequestContext,
  ZstdCompressorCallback,
} from "./http/http";
import { IsomorphicFetchHttpLibrary as DefaultHttpLibrary } from "./http/isomorphic-fetch";
import {
  BaseServerConfiguration,
  server1,
  servers,
  operationServers,
} from "./servers";
import {
  configureAuthMethods,
  AuthMethods,
  AuthMethodsConfiguration,
} from "./auth";
import { logger } from "../../logger";

export class Configuration {
  readonly baseServer?: BaseServerConfiguration;
  readonly serverIndex: number;
  readonly operationServerIndices: { [name: string]: number };
  readonly httpApi: HttpLibrary;
  readonly authMethods: AuthMethods;
  readonly httpConfig: HttpConfiguration;
  readonly debug: boolean | undefined;
  readonly enableRetry: boolean | undefined;
  readonly maxRetries: number | undefined;
  readonly backoffBase: number | undefined;
  readonly backoffMultiplier: number | undefined;
  unstableOperations: { [name: string]: boolean };
  servers: BaseServerConfiguration[];
  operationServers: { [endpoint: string]: BaseServerConfiguration[] };

  public constructor(
    baseServer: BaseServerConfiguration | undefined,
    serverIndex: number,
    operationServerIndices: { [name: string]: number },
    httpApi: HttpLibrary,
    authMethods: AuthMethods,
    httpConfig: HttpConfiguration,
    debug: boolean | undefined,
    enableRetry: boolean | undefined,
    maxRetries: number | undefined,
    backoffBase: number | undefined,
    backoffMultiplier: number | undefined,
    unstableOperations: { [name: string]: boolean }
  ) {
    this.baseServer = baseServer;
    this.serverIndex = serverIndex;
    this.operationServerIndices = operationServerIndices;
    this.httpApi = httpApi;
    this.authMethods = authMethods;
    this.httpConfig = httpConfig;
    this.debug = debug;
    this.enableRetry = enableRetry;
    this.maxRetries = maxRetries;
    this.backoffBase = backoffBase;
    this.backoffMultiplier = backoffMultiplier;
    this.unstableOperations = unstableOperations;
    this.servers = [];
    for (const server of servers) {
      this.servers.push(server.clone());
    }
    this.operationServers = {};
    for (const endpoint in operationServers) {
      this.operationServers[endpoint] = [];
      for (const server of operationServers[endpoint]) {
        this.operationServers[endpoint].push(server.clone());
      }
    }
    if (backoffBase && backoffBase < 2) {
      throw new Error("Backoff base must be at least 2");
    }
  }

  setServerVariables(serverVariables: { [key: string]: string }): void {
    if (this.baseServer !== undefined) {
      this.baseServer.setVariables(serverVariables);
      return;
    }

    const index = this.serverIndex;
    this.servers[index].setVariables(serverVariables);

    for (const op in this.operationServers) {
      const index =
        op in this.operationServerIndices
          ? this.operationServerIndices[op]
          : this.serverIndex;
      this.operationServers[op][index].setVariables(serverVariables);
    }
  }

  getServer(endpoint: string): BaseServerConfiguration {
    if (this.baseServer !== undefined) {
      return this.baseServer;
    }
    const index =
      endpoint in this.operationServerIndices
        ? this.operationServerIndices[endpoint]
        : this.serverIndex;
    return endpoint in operationServers
      ? this.operationServers[endpoint][index]
      : this.servers[index];
  }
}

/**
 * Interface with which a configuration object can be configured.
 */
export interface ConfigurationParameters {
  /**
   * Default server to use (takes preference over serverIndex and operationServerIndices)
   */
  baseServer?: BaseServerConfiguration;
  /**
   * Default index of a server to use from the predefined server list
   */
  serverIndex?: number;
  /**
   * Default index of a server to use for an operation from the predefined server operation map
   */
  operationServerIndices?: { [name: string]: number };
  /**
   * Custom `fetch` function
   */
  fetch?: any;
  /**
   * HTTP library to use e.g. IsomorphicFetch
   */
  httpApi?: HttpLibrary;
  /**
   * Configuration for the available authentication methods
   */
  authMethods?: AuthMethodsConfiguration;
  /**
   * Configuration for HTTP transport
   */
  httpConfig?: HttpConfiguration;
  /**
   * Flag to enable requests tracing
   */
  debug?: boolean;
  /**
   * Callback method to compress string body with zstd
   */
  zstdCompressorCallback?: ZstdCompressorCallback;
  /**
   * Maximum of retry attempts allowed
   */
  maxRetries?: number;
  /**
   * Backoff base
   */
  backoffBase?: number;
  /**
   * Backoff multiplier
   */
  backoffMultiplier?: number;
  /**
   * Enable retry on status code 429 or 5xx
   */
  enableRetry?: boolean;
}

/**
 * Configuration factory function
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: null
 *    - serverIndex: 0
 *    - operationServerIndices: {}
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - authMethods: {}
 *    - httpConfig: {}
 *    - debug: false
 *
 * @param conf partial configuration
 */
export function createConfiguration(
  conf: ConfigurationParameters = {}
): Configuration {
  if (typeof process !== "undefined" && process.env && process.env.DD_SITE) {
    const serverConf = server1.getConfiguration();
    server1.setVariables({ site: process.env.DD_SITE } as typeof serverConf);
    for (const op in operationServers) {
      operationServers[op][0].setVariables({ site: process.env.DD_SITE });
    }
  }

  const authMethods = conf.authMethods || {};
  if (
    !("apiKeyAuth" in authMethods) &&
    typeof process !== "undefined" &&
    process.env &&
    process.env.DD_API_KEY
  ) {
    authMethods["apiKeyAuth"] = process.env.DD_API_KEY;
  }
  if (
    !("appKeyAuth" in authMethods) &&
    typeof process !== "undefined" &&
    process.env &&
    process.env.DD_APP_KEY
  ) {
    authMethods["appKeyAuth"] = process.env.DD_APP_KEY;
  }

  const configuration = new Configuration(
    conf.baseServer,
    conf.serverIndex || 0,
    conf.operationServerIndices || {},
    conf.httpApi || new DefaultHttpLibrary(),
    configureAuthMethods(authMethods),
    conf.httpConfig || {},
    conf.debug,
    conf.enableRetry || false,
    conf.maxRetries || 3,
    conf.backoffBase || 2,
    conf.backoffMultiplier || 2,
    {
      "v2.createOpenAPI": false,
      "v2.deleteOpenAPI": false,
      "v2.getOpenAPI": false,
      "v2.listAPIs": false,
      "v2.updateOpenAPI": false,
      "v2.cancelHistoricalJob": false,
      "v2.convertJobResultToSignal": false,
      "v2.deleteHistoricalJob": false,
      "v2.getFinding": false,
      "v2.getHistoricalJob": false,
      "v2.getRuleVersionHistory": false,
      "v2.getSBOM": false,
      "v2.listAssetsSBOMs": false,
      "v2.listFindings": false,
      "v2.listHistoricalJobs": false,
      "v2.listVulnerabilities": false,
      "v2.listVulnerableAssets": false,
      "v2.muteFindings": false,
      "v2.runHistoricalJob": false,
      "v2.createDataset": false,
      "v2.deleteDataset": false,
      "v2.getAllDatasets": false,
      "v2.getDataset": false,
      "v2.updateDataset": false,
      "v2.cancelDataDeletionRequest": false,
      "v2.createDataDeletionRequest": false,
      "v2.getDataDeletionRequests": false,
      "v2.createIncident": false,
      "v2.createIncidentIntegration": false,
      "v2.createIncidentTodo": false,
      "v2.createIncidentType": false,
      "v2.deleteIncident": false,
      "v2.deleteIncidentIntegration": false,
      "v2.deleteIncidentTodo": false,
      "v2.deleteIncidentType": false,
      "v2.getIncident": false,
      "v2.getIncidentIntegration": false,
      "v2.getIncidentTodo": false,
      "v2.getIncidentType": false,
      "v2.listIncidentAttachments": false,
      "v2.listIncidentIntegrations": false,
      "v2.listIncidents": false,
      "v2.listIncidentTodos": false,
      "v2.listIncidentTypes": false,
      "v2.searchIncidents": false,
      "v2.updateIncident": false,
      "v2.updateIncidentAttachments": false,
      "v2.updateIncidentIntegration": false,
      "v2.updateIncidentTodo": false,
      "v2.updateIncidentType": false,
      "v2.createAWSAccount": false,
      "v2.createNewAWSExternalID": false,
      "v2.deleteAWSAccount": false,
      "v2.getAWSAccount": false,
      "v2.listAWSAccounts": false,
      "v2.listAWSNamespaces": false,
      "v2.updateAWSAccount": false,
      "v2.listAWSLogsServices": false,
      "v2.createMonitorUserTemplate": false,
      "v2.deleteMonitorUserTemplate": false,
      "v2.getMonitorUserTemplate": false,
      "v2.listMonitorUserTemplates": false,
      "v2.updateMonitorUserTemplate": false,
      "v2.validateExistingMonitorUserTemplate": false,
      "v2.validateMonitorUserTemplate": false,
      "v2.createPipeline": false,
      "v2.deletePipeline": false,
      "v2.getPipeline": false,
      "v2.listPipelines": false,
      "v2.updatePipeline": false,
      "v2.validatePipeline": false,
      "v2.createScorecardOutcomesBatch": false,
      "v2.createScorecardRule": false,
      "v2.deleteScorecardRule": false,
      "v2.listScorecardOutcomes": false,
      "v2.listScorecardRules": false,
      "v2.updateScorecardOutcomesAsync": false,
      "v2.updateScorecardRule": false,
      "v2.createIncidentService": false,
      "v2.deleteIncidentService": false,
      "v2.getIncidentService": false,
      "v2.listIncidentServices": false,
      "v2.updateIncidentService": false,
      "v2.createSLOReportJob": false,
      "v2.getSLOReport": false,
      "v2.getSLOReportJobStatus": false,
      "v2.getSPARecommendations": false,
      "v2.addMemberTeam": false,
      "v2.listMemberTeams": false,
      "v2.removeMemberTeam": false,
      "v2.syncTeams": false,
      "v2.createIncidentTeam": false,
      "v2.deleteIncidentTeam": false,
      "v2.getIncidentTeam": false,
      "v2.listIncidentTeams": false,
      "v2.updateIncidentTeam": false,
    }
  );
  configuration.httpApi.zstdCompressorCallback = conf.zstdCompressorCallback;
  configuration.httpApi.debug = configuration.debug;
  configuration.httpApi.enableRetry = configuration.enableRetry;
  configuration.httpApi.maxRetries = configuration.maxRetries;
  configuration.httpApi.backoffBase = configuration.backoffBase;
  configuration.httpApi.backoffMultiplier = configuration.backoffMultiplier;
  configuration.httpApi.fetch = conf.fetch;
  return configuration;
}

export function getServer(
  conf: Configuration,
  endpoint: string
): BaseServerConfiguration {
  logger.warn(
    "getServer is deprecated, please use Configuration.getServer instead."
  );
  return conf.getServer(endpoint);
}

/**
 * Sets the server variables.
 *
 * @param serverVariables key/value object representing the server variables (site, name, protocol, ...)
 */
export function setServerVariables(
  conf: Configuration,
  serverVariables: { [key: string]: string }
): void {
  logger.warn(
    "setServerVariables is deprecated, please use Configuration.setServerVariables instead."
  );
  return conf.setServerVariables(serverVariables);
}

/**
 * Apply given security authentication method if avaiable in configuration.
 */
export function applySecurityAuthentication<
  AuthMethodKey extends keyof AuthMethods,
>(
  conf: Configuration,
  requestContext: RequestContext,
  authMethods: AuthMethodKey[]
): void {
  for (const authMethodName of authMethods) {
    const authMethod = conf.authMethods[authMethodName];
    if (authMethod) {
      authMethod.applySecurityAuthentication(requestContext);
    }
  }
}
