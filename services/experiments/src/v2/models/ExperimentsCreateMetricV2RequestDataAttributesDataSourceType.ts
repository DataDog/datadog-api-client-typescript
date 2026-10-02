import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source of the data backing this metric.
 */
export type ExperimentsCreateMetricV2RequestDataAttributesDataSourceType =
  | typeof DATADOG
  | typeof DATADOG_REFERENCE_TABLE
  | typeof CUSTOMER_WAREHOUSE
  | UnparsedObject;
export const DATADOG = "DATADOG";
export const DATADOG_REFERENCE_TABLE = "DATADOG_REFERENCE_TABLE";
export const CUSTOMER_WAREHOUSE = "CUSTOMER_WAREHOUSE";
