/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRetentionFiltersOrderData } from "./RumRetentionFiltersOrderData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The list of RUM retention filter IDs along with their corresponding type to reorder.
 * All retention filter IDs should be included in the list created for a RUM application.
 */
export class RumRetentionFiltersOrderRequest {
  /**
   * A list of RUM retention filter IDs along with type.
   */
  "data"?: Array<RumRetentionFiltersOrderData>;

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
      type: "Array<RumRetentionFiltersOrderData>",
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
    return RumRetentionFiltersOrderRequest.attributeTypeMap;
  }

  public constructor() {}
}
