import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountType } from "./IntegrationAccountType";
import { TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes } from "./TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes";

/**
 * Data envelope for updating a Temporal Cloud OpenMetrics integration account.
 */
export class TemporalCloudOpenMetricsIntegrationAccountUpdateData {
  /**
   * Writable attributes used to update a Temporal Cloud OpenMetrics integration account. Every field is optional; only the fields provided are changed.
   */
  "attributes": TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes;
  /**
   * Unique identifier of the Temporal Cloud OpenMetrics integration account to update.
   */
  "id": string;
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
      type: "TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return TemporalCloudOpenMetricsIntegrationAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
