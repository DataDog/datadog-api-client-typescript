/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LicensesListResponseDataAttributes } from "./LicensesListResponseDataAttributes";
import { LicensesListResponseDataType } from "./LicensesListResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object in a licenses list response, containing the list of SPDX licenses.
 */
export class LicensesListResponseData {
  /**
   * The attributes of the licenses list response, containing the array of SPDX licenses.
   */
  "attributes": LicensesListResponseDataAttributes;
  /**
   * The unique identifier for this licenses list response.
   */
  "id": string;
  /**
   * The type identifier for license list responses.
   */
  "type": LicensesListResponseDataType;

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
      type: "LicensesListResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LicensesListResponseDataType",
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
    return LicensesListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
