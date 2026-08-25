/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the rule is enforced. `blocking` rejects telemetry that violates the rule.
 * `surfacing` only highlights non-compliant telemetry without blocking it.
 */

export type TagRuleType = typeof BLOCKING | typeof SURFACING | UnparsedObject;
export const BLOCKING = "blocking";
export const SURFACING = "surfacing";
