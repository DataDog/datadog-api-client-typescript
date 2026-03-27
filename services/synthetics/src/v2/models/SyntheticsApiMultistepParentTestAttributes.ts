import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a parent API multistep test.
 */
export class SyntheticsApiMultistepParentTestAttributes {
  /**
   * The name of the child subtest.
   */
  "childName"?: string;
  /**
   * The public ID of the child subtest.
   */
  "childPublicId"?: string;
  /**
   * The associated monitor ID.
   */
  "monitorId"?: number;
  /**
   * Name of the parent test.
   */
  "name"?: string;
  /**
   * The overall state of the parent test.
   */
  "overallState"?: number;
  /**
   * Timestamp of when the overall state was last modified.
   */
  "overallStateModified"?: string;
  /**
   * The public ID of the parent test.
   */
  "publicId"?: string;
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
    childName: {
      baseName: "child_name",
      type: "string",
    },
    childPublicId: {
      baseName: "child_public_id",
      type: "string",
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    overallState: {
      baseName: "overall_state",
      type: "number",
      format: "int64",
    },
    overallStateModified: {
      baseName: "overall_state_modified",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
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
    return SyntheticsApiMultistepParentTestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
