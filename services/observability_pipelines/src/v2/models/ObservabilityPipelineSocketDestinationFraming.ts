import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSocketDestinationFramingBytes } from "./ObservabilityPipelineSocketDestinationFramingBytes";
import { ObservabilityPipelineSocketDestinationFramingCharacterDelimited } from "./ObservabilityPipelineSocketDestinationFramingCharacterDelimited";
import { ObservabilityPipelineSocketDestinationFramingNewlineDelimited } from "./ObservabilityPipelineSocketDestinationFramingNewlineDelimited";

/**
 * Framing method configuration.
 */
export type ObservabilityPipelineSocketDestinationFraming =
  | ObservabilityPipelineSocketDestinationFramingNewlineDelimited
  | ObservabilityPipelineSocketDestinationFramingBytes
  | ObservabilityPipelineSocketDestinationFramingCharacterDelimited
  | UnparsedObject;
