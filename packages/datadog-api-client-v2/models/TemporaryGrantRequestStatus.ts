/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The durable request decision, independent of whether its grant is still active.
 */

export type TemporaryGrantRequestStatus =
  | typeof PENDING
  | typeof APPROVED
  | typeof DENIED
  | typeof CANCELLED
  | UnparsedObject;
export const PENDING = "pending";
export const APPROVED = "approved";
export const DENIED = "denied";
export const CANCELLED = "cancelled";
