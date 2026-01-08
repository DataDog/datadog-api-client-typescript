import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateComponentRequestDataRelationshipsGroup } from "./CreateComponentRequestDataRelationshipsGroup";

export class CreateComponentRequestDataRelationships {
  "group"?: CreateComponentRequestDataRelationshipsGroup;
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
    group: {
      baseName: "group",
      type: "CreateComponentRequestDataRelationshipsGroup",
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
    return CreateComponentRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
