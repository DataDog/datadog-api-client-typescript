import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LatestVersionMatchPolicy } from "./LatestVersionMatchPolicy";

/**
 * Concurrency control parameters for the form version upsert operation.
 */
export class UpsertFormVersionUpsertParams {
  /**
   * The ETag of the latest version. Required when `match_policy` is `if_etag_match`.
   */
  "etag"?: string;
  /**
   * If true, only a new version may be inserted; updating the current draft is not allowed.
   */
  "insertOnly"?: boolean;
  /**
   * The policy for matching the latest form version during an upsert operation.
   */
  "matchPolicy": LatestVersionMatchPolicy;
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
    etag: {
      baseName: "etag",
      type: "string",
    },
    insertOnly: {
      baseName: "insert_only",
      type: "boolean",
    },
    matchPolicy: {
      baseName: "match_policy",
      type: "LatestVersionMatchPolicy",
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
    return UpsertFormVersionUpsertParams.attributeTypeMap;
  }

  public constructor() {}
}
