/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The type of the ownership inferences collection resource. The value should always be `ownership_inferences`.
*/

export type OwnershipInferencesType = typeof OWNERSHIP_INFERENCES | UnparsedObject;
export const OWNERSHIP_INFERENCES = 'ownership_inferences';