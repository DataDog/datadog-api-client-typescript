import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonthlyResourceAttributes } from "./MonthlyResourceAttributes";
import { MonthlyResourceType } from "./MonthlyResourceType";

/**
 * A resource's usage for the requested billing dimension and month.
 */
export class MonthlyResource {
  /**
   * Resource usage and organization details for the requested month.
   */
  "attributes"?: MonthlyResourceAttributes;
  /**
   * Identifier for the resource usage record. Treat this value as opaque.
   */
  "id"?: string;
  /**
   * Type of a monthly resource usage record.
   */
  "type"?: MonthlyResourceType;
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
      type: "MonthlyResourceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MonthlyResourceType",
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
    return MonthlyResource.attributeTypeMap;
  }

  public constructor() {}
}
