/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Explicit tag operations for updating records. Operations are applied in order, Remove then Add then Set. `set` is the final override; if specified, the result of `remove` and `add` is discarded.
 */
export class LLMObsDatasetRecordTagOperations {
  /**
   * List of tag strings.
   */
  "add"?: Array<string>;
  /**
   * List of tag strings.
   */
  "remove"?: Array<string>;
  /**
   * List of tag strings.
   */
  "set"?: Array<string>;

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
    add: {
      baseName: "add",
      type: "Array<string>",
    },
    remove: {
      baseName: "remove",
      type: "Array<string>",
    },
    set: {
      baseName: "set",
      type: "Array<string>",
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
    return LLMObsDatasetRecordTagOperations.attributeTypeMap;
  }

  public constructor() {}
}
