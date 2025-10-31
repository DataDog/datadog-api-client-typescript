import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseDataAttributes } from "./EntityResponseDataAttributes";
import { EntityResponseDataRelationships } from "./EntityResponseDataRelationships";
import { EntityResponseDataType } from "./EntityResponseDataType";

export class PreviewEntityResponseData {
  "attributes"?: EntityResponseDataAttributes;
  "id"?: string;
  "relationships"?: EntityResponseDataRelationships;
  /**
   * Entity resource type.
   */
  "type": EntityResponseDataType;
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
      type: "EntityResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "EntityResponseDataRelationships",
    },
    type: {
      baseName: "type",
      type: "EntityResponseDataType",
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
    return PreviewEntityResponseData.attributeTypeMap;
  }

  public constructor() {}
}
