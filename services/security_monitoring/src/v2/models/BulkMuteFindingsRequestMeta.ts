import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkMuteFindingsRequestMetaFindings } from "./BulkMuteFindingsRequestMetaFindings";

/**
 * Meta object containing the findings to be updated.
 */
export class BulkMuteFindingsRequestMeta {
  /**
   * Array of findings.
   */
  "findings"?: Array<BulkMuteFindingsRequestMetaFindings>;
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
    findings: {
      baseName: "findings",
      type: "Array<BulkMuteFindingsRequestMetaFindings>",
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
    return BulkMuteFindingsRequestMeta.attributeTypeMap;
  }

  public constructor() {}
}
