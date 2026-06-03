import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageSummaryAvailableFieldsBody } from "./UsageSummaryAvailableFieldsBody";

/**
 * Response listing every field name returned by `GET /api/v1/usage/summary`
 * at each of its three response levels. Includes both typed fields and untyped
 * `additionalProperties` keys.
 */
export class UsageSummaryAvailableFieldsResponse {
  /**
   * Available-fields data.
   */
  "data"?: UsageSummaryAvailableFieldsBody;
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
      type: "UsageSummaryAvailableFieldsBody",
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
    return UsageSummaryAvailableFieldsResponse.attributeTypeMap;
  }

  public constructor() {}
}
