import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudMonitoringAccountData } from "./ElasticCloudMonitoringAccountData";

/**
 * Response payload for a list of Elastic Cloud monitoring accounts.
 */
export class ElasticCloudMonitoringAccountsResponse {
  /**
   * List of Elastic Cloud monitoring accounts.
   */
  "data"?: Array<ElasticCloudMonitoringAccountData>;
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
      type: "Array<ElasticCloudMonitoringAccountData>",
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
    return ElasticCloudMonitoringAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
