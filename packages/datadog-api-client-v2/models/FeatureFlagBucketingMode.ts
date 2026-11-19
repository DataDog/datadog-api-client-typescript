/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How subjects are assigned to variants. `DATADOG` is the native scheme. `EPPO` reproduces the assignments that Eppo made for a flag migrated from Eppo, so its subjects keep their variants. Set when the flag is created and never changed.
 */

export type FeatureFlagBucketingMode =
  | typeof DATADOG
  | typeof EPPO
  | UnparsedObject;
export const DATADOG = "DATADOG";
export const EPPO = "EPPO";
