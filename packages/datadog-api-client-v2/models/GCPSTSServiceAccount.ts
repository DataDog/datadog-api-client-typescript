/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPServiceAccountMeta } from "./GCPServiceAccountMeta";
import { GCPServiceAccountType } from "./GCPServiceAccountType";
import { GCPSTSServiceAccountAttributes } from "./GCPSTSServiceAccountAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Info on your service account.
 */
export class GCPSTSServiceAccount {
  /**
   * Attributes associated with your service account.
   */
  "attributes"?: GCPSTSServiceAccountAttributes;
  /**
   * Your service account's unique ID.
   */
  "id"?: string;
  /**
   * Additional information related to your service account.
   */
  "meta"?: GCPServiceAccountMeta;
  /**
   * The type of account.
   */
  "type"?: GCPServiceAccountType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "GCPSTSServiceAccountAttributes",
    },
    id: {
      type: "string",
    },
    meta: {
      type: "GCPServiceAccountMeta",
    },
    type: {
      type: "GCPServiceAccountType",
    },
  };
}
