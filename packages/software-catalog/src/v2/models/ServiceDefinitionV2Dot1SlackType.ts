import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Contact type.
 */
export type ServiceDefinitionV2Dot1SlackType = typeof SLACK | UnparsedObject;
export const SLACK = "slack";
