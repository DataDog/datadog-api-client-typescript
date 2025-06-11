import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * JSON object of event system attributes.
 */
export class EventCreateResponseAttributesAttributesEvt {
  /**
   * Event identifier. This field is deprecated and will be removed in a future version. Use the `uid` field instead.
   */
  "id"?: string;
  /**
   * A unique identifier for the event. You can use this identifier to query or reference the event.
   */
  "uid"?: string;
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
    uid: {
      baseName: "uid",
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
