/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScalarFormulaResponseAtrributes } from "./ScalarFormulaResponseAtrributes";
import { ScalarFormulaResponseType } from "./ScalarFormulaResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A message containing the response to a scalar query.
 */
export class ScalarResponse {
  /**
   * The object describing a scalar response.
   */
  "attributes"?: ScalarFormulaResponseAtrributes;
  /**
   * The type of the resource. The value should always be scalar_response.
   */
  "type"?: ScalarFormulaResponseType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "ScalarFormulaResponseAtrributes",
    },
    type: {
      type: "ScalarFormulaResponseType",
    },
  };
}
