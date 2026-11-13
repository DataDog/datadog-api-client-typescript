import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonthlyResource } from "./MonthlyResource";
import { MonthlyResourcesMetadata } from "./MonthlyResourcesMetadata";

/**
 * Monthly usage for host and non-host resources.
 */
export class MonthlyResourcesResponse {
  /**
   * Resource usage records. Empty when no matching resources are available.
   */
  "data"?: Array<MonthlyResource>;
  /**
   * Metadata for monthly resource usage.
   */
  "meta"?: MonthlyResourcesMetadata;
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
      type: "Array<MonthlyResource>",
    },
    meta: {
      baseName: "meta",
      type: "MonthlyResourcesMetadata",
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
    return MonthlyResourcesResponse.attributeTypeMap;
  }

  public constructor() {}
}
