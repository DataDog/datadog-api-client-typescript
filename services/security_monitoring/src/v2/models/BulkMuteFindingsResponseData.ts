import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FindingType } from "./FindingType";

/**
 * Data object containing the ID of the request that was updated.
 */
export class BulkMuteFindingsResponseData {
  /**
   * UUID used to identify the request
   */
  "id"?: string;
  /**
   * The JSON:API type for findings.
   */
  "type"?: FindingType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FindingType",
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
    return BulkMuteFindingsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
