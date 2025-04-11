import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * JSON object of event system attributes.
 */
export class EventCreateResponseAttributesAttributesEvt {
  /**
   * Event id
   */
  "id"?: string;
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
    return EventCreateResponseAttributesAttributesEvt.attributeTypeMap;
  }

  public constructor() {}
}
