/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Byte frames according to the octet counting format as per RFC6587.
*/

export type ObservabilityPipelineSocketSourceFramingOctetCountingMethod = typeof OCTET_COUNTING | UnparsedObject;
export const OCTET_COUNTING = 'octet_counting';