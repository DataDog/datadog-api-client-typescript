/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SavedFilterApprovalConflictResponse } from "./SavedFilterApprovalConflictResponse";
import { SavedFilterJSONAPIErrorResponse } from "./SavedFilterJSONAPIErrorResponse";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A stale update, duplicate name, or other conflict, or a resource listing consumer flags requiring approval.
 */

export type PatchSavedFilterConflictResponse =
  | SavedFilterJSONAPIErrorResponse
  | SavedFilterApprovalConflictResponse
  | UnparsedObject;
