/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * JSON:API type for DORA deployment events.
*/

export type DORADeploymentType = typeof DORA_DEPLOYMENT | UnparsedObject;
export const DORA_DEPLOYMENT = 'dora_deployment';