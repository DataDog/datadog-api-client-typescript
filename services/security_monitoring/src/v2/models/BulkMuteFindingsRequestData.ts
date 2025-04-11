import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkMuteFindingsRequestAttributes } from "./BulkMuteFindingsRequestAttributes";
import { BulkMuteFindingsRequestMeta } from "./BulkMuteFindingsRequestMeta";
import { FindingType } from "./FindingType";

/**
 * Data object containing the new bulk mute properties of the finding.
 */
export class BulkMuteFindingsRequestData {
  /**
   * The mute properties to be updated.
   */
  "attributes": BulkMuteFindingsRequestAttributes;
  /**
   * UUID to identify the request
   */
  "id": string;
  /**
   * Meta object containing the findings to be updated.
   */
  "meta": BulkMuteFindingsRequestMeta;
  /**
   * The JSON:API type for findings.
   */
  "type": FindingType;
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
      type: "BulkMuteFindingsRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "BulkMuteFindingsRequestMeta",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FindingType",
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
    return BulkMuteFindingsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
