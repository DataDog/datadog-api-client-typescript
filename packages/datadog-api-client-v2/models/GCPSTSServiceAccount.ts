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
      type: "GCPSTSServiceAccountAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "GCPServiceAccountMeta",
    },
    type: {
      baseName: "type",
      type: "GCPServiceAccountType",
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
    return GCPSTSServiceAccount.attributeTypeMap;
  }

  public constructor() {}
}
