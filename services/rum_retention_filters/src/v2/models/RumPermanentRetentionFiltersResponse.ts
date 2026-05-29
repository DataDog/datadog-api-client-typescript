import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumPermanentRetentionFilterData } from "./RumPermanentRetentionFilterData";

/**
 * All permanent RUM retention filters for a RUM application.
 */
export class RumPermanentRetentionFiltersResponse {
  /**
   * A list of permanent RUM retention filters.
   */
  "data"?: Array<RumPermanentRetentionFilterData>;
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
      type: "Array<RumPermanentRetentionFilterData>",
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
    return RumPermanentRetentionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
