import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudMonitoringAccountUpdateData } from "./ElasticCloudMonitoringAccountUpdateData";

/**
 * Request payload to update an Elastic Cloud monitoring account as a partial merge.
 */
export class ElasticCloudMonitoringAccountUpdateRequest {
  /**
   * Data envelope for updating an Elastic Cloud monitoring account.
   */
  "data": ElasticCloudMonitoringAccountUpdateData;
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
      type: "ElasticCloudMonitoringAccountUpdateData",
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
    return ElasticCloudMonitoringAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
