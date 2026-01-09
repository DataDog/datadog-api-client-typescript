import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentDataRelationshipsGroupData } from "./StatusPagesComponentDataRelationshipsGroupData";

export class StatusPagesComponentDataRelationshipsGroup {
  "data": StatusPagesComponentDataRelationshipsGroupData;
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
      type: "StatusPagesComponentDataRelationshipsGroupData",
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
    return StatusPagesComponentDataRelationshipsGroup.attributeTypeMap;
  }

  public constructor() {}
}
