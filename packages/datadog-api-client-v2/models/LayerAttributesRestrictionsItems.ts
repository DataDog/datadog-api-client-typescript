/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LayerAttributesRestrictionsItemsEndDay } from "./LayerAttributesRestrictionsItemsEndDay";
import { LayerAttributesRestrictionsItemsStartDay } from "./LayerAttributesRestrictionsItemsStartDay";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a time restriction within a layer, specifying the days and times
 * when this layer is active or inactive.
 */
export class LayerAttributesRestrictionsItems {
  /**
   * Defines the end day of the restriction within a Layer.
   */
  "endDay"?: LayerAttributesRestrictionsItemsEndDay;
  /**
   * The time of day the restriction ends (hh:mm:ss).
   */
  "endTime"?: string;
  /**
   * Defines the start day of the restriction within a Layer.
   */
  "startDay"?: LayerAttributesRestrictionsItemsStartDay;
  /**
   * The time of day the restriction begins (hh:mm:ss).
   */
  "startTime"?: string;

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
    endDay: {
      baseName: "end_day",
      type: "LayerAttributesRestrictionsItemsEndDay",
    },
    endTime: {
      baseName: "end_time",
      type: "string",
    },
    startDay: {
      baseName: "start_day",
      type: "LayerAttributesRestrictionsItemsStartDay",
    },
    startTime: {
      baseName: "start_time",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LayerAttributesRestrictionsItems.attributeTypeMap;
  }

  public constructor() {}
}
