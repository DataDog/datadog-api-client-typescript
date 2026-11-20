import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend } from "./BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend";
import { BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemType } from "./BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class BarChartBackendDefinitionStyle20270101DisplayOneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "legend"?: BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    legend: {
      baseName: "legend",
      type: "BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend",
    },
    type: {
      baseName: "type",
      type: "BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BarChartBackendDefinitionStyle20270101DisplayOneOf.attributeTypeMap;
  }

  public constructor() {}
}
