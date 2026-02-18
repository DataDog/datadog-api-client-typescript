import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssignSeatsUserResponseDataAttributes } from "./AssignSeatsUserResponseDataAttributes";
import { SeatAssignmentsDataType } from "./SeatAssignmentsDataType";

export class AssignSeatsUserResponseData {
  "attributes"?: AssignSeatsUserResponseDataAttributes;
  /**
   * The ID of the assign seats user response.
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
      type: "AssignSeatsUserResponseDataAttributes",
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
    return AssignSeatsUserResponseData.attributeTypeMap;
  }

  public constructor() {}
}
