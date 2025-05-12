/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * On-Call Page urgency level.
 */

export type PageUrgency = typeof LOW | typeof HIGH | UnparsedObject;
export const LOW = "low";
export const HIGH = "high";
