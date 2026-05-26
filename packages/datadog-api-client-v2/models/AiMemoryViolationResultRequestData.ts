/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiMemoryViolationResultDataType } from "./AiMemoryViolationResultDataType";
import { AiMemoryViolationResultRequestAttributes } from "./AiMemoryViolationResultRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request data for creating an AI memory violation result.
 */
export class AiMemoryViolationResultRequestData {
  /**
   * Attributes for creating an AI memory violation result.
   */
  "attributes"?: AiMemoryViolationResultRequestAttributes;
  /**
   * The violation result identifier.
   */
  "id"?: string;
  /**
   * AI memory violation result resource type.
   */
  "type"?: AiMemoryViolationResultDataType;

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
    attributes: {
      baseName: "attributes",
      type: "AiMemoryViolationResultRequestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiMemoryViolationResultDataType",
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
    return AiMemoryViolationResultRequestData.attributeTypeMap;
  }

  public constructor() {}
}
