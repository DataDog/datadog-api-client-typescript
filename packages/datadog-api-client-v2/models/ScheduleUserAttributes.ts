/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserAttributesStatus } from "./UserAttributesStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Provides basic user information for a schedule, including a name and email address.
 */
export class ScheduleUserAttributes {
  /**
   * The user's email address.
   */
  "email"?: string;
  /**
   * The user's name.
   */
  "name"?: string;
  /**
   * The user's status.
   */
  "status"?: UserAttributesStatus;

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
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "UserAttributesStatus",
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
    return ScheduleUserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
