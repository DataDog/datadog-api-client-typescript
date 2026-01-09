import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageDataRelationshipsLastModifiedByUserData } from "./StatusPageDataRelationshipsLastModifiedByUserData";

export class StatusPageDataRelationshipsLastModifiedByUser {
  "data": StatusPageDataRelationshipsLastModifiedByUserData;
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
      type: "StatusPageDataRelationshipsLastModifiedByUserData",
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
    return StatusPageDataRelationshipsLastModifiedByUser.attributeTypeMap;
  }

  public constructor() {}
}
