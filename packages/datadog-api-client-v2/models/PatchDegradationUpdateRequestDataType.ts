/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Degradation updates resource type.
 */

export type PatchDegradationUpdateRequestDataType =
  | typeof DEGRADATION_UPDATES
  | UnparsedObject;
export const DEGRADATION_UPDATES = "degradation_updates";
