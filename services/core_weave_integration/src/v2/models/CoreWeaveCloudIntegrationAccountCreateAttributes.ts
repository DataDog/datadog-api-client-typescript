import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CoreWeaveCloudIntegrationAccountAuthenticationRequest } from "./CoreWeaveCloudIntegrationAccountAuthenticationRequest";
import { CoreWeaveCloudIntegrationAccountSettingsRequest } from "./CoreWeaveCloudIntegrationAccountSettingsRequest";
import { CoreWeaveCloudIntegrationDataflowsRequest } from "./CoreWeaveCloudIntegrationDataflowsRequest";

/**
 * Writable attributes used to create a CoreWeave integration account.
 */
export class CoreWeaveCloudIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the CoreWeave integration account. Exactly one method is set.
   */
  "authentication": CoreWeaveCloudIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from CoreWeave, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted dataflow ids keep their current values. Collection runs with the API access token in `authentication`, whose user must have the Observability Viewer role; a dataflow enabled without that role is stored but collects no data.
   */
  "dataflows"?: CoreWeaveCloudIntegrationDataflowsRequest;
  /**
   * Human-readable name of the CoreWeave integration account.
   */
  "name": string;
  /**
   * Settings for creating the CoreWeave integration account.
   */
  "settings": CoreWeaveCloudIntegrationAccountSettingsRequest;
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
      type: "CoreWeaveCloudIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "CoreWeaveCloudIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "CoreWeaveCloudIntegrationAccountSettingsRequest",
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
    return CoreWeaveCloudIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
