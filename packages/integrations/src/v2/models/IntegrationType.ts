import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Integration resource type.
 */
export type IntegrationType = typeof INTEGRATION | UnparsedObject;
export const INTEGRATION = "integration";
