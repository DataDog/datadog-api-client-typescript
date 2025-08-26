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
    attributes: {
      baseName: "attributes",
      type: "ScalarFormulaResponseAtrributes",
    },
    type: {
      baseName: "type",
      type: "ScalarFormulaResponseType",
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
    return ScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
