/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The storage class where the archive will be stored.
*/

export type LogsArchiveStorageClassS3Type = typeof STANDARD| typeof STANDARD_IA| typeof ONEZONE_IA| typeof INTELLIGENT_TIERING| typeof GLACIER_IR | UnparsedObject;
export const STANDARD = 'STANDARD';
export const STANDARD_IA = 'STANDARD_IA';
export const ONEZONE_IA = 'ONEZONE_IA';
export const INTELLIGENT_TIERING = 'INTELLIGENT_TIERING';
export const GLACIER_IR = 'GLACIER_IR';