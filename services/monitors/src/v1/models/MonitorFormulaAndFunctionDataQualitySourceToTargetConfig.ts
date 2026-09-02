import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionDataQualityDiffType } from "./MonitorFormulaAndFunctionDataQualityDiffType";
import { MonitorFormulaAndFunctionDataQualityEntityMetricConfig } from "./MonitorFormulaAndFunctionDataQualityEntityMetricConfig";

/**
 * Configuration for a source to target monitor, which compares the same measure
 * across two data entities and alerts on the difference between them.
 */
export class MonitorFormulaAndFunctionDataQualitySourceToTargetConfig {
  /**
   * How the difference between the source and target measures is computed.
   * `absolute` subtracts the two values, `diff_percent` expresses the difference
   * as a percentage of the source value.
   */
  "diffType": MonitorFormulaAndFunctionDataQualityDiffType;
  /**
   * Type of the data entities being compared.
   */
  "entityType": string;
  /**
   * Measure configuration for one side of a source to target comparison.
   */
  "source": MonitorFormulaAndFunctionDataQualityEntityMetricConfig;
  /**
   * Measure configuration for one side of a source to target comparison.
   */
  "target": MonitorFormulaAndFunctionDataQualityEntityMetricConfig;
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
    diffType: {
      baseName: "diff_type",
      type: "MonitorFormulaAndFunctionDataQualityDiffType",
      required: true,
    },
    entityType: {
      baseName: "entity_type",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "MonitorFormulaAndFunctionDataQualityEntityMetricConfig",
      required: true,
    },
    target: {
      baseName: "target",
      type: "MonitorFormulaAndFunctionDataQualityEntityMetricConfig",
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
    return MonitorFormulaAndFunctionDataQualitySourceToTargetConfig.attributeTypeMap;
  }

  public constructor() {}
}
