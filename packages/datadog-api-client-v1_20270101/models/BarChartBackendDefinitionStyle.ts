/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BarChartBackendDefinitionStyle20270101Display } from "./BarChartBackendDefinitionStyle20270101Display";
import { BarChartBackendDefinitionStyleScaling } from "./BarChartBackendDefinitionStyleScaling";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
