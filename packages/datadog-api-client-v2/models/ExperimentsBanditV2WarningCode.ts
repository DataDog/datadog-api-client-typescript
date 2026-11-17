/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Code that identifies the warning. `datadog_flag_configuration_omitted` means the caller lacks feature flag or environment read permissions, so the response leaves out `datadog_flag_configuration`.
 */

export type ExperimentsBanditV2WarningCode =
  | typeof DATADOG_FLAG_CONFIGURATION_OMITTED
  | UnparsedObject;
export const DATADOG_FLAG_CONFIGURATION_OMITTED =
  "datadog_flag_configuration_omitted";
