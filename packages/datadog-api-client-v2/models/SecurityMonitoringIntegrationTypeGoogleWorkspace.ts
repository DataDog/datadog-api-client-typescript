/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The source type for a Google Workspace entity context sync.
 */

export type SecurityMonitoringIntegrationTypeGoogleWorkspace =
  | typeof GOOGLE_WORKSPACE
  | UnparsedObject;
export const GOOGLE_WORKSPACE = "GOOGLE_WORKSPACE";
