import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSocketDestinationFramingBytesMethod } from "./ObservabilityPipelineSocketDestinationFramingBytesMethod";

/**
 * Event data is not delimited at all.
 */
export class ObservabilityPipelineSocketDestinationFramingBytes {
  /**
   * The definition of `ObservabilityPipelineSocketDestinationFramingBytesMethod` object.
   */
  "method": ObservabilityPipelineSocketDestinationFramingBytesMethod;
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
      type: "ObservabilityPipelineSocketDestinationFramingBytesMethod",
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
    return ObservabilityPipelineSocketDestinationFramingBytes.attributeTypeMap;
  }

  public constructor() {}
}
