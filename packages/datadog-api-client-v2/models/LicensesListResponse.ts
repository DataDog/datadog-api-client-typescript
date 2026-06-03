/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LicensesListResponseData } from "./LicensesListResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The top-level response object returned by the licenses list endpoint, containing the array of supported SPDX licenses.
 */
export class LicensesListResponse {
  /**
   * The data object in a licenses list response, containing the list of SPDX licenses.
   */
  "data": LicensesListResponseData;

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
      type: "LicensesListResponseData",
      required: true,
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
    return LicensesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
