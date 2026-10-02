/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the reported lift is relative or absolute.
 */

export type ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsLiftType =
  typeof RELATIVE | typeof ABSOLUTE | typeof UNKNOWN | UnparsedObject;
export const RELATIVE = "RELATIVE";
export const ABSOLUTE = "ABSOLUTE";
export const UNKNOWN = "UNKNOWN";
