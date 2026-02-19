import { UnparsedObject } from "@datadog/datadog-api-client";

import { SyntheticsNetworkAssertionJitter } from "./SyntheticsNetworkAssertionJitter";
import { SyntheticsNetworkAssertionLatency } from "./SyntheticsNetworkAssertionLatency";
import { SyntheticsNetworkAssertionMultiNetworkHop } from "./SyntheticsNetworkAssertionMultiNetworkHop";
import { SyntheticsNetworkAssertionPacketLossPercentage } from "./SyntheticsNetworkAssertionPacketLossPercentage";

/**
 * Object describing an assertion for a Network Path test.
 */
export type SyntheticsNetworkAssertion =
  | SyntheticsNetworkAssertionLatency
  | SyntheticsNetworkAssertionMultiNetworkHop
  | SyntheticsNetworkAssertionPacketLossPercentage
  | SyntheticsNetworkAssertionJitter
  | UnparsedObject;
