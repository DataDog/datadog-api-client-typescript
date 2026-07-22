import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardFixedTimeframeType } from "./DashboardFixedTimeframeType";

/**
 * A fixed dashboard timeframe.
 */
export class DashboardFixedTimeframe {
  /**
   * Start time in milliseconds since epoch.
   */
  "from": number;
  /**
   * End time in milliseconds since epoch.
   */
  "to": number;
  /**
   * Type of fixed timeframe.
   */
  "type": DashboardFixedTimeframeType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "DashboardFixedTimeframeType",
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
    return DashboardFixedTimeframe.attributeTypeMap;
  }

  public constructor() {}
}
