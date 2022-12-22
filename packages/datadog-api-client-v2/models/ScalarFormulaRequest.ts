/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScalarFormulaRequestAttributes } from "./ScalarFormulaRequestAttributes";
import { ScalarFormulaRequestType } from "./ScalarFormulaRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single scalar query to be executed.
 */
export class ScalarFormulaRequest {
  /**
   * The object describing a scalar formula request.
   */
  "attributes": ScalarFormulaRequestAttributes;
  /**
   * The type of the resource. The value should always be scalar_request.
   */
  "type": ScalarFormulaRequestType;

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
      type: "ScalarFormulaRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ScalarFormulaRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScalarFormulaRequest.attributeTypeMap;
  }

  public constructor() {}
}
