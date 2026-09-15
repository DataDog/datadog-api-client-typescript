import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountResponseData } from "./ElasticCloudIntegrationAccountResponseData";

/**
 * Response payload for a list of Elastic Cloud integration accounts.
 */
export class ElasticCloudIntegrationAccountsResponse {
  /**
   * List of Elastic Cloud integration accounts.
   */
  "data": Array<ElasticCloudIntegrationAccountResponseData>;
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
      type: "Array<ElasticCloudIntegrationAccountResponseData>",
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
    return ElasticCloudIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
