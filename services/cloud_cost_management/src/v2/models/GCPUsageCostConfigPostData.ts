import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPUsageCostConfigPostRequestAttributes } from "./GCPUsageCostConfigPostRequestAttributes";
import { GCPUsageCostConfigPostRequestType } from "./GCPUsageCostConfigPostRequestType";

/**
 * GCP Usage Cost config post data.
 */
export class GCPUsageCostConfigPostData {
  /**
   * Attributes for GCP Usage Cost config post request.
   */
  "attributes": GCPUsageCostConfigPostRequestAttributes;
  /**
   * Type of GCP Usage Cost config post request.
   */
  "type": GCPUsageCostConfigPostRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "GCPUsageCostConfigPostRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GCPUsageCostConfigPostRequestType",
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
    return GCPUsageCostConfigPostData.attributeTypeMap;
  }

  public constructor() {}
}
