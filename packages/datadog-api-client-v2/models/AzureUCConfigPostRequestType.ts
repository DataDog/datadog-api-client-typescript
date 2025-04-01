/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Type of Azure config Post Request.
*/

export type AzureUCConfigPostRequestType = typeof AZURE_UC_CONFIG_POST_REQUEST | UnparsedObject;
export const AZURE_UC_CONFIG_POST_REQUEST = 'azure_uc_config_post_request';