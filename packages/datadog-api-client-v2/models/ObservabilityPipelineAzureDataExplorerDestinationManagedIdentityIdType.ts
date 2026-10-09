/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the user-assigned managed identity ID.
 */

export type ObservabilityPipelineAzureDataExplorerDestinationManagedIdentityIdType =
  typeof CLIENT_ID | typeof OBJECT_ID | typeof RESOURCE_ID | UnparsedObject;
export const CLIENT_ID = "client_id";
export const OBJECT_ID = "object_id";
export const RESOURCE_ID = "resource_id";
