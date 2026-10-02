import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Comparison applied by the warehouse entry-point filter.
 */
export type ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPointFiltersItemsOperation =
  typeof IS | typeof IS_NOT | UnparsedObject;
export const IS = "IS";
export const IS_NOT = "IS_NOT";
