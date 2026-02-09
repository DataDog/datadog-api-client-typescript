import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeatUserData } from "./SeatUserData";
import { SeatUserMeta } from "./SeatUserMeta";

export class SeatUserDataArray {
  /**
   * The list of seat users.
   */
  "data": Array<SeatUserData>;
  "meta"?: SeatUserMeta;
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
    data: {
      baseName: "data",
      type: "Array<SeatUserData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SeatUserMeta",
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
    return SeatUserDataArray.attributeTypeMap;
  }

  public constructor() {}
}
