import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsersType } from "./UsersType";

/**
 * Data for the user who created the downtime.
 */
export class DowntimeRelationshipsCreatedByData {
  /**
   * User ID of the downtime creator.
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
    return DowntimeRelationshipsCreatedByData.attributeTypeMap;
  }

  public constructor() {}
}
