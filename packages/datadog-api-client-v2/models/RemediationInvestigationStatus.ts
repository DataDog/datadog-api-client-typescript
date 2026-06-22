/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Investigation status.
 */

export type RemediationInvestigationStatus =
  | typeof OPEN
  | typeof APPROVAL_REQUIRED
  | typeof EXECUTING
  | typeof SUCCEEDED
  | typeof FAILED
  | UnparsedObject;
export const OPEN = "open";
export const APPROVAL_REQUIRED = "approval_required";
export const EXECUTING = "executing";
export const SUCCEEDED = "succeeded";
export const FAILED = "failed";
