/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScalarResponse } from "./ScalarResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A message containing one or more responses to scalar queries.
 */
export class ScalarFormulaQueryResponse {
  /**
   * A message containing the response to a scalar query.
   */
  "data"?: ScalarResponse;
  /**
   * An error generated when processing a request.
   */
  "errors"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "ScalarResponse",
    },
    errors: {
      type: "string",
    },
  };
}
