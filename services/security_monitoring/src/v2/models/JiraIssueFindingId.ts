import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class JiraIssueFindingId {
  /**
   * Timestamp when the finding was discovered.
   */
  "discovered": number;
  /**
   * Identifier of the finding.
   */
  "id": string;
  /**
   * Resource associated with the finding.
   */
  "resource": string;
  /**
   * Tags associated with the finding.
   */
  "tags": string;
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
    discovered: {
      baseName: "discovered",
      type: "number",
      required: true,
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    resource: {
      baseName: "resource",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
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
    return JiraIssueFindingId.attributeTypeMap;
  }

  public constructor() {}
}
