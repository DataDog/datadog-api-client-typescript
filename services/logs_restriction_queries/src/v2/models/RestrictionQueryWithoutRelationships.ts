import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionQueryAttributes } from "./RestrictionQueryAttributes";

/**
 * Restriction query object returned by the API.
 */
export class RestrictionQueryWithoutRelationships {
  /**
   * Attributes of the restriction query.
   */
  "attributes"?: RestrictionQueryAttributes;
  /**
   * ID of the restriction query.
   */
  "id"?: string;
  /**
   * Restriction queries type.
   */
  "type"?: string;
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
      type: "RestrictionQueryAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return RestrictionQueryWithoutRelationships.attributeTypeMap;
  }

  public constructor() {}
}
