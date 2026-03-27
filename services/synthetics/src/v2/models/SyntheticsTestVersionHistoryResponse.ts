import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestVersionChangeData } from "./SyntheticsTestVersionChangeData";
import { SyntheticsTestVersionHistoryMeta } from "./SyntheticsTestVersionHistoryMeta";

/**
 * Response containing the paginated version history for a Synthetic test.
 */
export class SyntheticsTestVersionHistoryResponse {
  /**
   * List of version change records.
   */
  "data"?: Array<SyntheticsTestVersionChangeData>;
  /**
   * Pagination metadata for a version history response.
   */
  "meta"?: SyntheticsTestVersionHistoryMeta;
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
      type: "Array<SyntheticsTestVersionChangeData>",
    },
    meta: {
      baseName: "meta",
      type: "SyntheticsTestVersionHistoryMeta",
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
    return SyntheticsTestVersionHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
