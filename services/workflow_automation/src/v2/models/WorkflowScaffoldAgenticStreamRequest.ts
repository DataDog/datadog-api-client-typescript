import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatMessage } from "./ChatMessage";
import { UserContext } from "./UserContext";

export class WorkflowScaffoldAgenticStreamRequest {
  /**
   * Previous chat messages for iterative workflow generation.
   */
  "chatHistory"?: Array<ChatMessage>;
  /**
   * The existing workflow specification to modify.
   */
  "existingWorkflow"?: any;
  /**
   * The previous action taken in the workflow generation.
   */
  "previousAction"?: string;
  "userContext"?: UserContext;
  /**
   * The user's prompt for generating or modifying the workflow.
   */
  "userPrompt": string;
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
    chatHistory: {
      baseName: "chatHistory",
      type: "Array<ChatMessage>",
    },
    existingWorkflow: {
      baseName: "existingWorkflow",
      type: "any",
    },
    previousAction: {
      baseName: "previousAction",
      type: "string",
    },
    userContext: {
      baseName: "userContext",
      type: "UserContext",
    },
    userPrompt: {
      baseName: "userPrompt",
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
    return WorkflowScaffoldAgenticStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
