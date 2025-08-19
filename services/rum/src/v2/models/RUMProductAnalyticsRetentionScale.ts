import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMProductAnalyticsRetentionState } from "./RUMProductAnalyticsRetentionState";

/**
 * Product Analytics retention scale configuration.
 */
export class RUMProductAnalyticsRetentionScale {
  /**
   * Timestamp in milliseconds when this scale was last modified.
   */
  "lastModifiedAt"?: number;
  /**
   * Controls the retention policy for Product Analytics data derived from RUM events.
   */
  "state"?: RUMProductAnalyticsRetentionState;
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
    lastModifiedAt: {
      baseName: "last_modified_at",
      type: "number",
      format: "int64",
    },
    state: {
      baseName: "state",
      type: "RUMProductAnalyticsRetentionState",
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
    return RUMProductAnalyticsRetentionScale.attributeTypeMap;
  }

  public constructor() {}
}
