/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AccountAttributes } from "./AccountAttributes";
import { MetaInfo } from "./MetaInfo";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Your Google Cloud Platform STS enabled service accounts.
 */
export class GCPSTSAccounts {
  /**
   * Attributes associated with your service account.
   */
  "attributes"?: AccountAttributes;
  /**
   * Your service account's unique ID.
   */
  "id"?: string;
  /**
   * Additional information related to your service account.
   */
  "meta"?: MetaInfo;
  /**
   * The type of account.
   */
  "type"?: string;

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
      type: "AccountAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "MetaInfo",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GCPSTSAccounts.attributeTypeMap;
  }

  public constructor() {}
}
