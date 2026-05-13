/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagKeyDetails } from "./CostTagKeyDetails";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Cloud Cost Management tag key.
 */
export class CostTagKeyAttributes {
  /**
   * Additional details for a Cloud Cost Management tag key, including its description and example tag values.
   */
  "details"?: CostTagKeyDetails;
  /**
   * List of sources that define this tag key.
   */
  "sources": Array<string>;
  /**
   * The tag key name.
   */
  "value": string;

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
    details: {
      baseName: "details",
      type: "CostTagKeyDetails",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
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
    return CostTagKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
