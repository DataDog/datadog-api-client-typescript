import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeatAssignmentsDataType } from "./SeatAssignmentsDataType";
import { UnassignSeatsUserRequestDataAttributes } from "./UnassignSeatsUserRequestDataAttributes";

export class UnassignSeatsUserRequestData {
  "attributes": UnassignSeatsUserRequestDataAttributes;
  /**
   * The ID of the unassign seats user request.
   */
  "id"?: string;
  /**
   * Seat assignments resource type.
   */
  "type": SeatAssignmentsDataType;
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
      type: "UnassignSeatsUserRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SeatAssignmentsDataType",
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
    return UnassignSeatsUserRequestData.attributeTypeMap;
  }

  public constructor() {}
}
