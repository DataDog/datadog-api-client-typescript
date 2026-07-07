/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a user authorized client.
 */
export class UserAuthorizedClientAttributes {
  /**
   * The date and time this authorization was created.
   */
  "createdAt": Date;
  /**
   * Whether the user has disabled this authorization.
   */
  "disabled": boolean;
  /**
   * The date and time this authorization was last exercised.
   */
  "lastExercised": Date | null;
  /**
   * The date and time this authorization was last modified.
   */
  "modifiedAt": Date;
  /**
   * Whether the organization has disabled this authorization.
   */
  "orgDisabled": boolean;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    disabled: {
      baseName: "disabled",
      type: "boolean",
      required: true,
    },
    lastExercised: {
      baseName: "last_exercised",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    orgDisabled: {
      baseName: "org_disabled",
      type: "boolean",
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
    return UserAuthorizedClientAttributes.attributeTypeMap;
  }

  public constructor() {}
}
