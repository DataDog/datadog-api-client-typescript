import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptionsDiskType } from "./ObservabilityPipelineBufferOptionsDiskType";
import { ObservabilityPipelineBufferOptionsWhenFull } from "./ObservabilityPipelineBufferOptionsWhenFull";

/**
 * Options for configuring a disk buffer.
 */
export class ObservabilityPipelineDiskBufferOptions {
  /**
   * Maximum size of the disk buffer.
   */
  "maxSize": number;
  /**
   * The type of the buffer that will be configured, a disk buffer.
   */
  "type"?: ObservabilityPipelineBufferOptionsDiskType;
  /**
   * Behavior when the buffer is full (block and stop accepting new events, or drop new events)
   */
  "whenFull"?: ObservabilityPipelineBufferOptionsWhenFull;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    maxSize: {
      baseName: "max_size",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineBufferOptionsDiskType",
    },
    whenFull: {
      baseName: "when_full",
      type: "ObservabilityPipelineBufferOptionsWhenFull",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineDiskBufferOptions.attributeTypeMap;
  }

  public constructor() {}
}
