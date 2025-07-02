import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSocketSourceFramingChunkedGelfMethod } from "./ObservabilityPipelineSocketSourceFramingChunkedGelfMethod";

/**
 * Byte frames which are chunked GELF messages.
 */
export class ObservabilityPipelineSocketSourceFramingChunkedGelf {
  /**
   * Byte frames which are chunked GELF messages.
   */
  "method": ObservabilityPipelineSocketSourceFramingChunkedGelfMethod;
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
    method: {
      baseName: "method",
      type: "ObservabilityPipelineSocketSourceFramingChunkedGelfMethod",
      required: true,
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
    return ObservabilityPipelineSocketSourceFramingChunkedGelf.attributeTypeMap;
  }

  public constructor() {}
}
