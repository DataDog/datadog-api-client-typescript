import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmAccountCreateData } from "./ElasticCloudCcmAccountCreateData";

/**
 * Request payload to create an Elastic Cloud CCM (Cloud Cost Management) account.
 */
export class ElasticCloudCcmAccountRequest {
  /**
   * Data envelope for creating an Elastic Cloud CCM account.
   */
  "data": ElasticCloudCcmAccountCreateData;
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
      type: "ElasticCloudCcmAccountCreateData",
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
    return ElasticCloudCcmAccountRequest.attributeTypeMap;
  }

  public constructor() {}
}
