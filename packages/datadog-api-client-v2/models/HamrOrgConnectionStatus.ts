/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Status of the HAMR connection:
 * - 0: UNSPECIFIED - Connection status not specified
 * - 1: ONBOARDING - Initial setup of HAMR connection
 * - 2: PASSIVE - Secondary organization in passive standby mode
 * - 3: FAILOVER - Liminal status between PASSIVE and ACTIVE
 * - 4: ACTIVE - Organization is an active failover
 * - 5: RECOVERY - Recovery operation in progress
 */

export type HamrOrgConnectionStatus =
  | typeof UNSPECIFIED
  | typeof ONBOARDING
  | typeof PASSIVE
  | typeof FAILOVER
  | typeof ACTIVE
  | typeof RECOVERY
  | UnparsedObject;
export const UNSPECIFIED = 0;
export const ONBOARDING = 1;
export const PASSIVE = 2;
export const FAILOVER = 3;
export const ACTIVE = 4;
export const RECOVERY = 5;
