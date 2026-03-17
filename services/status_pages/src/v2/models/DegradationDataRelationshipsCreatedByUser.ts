import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationDataRelationshipsCreatedByUserData } from "./DegradationDataRelationshipsCreatedByUserData";

/**
 * The Datadog user who created the degradation.
 */
export class DegradationDataRelationshipsCreatedByUser {
  /**
   * The data object identifying the Datadog user who created the degradation.
   */
  "data": DegradationDataRelationshipsCreatedByUserData;
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
      type: "DegradationDataRelationshipsCreatedByUserData",
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
    return DegradationDataRelationshipsCreatedByUser.attributeTypeMap;
  }

  public constructor() {}
}
