import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeatUserDataAttributes } from "./SeatUserDataAttributes";
import { SeatUserDataType } from "./SeatUserDataType";

/**
 * A seat user resource object containing its ID, type, and associated attributes.
 */
export class SeatUserData {
  /**
   * Attributes of a user assigned to a seat, including their email, name, and assignment timestamp.
   */
  "attributes"?: SeatUserDataAttributes;
  /**
   * The ID of the seat user.
   */
  "id"?: string;
  /**
   * Seat users resource type.
   */
  "type"?: SeatUserDataType;
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
      type: "SeatUserDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SeatUserDataType",
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
    return SeatUserData.attributeTypeMap;
  }

  public constructor() {}
}
