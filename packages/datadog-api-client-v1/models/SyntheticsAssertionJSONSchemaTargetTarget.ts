/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAssertionJSONSchemaMetaSchema } from "./SyntheticsAssertionJSONSchemaMetaSchema";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Composed target for `validatesJSONSchema` operator.
 */
export class SyntheticsAssertionJSONSchemaTargetTarget {
  /**
   * The JSON Schema to assert.
   */
  "jsonSchema"?: string;
  /**
   * The JSON Schema meta-schema version used in the assertion.
   */
  "metaSchema"?: SyntheticsAssertionJSONSchemaMetaSchema;

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
    jsonSchema: {
      baseName: "jsonSchema",
      type: "string",
    },
    metaSchema: {
      baseName: "metaSchema",
      type: "SyntheticsAssertionJSONSchemaMetaSchema",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsAssertionJSONSchemaTargetTarget.attributeTypeMap;
  }

  public constructor() {}
}
