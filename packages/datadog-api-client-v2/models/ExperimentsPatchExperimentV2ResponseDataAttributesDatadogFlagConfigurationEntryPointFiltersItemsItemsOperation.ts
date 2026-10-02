/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Comparison applied by the Datadog entry-point filter.
 */

export type ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsOperation =

    | typeof EQ
    | typeof IN
    | typeof NEQ
    | typeof NOT_IN
    | typeof GTE
    | typeof LTE
    | typeof GT
    | typeof LT
    | UnparsedObject;
export const EQ = "eq";
export const IN = "in";
export const NEQ = "neq";
export const NOT_IN = "not_in";
export const GTE = "gte";
export const LTE = "lte";
export const GT = "gt";
export const LT = "lt";
