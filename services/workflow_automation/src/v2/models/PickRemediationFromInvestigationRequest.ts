import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClientType } from "./ClientType";
import { StabilityLevel } from "./StabilityLevel";

export class PickRemediationFromInvestigationRequest {
  /**
   * The client type for action filtering.
   */
  "client"?: ClientType;
  /**
   * List of integrations to filter actions by.
   */
  "integrations"?: Array<string>;
  /**
   * The investigation text to extract remediation keywords from.
   */
  "investigation": string;
  /**
   * The number of keyword variants to generate.
   */
  "numberOfKeywordVariants"?: number;
  /**
   * The number of relevant actions to return per keyword.
   */
  "numberOfRelevantActions": number;
  /**
   * The stability level for action filtering.
   */
  "stability"?: StabilityLevel;
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
    integrations: {
      baseName: "integrations",
      type: "Array<string>",
    },
    investigation: {
      baseName: "investigation",
      type: "string",
      required: true,
    },
    numberOfKeywordVariants: {
      baseName: "number_of_keyword_variants",
      type: "number",
      format: "int64",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PickRemediationFromInvestigationRequest.attributeTypeMap;
  }

  public constructor() {}
}
