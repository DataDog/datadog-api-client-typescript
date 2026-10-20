/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SavedFilterAPIErrorResponse } from "./SavedFilterAPIErrorResponse";
import { SavedFilterJSONAPIErrorResponse } from "./SavedFilterJSONAPIErrorResponse";
import { SavedFilterPermissionDeniedResponse } from "./SavedFilterPermissionDeniedResponse";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An authentication or permission error, or a resource listing consumer flags that the caller cannot edit.
 */

export type PatchSavedFilterForbiddenResponse =
  | SavedFilterAPIErrorResponse
  | SavedFilterJSONAPIErrorResponse
  | SavedFilterPermissionDeniedResponse
  | UnparsedObject;
