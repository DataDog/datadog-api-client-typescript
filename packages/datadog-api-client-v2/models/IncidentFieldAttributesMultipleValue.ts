/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentFieldAttributesValueType } from "./IncidentFieldAttributesValueType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A field with potentially multiple values selected.
 */
export class IncidentFieldAttributesMultipleValue {
  /**
   * Type of the multiple value field definitions.
   */
  "type"?: IncidentFieldAttributesValueType;
  /**
   * The multiple values selected for this field.
   */
  "value"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "IncidentFieldAttributesValueType",
    },
    value: {
      baseName: "value",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentFieldAttributesMultipleValue.attributeTypeMap;
  }

  public constructor() {}
}
