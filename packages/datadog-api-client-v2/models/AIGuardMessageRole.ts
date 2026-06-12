/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The role of the message author in the conversation.
 */

export type AIGuardMessageRole =
  | typeof USER
  | typeof ASSISTANT
  | typeof SYSTEM
  | typeof TOOL
  | typeof DEVELOPER
  | UnparsedObject;
export const USER = "user";
export const ASSISTANT = "assistant";
export const SYSTEM = "system";
export const TOOL = "tool";
export const DEVELOPER = "developer";
