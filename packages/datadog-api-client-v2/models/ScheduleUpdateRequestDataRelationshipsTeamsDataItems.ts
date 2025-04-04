/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleUpdateRequestDataRelationshipsTeamsDataItemsType } from "./ScheduleUpdateRequestDataRelationshipsTeamsDataItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Links the schedule to a team within an update request, identified by `id` and `type`.
 */
export class ScheduleUpdateRequestDataRelationshipsTeamsDataItems {
  /**
   * The unique team identifier.
   */
  "id"?: string;
  /**
   * Teams resource type.
   */
  "type"?: ScheduleUpdateRequestDataRelationshipsTeamsDataItemsType;

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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ScheduleUpdateRequestDataRelationshipsTeamsDataItemsType",
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
    return ScheduleUpdateRequestDataRelationshipsTeamsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
