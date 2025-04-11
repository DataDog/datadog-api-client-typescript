import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser } from "./ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser";

/**
 * Defines a single member within a schedule layer, including the reference to the underlying user.
 */
export class ScheduleCreateRequestDataAttributesLayersItemsMembersItems {
  /**
   * Identifies the user participating in this layer as a single object with an `id`.
   */
  "user"?: ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser;
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
      type: "ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser",
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
    return ScheduleCreateRequestDataAttributesLayersItemsMembersItems.attributeTypeMap;
  }

  public constructor() {}
}
