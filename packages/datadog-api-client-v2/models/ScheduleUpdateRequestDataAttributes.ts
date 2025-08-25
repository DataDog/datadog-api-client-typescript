/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleUpdateRequestDataAttributesLayersItems } from "./ScheduleUpdateRequestDataAttributesLayersItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the updatable attributes for a schedule, such as name, time zone, and layers.
 */
export class ScheduleUpdateRequestDataAttributes {
  /**
   * The updated list of layers (rotations) for this schedule.
   */
  "layers": Array<ScheduleUpdateRequestDataAttributesLayersItems>;
  /**
   * A short name for the schedule.
   */
  "name": string;
  /**
   * The time zone used when interpreting rotation times.
   */
  "timeZone": string;

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
    layers: {
      baseName: "layers",
      type: "Array<ScheduleUpdateRequestDataAttributesLayersItems>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    timeZone: {
      baseName: "time_zone",
      type: "string",
      required: true,
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
    return ScheduleUpdateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
