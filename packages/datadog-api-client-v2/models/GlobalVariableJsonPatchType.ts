/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Global variable JSON Patch type.
 */

export type GlobalVariableJsonPatchType =
  | typeof GLOBAL_VARIABLES_JSON_PATCH
  | UnparsedObject;
export const GLOBAL_VARIABLES_JSON_PATCH = "global_variables_json_patch";
