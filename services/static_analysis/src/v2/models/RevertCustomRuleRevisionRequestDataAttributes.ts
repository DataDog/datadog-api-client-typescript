import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class RevertCustomRuleRevisionRequestDataAttributes {
  /**
   * Current revision ID
   */
  "currentRevision"?: string;
  /**
   * Target revision ID to revert to
   */
  "revertToRevision"?: string;
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
    currentRevision: {
      baseName: "currentRevision",
      type: "string",
    },
    revertToRevision: {
      baseName: "revertToRevision",
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
    return RevertCustomRuleRevisionRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
