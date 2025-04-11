import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageReportsType } from "./UsageReportsType";
import { UsageSpecifiedCustomReportsAttributes } from "./UsageSpecifiedCustomReportsAttributes";

/**
 * Response containing date and type for specified custom reports.
 */
export class UsageSpecifiedCustomReportsData {
  /**
   * The response containing attributes for specified custom reports.
   */
  "attributes"?: UsageSpecifiedCustomReportsAttributes;
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
      type: "UsageSpecifiedCustomReportsAttributes",
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
    return UsageSpecifiedCustomReportsData.attributeTypeMap;
  }

  public constructor() {}
}
