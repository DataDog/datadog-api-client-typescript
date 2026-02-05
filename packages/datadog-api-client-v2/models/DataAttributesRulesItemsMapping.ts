/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataAttributesRulesItemsIfTagExists } from "./DataAttributesRulesItemsIfTagExists";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `DataAttributesRulesItemsMapping` object.
 */
export class DataAttributesRulesItemsMapping {
  /**
   * The `mapping` `destination_key`.
   */
  "destinationKey": string;
  /**
   * Deprecated. Use `if_tag_exists` instead. The `mapping` `if_not_exists`.
   */
  "ifNotExists"?: boolean;
  /**
   * The behavior when the tag already exists.
   */
  "ifTagExists"?: DataAttributesRulesItemsIfTagExists;
  /**
   * The `mapping` `source_keys`.
   */
  "sourceKeys": Array<string>;

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
    destinationKey: {
      baseName: "destination_key",
      type: "string",
      required: true,
    },
    ifNotExists: {
      baseName: "if_not_exists",
      type: "boolean",
    },
    ifTagExists: {
      baseName: "if_tag_exists",
      type: "DataAttributesRulesItemsIfTagExists",
    },
    sourceKeys: {
      baseName: "source_keys",
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
    return DataAttributesRulesItemsMapping.attributeTypeMap;
  }

  public constructor() {}
}
