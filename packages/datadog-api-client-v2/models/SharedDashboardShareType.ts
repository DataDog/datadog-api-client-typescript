/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of dashboard sharing.
 */

export type SharedDashboardShareType =
  | typeof OPEN
  | typeof INVITE
  | typeof EMBED
  | typeof SECURE_EMBED
  | UnparsedObject;
export const OPEN = "open";
export const INVITE = "invite";
export const EMBED = "embed";
export const SECURE_EMBED = "secure-embed";
