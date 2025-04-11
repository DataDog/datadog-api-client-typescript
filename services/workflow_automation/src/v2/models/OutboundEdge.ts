import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `OutboundEdge` object.
 */
export class OutboundEdge {
  /**
   * The `OutboundEdge` `branchName`.
   */
  "branchName": string;
  /**
   * The `OutboundEdge` `nextStepName`.
   */
  "nextStepName": string;
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
    branchName: {
      baseName: "branchName",
      type: "string",
      required: true,
    },
    nextStepName: {
      baseName: "nextStepName",
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
    return OutboundEdge.attributeTypeMap;
  }

  public constructor() {}
}
