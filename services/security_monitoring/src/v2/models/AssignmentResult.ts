import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Per-finding outcome of an assign or unassign operation.
 */
export class AssignmentResult {
  /**
   * Human-readable explanation of the outcome.
   */
  "detail": string;
  /**
   * Unique identifier of the security finding.
   */
  "findingId": string;
  /**
   * HTTP-like status code describing the outcome for this finding.
   */
  "status": number;
  /**
   * Short label describing the outcome for this finding.
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
    detail: {
      baseName: "detail",
      type: "string",
      required: true,
    },
    findingId: {
      baseName: "finding_id",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "number",
      required: true,
      format: "int32",
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
    return AssignmentResult.attributeTypeMap;
  }

  public constructor() {}
}
