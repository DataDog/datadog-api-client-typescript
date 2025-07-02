/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSocketDestinationFramingBytes } from "./ObservabilityPipelineSocketDestinationFramingBytes";
import { ObservabilityPipelineSocketDestinationFramingCharacterDelimited } from "./ObservabilityPipelineSocketDestinationFramingCharacterDelimited";
import { ObservabilityPipelineSocketDestinationFramingNewlineDelimited } from "./ObservabilityPipelineSocketDestinationFramingNewlineDelimited";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Framing method configuration.
 */

export type ObservabilityPipelineSocketDestinationFraming =
  | ObservabilityPipelineSocketDestinationFramingNewlineDelimited
  | ObservabilityPipelineSocketDestinationFramingBytes
  | ObservabilityPipelineSocketDestinationFramingCharacterDelimited
  | UnparsedObject;
