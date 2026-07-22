/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Storage class used for objects stored in GCS.
*/

export type ObservabilityPipelineGoogleCloudStorageDestinationStorageClass = typeof STANDARD| typeof NEARLINE| typeof COLDLINE| typeof ARCHIVE | UnparsedObject;
export const STANDARD = 'STANDARD';
export const NEARLINE = 'NEARLINE';
export const COLDLINE = 'COLDLINE';
export const ARCHIVE = 'ARCHIVE';