/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The compression method used for the custom destination.
 */

export type CustomDestinationCompressionType =
  | typeof GZIP_COMPRESSION
  | typeof NO_COMPRESSION
  | UnparsedObject;
export const GZIP_COMPRESSION = "GZIP";
export const NO_COMPRESSION = "NONE";
