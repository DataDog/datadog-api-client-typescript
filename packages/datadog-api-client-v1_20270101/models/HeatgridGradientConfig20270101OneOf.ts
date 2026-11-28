/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridGradientConfigAnyOfAnyOfItemMode } from "./HeatgridGradientConfigAnyOfAnyOfItemMode";
import { HeatgridGradientConfigAnyOfAnyOfItemSource } from "./HeatgridGradientConfigAnyOfAnyOfItemSource";
import { HeatgridStop } from "./HeatgridStop";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridGradientConfig20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": HeatgridGradientConfigAnyOfAnyOfItemMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source": HeatgridGradientConfigAnyOfAnyOfItemSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "stops": Array<HeatgridStop>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    mode: {
      baseName: "mode",
      type: "HeatgridGradientConfigAnyOfAnyOfItemMode",
      required: true,
    },
    source: {
      baseName: "source",
      type: "HeatgridGradientConfigAnyOfAnyOfItemSource",
      required: true,
    },
    stops: {
      baseName: "stops",
      type: "Array<HeatgridStop>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridGradientConfig20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
