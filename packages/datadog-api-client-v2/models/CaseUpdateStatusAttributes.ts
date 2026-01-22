/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseStatus } from "./CaseStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case update status attributes
 */
export class CaseUpdateStatusAttributes {
  /**
   * Deprecated way of representing the case status, which only supports OPEN, IN_PROGRESS, and CLOSED statuses. Use `status_name` instead.
   */
  "status"?: CaseStatus;
  /**
   * Status of the case. Must be one of the existing statuses for the case's type.
   */
  "statusName"?: string;

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
    status: {
      baseName: "status",
      type: "CaseStatus",
    },
    statusName: {
      baseName: "status_name",
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
    return CaseUpdateStatusAttributes.attributeTypeMap;
  }

  public constructor() {}
}
