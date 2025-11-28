import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SuppressionVersions } from "./SuppressionVersions";

/**
 * Response object containing the version history of a suppression.
 */
export class SuppressionVersionHistory {
  /**
   * The number of suppression versions.
   */
  "count"?: number;
  /**
   * The version history of a suppression.
   */
  "data"?: { [key: string]: SuppressionVersions };
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
    count: {
      baseName: "count",
      type: "number",
      format: "int32",
    },
    data: {
      baseName: "data",
      type: "{ [key: string]: SuppressionVersions; }",
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
    return SuppressionVersionHistory.attributeTypeMap;
  }

  public constructor() {}
}
