/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Datadog's coverage of the model's operations under zero data retention. A model is eligible when
 * coverage is `full` and its provider's `zdr_eligible` is `true`. `partial` means only the
 * `covered_operations` can be served: requests on other operations are not dispatched to it.
 */

export type AiGatewayModelZdrCoverage =
  | typeof FULL
  | typeof PARTIAL
  | typeof NONE
  | UnparsedObject;
export const FULL = "full";
export const PARTIAL = "partial";
export const NONE = "none";
