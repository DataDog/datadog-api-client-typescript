import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmAccountData } from "./ElasticCloudCcmAccountData";

/**
 * Response payload for a single Elastic Cloud CCM account.
 */
export class ElasticCloudCcmAccountResponse {
  /**
   * Data envelope of an Elastic Cloud CCM account, including server-assigned identity.
   */
  "data"?: ElasticCloudCcmAccountData;
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
      type: "ElasticCloudCcmAccountData",
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
    return ElasticCloudCcmAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
