import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationUpdateDataRelationshipsDegradationData } from "./DegradationUpdateDataRelationshipsDegradationData";

/**
 * The degradation relationship of a degradation update.
 */
export class DegradationUpdateDataRelationshipsDegradation {
  /**
   * The degradation linked to a degradation update.
   */
  "data": DegradationUpdateDataRelationshipsDegradationData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "DegradationUpdateDataRelationshipsDegradationData",
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
    return DegradationUpdateDataRelationshipsDegradation.attributeTypeMap;
  }

  public constructor() {}
}
