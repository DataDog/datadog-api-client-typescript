import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Opsgenie service resource type.
 */
export type OpsgenieServiceType = typeof OPSGENIE_SERVICE | UnparsedObject;
export const OPSGENIE_SERVICE = "opsgenie-service";
