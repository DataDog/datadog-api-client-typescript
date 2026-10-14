import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for DORA deployment events.
 */
export type DORADeploymentType = typeof DORA_DEPLOYMENT | UnparsedObject;
export const DORA_DEPLOYMENT = "dora_deployment";
