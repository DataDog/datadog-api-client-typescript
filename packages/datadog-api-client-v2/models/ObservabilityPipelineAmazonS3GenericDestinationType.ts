/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The destination type. Always `amazon_s3_generic`.
 */

export type ObservabilityPipelineAmazonS3GenericDestinationType =
  | typeof GENERIC_ARCHIVES_S3
  | UnparsedObject;
export const GENERIC_ARCHIVES_S3 = "amazon_s3_generic";
