/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleUserAttributes } from "./ScheduleUserAttributes";
import { ScheduleUserType } from "./ScheduleUserType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a user object in the context of a schedule, including their `id`, type, and basic attributes.
 */
export class ScheduleUser {
  /**
   * Provides basic user information for a schedule, including a name and email address.
   */
  "attributes"?: ScheduleUserAttributes;
  /**
   * The unique user identifier.
   */
  "id"?: string;
  /**
   * Users resource type.
   */
  "type": ScheduleUserType;

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
      type: "ScheduleUserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ScheduleUserType",
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
    return ScheduleUser.attributeTypeMap;
  }

  public constructor() {}
}
