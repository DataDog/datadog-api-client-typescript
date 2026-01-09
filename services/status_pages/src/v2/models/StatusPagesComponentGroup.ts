import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentGroupAttributes } from "./StatusPagesComponentGroupAttributes";
import { StatusPagesComponentGroupRelationships } from "./StatusPagesComponentGroupRelationships";
import { StatusPagesComponentGroupType } from "./StatusPagesComponentGroupType";

export class StatusPagesComponentGroup {
  "attributes"?: StatusPagesComponentGroupAttributes;
  "id"?: string;
  "relationships"?: StatusPagesComponentGroupRelationships;
  /**
   * Components resource type.
   */
  "type": StatusPagesComponentGroupType;
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
    attributes: {
      baseName: "attributes",
      type: "StatusPagesComponentGroupAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "StatusPagesComponentGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "StatusPagesComponentGroupType",
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
    return StatusPagesComponentGroup.attributeTypeMap;
  }

  public constructor() {}
}
