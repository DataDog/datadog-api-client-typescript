import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionFilterData } from "./RumRetentionFilterData";

/**
 * All RUM retention filters for a RUM application.
 */
export class RumRetentionFiltersResponse {
  /**
   * A list of RUM retention filters.
   */
  "data"?: Array<RumRetentionFilterData>;
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
      type: "Array<RumRetentionFilterData>",
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
    return RumRetentionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
