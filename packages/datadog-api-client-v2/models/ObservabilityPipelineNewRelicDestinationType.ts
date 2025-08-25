/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The destination type. The value should always be `new_relic`.
 */

export type ObservabilityPipelineNewRelicDestinationType =
  | typeof NEW_RELIC
  | UnparsedObject;
export const NEW_RELIC = "new_relic";
