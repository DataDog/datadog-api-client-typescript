/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The type of retention filter.
*/

export type RetentionFilterAllType = typeof SPANS_SAMPLING_PROCESSOR| typeof SPANS_ERRORS_SAMPLING_PROCESSOR| typeof SPANS_APPSEC_SAMPLING_PROCESSOR | UnparsedObject;
export const SPANS_SAMPLING_PROCESSOR = 'spans-sampling-processor';
export const SPANS_ERRORS_SAMPLING_PROCESSOR = 'spans-errors-sampling-processor';
export const SPANS_APPSEC_SAMPLING_PROCESSOR = 'spans-appsec-sampling-processor';