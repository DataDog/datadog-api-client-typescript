/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Type of the assertion.
 */

export type SyntheticsAssertionType =
  | typeof BODY
  | typeof HEADER
  | typeof STATUS_CODE
  | typeof CERTIFICATE
  | typeof RESPONSE_TIME
  | typeof PROPERTY
  | typeof RECORD_EVERY
  | typeof RECORD_SOME
  | typeof TLS_VERSION
  | typeof MIN_TLS_VERSION
  | typeof LATENCY
  | typeof PACKET_LOSS_PERCENTAGE
  | typeof PACKETS_RECEIVED
  | typeof NETWORK_HOP
  | typeof RECEIVED_MESSAGE
  | typeof GRPC_HEALTHCHECK_STATUS
  | typeof CONNECTION;
export const BODY = "body";
export const HEADER = "header";
export const STATUS_CODE = "statusCode";
export const CERTIFICATE = "certificate";
export const RESPONSE_TIME = "responseTime";
export const PROPERTY = "property";
export const RECORD_EVERY = "recordEvery";
export const RECORD_SOME = "recordSome";
export const TLS_VERSION = "tlsVersion";
export const MIN_TLS_VERSION = "minTlsVersion";
export const LATENCY = "latency";
export const PACKET_LOSS_PERCENTAGE = "packetLossPercentage";
export const PACKETS_RECEIVED = "packetsReceived";
export const NETWORK_HOP = "networkHop";
export const RECEIVED_MESSAGE = "receivedMessage";
export const GRPC_HEALTHCHECK_STATUS = "grpcHealthcheckStatus";
export const CONNECTION = "connection";
