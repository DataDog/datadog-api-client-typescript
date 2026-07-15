import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleOnCallResponderDataRelationshipsShiftsDataItemsType } from "./ScheduleOnCallResponderDataRelationshipsShiftsDataItemsType";

/**
 * Represents a reference to one of the shifts satisfying this responder group's position.
 */
export class ScheduleOnCallResponderDataRelationshipsShiftsDataItems {
  /**
   * Unique identifier of the shift.
   */
  "id": string;
  /**
   * Indicates that the related resource is of type `shifts`.
   */
  "type": ScheduleOnCallResponderDataRelationshipsShiftsDataItemsType;
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
      type: "ScheduleOnCallResponderDataRelationshipsShiftsDataItemsType",
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
    return ScheduleOnCallResponderDataRelationshipsShiftsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
