/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The source type. The value should always be `amazon_data_firehose`.
 */

export type ObservabilityPipelineAmazonDataFirehoseSourceType =
  | typeof AMAZON_DATA_FIREHOSE
  | UnparsedObject;
export const AMAZON_DATA_FIREHOSE = "amazon_data_firehose";
