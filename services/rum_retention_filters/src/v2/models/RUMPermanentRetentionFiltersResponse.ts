import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMPermanentRetentionFilterData } from "./RUMPermanentRetentionFilterData";

/**
 * All permanent RUM retention filters for a RUM application.
 */
export class RUMPermanentRetentionFiltersResponse {
  /**
   * A list of permanent RUM retention filters.
   */
  "data"?: Array<RUMPermanentRetentionFilterData>;
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
      type: "Array<RUMPermanentRetentionFilterData>",
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
    return RUMPermanentRetentionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
