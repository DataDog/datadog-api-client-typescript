/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A user referenced from a dashboard usage record (author or viewer).
 */
export class DashboardUsageUser {
  /**
   * Datadog handle (login) of the user.
   */
  "handle"?: string;
  /**
   * The user ID.
   */
  "id"?: string;
  /**
   * Whether the user account is disabled.
   */
  "isDisabled"?: boolean;
  /**
   * Display name of the user.
   */
  "name"?: string;

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
    handle: {
      baseName: "handle",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isDisabled: {
      baseName: "is_disabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return DashboardUsageUser.attributeTypeMap;
  }

  public constructor() {}
}
