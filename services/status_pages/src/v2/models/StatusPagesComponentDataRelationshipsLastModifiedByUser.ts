import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentDataRelationshipsLastModifiedByUserData } from "./StatusPagesComponentDataRelationshipsLastModifiedByUserData";

export class StatusPagesComponentDataRelationshipsLastModifiedByUser {
  "data": StatusPagesComponentDataRelationshipsLastModifiedByUserData;
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
      type: "StatusPagesComponentDataRelationshipsLastModifiedByUserData",
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
    return StatusPagesComponentDataRelationshipsLastModifiedByUser.attributeTypeMap;
  }

  public constructor() {}
}
