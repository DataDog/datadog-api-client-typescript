import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the packet loss percentage assertion.
 */
export type SyntheticsNetworkAssertionPacketLossPercentageType =
  | typeof PACKET_LOSS_PERCENTAGE
  | UnparsedObject;
export const PACKET_LOSS_PERCENTAGE = "packetLossPercentage";
