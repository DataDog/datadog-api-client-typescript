/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The source type. Always `splunk_tcp`.
 */

export type ObservabilityPipelineSplunkTcpSourceType =
  | typeof SPLUNK_TCP
  | UnparsedObject;
export const SPLUNK_TCP = "splunk_tcp";
