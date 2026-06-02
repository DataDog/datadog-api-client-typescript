import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumHardcodedRetentionFilterData } from "./RumHardcodedRetentionFilterData";

/**
 * A hardcoded retention filter response body.
 */
export class RumHardcodedRetentionFilterResponse {
  /**
   * A hardcoded retention filter.
   */
  "data"?: RumHardcodedRetentionFilterData;
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
      type: "RumHardcodedRetentionFilterData",
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
    return RumHardcodedRetentionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
