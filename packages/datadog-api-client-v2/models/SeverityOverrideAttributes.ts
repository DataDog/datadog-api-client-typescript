/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SeverityOverrideClear } from "./SeverityOverrideClear";
import { SeverityOverrideSet } from "./SeverityOverrideSet";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Severity override to apply to the findings.
 * Set `action` to `set` to apply a manual severity override with the given `value`.
 * Set `action` to `clear` to remove a manual severity override.
 */

export type SeverityOverrideAttributes =
  | SeverityOverrideSet
  | SeverityOverrideClear
  | UnparsedObject;
