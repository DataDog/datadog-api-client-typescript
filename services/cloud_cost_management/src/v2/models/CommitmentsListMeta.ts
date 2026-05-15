import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsUnit } from "./CommitmentsUnit";

/**
 * Metadata for a commitments list response.
 */
export class CommitmentsListMeta {
  /**
   * Unit metadata for a numeric metric.
   */
  "committedSpendUnit"?: CommitmentsUnit;
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
    committedSpendUnit: {
      baseName: "committed_spend_unit",
      type: "CommitmentsUnit",
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
    return CommitmentsListMeta.attributeTypeMap;
  }

  public constructor() {}
}
