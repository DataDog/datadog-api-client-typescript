/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The Azure credential kind. The value should always be `client_certificate_credential`.
 */

export type ObservabilityPipelineAzureDataExplorerDestinationAuthClientCertificateKind =
  typeof CLIENT_CERTIFICATE_CREDENTIAL | UnparsedObject;
export const CLIENT_CERTIFICATE_CREDENTIAL = "client_certificate_credential";
