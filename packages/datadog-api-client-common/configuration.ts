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

export interface Configuration {
  readonly baseServer?: BaseServerConfiguration;
  readonly serverIndex: number;
  readonly operationServerIndices: { [name: string]: number };
  readonly httpApi: HttpLibrary;
  readonly authMethods: AuthMethods;
  readonly httpConfig: HttpConfiguration;
  readonly debug: boolean | undefined;
  unstableOperations: { [name: string]: boolean };
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

  const configuration: Configuration = {
    baseServer: conf.baseServer,
    serverIndex: conf.serverIndex || 0,
    operationServerIndices: conf.operationServerIndices || {},
    unstableOperations: {
      "v1.searchSLO": false,
      "v2.listEvents": false,
      "v2.searchEvents": false,
      "v2.createIncident": false,
      "v2.deleteIncident": false,
      "v2.getIncident": false,
      "v2.listIncidentAttachments": false,
      "v2.listIncidents": false,
      "v2.searchIncidents": false,
      "v2.updateIncident": false,
      "v2.updateIncidentAttachments": false,
      "v2.queryScalarData": false,
      "v2.queryTimeseriesData": false,
      "v2.createIncidentService": false,
      "v2.deleteIncidentService": false,
      "v2.getIncidentService": false,
      "v2.listIncidentServices": false,
      "v2.updateIncidentService": false,
      "v2.createIncidentTeam": false,
      "v2.deleteIncidentTeam": false,
      "v2.getIncidentTeam": false,
      "v2.listIncidentTeams": false,
      "v2.updateIncidentTeam": false,
    },
    httpApi: conf.httpApi || new DefaultHttpLibrary(),
    authMethods: configureAuthMethods(authMethods),
    httpConfig: conf.httpConfig || {},
    debug: conf.debug,
  };
  configuration.httpApi.zstdCompressorCallback = conf.zstdCompressorCallback;
  configuration.httpApi.debug = configuration.debug;
  return configuration;
}

export function getServer(
  conf: Configuration,
  endpoint: string
): BaseServerConfiguration {
  if (conf.baseServer !== undefined) {
    return conf.baseServer;
  }
  const index =
    endpoint in conf.operationServerIndices
      ? conf.operationServerIndices[endpoint]
      : conf.serverIndex;
  return endpoint in operationServers
    ? operationServers[endpoint][index]
    : servers[index];
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
  if (conf.baseServer !== undefined) {
    conf.baseServer.setVariables(serverVariables);
    return;
  }

  const index = conf.serverIndex;
  servers[index].setVariables(serverVariables);

  for (const op in operationServers) {
    operationServers[op][0].setVariables(serverVariables);
  }
}

/**
 * Apply given security authentication method if avaiable in configuration.
 */
export function applySecurityAuthentication<
  AuthMethodKey extends keyof AuthMethods
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
