import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumArchiveConfig } from "./RumArchiveConfig";
import { RumArchiveConfigMeta } from "./RumArchiveConfigMeta";

/**
 * JSON:API document.
 */
export class RumArchiveConfigListResponse {
  /**
   * Configurations in page order.
   */
  "data": Array<RumArchiveConfig>;
  /**
   * Pagination metadata.
   */
  "meta": RumArchiveConfigMeta;
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
      type: "Array<RumArchiveConfig>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RumArchiveConfigMeta",
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
    return RumArchiveConfigListResponse.attributeTypeMap;
  }

  public constructor() {}
}
