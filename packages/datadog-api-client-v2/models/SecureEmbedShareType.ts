/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of share. Always `secure_embed`.
 */

export type SecureEmbedShareType = typeof SECURE_EMBED | UnparsedObject;
export const SECURE_EMBED = "secure_embed";
