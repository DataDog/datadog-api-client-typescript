/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Protocol used by the syslog source to receive messages.
 */

export type ObservabilityPipelineSyslogSourceMode =
  | typeof TCP
  | typeof UDP
  | UnparsedObject;
export const TCP = "tcp";
export const UDP = "udp";
