import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CoverageSummaryAttributes } from "./CoverageSummaryAttributes";
import { CoverageSummaryType } from "./CoverageSummaryType";

/**
 * Data object for coverage summary response.
 */
export class CoverageSummaryData {
  /**
   * Attributes object for code coverage summary response.
   */
  "attributes"?: CoverageSummaryAttributes;
  /**
   * Unique identifier for the coverage summary (base64-hashed).
   */
  "id"?: string;
  /**
   * JSON:API type for coverage summary response. The value must always be `ci_app_coverage_summary`.
   */
  "type"?: CoverageSummaryType;
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
      type: "CoverageSummaryAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CoverageSummaryType",
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
    return CoverageSummaryData.attributeTypeMap;
  }

  public constructor() {}
}
