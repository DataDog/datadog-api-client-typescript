import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudMonitoringAccountData } from "./ElasticCloudMonitoringAccountData";

/**
 * Response payload for a single Elastic Cloud monitoring account.
 */
export class ElasticCloudMonitoringAccountResponse {
  /**
   * Data envelope of an Elastic Cloud monitoring account, including server-assigned identity.
   */
  "data"?: ElasticCloudMonitoringAccountData;
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
      type: "ElasticCloudMonitoringAccountData",
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
    return ElasticCloudMonitoringAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
