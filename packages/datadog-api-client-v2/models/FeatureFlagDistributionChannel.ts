/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The distribution channel for the feature flag.
 */

export type FeatureFlagDistributionChannel =
  | typeof ALL
  | typeof CLIENT
  | typeof SERVER
  | UnparsedObject;
export const ALL = "ALL";
export const CLIENT = "CLIENT";
export const SERVER = "SERVER";
