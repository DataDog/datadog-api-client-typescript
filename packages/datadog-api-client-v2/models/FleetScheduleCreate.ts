/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetScheduleCreateAttributes } from "./FleetScheduleCreateAttributes";
import { FleetScheduleResourceType } from "./FleetScheduleResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating a new schedule.
 */
export class FleetScheduleCreate {
  /**
   * Attributes for creating a new schedule.
   */
  "attributes": FleetScheduleCreateAttributes;
  /**
   * The type of schedule resource.
   */
  "type": FleetScheduleResourceType;

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
      type: "FleetScheduleCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetScheduleResourceType",
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
    return FleetScheduleCreate.attributeTypeMap;
  }

  public constructor() {}
}
