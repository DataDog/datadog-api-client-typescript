/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleOnCallResponderDataAttributes } from "./ScheduleOnCallResponderDataAttributes";
import { ScheduleOnCallResponderDataRelationships } from "./ScheduleOnCallResponderDataRelationships";
import { ScheduleOnCallResponderDataType } from "./ScheduleOnCallResponderDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents one position's (previous, current, or next) group of on-call responder shifts. Positions with no matching shift are omitted entirely from the response.
 */
export class ScheduleOnCallResponderData {
  /**
   * Attributes for one position's (previous, current, or next) group of on-call responder shifts.
   */
  "attributes"?: ScheduleOnCallResponderDataAttributes;
  /**
   * Unique identifier of this responder group.
   */
  "id"?: string;
  /**
   * Relationships for a single position's (previous, current, or next) responder group.
   */
  "relationships"?: ScheduleOnCallResponderDataRelationships;
  /**
   * Represents the resource type for a single position's (previous, current, or next) group of on-call responder shifts.
   */
  "type": ScheduleOnCallResponderDataType;

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
      type: "ScheduleOnCallResponderDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ScheduleOnCallResponderDataRelationships",
    },
    type: {
      baseName: "type",
      type: "ScheduleOnCallResponderDataType",
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
    return ScheduleOnCallResponderData.attributeTypeMap;
  }

  public constructor() {}
}
