import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CoreWeaveCloudIntegrationAccountCreateData } from "./CoreWeaveCloudIntegrationAccountCreateData";

/**
 * Request payload to create a CoreWeave integration account.
 */
export class CoreWeaveCloudIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating a CoreWeave integration account.
   */
  "data": CoreWeaveCloudIntegrationAccountCreateData;
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
    data: {
      baseName: "data",
      type: "CoreWeaveCloudIntegrationAccountCreateData",
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
    return CoreWeaveCloudIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
