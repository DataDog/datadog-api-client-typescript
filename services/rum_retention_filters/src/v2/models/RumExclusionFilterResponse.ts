import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumExclusionFilterData } from "./RumExclusionFilterData";

/**
 * An exclusion filter response body.
 */
export class RumExclusionFilterResponse {
  /**
   * An exclusion filter.
   */
  "data"?: RumExclusionFilterData;
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
      type: "RumExclusionFilterData",
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
    return RumExclusionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
