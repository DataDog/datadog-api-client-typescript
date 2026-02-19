import { UnparsedObject } from "@datadog/datadog-api-client";

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
  | typeof GRPC_METADATA
  | typeof GRPC_PROTO
  | typeof CONNECTION
  | typeof MULTI_NETWORK_HOP
  | typeof JITTER
  | UnparsedObject;
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
export const GRPC_METADATA = "grpcMetadata";
export const GRPC_PROTO = "grpcProto";
export const CONNECTION = "connection";
export const MULTI_NETWORK_HOP = "multiNetworkHop";
export const JITTER = "jitter";
