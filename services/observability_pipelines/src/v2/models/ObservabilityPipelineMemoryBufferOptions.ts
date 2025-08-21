import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptionsMemoryType } from "./ObservabilityPipelineBufferOptionsMemoryType";

/**
 * Options for configuring a memory buffer by byte size.
 */
export class ObservabilityPipelineMemoryBufferOptions {
  /**
   * Maximum size of the disk buffer.
   */
  "maxSize"?: number;
  /**
   * Specifies the buffer type to configure. This option supports only a memory buffer.
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
    maxSize: {
      baseName: "max_size",
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
    return ObservabilityPipelineMemoryBufferOptions.attributeTypeMap;
  }

  public constructor() {}
}
