/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsLabelSchema } from "./LLMObsLabelSchema";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema defining the labels for an annotation queue.
 */
export class LLMObsAnnotationSchema {
  /**
   * List of label schema definitions.
   */
  "labelSchemas": Array<LLMObsLabelSchema>;

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
    labelSchemas: {
      baseName: "label_schemas",
      type: "Array<LLMObsLabelSchema>",
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
    return LLMObsAnnotationSchema.attributeTypeMap;
  }

  public constructor() {}
}
