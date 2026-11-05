/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Model lifecycle state.
 */

export type AiGatewayModelMetadataLifecycle =
  | typeof ACTIVE
  | typeof ALPHA
  | typeof BETA
  | typeof DEPRECATED
  | UnparsedObject;
export const ACTIVE = "active";
export const ALPHA = "alpha";
export const BETA = "beta";
export const DEPRECATED = "deprecated";
