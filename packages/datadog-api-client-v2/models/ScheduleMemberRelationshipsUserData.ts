/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleMemberRelationshipsUserDataType } from "./ScheduleMemberRelationshipsUserDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Points to the user data associated with this schedule member, including an ID and type.
 */
export class ScheduleMemberRelationshipsUserData {
  /**
   * The user's unique identifier.
   */
  "id"?: string;
  /**
   * Users resource type.
   */
  "type"?: ScheduleMemberRelationshipsUserDataType;

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
      type: "ScheduleMemberRelationshipsUserDataType",
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
    return ScheduleMemberRelationshipsUserData.attributeTypeMap;
  }

  public constructor() {}
}
