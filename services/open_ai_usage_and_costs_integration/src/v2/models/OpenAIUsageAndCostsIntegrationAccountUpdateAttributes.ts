import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountAuthenticationUpdate } from "./OpenAIUsageAndCostsIntegrationAccountAuthenticationUpdate";
import { OpenAIUsageAndCostsIntegrationAccountSettingsUpdate } from "./OpenAIUsageAndCostsIntegrationAccountSettingsUpdate";
import { OpenAIUsageAndCostsIntegrationDataflowsRequest } from "./OpenAIUsageAndCostsIntegrationDataflowsRequest";

/**
 * Writable attributes used to update an OpenAI Usage and Costs integration account. Every field is optional. Only the provided fields are changed. When `dataflows` is provided, only the dataflow IDs in the request are modified. Dataflows omitted from the map keep their current configuration.
 */
export class OpenAIUsageAndCostsIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the OpenAI Usage and Costs integration account. Exactly one method is set.
   */
  "authentication"?: OpenAIUsageAndCostsIntegrationAccountAuthenticationUpdate;
  /**
   * Data Datadog collects from OpenAI Usage and Costs, keyed by dataflow ID. Datadog always collects organization usage metrics. Each dataflow in this object adds another type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values.
   */
  "dataflows"?: OpenAIUsageAndCostsIntegrationDataflowsRequest;
  /**
   * Human-readable name of the OpenAI Usage and Costs integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the OpenAI Usage and Costs integration account. Only the fields provided are changed.
   */
  "settings"?: OpenAIUsageAndCostsIntegrationAccountSettingsUpdate;
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
      type: "OpenAIUsageAndCostsIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAIUsageAndCostsIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "OpenAIUsageAndCostsIntegrationAccountSettingsUpdate",
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
    return OpenAIUsageAndCostsIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
