import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPUsageCostConfigPostData } from "./GCPUsageCostConfigPostData";

/**
 * Google Cloud Usage Cost config post request.
 */
export class GCPUsageCostConfigPostRequest {
  /**
   * Google Cloud Usage Cost config post data.
   */
  "data": GCPUsageCostConfigPostData;
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
      type: "GCPUsageCostConfigPostData",
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
    return GCPUsageCostConfigPostRequest.attributeTypeMap;
  }

  public constructor() {}
}
