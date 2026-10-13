/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OverrideRelationshipsScheduleData } from "./OverrideRelationshipsScheduleData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the relationship between an override and the schedule it belongs to.
 */
export class OverrideRelationshipsSchedule {
  /**
   * A reference to the schedule the override belongs to, containing the schedule's ID and resource type.
   */
  "data": OverrideRelationshipsScheduleData;

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
    data: {
      baseName: "data",
      type: "OverrideRelationshipsScheduleData",
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
    return OverrideRelationshipsSchedule.attributeTypeMap;
  }

  public constructor() {}
}
