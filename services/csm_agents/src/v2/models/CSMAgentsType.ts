import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `datadog_agent`.
 */
export type CSMAgentsType = typeof DATADOG_AGENT | UnparsedObject;
export const DATADOG_AGENT = "datadog_agent";
