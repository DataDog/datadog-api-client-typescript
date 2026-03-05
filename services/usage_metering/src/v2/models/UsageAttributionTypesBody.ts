import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageAttributionTypesAttributes } from "./UsageAttributionTypesAttributes";
import { UsageAttributionTypesType } from "./UsageAttributionTypesType";

/**
 * Usage attribution types data.
 */
export class UsageAttributionTypesBody {
  /**
   * List of usage attribution types.
   */
  "attributes"?: UsageAttributionTypesAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of usage attribution types data.
   */
  "type"?: UsageAttributionTypesType;
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
      type: "UsageAttributionTypesAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageAttributionTypesType",
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
    return UsageAttributionTypesBody.attributeTypeMap;
  }

  public constructor() {}
}
