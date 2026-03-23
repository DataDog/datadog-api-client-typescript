/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The scope of the selection. When set to `subtree`,
 * synchronization includes the referenced team or
 * organization and everything nested under it.
 */

export type TeamSyncSelectionStateScope = typeof SUBTREE | UnparsedObject;
export const SUBTREE = "subtree";
