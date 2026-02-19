/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestIncludedItem } from "./ChangeRequestIncludedItem";
import { ChangeRequestResponseData } from "./ChangeRequestResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for a change request.
 */
export class ChangeRequestResponse {
  /**
   * Data object for a change request response.
   */
  "data": ChangeRequestResponseData;
  /**
   * Included resources related to the change request.
   */
  "included"?: Array<ChangeRequestIncludedItem>;

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
      type: "ChangeRequestResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<ChangeRequestIncludedItem>",
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
    return ChangeRequestResponse.attributeTypeMap;
  }

  public constructor() {}
}
