/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Get AST response resource type.
 */

export type GetAstResponseDataType = typeof GET_AST_RESPONSE | UnparsedObject;
export const GET_AST_RESPONSE = "get_ast_response";
