/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineWebsocketSourceTlsEnabled } from "./ObservabilityPipelineWebsocketSourceTlsEnabled";
import { ObservabilityPipelineWebsocketSourceTlsWithClientCert } from "./ObservabilityPipelineWebsocketSourceTlsWithClientCert";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * TLS configuration for the WebSocket source. Use `enabled` for standard `wss://` connections, or `with_client_cert` to present a client certificate for mutual TLS.
 */

export type ObservabilityPipelineWebsocketSourceTls =
  | ObservabilityPipelineWebsocketSourceTlsEnabled
  | ObservabilityPipelineWebsocketSourceTlsWithClientCert
  | UnparsedObject;
