import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountCreateData } from "./ElasticCloudIntegrationAccountCreateData";

/**
 * Request payload to create an Elastic Cloud integration account.
 */
export class ElasticCloudIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating an Elastic Cloud integration account.
   */
  "data": ElasticCloudIntegrationAccountCreateData;
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
      type: "ElasticCloudIntegrationAccountCreateData",
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
    return ElasticCloudIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
