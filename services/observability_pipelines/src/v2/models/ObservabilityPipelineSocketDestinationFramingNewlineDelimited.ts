import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSocketDestinationFramingNewlineDelimitedMethod } from "./ObservabilityPipelineSocketDestinationFramingNewlineDelimitedMethod";

/**
 * Each log event is delimited by a newline character.
 */
export class ObservabilityPipelineSocketDestinationFramingNewlineDelimited {
  /**
   * The definition of `ObservabilityPipelineSocketDestinationFramingNewlineDelimitedMethod` object.
   */
  "method": ObservabilityPipelineSocketDestinationFramingNewlineDelimitedMethod;
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
      type: "ObservabilityPipelineSocketDestinationFramingNewlineDelimitedMethod",
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
    return ObservabilityPipelineSocketDestinationFramingNewlineDelimited.attributeTypeMap;
  }

  public constructor() {}
}
