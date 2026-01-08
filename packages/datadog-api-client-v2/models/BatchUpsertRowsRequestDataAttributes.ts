/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BatchUpsertRowsRequestDataAttributesValue } from "./BatchUpsertRowsRequestDataAttributesValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes containing row data values for row creation or update operations.
 */
export class BatchUpsertRowsRequestDataAttributes {
  /**
   * Key-value pairs representing row data, where keys are schema field names and values match the corresponding column types.
   */
  "values": { [key: string]: BatchUpsertRowsRequestDataAttributesValue };

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
    values: {
      baseName: "values",
      type: "{ [key: string]: BatchUpsertRowsRequestDataAttributesValue; }",
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
    return BatchUpsertRowsRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
