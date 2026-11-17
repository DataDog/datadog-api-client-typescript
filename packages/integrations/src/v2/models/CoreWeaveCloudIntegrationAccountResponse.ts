import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { CoreWeaveCloudIntegrationAccountResponseData } from "./CoreWeaveCloudIntegrationAccountResponseData";

/**
 * Response payload for a single CoreWeave integration account.
 */
export class CoreWeaveCloudIntegrationAccountResponse {
  /**
   * Data envelope of a CoreWeave integration account, including server-assigned identity.
   */
  "data": CoreWeaveCloudIntegrationAccountResponseData;
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
      type: "CoreWeaveCloudIntegrationAccountResponseData",
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
    return CoreWeaveCloudIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
