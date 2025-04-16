/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTargetType } from "./UserTargetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a user target for an escalation policy step, including the user's ID and resource type.
 */
export class UserTarget {
  /**
   * Specifies the unique identifier of the user resource.
   */
  "id": string;
  /**
   * Indicates that the resource is of type `users`.
   */
  "type": UserTargetType;

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
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserTargetType",
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
    return UserTarget.attributeTypeMap;
  }

  public constructor() {}
}
