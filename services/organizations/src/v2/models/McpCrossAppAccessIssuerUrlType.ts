import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data type of an MCP Cross-App Access issuer URL update.
 */
export type McpCrossAppAccessIssuerUrlType = typeof ORG_CONFIG | UnparsedObject;
export const ORG_CONFIG = "org_config";
