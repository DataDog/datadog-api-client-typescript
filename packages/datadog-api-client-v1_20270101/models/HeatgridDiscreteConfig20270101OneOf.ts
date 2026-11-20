/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridBin } from "./HeatgridBin";
import { HeatgridDiscreteConfigAnyOfAnyOfItemMode } from "./HeatgridDiscreteConfigAnyOfAnyOfItemMode";
import { HeatgridDiscreteConfigAnyOfAnyOfItemSource } from "./HeatgridDiscreteConfigAnyOfAnyOfItemSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridDiscreteConfig20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "bins": Array<HeatgridBin>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": HeatgridDiscreteConfigAnyOfAnyOfItemMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source": HeatgridDiscreteConfigAnyOfAnyOfItemSource;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bins: {
      baseName: "bins",
      type: "Array<HeatgridBin>",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "HeatgridDiscreteConfigAnyOfAnyOfItemMode",
      required: true,
    },
    source: {
      baseName: "source",
      type: "HeatgridDiscreteConfigAnyOfAnyOfItemSource",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridDiscreteConfig20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
