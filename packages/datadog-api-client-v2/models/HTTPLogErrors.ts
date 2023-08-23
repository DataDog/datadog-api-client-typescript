/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HTTPLogError } from "./HTTPLogError";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Invalid query performed.
 */
export class HTTPLogErrors {
  /**
   * Structured errors.
   */
  "errors"?: Array<HTTPLogError>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    errors: {
      type: "Array<HTTPLogError>",
    },
  };
}
