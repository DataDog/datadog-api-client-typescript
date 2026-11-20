import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMArchiveConfig } from "./RUMArchiveConfig";
import { RUMArchiveConfigMeta } from "./RUMArchiveConfigMeta";

/**
 * JSON:API document.
 */
export class RUMArchiveConfigListResponse {
  /**
   * Configurations in page order.
   */
  "data": Array<RUMArchiveConfig>;
  /**
   * Pagination metadata.
   */
  "meta": RUMArchiveConfigMeta;
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
      type: "Array<RUMArchiveConfig>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMArchiveConfigMeta",
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
    return RUMArchiveConfigListResponse.attributeTypeMap;
  }

  public constructor() {}
}
