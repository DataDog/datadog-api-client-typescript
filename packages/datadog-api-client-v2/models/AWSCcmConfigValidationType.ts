/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * AWS CCM config validation resource type.
*/

export type AWSCcmConfigValidationType = typeof CCM_CONFIG_VALIDATION | UnparsedObject;
export const CCM_CONFIG_VALIDATION = 'ccm_config_validation';