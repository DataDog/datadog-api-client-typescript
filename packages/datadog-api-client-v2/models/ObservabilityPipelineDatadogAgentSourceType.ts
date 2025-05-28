/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The source type. The value should always be `datadog_agent`.
*/

export type ObservabilityPipelineDatadogAgentSourceType = typeof DATADOG_AGENT | UnparsedObject;
export const DATADOG_AGENT = 'datadog_agent';