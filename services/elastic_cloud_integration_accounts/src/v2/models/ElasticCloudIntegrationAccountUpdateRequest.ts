import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountUpdateData } from "./ElasticCloudIntegrationAccountUpdateData";

/**
 * Request payload to update an Elastic Cloud integration account as a partial merge.
 */
export class ElasticCloudIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating an Elastic Cloud integration account.
   */
  "data": ElasticCloudIntegrationAccountUpdateData;
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
      type: "ElasticCloudIntegrationAccountUpdateData",
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
    return ElasticCloudIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
