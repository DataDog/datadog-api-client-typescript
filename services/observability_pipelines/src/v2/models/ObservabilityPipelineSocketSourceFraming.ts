import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSocketSourceFramingBytes } from "./ObservabilityPipelineSocketSourceFramingBytes";
import { ObservabilityPipelineSocketSourceFramingCharacterDelimited } from "./ObservabilityPipelineSocketSourceFramingCharacterDelimited";
import { ObservabilityPipelineSocketSourceFramingChunkedGelf } from "./ObservabilityPipelineSocketSourceFramingChunkedGelf";
import { ObservabilityPipelineSocketSourceFramingNewlineDelimited } from "./ObservabilityPipelineSocketSourceFramingNewlineDelimited";
import { ObservabilityPipelineSocketSourceFramingOctetCounting } from "./ObservabilityPipelineSocketSourceFramingOctetCounting";

/**
 * Framing method configuration for the socket source.
 */
export type ObservabilityPipelineSocketSourceFraming =
  | ObservabilityPipelineSocketSourceFramingNewlineDelimited
  | ObservabilityPipelineSocketSourceFramingBytes
  | ObservabilityPipelineSocketSourceFramingCharacterDelimited
  | ObservabilityPipelineSocketSourceFramingOctetCounting
  | ObservabilityPipelineSocketSourceFramingChunkedGelf
  | UnparsedObject;
