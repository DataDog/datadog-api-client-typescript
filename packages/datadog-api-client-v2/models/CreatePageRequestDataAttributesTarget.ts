/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageTargetType } from "./OnCallPageTargetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information about the target to notify (such as a team or user).
 */
export class CreatePageRequestDataAttributesTarget {
  /**
   * Identifier for the target (for example, team handle or user ID).
   */
  "identifier"?: string;
  /**
   * The kind of target, `team_id` | `team_handle` | `user_id`.
   */
  "type"?: OnCallPageTargetType;

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
    identifier: {
      baseName: "identifier",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "OnCallPageTargetType",
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
    return CreatePageRequestDataAttributesTarget.attributeTypeMap;
  }

  public constructor() {}
}
