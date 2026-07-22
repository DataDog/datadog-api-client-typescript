import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmAgentlessHostFacetAttributes } from "./CsmAgentlessHostFacetAttributes";
import { CsmUnifiedHostFacetType } from "./CsmUnifiedHostFacetType";

/**
 * A single unified host facet resource.
 */
export class CsmUnifiedHostFacetData {
  /**
   * Attributes of an agentless host facet.
   */
  "attributes": CsmAgentlessHostFacetAttributes;
  /**
   * The identifier of the facet, corresponding to the field path.
   */
  "id": string;
  /**
   * The JSON:API type for unified host facet resources. The value should always be `unified_host_facet`.
   */
  "type": CsmUnifiedHostFacetType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "CsmAgentlessHostFacetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CsmUnifiedHostFacetType",
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
    return CsmUnifiedHostFacetData.attributeTypeMap;
  }

  public constructor() {}
}
