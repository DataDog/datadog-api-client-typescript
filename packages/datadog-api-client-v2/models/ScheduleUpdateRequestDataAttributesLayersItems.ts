/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LayerAttributesInterval } from "./LayerAttributesInterval";
import { ScheduleRequestDataAttributesLayersItemsMembersItems } from "./ScheduleRequestDataAttributesLayersItemsMembersItems";
import { TimeRestriction } from "./TimeRestriction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a layer within a schedule update, including rotation details, members,
 * and optional restrictions.
 */
export class ScheduleUpdateRequestDataAttributesLayersItems {
  /**
   * When this updated layer takes effect (ISO 8601 format).
   */
  "effectiveDate": Date;
  /**
   * When this updated layer should stop being active (ISO 8601 format).
   */
  "endDate"?: Date;
  /**
   * A unique identifier for the layer being updated.
   */
  "id"?: string;
  /**
   * Defines how often the rotation repeats, using a combination of days and optional seconds. Should be at least 1 hour.
   */
  "interval": LayerAttributesInterval;
  /**
   * The members assigned to this layer.
   */
  "members": Array<ScheduleRequestDataAttributesLayersItemsMembersItems>;
  /**
   * The name for this layer (for example, "Secondary Coverage").
   */
  "name": string;
  /**
   * Any time restrictions that define when this layer is active.
   */
  "restrictions"?: Array<TimeRestriction>;
  /**
   * The date/time at which the rotation begins (ISO 8601 format).
   */
  "rotationStart": Date;

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
      required: true,
      format: "date-time",
    },
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    interval: {
      baseName: "interval",
      type: "LayerAttributesInterval",
      required: true,
    },
    members: {
      baseName: "members",
      type: "Array<ScheduleRequestDataAttributesLayersItemsMembersItems>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    restrictions: {
      baseName: "restrictions",
      type: "Array<TimeRestriction>",
    },
    rotationStart: {
      baseName: "rotation_start",
      type: "Date",
      required: true,
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
    return ScheduleUpdateRequestDataAttributesLayersItems.attributeTypeMap;
  }

  public constructor() {}
}
