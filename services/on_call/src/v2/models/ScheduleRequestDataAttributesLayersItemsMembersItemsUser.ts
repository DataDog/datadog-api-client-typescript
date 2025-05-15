import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Identifies the user participating in this layer as a single object with an `id`.
 */
export class ScheduleRequestDataAttributesLayersItemsMembersItemsUser {
  /**
   * The user's ID.
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
    return ScheduleRequestDataAttributesLayersItemsMembersItemsUser.attributeTypeMap;
  }

  public constructor() {}
}
