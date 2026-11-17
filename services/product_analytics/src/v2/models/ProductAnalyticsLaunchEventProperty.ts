import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A reference from an event to a property of the tracking plan.
 */
export class ProductAnalyticsLaunchEventProperty {
  /**
   * ID of a property in the tracking plan `properties`.
   */
  "id": string;
  /**
   * Whether the event must always include the property.
   */
  "required"?: boolean;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    required: {
      baseName: "required",
      type: "boolean",
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
    return ProductAnalyticsLaunchEventProperty.attributeTypeMap;
  }

  public constructor() {}
}
