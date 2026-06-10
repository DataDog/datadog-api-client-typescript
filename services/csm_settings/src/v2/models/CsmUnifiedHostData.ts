import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmUnifiedHostAttributes } from "./CsmUnifiedHostAttributes";
import { CsmUnifiedHostType } from "./CsmUnifiedHostType";

/**
 * A single unified host resource, combining agent and agentless data.
 */
export class CsmUnifiedHostData {
  /**
   * Attributes of a unified host, combining data from agent and agentless sources.
   */
  "attributes": CsmUnifiedHostAttributes;
  /**
   * The resource identifier of the unified host.
   */
  "id": string;
  /**
   * The JSON:API type for unified host resources. The value should always be `unified_host`.
   */
  "type": CsmUnifiedHostType;
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
    attributes: {
      baseName: "attributes",
      type: "CsmUnifiedHostAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CsmUnifiedHostType",
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
    return CsmUnifiedHostData.attributeTypeMap;
  }

  public constructor() {}
}
