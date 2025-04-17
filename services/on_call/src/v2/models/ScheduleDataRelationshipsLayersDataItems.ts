import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleDataRelationshipsLayersDataItemsType } from "./ScheduleDataRelationshipsLayersDataItemsType";

/**
 * Relates a layer to this schedule, identified by `id` and `type` (must be `layers`).
 */
export class ScheduleDataRelationshipsLayersDataItems {
  /**
   * The unique identifier of the layer in this relationship.
   */
  "id": string;
  /**
   * Layers resource type.
   */
  "type": ScheduleDataRelationshipsLayersDataItemsType;
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
      type: "ScheduleDataRelationshipsLayersDataItemsType",
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
    return ScheduleDataRelationshipsLayersDataItems.attributeTypeMap;
  }

  public constructor() {}
}
