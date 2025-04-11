import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser } from "./ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser";

/**
 * Defines a single member within a layer during an update request, referring
 * to a specific user.
 */
export class ScheduleUpdateRequestDataAttributesLayersItemsMembersItems {
  /**
   * Identifies the user who is assigned to this member object. Only `id` is required.
   */
  "user"?: ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser;
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
    user: {
      baseName: "user",
      type: "ScheduleUpdateRequestDataAttributesLayersItemsMembersItemsUser",
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
    return ScheduleUpdateRequestDataAttributesLayersItemsMembersItems.attributeTypeMap;
  }

  public constructor() {}
}
