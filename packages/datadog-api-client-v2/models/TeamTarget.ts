/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamTargetType } from "./TeamTargetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a team target for an escalation policy step, including the team's ID and resource type.
 */
export class TeamTarget {
  /**
   * Specifies the unique identifier of the team resource.
   */
  "id": string;
  /**
   * Indicates that the resource is of type `teams`.
   */
  "type": TeamTargetType;

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
      type: "TeamTargetType",
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
    return TeamTarget.attributeTypeMap;
  }

  public constructor() {}
}
