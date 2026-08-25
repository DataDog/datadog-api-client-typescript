import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountAuthenticationUpdate } from "./ElasticCloudIntegrationAccountAuthenticationUpdate";
import { ElasticCloudIntegrationAccountSettingsUpdate } from "./ElasticCloudIntegrationAccountSettingsUpdate";
import { ElasticCloudIntegrationDataflowsRequest } from "./ElasticCloudIntegrationDataflowsRequest";

/**
 * Writable attributes used to update an Elastic Cloud integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration.
 */
export class ElasticCloudIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the Elastic Cloud integration account. Exactly one method is set.
   */
  "authentication"?: ElasticCloudIntegrationAccountAuthenticationUpdate;
  /**
   * Dataflows to configure on the Elastic Cloud integration account, keyed by dataflow id.
   */
  "dataflows"?: ElasticCloudIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Elastic Cloud integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the Elastic Cloud integration account. Only the fields provided are changed.
   */
  "settings"?: ElasticCloudIntegrationAccountSettingsUpdate;
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
      type: "ElasticCloudIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "ElasticCloudIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudIntegrationAccountSettingsUpdate",
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
    return ElasticCloudIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
