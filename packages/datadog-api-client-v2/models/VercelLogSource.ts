/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Source of logs that Vercel forwards to Datadog.
 */

export type VercelLogSource =
  | typeof STATIC
  | typeof LAMBDA
  | typeof EDGE
  | typeof BUILD
  | typeof EXTERNAL
  | typeof FIREWALL
  | UnparsedObject;
export const STATIC = "static";
export const LAMBDA = "lambda";
export const EDGE = "edge";
export const BUILD = "build";
export const EXTERNAL = "external";
export const FIREWALL = "firewall";
