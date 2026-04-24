import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * RUM application context associated with a step or sub-test.
 */
export class SyntheticsTestResultRumContext {
  /**
   * RUM application identifier.
   */
  "applicationId"?: string;
  /**
   * RUM session identifier.
   */
  "sessionId"?: string;
  /**
   * RUM view identifier.
   */
  "viewId"?: string;
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
    applicationId: {
      baseName: "application_id",
      type: "string",
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
    },
    viewId: {
      baseName: "view_id",
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
    return SyntheticsTestResultRumContext.attributeTypeMap;
  }

  public constructor() {}
}
