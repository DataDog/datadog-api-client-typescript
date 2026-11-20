import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMExclusionFilterData } from "./RUMExclusionFilterData";

/**
 * An exclusion filter response body.
 */
export class RUMExclusionFilterResponse {
  /**
   * An exclusion filter.
   */
  "data"?: RUMExclusionFilterData;
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
      type: "RUMExclusionFilterData",
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
    return RUMExclusionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
