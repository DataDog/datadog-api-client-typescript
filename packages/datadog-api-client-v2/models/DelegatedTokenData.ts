/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DelegatedTokenAttributes } from "./DelegatedTokenAttributes";
import { DelegatedTokenType } from "./DelegatedTokenType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A delegated token resource.
 */
export class DelegatedTokenData {
  /**
   * Attributes of a delegated token.
   */
  "attributes": DelegatedTokenAttributes;
  /**
   * A random UUID assigned to this token issuance.
   */
  "id": string;
  /**
   * The resource type for a delegated token.
   */
  "type": DelegatedTokenType;

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
      type: "DelegatedTokenAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "DelegatedTokenType",
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
    return DelegatedTokenData.attributeTypeMap;
  }

  public constructor() {}
}
