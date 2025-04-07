import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSTagFilter } from "./AWSTagFilter";

/**
 * An array of tag filter rules by `namespace` and tag filter string.
 */
export class AWSTagFilterListResponse {
  /**
   * An array of tag filters.
   */
  "filters"?: Array<AWSTagFilter>;
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
    filters: {
      baseName: "filters",
      type: "Array<AWSTagFilter>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSTagFilterListResponse.attributeTypeMap;
  }

  public constructor() {}
}
