import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporalCloudOpenMetricsIntegrationAccountResponseData } from "./TemporalCloudOpenMetricsIntegrationAccountResponseData";

/**
 * Response payload for a list of Temporal Cloud OpenMetrics integration accounts.
 */
export class TemporalCloudOpenMetricsIntegrationAccountsResponse {
  /**
   * List of Temporal Cloud OpenMetrics integration accounts.
   */
  "data": Array<TemporalCloudOpenMetricsIntegrationAccountResponseData>;
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
      type: "Array<TemporalCloudOpenMetricsIntegrationAccountResponseData>",
      required: true,
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
    return TemporalCloudOpenMetricsIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
