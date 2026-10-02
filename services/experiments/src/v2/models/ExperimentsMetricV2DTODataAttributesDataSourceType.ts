import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source of the data used to calculate the metric.
 */
export type ExperimentsMetricV2DTODataAttributesDataSourceType =
  | typeof DATADOG
  | typeof DATADOG_REFERENCE_TABLE
  | typeof CUSTOMER_WAREHOUSE
  | typeof IMPORTED
  | typeof UNKNOWN
  | UnparsedObject;
export const DATADOG = "DATADOG";
export const DATADOG_REFERENCE_TABLE = "DATADOG_REFERENCE_TABLE";
export const CUSTOMER_WAREHOUSE = "CUSTOMER_WAREHOUSE";
export const IMPORTED = "IMPORTED";
export const UNKNOWN = "UNKNOWN";
