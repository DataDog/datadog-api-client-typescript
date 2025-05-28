/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The action to take when the quota is exceeded. Options:
 * - `drop`: Drop the event.
 * - `no_action`: Let the event pass through.
 * - `overflow_routing`: Route to an overflow destination.
*/

export type ObservabilityPipelineQuotaProcessorOverflowAction = typeof DROP| typeof NO_ACTION| typeof OVERFLOW_ROUTING | UnparsedObject;
export const DROP = 'drop';
export const NO_ACTION = 'no_action';
export const OVERFLOW_ROUTING = 'overflow_routing';