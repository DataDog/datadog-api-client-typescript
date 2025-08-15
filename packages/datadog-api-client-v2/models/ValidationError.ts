/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ValidationErrorMeta } from "./ValidationErrorMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a single validation error, including a human-readable title and metadata.
 */
export class ValidationError {
  /**
   * Describes additional metadata for validation errors, including field names and error messages.
   */
  "meta": ValidationErrorMeta;
  /**
   * A short, human-readable summary of the error.
   */
  "title": string;

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
    meta: {
      baseName: "meta",
      type: "ValidationErrorMeta",
      required: true,
    },
    title: {
      baseName: "title",
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
    return ValidationError.attributeTypeMap;
  }

  public constructor() {}
}
