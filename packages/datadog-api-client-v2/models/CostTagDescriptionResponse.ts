/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagDescription } from "./CostTagDescription";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Single Cloud Cost Management tag key description returned by the get-by-key endpoint.
 */
export class CostTagDescriptionResponse {
  /**
   * A Cloud Cost Management tag key description, either cross-cloud or scoped to a single cloud provider.
   */
  "data": CostTagDescription;

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
      type: "CostTagDescription",
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
    return CostTagDescriptionResponse.attributeTypeMap;
  }

  public constructor() {}
}
