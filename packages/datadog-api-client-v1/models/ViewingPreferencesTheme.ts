/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The theme of the shared dashboard view. "system" follows your system's default viewing theme.
 */

export type ViewingPreferencesTheme =
  | typeof SYSTEM
  | typeof LIGHT
  | typeof DARK
  | UnparsedObject;
export const SYSTEM = "system";
export const LIGHT = "light";
export const DARK = "dark";
