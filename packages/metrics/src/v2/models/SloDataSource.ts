import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * A data source for SLO queries.
 */
export type SloDataSource = typeof SLO | UnparsedObject;
export const SLO = "slo";
