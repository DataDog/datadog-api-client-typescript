import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountAuthenticationResponse } from "./NebiusCloudIntegrationAccountAuthenticationResponse";
import { NebiusCloudIntegrationAccountSettingsResponse } from "./NebiusCloudIntegrationAccountSettingsResponse";
import { NebiusCloudIntegrationDataflowsResponse } from "./NebiusCloudIntegrationDataflowsResponse";

/**
 * Attributes of a Nebius Cloud integration account returned in responses.
 */
export class NebiusCloudIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the Nebius Cloud integration account.
   */
  "authentication"?: NebiusCloudIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from Nebius Cloud, keyed by dataflow id.
   */
  "dataflows"?: NebiusCloudIntegrationDataflowsResponse;
  /**
   * Human-readable name of the Nebius Cloud integration account.
   */
  "name": string;
  /**
   * Settings configured on the Nebius Cloud integration account.
   */
  "settings": NebiusCloudIntegrationAccountSettingsResponse;
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
      type: "NebiusCloudIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "NebiusCloudIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "NebiusCloudIntegrationAccountSettingsResponse",
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
    return NebiusCloudIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
