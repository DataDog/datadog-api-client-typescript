import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnthropicUsageAndCostsIntegrationAccountAuthenticationUpdate } from "./AnthropicUsageAndCostsIntegrationAccountAuthenticationUpdate";
import { AnthropicUsageAndCostsIntegrationDataflowsRequest } from "./AnthropicUsageAndCostsIntegrationDataflowsRequest";

/**
 * Writable attributes used to update an Anthropic Usage and Costs integration account. Every field is optional. Only the provided fields are changed. When `dataflows` is provided, only the dataflow IDs in the request are modified. Dataflows omitted from the map keep their current configuration.
 */
export class AnthropicUsageAndCostsIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the Anthropic Usage and Costs integration account. Exactly one method is set.
   */
  "authentication"?: AnthropicUsageAndCostsIntegrationAccountAuthenticationUpdate;
  /**
   * Data Datadog collects from Anthropic Usage and Costs, keyed by dataflow ID. Datadog always collects usage metrics. Each dataflow in this object adds another type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values. If a dataflow depends on a Datadog product, its description names that product. If you enable a dataflow without that product, Datadog stores the setting but collects no data.
   */
  "dataflows"?: AnthropicUsageAndCostsIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Anthropic Usage and Costs integration account.
   */
  "name"?: string;
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
    authentication: {
      baseName: "authentication",
      type: "AnthropicUsageAndCostsIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "AnthropicUsageAndCostsIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return AnthropicUsageAndCostsIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
