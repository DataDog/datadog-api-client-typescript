import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationDataRelationshipsLastModifiedByUserData } from "./DegradationDataRelationshipsLastModifiedByUserData";

export class DegradationDataRelationshipsLastModifiedByUser {
  "data": DegradationDataRelationshipsLastModifiedByUserData;
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
      type: "DegradationDataRelationshipsLastModifiedByUserData",
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
    return DegradationDataRelationshipsLastModifiedByUser.attributeTypeMap;
  }

  public constructor() {}
}
