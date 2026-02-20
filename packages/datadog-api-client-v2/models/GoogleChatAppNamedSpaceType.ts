/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Google Chat space resource type.
 */

export type GoogleChatAppNamedSpaceType =
  | typeof GOOGLE_CHAT_APP_NAMED_SPACE_TYPE
  | UnparsedObject;
export const GOOGLE_CHAT_APP_NAMED_SPACE_TYPE = "google-chat-app-named-space";
