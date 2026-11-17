/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Scope of a launch list. `liftoffs` leaves out launches in the `plan` phase.
 */

export type ProductAnalyticsLaunchListScope = typeof LIFTOFFS | UnparsedObject;
export const LIFTOFFS = "liftoffs";
