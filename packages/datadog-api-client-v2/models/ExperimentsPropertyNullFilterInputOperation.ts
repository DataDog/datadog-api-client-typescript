/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Comparison applied by this filter.
 */

export type ExperimentsPropertyNullFilterInputOperation =
  | typeof IS_NULL
  | typeof IS_NOT_NULL
  | UnparsedObject;
export const IS_NULL = "IS_NULL";
export const IS_NOT_NULL = "IS_NOT_NULL";
