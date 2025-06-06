/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleCreateRequestDataAttributes } from "./ScheduleCreateRequestDataAttributes";
import { ScheduleCreateRequestDataRelationships } from "./ScheduleCreateRequestDataRelationships";
import { ScheduleCreateRequestDataType } from "./ScheduleCreateRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The core data wrapper for creating a schedule, encompassing attributes, relationships, and the resource type.
 */
export class ScheduleCreateRequestData {
  /**
   * Describes the main attributes for creating a new schedule, including name, layers, and time zone.
   */
  "attributes": ScheduleCreateRequestDataAttributes;
  /**
   * Gathers relationship objects for the schedule creation request, including the teams to associate.
   */
  "relationships"?: ScheduleCreateRequestDataRelationships;
  /**
   * Schedules resource type.
   */
  "type": ScheduleCreateRequestDataType;

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
      type: "ScheduleCreateRequestDataAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ScheduleCreateRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "ScheduleCreateRequestDataType",
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
    return ScheduleCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
