/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Resource type of an LLM Observability patterns trigger response.
*/

export type LLMObsPatternsTriggerResponseType = typeof TOPIC_DISCOVERY_RUN | UnparsedObject;
export const TOPIC_DISCOVERY_RUN = 'topic_discovery_run';