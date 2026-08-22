import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountAuthenticationResponse } from "./ElasticCloudIntegrationAccountAuthenticationResponse";
import { ElasticCloudIntegrationAccountSettingsResponse } from "./ElasticCloudIntegrationAccountSettingsResponse";
import { ElasticCloudIntegrationDataflowsResponse } from "./ElasticCloudIntegrationDataflowsResponse";

/**
 * Attributes of an Elastic Cloud integration account returned in responses.
 */
export class ElasticCloudIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the Elastic Cloud integration account.
   */
  "authentication"?: ElasticCloudIntegrationAccountAuthenticationResponse;
  /**
   * Dataflows configured on the Elastic Cloud integration account, keyed by dataflow id.
   */
  "dataflows"?: ElasticCloudIntegrationDataflowsResponse;
  /**
   * Human-readable name of the Elastic Cloud integration account.
   */
  "name": string;
  /**
   * Settings configured on the Elastic Cloud integration account.
   */
  "settings": ElasticCloudIntegrationAccountSettingsResponse;
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
      type: "ElasticCloudIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "ElasticCloudIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudIntegrationAccountSettingsResponse",
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
    return ElasticCloudIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
