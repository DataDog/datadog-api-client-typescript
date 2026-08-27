/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The Splunk HEC endpoint to send events to. Use `event` to send structured events to the `/event` endpoint, or `raw` to send the raw message to the `/raw` endpoint.
 */

export type ObservabilityPipelineSplunkHecDestinationEndpointTarget =
  | typeof EVENT
  | typeof RAW
  | UnparsedObject;
export const EVENT = "event";
export const RAW = "raw";
