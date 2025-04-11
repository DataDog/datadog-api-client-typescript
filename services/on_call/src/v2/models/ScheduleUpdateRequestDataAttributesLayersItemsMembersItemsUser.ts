import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Identifies the user who is assigned to this member object. Only `id` is required.
 */
export class ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser {
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
    return ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser.attributeTypeMap;
  }

  public constructor() {}
}
