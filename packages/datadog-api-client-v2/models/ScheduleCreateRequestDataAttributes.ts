/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleCreateRequestDataAttributesLayersItems } from "./ScheduleCreateRequestDataAttributesLayersItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Describes the main attributes for creating a new schedule, including name, layers, and time zone.
 */
export class ScheduleCreateRequestDataAttributes {
  /**
   * The layers of On-Call coverage that define rotation intervals and restrictions.
   */
  "layers": Array<ScheduleCreateRequestDataAttributesLayersItems>;
  /**
   * A human-readable name for the new schedule.
   */
  "name": string;
  /**
   * The time zone in which the schedule is defined.
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
      type: "Array<ScheduleCreateRequestDataAttributesLayersItems>",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScheduleCreateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
