import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmAccountUpdateData } from "./ElasticCloudCcmAccountUpdateData";

/**
 * Request payload to update an Elastic Cloud CCM account as a partial merge.
 */
export class ElasticCloudCcmAccountUpdateRequest {
  /**
   * Data envelope for updating an Elastic Cloud CCM account.
   */
  "data": ElasticCloudCcmAccountUpdateData;
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
      type: "ElasticCloudCcmAccountUpdateData",
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
    return ElasticCloudCcmAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
