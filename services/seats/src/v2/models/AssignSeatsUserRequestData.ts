import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssignSeatsUserRequestDataAttributes } from "./AssignSeatsUserRequestDataAttributes";
import { SeatAssignmentsDataType } from "./SeatAssignmentsDataType";

export class AssignSeatsUserRequestData {
  "attributes"?: AssignSeatsUserRequestDataAttributes;
  /**
   * The ID of the assign seats user request.
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
      type: "AssignSeatsUserRequestDataAttributes",
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
    return AssignSeatsUserRequestData.attributeTypeMap;
  }

  public constructor() {}
}
