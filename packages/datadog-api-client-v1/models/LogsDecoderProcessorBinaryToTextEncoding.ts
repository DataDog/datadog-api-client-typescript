/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The encoding used to represent the binary data.
 */

export type LogsDecoderProcessorBinaryToTextEncoding =
  | typeof BASE64
  | typeof BASE16
  | UnparsedObject;
export const BASE64 = "base64";
export const BASE16 = "base16";
