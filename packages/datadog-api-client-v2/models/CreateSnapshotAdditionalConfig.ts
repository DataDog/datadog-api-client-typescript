/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateSnapshotTemplateVariable } from "./CreateSnapshotTemplateVariable";
import { CreateSnapshotTimeseriesLegendType } from "./CreateSnapshotTimeseriesLegendType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




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
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "templateVariables": {
      "baseName": "template_variables",
      "type": "Array<CreateSnapshotTemplateVariable>",
    },
    "timeseriesLegendType": {
      "baseName": "timeseries_legend_type",
      "type": "CreateSnapshotTimeseriesLegendType",
    },
    "timezoneOffsetMinutes": {
      "baseName": "timezone_offset_minutes",
      "type": "number",
      "format": "int64",
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

  public constructor() {











  }
}









