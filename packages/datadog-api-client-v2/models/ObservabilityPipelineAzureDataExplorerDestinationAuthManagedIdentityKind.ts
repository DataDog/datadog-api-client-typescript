/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The Azure credential kind. The value should always be `managed_identity`.
 */

export type ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityKind =
  typeof MANAGED_IDENTITY | UnparsedObject;
export const MANAGED_IDENTITY = "managed_identity";
