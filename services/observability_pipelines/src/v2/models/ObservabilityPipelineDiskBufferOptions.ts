import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptionsDiskType } from "./ObservabilityPipelineBufferOptionsDiskType";

/**
 * Options for configuring a disk buffer.
 */
export class ObservabilityPipelineDiskBufferOptions {
  /**
   * Maximum size of the disk buffer.
   */
  "maxSize"?: number;
  /**
   * Specifies the buffer type to configure. This option supports only a disk buffer.
   */
  "type"?: ObservabilityPipelineBufferOptionsDiskType;
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
      type: "ObservabilityPipelineBufferOptionsDiskType",
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
