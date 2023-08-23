/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of errors.
 */
export class HTTPCIAppError {
  /**
   * Error message.
   */
  "detail"?: string;
  /**
   * Error code.
   */
  "status"?: string;
  /**
   * Error title.
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
    detail: {
      type: "string",
    },
    status: {
      type: "string",
    },
    title: {
      type: "string",
    },
  };
}
