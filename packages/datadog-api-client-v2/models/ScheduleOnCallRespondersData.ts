/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleOnCallRespondersDataAttributes } from "./ScheduleOnCallRespondersDataAttributes";
import { ScheduleOnCallRespondersDataRelationships } from "./ScheduleOnCallRespondersDataRelationships";
import { ScheduleOnCallRespondersDataType } from "./ScheduleOnCallRespondersDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The main data object representing a schedule's on-call responders lookup, including relationships and metadata.
 */
export class ScheduleOnCallRespondersData {
  /**
   * Attributes for a schedule's on-call responders lookup.
   */
  "attributes"?: ScheduleOnCallRespondersDataAttributes;
  /**
   * Unique identifier of this on-call responders lookup.
   */
  "id"?: string;
  /**
   * Relationships for a schedule's on-call responders lookup, including the schedule and its responder groups.
   */
  "relationships"?: ScheduleOnCallRespondersDataRelationships;
  /**
   * Represents the resource type for a schedule's grouped on-call responders across the previous, current, and next positions.
   */
  "type": ScheduleOnCallRespondersDataType;

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
      type: "ScheduleOnCallRespondersDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ScheduleOnCallRespondersDataRelationships",
    },
    type: {
      baseName: "type",
      type: "ScheduleOnCallRespondersDataType",
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
    return ScheduleOnCallRespondersData.attributeTypeMap;
  }

  public constructor() {}
}
