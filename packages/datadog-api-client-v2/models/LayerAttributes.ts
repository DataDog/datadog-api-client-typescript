/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LayerAttributesInterval } from "./LayerAttributesInterval";
import { TimeRestriction } from "./TimeRestriction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Describes key properties of a Layer, including rotation details, name, start/end times, and any restrictions.
 */
export class LayerAttributes {
  /**
   * When the layer becomes active (ISO 8601).
   */
  "effectiveDate"?: Date;
  /**
   * When the layer ceases to be active (ISO 8601).
   */
  "endDate"?: Date;
  /**
   * Defines how often the rotation repeats, using a combination of days and optional seconds.
   */
  "interval"?: LayerAttributesInterval;
  /**
   * The name of this layer.
   */
  "name"?: string;
  /**
   * An optional list of time restrictions for when this layer is in effect.
   */
  "restrictions"?: Array<TimeRestriction>;
  /**
   * The date/time when the rotation starts (ISO 8601).
   */
  "rotationStart"?: Date;

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
    effectiveDate: {
      baseName: "effective_date",
      type: "Date",
      format: "date-time",
    },
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    interval: {
      baseName: "interval",
      type: "LayerAttributesInterval",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    restrictions: {
      baseName: "restrictions",
      type: "Array<TimeRestriction>",
    },
    rotationStart: {
      baseName: "rotation_start",
      type: "Date",
      format: "date-time",
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
    return LayerAttributes.attributeTypeMap;
  }

  public constructor() {}
}
