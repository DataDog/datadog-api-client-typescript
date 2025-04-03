import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The deployment type.
 */
export type AppDeploymentType = typeof DEPLOYMENT | UnparsedObject;
export const DEPLOYMENT = "deployment";
