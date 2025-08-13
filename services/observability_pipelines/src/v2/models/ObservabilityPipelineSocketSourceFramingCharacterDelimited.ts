import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod } from "./ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod";

/**
 * Byte frames which are delimited by a chosen character.
 */
export class ObservabilityPipelineSocketSourceFramingCharacterDelimited {
  /**
   * A single ASCII character used to delimit events.
   */
  "delimiter": string;
  /**
   * Byte frames which are delimited by a chosen character.
   */
  "method": ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod;
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
    delimiter: {
      baseName: "delimiter",
      type: "string",
      required: true,
    },
    method: {
      baseName: "method",
      type: "ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod",
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
    return ObservabilityPipelineSocketSourceFramingCharacterDelimited.attributeTypeMap;
  }

  public constructor() {}
}
