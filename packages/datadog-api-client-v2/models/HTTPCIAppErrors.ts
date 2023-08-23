/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HTTPCIAppError } from "./HTTPCIAppError";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Errors occurred.
 */
export class HTTPCIAppErrors {
  /**
   * Structured errors.
   */
  "errors"?: Array<HTTPCIAppError>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    errors: {
      type: "Array<HTTPCIAppError>",
    },
  };
}
