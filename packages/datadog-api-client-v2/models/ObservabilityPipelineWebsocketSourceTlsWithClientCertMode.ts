/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * TLS mode. Must be `with_client_cert`.
 */

export type ObservabilityPipelineWebsocketSourceTlsWithClientCertMode =
  | typeof WITH_CLIENT_CERT
  | UnparsedObject;
export const WITH_CLIENT_CERT = "with_client_cert";
