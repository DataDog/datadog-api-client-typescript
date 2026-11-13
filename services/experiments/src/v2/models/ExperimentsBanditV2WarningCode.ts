import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Code that identifies the warning. `datadog_flag_configuration_omitted` means the caller lacks feature flag or environment read permissions, so the response leaves out `datadog_flag_configuration`.
 */
export type ExperimentsBanditV2WarningCode =
  | typeof DATADOG_FLAG_CONFIGURATION_OMITTED
  | UnparsedObject;
export const DATADOG_FLAG_CONFIGURATION_OMITTED =
  "datadog_flag_configuration_omitted";
