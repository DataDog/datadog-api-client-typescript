/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The JSON:API type for this API. Should always be `fastly-services`.
*/

export type FastlyServiceType = typeof FASTLY_SERVICES | UnparsedObject;
export const FASTLY_SERVICES = 'fastly-services';