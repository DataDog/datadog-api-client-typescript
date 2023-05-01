/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * HTTP header used to compress the media-type.
 */

export type ContentEncoding =
  | typeof IDENTITY
  | typeof GZIP
  | typeof DEFLATE
  | UnparsedObject;
export const IDENTITY = "identity";
export const GZIP = "gzip";
export const DEFLATE = "deflate";
