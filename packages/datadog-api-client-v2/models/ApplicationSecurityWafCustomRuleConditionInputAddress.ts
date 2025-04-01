/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Input from the request on which the condition should apply.
*/

export type ApplicationSecurityWafCustomRuleConditionInputAddress = typeof SERVER_DB_STATEMENT| typeof SERVER_IO_FS_FILE| typeof SERVER_IO_NET_URL| typeof SERVER_SYS_SHELL_CMD| typeof SERVER_REQUEST_METHOD| typeof SERVER_REQUEST_URI_RAW| typeof SERVER_REQUEST_PATH_PARAMS| typeof SERVER_REQUEST_QUERY| typeof SERVER_REQUEST_HEADERS_NO_COOKIES| typeof SERVER_REQUEST_COOKIES| typeof SERVER_REQUEST_TRAILERS| typeof SERVER_REQUEST_BODY| typeof SERVER_RESPONSE_STATUS| typeof SERVER_RESPONSE_HEADERS_NO_COOKIES| typeof SERVER_RESPONSE_TRAILERS| typeof GRPC_SERVER_REQUEST_METADATA| typeof GRPC_SERVER_REQUEST_MESSAGE| typeof GRPC_SERVER_METHOD| typeof GRAPHQL_SERVER_ALL_RESOLVERS| typeof USR_ID| typeof HTTP_CLIENT_IP | UnparsedObject;
export const SERVER_DB_STATEMENT = 'server.db.statement';
export const SERVER_IO_FS_FILE = 'server.io.fs.file';
export const SERVER_IO_NET_URL = 'server.io.net.url';
export const SERVER_SYS_SHELL_CMD = 'server.sys.shell.cmd';
export const SERVER_REQUEST_METHOD = 'server.request.method';
export const SERVER_REQUEST_URI_RAW = 'server.request.uri.raw';
export const SERVER_REQUEST_PATH_PARAMS = 'server.request.path_params';
export const SERVER_REQUEST_QUERY = 'server.request.query';
export const SERVER_REQUEST_HEADERS_NO_COOKIES = 'server.request.headers.no_cookies';
export const SERVER_REQUEST_COOKIES = 'server.request.cookies';
export const SERVER_REQUEST_TRAILERS = 'server.request.trailers';
export const SERVER_REQUEST_BODY = 'server.request.body';
export const SERVER_RESPONSE_STATUS = 'server.response.status';
export const SERVER_RESPONSE_HEADERS_NO_COOKIES = 'server.response.headers.no_cookies';
export const SERVER_RESPONSE_TRAILERS = 'server.response.trailers';
export const GRPC_SERVER_REQUEST_METADATA = 'grpc.server.request.metadata';
export const GRPC_SERVER_REQUEST_MESSAGE = 'grpc.server.request.message';
export const GRPC_SERVER_METHOD = 'grpc.server.method';
export const GRAPHQL_SERVER_ALL_RESOLVERS = 'graphql.server.all_resolvers';
export const USR_ID = 'usr.id';
export const HTTP_CLIENT_IP = 'http.client_ip';