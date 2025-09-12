/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryCostUpsertRequestData } from "./ArbitraryCostUpsertRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ArbitraryCostUpsertRequest` object.
 */
export class ArbitraryCostUpsertRequest {
  /**
   * The definition of `ArbitraryCostUpsertRequestData` object.
   */
  "data"?: ArbitraryCostUpsertRequestData;

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
    data: {
      baseName: "data",
      type: "ArbitraryCostUpsertRequestData",
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
    return ArbitraryCostUpsertRequest.attributeTypeMap;
  }

  public constructor() {}
}
