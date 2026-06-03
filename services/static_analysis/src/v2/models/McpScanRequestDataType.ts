import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for MCP SCA scan requests.
 */
export type McpScanRequestDataType = typeof MCPSCANREQUEST | UnparsedObject;
export const MCPSCANREQUEST = "mcpscanrequest";
