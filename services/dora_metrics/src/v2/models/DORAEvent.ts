import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A DORA event.
 */
export class DORAEvent {
  /**
   * The attributes of the event.
   */
  "attributes"?: any;
  /**
   * The ID of the event.
   */
  "id"?: string;
  /**
   * The type of the event.
   */
  "type"?: string;
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
    attributes: {
      baseName: "attributes",
      type: "any",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return DORAEvent.attributeTypeMap;
  }

  public constructor() {}
}
