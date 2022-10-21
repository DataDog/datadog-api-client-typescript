/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentFieldAttributesSingleValueType } from "./IncidentFieldAttributesSingleValueType";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A field with a single value selected.
 */
export class IncidentFieldAttributesSingleValue {
  /**
   * Type of the single value field definitions.
   */
  "type"?: IncidentFieldAttributesSingleValueType;
  /**
   * The single value selected for this field.
   */
  "value"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "IncidentFieldAttributesSingleValueType",
    },
    value: {
      baseName: "value",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentFieldAttributesSingleValue.attributeTypeMap;
  }

  public constructor() {}
}
