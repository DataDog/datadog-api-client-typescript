/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The destination type. The value should always be `google_chronicle`.
 */

export type ObservabilityPipelineGoogleChronicleDestinationType =
  | typeof GOOGLE_CHRONICLE
  | UnparsedObject;
export const GOOGLE_CHRONICLE = "google_chronicle";
