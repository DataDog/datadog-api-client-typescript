import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmAccountData } from "./ElasticCloudCcmAccountData";

/**
 * Response payload for a list of Elastic Cloud CCM accounts.
 */
export class ElasticCloudCcmAccountsResponse {
  /**
   * List of Elastic Cloud CCM accounts.
   */
  "data"?: Array<ElasticCloudCcmAccountData>;
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
      type: "Array<ElasticCloudCcmAccountData>",
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
    return ElasticCloudCcmAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
