/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagKeyMetadata } from "./CostTagKeyMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of Cloud Cost Management tag key metadata entries for the requested period.
 */
export class CostTagKeyMetadataResponse {
  /**
   * List of tag key metadata entries.
   */
  "data": Array<CostTagKeyMetadata>;

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
      type: "Array<CostTagKeyMetadata>",
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
    return CostTagKeyMetadataResponse.attributeTypeMap;
  }

  public constructor() {}
}
