import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for agentless host resources. The value should always be `agentless_host`.
 */
export type CsmAgentlessHostType = typeof AGENTLESS_HOST | UnparsedObject;
export const AGENTLESS_HOST = "agentless_host";
