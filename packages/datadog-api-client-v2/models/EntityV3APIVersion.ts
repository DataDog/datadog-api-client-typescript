/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The schema version of entity type. The field is known as schema-version in the previous version.
*/

export type EntityV3APIVersion = typeof V3 | UnparsedObject;
export const V3 = 'v3';