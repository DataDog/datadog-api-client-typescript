/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeRunAsPrincipalType } from "./DowntimeRunAsPrincipalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A principal (user, role, or team) allowed to act on behalf of the downtime.
 */
export class DowntimeRunAsPrincipal {
  /**
   * The ID of the principal.
   */
  "id": string;
  /**
   * The type of principal allowed to act on behalf of the downtime.
   */
  "type": DowntimeRunAsPrincipalType;

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
      type: "DowntimeRunAsPrincipalType",
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
    return DowntimeRunAsPrincipal.attributeTypeMap;
  }

  public constructor() {}
}
