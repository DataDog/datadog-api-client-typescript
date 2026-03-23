import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A key-value pair representing a tag associated with a Datadog Agent.
 */
export class FleetAgentAttributesTagsItems {
  /**
   * The tag key.
   */
  "key"?: string;
  /**
   * The tag value.
   */
  "value"?: string;
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
    key: {
      baseName: "key",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "string",
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
    return FleetAgentAttributesTagsItems.attributeTypeMap;
  }

  public constructor() {}
}
