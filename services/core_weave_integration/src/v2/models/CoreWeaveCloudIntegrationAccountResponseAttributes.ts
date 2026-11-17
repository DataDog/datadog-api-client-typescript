import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CoreWeaveCloudIntegrationAccountAuthenticationResponse } from "./CoreWeaveCloudIntegrationAccountAuthenticationResponse";
import { CoreWeaveCloudIntegrationAccountSettingsResponse } from "./CoreWeaveCloudIntegrationAccountSettingsResponse";
import { CoreWeaveCloudIntegrationDataflowsResponse } from "./CoreWeaveCloudIntegrationDataflowsResponse";

/**
 * Attributes of a CoreWeave integration account returned in responses.
 */
export class CoreWeaveCloudIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the CoreWeave integration account.
   */
  "authentication"?: CoreWeaveCloudIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from CoreWeave, keyed by dataflow id.
   */
  "dataflows"?: CoreWeaveCloudIntegrationDataflowsResponse;
  /**
   * Human-readable name of the CoreWeave integration account.
   */
  "name": string;
  /**
   * Settings configured on the CoreWeave integration account.
   */
  "settings": CoreWeaveCloudIntegrationAccountSettingsResponse;
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
      type: "CoreWeaveCloudIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "CoreWeaveCloudIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "CoreWeaveCloudIntegrationAccountSettingsResponse",
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
    return CoreWeaveCloudIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
