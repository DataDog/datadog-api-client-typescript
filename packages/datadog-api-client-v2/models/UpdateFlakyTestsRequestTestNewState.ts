/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The new state to set for the flaky test.
 */

export type UpdateFlakyTestsRequestTestNewState =
  | typeof ACTIVE
  | typeof QUARANTINED
  | typeof DISABLED
  | typeof FIXED
  | UnparsedObject;
export const ACTIVE = "active";
export const QUARANTINED = "quarantined";
export const DISABLED = "disabled";
export const FIXED = "fixed";
