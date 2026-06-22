/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Approval state for a remediation step.
 */

export type RemediationStepApprovalState =
  | typeof PENDING_APPROVAL
  | typeof APPROVED
  | typeof REJECTED
  | UnparsedObject;
export const PENDING_APPROVAL = "pending_approval";
export const APPROVED = "approved";
export const REJECTED = "rejected";
