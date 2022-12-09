/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Warning message indicating something that went wrong with the query.
 */
export class AuditLogsWarning {
  /**
   * Unique code for this type of warning.
   */
  "code"?: string;
  /**
   * Detailed explanation of this specific warning.
   */
  "detail"?: string;
  /**
   * Short human-readable summary of the warning.
   */
  "title"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    code: {
      baseName: "code",
      type: "string",
    },
    detail: {
      baseName: "detail",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditLogsWarning.attributeTypeMap;
  }

  public constructor() {}
}
