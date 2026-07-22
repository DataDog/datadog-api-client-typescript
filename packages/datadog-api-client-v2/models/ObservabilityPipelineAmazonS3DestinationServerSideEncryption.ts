/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Server-side encryption type for Amazon S3.
*/

export type ObservabilityPipelineAmazonS3DestinationServerSideEncryption = typeof AWS_KMS| typeof AES256 | UnparsedObject;
export const AWS_KMS = 'aws:kms';
export const AES256 = 'AES256';