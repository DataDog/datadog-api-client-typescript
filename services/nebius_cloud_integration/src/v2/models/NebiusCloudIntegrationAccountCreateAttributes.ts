import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountAuthenticationRequest } from "./NebiusCloudIntegrationAccountAuthenticationRequest";
import { NebiusCloudIntegrationAccountSettingsRequest } from "./NebiusCloudIntegrationAccountSettingsRequest";
import { NebiusCloudIntegrationDataflowsRequest } from "./NebiusCloudIntegrationDataflowsRequest";

/**
 * Writable attributes used to create a Nebius Cloud integration account.
 */
export class NebiusCloudIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the Nebius Cloud integration account. Exactly one method is set.
   */
  "authentication": NebiusCloudIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from Nebius Cloud, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to stop or start it, and use `settings` to configure what it collects. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow except `nebius-cloud-cost-collection` runs as the service account in `authentication`, using its authorized key pair and the static API key; enabling one of them without those keys is rejected with a `422` response, and one enabled with keys that later expire is stored but collects no data.
   */
  "dataflows"?: NebiusCloudIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Nebius Cloud integration account.
   */
  "name": string;
  /**
   * Settings for creating the Nebius Cloud integration account.
   */
  "settings": NebiusCloudIntegrationAccountSettingsRequest;
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
      type: "NebiusCloudIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "NebiusCloudIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "NebiusCloudIntegrationAccountSettingsRequest",
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
    return NebiusCloudIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
