/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The source type. Always `amazon_s3`.
*/

export type ObservabilityPipelineAmazonS3SourceType = typeof AMAZON_S3 | UnparsedObject;
export const AMAZON_S3 = 'amazon_s3';