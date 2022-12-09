/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The HTTP method.
 */

export type HTTPMethod =
  | typeof GET
  | typeof POST
  | typeof PATCH
  | typeof PUT
  | typeof DELETE
  | typeof HEAD
  | typeof OPTIONS
  | UnparsedObject;
export const GET = "GET";
export const POST = "POST";
export const PATCH = "PATCH";
export const PUT = "PUT";
export const DELETE = "DELETE";
export const HEAD = "HEAD";
export const OPTIONS = "OPTIONS";
