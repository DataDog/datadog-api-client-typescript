/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The version of the schema data that was used to populate this entity's data. This could be via the API, Terraform, or YAML file in a repository. The field is known as schema-version in the previous version.
*/

export type EntityV3APIVersion = typeof V3| typeof V2_2| typeof V2_1| typeof V2 | UnparsedObject;
export const V3 = 'v3';
export const V2_2 = 'v2.2';
export const V2_1 = 'v2.1';
export const V2 = 'v2';