import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationUpdateDataRelationshipsUserData } from "./DegradationUpdateDataRelationshipsUserData";

/**
 * A user relationship of a degradation update.
 */
export class DegradationUpdateDataRelationshipsUser {
  /**
   * A Datadog user linked to a degradation update.
   */
  "data": DegradationUpdateDataRelationshipsUserData;
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
      type: "DegradationUpdateDataRelationshipsUserData",
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
    return DegradationUpdateDataRelationshipsUser.attributeTypeMap;
  }

  public constructor() {}
}
