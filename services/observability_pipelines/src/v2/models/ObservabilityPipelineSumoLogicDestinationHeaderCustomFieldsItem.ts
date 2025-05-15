import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Single key-value pair used as a custom log header for Sumo Logic.
 */
export class ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem {
  /**
   * The header field name.
   */
  "name": string;
  /**
   * The header field value.
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem.attributeTypeMap;
  }

  public constructor() {}
}
