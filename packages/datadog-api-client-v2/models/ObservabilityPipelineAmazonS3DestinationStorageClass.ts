/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * S3 storage class.
*/

export type ObservabilityPipelineAmazonS3DestinationStorageClass = typeof STANDARD| typeof REDUCED_REDUNDANCY| typeof INTELLIGENT_TIERING| typeof STANDARD_IA| typeof EXPRESS_ONEZONE| typeof ONEZONE_IA| typeof GLACIER| typeof GLACIER_IR| typeof DEEP_ARCHIVE | UnparsedObject;
export const STANDARD = 'STANDARD';
export const REDUCED_REDUNDANCY = 'REDUCED_REDUNDANCY';
export const INTELLIGENT_TIERING = 'INTELLIGENT_TIERING';
export const STANDARD_IA = 'STANDARD_IA';
export const EXPRESS_ONEZONE = 'EXPRESS_ONEZONE';
export const ONEZONE_IA = 'ONEZONE_IA';
export const GLACIER = 'GLACIER';
export const GLACIER_IR = 'GLACIER_IR';
export const DEEP_ARCHIVE = 'DEEP_ARCHIVE';