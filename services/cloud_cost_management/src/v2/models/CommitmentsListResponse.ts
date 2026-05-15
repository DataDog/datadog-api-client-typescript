import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsListItem } from "./CommitmentsListItem";
import { CommitmentsListMeta } from "./CommitmentsListMeta";

/**
 * Response containing a list of cloud commitment details.
 */
export class CommitmentsListResponse {
  /**
   * Array of commitment items.
   */
  "commitments": Array<CommitmentsListItem>;
  /**
   * Metadata for a commitments list response.
   */
  "meta"?: CommitmentsListMeta;
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
    commitments: {
      baseName: "commitments",
      type: "Array<CommitmentsListItem>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CommitmentsListMeta",
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
    return CommitmentsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
