/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Schema versions
*/

export type ServiceDefinitionSchemaVersions = typeof V1| typeof V2| typeof V2_1| typeof V2_2 | UnparsedObject;
export const V1 = 'v1';
export const V2 = 'v2';
export const V2_1 = 'v2.1';
export const V2_2 = 'v2.2';