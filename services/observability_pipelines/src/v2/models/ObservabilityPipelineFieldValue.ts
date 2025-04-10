import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Represents a static key-value pair used in various processors.
 */
export class ObservabilityPipelineFieldValue {
  /**
   * The field name.
   */
  "name": string;
  /**
   * The field value.
   */
  "value": string;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineFieldValue.attributeTypeMap;
  }

  public constructor() {}
}
