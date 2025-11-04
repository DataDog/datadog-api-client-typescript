/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetSchedulePatchAttributes } from "./FleetSchedulePatchAttributes";
import { FleetScheduleResourceType } from "./FleetScheduleResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for partially updating a schedule.
 */
export class FleetSchedulePatch {
  /**
   * Attributes for partially updating a schedule. All fields are optional.
   */
  "attributes"?: FleetSchedulePatchAttributes;
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
      type: "FleetSchedulePatchAttributes",
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
    return FleetSchedulePatch.attributeTypeMap;
  }

  public constructor() {}
}
