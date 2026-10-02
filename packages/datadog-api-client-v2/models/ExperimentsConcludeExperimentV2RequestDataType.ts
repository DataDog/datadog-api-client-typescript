/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Conclude experiment request resource type.
 */

export type ExperimentsConcludeExperimentV2RequestDataType =
  | typeof CONCLUDE_EXPERIMENT_REQUEST
  | UnparsedObject;
export const CONCLUDE_EXPERIMENT_REQUEST = "conclude-experiment-request";
