import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BarChartBackendDefinitionStyle20270101Display } from "./BarChartBackendDefinitionStyle20270101Display";
import { BarChartBackendDefinitionStyleScaling } from "./BarChartBackendDefinitionStyleScaling";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class BarChartBackendDefinitionStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "display"?: BarChartBackendDefinitionStyle20270101Display;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scaling"?: BarChartBackendDefinitionStyleScaling;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    display: {
      baseName: "display",
      type: "BarChartBackendDefinitionStyle20270101Display",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
    scaling: {
      baseName: "scaling",
      type: "BarChartBackendDefinitionStyleScaling",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BarChartBackendDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
