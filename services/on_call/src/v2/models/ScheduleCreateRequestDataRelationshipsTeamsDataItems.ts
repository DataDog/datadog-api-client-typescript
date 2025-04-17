import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleCreateRequestDataRelationshipsTeamsDataItemsType } from "./ScheduleCreateRequestDataRelationshipsTeamsDataItemsType";

/**
 * Holds the relationship data linking this schedule to a particular team,
 * identified by `id` and `type`.
 */
export class ScheduleCreateRequestDataRelationshipsTeamsDataItems {
  /**
   * A unique identifier for the team.
   */
  "id": string;
  /**
   * Teams resource type.
   */
  "type": ScheduleCreateRequestDataRelationshipsTeamsDataItemsType;
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
    type: {
      baseName: "type",
      type: "ScheduleCreateRequestDataRelationshipsTeamsDataItemsType",
      required: true,
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
    return ScheduleCreateRequestDataRelationshipsTeamsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
