import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Contact type.
 */
export type ServiceDefinitionV2SlackType = typeof SLACK | UnparsedObject;
export const SLACK = "slack";
