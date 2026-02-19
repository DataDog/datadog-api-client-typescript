/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsNetworkAssertionJitter } from "./SyntheticsNetworkAssertionJitter";
import { SyntheticsNetworkAssertionLatency } from "./SyntheticsNetworkAssertionLatency";
import { SyntheticsNetworkAssertionMultiNetworkHop } from "./SyntheticsNetworkAssertionMultiNetworkHop";
import { SyntheticsNetworkAssertionPacketLossPercentage } from "./SyntheticsNetworkAssertionPacketLossPercentage";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Object describing an assertion for a Network Path test.
 */

export type SyntheticsNetworkAssertion =
  | SyntheticsNetworkAssertionLatency
  | SyntheticsNetworkAssertionMultiNetworkHop
  | SyntheticsNetworkAssertionPacketLossPercentage
  | SyntheticsNetworkAssertionJitter
  | UnparsedObject;
