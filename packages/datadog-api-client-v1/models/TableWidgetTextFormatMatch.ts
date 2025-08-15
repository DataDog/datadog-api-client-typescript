/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableWidgetTextFormatMatchType } from "./TableWidgetTextFormatMatchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Match rule for the table widget text format.
 */
export class TableWidgetTextFormatMatch {
  /**
   * Match or compare option.
   */
  "type": TableWidgetTextFormatMatchType;
  /**
   * Table Widget Match String.
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
    type: {
      baseName: "type",
      type: "TableWidgetTextFormatMatchType",
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
    return TableWidgetTextFormatMatch.attributeTypeMap;
  }

  public constructor() {}
}
