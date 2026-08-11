import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountData } from "./ElasticCloudIntegrationAccountData";

/**
 * Response payload for a single Elastic Cloud integration account.
 */
export class ElasticCloudIntegrationAccountResponse {
  /**
   * Data envelope of an Elastic Cloud integration account, including server-assigned identity.
   */
  "data"?: ElasticCloudIntegrationAccountData;
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
      type: "ElasticCloudIntegrationAccountData",
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
    return ElasticCloudIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
