/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Resource type for secure embed create requests.
 */

export type SecureEmbedRequestType =
  | typeof SECURE_EMBED_REQUEST
  | UnparsedObject;
export const SECURE_EMBED_REQUEST = "secure_embed_request";
