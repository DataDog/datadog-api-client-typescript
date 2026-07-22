/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The source of a unified host entry, indicating whether it was discovered via agent, agentless scanning, or both.
*/

export type CsmUnifiedHostSource = typeof AGENT| typeof AGENTLESS| typeof BOTH | UnparsedObject;
export const AGENT = 'agent';
export const AGENTLESS = 'agentless';
export const BOTH = 'both';