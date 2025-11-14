import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionQueryWithoutRelationships } from "./RestrictionQueryWithoutRelationships";

/**
 * Response containing information about multiple restriction queries.
 */
export class RestrictionQueryListResponse {
  /**
   * Array of returned restriction queries.
   */
  "data"?: Array<RestrictionQueryWithoutRelationships>;
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
      type: "Array<RestrictionQueryWithoutRelationships>",
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
    return RestrictionQueryListResponse.attributeTypeMap;
  }

  public constructor() {}
}
