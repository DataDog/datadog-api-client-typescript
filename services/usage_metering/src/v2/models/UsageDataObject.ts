import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageAttributesObject } from "./UsageAttributesObject";
import { UsageTimeSeriesType } from "./UsageTimeSeriesType";

/**
 * Usage data.
 */
export class UsageDataObject {
  /**
   * Usage attributes data.
   */
  "attributes"?: UsageAttributesObject;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of usage data.
   */
  "type"?: UsageTimeSeriesType;
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
      type: "UsageAttributesObject",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageTimeSeriesType",
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
    return UsageDataObject.attributeTypeMap;
  }

  public constructor() {}
}
