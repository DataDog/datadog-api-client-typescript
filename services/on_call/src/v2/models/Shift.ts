import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ShiftData } from "./ShiftData";
import { ShiftIncluded } from "./ShiftIncluded";

/**
 * The definition of `Shift` object.
 */
export class Shift {
  /**
   * The definition of `ShiftData` object.
   */
  "data"?: ShiftData;
  /**
   * The `Shift` `included`.
   */
  "included"?: Array<ShiftIncluded>;
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
      type: "ShiftData",
    },
    included: {
      baseName: "included",
      type: "Array<ShiftIncluded>",
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
    return Shift.attributeTypeMap;
  }

  public constructor() {}
}
