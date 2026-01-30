import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class WorkflowHeadlessExecutionConnection {
  /**
   * The ID of the connection
   */
  "connectionId": string;
  /**
   * The label for the connection
   */
  "label": string;
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
    connectionId: {
      baseName: "connection_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    label: {
      baseName: "label",
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
    return WorkflowHeadlessExecutionConnection.attributeTypeMap;
  }

  public constructor() {}
}
