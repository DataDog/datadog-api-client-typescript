/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The asset type
*/

export type AssetType = typeof REPOSITORY| typeof SERVICE| typeof HOST| typeof HOSTIMAGE| typeof IMAGE | UnparsedObject;
export const REPOSITORY = 'Repository';
export const SERVICE = 'Service';
export const HOST = 'Host';
export const HOSTIMAGE = 'HostImage';
export const IMAGE = 'Image';