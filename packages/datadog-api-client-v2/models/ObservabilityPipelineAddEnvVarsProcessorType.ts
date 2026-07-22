/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The processor type. The value should always be `add_env_vars`.
*/

export type ObservabilityPipelineAddEnvVarsProcessorType = typeof ADD_ENV_VARS | UnparsedObject;
export const ADD_ENV_VARS = 'add_env_vars';