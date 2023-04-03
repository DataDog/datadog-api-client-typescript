/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies the order of the returned teams
 */

export type ListTeamsSort =
  | typeof NAME
  | typeof _NAME
  | typeof USER_COUNT
  | typeof _USER_COUNT
  | UnparsedObject;
export const NAME = "name";
export const _NAME = "-name";
export const USER_COUNT = "user_count";
export const _USER_COUNT = "-user_count";
