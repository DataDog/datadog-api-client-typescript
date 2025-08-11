import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of the `StatsigIntegrationType` object.
 */
export type StatsigIntegrationType = typeof STATSIG | UnparsedObject;
export const STATSIG = "Statsig";
