/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the saved filter was authored. RULES indicates rule-based authoring and LIST indicates list import. Both types return targeting rules and conditions.
 */

export type SavedFilterCreationType =
  | typeof RULES
  | typeof LIST
  | UnparsedObject;
export const RULES = "RULES";
export const LIST = "LIST";
