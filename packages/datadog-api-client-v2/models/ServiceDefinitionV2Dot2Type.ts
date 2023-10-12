/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of service.
 */

export type ServiceDefinitionV2Dot2Type =
  | typeof WEB
  | typeof DB
  | typeof CACHE
  | typeof FUNCTION
  | typeof BROSWER
  | typeof MOBILE
  | typeof CUSTOM
  | UnparsedObject;
export const WEB = "web";
export const DB = "db";
export const CACHE = "cache";
export const FUNCTION = "function";
export const BROSWER = "browser";
export const MOBILE = "mobile";
export const CUSTOM = "custom";
