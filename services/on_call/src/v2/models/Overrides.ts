import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OverrideData } from "./OverrideData";
import { OverrideIncluded } from "./OverrideIncluded";

/**
 * A list of on-call schedule overrides and any related included resources (such as users).
 */
export class Overrides {
  /**
   * A list of on-call schedule overrides.
   */
  "data": Array<OverrideData>;
  /**
   * Related resources referenced in the overrides' relationships, such as users.
   */
  "included"?: Array<OverrideIncluded>;
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
      type: "Array<OverrideData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<OverrideIncluded>",
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
    return Overrides.attributeTypeMap;
  }

  public constructor() {}
}
