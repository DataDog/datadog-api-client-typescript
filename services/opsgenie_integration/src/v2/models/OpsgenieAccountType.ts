import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Opsgenie account resource type.
 */
export type OpsgenieAccountType = typeof OPSGENIE_ACCOUNT | UnparsedObject;
export const OPSGENIE_ACCOUNT = "opsgenie-account";
