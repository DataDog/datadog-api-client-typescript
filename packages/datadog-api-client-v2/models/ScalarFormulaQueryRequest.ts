/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScalarFormulaRequest } from "./ScalarFormulaRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A wrapper request around one scalar query to be executed.
 */
export class ScalarFormulaQueryRequest {
  /**
   * A single scalar query to be executed.
   */
  "data": ScalarFormulaRequest;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "ScalarFormulaRequest",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScalarFormulaQueryRequest.attributeTypeMap;
  }

  public constructor() {}
}
