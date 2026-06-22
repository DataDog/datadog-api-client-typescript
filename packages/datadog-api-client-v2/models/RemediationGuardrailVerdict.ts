/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The verdict a guardrail applied to a plan or investigation.
 */

export type RemediationGuardrailVerdict =
  | typeof ALLOWED
  | typeof APPROVAL_REQUIRED
  | typeof DENIED
  | UnparsedObject;
export const ALLOWED = "allowed";
export const APPROVAL_REQUIRED = "approval_required";
export const DENIED = "denied";
