/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A warning message indicating something that went wrong with the query.
 */
export class RUMWarning {
  /**
   * A unique code for this type of warning.
   */
  "code"?: string;
  /**
   * A detailed explanation of this specific warning.
   */
  "detail"?: string;
  /**
   * A short human-readable summary of the warning.
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
      type: "string",
    },
    detail: {
      type: "string",
    },
    title: {
      type: "string",
    },
  };
}
