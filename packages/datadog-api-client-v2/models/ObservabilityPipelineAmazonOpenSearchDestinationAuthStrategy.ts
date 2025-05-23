/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The authentication strategy to use.
 */

export type ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy =
  | typeof BASIC
  | typeof AWS
  | UnparsedObject;
export const BASIC = "basic";
export const AWS = "aws";
