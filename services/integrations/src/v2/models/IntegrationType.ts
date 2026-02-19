import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Integration resource type.
 */
export type IntegrationType = typeof INTEGRATION | UnparsedObject;
export const INTEGRATION = "integration";
