/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of input to generate the proposed rule from: `natural_language` for a
 * plain-English description of the behavior to detect, `spl` for a Splunk SPL search or
 * saved search definition, or `kql` for a Microsoft KQL query. SPL inputs must be
 * self-contained, with search macros expanded.
 */

export type SecurityMonitoringRuleProposalInputType =
  | typeof NATURAL_LANGUAGE
  | typeof SPL
  | typeof KQL
  | UnparsedObject;
export const NATURAL_LANGUAGE = "natural_language";
export const SPL = "spl";
export const KQL = "kql";
