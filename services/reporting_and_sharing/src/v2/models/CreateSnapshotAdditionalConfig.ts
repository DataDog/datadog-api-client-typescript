import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateSnapshotTemplateVariable } from "./CreateSnapshotTemplateVariable";
import { CreateSnapshotTimeseriesLegendType } from "./CreateSnapshotTimeseriesLegendType";

/**
 * Additional configuration options for snapshot creation.
 */
export class CreateSnapshotAdditionalConfig {
  /**
   * List of template variable definitions for snapshot rendering.
   */
  "templateVariables"?: Array<CreateSnapshotTemplateVariable>;
  /**
   * The legend display type for timeseries widgets. A value of `none` hides the legend entirely; omitting the field lets the frontend choose automatically.
   */
  "timeseriesLegendType"?: CreateSnapshotTimeseriesLegendType;
  /**
   * Timezone offset in minutes from UTC. Positive values are west of UTC (for example, `300` for UTC-5). Use `0` for UTC.
   */
  "timezoneOffsetMinutes"?: number;
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
    templateVariables: {
      baseName: "template_variables",
      type: "Array<CreateSnapshotTemplateVariable>",
    },
    timeseriesLegendType: {
      baseName: "timeseries_legend_type",
      type: "CreateSnapshotTimeseriesLegendType",
    },
    timezoneOffsetMinutes: {
      baseName: "timezone_offset_minutes",
      type: "number",
      format: "int64",
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
    return CreateSnapshotAdditionalConfig.attributeTypeMap;
  }

  public constructor() {}
}
