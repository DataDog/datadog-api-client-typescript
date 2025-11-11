import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionQueryResponseIncludedItem } from "./RestrictionQueryResponseIncludedItem";
import { RestrictionQueryWithRelationships } from "./RestrictionQueryWithRelationships";

/**
 * Response containing information about a single restriction query.
 */
export class RestrictionQueryWithRelationshipsResponse {
  /**
   * Restriction query object returned by the API.
   */
  "data"?: RestrictionQueryWithRelationships;
  /**
   * Array of objects related to the restriction query.
   */
  "included"?: Array<RestrictionQueryResponseIncludedItem>;
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
      type: "RestrictionQueryWithRelationships",
    },
    included: {
      baseName: "included",
      type: "Array<RestrictionQueryResponseIncludedItem>",
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
    return RestrictionQueryWithRelationshipsResponse.attributeTypeMap;
  }

  public constructor() {}
}
