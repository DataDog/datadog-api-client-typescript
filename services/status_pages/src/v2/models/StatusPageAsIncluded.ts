import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageAsIncludedAttributes } from "./StatusPageAsIncludedAttributes";
import { StatusPageAsIncludedRelationships } from "./StatusPageAsIncludedRelationships";
import { StatusPageDataType } from "./StatusPageDataType";

/**
 * The included status page resource.
 */
export class StatusPageAsIncluded {
  /**
   * The attributes of a status page.
   */
  "attributes"?: StatusPageAsIncludedAttributes;
  /**
   * The ID of the status page.
   */
  "id"?: string;
  /**
   * The relationships of a status page.
   */
  "relationships"?: StatusPageAsIncludedRelationships;
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
      type: "StatusPageAsIncludedAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "StatusPageAsIncludedRelationships",
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
    return StatusPageAsIncluded.attributeTypeMap;
  }

  public constructor() {}
}
