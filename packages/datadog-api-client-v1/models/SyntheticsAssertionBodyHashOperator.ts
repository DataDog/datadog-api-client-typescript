/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Assertion operator to apply.
 */

export type SyntheticsAssertionBodyHashOperator =
  | typeof MD5
  | typeof SHA1
  | typeof SHA256
  | UnparsedObject;
export const MD5 = "md5";
export const SHA1 = "sha1";
export const SHA256 = "sha256";
