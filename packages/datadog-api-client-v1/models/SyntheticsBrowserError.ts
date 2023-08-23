/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserErrorType } from "./SyntheticsBrowserErrorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Error response object for a browser test.
 */
export class SyntheticsBrowserError {
  /**
   * Description of the error.
   */
  "description": string;
  /**
   * Name of the error.
   */
  "name": string;
  /**
   * Status Code of the error.
   */
  "status"?: number;
  /**
   * Error type returned by a browser test.
   */
  "type": SyntheticsBrowserErrorType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    status: {
      type: "number",
      format: "int64",
    },
    type: {
      type: "SyntheticsBrowserErrorType",
      required: true,
    },
  };
}
