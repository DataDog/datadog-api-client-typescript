/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridDiscreteConfigAnyOfAnyOfItemMode4447618848 } from "./HeatgridDiscreteConfigAnyOfAnyOfItemMode4447618848";
import { HeatgridDiscreteConfigAnyOfAnyOfItemSource4447619168 } from "./HeatgridDiscreteConfigAnyOfAnyOfItemSource4447619168";
import { HeatgridPresetName } from "./HeatgridPresetName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridDiscreteConfig20270101OneOf4457881312 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": HeatgridDiscreteConfigAnyOfAnyOfItemMode4447618848;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "presetName": HeatgridPresetName;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source": HeatgridDiscreteConfigAnyOfAnyOfItemSource4447619168;

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
      type: "HeatgridDiscreteConfigAnyOfAnyOfItemMode4447618848",
      required: true,
    },
    presetName: {
      baseName: "preset_name",
      type: "HeatgridPresetName",
      required: true,
    },
    source: {
      baseName: "source",
      type: "HeatgridDiscreteConfigAnyOfAnyOfItemSource4447619168",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridDiscreteConfig20270101OneOf4457881312.attributeTypeMap;
  }

  public constructor() {}
}
