/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for this saved filter update error.
 */

export type SavedFilterApprovalConflictType =
  | typeof UPDATE_APPROVAL_CONFLICT
  | UnparsedObject;
export const UPDATE_APPROVAL_CONFLICT = "update-approval-conflict";
