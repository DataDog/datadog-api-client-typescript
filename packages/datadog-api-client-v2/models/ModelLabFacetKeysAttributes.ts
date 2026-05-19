/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Available facet key names for filtering resources.
 */
export class ModelLabFacetKeysAttributes {
  /**
   * The list of available metric facet keys.
   */
  "metrics": Array<string> | null;
  /**
   * The list of available parameter facet keys.
   */
  "parameters": Array<string>;
  /**
   * The list of available tag facet keys.
   */
  "tags": Array<string>;

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
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
      required: true,
    },
    parameters: {
      baseName: "parameters",
      type: "Array<string>",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return ModelLabFacetKeysAttributes.attributeTypeMap;
  }

  public constructor() {}
}
