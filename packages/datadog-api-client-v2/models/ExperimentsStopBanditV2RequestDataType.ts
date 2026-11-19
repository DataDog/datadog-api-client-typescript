/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Stop bandit request resource type.
 */

export type ExperimentsStopBanditV2RequestDataType =
  | typeof STOP_BANDIT_REQUEST
  | UnparsedObject;
export const STOP_BANDIT_REQUEST = "stop-bandit-request";
