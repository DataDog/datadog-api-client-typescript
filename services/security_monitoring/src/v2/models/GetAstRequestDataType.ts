import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Get AST request resource type.
 */
export type GetAstRequestDataType = typeof GET_AST_REQUEST | UnparsedObject;
export const GET_AST_REQUEST = "get_ast_request";
