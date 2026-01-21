import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageDataAttributes } from "./StatusPageDataAttributes";
import { StatusPageDataRelationships } from "./StatusPageDataRelationships";
import { StatusPageDataType } from "./StatusPageDataType";

export class StatusPageData {
  /**
   * The attributes of a status page.
   */
  "attributes"?: StatusPageDataAttributes;
  /**
   * The ID of the status page.
   */
  "id"?: string;
  /**
   * The relationships of a status page.
   */
  "relationships"?: StatusPageDataRelationships;
  /**
   * Status pages resource type.
   */
  "type": StatusPageDataType;
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
      type: "StatusPageDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "StatusPageDataRelationships",
    },
    type: {
      baseName: "type",
      type: "StatusPageDataType",
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
    return StatusPageData.attributeTypeMap;
  }

  public constructor() {}
}
