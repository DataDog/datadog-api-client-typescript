/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the secure embed share. Active means the shared dashboard is available. Paused means it is not.
 */

export type SecureEmbedStatus = typeof ACTIVE | typeof PAUSED | UnparsedObject;
export const ACTIVE = "active";
export const PAUSED = "paused";
