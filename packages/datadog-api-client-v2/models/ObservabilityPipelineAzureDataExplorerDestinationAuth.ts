/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCli } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCli";
import { ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificate } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificate";
import { ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecret } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecret";
import { ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentity } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentity";
import { ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertion } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertion";
import { ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentity } from "./ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentity";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication configuration for Azure Data Explorer. The `azure_credential_kind` field selects the credential type.
 */

export type ObservabilityPipelineAzureDataExplorerDestinationAuth =
  | ObservabilityPipelineAzureDataExplorerDestinationAuthAzureCli
  | ObservabilityPipelineAzureDataExplorerDestinationAuthClientSecret
  | ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificate
  | ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentity
  | ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertion
  | ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentity
  | UnparsedObject;
