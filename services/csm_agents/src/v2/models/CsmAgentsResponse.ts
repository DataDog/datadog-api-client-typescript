import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmAgentData } from "./CsmAgentData";
import { CSMAgentsMetadata } from "./CSMAgentsMetadata";

/**
 * Response object that includes a list of CSM Agents.
 */
export class CsmAgentsResponse {
  /**
   * A list of Agents.
   */
  "data"?: Array<CsmAgentData>;
  /**
   * Metadata related to the paginated response.
   */
  "meta"?: CSMAgentsMetadata;
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
    data: {
      baseName: "data",
      type: "Array<CsmAgentData>",
    },
    meta: {
      baseName: "meta",
      type: "CSMAgentsMetadata",
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
    return CsmAgentsResponse.attributeTypeMap;
  }

  public constructor() {}
}
