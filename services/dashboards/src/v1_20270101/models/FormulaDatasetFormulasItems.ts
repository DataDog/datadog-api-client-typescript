import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaDatasetFormulasItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formula": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaDatasetFormulasItems.attributeTypeMap;
  }

  public constructor() {}
}
