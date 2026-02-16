import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClientType } from "./ClientType";
import { StabilityLevel } from "./StabilityLevel";

export class PickActionRequest {
  /**
   * The client type for action filtering.
   */
  "client"?: ClientType;
  /**
   * The number of relevant actions to return.
   */
  "numberOfRelevantActions": number;
  /**
   * The stability level for action filtering.
   */
  "stability"?: StabilityLevel;
  /**
   * The user's prompt to find relevant actions.
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
    client: {
      baseName: "client",
      type: "ClientType",
    },
    numberOfRelevantActions: {
      baseName: "number_of_relevant_actions",
      type: "number",
      required: true,
      format: "int64",
    },
    stability: {
      baseName: "stability",
      type: "StabilityLevel",
    },
    userPrompt: {
      baseName: "user_prompt",
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
    return PickActionRequest.attributeTypeMap;
  }

  public constructor() {}
}
