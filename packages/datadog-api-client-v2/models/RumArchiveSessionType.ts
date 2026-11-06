/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource type.
 */

export type RumArchiveSessionType = typeof RUM_ARCHIVE_SESSION | UnparsedObject;
export const RUM_ARCHIVE_SESSION = "rum_archive_session";
