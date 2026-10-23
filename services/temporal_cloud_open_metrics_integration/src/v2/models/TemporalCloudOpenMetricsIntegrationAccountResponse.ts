import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporalCloudOpenMetricsIntegrationAccountResponseData } from "./TemporalCloudOpenMetricsIntegrationAccountResponseData";

/**
 * Response payload for a single Temporal Cloud OpenMetrics integration account.
 */
export class TemporalCloudOpenMetricsIntegrationAccountResponse {
  /**
   * Data envelope of a Temporal Cloud OpenMetrics integration account, including server-assigned identity.
   */
  "data": TemporalCloudOpenMetricsIntegrationAccountResponseData;
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
      type: "TemporalCloudOpenMetricsIntegrationAccountResponseData",
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
    return TemporalCloudOpenMetricsIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
