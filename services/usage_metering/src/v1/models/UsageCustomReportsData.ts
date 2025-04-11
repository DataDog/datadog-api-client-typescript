import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageCustomReportsAttributes } from "./UsageCustomReportsAttributes";
import { UsageReportsType } from "./UsageReportsType";

/**
 * The response containing the date and type for custom reports.
 */
export class UsageCustomReportsData {
  /**
   * The response containing attributes for custom reports.
   */
  "attributes"?: UsageCustomReportsAttributes;
  /**
   * The date for specified custom reports.
   */
  "id"?: string;
  /**
   * The type of reports.
   */
  "type"?: UsageReportsType;
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
      type: "UsageCustomReportsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageReportsType",
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
    return UsageCustomReportsData.attributeTypeMap;
  }

  public constructor() {}
}
