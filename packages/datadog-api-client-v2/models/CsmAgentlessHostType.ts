/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The JSON:API type for agentless host resources. The value should always be `agentless_host`.
*/

export type CsmAgentlessHostType = typeof AGENTLESS_HOST | UnparsedObject;
export const AGENTLESS_HOST = 'agentless_host';