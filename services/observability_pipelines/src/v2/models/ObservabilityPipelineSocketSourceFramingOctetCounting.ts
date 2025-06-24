import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSocketSourceFramingOctetCountingMethod } from "./ObservabilityPipelineSocketSourceFramingOctetCountingMethod";

/**
 * Byte frames according to the octet counting format as per RFC6587.
 */
export class ObservabilityPipelineSocketSourceFramingOctetCounting {
  /**
   * Byte frames according to the octet counting format as per RFC6587.
   */
  "method": ObservabilityPipelineSocketSourceFramingOctetCountingMethod;
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
      type: "ObservabilityPipelineSocketSourceFramingOctetCountingMethod",
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
    return ObservabilityPipelineSocketSourceFramingOctetCounting.attributeTypeMap;
  }

  public constructor() {}
}
