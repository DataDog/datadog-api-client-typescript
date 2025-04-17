import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsersType } from "./UsersType";

/**
 * Data for the user who created the monitor notification rule.
 */
export class MonitorNotificationRuleRelationshipsCreatedByData {
  /**
   * User ID of the monitor notification rule creator.
   */
  "id"?: string;
  /**
   * Users resource type.
   */
  "type"?: UsersType;
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
    type: {
      baseName: "type",
      type: "UsersType",
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
    return MonitorNotificationRuleRelationshipsCreatedByData.attributeTypeMap;
  }

  public constructor() {}
}
