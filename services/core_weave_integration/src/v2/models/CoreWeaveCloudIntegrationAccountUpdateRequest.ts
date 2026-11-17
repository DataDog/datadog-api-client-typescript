import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CoreWeaveCloudIntegrationAccountUpdateData } from "./CoreWeaveCloudIntegrationAccountUpdateData";

/**
 * Request payload to update a CoreWeave integration account.
 */
export class CoreWeaveCloudIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating a CoreWeave integration account.
   */
  "data": CoreWeaveCloudIntegrationAccountUpdateData;
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
      type: "CoreWeaveCloudIntegrationAccountUpdateData",
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
    return CoreWeaveCloudIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
