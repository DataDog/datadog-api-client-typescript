import { UnparsedObject } from "@datadog/datadog-api-client";

import { SavedFilterAPIErrorResponse } from "./SavedFilterAPIErrorResponse";
import { SavedFilterJSONAPIErrorResponse } from "./SavedFilterJSONAPIErrorResponse";
import { SavedFilterPermissionDeniedResponse } from "./SavedFilterPermissionDeniedResponse";

/**
 * An authentication or permission error, or a resource listing consumer flags that the caller cannot edit.
 */
export type PatchSavedFilterForbiddenResponse =
  | SavedFilterAPIErrorResponse
  | SavedFilterJSONAPIErrorResponse
  | SavedFilterPermissionDeniedResponse
  | UnparsedObject;
