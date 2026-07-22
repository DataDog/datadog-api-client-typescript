/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LatestVersionMatchPolicy } from "./LatestVersionMatchPolicy";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




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
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "etag": {
      "baseName": "etag",
      "type": "string",
    },
    "insertOnly": {
      "baseName": "insert_only",
      "type": "boolean",
    },
    "matchPolicy": {
      "baseName": "match_policy",
      "type": "LatestVersionMatchPolicy",
      "required": true,
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

  public constructor() {











  }
}









