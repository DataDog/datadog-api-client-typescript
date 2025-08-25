/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleUpdateRequestDataAttributes } from "./ScheduleUpdateRequestDataAttributes";
import { ScheduleUpdateRequestDataRelationships } from "./ScheduleUpdateRequestDataRelationships";
import { ScheduleUpdateRequestDataType } from "./ScheduleUpdateRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Contains all data needed to update an existing schedule, including its attributes (such as name and time zone) and any relationships to teams.
 */
export class ScheduleUpdateRequestData {
  /**
   * Defines the updatable attributes for a schedule, such as name, time zone, and layers.
   */
  "attributes": ScheduleUpdateRequestDataAttributes;
  /**
   * The ID of the schedule to be updated.
   */
  "id": string;
  /**
   * Houses relationships for the schedule update, typically referencing teams.
   */
  "relationships"?: ScheduleUpdateRequestDataRelationships;
  /**
   * Schedules resource type.
   */
  "type": ScheduleUpdateRequestDataType;

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
    attributes: {
      baseName: "attributes",
      type: "ScheduleUpdateRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ScheduleUpdateRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "ScheduleUpdateRequestDataType",
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
    return ScheduleUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
