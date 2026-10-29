/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Approve the exact submitted total and expiry, or deny the request.
 */

export type TemporaryGrantRequestDecision =
  | typeof APPROVED
  | typeof DENIED
  | UnparsedObject;
export const APPROVED = "approved";
export const DENIED = "denied";
