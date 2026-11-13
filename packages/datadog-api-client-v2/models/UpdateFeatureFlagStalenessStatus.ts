/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The lifecycle to set. `ACTIVE` makes the flag temporary; `PERMANENT` excludes it from
 * staleness detection. Either value clears any snooze; omit the field to keep the lifecycle.
 * Do not copy the top-level `staleness_status` from a response into this field: that legacy
 * response field is always `ACTIVE`.
 */

export type UpdateFeatureFlagStalenessStatus =
  | typeof ACTIVE
  | typeof PERMANENT
  | UnparsedObject;
export const ACTIVE = "ACTIVE";
export const PERMANENT = "PERMANENT";
