import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateComponentRequestDataAttributes } from "./CreateComponentRequestDataAttributes";
import { CreateComponentRequestDataRelationships } from "./CreateComponentRequestDataRelationships";
import { StatusPagesComponentGroupType } from "./StatusPagesComponentGroupType";

export class CreateComponentRequestData {
  /**
   * The supported attributes for creating a component.
   */
  "attributes"?: CreateComponentRequestDataAttributes;
  /**
   * The supported relationships for creating a component.
   */
  "relationships"?: CreateComponentRequestDataRelationships;
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
      type: "CreateComponentRequestDataAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "CreateComponentRequestDataRelationships",
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
    return CreateComponentRequestData.attributeTypeMap;
  }

  public constructor() {}
}
