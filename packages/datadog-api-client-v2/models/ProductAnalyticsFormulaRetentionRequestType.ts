/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type identifier for a retention scalar or retention timeseries request.
 */

export type ProductAnalyticsFormulaRetentionRequestType =
  | typeof FORMULA_RETENTION_REQUEST
  | UnparsedObject;
export const FORMULA_RETENTION_REQUEST = "formula_retention_request";
