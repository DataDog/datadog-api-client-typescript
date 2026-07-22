/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the detection's current assignment was determined. Possible values are `auto_resolved`, `manual`, `reassigned`, and `cleared`.
 */

export type GovernanceControlDetectionAssignmentSource =
  | typeof AUTO_RESOLVED
  | typeof MANUAL
  | typeof REASSIGNED
  | typeof CLEARED
  | UnparsedObject;
export const AUTO_RESOLVED = "auto_resolved";
export const MANUAL = "manual";
export const REASSIGNED = "reassigned";
export const CLEARED = "cleared";
