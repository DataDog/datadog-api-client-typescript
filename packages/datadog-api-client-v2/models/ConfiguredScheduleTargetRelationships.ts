/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfiguredScheduleTargetRelationshipsSchedule } from "./ConfiguredScheduleTargetRelationshipsSchedule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents the relationships of a configured schedule target.
 */
export class ConfiguredScheduleTargetRelationships {
  /**
   * Holds the schedule reference for a configured schedule target.
   */
  "schedule": ConfiguredScheduleTargetRelationshipsSchedule;

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
    schedule: {
      baseName: "schedule",
      type: "ConfiguredScheduleTargetRelationshipsSchedule",
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
    return ConfiguredScheduleTargetRelationships.attributeTypeMap;
  }

  public constructor() {}
}
