import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptionsMemoryType } from "./ObservabilityPipelineBufferOptionsMemoryType";

/**
 * Options for configuring a memory buffer by queue length.
 */
export class ObservabilityPipelineMemoryBufferSizeOptions {
  /**
   * The `ObservabilityPipelineMemoryBufferSizeOptions` `max_events`.
   */
  "maxEvents"?: number;
  /**
   * The type of the buffer that will be configured, a memory buffer.
   */
  "type"?: ObservabilityPipelineBufferOptionsMemoryType;
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
    maxEvents: {
      baseName: "max_events",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineBufferOptionsMemoryType",
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
    return ObservabilityPipelineMemoryBufferSizeOptions.attributeTypeMap;
  }

  public constructor() {}
}
