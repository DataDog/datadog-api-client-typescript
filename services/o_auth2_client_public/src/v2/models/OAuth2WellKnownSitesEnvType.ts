import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for OAuth2 well-known sites environment.
 */
export type OAuth2WellKnownSitesEnvType = typeof ENV | UnparsedObject;
export const ENV = "env";
