/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type SloTimeWindow =
  | typeof SEVEN_D
  | typeof THIRTY_D
  | typeof NINETY_D
  | UnparsedObject;
export const SEVEN_D = "7d";
export const THIRTY_D = "30d";
export const NINETY_D = "90d";
