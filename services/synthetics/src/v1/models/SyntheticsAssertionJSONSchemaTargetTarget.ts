import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAssertionJSONSchemaMetaSchema } from "./SyntheticsAssertionJSONSchemaMetaSchema";

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
      type: "{ [key: string]: any; }",
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
