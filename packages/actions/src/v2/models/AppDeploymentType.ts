import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The deployment type.
 */
export type AppDeploymentType = typeof DEPLOYMENT | UnparsedObject;
export const DEPLOYMENT = "deployment";
