import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountType } from "./IntegrationAccountType";
import { TemporalCloudOpenMetricsIntegrationAccountCreateAttributes } from "./TemporalCloudOpenMetricsIntegrationAccountCreateAttributes";

/**
 * Data envelope for creating a Temporal Cloud OpenMetrics integration account.
 */
export class TemporalCloudOpenMetricsIntegrationAccountCreateData {
  /**
   * Writable attributes used to create a Temporal Cloud OpenMetrics integration account.
   */
  "attributes": TemporalCloudOpenMetricsIntegrationAccountCreateAttributes;
  /**
   * The type of the integration account resource. Always `integration-account`.
   */
  "type": IntegrationAccountType;
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
    attributes: {
      baseName: "attributes",
      type: "TemporalCloudOpenMetricsIntegrationAccountCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAccountType",
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
    return TemporalCloudOpenMetricsIntegrationAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
