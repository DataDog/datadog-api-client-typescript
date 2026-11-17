import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of the `DatadogIntegrationType` object.
 */
export type DatadogIntegrationType = typeof DATADOG | UnparsedObject;
export const DATADOG = "Datadog";
